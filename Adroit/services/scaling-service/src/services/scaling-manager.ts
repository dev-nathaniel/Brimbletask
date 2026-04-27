import axios from 'axios';
import { NatsConnection, StringCodec } from 'nats';
import { createServiceLogger } from '@adroit/utils';

const log = createServiceLogger('scaling-service:manager');
const sc = StringCodec();

interface StatsPoint {
  projectId: string;
  cpuPercent: number;
  memoryBytes: number;
  instances: number;
}

export class ScalingManager {
  private RUNTIME_URL = process.env.RUNTIME_SERVICE_URL || 'http://localhost:3007';
  private statsWindow: Map<string, number[]> = new Map();
  private cooldowns: Map<string, number> = new Map();

  constructor(private nc: NatsConnection) {}

  async start() {
    log.info('Starting Scaling Manager');

    // Subscribe to all project stats
    const sub = this.nc.subscribe('monitoring.stats.*');
    
    (async () => {
      for await (const m of sub) {
        try {
          const stats: StatsPoint = JSON.parse(sc.decode(m.data));
          await this.processStats(stats);
        } catch (err) {
          log.error({ err }, 'Failed to process stats message');
        }
      }
    })();
  }

  private async processStats(stats: StatsPoint) {
    const { projectId, cpuPercent, instances } = stats;

    // Maintain window
    if (!this.statsWindow.has(projectId)) {
      this.statsWindow.set(projectId, []);
    }
    const window = this.statsWindow.get(projectId)!;
    window.push(cpuPercent);
    if (window.length > 5) window.shift();

    if (window.length < 3) return; // Need more data

    const avgCpu = window.reduce((a, b) => a + b, 0) / window.length;
    
    // Check cooldown (5 minute wait between scaling actions)
    const now = Date.now();
    const lastScale = this.cooldowns.get(projectId) || 0;
    if (now - lastScale < 600000) return; // 10 minute cooldown between scaling actions

    // Scaling Logic
    if (avgCpu > 80 && instances < 5) {
      log.info({ projectId, avgCpu, currentInstances: instances }, 'Scaling UP project');
      await this.scaleProject(projectId, instances + 1);
    } else if (avgCpu < 5 && instances > 1) {
      log.info({ projectId, avgCpu, currentInstances: instances }, 'Scaling DOWN project');
      await this.scaleProject(projectId, instances - 1);
    }
  }

  async forceScale(projectId: string, newCount: number) {
    log.warn({ projectId, newCount }, 'Force scaling triggered');
    await this.scaleProject(projectId, newCount);
  }

  private async scaleProject(projectId: string, newCount: number) {
    try {
      await axios.patch(`${this.RUNTIME_URL}/api/v1/runtime/jobs/${projectId}/scale`, {
        count: newCount
      });
      this.cooldowns.set(projectId, Date.now());
      log.info({ projectId, newCount }, 'Successfully scaled project');
    } catch (err) {
      log.error({ projectId, err: (err as any).message }, 'Failed to scale project');
    }
  }
}
