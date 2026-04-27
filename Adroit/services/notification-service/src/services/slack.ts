import axios from 'axios';
import { createServiceLogger } from '@adroit/utils';

const log = createServiceLogger('notification-service:slack');

export class SlackService {
  async send(webhookUrl: string, message: { text: string; blocks?: any[] }): Promise<void> {
    try {
      await axios.post(webhookUrl, message);
      log.info({ webhookUrl }, 'Sent Slack notification');
    } catch (error: any) {
      log.error({ err: error.message }, 'Failed to send Slack notification');
      throw error;
    }
  }
}
