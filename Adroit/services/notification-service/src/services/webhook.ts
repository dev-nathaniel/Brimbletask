import axios from 'axios';
import { createServiceLogger } from '@adroit/utils';

const log = createServiceLogger('notification-service:webhook');

export class WebhookService {
  async trigger(url: string, payload: any): Promise<void> {
    try {
      await axios.post(url, payload, {
        timeout: 5000,
      });
      log.info({ url }, 'Triggered outbound webhook');
    } catch (error: any) {
      log.error({ err: error.message, url }, 'Failed to trigger outbound webhook');
      // We don't necessarily throw here to avoid blocking other notification channels
    }
  }
}
