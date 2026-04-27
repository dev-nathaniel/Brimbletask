import { z } from 'zod';

// ============================================================
// Base config schema shared by all services
// ============================================================

const baseConfigSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  PORT: z.coerce.number().default(3000),
});

// ============================================================
// Database config
// ============================================================

const databaseConfigSchema = z.object({
  DATABASE_URL: z.string().url(),
});

// ============================================================
// Redis config
// ============================================================

const redisConfigSchema = z.object({
  REDIS_URL: z.string().default('redis://localhost:6379'),
});

// ============================================================
// NATS config
// ============================================================

const natsConfigSchema = z.object({
  NATS_URL: z.string().default('nats://localhost:4222'),
});

// ============================================================
// Auth / JWT config
// ============================================================

const authConfigSchema = z.object({
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
});

// ============================================================
// Git Integration config
// ============================================================

const gitIntegrationConfigSchema = z.object({
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
  GITHUB_WEBHOOK_SECRET: z.string().min(1),
  PLATFORM_URL: z.string().url().default('http://localhost:3000'),
  DASHBOARD_URL: z.string().url().default('http://localhost:5173'),
});

// ============================================================
// Harbor (Registry) Config
// ============================================================

const harborConfigSchema = z.object({
  HARBOR_URL: z.string().url().default('http://localhost:8080'),
  HARBOR_ADMIN_USER: z.string().default('admin'),
  HARBOR_ADMIN_PASSWORD: z.string(),
  HARBOR_WEBHOOK_SECRET: z.string().optional(),
});

// ============================================================
// Service-specific config builders
// ============================================================

export type BaseConfig = z.infer<typeof baseConfigSchema>;
export type DatabaseConfig = z.infer<typeof databaseConfigSchema>;
export type RedisConfig = z.infer<typeof redisConfigSchema>;
export type NatsConfig = z.infer<typeof natsConfigSchema>;
export type AuthConfig = z.infer<typeof authConfigSchema>;

const nomadConfigSchema = z.object({
  NOMAD_ADDR: z.string().url().default('http://localhost:4646'),
});

// ============================================================
// Vault Config
// ============================================================

const vaultConfigSchema = z.object({
  VAULT_ADDR: z.string().url().default('http://localhost:8200'),
  VAULT_TOKEN: z.string().default('root'),
});

// ============================================================
// Consul Config
// ============================================================

const consulConfigSchema = z.object({
  CONSUL_ADDR: z.string().url().default('http://localhost:8500'),
});

/**
 * Load and validate environment config for a service.
 * Merges the base config with any additional schemas.
 * Throws a clear error if required vars are missing.
 */
export function loadConfig<T extends z.ZodRawShape>(
  additionalSchema: z.ZodObject<T>,
): BaseConfig & z.infer<z.ZodObject<T>> {
  const mergedSchema = baseConfigSchema.merge(additionalSchema);
  const result = mergedSchema.safeParse(process.env);

  if (!result.success) {
    const formatted = result.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');
    throw new Error(`Invalid environment configuration:\n${formatted}`);
  }

  return result.data as BaseConfig & z.infer<z.ZodObject<T>>;
}

// Pre-built config loaders for common service patterns

export function loadIdentityConfig() {
  return loadConfig(
    z
      .object({
        IDENTITY_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3001),
      })
      .merge(redisConfigSchema)
      .merge(authConfigSchema)
      .merge(natsConfigSchema)
      .merge(vaultConfigSchema),
  );
}

export function loadApiGatewayConfig() {
  return loadConfig(
    redisConfigSchema.merge(
      z.object({
        JWT_SECRET: z.string().min(32),
        IDENTITY_SERVICE_URL: z.string().url().default('http://localhost:3001'),
        PROJECT_SERVICE_URL: z.string().url().default('http://localhost:3002'),
        GIT_INTEGRATION_URL: z.string().url().default('http://localhost:3003'),
        REGISTRY_SERVICE_URL: z.string().url().default('http://localhost:3005'),
        DEPLOYMENT_SERVICE_URL: z.string().url().default('http://localhost:3006'),
        RUNTIME_SERVICE_URL: z.string().url().default('http://localhost:3007'),
        LOGGING_SERVICE_URL: z.string().url().default('http://localhost:3009'),
        DATABASE_SERVICE_URL: z.string().url().default('http://localhost:3011'),
        MONITORING_SERVICE_URL: z.string().url().default('http://localhost:3012'),
        DNS_SERVICE_URL: z.string().url().default('http://localhost:3014'),
        PORT: z.coerce.number().default(3000),
      }),
    ),
  );
}

export function loadProjectConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        GIT_INTEGRATION_URL: z.string().url().default('http://localhost:3003'),
        RUNTIME_SERVICE_URL: z.string().url().default('http://localhost:3007'),
        PORT: z.coerce.number().default(3002),
      })
      .merge(natsConfigSchema)
      .merge(vaultConfigSchema),
  );
}

export function loadGitIntegrationConfig() {
  return loadConfig(
    z
      .object({
        IDENTITY_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3003),
      })
      .merge(gitIntegrationConfigSchema)
      .merge(authConfigSchema)
      .merge(natsConfigSchema),
  );
}

export function loadBuildConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3004),
      })
      .merge(natsConfigSchema)
      .merge(vaultConfigSchema),
  );
}

export function loadRegistryConfig() {
  return loadConfig(
    harborConfigSchema.merge(natsConfigSchema).merge(
      z.object({
        PORT: z.coerce.number().default(3005),
      }),
    ),
  );
}

export function loadDeploymentConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        RUNTIME_SERVICE_URL: z.string().url().default('http://localhost:3007'),
        REGISTRY_SERVICE_URL: z.string().url().default('http://localhost:3005'),
        PORT: z.coerce.number().default(3006),
      })
      .merge(natsConfigSchema),
  );
}

export function loadRuntimeConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3007),
      })
      .merge(nomadConfigSchema)
      .merge(natsConfigSchema)
      .merge(vaultConfigSchema)
      .merge(consulConfigSchema),
  );
}

export function loadLoggingConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3009),
      })
      .merge(natsConfigSchema),
  );
}

export function loadManagedDatabaseConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        PORT: z.coerce.number().default(3011),
      })
      .merge(nomadConfigSchema)
      .merge(natsConfigSchema)
      .merge(vaultConfigSchema),
  );
}

export function loadDnsConfig() {
  return loadConfig(
    z
      .object({
        PROJECTS_DATABASE_URL: z.string().url(),
        IONOS_API_KEY: z.string().optional(), // format: prefix.secret
        PORT: z.coerce.number().default(3014),
      })
      .merge(natsConfigSchema),
  );
}

export function loadNotificationConfig() {
  return loadConfig(
    z
      .object({
        SMTP_HOST: z.string().default('localhost'),
        SMTP_PORT: z.coerce.number().default(1025), // Mailpit default
        SMTP_USER: z.string().optional(),
        SMTP_PASS: z.string().optional(),
        SMTP_FROM: z.string().default('Adroit <noreply@adroit.dev>'),
        PORT: z.coerce.number().default(3015),
      })
      .merge(natsConfigSchema),
  );
}

// Re-export schemas for custom compositions
export {
  baseConfigSchema,
  databaseConfigSchema,
  redisConfigSchema,
  natsConfigSchema,
  authConfigSchema,
};
