# Adroit PaaS - Local Development Guide

This guide walks you through setting up and running the Adroit Platform-as-a-Service architecture entirely on your local machine.

## Prerequisites

- **Node.js**: v20 or higher.
- **pnpm**: Fast, disk space efficient package manager (enable via `corepack enable`).
- **Railpack CLI**: The Build Engine requires the Railpack compiler natively installed on your path (e.g. `npm install -g railpack`).
- **Docker Desktop**: Must be running. Ensure virtualization is enabled. _(BuildKit runs as a privileged container within our docker-compose)._
- **Nomad CLI**: Installed locally (e.g., `brew install hashicorp/tap/nomad`).

## 1. Initial Setup

### Install Dependencies

From the root of the repository, install all workspace packages:

```bash
npm install
```

### Environment Variables

For each service in the `services/` directory and gateway, create a `.env` file based on its `.env.example` structure.
Critical shared variables:

- `PROJECTS_DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_projects"`
- `IDENTITY_DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_identity"`
- `NATS_URL="nats://localhost:4222"`
- `VAULT_ADDR="http://localhost:8200"`
- `ENCRYPTION_KEY="<32-byte-secret>"`

### Database Schemas

Sync the Prisma schemas to your local databases (run this _after_ spinning up the infrastructure in Step 2):

```bash
pnpm db:push
```

## 2. Infrastructure Setup (Docker Compose)

The core backing services (Databases, Message Queues, Consul, Vault, Traefik, BuildKit, and Docker Registry) are orchestrated via Docker Compose.

In a dedicated terminal, run:

```bash
docker compose up -d
```

You can verify they are all running with `docker ps`.

## 3. Nomad Setup

Nomad is the cluster orchestrator that runs user projects. For local development, Nomad runs directly on your host machine (Mac/Linux) rather than inside Docker. This allows it to natively map ports.

In another dedicated terminal, start the Nomad development agent:

```bash
nomad agent -dev -config nomad.hcl
```

_Note: The `nomad.hcl` uses `0.0.0.0` and advertises `127.0.0.1` locally, allowing Consul and Traefik to safely route traffic back to your host._

## 4. Run the Adroit Microservices

We use Turborepo to orchestrate the backend services (`api-gateway`, `project-service`, `build-service`, `runtime-service`, `deployment-service`, etc.).

In the root repository, run:

```bash
npm run dev
```

This spawns the entire microservice ecosystem and connects them to NATS and the databases.

## 5. Local Networking Magic

When an app is deployed locally:

1. **Build Service** packages it via BuildKit and pushes it to local `registry:2` (`localhost:8080`).
2. **Runtime Service** schedules it on the host via **Nomad**.
3. Nomad registers the app dynamically with **Consul** (which is running inside Docker) using the special `host.docker.internal` address.
4. **Traefik** (also inside Docker) discovers the route from Consul and successfully routes your `.localhost` domain back out to the Mac host port.

## Endpoints Summary

- **API Gateway**: `http://localhost:3000`
- **Nomad UI**: `http://127.0.0.1:4646`
- **Consul UI**: `http://127.0.0.1:8500`
- **Vault UI**: `http://127.0.0.1:8200`
- **Traefik Dashboard**: `http://127.0.0.1:8081`
- **Grafana**: `http://127.0.0.1:3010` (user/pass: `admin`/`admin`)
