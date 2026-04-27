import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { createServiceLogger, errorHandler } from '@adroit/utils';
import { loadGitIntegrationConfig } from '@adroit/config';
import { oauthRoutes } from './routes/oauth.js';
import { webhookRoutes } from './routes/webhooks.js';

const log = createServiceLogger('git-integration');

async function main() {
  const config = loadGitIntegrationConfig();

  const app = Fastify({ logger: false });

  await app.register(cors, {
    origin: config.NODE_ENV === 'development' ? true : ['https://*.adroit.dev'],
    credentials: true,
  });
  await app.register(helmet);

  app.setErrorHandler(errorHandler);

  // Health route
  app.get('/health', async () => ({ status: 'ok', service: 'git-integration' }));

  // Routes
  await app.register(oauthRoutes, { prefix: '/api/v1/git' });
  await app.register(webhookRoutes, { prefix: '/api/v1/git/webhooks' });
  const { apiRoutes } = await import('./routes/api.js');
  await app.register(apiRoutes, { prefix: '/api/v1/git' });

  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`Git Integration Service running on port ${config.PORT}`);
}

main().catch((err) => {
  log.error({ err }, 'Failed to start Git Integration Service');
  process.exit(1);
});
