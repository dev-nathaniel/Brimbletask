FROM node:20-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    unzip \
    tar \
    git \
    curl \
    postgresql-client \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Install Railpack
RUN curl -sSL https://railpack.com/install.sh | sh

WORKDIR /app

# Copy the entire monorepo
COPY . .

# Ensure setup script is executable
RUN chmod +x scripts/setup-db.sh

# Install dependencies
RUN npm install

# Generate Prisma clients
RUN npx prisma generate --schema=packages/db/prisma/identity/schema.prisma
RUN npx prisma generate --schema=packages/db/prisma/projects/schema.prisma

# Build packages once to ensure 'dist' folders exist for all workspaces
RUN npm run build

# Remove any .env files that might have been copied (to ensure Docker env vars take precedence)
RUN find . -name ".env" -delete

# Expose all service ports
EXPOSE 3000-3015

# Start all services using Turbo, after setting up the database
CMD ["/bin/sh", "-c", "/app/scripts/setup-db.sh && npm run dev"]
