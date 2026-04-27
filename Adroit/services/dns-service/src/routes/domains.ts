import type { FastifyInstance } from 'fastify';
import { getProjectsDb } from '@adroit/db';
import { createServiceLogger } from '@adroit/utils';
import { IonosService } from '../services/ionos.js';

const log = createServiceLogger('dns-service:routes');
const prisma = getProjectsDb();

export async function domainRoutes(app: FastifyInstance, options: { ionos: IonosService | null }) {
  const { ionos } = options;

  // Attach a custom domain to a project
  app.post('/domains', async (request, reply) => {
    const { projectId, hostname, type = 'CNAME', content = 'proxy.adroit.dev' } = request.body as any;

    try {
      // 1. Create domain record in DB
      const domain = await prisma.domain.create({
        data: {
          projectId,
          hostname,
          status: 'pending',
          sslStatus: 'provisioning'
        },
      });

      // 2. Attempt IONOS DNS integration if configured
      if (ionos) {
        const zoneId = await ionos.findZoneForDomain(hostname);
        if (zoneId) {
          await ionos.createRecord(zoneId, {
            name: hostname.split('.')[0], // Subdomain part
            type: type as any,
            content: content,
            ttl: 3600
          });
          
          await prisma.domain.update({
            where: { id: domain.id },
            data: { status: 'active' }
          });
        } else {
          log.warn({ hostname }, 'No matching IONOS zone found for domain');
        }
      }

      // 3. TODO: Publish NATS event 'dns.domain.linked' to trigger Traefik reconfiguration
      
      return reply.code(201).send(domain);
    } catch (error: any) {
      log.error({ err: error.message }, 'Failed to attach domain');
      return reply.code(500).send({ error: 'Failed to attach domain' });
    }
  });

  // List domains for a project
  app.get('/domains/:projectId', async (request, reply) => {
    const { projectId } = request.params as any;
    const domains = await prisma.domain.findMany({
      where: { projectId }
    });
    return reply.send(domains);
  });

  // Detach a domain
  app.delete('/domains/:id', async (request, reply) => {
    const { id } = request.params as any;
    try {
      await prisma.domain.delete({ where: { id } });
      return reply.code(204).send();
    } catch (error) {
      return reply.code(500).send({ error: 'Failed to detach domain' });
    }
  });
}
