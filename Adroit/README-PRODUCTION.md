# Adroit PaaS - Production Architecture & Bare Metal Setup Guide

When scaling Adroit PaaS to a production environment using IONOS Bare Metal or VPS infrastructure, we self-host all our supporting services alongside our orchestration. This completely eschews managed databases in favor of a sovereign setup.

## 1. Physical Node Architecture Recommendation
To ensure baseline fault tolerance, spread the infrastructure across at least 3 to 4 physical servers / VPS.

*   **Node 1 (Control Plane / Core State)**: Hosts Postgres, Redis, NATS, and Vault.
*   **Nodes 2, 3, 4 (Worker / Data Plane)**: Your primary Nomad Client nodes which actually run user workloads, the Docker registry, and Traefik load balancers.
*   *Note: Consul and Nomad Servers should ideally be clustered across Nodes 1, 2, and 3 for leader-election quorum.*

## 2. Infrastructure Prerequisites (Run on all nodes)
1.  **Operating System**: Ubuntu 22.04 LTS or Debian 12.
2.  **Base Networking**: Ensure all nodes can communicate over a private LAN (e.g., IONOS Private Network). Open ports `4646-4648` (Nomad), `8300-8500` (Consul), `8200` (Vault).
3.  **Install Binaries**:
    Install Docker Engine, Nomad, Consul, and Vault directly on the bare metal. Do not use Docker Desktop.
    ```bash
    # HashiCorp Binaries
    wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
    sudo apt update && sudo apt install nomad consul vault -y
    ```
    ```bash
    # Docker Engine
    sudo apt install docker.io -y
    ```

## 3. Core Backing Services Setup (Node 1)
Instead of Managed Cloud services, you will run persistent backing services using Docker or Systemd on your primary Control Plane node. We highly recommend mapping robust persistent volumes to these containers.

```yaml
# deploy-core.yml (Run via docker compose up -d on Node 1)
services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_PASSWORD: production_strong_password
    ports:
      - "5432:5432" # Bind to private IP in production: "10.0.0.1:5432:5432"
    volumes:
      - /mnt/storage/postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - /mnt/storage/redis_data:/data

  nats:
    image: nats:2-alpine
    restart: always
    command: [ "-js", "-m", "8222" ]
    ports:
      - "4222:4222"
```

## 4. HashiCorp Cluster Configuration
### Consul
Do not run Consul in Docker. Run it natively as a highly-available service mesh.
Configure the `consul.hcl` on all three nodes to join a cluster utilizing their **Private IPs** (`bind_addr`). Bootstrap the quorum.

### Vault
Start Vault securely pointing its storage backend to your newly spun-up Consul cluster.
*   **Initialization**: Run `vault operator init` strictly once. Store the 5 unseal keys and Root Token offline.
*   **Restarting**: If the VPS restarts, you must manually run `vault operator unseal` 3 times to bring the secrets backend back online.

### Nomad
-   Configure Nodes 1, 2, and 3 as **Nomad Servers**.
-   Configure Nodes 2, 3, and 4 as **Nomad Clients** enabled for Docker orchestration.
-   Unlike local development, explicitly avoid `.localhost` mapping. Ensure `bind_addr` is strictly bound to the IONOS Private LAN interface.

## 5. Self-Hosted Registry & Builder Workloads
Now that the cluster is healthy, deploy your registry and builders *via Nomad itself*.
1.  **Docker Registry**: Run the `registry:2` container as a Nomad Service job mapped specifically to your persistent block storage.
2.  **BuildKit**: Schedule BuildKit nodes as autoscaling Daemon workloads in Nomad.
3.  **Traefik Edge Router**: Deploy Traefik as a `system` job in Nomad spanning your public-facing VPS instances. Open port 80/443 on the IONOS Firewall. Traefik will auto-discover the services via your native Consul mesh and terminate TLS using Let's Encrypt.

## 6. Microservices Deployment
Finally, push your Adroit source code to the control node.
Populate your production `.env` files ensuring all hostnames point to the Private LAN IPs (e.g., `PROJECTS_DATABASE_URL=postgresql://postgres:pass@10.0.0.1:5432/db_projects`).
Launch the platform:
```bash
pnpm install
pnpm db:push
pnpm start
```
