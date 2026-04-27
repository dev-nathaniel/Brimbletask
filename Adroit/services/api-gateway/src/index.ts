import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import proxy from '@fastify/http-proxy';
import rateLimit from '@fastify/rate-limit';
import IORedis from 'ioredis';
import { createServiceLogger } from '@adroit/utils';
import { loadApiGatewayConfig } from '@adroit/config';
import { healthRoutes } from './routes/health.js';

const log = createServiceLogger('api-gateway');

async function main() {
  const config = loadApiGatewayConfig();
  
  // High-reliability upstream resolution
  const IDENTITY_URL = config.IDENTITY_SERVICE_URL || 'http://localhost:3001';
  const PROJECT_URL = config.PROJECT_SERVICE_URL || 'http://localhost:3002';
  const GIT_URL = config.GIT_INTEGRATION_URL || 'http://localhost:3003';
  const RUNTIME_URL = config.RUNTIME_SERVICE_URL || 'http://localhost:3007';
  const LOGGING_URL = config.LOGGING_SERVICE_URL || 'http://localhost:3009';
  const DEPLOY_URL = config.DEPLOYMENT_SERVICE_URL || 'http://localhost:3006';
  const DB_URL = config.DATABASE_SERVICE_URL || 'http://localhost:3011';
  const MON_URL = config.MONITORING_SERVICE_URL || 'http://localhost:3012';
  // @ts-ignore - DNS_SERVICE_URL added in recent config update
  const DNS_URL = (config as any).DNS_SERVICE_URL || 'http://localhost:3014';

  const redis = new IORedis.default(config.REDIS_URL);
  const app = Fastify({ logger: false });

  // Plugins
  await app.register(cors, {
    origin: config.NODE_ENV === 'development' ? true : ['https://*.adroit.dev'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  });
  await app.register(helmet);

  // Global rate limiting with Redis backend
  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
    redis,
    keyGenerator: (request) => {
      return request.headers['x-api-key'] as string ?? request.ip;
    },
    addHeadersOnExceeding: {
      'x-ratelimit-limit': true,
      'x-ratelimit-remaining': true,
      'x-ratelimit-reset': true,
    },
  });

  // Health check
  await app.register(healthRoutes, { prefix: '/health' });

  // Helper to register proxy with health check
  const registerProxy = async (name: string, upstream: string, prefix: string, ws: boolean = false) => {
    log.info({ upstream, ws }, `Registering ${name} proxy`);
    await app.register(proxy, {
      upstream,
      prefix,
      rewritePrefix: prefix,
      http2: false,
      websocket: ws,
    });
  };

  // 1. Identity Service
  await registerProxy('Identity API', IDENTITY_URL, '/api/v1/auth');
  await registerProxy('Users API', IDENTITY_URL, '/api/v1/users');
  await registerProxy('Teams API', IDENTITY_URL, '/api/v1/teams');
  await registerProxy('API Keys API', IDENTITY_URL, '/api/v1/api-keys');

  // 2. Project Service
  await registerProxy('Project API', PROJECT_URL, '/api/v1/projects');
  await registerProxy('Environments API', PROJECT_URL, '/api/v1/environments');

  // 3. Git Integration
  await registerProxy('Git API', GIT_URL, '/api/v1/git');

  // 4. Runtime Service
  await registerProxy('Runtime API', RUNTIME_URL, '/api/v1/runtime');

  // 5. Logging Service (Supports WebSockets)
  await registerProxy('Logging API', LOGGING_URL, '/api/v1/logs', true);

  // 6. Deployment Service
  await registerProxy('Deployment API', DEPLOY_URL, '/api/v1/deployments');

  // 7. Managed Database Service
  await registerProxy('Database API', DB_URL, '/api/v1/databases');

  // 8. Monitoring Service
  await registerProxy('Monitoring API', MON_URL, '/api/v1/monitoring');

  // 9. DNS Management Service
  await registerProxy('DNS API', DNS_URL, '/api/v1/dns');

  // Start server
  await app.listen({ port: config.PORT, host: '0.0.0.0' });
  log.info(`API Gateway running on port ${config.PORT}`);
}

main().catch((err) => {
  log.fatal(err, 'Failed to start API Gateway');
  process.exit(1);
});
