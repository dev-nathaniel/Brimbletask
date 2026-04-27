import 'dotenv/config';
import Fastify from 'fastify';
import { connect, StringCodec } from 'nats';
import { createServiceLogger } from '@adroit/utils';
import { loadBuildConfig } from '@adroit/config';
import { BuildEngine } from './services/builder.js';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('build-service');

async function main() {
  const config = loadBuildConfig();

  const app = Fastify({ logger: false });

  app.get('/health', async () => ({ status: 'ok', service: 'build-service' }));

  // Connect to NATS JetStream
  const nc = await connect({ servers: config.NATS_URL });
  const jsm = await nc.jetstreamManager();
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  // Create stream if it doesn't exist
  const streamName = 'BUILDS';
  try {
    await jsm.streams.info(streamName);
  } catch (err) {
    if ((err as Error).message.includes('stream not found')) {
      await jsm.streams.add({
        name: streamName,
        subjects: ['builds.*'],
      });
      log.info(`Created NATS stream: ${streamName}`);
    } else {
      throw err;
    }
  }

  // Basic subscriber for queued builds
  const sub = nc.subscribe('builds.queued');
  const sc = StringCodec();
  const buildEngine = new BuildEngine();
  const db = getProjectsDb();
  
  (async () => {
    for await (const m of sub) {
      let payload;
      try {
        payload = JSON.parse(sc.decode(m.data));
        const buildId = payload.buildId;
        log.info({ buildId, projectId: payload.projectId }, '[BUILD_FLOW] Starting build processing');
        
        // Manual failure trigger for notification testing
        if (payload.failBuild) {
          throw new Error('MOCK_BUILD_FAILURE: Manual test trigger activated');
        }

        const project = await db.project.findUnique({ where: { id: payload.projectId } });
        if (!project) throw new Error('Project not found');
        
        if (project.sourceType === 'GITHUB' && !project.repositoryUrl) {
          throw new Error('Project repository missing for GITHUB source');
        }
        
        if (project.sourceType === 'UPLOAD' && !project.sourceUrl) {
          throw new Error('Project source URL missing for UPLOAD source');
        }

        // Notify started
        nc.publish('builds.started', sc.encode(JSON.stringify({ buildId, projectId: payload.projectId, timestamp: new Date() })));
        
        const buildPath = await buildEngine.setupEnv(buildId);
        
        // Log forwarding
        const onLog = (chunk: string) => {
          const timestamp = new Date().toISOString();
          const lines = chunk.split('\n').filter(l => l.trim().length > 0);
          for (const line of lines) {
            nc.publish(`build.logs.${buildId}`, sc.encode(`[${timestamp}] ${line}\n`));
          }
        };

        onLog('--- Build Engine Started ---\n');

        // Prepare source code (Clone or Download/Extract)
        await buildEngine.prepareSource(project, payload.gitToken || 'fake-token', payload.branch || project.defaultBranch || 'main', buildPath, onLog);

        // [AUTO-DETECT] Check for static export hints
        const hints = await buildEngine.detectFrameworkHints(buildPath, onLog);
        if (hints) {
          const updateData: any = {};
          if (hints.buildCommand) {
            onLog(`[AUTO-DETECT] Suggesting build command: ${hints.buildCommand}\n`);
            updateData.buildCommand = hints.buildCommand;
          }
          if (hints.startCommand) {
            onLog(`[AUTO-DETECT] Applying optimized start command: ${hints.startCommand}\n`);
            updateData.startCommand = hints.startCommand;
          }

          if (Object.keys(updateData).length > 0) {
            await db.deploymentConfig.update({
              where: { projectId: payload.projectId },
              data: updateData
            });
          }
        }

        // Perform deep project analysis (info -> plan)
        await buildEngine.generateDockerfile(buildPath, onLog);
        
        // Railpack native build based on analysis
        // Force an immutable tag by appending the buildId guarantee
        const commitSnippet = payload.commitSha?.slice(0, 7) || 'manual';
        const imageTag = `localhost:8080/adroit/${project.slug}:${commitSnippet}-${buildId.slice(0, 8)}`;
        await buildEngine.buildDockerImage(buildPath, imageTag, onLog, true);
        
        // Push to local registry so Nomad can pull it
        await buildEngine.pushImage(imageTag, onLog);

        nc.publish('builds.succeeded', sc.encode(JSON.stringify({ 
          buildId, 
          projectId: payload.projectId,
          imageTag,
          timestamp: new Date() 
        })));
        onLog('--- Build Succeeded ---\n');

      } catch (e: any) {
        log.error({ err: e }, 'Failed to process build event');
        if (payload?.buildId && payload?.projectId) {
          nc.publish('builds.failed', sc.encode(JSON.stringify({ 
            buildId: payload.buildId, 
            projectId: payload.projectId,
            error: e.message,
            timestamp: new Date() 
          })));
          nc.publish(`build.logs.${payload.buildId}`, sc.encode(`\n[FATAL] ${e.message}\n`));
        }
      } finally {
        if (payload?.buildId) {
          await buildEngine.cleanup(payload.buildId);
        }
      }
    }
  })().catch(err => log.error(err));

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Build Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Build Service');
  process.exit(1);
});
