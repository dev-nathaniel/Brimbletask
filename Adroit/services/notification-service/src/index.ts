import 'dotenv/config';
import { connect, JSONCodec } from 'nats';
import { createServiceLogger } from '@adroit/utils';
import { loadNotificationConfig } from '@adroit/config';
import { EmailService } from './services/email.js';
import { SlackService } from './services/slack.js';
import { WebhookService } from './services/webhook.js';

const log = createServiceLogger('notification-service');
const jc = JSONCodec();

async function main() {
  const config = loadNotificationConfig();

  // Initialize Channels
  const email = new EmailService({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
    from: config.SMTP_FROM,
  });
  const slack = new SlackService();
  const webhook = new WebhookService();

  // Connect to NATS
  const nc = await connect({ servers: config.NATS_URL });
  log.info(`Notification Service connected to NATS at ${config.NATS_URL}`);

  // 1. Subscribe to Build Events
  const buildSub = nc.subscribe('build.*');
  (async () => {
    for await (const m of buildSub) {
      const data = jc.decode(m.data) as any;
      const event = m.subject.split('.')[1];
      log.info({ subject: m.subject, event }, 'Received build event');

      if (event === 'failed') {
        const text = `❌ Build Failed for Project: ${data.projectId}\nError: ${data.error}`;
        log.info({ projectId: data.projectId, channels: ['email', 'slack', 'webhook'] }, 'Fanning out build.failed notifications');
        
        await email.send('admin@adroit.dev', 'Build Failed', text).catch(() => {});
        // Mock Slack URL
        if (process.env.SLACK_WEBHOOK_URL) {
          await slack.send(process.env.SLACK_WEBHOOK_URL, { text }).catch(() => {});
        }
        // Generic Webhook notify
        if (process.env.GLOBAL_NOTIFICATION_WEBHOOK) {
          await webhook.trigger(process.env.GLOBAL_NOTIFICATION_WEBHOOK, { event: 'build.failed', data }).catch(() => {});
        }
      }
    }
  })();

  // 2. Subscribe to Monitoring Alerts
  const monitorSub = nc.subscribe('monitoring.health.*');
  (async () => {
    for await (const m of monitorSub) {
      const data = jc.decode(m.data) as any;
      const status = m.subject.split('.')[2];
      if (status === 'unhealthy') {
        const text = `⚠️ Project Unhealthy: ${data.projectId}\nComponent: ${data.service}\nStatus: ${data.status}`;
        await email.send('ops@adroit.dev', 'Platform Alert: Unhealthy Service', text).catch(() => {});
      }
    }
  })();

  log.info('Notification Service is active and listening for events...');
}

main().catch((err) => {
  log.fatal(err, 'Failed to start Notification Service');
  process.exit(1);
});
