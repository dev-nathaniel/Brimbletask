import { PrismaClient } from '../../prisma/generated/projects/index.js';

let projectsDb: PrismaClient | undefined;

/**
 * Get or create the Projects database Prisma client.
 * Uses a singleton pattern to reuse connections.
 */
export function getProjectsDb(): PrismaClient {
  if (!projectsDb) {
    projectsDb = new PrismaClient({
      datasourceUrl: process.env['PROJECTS_DATABASE_URL'],
      log:
        process.env['NODE_ENV'] === 'development'
          ? ['query', 'warn', 'error']
          : ['warn', 'error'],
    });
  }
  return projectsDb;
}
