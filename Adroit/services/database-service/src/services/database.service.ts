import { NomadClient } from './nomad.js';
import { VaultClient, createServiceLogger } from '@adroit/utils';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('database-service');

export class DatabaseService {
  constructor(
    private nomad: NomadClient,
    private vault: VaultClient
  ) {}

  /**
   * Provisions a new managed database
   */
  async provisionPostgres(dbId: string, projectId: string, dbName: string, user: string, password: string) {
    const db = getProjectsDb();
    
    // 1. Get project for teamId (needed for Vault path)
    const project = await db.project.findUnique({
      where: { id: projectId },
      select: { teamId: true }
    });
    if (!project) throw new Error('Project not found');

    // 2. Store credentials in Vault
    const vaultPath = `secret/teams/${project.teamId}/projects/${projectId}/databases/${dbId}`;
    await this.vault.setSecret(vaultPath, {
      username: user,
      password: password,
      database: dbName
    });

    // 3. Generate Nomad Job Definition
    const safeDbId = dbId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const jobDef = {
      Region: 'global',
      ID: `db-${safeDbId}`,
      Name: `Managed DB ${dbId}`,
      Type: 'service',
      Datacenters: ['dc1'],
      TaskGroups: [
        {
          Name: 'db',
          Count: 1,
          Tasks: [
            {
              Name: 'postgres',
              Driver: 'docker',
              Config: {
                image: 'postgres:16-alpine',
                ports: ['db'],
              },
              Env: {
                POSTGRES_USER: user,
                POSTGRES_PASSWORD: password,
                POSTGRES_DB: dbName,
              },
              Resources: {
                CPU: 100,
                MemoryMB: 512,
              },
            },
          ],
          Networks: [
            {
              DynamicPorts: [{ Label: 'db', To: 5432 }],
            },
          ],
          Services: [
            {
              Name: `db-${safeDbId}`,
              Provider: 'consul',
              PortLabel: 'db',
              Address: 'host.docker.internal',
              Tags: [
                `adroit-db=${dbId}`,
                `project-id=${projectId}`
              ],
              Checks: [
                {
                  Type: 'tcp',
                  Interval: 10000000000,
                  Timeout: 2000000000,
                },
              ],
            },
          ],
        },
      ],
    };

    // 4. Submit to Nomad
    await this.nomad.submitJob(jobDef);
    
    log.info({ dbId, jobId: `db-${safeDbId}` }, 'Submitted Nomad job for managed database');
    
    return {
      host: `db-${safeDbId}.localhost`,
      port: 5432 // This is the container port, we'll need to find the dynamic port later if needed
                 // But for local dev with Service Discovery, we can use the consul name.
    };
  }
}
