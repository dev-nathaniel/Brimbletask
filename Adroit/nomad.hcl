# Nomad Dev Configuration
# Fixes Consul health check connectivity from Docker

bind_addr = "[IP_ADDRESS]"

advertise {
  http = "[IP_ADDRESS]"
  rpc  = "[IP_ADDRESS]"
  serf = "[IP_ADDRESS]"
}

client {
  enabled = true
  cpu_total_compute = 2000
  options = {
    "docker.privileged.enabled" = "true"
  }
}

server {
  enabled          = true
  bootstrap_expect = 1
}

consul {
  address = "[IP_ADDRESS]"
}
