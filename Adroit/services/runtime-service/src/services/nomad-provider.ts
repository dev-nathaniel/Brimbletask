import { NomadClient } from './nomad.js';
import { RuntimeProvider, DeploymentResult, RuntimeStats } from './runtime-provider.js';
import { AppError } from '@adroit/utils';

export class NomadProvider implements RuntimeProvider {
  name = 'nomad' as const;
  private client: NomadClient;

  constructor() {
    this.client = new NomadClient();
  }

  async submitJob(params: {
    projectId: string;
    slug: string;
    imageTag: string;
    buildId?: string;
    deployConfig: any;
    envVars: Record<string, string>;
  }): Promise<DeploymentResult> {
    const { projectId, slug, imageTag, deployConfig, envVars } = params;
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const safeSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    const appPort = parseInt(envVars['PORT'] || '3000');
    const healthCheckPath = deployConfig.healthCheckPath?.trim() || null;

    const sizeMapping: Record<string, { cpu: number, memory: number }> = {
      'small': { cpu: 200, memory: 512 },
      'medium': { cpu: 500, memory: 1024 },
      'large': { cpu: 1000, memory: 2048 }
    };
    const selectedMapping = sizeMapping[deployConfig.instanceSize || 'small'] || sizeMapping['small'];
    const { cpu, memory } = selectedMapping!;

    const jobDef = {
      Region: 'global',
      ID: `project-${safeJobId}`,
      Name: `Project ${projectId}`,
      Type: 'service',
      Datacenters: ['dc1'],
      TaskGroups: [
        {
          Name: 'app',
          Count: deployConfig.instanceCount,
          Update: {
            Canary: 1,
            AutoPromote: true,
            MaxParallel: 1,
            MinHealthyTime: 30000000000, // 30s
            HealthyDeadline: 300000000000, // 5m
            ProgressDeadline: 600000000000, // 10m
            AutoRevert: true,
            HealthCheck: 'checks',
          },
          Networks: [
            {
              DynamicPorts: [
                { Label: 'http', To: appPort },
                { Label: 'health', To: 9000 },
              ],
            },
          ],
          Services: [
            {
              Name: `srv-${safeJobId}`,
              Provider: 'consul',
              PortLabel: 'http',
              Address: process.env['ADROIT_HOST_IP'] || '192.168.1.164',
              OnUpdate: 'require_healthy',
              Tags: [
                'traefik.enable=true',
                `traefik.http.routers.srv-${safeJobId}.rule=Host(\`${safeJobId}.localhost\`) || Host(\`${projectId.toLowerCase().replace(/[^a-z0-9]/g, '')}.localhost\`) || Host(\`${safeSlug}.localhost\`)`,
                `traefik.http.services.srv-${safeJobId}.loadbalancer.healthcheck.interval=5s`,
              ],
              Checks: [
                {
                  Type: 'http',
                  PortLabel: 'health',
                  Path: '/',
                  Interval: 5000000000,
                  Timeout: 2000000000,
                  InitialStatus: 'critical',
                  OnUpdate: 'require_healthy',
                  DeregisterCriticalServiceAfter: '1m',
                  SuccessBeforePassing: 2,
                },
              ],
            },
          ],
          Tasks: [
            {
              Name: 'server',
              Driver: 'docker',
              Config: {
                image: imageTag,
                ports: ['http'],
                force_pull: true,
                entrypoint: deployConfig.startCommand ? ['/bin/sh', '-c'] : undefined,
                command: deployConfig.startCommand || undefined,
                network_mode: 'adroit_default'
              },
              Env: envVars,
              Resources: {
                CPU: cpu,
                MemoryMB: memory,
              },
            },
            {
              Name: 'health-proxy',
              Driver: 'docker',
              Config: {
                image: 'node:18-alpine',
                ports: ['health'],
                command: 'node',
                args: [
                  '-e',
                  `
const http = require('http');
const port = 9000;
const targetPath = '${healthCheckPath || '/'}';
const hostname = process.env.ADROIT_HOST_IP || '192.168.1.164';

console.log('[HEALTH] Starting Health Proxy on port ' + port + '...');
console.log('[HEALTH] Target host: ' + hostname + ':' + process.env.APP_PORT);

http.createServer((req, res) => {
  const options = {
    hostname: hostname,
    port: parseInt(process.env.APP_PORT),
    path: targetPath,
    method: 'GET',
    timeout: 2000
  };
  
  const attemptRequest = (retries) => {
    console.log('[HEALTH] Probing http://' + options.hostname + ':' + options.port + options.path + ' (Attempt ' + (4-retries) + ')...');
    
    const proxyReq = http.request(options, (proxyRes) => {
      proxyRes.on('data', () => {});
      proxyRes.on('end', () => {
        if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 400) {
          res.writeHead(200);
          res.end('OK');
        } else {
          res.writeHead(503);
          res.end('UNHEALTHY');
        }
      });
    });

    proxyReq.on('error', () => {
      if (retries > 0) setTimeout(() => attemptRequest(retries - 1), 1000);
      else { res.writeHead(503); res.end('OFFLINE'); }
    });

    proxyReq.end();
  };

  attemptRequest(3);
}).listen(port);
                  `
                ]
              },
              Env: {
                APP_PORT: '\${NOMAD_HOST_PORT_http}',
                ADROIT_HOST_IP: process.env['ADROIT_HOST_IP'] || '192.168.1.164'
              },
              Resources: {
                CPU: 5,
                MemoryMB: 64,
              },
            }
          ],
        },
      ],
    };

    const result = await this.client.submitJob(jobDef);
    return {
      success: true,
      jobId: jobDef.ID,
      provider: 'nomad',
      metadata: result
    };
  }

