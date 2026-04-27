import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import websocket from '@fastify/websocket';
import { connect, StringCodec } from 'nats';
import { createServiceLogger, errorHandler } from '@adroit/utils';
import { loadLoggingConfig } from '@adroit/config';
import fs from 'fs';
import path from 'path';

const log = createServiceLogger('logging-service');

// Simple in-memory store for Phase 3. 
const logStore: Record<string, string[]> = {};
// Store for active WebSocket connections: logId -> Set<Socket>
const subscribers: Record<string, Set<any>> = {};
// Global status subscribers (listeners for ANY deployment update)
const statusSubscribers = new Set<any>();

const LOG_DIR = path.join(process.cwd(), 'data', 'logs');
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const appendToFile = (logId: string, chunk: string) => {
  const filePath = path.join(LOG_DIR, `${logId.replace(':', '_')}.log`);
  fs.appendFileSync(filePath, chunk + (chunk.endsWith('\n') ? '' : '\n'));
};

const readFromFile = (logId: string): string[] => {
  const filePath = path.join(LOG_DIR, `${logId.replace(':', '_')}.log`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8').split('\n').filter(l => l.length > 0);
  }
  return [];
};

async function main() {
  const config = loadLoggingConfig();
  const app = Fastify({ logger: false });

  await app.register(cors, { origin: true });
  await app.register(helmet);
  await app.register(websocket);
  app.setErrorHandler(errorHandler);

  // 1. Connect to NATS
  const nc = await connect({ servers: config.NATS_URL });
  const sc = StringCodec();
  log.info(`Logging Service connected to NATS at ${config.NATS_URL}`);

  const broadcast = (logId: string, chunk: string) => {
    if (subscribers[logId]) {
      for (const socket of subscribers[logId]!) {
        socket.send(JSON.stringify({ type: 'log', data: chunk }));
      }
    }
  };

  const broadcastStatus = (payload: any) => {
    for (const socket of statusSubscribers) {
      socket.send(JSON.stringify({ type: 'status', data: payload }));
    }
  };

  // 2. Subscribe to Log Streams
  nc.subscribe('build.logs.>', {
    callback: (err, msg) => {
      if (err) return log.error(err, 'Error in build logs subscription');
      const buildId = msg.subject.split('.').pop() || 'unknown';
      const chunk = sc.decode(msg.data);
      const logId = `build:${buildId}`;
      log.info({ buildId, chunkLen: chunk.length }, 'Received build log chunk');
      
      if (!logStore[logId]) logStore[logId] = [];
      logStore[logId]!.push(chunk);
      appendToFile(logId, chunk);
      broadcast(logId, chunk);
    }
  });

  nc.subscribe('runtime.logs.>', {
    callback: (err, msg) => {
      if (err) return log.error(err, 'Error in runtime logs subscription');
      const parts = msg.subject.split('.');
      const projectId = parts[2] || 'unknown';
      const deploymentId = parts[3] || 'unknown';
      const chunk = sc.decode(msg.data);
      const logId = `runtime:${projectId}:${deploymentId}`;
      log.info({ projectId, deploymentId, chunkLen: chunk.length }, 'Received isolated runtime log chunk');
      
      if (!logStore[logId]) logStore[logId] = [];
      logStore[logId]!.push(chunk);
      appendToFile(logId, chunk);
      
      // Broadcast to the specific isolated ID
      broadcast(logId, chunk);
      // Legacy broadcast for any clients still listening on project ID
      broadcast(`runtime:${projectId}`, chunk);
    }
  });

  nc.subscribe('deployments.>', {
    callback: (err, msg) => {
      if (err) return log.error(err, 'Error in deployments subscription');
      const payload = JSON.parse(sc.decode(msg.data));
      log.info({ subject: msg.subject, payload }, 'Received deployment event for broadcast');
      broadcastStatus(payload);
    }
  });
  
  nc.subscribe('builds.>', {
    callback: (err, msg) => {
      if (err) return log.error(err, 'Error in builds subscription');
      const payload = JSON.parse(sc.decode(msg.data));
      log.info({ subject: msg.subject, payload }, 'Received build event for broadcast');
      broadcastStatus(payload);
    }
  });

  // 3. API Endpoints
  app.get('/health', async () => ({ status: 'ok', service: 'logging-service' }));

  app.get('/api/v1/logs/build/:buildId', async (request: any) => {
    const { buildId } = request.params;
    const logId = `build:${buildId}`;
    let lines = logStore[logId];
    
    if (!lines || lines.length === 0) {
      lines = readFromFile(logId);
      if (lines.length > 0) logStore[logId] = lines;
    }

    log.info({ buildId, lineCount: lines?.length || 0 }, 'Historical build logs requested');
    return {
      buildId,
      lines: lines || []
    };
  });

  app.get('/api/v1/logs/runtime/:projectId', async (request: any) => {
    const { projectId } = request.params;
    const { deploymentId } = request.query;
    
    let logId = `runtime:${projectId}`;
    if (deploymentId) {
      logId = `runtime:${projectId}:${deploymentId}`;
    }
    
    // 1. Try memory
    if (logStore[logId] && logStore[logId]!.length > 0) {
      return {
        projectId,
        deploymentId,
        lines: logStore[logId]
      };
    }

    // 2. Try disk
    const diskLines = readFromFile(logId);
    if (diskLines.length > 0) {
      logStore[logId] = diskLines;
      return {
        projectId,
        deploymentId,
        lines: diskLines
      };
    }

    // Otherwise, try to fetch from runtime-service (legacy/fallback)
    try {
      const runtimeUrl = process.env.RUNTIME_SERVICE_URL || 'http://localhost:3007';
      const resp = await fetch(`${runtimeUrl}/api/v1/runtime/logs/${projectId}`);
      if (resp.ok) {
        const data = (await resp.json()) as any;
        const allLines = data.lines || [];
        // Cap at last 500 lines for dashboard performance
        const history = allLines.slice(-500);
        return {
          projectId,
          deploymentId,
          lines: history
        };
      }
    } catch (err) {
      log.warn({ err, projectId }, 'Failed to fetch historical logs from runtime-service');
    }

    return {
      projectId,
      deploymentId,
      lines: []
    };
  });

  // 4. WebSocket Log Stream
  app.get('/api/v1/logs/stream', { websocket: true }, (socket, request: any) => {
    const logId = request.query.id; // e.g. build:XYZ or runtime:XYZ
    if (!logId) {
      socket.send(JSON.stringify({ type: 'error', message: 'Missing id parameter' }));
      socket.close();
      return;
    }

    log.info({ logId }, 'New WebSocket subscriber');

    // Add to subscribers
    if (!subscribers[logId]) subscribers[logId] = new Set();
    subscribers[logId]!.add(socket);

    socket.on('close', () => {
      log.info({ logId }, 'WebSocket subscriber disconnected');
      subscribers[logId]?.delete(socket);
      if (subscribers[logId]?.size === 0) delete subscribers[logId];
    });
  });

  // 5. Global Status WebSocket
  app.get('/api/v1/logs/status', { websocket: true }, (socket) => {
    log.info('New global status subscriber');
    statusSubscribers.add(socket);
    socket.on('close', () => {
      log.info('Global status subscriber disconnected');
      statusSubscribers.delete(socket);
    });
  });

  await app.listen({ port: 3009, host: '0.0.0.0' });
  log.info(`Logging Service listening on port 3009`);
}

main().catch((err) => {
  log.fatal(err, 'Failed to start Logging Service');
  process.exit(1);
});
