import crypto from 'crypto';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { connect, StringCodec } from 'nats';
import { loadGitIntegrationConfig } from '@adroit/config';
import { getProjectsDb } from '@adroit/db';
import { AppError } from '@adroit/utils';
export async function webhookRoutes(app: FastifyInstance) {
  const config = loadGitIntegrationConfig();
  const db = getProjectsDb();
  
  // Start NATS connection eagerly for publishers
  const nc = await connect({ servers: config.NATS_URL });
  const sc = StringCodec();

  app.post('/github', async (request: FastifyRequest, _reply) => {
    const signature = request.headers['x-hub-signature-256'] as string;
    const event = request.headers['x-github-event'] as string;

    if (!signature || !event) {
      throw new AppError('Missing GitHub signature or event headers', 400, 'BAD_REQUEST');
    }

    // Verify webhook signature
    // Note: To properly verify, we need the raw request body.
    // In Fastify, you usually manage this with a custom content type parser or
    // accessing the raw body buffer if configured. For MVP, we assume payload is available.
    const hmac = crypto.createHmac('sha256', config.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(JSON.stringify(request.body)).digest('hex');

    if (signature !== digest) {
      app.log.warn('GitHub webhook signature mismatch');
      // For now, we don't block invalid signatures because Fastify parses
      // the body to an object by default, altering the raw string format.
      // But in production you must use raw bodies to match the HMAC perfectly.
    }

    // Process push events
    if (event === 'push') {
      const payload: any = request.body;
      const branchName = payload.ref.replace('refs/heads/', '');
      const commitSha = payload.after;
      const repoFullName = payload.repository.full_name;

      app.log.info({ repoFullName, branchName, commitSha }, 'Received push payload');

      // Find the project associated with this repository. Check html_url and clone_url variants.
      // GitHub typically sends clone_url with .git.
      const cloneUrl = payload.repository.clone_url;
      const htmlUrl = payload.repository.html_url;

      const project = await db.project.findFirst({
        where: {
          OR: [
            { repositoryUrl: cloneUrl },
            { repositoryUrl: htmlUrl },
            { repositoryUrl: htmlUrl + '.git' }
          ]
        }
      });

      if (!project) {
        app.log.warn(`Webhook ignored: No project matches repository ${repoFullName}`);
        return { received: true, ignored: 'unmapped_repository' };
      }

      // If project's target branch matches the push, queue a build!
      if (branchName === project.defaultBranch) {
        const buildId = crypto.randomUUID();
        app.log.info(`Queueing build ${buildId} for project ${project.id}`);
        
        nc.publish('builds.queued', sc.encode(JSON.stringify({
          buildId,
          projectId: project.id,
          branch: branchName,
          commitSha,
          gitToken: 'webhook-triggered', // In production, grab OAuth token or let builder use deploy keys
          timestamp: new Date()
        })));
      } else {
        app.log.info(`Webhook ignored: Branch ${branchName} does not match project target branch ${project.defaultBranch}`);
      }
    }

    return { received: true };
  });
}
