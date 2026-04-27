import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { createServiceLogger, VaultClient } from '@adroit/utils';
import { loadIdentityConfig } from '@adroit/config';
import { authRoutes } from './routes/auth.js';
import { userRoutes } from './routes/users.js';
import { teamRoutes } from './routes/teams.js';
import { apiKeyRoutes } from './routes/api-keys.js';
import { healthRoutes } from './routes/health.js';
import { errorHandler } from './middleware/error-handler.js';

const log = createServiceLogger('identity-service');

async function main() {
  const config = loadIdentityConfig();

  const vault = new VaultClient({
    address: config.VAULT_ADDR,
    token: config.VAULT_TOKEN,
  });

  const app = Fastify({
    logger: false, // We use pino directly via @adroit/utils
  });

  app.decorate('vault', vault);


  // Plugins
  await app.register(cors, {
    origin: config.NODE_ENV === 'development' ? true : ['https://*.adroit.dev'],
    credentials: true,
  });
  await app.register(helmet);

  // Global error handler
  app.setErrorHandler(errorHandler);

  // Routes
  await app.register(healthRoutes, { prefix: '/health' });
  await app.register(authRoutes, { prefix: '/api/v1/auth' });
  await app.register(userRoutes, { prefix: '/api/v1/users' });
  await app.register(teamRoutes, { prefix: '/api/v1/teams' });
  await app.register(apiKeyRoutes, { prefix: '/api/v1/api-keys' });

  // Start server
  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Identity Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.fatal(err, 'Failed to start Identity Service');
  process.exit(1);
});
