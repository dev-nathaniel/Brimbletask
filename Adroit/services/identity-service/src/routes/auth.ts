import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { registerUser, loginUser, refreshAccessToken, revokeAllTokens } from '../services/auth.service.js';
import { requireAuth } from '../middleware/auth.js';
import { successResponse } from '@adroit/utils';

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  password: z.string().min(8).max(128),
  referralCode: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const refreshSchema = z.object({
  refreshToken: z.string(),
});

export async function authRoutes(app: FastifyInstance) {
  // POST /api/v1/auth/register
  app.post('/register', async (request, reply) => {
    const body = registerSchema.parse(request.body);
    const result = await registerUser(body);
    return reply.status(201).send(successResponse(result));
  });

  // POST /api/v1/auth/login
  app.post('/login', async (request, reply) => {
    const body = loginSchema.parse(request.body);
    const result = await loginUser(body);
    return reply.send(successResponse(result));
  });

  // POST /api/v1/auth/refresh
  app.post('/refresh', async (request, reply) => {
    const body = refreshSchema.parse(request.body);
    const tokens = await refreshAccessToken(body.refreshToken);
    return reply.send(successResponse(tokens));
  });

  // POST /api/v1/auth/logout (revoke all refresh tokens)
  app.post('/logout', { preHandler: [requireAuth] }, async (request, reply) => {
    await revokeAllTokens(request.userId!);
    return reply.send(successResponse({ message: 'Logged out successfully' }));
  });
}
