import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { getUserById, updateUser } from '../services/auth.service.js';
import { requireAuth } from '../middleware/auth.js';
import { successResponse } from '@adroit/utils';

const updateUserSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  avatarUrl: z.string().url().optional(),
});

export async function userRoutes(app: FastifyInstance) {
  // All user routes require authentication
  app.addHook('preHandler', requireAuth);

  // GET /api/v1/users/me
  app.get('/me', async (request, reply) => {
    const user = await getUserById(request.userId!);
    return reply.send(successResponse(user));
  });

  // PATCH /api/v1/users/me
  app.patch('/me', async (request, reply) => {
    const body = updateUserSchema.parse(request.body);
    const user = await updateUser(request.userId!, body);
    return reply.send(successResponse(user));
  });
}
