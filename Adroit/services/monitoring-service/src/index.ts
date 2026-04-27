import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { connect } from 'nats';
import { createServiceLogger, errorHandler, AppError } from '@adroit/utils';
import { loadManagedDatabaseConfig } from '@adroit/config';
import { HealthMonitor } from './services/monitor.js';

const log = createServiceLogger('monitoring-service');

async function main() {
  const config = loadManagedDatabaseConfig(); // Reusing the shared config loader patterns
  const app = Fastify({ logger: false });

  app.register(cors);
  app.register(helmet);
  app.setErrorHandler(errorHandler);

  // Connect to NATS
  const nc = await connect({ servers: config.NATS_URL });
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  const monitor = new HealthMonitor(nc);
  await monitor.start();

  app.get('/health', async () => ({ status: 'ok', service: 'monitoring-service' }));

  // GET /api/v1/monitoring/health/:projectId
  app.get('/api/v1/monitoring/health/:projectId', async (request: any) => {
    const { projectId } = request.params;
    const health = await monitor.getProjectHealth(projectId);
    return { success: true, data: health };
  });

  const port = parseInt(process.env.PORT || '3012');
  await app.listen({ port, host: '0.0.0.0' });
  log.info(`Monitoring Service running on port ${port}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Monitoring Service');
  process.exit(1);
});
