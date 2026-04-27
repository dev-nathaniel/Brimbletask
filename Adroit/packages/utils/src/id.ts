import { nanoid } from 'nanoid';
import { randomBytes, createHash } from 'node:crypto';

/**
 * Generate a unique ID with an optional prefix.
 * Format: prefix_nanoid (e.g., usr_abc123, prj_xyz789)
 */
export function generateId(prefix?: string): string {
  const id = nanoid(21);
  return prefix ? `${prefix}_${id}` : id;
}

/**
 * Generate an API key.
 * Returns the full key (shown once) and a prefix for display.
 * Format: adrt_live_<random> or adrt_test_<random>
 */
export function generateApiKey(mode: 'live' | 'test' = 'live'): {
  key: string;
  prefix: string;
} {
  const random = randomBytes(24).toString('base64url');
  const key = `adrt_${mode}_${random}`;
  const prefix = key.substring(0, 12);
  return { key, prefix };
}

/**
 * Hash an API key for storage. Never store raw keys.
 */
export function hashApiKey(key: string): string {
  return createHash('sha256').update(key).digest('hex');
}

/**
 * Convert a string to a URL-safe slug.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
