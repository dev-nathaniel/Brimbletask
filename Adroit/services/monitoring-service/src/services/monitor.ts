import axios from 'axios';
import { NatsConnection, StringCodec } from 'nats';
import { createServiceLogger } from '@adroit/utils';
import { getProjectsDb } from '@adroit/db';

const log = createServiceLogger('monitoring-service:monitor');
const sc = StringCodec();

export interface ProjectHealthStatus {
  projectId: string;
  status: 'healthy' | 'unhealthy' | 'deploying' | 'unknown';
  instances: number;
  healthyInstances: number;
  lastChanged: string;
}

export class HealthMonitor {
  private db = getProjectsDb();
  private pollInterval: NodeJS.Timeout | null = null;
  private CONSUL_URL = process.env.CONSUL_URL || 'http://localhost:8500';
  private healthCache: Map<string, ProjectHealthStatus> = new Map();

  constructor(private nc: NatsConnection) {}

  async start() {
    log.info('Starting Health Monitor poll loop');
    this.poll(); // Initial poll
    this.pollInterval = setInterval(() => this.poll(), 10000); // Poll every 10s
  }

  async stop() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  private async poll() {
    if (process.env.PAUSE_MONITORING !== 'false') { // Paused by default now per user request
      log.info('Monitoring is PAUSED (default)');
      return;
    }
    try {
      const projects = await this.db.project.findMany({
        select: { id: true, slug: true }
      });

      for (const project of projects) {
        await this.checkProjectHealth(project.id);
      }
    } catch (err) {
      log.error({ err }, 'Failed to poll project health');
    }
  }

  private async checkProjectHealth(projectId: string) {
    const safeJobId = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const serviceName = `srv-${safeJobId}`;

    try {
      // Fetch health status from Consul
      const response = await axios.get(`${this.CONSUL_URL}/v1/health/service/${serviceName}`);
      const checks = response.data;

      const instances = checks.length;
      const healthyInstances = checks.filter((c: any) => 
        c.Checks.every((check: any) => check.Status === 'passing')
      ).length;

      let status: ProjectHealthStatus['status'] = 'unknown';

      if (instances === 0) {
        status = 'unknown'; // Or stopped if we check Nomad
      } else if (healthyInstances === instances) {
        status = 'healthy';
      } else if (healthyInstances > 0) {
        status = 'deploying'; // Some are up, some are not
      } else {
        status = 'unhealthy';
      }

      const currentHealth: ProjectHealthStatus = {
        projectId,
        status,
        instances,
        healthyInstances,
        lastChanged: new Date().toISOString()
      };

      const previousHealth = this.healthCache.get(projectId);

      if (!previousHealth || previousHealth.status !== status) {
        log.info({ projectId, status }, 'Project health status changed');
        this.nc.publish(`monitoring.health.${projectId}`, sc.encode(JSON.stringify(currentHealth)));
        this.healthCache.set(projectId, currentHealth);
      }

      // Fetch and publish resource stats
      try {
        const statsUrl = process.env.RUNTIME_SERVICE_URL || 'http://localhost:3007';
        const statsRes = await axios.get(`${statsUrl}/api/v1/runtime/stats/${projectId}`);
        if (statsRes.data) {
          this.nc.publish(`monitoring.stats.${projectId}`, sc.encode(JSON.stringify(statsRes.data)));
        }
      } catch (err) {
        log.warn({ projectId }, 'Failed to fetch stats from Runtime Service');
      }

    } catch (err) {
      log.warn({ projectId, err: (err as Error).message }, 'Failed to check project health in Consul');
    }
  }

  async getProjectHealth(projectId: string): Promise<ProjectHealthStatus> {
    const cached = this.healthCache.get(projectId);
    if (cached) return cached;

    // If not in cache, trigger immediate check
    await this.checkProjectHealth(projectId);
    return this.healthCache.get(projectId) || {
      projectId,
      status: 'unknown',
      instances: 0,
      healthyInstances: 0,
      lastChanged: new Date().toISOString()
    };
  }
}
