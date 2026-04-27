// ============================================================
// User & Identity Types
// ============================================================

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateInput {
  email: string;
  name: string;
  password: string;
  referralCode?: string;
}

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export type TeamRole = 'owner' | 'admin' | 'member' | 'viewer';

export interface Team {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: TeamRole;
  joinedAt: Date;
}

export interface ApiKey {
  id: string;
  name: string;
  keyPrefix: string;
  hashedKey: string;
  userId: string;
  teamId?: string;
  scopes: string[];
  lastUsedAt?: Date;
  expiresAt?: Date;
  createdAt: Date;
}

export interface Referral {
  id: string;
  referrerId: string;
  referredUserId?: string;
  code: string;
  redeemed: boolean;
  redeemedAt?: Date;
  createdAt: Date;
}

// ============================================================
// Project Types
// ============================================================

export type EnvironmentType = 'development' | 'staging' | 'production';

export interface Project {
  id: string;
  name: string;
  slug: string;
  teamId: string;
  description?: string;
  repositoryUrl?: string;
  defaultBranch: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectCreateInput {
  name: string;
  teamId: string;
  description?: string;
  repositoryUrl?: string;
  defaultBranch?: string;
}

export interface Environment {
  id: string;
  projectId: string;
  name: string;
  type: EnvironmentType;
  branch?: string;
  autoDeploy: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnvironmentVariable {
  id: string;
  environmentId: string;
  key: string;
  encryptedValue: string;
  isSecret: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================
// Build & Deployment Types
// ============================================================

export type BuildStatus = 'queued' | 'building' | 'succeeded' | 'failed' | 'cancelled';
export type DeploymentStatus = 'pending' | 'deploying' | 'active' | 'failed' | 'rolled_back' | 'stopped';

export interface Build {
  id: string;
  projectId: string;
  environmentId: string;
  commitSha: string;
  commitMessage?: string;
  branch: string;
  status: BuildStatus;
  imageTag?: string;
  logs?: string;
  startedAt?: Date;
  finishedAt?: Date;
  createdAt: Date;
}

export interface Deployment {
  id: string;
  projectId: string;
  environmentId: string;
  buildId: string;
  status: DeploymentStatus;
  strategy: 'rolling' | 'blue_green';
  url?: string;
  nomadJobId?: string;
  startedAt?: Date;
  finishedAt?: Date;
  createdAt: Date;
}

// ============================================================
// Git Integration Types
// ============================================================

export type GitProvider = 'github' | 'gitlab' | 'bitbucket';

export interface GitRepository {
  id: string; // the provider's ID (e.g. 123456)
  provider: GitProvider;
  owner: string;
  name: string;
  fullName: string;
  private: boolean;
  defaultBranch: string;
  cloneUrl: string;
  updatedAt: Date;
}

export interface GitBranch {
  name: string;
  commitSha: string;
}

// ============================================================
// DNS & Domain Types
// ============================================================

export interface Domain {
  id: string;
  projectId: string;
  environmentId: string;
  hostname: string;
  verified: boolean;
  sslStatus: 'pending' | 'active' | 'failed';
  sslExpiresAt?: Date;
  createdAt: Date;
}

// ============================================================
// Billing Types
// ============================================================

export type SubscriptionPlan = 'free' | 'hobby' | 'pro' | 'enterprise';
export type BillingInterval = 'monthly' | 'yearly';

export interface Subscription {
  id: string;
  teamId: string;
  plan: SubscriptionPlan;
  interval: BillingInterval;
  status: 'active' | 'cancelled' | 'past_due' | 'trialing';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  externalId?: string;
  createdAt: Date;
}

export interface UsageRecord {
  id: string;
  teamId: string;
  projectId: string;
  metric: 'compute_hours' | 'bandwidth_gb' | 'build_minutes' | 'storage_gb';
  quantity: number;
  recordedAt: Date;
}

// ============================================================
// Notification Types
// ============================================================

export type NotificationChannel = 'email' | 'in_app' | 'webhook' | 'slack';
export type NotificationType =
  | 'build_succeeded'
  | 'build_failed'
  | 'deployment_succeeded'
  | 'deployment_failed'
  | 'domain_verified'
  | 'payment_succeeded'
  | 'payment_failed'
  | 'usage_limit_warning';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  channel: NotificationChannel;
  title: string;
  body: string;
  read: boolean;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

// ============================================================
// API Response Types
// ============================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: PaginationMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface PaginationQuery {
  page?: number;
  perPage?: number;
}

// ============================================================
// Health Check Types
// ============================================================

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  service: string;
  version: string;
  uptime: number;
  checks: Record<string, { status: string; latency?: number }>;
}

// ============================================================
// Event Types (NATS messages)
// ============================================================

export interface BaseEvent {
  id: string;
  type: string;
  timestamp: Date;
  source: string;
}

export interface BuildEvent extends BaseEvent {
  type: 'build.queued' | 'build.started' | 'build.succeeded' | 'build.failed';
  payload: {
    buildId: string;
    projectId: string;
    commitSha: string;
    imageTag?: string;
  };
}

export interface DeploymentEvent extends BaseEvent {
  type: 'deployment.started' | 'deployment.succeeded' | 'deployment.failed' | 'deployment.rolled_back';
  payload: {
    deploymentId: string;
    projectId: string;
    buildId: string;
    url?: string;
  };
}

export interface BillingEvent extends BaseEvent {
  type: 'billing.payment_succeeded' | 'billing.payment_failed' | 'billing.subscription_changed';
  payload: {
    teamId: string;
    plan?: SubscriptionPlan;
    amount?: number;
    currency?: string;
  };
}

export type PlatformEvent = BuildEvent | DeploymentEvent | BillingEvent;
