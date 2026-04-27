import Docker from 'dockerode';
import { RuntimeProvider, DeploymentResult, RuntimeStats } from './runtime-provider.js';
import { loadRuntimeConfig } from '@adroit/config';

export class DockerProvider implements RuntimeProvider {
  name = 'docker' as const;
  private docker: Docker;
  private config: ReturnType<typeof loadRuntimeConfig>;

  private networkName: string = 'bridge';

  constructor() {
    this.docker = new Docker({ socketPath: '/var/run/docker.sock' });
    this.config = loadRuntimeConfig();
    
    // Attempt to detect the network we are running on (if in Docker)
    // We assume we are in 'adroit-services' or similar
    this.docker.getContainer('adroit-services').inspect()
      .then(info => {
        this.networkName = Object.keys(info.NetworkSettings.Networks)[0] || 'bridge';
        console.log(`[DOCKER] Detected network: ${this.networkName}`);
      })
      .catch(() => {
        // Fallback to bridge or look for anything 'adroit'
        this.docker.listNetworks().then(nets => {
          const adroitNet = nets.find(n => n.Name.includes('adroit'));
          if (adroitNet) this.networkName = adroitNet.Name;
        }).catch(() => {});
      });
  }

  private async fetchConsul(path: string, options: RequestInit = {}) {
    const url = `${this.config.CONSUL_ADDR}/v1${path}`;
    try {
      const res = await fetch(url, {
        ...options,
        headers: { 'Content-Type': 'application/json', ...options.headers },
      });
      if (!res.ok) {
        const text = await res.text();
        console.error(`Consul API Error (${url}): ${text}`);
      }
      return res;
    } catch (err: any) {
      console.error(`Consul Fetch Failed (${url}): ${err.message}`, err);
      throw err;
    }
  }

  async submitJob(params: {
    projectId: string;
    slug: string;
    imageTag: string;
    buildId?: string;
    deployConfig: any;
    envVars: Record<string, string>;
  }): Promise<DeploymentResult> {
    const { projectId, slug, imageTag, deployConfig, envVars, buildId } = params;
    
    // Recovery path: if imageTag is empty, try to find and restart the latest container
    if (!imageTag) {
      console.log(`[ORCHESTRATOR] Recovery attempt for project ${projectId}`);
      const containers = await this.docker.listContainers({
        all: true,
        filters: { label: [`adroit.projectId=${projectId}`] }
      });
      if (containers.length > 0) {
        const sorted = containers.sort((a, b) => b.Created - a.Created);
        const latest = sorted[0]!;
        const c = this.docker.getContainer(latest.Id);
        if (latest.State !== 'running') {
          console.log(`[ORCHESTRATOR] Restarting stopped container ${latest.Id}`);
          await c.start();
        }
        // Always re-register in Consul to ensure routing is up to date
        await this.registerInConsul(latest.Id).catch(err => console.error(`[ORCHESTRATOR] Consul re-registration failed: ${err.message}`));
        
        return { success: true, provider: 'docker', jobId: latest.Id, metadata: { status: 'restarted' } };
      }
      throw new Error(`No container found to recover for project ${projectId}`);
    }

    const safeBuildId = buildId?.slice(0, 8) || 'manual';
    const safeContainerName = `adroit-prj-${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${safeBuildId}`;
    
    // 1. We NO LONGER stop the existing container here to allow zero-downtime transition.
    // Instead, we'll start the new one and cleanup the old one once healthy.
 
    const appPort = parseInt(envVars['PORT'] || '3000');
    
    // 2. Start new container
    const container = await this.docker.createContainer({
      Image: imageTag,
      name: safeContainerName,
      Env: Object.entries(envVars).map(([k, v]) => `${k}=${v}`),
      Entrypoint: deployConfig.startCommand ? ['/bin/sh', '-c'] : undefined,
      Cmd: deployConfig.startCommand ? [deployConfig.startCommand] : undefined,
      HostConfig: {
        PortBindings: {
          [`${appPort}/tcp`]: [{ HostPort: '0' }] // Let Docker pick a random port
        },
        RestartPolicy: { Name: 'always' },
        NetworkMode: this.networkName
      },
      Labels: {
        'adroit.projectId': projectId,
        'adroit.buildId': buildId || 'manual',
        'adroit.managed': 'true',
        'adroit.type': 'app',
        'adroit.healthPath': deployConfig.healthCheckPath || '/',
        'adroit.slug': slug,
        'adroit.appPort': appPort.toString()
      }
    });

    await container.start();
    await this.registerInConsul(container.id);

    const info = await container.inspect();
    const mappedPort = info.NetworkSettings.Ports[`${appPort}/tcp`]?.[0]?.HostPort;
    if (!mappedPort) throw new Error('Mapped port not found');

    return {
      success: true,
      jobId: safeContainerName,
      provider: 'docker',
      metadata: { containerId: container.id, mappedPort, buildId: params.buildId }
    };
  }

