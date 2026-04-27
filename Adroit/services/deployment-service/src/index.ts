import 'dotenv/config';
import Fastify from 'fastify';
import { connect, StringCodec } from 'nats';
import { createServiceLogger, errorHandler, AppError, successResponse } from '@adroit/utils';
import { loadDeploymentConfig } from '@adroit/config';
import { DeployOrchestrator } from './services/deployOrchestrator.js';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('deployment-service');

async function main() {
  const config = loadDeploymentConfig();
  const app = Fastify({ logger: false });
  app.setErrorHandler(errorHandler);

  const db = getProjectsDb();
  const orchestrator = new DeployOrchestrator();

  app.get('/health', async () => ({ status: 'ok', service: 'deployment-service' }));

  // GET /api/v1/deployments/:projectId — List project deployments
  app.get<{ Params: { projectId: string }, Querystring: { page?: string, perPage?: string } }>(
    '/api/v1/deployments/:projectId',
    async (request) => {
      const { projectId } = request.params;
      const { page = '1', perPage = '10' } = request.query;
      const pageNum = parseInt(page, 10);
      const perPageNum = parseInt(perPage, 10);

      const [deployments, total] = await Promise.all([
        db.deployment.findMany({
          where: { projectId },
          skip: (pageNum - 1) * perPageNum,
          take: perPageNum,
          orderBy: { createdAt: 'desc' },
        }),
        db.deployment.count({ where: { projectId } }),
      ]);

      return successResponse({
        deployments,
        pagination: {
          page: pageNum,
          perPage: perPageNum,
          total,
          totalPages: Math.ceil(total / perPageNum),
        }
      });
    }
  );

  // POST /api/v1/deployments/:projectId/rollback/:identifier — Rollback to a specific deployment or build ID
  app.post<{ Params: { projectId: string, identifier: string } }>(
    '/api/v1/deployments/:projectId/rollback/:identifier',
    async (request) => {
      const { projectId, identifier } = request.params;

      // Allow rolling back via either Deployment ID or Exact Build ID
      const deployment = await db.deployment.findFirst({
        where: { 
          projectId,
          OR: [
            { id: identifier },
            { buildId: identifier }
          ]
        }
      });

      if (!deployment) throw new AppError('Deployment or Build ID not found', 404, 'NOT_FOUND');

      log.info({ projectId, identifier, imageTag: deployment.imageTag }, 'Initiating rollback');

      // 1. Trigger Native Nomad Revert first (Validation check)
      // If this fails (e.g. "can't revert to current version"), no record is created.
      try {
        await orchestrator.revertDeployment(projectId, deployment.imageTag, deployment.buildId);
      } catch (err: any) {
        log.error({ err, projectId }, 'Nomad revert rejected');
        throw err; // Bubbles up to toaster
      }

      // 2. Create the NEW deployment record ONLY if Nomad accepted the instruction
      const newDeployment = await db.deployment.create({
        data: {
          id: `dep_rb_${Date.now()}`,
          projectId,
          buildId: deployment.buildId,
          imageTag: deployment.imageTag,
          status: 'deploying',
          url: deployment.url
        }
      });

      return successResponse({ 
        message: 'Native revert initiated', 
        deploymentId: newDeployment.id,
        projectId: newDeployment.projectId,
        buildId: newDeployment.buildId
      });
    }
  );

  // Connect to NATS JetStream
  const nc = await connect({ servers: config.NATS_URL });
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  const sc = StringCodec();
  const buildSuccessSub = nc.subscribe('builds.succeeded');
  const buildFailSub = nc.subscribe('builds.failed');

  // Handle Successes
  (async () => {
    for await (const m of buildSuccessSub) {
        try {
          const payload = JSON.parse(sc.decode(m.data));
          log.info({ payload }, '[STATUS_SYNC] Received build success event');
          
          // Find existing deployment record created by project-service
          let deployment = await db.deployment.findFirst({
            where: { buildId: payload.buildId },
            orderBy: { createdAt: 'desc' }
          });

          if (!deployment) {
            log.warn({ buildId: payload.buildId }, '[STATUS_SYNC] Record missing, creating fallback');
            
            const project = await db.project.findUnique({ where: { id: payload.projectId } });
            const slugIdentifier = project?.slug || payload.projectId;
            const safeSlug = slugIdentifier.toLowerCase().replace(/[^a-z0-9]/g, '');
            const generatedUrl = `http://${safeSlug}.localhost`;

            deployment = await db.deployment.create({
              data: {
                id: `dep_${Date.now()}`,
                projectId: payload.projectId,
                buildId: payload.buildId,
                imageTag: payload.imageTag,
                status: 'deploying',
                url: generatedUrl
              }
            });
          } else {
            log.info({ deploymentId: deployment.id }, '[STATUS_SYNC] Record found, updating to deploying');
            await db.deployment.update({
              where: { id: deployment.id },
              data: { 
                status: 'deploying',
                imageTag: payload.imageTag
              }
            });
          }

          // Notify started
          nc.publish('deployments.started', sc.encode(JSON.stringify({
            deploymentId: deployment.id,
            buildId: payload.buildId,
            projectId: payload.projectId,
            timestamp: new Date()
          })));

          // Orchestrate rollout
          try {
            await orchestrator.rolloutImage(payload.buildId, payload.projectId, payload.imageTag); 
            log.info({ deploymentId: deployment.id }, '[STATUS_SYNC] Rollout initiated, waiting for health confirmation from runtime');
            
            // NOTE: We no longer mark success here. 
            // We wait for runtime-service to emit deployments.succeeded after health checks pass.
          } catch (err: any) {
            log.error({ err, deploymentId: deployment.id }, '[STATUS_SYNC] Rollout initiation failed');
            await db.deployment.update({
              where: { id: deployment.id },
              data: { status: 'failed', error: err.message }
            });

            nc.publish('deployments.failed', sc.encode(JSON.stringify({
              deploymentId: deployment.id,
              projectId: payload.projectId,
              buildId: payload.buildId,
              status: 'failed',
              error: err.message
            })));
          }
        } catch (err: any) {
          log.error({ err }, 'Failed to process builds.succeeded event');
        }
      }
    })().catch(err => log.error(err));

  // Handle Failures
  (async () => {
    for await (const m of buildFailSub) {
      try {
        const payload = JSON.parse(sc.decode(m.data));
        log.info({ payload }, 'Received builds.failed event');
        
        // Record the failure in the database
        const deployment = await db.deployment.findFirst({
          where: { buildId: payload.buildId }
        });

        if (deployment) {
          await db.deployment.update({
            where: { id: deployment.id },
            data: { 
              status: 'failed',
              error: payload.error,
              imageTag: 'none'
            }
          });
        } else {
          await db.deployment.create({
            data: {
              id: `dep_err_${Date.now()}`,
              projectId: payload.projectId,
              buildId: payload.buildId,
              imageTag: 'none',
              status: 'failed',
              error: payload.error
            }
          });
        }
      } catch (err: any) {
        log.error({ err }, 'Failed to handle builds.failed event');
      }
    }
  })().catch(err => log.error(err));
  // Handle Successes from Runtime Health Check
  (async () => {
    const runtimeSuccessSub = nc.subscribe('deployments.succeeded');
    for await (const m of runtimeSuccessSub) {
      try {
        const payload = JSON.parse(sc.decode(m.data));
        log.info({ payload }, '[STATUS_SYNC] Runtime health check PASSED');

        const deployment = await db.deployment.findFirst({
          where: { projectId: payload.projectId, status: 'deploying' },
          orderBy: { createdAt: 'desc' }
        });

        if (deployment) {
          const safeJobId = payload.projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
          const finalUrl = deployment.url || `http://${safeJobId}.localhost`;

          await db.deployment.update({
            where: { id: deployment.id },
            data: { 
              status: 'success',
              url: finalUrl 
            }
          });
          
          await db.project.update({
            where: { id: payload.projectId },
            data: { url: finalUrl }
          });
        }
      } catch (err) {
        log.error({ err }, 'Failed to handle deployments.succeeded');
      }
    }
  })().catch(err => log.error(err));

  // Handle Failures from Runtime Health Check
  (async () => {
    const runtimeFailSub = nc.subscribe('deployments.failed');
    for await (const m of runtimeFailSub) {
      try {
        const payload = JSON.parse(sc.decode(m.data));
        log.warn({ payload }, '[STATUS_SYNC] Runtime health check FAILED');

        const deployment = await db.deployment.findFirst({
          where: { projectId: payload.projectId, status: 'deploying' },
          orderBy: { createdAt: 'desc' }
        });

        if (deployment) {
          await db.deployment.update({
            where: { id: deployment.id },
            data: { status: 'failed', error: payload.error }
          });
        }
      } catch (err) {
        log.error({ err }, 'Failed to handle deployments.failed');
      }
    }
  })().catch(err => log.error(err));

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Deployment Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Deployment Service');
  process.exit(1);
});
