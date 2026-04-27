import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import { successResponse } from '@adroit/utils';
import { generateId } from '@adroit/utils';
import { NotFoundError, ForbiddenError } from '@adroit/utils';
import { getIdentityDb } from '@adroit/db';

const createTeamSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(50).regex(/^[a-z0-9-]+$/),
});

const inviteMemberSchema = z.object({
  email: z.string().email(),
  role: z.enum(['admin', 'member', 'viewer']).default('member'),
});

export async function teamRoutes(app: FastifyInstance) {
  const db = getIdentityDb();

  app.addHook('preHandler', requireAuth);

  // GET /api/v1/teams — List user's teams
  app.get('/', async (request, reply) => {
    const memberships = await db.teamMember.findMany({
      where: { userId: request.userId! },
      include: { team: true },
    });

    const teams = memberships.map((m) => ({
      ...m.team,
      role: m.role,
    }));

    return reply.send(successResponse(teams));
  });

  // POST /api/v1/teams — Create a new team
  app.post('/', async (request, reply) => {
    const body = createTeamSchema.parse(request.body);

    const team = await db.$transaction(async (tx) => {
      const newTeam = await tx.team.create({
        data: {
          id: generateId('team'),
          name: body.name,
          slug: body.slug,
        },
      });

      await tx.teamMember.create({
        data: {
          id: generateId('tm'),
          userId: request.userId!,
          teamId: newTeam.id,
          role: 'owner',
        },
      });

      return newTeam;
    });

    return reply.status(201).send(successResponse(team));
  });

  // GET /api/v1/teams/:teamId — Get team details
  app.get<{ Params: { teamId: string } }>('/:teamId', async (request, reply) => {
    const { teamId } = request.params;

    // Verify user is a member
    const membership = await db.teamMember.findUnique({
      where: { userId_teamId: { userId: request.userId!, teamId } },
    });
    if (!membership) {
      throw new NotFoundError('Team', teamId);
    }

    const team = await db.team.findUnique({
      where: { id: teamId },
      include: {
        members: {
          include: { user: { select: { id: true, name: true, email: true, avatarUrl: true } } },
        },
      },
    });

    return reply.send(successResponse(team));
  });

  // POST /api/v1/teams/:teamId/members — Invite a member
  app.post<{ Params: { teamId: string } }>('/:teamId/members', async (request, reply) => {
    const { teamId } = request.params;
    const body = inviteMemberSchema.parse(request.body);

    // Verify user is owner or admin
    const membership = await db.teamMember.findUnique({
      where: { userId_teamId: { userId: request.userId!, teamId } },
    });
    if (!membership || !['owner', 'admin'].includes(membership.role)) {
      throw new ForbiddenError('Only owners and admins can invite members');
    }

    // Find the user to invite
    const invitee = await db.user.findUnique({ where: { email: body.email } });
    if (!invitee) {
      throw new NotFoundError('User', body.email);
    }

    const member = await db.teamMember.create({
      data: {
        id: generateId('tm'),
        userId: invitee.id,
        teamId,
        role: body.role,
      },
    });

    return reply.status(201).send(successResponse(member));
  });

  // DELETE /api/v1/teams/:teamId/members/:memberId — Remove a member
  app.delete<{ Params: { teamId: string; memberId: string } }>(
    '/:teamId/members/:memberId',
    async (request, reply) => {
      const { teamId, memberId } = request.params;

      // Verify user is owner or admin
      const membership = await db.teamMember.findUnique({
        where: { userId_teamId: { userId: request.userId!, teamId } },
      });
      if (!membership || !['owner', 'admin'].includes(membership.role)) {
        throw new ForbiddenError('Only owners and admins can remove members');
      }

      await db.teamMember.delete({ where: { id: memberId } });
      return reply.send(successResponse({ message: 'Member removed' }));
    },
  );
}