  async stopJob(projectId: string): Promise<{ success: boolean; message: string }> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    try {
      await this.client.stopJob(`project-${safeJobId}`);
      return { success: true, message: 'Nomad job stopped' };
    } catch (err: any) {
      if (err.status === 404) return { success: true, message: 'Job not found' };
      throw err;
    }
  }

  async scaleJob(projectId: string, count: number): Promise<{ success: boolean; count: number }> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    await this.client.updateJobCount(`project-${safeJobId}`, 'app', count);
    return { success: true, count };
  }

  async getLogs(projectId: string, type: 'stdout' | 'stderr' = 'stdout'): Promise<{ 
    projectId: string; 
    type: string; 
    lines: string[] 
  }> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const allocs = await this.client.getJobAllocations(`project-${safeJobId}`) as any[];
    if (!allocs || allocs.length === 0) throw new AppError('No running process found', 404, 'NOT_FOUND');
    const latest = allocs.sort((a, b) => b.CreateTime - a.CreateTime)[0];
    const logs = (await this.client.getLogs(latest.ID, 'server', type)) as string;
    return {
      projectId,
      type,
      lines: logs.split('\n').filter((l: string) => l.trim().length > 0)
    };
  }

  async getStats(projectId: string): Promise<RuntimeStats> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const allocs = await this.client.getJobAllocations(`project-${safeJobId}`) as any[];
    const running = (allocs || []).filter(a => a.ClientStatus === 'running');
    
    let totalCpu = 0;
    let totalMemory = 0;

    for (const alloc of running) {
      try {
        const stats = await this.client.getAllocationStats(alloc.ID) as any;
        totalCpu += stats.ResourceUsage?.CpuStats?.Percent || 0;
        totalMemory += stats.ResourceUsage?.MemoryStats?.RSS || 0;
      } catch (err) {}
    }

    return {
      projectId,
      cpuPercent: parseFloat(totalCpu.toFixed(2)),
      memoryBytes: totalMemory,
      instances: running.length
    };
  }

  async checkDeploymentHealth(projectId: string): Promise<{ 
    status: 'success' | 'failed' | 'deploying'; 
    error?: string;
    description?: string;
  }> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const jobDeployments = await this.client.getJobDeployments(`project-${safeJobId}`) as any[];
    if (!jobDeployments || jobDeployments.length === 0) {
      return { status: 'deploying', description: 'No deployments found yet' };
    }

    const latest = jobDeployments.sort((a: any, b: any) => b.CreateIndex - a.CreateIndex)[0];

    if (latest.Status === 'successful') {
      return { status: 'success', description: 'Nomad rollout successful' };
    }

    if (latest.Status === 'failed' || latest.Status === 'cancelled') {
      return { status: 'failed', error: latest.StatusDescription || 'Nomad rollout failed' };
    }

    // Check for crashes in latest allocation
    const allocs = await this.client.getJobAllocations(`project-${safeJobId}`) as any[];
    const latestAlloc = (allocs || [])
      .filter((a: any) => a.DeploymentStatus)
      .sort((a: any, b: any) => b.CreateTime - a.CreateTime)[0];

    const serverTask = latestAlloc?.TaskStates?.server;
    const isCrashed = latestAlloc?.ClientStatus === 'failed' || 
                     (serverTask?.State === 'dead' && serverTask?.Failed);

    if (isCrashed) {
      return { status: 'failed', error: 'Process crashed during rollout' };
    }

    return { status: 'deploying', description: latest.StatusDescription || 'Rolling out...' };
  }

  async revertJob(projectId: string, imageTag: string, _buildId?: string): Promise<DeploymentResult> {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const versionsResponse = await this.client.getJobVersions(`project-${safeJobId}`) as any;
    const versions = versionsResponse.Versions || [];

    let targetVersionNum = -1;
    for (const v of versions) {
      const taskConfig = v.TaskGroups?.[0]?.Tasks?.[0]?.Config;
      if (taskConfig && taskConfig.image === imageTag) {
        targetVersionNum = v.Version;
        break;
      }
    }

    if (targetVersionNum === -1) throw new AppError('Rollback version not found', 404, 'NOT_FOUND');

    await this.client.revertJob(`project-${safeJobId}`, targetVersionNum);
    return {
      success: true,
      jobId: `project-${safeJobId}`,
      provider: 'nomad'
    };
  }
}
