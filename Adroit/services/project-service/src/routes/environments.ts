import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import { successResponse, generateId, NotFoundError, createServiceLogger, encrypt, decrypt } from '@adroit/utils';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('project-service');

const createEnvSchema = z.object({
  projectId: z.string(),
  name: z.string().min(1).max(50),
  type: z.enum(['development', 'staging', 'production']).default('development'),
  branch: z.string().optional(),
  autoDeploy: z.boolean().default(false),
});

const setVariableSchema = z.object({
  key: z.string()
    .min(1)
    .max(256)
    .regex(/^[a-zA-Z_][a-zA-Z0-9_]*$/)
    .transform((k) => k.toUpperCase()),
  value: z.string().max(65536),
  isSecret: z.boolean().default(false),
});

const setVariablesBulkSchema = z.object({
  variables: z.array(setVariableSchema),
});

export async function environmentRoutes(app: FastifyInstance) {
  const db = getProjectsDb();

  app.addHook('preHandler', requireAuth);

  // POST /api/v1/environments — Create a new environment
  app.post('/', async (request, reply) => {
    const body = createEnvSchema.parse(request.body);

    const environment = await db.environment.create({
      data: {
        id: generateId('env'),
        projectId: body.projectId,
        name: body.name,
        type: body.type,
        branch: body.branch,
        autoDeploy: body.autoDeploy,
      },
    });

    return reply.status(201).send(successResponse(environment));
  });

  // GET /api/v1/environments/:envId/variables — List env vars
  app.get<{ Params: { envId: string } }>('/:envId/variables', async (request, reply) => {
    const { envId } = request.params;

    const env = await db.environment.findUnique({ where: { id: envId } });
    if (!env) throw new NotFoundError('Environment', envId);

    const variables = await db.environmentVariable.findMany({
      where: { environmentId: envId },
      orderBy: { key: 'asc' },
    });

    // Return keys and metadata, but mask secret values
    const result = variables.map((v) => ({
      id: v.id,
      key: v.key,
      value: v.isSecret ? '••••••••' : decrypt(v.encryptedValue),
      isSecret: v.isSecret,
      createdAt: v.createdAt,
      updatedAt: v.updatedAt,
    }));

    return reply.send(successResponse(result));
  });

  // PUT /api/v1/environments/:envId/variables — Set env vars (bulk upsert)
  app.put<{ Params: { envId: string } }>('/:envId/variables', async (request, reply) => {
    const { envId } = request.params;
    const body = setVariablesBulkSchema.parse(request.body);

    const environment = await db.environment.findUnique({ where: { id: envId } });
    if (!environment) {
      throw new NotFoundError('Environment', envId);
    }

    const results = await db.$transaction(
      body.variables.map((v) =>
        db.environmentVariable.upsert({
          where: { environmentId_key: { environmentId: envId, key: v.key } },
          create: {
            id: generateId('var'),
            environmentId: envId,
            key: v.key,
            encryptedValue: encrypt(v.value),
            isSecret: v.isSecret,
          },
          update: {
            encryptedValue: encrypt(v.value),
            isSecret: v.isSecret,
          },
        }),
      ),
    );

    // Sync to Vault after successful DB update
    const vaultSync = (app as any).vaultSync;
    if (vaultSync) {
      vaultSync.syncEnvironment(envId).catch((err: any) => {
        log.error({ err, envId }, 'Failed to sync environment to Vault');
      });
    }

    return reply.send(
      successResponse({
        updated: results.length,
        message: `${results.length} variable(s) set and synced to Vault`,
      }),
    );
  });

  // DELETE /api/v1/environments/:envId/variables/:key — Delete an env var
  app.delete<{ Params: { envId: string; key: string } }>(
    '/:envId/variables/:key',
    async (request, reply) => {
      const { envId, key } = request.params;

      await db.environmentVariable.delete({
        where: { environmentId_key: { environmentId: envId, key } },
      });

      return reply.send(successResponse({ message: `Variable '${key}' deleted` }));
    },
  );

  // DELETE /api/v1/environments/:envId — Delete an environment
  app.delete<{ Params: { envId: string } }>('/:envId', async (request, reply) => {
    const { envId } = request.params;
    await db.environment.delete({ where: { id: envId } });
    return reply.send(successResponse({ message: 'Environment deleted' }));
  });
}
