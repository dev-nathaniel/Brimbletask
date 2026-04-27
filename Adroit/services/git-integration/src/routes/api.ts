import { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import { loadGitIntegrationConfig } from '@adroit/config';
import { AppError } from '@adroit/utils';
import { GitHubService } from '../services/github.js';

export async function apiRoutes(app: FastifyInstance) {
  const config = loadGitIntegrationConfig();

  app.get('/repositories', async (request) => {
    // 1. Authenticate user from JWT Bearer token
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Missing or invalid Authorization header', 401, 'UNAUTHORIZED');
    }

    const token = authHeader.substring(7);
    let userId: string;
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET) as { sub: string };
      userId = decoded.sub;
    } catch (e) {
      throw new AppError('Invalid or expired authentication token', 401, 'UNAUTHORIZED');
    }

    // 2. Fetch repositories from GitHub — let OAUTH_NOT_CONNECTED bubble up as-is
    try {
      const repos = await GitHubService.listRepositories(userId);
      return { success: true, repositories: repos };
    } catch (error: any) {
      // Re-throw AppErrors directly so their code and status are preserved
      if (error instanceof AppError) throw error;
      throw new AppError(`Failed to fetch repositories: ${error.message}`, 500, 'GITHUB_API_ERROR');
    }
  });

  app.post('/webhooks/configure', async (request) => {
    // Authenticate user
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Missing or invalid Authorization header', 401, 'UNAUTHORIZED');
    }

    const token = authHeader.substring(7);
    let userId: string;
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET) as { sub: string };
      userId = decoded.sub;
    } catch (e) {
      throw new AppError('Invalid or expired authentication token', 401, 'UNAUTHORIZED');
    }

    const body = request.body as any;
    if (!body || !body.owner || !body.repo) {
      throw new AppError('Owner and repo are required in the body', 400, 'BAD_REQUEST');
    }

    const webhookUrl = `${config.PLATFORM_URL}/api/v1/git/webhooks/github`;
    
    try {
      const hook = await GitHubService.createWebhook(userId, body.owner, body.repo, webhookUrl, config.GITHUB_WEBHOOK_SECRET);
      return { success: true, configured: true, hookId: hook.id };
    } catch (error: any) {
      throw new AppError(error.message, 500, 'WEBHOOK_CONFIG_FAILED');
    }
  });
}
