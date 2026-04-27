import { AppError } from '@adroit/utils';
import { GitRepository, GitBranch } from '@adroit/types';
import { getIdentityDb } from '@adroit/db';

const GITHUB_API = 'https://api.github.com';

export class GitHubService {
  /**
   * Helper to retrieve a user's GitHub access token from the Identity DB
   */
  private static async getAccessToken(userId: string): Promise<string> {
    const db = getIdentityDb();
    const account = await db.oAuthAccount.findFirst({
      where: { userId, provider: 'github' },
    });

    if (!account?.accessToken) {
      throw new AppError('GitHub account not connected', 400, 'OAUTH_NOT_CONNECTED');
    }

    return account.accessToken;
  }

  /**
   * Authenticated fetch helper
   */
  private static async authFetch(path: string, token: string) {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Adroit-PaaS',
      },
    });

    if (!res.ok) {
      if (res.status === 401) throw new AppError('GitHub token expired or revoked', 401, 'OAUTH_INVALID');
      throw new AppError(`GitHub API Error: ${res.statusText}`, res.status, 'GITHUB_API_ERROR');
    }

    return res.json();
  }

  /**
   * List all repositories for the connected user (paginated)
   */
  static async listRepositories(userId: string): Promise<GitRepository[]> {
    const token = await this.getAccessToken(userId);
    let allRepos: any[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const reposPage = await this.authFetch(`/user/repos?sort=updated&per_page=100&page=${page}`, token) as any[];
      allRepos = allRepos.concat(reposPage);
      if (reposPage.length < 100) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return allRepos.map(repo => ({
      id: repo.id.toString(),
      provider: 'github',
      owner: repo.owner.login,
      name: repo.name,
      fullName: repo.full_name,
      private: repo.private,
      defaultBranch: repo.default_branch,
      cloneUrl: repo.clone_url,
      updatedAt: new Date(repo.updated_at),
    }));
  }

  /**
   * List branches for a specific repository (paginated)
   */
  static async listBranches(userId: string, owner: string, repo: string): Promise<GitBranch[]> {
    const token = await this.getAccessToken(userId);
    
    let allBranches: any[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const branchesPage = await this.authFetch(`/repos/${owner}/${repo}/branches?per_page=100&page=${page}`, token) as any[];
      allBranches = allBranches.concat(branchesPage);
      if (branchesPage.length < 100) {
        hasMore = false;
      } else {
        page++;
      }
    }

    return allBranches.map(branch => ({
      name: branch.name,
      commitSha: branch.commit.sha,
    }));
  }

  /**
   * Set up a webhook on a specific repository natively
   */
  static async createWebhook(userId: string, owner: string, repo: string, webhookUrl: string, secret: string) {
    const token = await this.getAccessToken(userId);
    
    // Check if webhook already exists to avoid duplicates
    const hooks = await this.authFetch(`/repos/${owner}/${repo}/hooks`, token) as any[];
    const existing = hooks.find(h => h.config.url === webhookUrl);
    
    if (existing) {
      return existing; // Already configured
    }

    const payload = {
      name: 'web',
      active: true,
      events: ['push'],
      config: {
        url: webhookUrl,
        content_type: 'json',
        secret: secret,
        insecure_ssl: '0'
      }
    };

    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/hooks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Adroit-PaaS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new AppError(`Repository not found or lacking admin access to configure webhooks for ${owner}/${repo}`, 404, 'GITHUB_API_ERROR');
      }
      const errText = await res.text();
      throw new AppError(`Failed to create GitHub webhook: ${errText}`, res.status, 'GITHUB_API_ERROR');
    }

    return res.json();
  }
}
