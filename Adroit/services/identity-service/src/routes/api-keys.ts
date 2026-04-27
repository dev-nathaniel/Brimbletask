import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import { successResponse } from '@adroit/utils';
import { generateId, generateApiKey, hashApiKey } from '@adroit/utils';
import { NotFoundError } from '@adroit/utils';
import { getIdentityDb } from '@adroit/db';

const createApiKeySchema = z.object({
  name: z.string().min(1).max(100),
  teamId: z.string().optional(),
  scopes: z.array(z.string()).default([]),
  expiresInDays: z.number().int().min(1).max(365).optional(),
});

export async function apiKeyRoutes(app: FastifyInstance) {
  const db = getIdentityDb();

  app.addHook('preHandler', requireAuth);

  // GET /api/v1/api-keys — List user's API keys
  app.get('/', async (request, reply) => {
    const keys = await db.apiKey.findMany({
      where: { userId: request.userId!, revokedAt: null },
      select: {
        id: true,
        name: true,
        keyPrefix: true,
        scopes: true,
        lastUsedAt: true,
        expiresAt: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return reply.send(successResponse(keys));
  });

  // POST /api/v1/api-keys — Create a new API key
  app.post('/', async (request, reply) => {
    const body = createApiKeySchema.parse(request.body);
    const { key, prefix } = generateApiKey('live');
    const hashedKey = hashApiKey(key);

    const apiKey = await db.apiKey.create({
      data: {
        id: generateId('ak'),
        name: body.name,
        keyPrefix: prefix,
        hashedKey,
        userId: request.userId!,
        teamId: body.teamId,
        scopes: body.scopes,
        expiresAt: body.expiresInDays
          ? new Date(Date.now() + body.expiresInDays * 24 * 60 * 60 * 1000)
          : undefined,
      },
    });

    // Return the full key only once — it cannot be retrieved again
    return reply.status(201).send(
      successResponse({
        id: apiKey.id,
        name: apiKey.name,
        key, // Full key — shown only once
        keyPrefix: apiKey.keyPrefix,
        scopes: apiKey.scopes,
        expiresAt: apiKey.expiresAt,
        createdAt: apiKey.createdAt,
      }),
    );
  });

  // DELETE /api/v1/api-keys/:keyId — Revoke an API key
  app.delete<{ Params: { keyId: string } }>('/:keyId', async (request, reply) => {
    const { keyId } = request.params;

    const apiKey = await db.apiKey.findFirst({
      where: { id: keyId, userId: request.userId! },
    });

    if (!apiKey) {
      throw new NotFoundError('API key', keyId);
    }

    await db.apiKey.update({
      where: { id: keyId },
      data: { revokedAt: new Date() },
    });

    return reply.send(successResponse({ message: 'API key revoked' }));
  });
}
