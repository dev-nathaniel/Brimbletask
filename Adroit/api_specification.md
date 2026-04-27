# Adroit PaaS: API & Feature Specification

This document serves as the master manifest for all features and API endpoints within the Adroit PaaS ecosystem. Use this for systematic end-to-end testing and platform validation.

---

## 1. Identity Service (Auth & Tenancy)

**Base URL**: `/api/v1/auth`, `/api/v1/teams`, `/api/v1/users`, `/api/v1/api-keys`

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/auth/register` | POST | User registration |
| `/auth/login` | POST | User login & JWT issuance |
| `/auth/refresh` | POST | Refresh expired JWTs |
| `/auth/logout` | POST | Invalidate current session |
| `/teams` | GET | List teams for current user |
| `/teams` | POST | Create a new team |
| `/teams/:teamId` | GET | Get team details & members |
| `/teams/:teamId/members` | POST | Invite member to team |
| `/teams/:teamId/members/:memberId` | DELETE | Remove member from team |
| `/users/me` | GET | Current user profile |
| `/users/me` | PATCH | Update user profile |
| `/api-keys` | GET | List active API keys |
| `/api-keys` | POST | Generate new API key |
| `/api-keys/:keyId` | DELETE | Revoke API key |

---

## 2. Project Service (Orchestration Management)

**Base URL**: `/api/v1/projects`, `/api/v1/environments`

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/projects` | GET | List projects (with pagination) |
| `/projects` | POST | Create a new project (initializes Vault & DB) |
| `/projects/:projectId` | GET | Detailed project config & stats |
| `/projects/:projectId/deploy` | POST | Manually trigger a deployment |
| `/projects/:projectId` | PATCH | Update project metadata |
| `/projects/:projectId` | DELETE | Purge project, jobs, and Vault secrets |
| `/environments` | POST | Create new environment (dev/staging/prod) |
| `/environments/:envId/variables` | GET | Fetch env vars (decrypted from Vault) |
| `/environments/:envId/variables` | PUT | Sync env vars to Vault |
| `/environments/:envId/variables/:key` | DELETE | Remove specific env var from Vault |
| `/environments/:envId` | DELETE | Delete environment |

---

## 3. Deployment & Build System

**Base URL**: `/api/v1/deployments`, `/api/v1/logs`

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/deployments/:projectId` | GET | Deployment history (with pagination) |
| `/deployments/:projectId/rollback/:id` | POST | Revert to specific Build ID or Deployment ID |
| `/builds` | POST | **[NEW]** Start a build. Use `failBuild: true` to test failure logic. |
| `/logs/build/:buildId` | GET | Fetch historical build logs |
| `/logs/runtime/:projectId` | GET | Fetch historical runtime logs |

---

## 4. Runtime & Observability

**Base URL**: `/api/v1/runtime`

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/runtime/jobs` | POST | (Internal) Submit job to Nomad |
| `/runtime/jobs/:projectId` | DELETE | (Internal) Stop & purge Nomad job |
| `/runtime/jobs/:projectId/revert` | POST | (Internal) Native Nomad job reversion |
| `/runtime/stats/:projectId` | GET | **[PHASE 4]** Real-time aggregate CPU/RAM usage |
| `/runtime/logs/:projectId` | GET | Live real-time log stream proxy |

---

## 6. Git & Integration Layer

**Base URL**: `/github`, `/webhooks`

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/github/callback` | GET | GitHub OAuth 2.0 flow |
| `/repositories` | GET | List available GitHub repos for user |
| `/webhooks/configure` | POST | Setup Webhook on user repository |
| `/github` | POST | Webhook listener (Autodeploy on push) |

---

## 6. Global Infrastructure

- **Caddy (Gateway)**: Dynamic routing via Consul Catalog.
- **Optional Nomad (Orchestrator)**: Native job lifecycle & rolling updates.
- **Consul (Service Discovery)**: Real-time service health & catalog.
- **Vault (Secrets)**: Secure per-project environment storage.
- **NATS (Messaging)**: Pub/Sub for build events and log streaming.
