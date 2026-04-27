import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { nanoid } from 'nanoid';
import { DatabaseService } from './services/database.service.js';
import { NomadClient } from './services/nomad.js';
import { VaultClient, createServiceLogger } from '@adroit/utils';
import { loadManagedDatabaseConfig } from '@adroit/config';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('database-service');
const config = loadManagedDatabaseConfig();
const db = getProjectsDb();

const nomad = new NomadClient();
const vault = new VaultClient({
  address: config.VAULT_ADDR,
  token: config.VAULT_TOKEN
});
const orchestrator = new DatabaseService(nomad, vault);

async function main() {
  const app = fastify({ logger: false });

  await app.register(cors);
  await app.register(helmet);

  app.get('/health', async () => ({ status: 'ok', service: 'database-service' }));

  // POST /api/v1/databases — Provision a new managed database
  app.post<{ Body: { projectId: string; name: string; type?: string } }>(
    '/api/v1/databases',
    async (request) => {
      const { projectId, name, type = 'postgresql' } = request.body;

      // 1. Create DB record
      const dbName = `db_${nanoid(10).toLowerCase()}`;
      const dbUser = 'adroit_admin';
      const dbPassword = nanoid(24);

      const managedDb = await db.managedDatabase.create({
        data: {
          projectId,
          name,
          type,
          dbName,
          user: dbUser,
          status: 'provisioning',
        }
      });

      // 2. Submit Nomad Job & Store Secrets
      log.info({ dbId: managedDb.id, dbName }, 'Provisioning managed database');
      
      const { host, port } = await orchestrator.provisionPostgres(
        managedDb.id, 
        projectId, 
        dbName, 
        dbUser, 
        dbPassword
      );

      // 3. Update status to ready
      await db.managedDatabase.update({
        where: { id: managedDb.id },
        data: { 
          status: 'ready',
          host,
          port
        }
      });

      return {
        success: true,
        database: {
          ...managedDb,
          status: 'ready',
          host,
          port,
          password: dbPassword // Only returned once on creation
        }
      };
    }
  );

  await app.listen({ port: config.PORT || 3011, host: '0.0.0.0' });
  log.info(`Database Service running on port ${config.PORT || 3011}`);
}

main().catch((err) => {
  log.error(err);
  process.exit(1);
});
