#!/bin/sh

# Function to wait for Consul
wait_for_consul() {
    echo "Waiting for Consul at $1..."
    until curl -s "http://$1/v1/status/leader" | grep -q ":8300"; do
        echo "Consul is not ready yet... retrying in 2s"
        sleep 2
    done
    echo "Consul is ready!"
}

# Wait for Consul to be available
wait_for_consul "consul:8500"

# Generate the initial Caddyfile
echo "Generating initial Caddyfile..."
consul-template \
  -consul-addr=consul:8500 \
  -template="/etc/caddy/Caddyfile.ctmpl:/etc/caddy/Caddyfile" \
  -once

# Start consul-template in the background for continuous watching
echo "Starting consul-template in background..."
consul-template \
  -consul-addr=consul:8500 \
  -template="/etc/caddy/Caddyfile.ctmpl:/etc/caddy/Caddyfile:caddy reload --config /etc/caddy/Caddyfile" \
  -retry 5s &

# Run Caddy in the foreground
echo "Starting Caddy..."
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
