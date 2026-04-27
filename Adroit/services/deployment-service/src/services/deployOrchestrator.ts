import { createServiceLogger, AppError } from '@adroit/utils';
import { loadDeploymentConfig } from '@adroit/config';

const log = createServiceLogger('deploy-orchestrator');

export class DeployOrchestrator {
  private config: ReturnType<typeof loadDeploymentConfig>;

  constructor() {
    this.config = loadDeploymentConfig();
  }

  /**
   * Orchestrates the rollout of a new image via Runtime Service
   */
  async rolloutImage(buildId: string, projectId: string, imageTag: string): Promise<void> {
    log.info(`Orchestrating deployment for build ${buildId} utilizing project ${projectId}`);
    
    log.info('--> Provisioning new job configuration');
    
    log.info(`--> Instructing Runtime Service to apply new job spec at ${this.config.RUNTIME_SERVICE_URL}`);
    
    const token = Buffer.from('internal-service-call').toString('base64');

    const res = await fetch(`${this.config.RUNTIME_SERVICE_URL}/api/v1/runtime/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        projectId,
        imageTag,
        buildId
      })
    });

    if (!res.ok) {
      const errorText = await res.text();
      log.error(`Runtime API failed with status ${res.status}: ${errorText}`);
      throw new AppError('Failed to apply job to runtime', res.status, 'RUNTIME_ERROR');
    }

    log.info('--> Shifting traffic (Rolling update initiated)');
  }

  /**
   * Orchestrates native rollbacks via Runtime Service
   */
  async revertDeployment(projectId: string, imageTag: string, buildId?: string): Promise<void> {
    log.info(`Orchestrating native rollback for project ${projectId} to image tag ${imageTag}`);
    const token = Buffer.from('internal-service-call').toString('base64');

    const res = await fetch(`${this.config.RUNTIME_SERVICE_URL}/api/v1/runtime/jobs/${projectId}/revert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ imageTag, buildId })
    });

    if (!res.ok) {
      const errorText = await res.text();
      log.error(`Runtime API failed to revert job with status ${res.status}: ${errorText}`);
      throw new AppError('Failed to revert job natively', res.status, 'RUNTIME_ERROR');
    }

    log.info('--> Native revert instruction accepted successfully');
  }
}
