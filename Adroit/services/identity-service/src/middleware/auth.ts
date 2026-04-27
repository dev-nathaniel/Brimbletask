import type { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '@adroit/utils';

interface JwtPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

declare module 'fastify' {
  interface FastifyRequest {
    userId?: string;
    userEmail?: string;
  }
}

/**
 * Middleware to verify JWT access tokens.
 * Attaches userId and userEmail to the request.
 */
export async function requireAuth(request: FastifyRequest, _reply: FastifyReply) {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    throw new UnauthorizedError('Missing or invalid authorization header');
  }

  const token = authHeader.substring(7);
  const secret = process.env['JWT_SECRET'];
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }

  try {
    const payload = jwt.verify(token, secret) as JwtPayload;
    request.userId = payload.sub;
    request.userEmail = payload.email;
  } catch {
    throw new UnauthorizedError('Invalid or expired access token');
  }
}
