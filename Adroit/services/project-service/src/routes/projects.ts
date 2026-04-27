import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import { createServiceLogger, successResponse, paginatedResponse, generateId, slugify, NotFoundError, encrypt } from '@adroit/utils';
import { getProjectsDb, getIdentityDb } from '@adroit/db';
import { loadProjectConfig } from '@adroit/config';
import { connect, StringCodec } from 'nats';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import { AppError } from '@adroit/utils';

const log = createServiceLogger('project-routes');

const createProjectSchema = z.object({
  name: z.string().min(2).max(100),
  teamId: z.string(),
  description: z.string().max(500).optional(),
  repositoryUrl: z.string().url().optional(),
  defaultBranch: z.string().default('main'),
  variables: z.array(z.object({
    key: z.string().min(1).max(256),
    value: z.string().max(65536),
    isSecret: z.boolean().default(false),
  })).optional(),
});

const updateProjectSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  description: z.string().max(500).optional(),
  repositoryUrl: z.string().url().optional(),
  defaultBranch: z.string().optional(),
});

export async function projectRoutes(app: FastifyInstance) {
  const db = getProjectsDb();
  const config = loadProjectConfig();

  // Connect to NATS
  const nc = await connect({ servers: config.NATS_URL });
  const sc = StringCodec();
  // GET /api/v1/projects?teamId=xxx
  app.addHook('preHandler', requireAuth);

  // GET /api/v1/projects?teamId=xxx
  app.get<{ Querystring: { teamId: string; page?: string; perPage?: string } }>(
    '/',
    async (request, reply) => {
      const { teamId, page = '1', perPage = '20' } = request.query;
      const pageNum = parseInt(page, 10);
      const perPageNum = parseInt(perPage, 10);

      const [projects, total] = await Promise.all([
        db.project.findMany({
          where: { teamId },
          skip: (pageNum - 1) * perPageNum,
          take: perPageNum,
          orderBy: { createdAt: 'desc' },
          include: {
            environments: {
              select: { id: true, name: true, type: true },
            },
            deployments: {
              // take: 1,
              orderBy: { updatedAt: 'desc' },
            },
          },
        }),
        db.project.count({ where: { teamId } }),
      ]);

      return reply.send(paginatedResponse(projects, pageNum, perPageNum, total));
    },
  );

  // POST /api/v1/projects
  app.post('/', async (request, reply) => {
    const body = createProjectSchema.parse(request.body);
    // 1. Check if ANY project exists with this slug (globally)
    let finalSlug = slugify(body.name);
    let isUnique = false;
    let attempts = 0;
    const preGeneratedId = generateId('prj');
    
    while (!isUnique && attempts < 10) {
      const existingProject = await db.project.findFirst({
        where: { slug: finalSlug }
      });

      if (!existingProject || (existingProject.teamId === body.teamId && existingProject.name === body.name)) {
        isUnique = true;
      } else {
        // Append random suffix to ensure global uniqueness for routing
        finalSlug = `${slugify(body.name)}-${crypto.randomBytes(2).toString('hex')}`;
        attempts++;
      }
    }

    // Failsafe: if still not unique after 10 trials, use the ID to guarantee uniqueness
    if (!isUnique) {
      finalSlug = `${slugify(body.name)}-${preGeneratedId.split('_')[1]!.slice(0, 8)}`;
    }

    const existingProject = await db.project.findFirst({
      where: { teamId: body.teamId, slug: finalSlug }
    });

    if (existingProject) {
      app.log.info({ projectId: existingProject.id, slug: finalSlug }, 'Project already exists, updating source if needed');
      
      const updatedProject = await db.project.update({
        where: { id: existingProject.id },
        data: {
          repositoryUrl: body.repositoryUrl || existingProject.repositoryUrl,
          defaultBranch: body.defaultBranch || existingProject.defaultBranch,
          sourceType: body.repositoryUrl ? 'GITHUB' : existingProject.sourceType,
          sourceUrl: body.repositoryUrl ? null : existingProject.sourceUrl
        }
      });

      // SYNC: Update the production environment's branch if project branch changed
      if (body.defaultBranch) {
        await db.environment.updateMany({
          where: { projectId: updatedProject.id, type: 'production' },
          data: { branch: body.defaultBranch }
        });
      }

      return reply.status(200).send(successResponse(updatedProject));
    }

    const project = await db.$transaction(async (tx) => {
      const newProject = await tx.project.create({
        data: {
          id: preGeneratedId,
          name: body.name,
          slug: finalSlug,
          teamId: body.teamId,
          description: body.description,
          repositoryUrl: body.repositoryUrl,
          defaultBranch: body.defaultBranch,
        },
      });

      // Auto-create production environment
      const env = await tx.environment.create({
        data: {
          id: generateId('env'),
          projectId: newProject.id,
          name: 'production',
          type: 'production',
          branch: body.defaultBranch,
          autoDeploy: true,
        },
      });

      // Inject initial environment variables if provided
      if (body.variables && body.variables.length > 0) {
        log.info({ projectId: newProject.id, count: body.variables.length }, 'Injecting initial environment variables');
        await Promise.all(body.variables.map(v => 
          tx.environmentVariable.create({
            data: {
              id: generateId('var'),
              environmentId: env.id,
              key: v.key.toUpperCase(),
              encryptedValue: encrypt(v.value),
              isSecret: v.isSecret,
            }
          })
        ));
      }

      // Auto-create default deployment configuration
      await tx.deploymentConfig.create({
        data: {
          id: generateId('dpc'),
          projectId: newProject.id,
        },
      });

      const vaultSync = (app as any).vaultSync;
      if (vaultSync && body.variables && body.variables.length > 0) {
        vaultSync.syncEnvironment(env.id).catch((err: any) => {
          log.error({ err, envId: env.id }, 'Failed to sync initial environment to Vault');
        });
      }

      return newProject;
    });

    // Auto-configure Webhook on GitHub if repository is provided
    if (body.repositoryUrl && request.headers.authorization) {
      try {
        const url = new URL(body.repositoryUrl);
        const parts = url.pathname.replace(/^\//, '').replace(/\.git$/, '').split('/');
        
        if (parts.length >= 2) {
          const owner = parts[0];
          const repo = parts[1];
          const config = loadProjectConfig();
          
          await fetch(`${config.GIT_INTEGRATION_URL}/api/v1/git/webhooks/configure`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': request.headers.authorization
            },
            body: JSON.stringify({ owner, repo })
          }).catch(e => {
            app.log.warn(`Failed to auto-configure webhook for ${owner}/${repo}: ${e}`);
          });
        }
      } catch (e) {
        app.log.warn(`Invalid repository URL provided, skipping webhook automation: ${e}`);
      }
    }

    return reply.status(201).send(successResponse(project));
  });

  // GET /api/v1/projects/:projectId
  app.get<{ Params: { projectId: string } }>('/:projectId', async (request, reply) => {
    const { projectId } = request.params;

    const project = await db.project.findUnique({
      where: { id: projectId },
      include: {
        environments: {
          include: {
            variables: {
              select: { id: true, key: true, isSecret: true, createdAt: true },
            },
          },
        },
        deployments: {
          orderBy: { updatedAt: 'desc' },
        },
      },
    });

    if (!project) {
      throw new NotFoundError('Project', projectId);
    }

    return reply.send(successResponse(project));
  });

  // POST /api/v1/projects/:projectId/deploy
  app.post<{ Params: { projectId: string }, Body: { gitToken?: string } }>('/:projectId/deploy', async (request, reply) => {
    try {
      const { projectId } = request.params;
      const { gitToken = 'manual-trigger' } = request.body;
      
      let usedToken = gitToken;
      if (usedToken === 'manual-trigger') {
        const idDb = getIdentityDb();
        try {
          const oauth = await idDb.oAuthAccount.findFirst({
            where: { provider: 'github' },
            orderBy: { createdAt: 'desc' }
          });
          if (oauth) {
            usedToken = oauth.accessToken;
            log.info({ projectId }, '[STATUS_SYNC] Using automatically discovered GitHub token from Identity DB');
          }
        } catch (err) {
          log.warn({ err }, 'Failed to fetch OAuth token from Identity DB, falling back to default');
        }
      }
      
      const project = await db.project.findUnique({
        where: { id: projectId }
      });

      if (!project) throw new NotFoundError('Project', projectId);

      // Re-check NATS
      if (nc.isClosed()) {
        log.warn('NATS connection closed, trying to send anyway (NATS might reconnect)');
      }

      const buildId = crypto.randomUUID();
      const safeSlug = project.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
      const deployedUrl = `http://${safeSlug}.localhost`;
      
      // Create deployment record immediately
      log.info({ buildId, projectId: project.id }, '[STATUS_SYNC] Creating initial pending deployment');
      const deployment = await db.deployment.create({
        data: {
          projectId: project.id,
          buildId: buildId,
          imageTag: 'pending',
          url: deployedUrl,
          status: 'pending'
        }
      });

      // Fire off the manual build request!
      log.info({ buildId, deploymentId: deployment.id }, '[STATUS_SYNC] Publishing builds.queued event');
      nc.publish('builds.queued', sc.encode(JSON.stringify({
        buildId,
        projectId: project.id,
        branch: project.defaultBranch,
        commitSha: 'manual', 
        gitToken: usedToken, 
        timestamp: new Date()
      })));

      return reply.status(202).send(successResponse({ 
        message: 'Deployment queued successfully',
        buildId: buildId,
        deploymentId: deployment.id,
        deployedUrl
      }));
    } catch (err: any) {
      log.error({ err, stack: err.stack }, 'FAILED_TO_TRIGGER_DEPLOYMENT');
      if (err.statusCode) throw err;
      return reply.status(500).send({
        success: false,
        error: { code: 'INTERNAL_ERROR', message: err.message }
      });
    }
  });

  // POST /api/v1/projects/:projectId/upload — Upload source code archive
  app.post<{ Params: { projectId: string } }>(
    '/:projectId/upload',
    async (request, reply) => {
      const { projectId } = request.params;
      const data = await request.file();
      if (!data) throw new AppError('No file uploaded', 400, 'BAD_REQUEST');

      const project = await db.project.findUnique({ where: { id: projectId } });
      if (!project) throw new NotFoundError('Project', projectId);

      const uploadDir = '/tmp/adroit-uploads';
      await fs.mkdir(uploadDir, { recursive: true });

      const fileName = `${projectId}-${Date.now()}-${data.filename}`;
      const uploadPath = path.join(uploadDir, fileName);

      // Save file
      await pipeline(data.file, createWriteStream(uploadPath));

      // Update project type and URL
      const sourceUrl = `file://${uploadPath}`; // Use file protocol for internal dev
      await db.project.update({
        where: { id: projectId },
        data: { 
          sourceType: 'UPLOAD',
          sourceUrl
        }
      });

      // Trigger build
      const buildId = crypto.randomUUID();
      log.info({ buildId, projectId }, '[UPLOAD] Triggering build for uploaded source');
      
      // Create deployment record
      const safeSlug = project.slug.toLowerCase().replace(/[^a-z0-9]/g, '');
      const deployedUrl = `http://${safeSlug}.localhost`;
      
      await db.deployment.create({
        data: {
          projectId: project.id,
          buildId: buildId,
          imageTag: 'pending',
          url: deployedUrl,
          status: 'pending'
        }
      });

      nc.publish('builds.queued', sc.encode(JSON.stringify({ 
        buildId, 
        projectId,
        timestamp: new Date()
      })));

      return reply.send(successResponse({ 
        message: 'Upload successful, build triggered',
        buildId,
        sourceUrl
      }));
    }
  );

  // PATCH /api/v1/projects/:projectId
  app.patch<{ Params: { projectId: string } }>('/:projectId', async (request, reply) => {
    const { projectId } = request.params;
    const body = updateProjectSchema.parse(request.body);

    const project = await db.project.update({
      where: { id: projectId },
      data: body,
    });

    return reply.send(successResponse(project));
  });

  // DELETE /api/v1/projects/:projectId
  app.delete<{ Params: { projectId: string } }>('/:projectId', async (request, reply) => {
    const { projectId } = request.params;

    const project = await db.project.findUnique({ where: { id: projectId } });
    if (!project) throw new NotFoundError('Project', projectId);

    // 1. Cleanup Vault secrets
    const vaultSync = (app as any).vaultSync;
    if (vaultSync) {
      await vaultSync.deleteProjectSecrets(project.teamId, project.id).catch((err: any) => {
        app.log.error({ err, projectId }, 'Failed to cleanup Vault secrets during project deletion');
      });
    }

    // 2. Stop Nomad jobs via Runtime Service
    try {
      await fetch(`${config.RUNTIME_SERVICE_URL}/api/v1/runtime/jobs/${projectId}`, {
        method: 'DELETE'
      });
    } catch (err) {
      app.log.warn({ err, projectId }, 'Failed to stop Nomad jobs during project deletion');
    }

    // 3. Delete from DB
    await db.project.delete({ where: { id: projectId } });
    
    return reply.send(successResponse({ message: 'Project and all associated resources deleted' }));
  });
}
