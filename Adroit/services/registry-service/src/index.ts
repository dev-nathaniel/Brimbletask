import 'dotenv/config';
import Fastify from 'fastify';
import { connect } from 'nats';
import { createServiceLogger, errorHandler, AppError } from '@adroit/utils';
import { loadRegistryConfig } from '@adroit/config';
import { HarborClient } from './services/harbor.js';

const log = createServiceLogger('registry-service');

async function main() {
  const config = loadRegistryConfig();

  const app = Fastify({ logger: false });
  app.setErrorHandler(errorHandler);

  const harbor = new HarborClient();

  app.get('/health', async () => ({ status: 'ok', service: 'registry-service' }));

  // Connect to NATS JetStream
  await connect({ servers: config.NATS_URL });
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  // Endpoint to create project mapping (called by Project Service when creating a project)
  app.post('/api/v1/registry/projects', async (request: any) => {
    const { projectName } = request.body;
    if (!projectName) throw new AppError('projectName required', 400, 'BAD_REQUEST');
    
    await harbor.ensureProject(projectName, false);
    return { success: true, projectName };
  });

  // Endpoint to issue a pull robot secret for deployment
  app.post('/api/v1/registry/robots', async (request: any) => {
    const { projectName } = request.body;
    if (!projectName) throw new AppError('projectName required', 400, 'BAD_REQUEST');
    
    const robotName = `deployer-${Math.random().toString(36).substring(7)}`;
    const robot: any = await harbor.createRobotAccount(projectName, robotName);
    return { 
      success: true, 
      username: robot.name,
      secret: robot.secret
    };
  });

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Registry Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Registry Service');
  process.exit(1);
});
