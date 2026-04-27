#!/bin/bash

# Adroit Unified Developer Environment Starter
# This script bridges Host-level Nomad with Docker-containerized Infrastructure.

# Default settings
PROXY_TYPE="caddy"

# Parse arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --proxy) PROXY_TYPE="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

echo "🚀 Starting Adroit Infrastructure with ${PROXY_TYPE} (Docker)..."

# DYNAMIC IP DETECTION (Mac-friendly)
HOST_IP=$(ipconfig getifaddr en0)
if [ -z "$HOST_IP" ]; then
    # Fallback to eth0 or similar if en0 is missing
    HOST_IP=$(ifconfig | grep -E 'inet.[0-9]' | grep -v '127.0.0.1' | awk '{print $2}' | head -n 1)
fi

echo "  > Detected Host IP: ${HOST_IP}"
export ADROIT_HOST_IP=${HOST_IP}

# Update nomad.hcl with the detected IP
# We use sed to replace the old IP with the new one
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/${HOST_IP}/g" nomad.hcl
else
    sed -i "s/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/${HOST_IP}/g" nomad.hcl
fi

docker compose --profile half --profile "proxy-${PROXY_TYPE}" up -d

echo "⌛ Waiting for core services to be healthy..."
# Simple wait for postgres
until docker exec adroit-postgres pg_isready -U postgres > /dev/null 2>&1; do
  echo "  > Waiting for Postgres..."
  sleep 2
done

echo "🏗️ Starting Adroit Services & Dashboard (Docker)..."
docker compose --profile apps up -d

echo "🛡️ Starting Nomad (Host Machine)..."
# Check if nomad is installed
if ! command -v nomad &> /dev/null; then
    echo "❌ Nomad not found on host. Please install it with 'brew install nomad'"
    exit 1
fi

# Run nomad in the background if not already running
if ! pgrep -x "nomad" > /dev/null; then
    nomad agent -dev -config nomad.hcl > /tmp/nomad.log 2>&1 &
    echo "  > Nomad agent started on host (PID: $!)"
else
    echo "  > Nomad is already running on host."
fi

echo "✅ Adroit is ready!"
echo "   - Dashboard: http://localhost:5173"
echo "   - API:       http://localhost:3000"
echo "   - Nomad:     http://localhost:4646"
echo "   - Traefik:   http://localhost:8081"
echo ""
echo "Use 'docker compose logs -f' to see container logs."
echo "Use 'tail -f /tmp/nomad.log' to see host Nomad logs."
