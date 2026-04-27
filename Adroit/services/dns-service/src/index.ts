import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { createServiceLogger } from '@adroit/utils';
import { loadDnsConfig } from '@adroit/config';
import { domainRoutes } from './routes/domains.js';
import { IonosService } from './services/ionos.js';

const log = createServiceLogger('dns-service');

async function main() {
  const config = loadDnsConfig();

  // Initialize IONOS Service if key provided
  const ionos = config.IONOS_API_KEY ? new IonosService(config.IONOS_API_KEY) : null;
  if (!ionos) {
    log.warn('IONOS_API_KEY not provided. DNS record automation will be disabled.');
  }

  const app = Fastify({ logger: false });

  await app.register(cors);

  // Routes
  await app.register(domainRoutes, { prefix: '/api/v1/dns', ionos });

  // Health check
  app.get('/health', async () => ({ status: 'healthy', service: 'dns-service' }));

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`DNS Management Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.fatal(err, 'Failed to start DNS Service');
  process.exit(1);
});
