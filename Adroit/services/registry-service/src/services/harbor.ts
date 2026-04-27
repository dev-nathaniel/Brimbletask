import { loadRegistryConfig } from '@adroit/config';
import { AppError } from '@adroit/utils';

export class HarborClient {
  private baseUrl: string;
  private authHeader: string;

  constructor() {
    const config = loadRegistryConfig();
    this.baseUrl = config.HARBOR_URL.replace(/\/$/, '') + '/api/v2.0';
    this.authHeader = 'Basic ' + Buffer.from(`${config.HARBOR_ADMIN_USER}:${config.HARBOR_ADMIN_PASSWORD}`).toString('base64');
  }

  private async fetchHarbor(path: string, options: RequestInit = {}) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        'Authorization': this.authHeader,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      let message = res.statusText;
      try {
        const body = await res.json();
        message = (body as any)?.errors?.[0]?.message || message;
      } catch (e) {
        // ignore JSON parse error
      }
      throw new AppError(`Harbor API Error: ${message}`, res.status, 'HARBOR_ERROR');
    }

    if (res.status === 204 || res.status === 201) return null;
    return res.json();
  }

  /**
   * Ensures a Harbor project exists for the given tenant/namespace
   */
  async ensureProject(projectName: string, isPublic: boolean = false): Promise<void> {
    try {
      await this.fetchHarbor('/projects', {
        method: 'POST',
        body: JSON.stringify({
          project_name: projectName,
          public: isPublic ? 'true' : 'false',
        }),
      });
    } catch (err: any) {
      if (err.statusCode === 409 || err.message.includes('Conflict')) {
        // Project already exists
        return;
      }
      throw err;
    }
  }

  /**
   * Creates a robot account with pull/push access to a specific project
   */
  async createRobotAccount(projectName: string, robotName: string) {
    const data = await this.fetchHarbor('/robots', {
      method: 'POST',
      body: JSON.stringify({
        name: robotName,
        duration: -1, // Never expires
        disable: false,
        level: 'project',
        permissions: [
          {
            access: [
              { action: 'pull', resource: 'repository' },
              { action: 'push', resource: 'repository' }
            ],
            kind: 'project',
            namespace: projectName
          }
        ]
      })
    });
    return data; // contains `name` and `secret`
  }

  /**
   * List repositories in a project
   */
  async listRepositories(projectName: string) {
    return this.fetchHarbor(`/projects/${projectName}/repositories`);
  }

  /**
   * Delete an image tag
   */
  async deleteTag(projectName: string, repositoryName: string, tag: string) {
    return this.fetchHarbor(`/projects/${projectName}/repositories/${repositoryName}/artifacts/${tag}`, {
      method: 'DELETE'
    });
  }
}
