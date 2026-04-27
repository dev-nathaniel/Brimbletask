import { loadRuntimeConfig } from '@adroit/config';
import { AppError } from '@adroit/utils';

export class NomadClient {
  private config: ReturnType<typeof loadRuntimeConfig>;

  constructor() {
    this.config = loadRuntimeConfig();
  }

  /**
   * Helper for Nomad API fetch
   */
  private async fetchNomad(path: string, options: RequestInit = {}, skipJson = false) {
    const res = await fetch(`${this.config.NOMAD_ADDR}/v1${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new AppError(`Nomad API Error: ${text}`, res.status, 'NOMAD_ERROR');
    }

    if (res.status === 204) return null;
    if (skipJson) return res.text();
    return res.json();
  }

  /**
   * Registers or updates a job in Nomad
   */
  async submitJob(jobDefinition: any) {
    // Basic HCL-to-JSON evaluation happens via nomad wrapper, 
    // but the API takes native JSON representation of jobs.
    return this.fetchNomad('/jobs', {
      method: 'POST',
      body: JSON.stringify({ Job: jobDefinition }),
    });
  }

  /**
   * Get job status
   */
  async getJob(jobId: string) {
    return this.fetchNomad(`/job/${jobId}`);
  }

  /**
   * Stop a job and purge it
   */
  async stopJob(jobId: string) {
    return this.fetchNomad(`/job/${jobId}?purge=true`, {
      method: 'DELETE',
    });
  }

  /**
   * Retrieve allocations for a job to fetch logs
   */
  async getJobAllocations(jobId: string) {
    return this.fetchNomad(`/job/${jobId}/allocations`);
  }

  /**
   * Stream Nomad logs for a specific allocation
   */
  async getLogs(allocId: string, task: string = 'server', type: string = 'stdout') {
    return this.fetchNomad(`/client/fs/logs/${allocId}?task=${task}&type=${type}&plain=true`, {}, true);
  }

  /**
   * Get all historic versions of a job
   */
  async getJobVersions(jobId: string) {
    return this.fetchNomad(`/job/${jobId}/versions`);
  }

  /**
   * Revert a job to a specific Nomad Job Version natively
   */
  async revertJob(jobId: string, jobVersion: number) {
    return this.fetchNomad(`/job/${jobId}/revert`, {
      method: 'POST',
      body: JSON.stringify({
        JobID: jobId,
        JobVersion: jobVersion,
        EnforcePriorVersion: null
      }),
    });
  }
  /**
   * Get resource usage statistics for a specific allocation
   */
  async getAllocationStats(allocId: string) {
    return this.fetchNomad(`/client/allocation/${allocId}/stats`);
  }

  /**
   * Update the instance count of a specific task group in a job
   */
  async updateJobCount(jobId: string, taskGroupName: string, count: number) {
    return this.fetchNomad(`/job/${jobId}/scale`, {
      method: 'POST',
      body: JSON.stringify({
        Count: count,
        Target: {
          Group: taskGroupName
        },
        Message: `Auto-scaled by Adroit Scaling Service`
      }),
    });
  }

  /**
   * Get deployments for a job
   */
  async getJobDeployments(jobId: string) {
    return this.fetchNomad(`/job/${jobId}/deployments`);
  }

  /**
   * Get a specific deployment status
   */
  async getDeployment(deploymentId: string) {
    return this.fetchNomad(`/deployment/${deploymentId}`);
  }

  /**
   * Get a specific allocation status
   */
  async getAllocation(allocId: string) {
    return this.fetchNomad(`/allocation/${allocId}`);
  }
}
