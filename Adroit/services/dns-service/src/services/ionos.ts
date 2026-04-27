import axios, { AxiosInstance } from 'axios';
import { createServiceLogger } from '@adroit/utils';

const log = createServiceLogger('dns-service:ionos');

export interface IonosRecord {
  name: string;
  type: 'A' | 'CNAME' | 'TXT' | 'AAAA';
  content: string;
  ttl?: number;
  prio?: number;
}

export class IonosService {
  private client: AxiosInstance;

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: 'https://api.hosting.ionos.com/dns/v1',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  async getZones(): Promise<any[]> {
    try {
      const response = await this.client.get('/zones');
      return response.data;
    } catch (error: any) {
      log.error({ err: error.response?.data || error.message }, 'Failed to fetch IONOS zones');
      throw new Error('Failed to fetch IONOS zones');
    }
  }

  async findZoneForDomain(hostname: string): Promise<string | null> {
    const zones = await this.getZones();
    // Simplified matching: find the zone that is a suffix of the hostname
    const match = zones.find(z => hostname.endsWith(z.name));
    return match ? match.id : null;
  }

  async createRecord(zoneId: string, record: IonosRecord): Promise<void> {
    try {
      await this.client.post(`/zones/${zoneId}/records`, [record]);
      log.info({ zoneId, record }, 'Created DNS record on IONOS');
    } catch (error: any) {
      log.error({ err: error.response?.data || error.message }, 'Failed to create IONOS DNS record');
      throw new Error('Failed to create IONOS DNS record');
    }
  }

  async deleteRecord(zoneId: string, recordId: string): Promise<void> {
    try {
      await this.client.delete(`/zones/${zoneId}/records/${recordId}`);
    } catch (error: any) {
      log.error({ err: error.response?.data || error.message }, 'Failed to delete IONOS DNS record');
      throw new Error('Failed to delete IONOS DNS record');
    }
  }
}
