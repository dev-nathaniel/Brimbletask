import type { ApiResponse, ApiError, PaginationMeta } from '@adroit/types';

export function successResponse<T>(data: T, meta?: PaginationMeta): ApiResponse<T> {
  return { success: true, data, meta };
}

export function errorResponse(error: ApiError): ApiResponse<never> {
  return { success: false, error };
}

export function paginatedResponse<T>(
  data: T,
  page: number,
  perPage: number,
  total: number,
): ApiResponse<T> {
  return {
    success: true,
    data,
    meta: {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage),
    },
  };
}
