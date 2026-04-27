import React from "react";
import { GitBranch, ExternalLink, Clock, Terminal, RefreshCw } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { DeploymentHistory } from "./DeploymentHistory";
import { shortenTag } from "@/lib/utils";

export interface ProjectRowProps {
    project: any;
    isSelected: boolean;
    statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }>;
    onToggleExpand: () => void;
    onDeploy: (projectId: string) => void;
    onStreamLogs: (logId: string, projectId?: string) => void;
    onRevert: (projectId: string, deploymentId: string) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({
    project,
    isSelected,
    statusConfig,
    onToggleExpand,
    onDeploy,
    onStreamLogs,
    onRevert,
}) => {
    const latestDeploy = project.deployments?.[0];
    const status = latestDeploy?.status ?? "pending";

    return (
        <div className="group border-b border-white/6 last:border-0">
            <div
                className={`grid grid-cols-[2fr_1fr_1fr_1fr_100px] gap-4 px-4 py-3.5 items-center hover:bg-white/4 transition-colors cursor-pointer ${isSelected ? "bg-white/4" : ""}`}
                onClick={onToggleExpand}
            >
                <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-white/8 flex items-center justify-center shrink-0">
                        <GitBranch className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                            {project.name}
                        </p>
                        {status === "success" && (project.url || project.deployments?.[0]?.url) && (
                            <a
                                href={project.url || project.deployments?.[0]?.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs text-white/40 hover:text-white/70 transition-colors truncate flex items-center gap-1 cursor-pointer"
                            >
                                {project.url || project.deployments?.[0]?.url}{" "}
                                <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                            </a>
                        )}
                    </div>
                </div>

                <StatusBadge status={status} />

                <div className="flex items-center gap-1.5">
                    <code className="text-xs text-white/50 bg-white/6 px-2 py-0.5 rounded font-mono">
                        {latestDeploy?.imageTag ? shortenTag(latestDeploy.imageTag) : "sha-" + project.id?.slice(0, 7)}
                    </code>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Clock className="w-3 h-3" />
                    {project.updatedAt
                        ? new Date(project.updatedAt).toLocaleDateString()
                        : "Just now"}
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const buildId = latestDeploy?.buildId;
                            const showBuildLogs = status === 'failed' || status === 'pending' || !latestDeploy;

                            if (showBuildLogs && buildId) {
                                onStreamLogs(`build:${buildId}`, project.id);
                            } else {
                                const latestDepId = project.deployments?.[0]?.id;
                                onStreamLogs(`runtime:${project.id}${latestDepId ? `:${latestDepId}` : ''}`, project.id);
                            }
                        }}
                        className="h-7 w-7 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
                        title="View logs"
                    >
                        <Terminal className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeploy(project.id);
                        }}
                        className="h-7 w-7 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
                        title="Redeploy"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    {status === "success" && project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="h-7 w-7 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
                            title="Open site"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </div>

            <DeploymentHistory
                project={project}
                statusConfig={statusConfig}
                onStreamLogs={onStreamLogs}
                onRevert={onRevert}
                isSelected={isSelected}
            />
        </div>
    );
};
