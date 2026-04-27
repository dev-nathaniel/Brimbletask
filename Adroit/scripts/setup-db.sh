#!/bin/sh

echo "Waiting for Postgres to be ready..."
# Sleep a bit to ensure postgres is actually accepting connections if called immediately
sleep 2

echo "Pushing database schemas..."
npx prisma db push --schema=packages/db/prisma/identity/schema.prisma --accept-data-loss
npx prisma db push --schema=packages/db/prisma/projects/schema.prisma --accept-data-loss

echo "Seeding default developer user..."
# We use psql directly to seed the identity database
# Note: adroit-postgres is the hostname inside the docker network
export PGPASSWORD=postgres
psql -h adroit-postgres -U postgres -d db_identity -c "INSERT INTO users (id, email, name, password_hash, updated_at) VALUES ('dev-user-001', 'dev@adroit.local', 'Dev User', 'hashed_password', now()) ON CONFLICT (id) DO NOTHING;"
psql -h adroit-postgres -U postgres -d db_identity -c "INSERT INTO teams (id, name, slug, updated_at) VALUES ('default-team', 'Default Team', 'default-team', now()) ON CONFLICT (id) DO NOTHING;"
psql -h adroit-postgres -U postgres -d db_identity -c "INSERT INTO team_members (id, user_id, team_id, role) VALUES ('mem-001', 'dev-user-001', 'default-team', 'owner') ON CONFLICT (id) DO NOTHING;"

echo "Database setup complete."
