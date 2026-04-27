# PaaS - Cloud Deployment Platform

This is a lite, Platform as a Service (PaaS) designed for easy deployment of applications. It provides a seamless experience for deploying applications with zero-downtime, built-in health monitoring, and dynamic runtime selection between Docker and Nomad.

## 🚀 Quick Start

To get started with Adroit, ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

1. **Clone the repository**
2. **Start the infrastructure**

   ```bash
   docker compose up -d
   ```

3. **Wait for services to initialize** (usually 10-20 seconds).
4. **Access the Deployment Dashboard**
   - Open [http://localhost:5173](http://localhost:5173) or [dashboard.localhost](http://dashboard.localhost) in your browser.

## 🛠 Admin & Tooling Dashboards

| Service | URL | Description |
|---------|-----|-------------|
| **PaaS UI** | [http://localhost:5173](http://localhost:5173) or [dashboard.localhost](http://dashboard.localhost) | Main developer dashboard |
| **API Backend**| [http://localhost:3000](http://localhost:3000) or [api.localhost](http://api.localhost) | Core orchestration API |
| **Consul UI** | [http://localhost:8500](http://localhost:8500) | Service discovery & routing state |
| **Vault UI** | [http://localhost:8200](http://localhost:8200) | Secret management (Token: `root`) |
| **NATS Monitoring** | [http://localhost:8222](http://localhost:8222) | Real-time event bus status |
| **Registry** | [http://localhost:8080](http://localhost:8080) | Local Docker image registry |
| **Prometheus** | [http://localhost:9090](http://localhost:9090) | Metrics and monitoring |
| **Grafana** | [http://localhost:3020](http://localhost:3020) | Dashboards (admin/admin) |

## 📦 How to Deploy

### Via GitHub URL

1. Click **New Deployment** in the Dashboard.
2. Paste your **GitHub Repository URL**.
3. Provide the repository URL (e.g., `https://github.com/user/demo-app`).
4. PaaS will clone, build using **Buildkit** & **Railpack**, and deploy automatically.
5. URL to the deployment will be provided after the build is complete (Under the project name).

### Via ZIP Upload

1. Click **New Deployment** and select **Upload**.
2. Upload a `.zip` file of your project source code.
3. PaaS handles the build and rollout.

## 🏗 Architecture

Adroit is built as a highly decoupled microservice platform:

- **Monorepo Management**: Uses **Turborepo** for optimized builds and workspace management across all services.
- **Microservice Architecture**: Several microservices work together to provide the PaaS functionality, including:
  - **API Gateway**: Handles API requests from the UI.
  - **Build Service**: Handles build requests.
  - **Runtime Service**: Handles runtime requests.
  - **Deployment Service**: Handles deployment requests.
  - **Notification Service**: Handles notification requests.
  - **Identity Service**: Handles user requests.
  - **Project Service**: Handles project requests.
  - **Registry Service**: Handles registry requests.
  - **Deployment Service**: Handles deployment config requests.
  - **Logging Service**: Handles build log requests.

- **Service Discovery**: **Consul** manages the dynamic service catalog and health state.
- **Ingress**: Powered by **Caddy**, which dynamically reroutes traffic based on Consul's service catalog. If a container restarts on a new port or host IP, Caddy updates instantly.
- **Event-Driven**: **NATS JetStream** serves as the backbone for inter-service communication and live log streaming.
- **Secret Management**: **Vault** is integrated for secure environment variable storage and injection.
- **State Storage**: **PostgreSQL** for relational data (projects, deployments) and **Redis** for distributed locking and real-time metadata.

## 🛡 Advanced Orchestration

### Dynamic Runtime Provider

Adroit automatically detects if **Nomad** is available. If it is, it uses Nomad's powerful rescheduling and job management. If not, it seamlessly falls back to a **Custom Docker Orchestrator** implemented in the `runtime-service`.

### Self-Healing & Resilience (Docker Mode)

- **Auto-Restart**: Adroit monitors containers in Docker mode. If a container stops or is accidentally deleted, the orchestrator detects the missing state and automatically re-creates/restarts it.
- **Consul Sync**: On restart, the new container metadata is instantly re-registered in Consul to restore routing.

### Zero-Downtime Rollouts

Supporting **Canary-style releases** on both Nomad and Docker:

- Adroit starts the new version alongside the old one.
- Traffic is only shifted (via Consul) once the new version passes HTTP health checks.
- Old containers are gracefully drained and stopped only after the new version is confirmed healthy.

### Rollbacks & Reversions

Adroit keeps track of versioned image tags in the local registry, allowing for instant **one-click rollbacks** to any previous successful deployment.

### Build Pipeline

- **Buildkit**: High-performance container image building.
- **Railpack**: Intelligent language detection and build-pack generation, allowing you to deploy apps without writing a Dockerfile.

### Live Logging

Real-time logs are captured from the runtime providers and streamed via **WebSockets** to the dashboard, providing instant feedback during builds and rollouts.

### Next.js Optimization

Advanced auto-detection for Next.js to determine if a project should be `next start` (SSR) or `statically exported` (SSG) for edge performance.

## Future Roadmap (If I had more time...)

- **Github Integration**: Github connection this currently works but is not fully integrated as this submission would require more setup, getting tokens and setting up callback urls.
If you decide to test this feature, you would need;
-- to get your own github tokens
-- set up callback urls in github
-- replace the PLATFORM_URL with an actual domain name, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_WEBHOOK_SECRET values in the environment variables for the adroit-services container.
- **Prometheus & Grafana**: Full deep integration for per-service performance metrics and alerting.
- **Log Stability**: Further hardening of the log-tailing buffer to prevent missed lines during high-throughput.
- **In-Platform Cronjobs**: Native support for scheduled tasks using an internal cron engine rather than simple intervals.
- **Multi-Tenancy**: Hard isolation between users and projects using dedicated namespaces or Nomad ACLs.
- **Autoscaling**: Implementation of both Horizontal Pod Autoscaling (HPA) based on CPU/RAM and Cluster Node Autoscaling using the scaling service.
- **Database Service**: Handles deployment of Managed Postgres Database.
- **DNS Service**: Handles DNS management for custom domains.

### Rough time spent :- 2 and a half days

### Sample app to deploy :- <https://github.com/dev-nathaniel/liveweb>
