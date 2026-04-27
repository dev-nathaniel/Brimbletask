import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { AppError } from '@adroit/utils';
import { createServiceLogger } from '@adroit/utils';
import { ZodError } from 'zod';

const log = createServiceLogger('project-service');

export function errorHandler(error: FastifyError, _request: FastifyRequest, reply: FastifyReply) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      success: false,
      error: error.toJSON(),
    });
  }

  if (error instanceof ZodError) {
    return reply.status(400).send({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        details: { issues: error.issues },
      },
    });
  }

  if (error.validation) {
    return reply.status(400).send({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: error.message },
    });
  }

  log.error(error, 'Unhandled error');
  return reply.status(500).send({
    success: false,
    error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' },
  });
}
