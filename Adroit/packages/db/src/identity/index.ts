import { PrismaClient } from '../../prisma/generated/identity/index.js';

let identityDb: PrismaClient | undefined;

/**
 * Get or create the Identity database Prisma client.
 * Uses a singleton pattern to reuse connections.
 */
export function getIdentityDb(): PrismaClient {
  if (!identityDb) {
    identityDb = new PrismaClient({
      datasourceUrl: process.env['IDENTITY_DATABASE_URL'],
      log:
        process.env['NODE_ENV'] === 'development'
          ? ['query', 'warn', 'error']
          : ['warn', 'error'],
    });
  }
  return identityDb;
}
