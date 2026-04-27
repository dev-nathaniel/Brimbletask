import nodemailer from 'nodemailer';
import { createServiceLogger } from '@adroit/utils';

const log = createServiceLogger('notification-service:email');

export class EmailService {
  private transporter: nodemailer.Transporter;
  private from: string;

  constructor(config: { host: string; port: number; user?: string; pass?: string; from: string }) {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      auth: config.user ? { user: config.user, pass: config.pass } : undefined,
      secure: config.port === 465,
    });
    this.from = config.from;
  }

  async send(to: string, subject: string, text: string, html?: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: this.from,
        to,
        subject,
        text,
        html,
      });
      log.info({ to, subject }, 'Sent email notification via SMTP');
    } catch (error: any) {
      log.error({ err: error.message, to }, 'Failed to send email notification');
      throw error;
    }
  }
}
