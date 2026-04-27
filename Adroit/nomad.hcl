# Nomad Dev Configuration
# Fixes Consul health check connectivity from Docker

bind_addr = "192.168.1.164"

advertise {
  http = "192.168.1.164"
  rpc  = "192.168.1.164"
  serf = "192.168.1.164"
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
  address = "192.168.1.164:8500"
}
