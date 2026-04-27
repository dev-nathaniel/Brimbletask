import axios, { AxiosInstance } from 'axios';
import { createServiceLogger } from './logger.js';

const log = createServiceLogger('vault-client');

export interface VaultConfig {
  address: string;
  token: string;
}

export class VaultClient {
  private client: AxiosInstance;

  constructor(config: VaultConfig) {
    this.client = axios.create({
      baseURL: `${config.address}/v1`,
      headers: {
        'X-Vault-Token': config.token,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Writes a secret to KV V2 store
   * Path should be like 'secret/data/teams/team123/env'
   */
  async setSecret(path: string, data: Record<string, string>): Promise<void> {
    try {
      // Ensure path has /data/ for KV V2
      const kvPath = path.startsWith('secret/data/') ? path : path.replace('secret/', 'secret/data/');
      await this.client.post(kvPath, { data });
      log.info(`Secret written to ${path}`);
    } catch (err: any) {
      log.error({ err: err.response?.data || err.message }, `Failed to write secret to ${path}`);
      throw new Error(`Vault Error: ${err.message}`);
    }
  }

  /**
   * Reads a secret from KV V2 store
   */
  async getSecret(path: string): Promise<Record<string, string> | null> {
    try {
      const kvPath = path.startsWith('secret/data/') ? path : path.replace('secret/', 'secret/data/');
      const res = await this.client.get(kvPath);
      return res.data.data.data;
    } catch (err: any) {
      if (err.response?.status === 404) return null;
      log.error({ err: err.response?.data || err.message }, `Failed to read secret from ${path}`);
      throw new Error(`Vault Error: ${err.message}`);
    }
  }

  /**
   * Deletes all versions and metadata for a path (Full Purge)
   */
  async purgeMetadata(path: string): Promise<void> {
    try {
      const kvPath = path.startsWith('secret/metadata/') ? path : path.replace('secret/', 'secret/metadata/');
      await this.client.delete(kvPath);
      log.info(`Metadata and all versions purged for ${path}`);
    } catch (err: any) {
      if (err.response?.status === 404) return;
      log.error({ err: err.response?.data || err.message }, `Failed to purge metadata for ${path}`);
      throw new Error(`Vault Error: ${err.message}`);
    }
  }

  /**
   * Deletes a secret version (latest version by default)
   */
  async deleteSecret(path: string): Promise<void> {
    try {
      const kvPath = path.startsWith('secret/data/') ? path : path.replace('secret/', 'secret/data/');
      await this.client.delete(kvPath);
      log.info(`Secret version deleted from ${path}`);
    } catch (err: any) {
      log.error({ err: err.response?.data || err.message }, `Failed to delete secret version from ${path}`);
      throw new Error(`Vault Error: ${err.message}`);
    }
  }
}
