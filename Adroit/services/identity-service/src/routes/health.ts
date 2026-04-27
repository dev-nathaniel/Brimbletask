import type { FastifyInstance } from 'fastify';

export async function healthRoutes(app: FastifyInstance) {
  // GET /health — Basic health check
  app.get('/', async (_request, reply) => {
    return reply.send({
      status: 'healthy',
      service: 'identity-service',
      version: '0.1.0',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });
}
