-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "description" TEXT,
    "repository_url" TEXT,
    "default_branch" TEXT NOT NULL DEFAULT 'main',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environments" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'development',
    "branch" TEXT,
    "auto_deploy" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "environments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environment_variables" (
    "id" TEXT NOT NULL,
    "environment_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "encrypted_value" TEXT NOT NULL,
    "is_secret" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "environment_variables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deployments" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "build_id" TEXT NOT NULL,
    "image_tag" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "error" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deployments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "managed_databases" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'postgresql',
    "version" TEXT NOT NULL DEFAULT '16',
    "status" TEXT NOT NULL DEFAULT 'provisioning',
    "host" TEXT,
    "port" INTEGER NOT NULL DEFAULT 5432,
    "user" TEXT NOT NULL DEFAULT 'adroit_admin',
    "db_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "managed_databases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deployment_configs" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "instance_size" TEXT NOT NULL DEFAULT 'small',
    "instance_count" INTEGER NOT NULL DEFAULT 1,
    "region" TEXT NOT NULL DEFAULT 'eu-central',
    "health_check_path" TEXT NOT NULL DEFAULT '/',
    "build_command" TEXT,
    "start_command" TEXT,
    "dockerfile_path" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deployment_configs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "projects_team_id_idx" ON "projects"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_team_id_slug_key" ON "projects"("team_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "environments_project_id_name_key" ON "environments"("project_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "environment_variables_environment_id_key_key" ON "environment_variables"("environment_id", "key");

-- CreateIndex
CREATE INDEX "deployments_project_id_idx" ON "deployments"("project_id");

-- CreateIndex
CREATE INDEX "managed_databases_project_id_idx" ON "managed_databases"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "deployment_configs_project_id_key" ON "deployment_configs"("project_id");

-- AddForeignKey
ALTER TABLE "environments" ADD CONSTRAINT "environments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "environment_variables" ADD CONSTRAINT "environment_variables_environment_id_fkey" FOREIGN KEY ("environment_id") REFERENCES "environments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deployments" ADD CONSTRAINT "deployments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "managed_databases" ADD CONSTRAINT "managed_databases_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
