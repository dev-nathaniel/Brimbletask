import 'dotenv/config';
import Fastify from 'fastify';
import { connect } from 'nats';
import { createServiceLogger, errorHandler, AppError, decrypt } from '@adroit/utils';
import { loadRuntimeConfig } from '@adroit/config';
import { getProjectsDb } from '@adroit/db';
import { NomadProvider } from './services/nomad-provider.js';
import { DockerProvider } from './services/docker-provider.js';
import { RuntimeProvider } from './services/runtime-provider.js';
import IORedis from 'ioredis';

const log = createServiceLogger('runtime-service');

async function main() {
  const config = loadRuntimeConfig();
  log.info({ NOMAD_ADDR: config.NOMAD_ADDR, CONSUL_ADDR: config.CONSUL_ADDR }, 'Config loaded');
  const app = Fastify({ logger: false });
  app.setErrorHandler(errorHandler);

  const db = getProjectsDb();
  const sc = { encode: (s: string) => Buffer.from(s) };

  // 1. Runtime Providers
  const nomadProvider = new NomadProvider();
  const dockerProvider = new DockerProvider();

  // Helper to dynamically select provider (allows fallback if Nomad goes down)
  let lastProvider: RuntimeProvider | null = null;
  let lastCheckTime = 0;

  const getRuntime = async () => {
    const now = Date.now();
    // Cache the selection for 5 seconds to prevent excessive pings
    if (lastProvider && (now - lastCheckTime < 5000)) {
      return lastProvider;
    }

    const envRuntime = process.env['DEPLOYMENT_RUNTIME'];
    if (envRuntime === 'docker') {
      lastProvider = dockerProvider;
    } else {
      try {
        const res = await fetch(`${config.NOMAD_ADDR}/v1/agent/self`, { signal: AbortSignal.timeout(1000) });
        if (res.ok) {
          lastProvider = nomadProvider;
        } else {
          lastProvider = dockerProvider;
        }
      } catch (err: any) {
        log.debug({ msg: err.message }, 'Nomad unreachable, using Docker fallback');
        lastProvider = dockerProvider;
      }
    }
    
    lastCheckTime = now;
    return lastProvider;
  };

  const redis = new IORedis.default(process.env['REDIS_URL'] || 'redis://localhost:6379');
  const REDIS_WATCH_KEY = 'adroit:runtime:watched_deployments';

  // Helper to manage watched deployments in Redis
  const setWatchedMeta = async (projectId: string, meta: any) => {
    await redis.hset(REDIS_WATCH_KEY, projectId, JSON.stringify(meta));
  };

  const deleteWatchedMeta = async (projectId: string) => {
    await redis.hdel(REDIS_WATCH_KEY, projectId);
  };

  const getAllWatched = async () => {
    const data = await redis.hgetall(REDIS_WATCH_KEY);
    return Object.entries(data).reduce((acc, [k, v]) => {
      acc[k] = JSON.parse(v);
      return acc;
    }, {} as Record<string, any>);
  };

  app.get('/health', async () => ({ status: 'ok', service: 'runtime-service' }));

  // Connect to NATS JetStream
  const nc = await connect({ servers: config.NATS_URL });
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  // Apply a new job deployment (called by Deployment Service internally)
  app.post('/api/v1/runtime/jobs', async (request: any) => {
    try {
      const { projectId, imageTag, buildId } = request.body;
      if (!projectId || !imageTag) throw new AppError('projectId and imageTag required', 400, 'BAD_REQUEST');

      // 1. Fetch project & deployment config & env variables to inject
      const project = await db.project.findUnique({ where: { id: projectId } });
      if (!project) throw new AppError('Project not found', 404, 'NOT_FOUND');

      const deployConfig = await db.deploymentConfig.findUnique({ where: { projectId } });
      if (!deployConfig) throw new AppError('Deployment config not found', 404, 'NOT_FOUND');

      const envVarsRecords = await db.environmentVariable.findMany({
        where: {
          environment: { projectId: projectId }
        }
      });

      log.info({ projectId, count: envVarsRecords.length }, 'Fetched environment variables from DB');

      // 3. Prepare Environment & appPort for logging
      const Envs = envVarsRecords.reduce((acc, curr) => {
        let val = curr.encryptedValue;
        try {
          val = decrypt(curr.encryptedValue);
        } catch (err) {
          log.warn({ key: curr.key }, 'Failed to decrypt env var, using raw value');
        }

        const hostIp = process.env['ADROIT_HOST_IP'] || 'host.docker.internal';
        if (val.includes('localhost')) {
          val = val.replace(/localhost/g, hostIp);
        }

        acc[curr.key] = val;
        return acc;
      }, {} as Record<string, string>);

      const appPort = parseInt(Envs['PORT'] || '3000');
      Envs['PORT'] = appPort.toString();
      Envs['HOST'] = '0.0.0.0'; 
      Envs['ADROIT_DEPLOYMENT_TIME'] = new Date().toISOString();

      const runtime = await getRuntime();
      log.info({ projectId, appPort, provider: runtime.name }, "Submitting job to runtime");

      const result = await runtime.submitJob({
        projectId,
        slug: project.slug,
        imageTag,
        buildId,
        deployConfig,
        envVars: Envs
      });
      
      // Start watching this project for health
      await setWatchedMeta(projectId, { 
        startTime: Date.now(), 
        buildId
      });
      if (buildId) {
        nc.publish(`build.logs.${buildId}`, sc.encode(`[${new Date().toISOString()}] [Deployment] Status: Deployment submitted to ${runtime.name} provider...`));
      }
      log.info({ projectId, buildId }, 'Job submitted, added to Redis health watch list');

      return { success: true, result };
    } catch (err: any) {
      log.error({ err, stack: err.stack }, 'Failed to submit job to runtime');
      throw err;
    }
  });

  // Scale a job's instance count
  app.patch('/api/v1/runtime/jobs/:projectId/scale', async (request: any) => {
    const { projectId } = request.params;
    const { count } = request.body;
    
    log.info({ projectId, count, body: request.body }, 'Scale request received');
    
    if (typeof count !== 'number') throw new AppError('count must be a number', 400, 'BAD_REQUEST');
    
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    try {
      // 1. Update DB first to keep record in sync
      await db.deploymentConfig.update({
        where: { projectId },
        data: { instanceCount: count }
      });

      // 2. Tell provider to scale the group
      const runtime = await getRuntime();
      await runtime.scaleJob(projectId, count);
      
      log.info(`Scaled project-${safeJobId} to ${count} instances`);
      return { success: true, count };
    } catch (err) {
      log.error({ err }, 'Failed to scale job');
      throw err;
    }
  });

  // Stop and purge a job (called during project deletion)
  app.delete('/api/v1/runtime/jobs/:projectId', async (request: any) => {
    const { projectId } = request.params;
    try {
      const runtime = await getRuntime();
      await runtime.stopJob(projectId);
      await deleteWatchedMeta(projectId);
      log.info(`Project ${projectId} stopped and purged`);
      return { success: true, message: 'Job stopped and purged' };
    } catch (err: any) {
      if (err.status === 404) {
        return { success: true, message: 'Job already stopped or not found' };
      }
      throw err;
    }
  });

  // Revert a job natively (Nomad) or via re-deploy (Docker)
  app.post('/api/v1/runtime/jobs/:projectId/revert', async (request: any) => {
    const { projectId } = request.params;
    const { imageTag, buildId } = request.body;
    
    try {
      const runtime: RuntimeProvider = await getRuntime();
      
      // If provider has native rollback (Nomad), use it
      if (runtime.name === 'nomad') {
        const result = await runtime.revertJob?.(projectId, imageTag, buildId);
        if (result) {
          log.info(`Project ${projectId} reverted via Nomad`);
          if (buildId) {
            nc.publish(`build.logs.${buildId}`, sc.encode(`[${new Date().toISOString()}] [Deployment] Status: Reverting via Nomad...`));
          }
          await setWatchedMeta(projectId, { startTime: Date.now(), buildId, lastStatus: 'Reverting...' });
          return { success: true, message: `Reverted to ${imageTag}` };
        }
      }

      // Fallback: Re-deploy the old version (Docker zero-downtime path)
      log.info({ projectId, imageTag }, 'Reverting via re-deploy (Docker path)');
      
      const project = await db.project.findUnique({ where: { id: projectId } });
      if (!project) throw new AppError('Project not found', 404, 'NOT_FOUND');

      const deployConfig = await db.deploymentConfig.findUnique({ where: { projectId } });
      if (!deployConfig) throw new AppError('Deployment config not found', 404, 'NOT_FOUND');

      // Fetch env vars (same as submitJob)
      const envVarsRecords = await db.environmentVariable.findMany({
        where: { environment: { projectId } }
      });
      const Envs = envVarsRecords.reduce((acc, curr) => {
        try { acc[curr.key] = decrypt(curr.encryptedValue); } catch { acc[curr.key] = curr.encryptedValue; }
        return acc;
      }, {} as Record<string, string>);
      
      Envs['ADROIT_ROLLBACK'] = 'true';
      Envs['ADROIT_DEPLOYMENT_TIME'] = new Date().toISOString();

      await runtime.submitJob({
        projectId,
        slug: project.slug,
        imageTag,
        buildId,
        deployConfig,
        envVars: Envs
      });

      if (buildId) {
        nc.publish(`build.logs.${buildId}`, sc.encode(`[${new Date().toISOString()}] [Deployment] Status: Rolling back via re-deployment (Docker)...`));
      }
      await setWatchedMeta(projectId, { startTime: Date.now(), buildId, lastStatus: 'Rolling back...' });
      return { success: true, message: `Rollback triggered to ${imageTag}` };
    } catch (err: any) {
      log.error({ err }, 'Failed to revert job');
      throw err;
    }
  });
  
  // Resource usage stats (CPU/Memory)
  app.get('/api/v1/runtime/stats/:projectId', async (request: any) => {
    const { projectId } = request.params;
    // 1. Fetch stats from provider
    const runtime = await getRuntime();
    const stats = await runtime.getStats(projectId);

    return {
      projectId,
      cpuPercent: stats.cpuPercent,
      memoryBytes: stats.memoryBytes,
      instances: stats.instances
    };
  });

  // Log streaming API proxy
  app.get('/api/v1/runtime/logs/:projectId', async (request: any, _reply) => {
    const { projectId } = request.params;
    const { type = 'stdout' } = request.query;
    
    // Fetch logs from provider
    const runtime = await getRuntime();
    const logs = await runtime.getLogs(projectId, type as any);
    
    return logs;
  });

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Runtime Service running on port ${config.PORT}`);

  const lastLogOffset: Record<string, number> = {};

  setInterval(async () => {
    try {
      const projects = await db.project.findMany({
        include: { 
          environments: { take: 1, orderBy: { createdAt: 'desc' } },
          deployments: { take: 1, orderBy: { createdAt: 'desc' } } 
        }
      });

      for (const project of projects) {
        const latestDeploy = project.deployments[0];
        if (!latestDeploy || latestDeploy.status !== 'success') continue;

        try {
          const runtime = await getRuntime();
          const result = await runtime.getLogs(project.id, 'stdout');
          const lines = result.lines;
          
          const prevOffset = lastLogOffset[project.id] || 0;
          if (lines.length > prevOffset) {
            const newLines = lines.slice(prevOffset);
            const timestamp = new Date().toISOString();
            for (const line of newLines) {
              const subject = `runtime.logs.${project.id}.${latestDeploy.id}`;
              nc.publish(subject, sc.encode(`[${timestamp}] ${line}`));
            }
            lastLogOffset[project.id] = lines.length;
          } else if (lines.length < prevOffset) {
            lastLogOffset[project.id] = lines.length;
          }
        } catch (err) {
          // Silent fail for inactive jobs
        }
      }
    } catch (err) {
      log.error({ err }, 'Error in log tailing loop');
    }
  }, 3000);

  // 5. Deployment Health Monitoring & Reconciliation
  setInterval(async () => {
    const watched = await getAllWatched();
    if (Object.keys(watched).length === 0) return;

    for (const [projectId, meta] of Object.entries(watched)) {
      const now = Date.now();
      
      // TTL check (only for PENDING deployments)
      // Once it's healthy, we keep watching indefinitely (Steady State)
      if (!meta.lastStatus?.includes('healthy') && now - meta.startTime > 600000) {
        log.warn({ projectId }, 'Deployment health watch timed out (10m TTL)');
        nc.publish('deployments.failed', sc.encode(JSON.stringify({
          projectId,
          status: 'failed',
          error: 'Deployment timed out (Exceeded 10 minute threshold)',
          timestamp: new Date()
        })));
        await deleteWatchedMeta(projectId);
        continue;
      }

      try {
        const runtime = await getRuntime();
        const health = await runtime.checkDeploymentHealth(projectId);

        // 1. REPORT STATUS CHANGES (Wait for status change before logging)
        const currentDescription = health.description || (health.status === 'success' ? 'healthy' : health.status);
        
        // We only log if the description changed OR if it's the first time we're seeing it
        // AND we don't want to SPAM "healthy" or "Container is healthy" if already successful
        const isSteadyStateSuccess = (health.status === 'success' && meta.lastStatus === 'healthy');

        if (meta.buildId && currentDescription !== meta.lastStatus && !isSteadyStateSuccess) {
           const logSubject = `build.logs.${meta.buildId}`;
           const timestamp = new Date().toISOString();
           const message = `[${timestamp}] [Deployment] Status: ${currentDescription}`;
           nc.publish(logSubject, sc.encode(message));
           await setWatchedMeta(projectId, { ...meta, lastStatus: currentDescription });
        }
        
        log.info({ projectId, status: health.status, description: health.description }, `Checking ${runtime.name} deployment health`);

        if (health.status === 'success') {
          // Only publish success events if we weren't already healthy
          if (meta.lastStatus !== 'healthy') {
            log.info({ projectId }, 'Deployment successful!');
            
            if (meta.buildId) {
               nc.publish(`build.logs.${meta.buildId}`, sc.encode(`[${new Date().toISOString()}] [Deployment] Rollout successful`));
            }

            nc.publish('deployments.succeeded', sc.encode(JSON.stringify({
              projectId,
              status: 'success',
              timestamp: new Date()
            })));
          }

          // We NO LONGER delete from watchedMeta on success.
          // We keep it there for continuous orchestration/self-healing.
          // IMPORTANT: Set lastStatus to 'healthy' to mark steady state
          await setWatchedMeta(projectId, { ...meta, lastStatus: 'healthy' });
        } else if (health.status === 'failed') {
          const errorMsg = health.error || 'Deployment failed';

          // ORCHESTRATION RECOVERY LOGIC (Docker Only for now)
          const isRuntimeFailure = errorMsg.includes('stopped') || 
                                  errorMsg.includes('not found') || 
                                  errorMsg.includes('missing') || 
                                  errorMsg.includes('No containers found') ||
                                  errorMsg.includes('exited');

          if (runtime.name === 'docker' && isRuntimeFailure) {
            log.warn({ projectId }, 'Container missing or stopped, attempting recovery...');
            try {
              // 1. TRY RESTART: Attempt to restart existing container first (more efficient)
              const project = await db.project.findUnique({ where: { id: projectId } });
              const res = await runtime.submitJob({
                projectId,
                slug: project?.slug || '',
                imageTag: '', // Provider will try to find and start latest existing
                deployConfig: {} as any,
                envVars: {}
              });

              if (res.success) {
                log.info({ projectId }, 'Recovery restart successful');
                continue; // Keep watching
              }
            } catch (restartErr) {
              log.debug({ projectId, err: (restartErr as any).message }, 'Restart failed, attempting full re-creation...');
              
              // 2. FALLBACK: Re-create from DB if restart failed (e.g. container was deleted)
              try {
                const latestDeploy = await db.deployment.findFirst({
                  where: { projectId, status: 'success' },
                  orderBy: { createdAt: 'desc' }
                });

                if (latestDeploy) {
                  const deployConfig = await db.deploymentConfig.findUnique({ where: { projectId } });
                  const envVarsRecords = await db.environmentVariable.findMany({
                    where: { environment: { projectId: projectId } }
                  });
                  const Envs = envVarsRecords.reduce((acc, curr) => {
                    try { acc[curr.key] = decrypt(curr.encryptedValue); } catch { acc[curr.key] = curr.encryptedValue; }
                    return acc;
                  }, {} as Record<string, string>);

                  log.info({ projectId, imageTag: latestDeploy.imageTag }, 'Re-creating missing container for recovery');
                  await runtime.submitJob({
                    projectId,
                    slug: (await db.project.findUnique({ where: { id: projectId } }))?.slug || '',
                    imageTag: latestDeploy.imageTag,
                    buildId: latestDeploy.buildId,
                    deployConfig: deployConfig as any,
                    envVars: Envs
                  });
                  
                  log.info({ projectId }, 'Recovery re-creation triggered');
                  continue; 
                }
              } catch (recreationErr) {
                log.error({ recreationErr }, 'Recovery re-creation failed');
              }
            }
          }

          log.warn({ projectId, error: errorMsg }, 'Deployment failed!');
          if (meta.buildId) {
            nc.publish(`build.logs.${meta.buildId}`, sc.encode(`[${new Date().toISOString()}] [Deployment] Rollout failed: ${errorMsg}`));
          }

          nc.publish('deployments.failed', sc.encode(JSON.stringify({
            projectId,
            status: 'failed',
            error: errorMsg,
            timestamp: new Date()
          })));
          await deleteWatchedMeta(projectId);
        }
      } catch (err) {
        log.error({ err, projectId }, 'Error monitoring deployment health');
      }
    }
  }, 5000);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Runtime Service');
  process.exit(1);
});
