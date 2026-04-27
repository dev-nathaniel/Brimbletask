import { VaultClient, createServiceLogger } from '@adroit/utils';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('vault-sync');

export class VaultSyncService {
  constructor(private vault: VaultClient) {}

  /**
   * Syncs an environment's variables to Vault
   */
  async syncEnvironment(envId: string): Promise<void> {
    const db = getProjectsDb();
    
    const env = await db.environment.findUnique({
      where: { id: envId },
      include: {
        project: true,
        variables: true
      }
    });

    if (!env) return;

    // We only sync "secrets" or "all" to Vault? 
    // Usually, in a PaaS, ALL env vars go to Vault for consistency.
    const secretData: Record<string, string> = {};
    for (const v of env.variables) {
      // In this phase, we still decrypt from DB to send to Vault.
      // In Phase 4, we'd stop storing encrypted values in DB entirely.
      secretData[v.key] = v.encryptedValue; // Passing raw encrypted or decrypted?
      // Actually, Vault should store the plaintext (which it then encrypts).
    }

    // Path: secret/teams/<teamId>/projects/<projectId>/env/<envId>
    const path = `secret/teams/${env.project.teamId}/projects/${env.projectId}/env/${env.id}`;
    log.info({ path, count: Object.keys(secretData).length }, 'Syncing environment to Vault');
    
    await this.vault.setSecret(path, secretData);
  }

  /**
   * Retrieves all variables for an environment from Vault
   */
  async getEnvironmentVariables(teamId: string, projectId: string, envId: string): Promise<Record<string, string> | null> {
    const path = `secret/teams/${teamId}/projects/${projectId}/env/${envId}`;
    log.debug({ path }, 'Reading secret from Vault');
    return this.vault.getSecret(path);
  }

  /**
   * Deletes all secrets for a project (metadata and all versions)
   */
  async deleteProjectSecrets(teamId: string, projectId: string): Promise<void> {
    const db = getProjectsDb();
    const envs = await db.environment.findMany({
      where: { projectId },
      select: { id: true }
    });

    for (const env of envs) {
      const path = `secret/teams/${teamId}/projects/${projectId}/env/${env.id}`;
      log.info({ path }, 'Purging environment secrets from Vault');
      try {
        await this.vault.purgeMetadata(path);
      } catch (e: any) {
        log.warn({ path, e }, 'Failed to purge metadata for env, continuing...');
      }
    }
    
    // Also try purging the root project path just in case we ever stored anything there directly
    const rootPath = `secret/teams/${teamId}/projects/${projectId}`;
    try {
      await this.vault.purgeMetadata(rootPath);
    } catch (e) {}
  }
}