  private async registerInConsul(containerId: string): Promise<void> {
    const container = this.docker.getContainer(containerId);
    const info = await container.inspect();
    const labels = info.Config.Labels || {};
    
    const projectId = labels['adroit.projectId'];
    const buildId = labels['adroit.buildId'] || 'manual';
    const slug = labels['adroit.slug'] || 'app';
    const appPort = parseInt(labels['adroit.appPort'] || '3000');
    const healthPath = labels['adroit.healthPath'] || '/';
    
    if (!projectId) return;

    // On Mac, we MUST use host.docker.internal and the mapped host port
    // because Caddy in Docker cannot resolve random container names.
    const mappedPort = info.NetworkSettings.Ports[`${appPort}/tcp`]?.[0]?.HostPort;
    if (!mappedPort) {
      console.warn(`[DOCKER] No mapped port found for ${containerId}, skipping Consul registration`);
      return;
    }

    const serviceName = `srv-${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const safeBuildId = buildId.slice(0, 8);
    const hostIp = process.env.ADROIT_HOST_IP || 'host.docker.internal';

    console.log(`[DOCKER] Registering ${serviceName} in Consul (Address: ${hostIp}:${mappedPort})`);

    await this.fetchConsul('/agent/service/register', {
      method: 'PUT',
      body: JSON.stringify({
        ID: `${serviceName}-${safeBuildId}-docker`,
        Name: serviceName,
        Tags: [
          'traefik.enable=true',
          `traefik.http.routers.${serviceName}.rule=Host(\`${slug}.localhost\`)`,
          `traefik.http.routers.${serviceName}-alias.rule=Host(\`${slug.replace(/-/g, '')}.localhost\`)`,
          'adroit-managed=true',
          `project-id=${projectId}`,
          `build-id=${buildId}`
        ],
        Address: hostIp,
        Port: parseInt(mappedPort),
        Check: {
          HTTP: `http://${hostIp}:${mappedPort}${healthPath}`,
          Interval: '10s',
          Timeout: '2s',
          DeregisterCriticalServiceAfter: '1m'
        }
      })
    });
  }

  async stopJob(projectId: string): Promise<{ success: boolean; message: string }> {
    const containers = await this.docker.listContainers({
      all: true,
      filters: JSON.stringify({ label: [`adroit.projectId=${projectId}`] })
    });

    for (const containerInfo of containers) {
      try {
        const container = this.docker.getContainer(containerInfo.Id);
        await container.stop().catch(() => {});
        await container.remove().catch(() => {});
      } catch (err) {}
    }

    // Deregister all instances from Consul
    const serviceName = `srv-${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const services = await this.fetchConsul(`/agent/services`).then(res => res.json());
    for (const [id, s] of Object.entries(services as any)) {
      if ((s as any).Service === serviceName) {
        await this.fetchConsul(`/agent/service/deregister/${id}`, { method: 'PUT' });
      }
    }

    return { success: true, message: `Stopped all versions of project ${projectId}` };
  }

  async scaleJob(_projectId: string, _count: number): Promise<{ success: boolean; count: number }> {
     // Local Docker provider doesn't support multiple instances easily in this simple implementation
     // We just keep the 1 container running.
     return { success: true, count: 1 };
  }

  async getLogs(projectId: string, type: 'stdout' | 'stderr' = 'stdout'): Promise<{ 
    projectId: string; 
    type: string; 
    lines: string[] 
  }> {
    const containers = await this.docker.listContainers({
      filters: JSON.stringify({ label: [`adroit.projectId=${projectId}`] })
    });
    if (containers.length === 0) throw new Error('No running containers found for project');
    
    // Pick the most recent one
    const latest = containers.sort((a, b) => b.Created - a.Created)[0]!;
    const container = this.docker.getContainer(latest.Id);
    const logs = await container.logs({
      stdout: type === 'stdout',
      stderr: type === 'stderr',
      tail: 100
    });

    // Docker logs have a 8-byte header for each line (stream type, length)
    // For simplicity, we just strip common non-printable characters or use a basic buffer slice
    const lines = logs.toString('utf-8').split('\n').filter(l => l.trim().length > 0);
    return { projectId, type, lines };
  }

  async getStats(projectId: string): Promise<RuntimeStats> {
    const containers = await this.docker.listContainers({
      filters: JSON.stringify({ label: [`adroit.projectId=${projectId}`] })
    });
    if (containers.length === 0) return { projectId, cpuPercent: 0, memoryBytes: 0, instances: 0 };
    
    const latest = containers.sort((a, b) => b.Created - a.Created)[0]!;
    const container = this.docker.getContainer(latest.Id);
    try {
      const stats = await container.stats({ stream: false }) as any;
      
      // CPU calculation (very simplified)
      const cpuDelta = stats.cpu_stats.cpu_usage.total_usage - stats.precpu_stats.cpu_usage.total_usage;
      const systemDelta = stats.cpu_stats.system_cpu_usage - stats.precpu_stats.system_cpu_usage;
      const cpuPercent = systemDelta > 0 ? (cpuDelta / systemDelta) * stats.cpu_stats.online_cpus * 100.0 : 0;

      return {
        projectId,
        cpuPercent: parseFloat(cpuPercent.toFixed(2)),
        memoryBytes: stats.memory_stats.usage || 0,
        instances: 1
      };
    } catch (err) {
      return { projectId, cpuPercent: 0, memoryBytes: 0, instances: 0 };
    }
  }

  async checkDeploymentHealth(projectId: string): Promise<{ 
    status: 'success' | 'failed' | 'deploying'; 
    error?: string;
    description?: string;
  }> {
    try {
      const containers = await this.docker.listContainers({
        filters: JSON.stringify({ label: [`adroit.projectId=${projectId}`] })
      });
      
      if (containers.length === 0) return { status: 'failed', error: 'No containers found' };
      
      // We check health of the LATEST container
      const sorted = containers.sort((a, b) => b.Created - a.Created);
      const latestInfo = sorted[0]!;
      const container = this.docker.getContainer(latestInfo.Id);
      const info = await container.inspect();
      
      if (!info.State.Running) {
        return { status: 'failed', error: `Container is not running (State: ${info.State.Status}, ExitCode: ${info.State.ExitCode})` };
      }

      // Perform HTTP health check if possible
      const labels = info.Config.Labels || {};
      const currentBuildId = labels['adroit.buildId'];
      
      // Internal Health Check (Container to Container)
      // Pick first bridge network IP
      const networks = info.NetworkSettings.Networks;
      const networkName = Object.keys(networks)[0];
      const internalIp = networkName ? networks[networkName]!.IPAddress : (info.NetworkSettings as any).IPAddress;
      
      const portKey = Object.keys(info.NetworkSettings.Ports)[0];
      const internalPort = portKey ? portKey.split('/')[0] : '3000';
      const healthPath = labels['adroit.healthPath'] || '/';
      
      if (internalIp && internalPort) {
        try {
          const url = `http://${internalIp}:${internalPort}${healthPath}`;
          const healthRes = await fetch(url, { signal: AbortSignal.timeout(2000) });
          if (healthRes.ok) {
            // SUCCESS! Now cleanup OLD containers (Zero-Downtime Transition)
            const oldContainers = sorted.slice(1);
            for (const old of oldContainers) {
               const oldLabelId = old.Labels['adroit.buildId'];
               if (oldLabelId !== currentBuildId) {
                  const serviceName = `srv-${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
                  const safeOldBuildId = oldLabelId?.slice(0, 8) || 'manual';
                  const consulId = `${serviceName}-${safeOldBuildId}-docker`;
                  
                  // Graceful Handover: 
                  // 1. Deregister from Consul FIRST so Caddy stops sending traffic
                  console.log(`[ROLLOUT] Removing ${consulId} from Consul...`);
                  await this.fetchConsul(`/agent/service/deregister/${consulId}`, { method: 'PUT' }).catch(() => {});
                  
                  // 2. Wait a few seconds for Caddy propagation before killing the container
                  // We do this in a separate async flow to not block the health check loop
                  const cleanup = async () => {
                    const delay = 5000; 
                    console.log(`[ROLLOUT] Waiting ${delay}ms before stopping old container ${old.Id}`);
                    await new Promise(r => setTimeout(r, delay));
                    
                    const c = this.docker.getContainer(old.Id);
                    console.log(`[ROLLOUT] Stopping old version: ${old.Id} (build ${oldLabelId})`);
                    await c.stop().catch(() => {});
                    await c.remove().catch(() => {});
                  };
                  
                  cleanup().catch(err => console.error(`[ROLLOUT] Cleanup failed for ${old.Id}:`, err));
               }
            }
            return { status: 'success', description: 'Container is healthy' };
          }
        } catch (e) {
          return { status: 'deploying', description: 'Waiting for HTTP health check...' };
        }
      }

      return { status: 'deploying', description: 'Container running, waiting for port mapping...' };
    } catch (err: any) {
      return { status: 'failed', error: err.message };
    }
  }

  async revertJob(_projectId: string, _imageTag: string, _buildId?: string): Promise<DeploymentResult> {
    // In Docker, reverting is just deploying the old image tag.
    // The higher level service (index.ts) provides the imageTag.
    // However, submitJob needs more than just projectId and imageTag.
    // For now, we'll return a special status that tells the index to use submitJob instead.
    // Or better, we implement it here if we can get the config.
    // But since index.ts handles the config fetching for submitJob, 
    // it's easier to just have the index call submitJob for rollbacks too.
    return { success: false, provider: 'docker', jobId: '', metadata: { error: 'Use submitJob for docker rollbacks' } };
  }
}
