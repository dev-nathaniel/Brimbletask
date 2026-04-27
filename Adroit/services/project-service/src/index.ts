import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { createServiceLogger, VaultClient } from '@adroit/utils';
import { loadProjectConfig } from '@adroit/config';
import { projectRoutes } from './routes/projects.js';
import { environmentRoutes } from './routes/environments.js';
import { healthRoutes } from './routes/health.js';
import { errorHandler } from './middleware/error-handler.js';
import { VaultSyncService } from './services/vault-sync.js';
import multipart from '@fastify/multipart';

const log = createServiceLogger('project-service');

async function main() {
  const config = loadProjectConfig();

  const vault = new VaultClient({ 
    address: config.VAULT_ADDR, 
    token: config.VAULT_TOKEN 
  });
  const vaultSync = new VaultSyncService(vault);

  const app = Fastify({ logger: false });
  app.decorate('vault', vault);
  app.decorate('vaultSync', vaultSync);

  await app.register(helmet);
  await app.register(multipart, { limits: { fileSize: 100 * 1024 * 1024 } }); // 100MB limit
  await app.register(cors, {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.setErrorHandler(errorHandler);

  // Routes
  await app.register(healthRoutes, { prefix: '/health' });
  await app.register(projectRoutes, { prefix: '/api/v1/projects' });
  await app.register(environmentRoutes, { prefix: '/api/v1/environments' });

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Project Management Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.fatal(err, 'Failed to start Project Management Service');
  process.exit(1);
});
