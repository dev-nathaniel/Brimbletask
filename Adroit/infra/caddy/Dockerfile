# Stage 1: Get consul-template
FROM alpine:3.19 AS builder
RUN apk add --no-cache curl unzip
ENV CONSUL_TEMPLATE_VERSION=0.39.0

RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "x86_64" ]; then ARCH="amd64"; \
    elif [ "$ARCH" = "aarch64" ]; then ARCH="arm64"; \
    fi && \
    curl -sSL https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_${ARCH}.zip -o consul-template.zip \
    && unzip consul-template.zip \
    && mv consul-template /usr/local/bin/consul-template

# Stage 2: Final Image
FROM caddy:2-alpine
RUN apk add --no-cache ca-certificates

COPY --from=builder /usr/local/bin/consul-template /usr/local/bin/consul-template

# Entrypoint script to run consul-template in background
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Caddy ports
EXPOSE 80 443

ENTRYPOINT ["/entrypoint.sh"]
