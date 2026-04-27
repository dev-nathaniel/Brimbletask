import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { connect } from 'nats';
import { createServiceLogger, errorHandler } from '@adroit/utils';
import { loadManagedDatabaseConfig } from '@adroit/config';
import { ScalingManager } from './services/scaling-manager.js';

const log = createServiceLogger('scaling-service');

async function main() {
  const config = loadManagedDatabaseConfig();
  const app = Fastify({ logger: false });

  app.register(cors);
  app.register(helmet);
  app.setErrorHandler(errorHandler);

  // Connect to NATS
  const nc = await connect({ servers: config.NATS_URL });
  log.info(`Connected to NATS at ${config.NATS_URL}`);

  const manager = new ScalingManager(nc);
  await manager.start();

  app.get('/health', async () => ({ status: 'ok', service: 'scaling-service' }));

  // Manual idle trigger for Scale-to-Zero testing
  app.post('/api/v1/scaling/:projectId/idle', async (request, reply) => {
    const { projectId } = request.params as any;
    log.info({ projectId }, 'Manual SCALE-TO-ZERO trigger received');
    // We set the count to 0 via our manager/Nomad client
    await manager.forceScale(projectId, 0);
    return reply.send({ status: 'scaling_to_zero', projectId });
  });

  const port = parseInt(process.env.PORT || '3013');
  await app.listen({ port, host: '0.0.0.0' });
  log.info(`Scaling Service running on port ${port}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Scaling Service');
  process.exit(1);
});
