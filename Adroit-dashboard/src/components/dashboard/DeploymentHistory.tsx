import React from "react";
import { Terminal, RotateCcw } from "lucide-react";
import { shortenTag } from "@/lib/utils";

export interface DeploymentHistoryProps {
    project: any;
    statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }>;
    onStreamLogs: (logId: string, projectId?: string) => void;
    onRevert: (projectId: string, deploymentId: string) => void;
    isSelected: boolean;
}

export const DeploymentHistory: React.FC<DeploymentHistoryProps> = ({
    project,
    statusConfig,
    onStreamLogs,
    onRevert,
    isSelected,
}) => {
    if (!isSelected) return null;
    return (
        <div className="bg-white/[0.02] border-t border-white/6 px-4 py-4 animate-in slide-in-from-top-2 duration-200">
            <h4 className="text-[10px] uppercase tracking-wider text-white/20 font-bold mb-3 px-1">
                Deployment History
            </h4>
            <div className="space-y-2">
                {(project.deployments || []).map((dep: any) => {
                    const depCfg = statusConfig[dep.status] ?? statusConfig.pending;
                    return (
                        <div key={dep.id} className="flex items-center justify-between bg-white/4 border border-white/6 rounded-lg px-4 py-2.5">
                            <div className="flex items-center gap-4">
                                <div className={`w-1.5 h-1.5 rounded-full ${depCfg.color.replace('text-', 'bg-')}`} />
                                <div>
                                    <div className="text-xs font-medium text-white/80 flex items-center gap-2">
                                        {depCfg.label}
                                        <span className="text-white/20 font-normal">·</span>
                                        <span className="text-[10px] text-white/40 font-mono">{dep.buildId?.slice(0, 8)}</span>
                                        {dep.imageTag && (
                                            <>
                                                <span className="text-white/20 font-normal">·</span>
                                                <span className="text-[10px] text-white/40 font-mono">{shortenTag(dep.imageTag)}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="text-[10px] text-white/30 mt-0.5">
                                        {new Date(dep.createdAt).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onStreamLogs(`build:${dep.buildId}`, project.id)}
                                    className="px-3 py-1 bg-white/6 hover:bg-white/10 text-white/60 hover:text-white text-[10px] font-medium rounded transition-all cursor-pointer flex items-center gap-1.5"
                                >
                                    <Terminal className="w-3 h-3" />
                                    Build Logs
                                </button>
                                {dep.status === 'success' && (
                                    <>
                                        <button
                                            onClick={() => onStreamLogs(`runtime:${project.id}:${dep.id}`, project.id)}
                                            className="px-3 py-1 bg-white/6 hover:bg-white/10 text-white/60 hover:text-white text-[10px] font-medium rounded transition-all cursor-pointer flex items-center gap-1.5"
                                        >
                                            <Terminal className="w-3 h-3" />
                                            Runtime Logs
                                        </button>
                                        <button
                                            onClick={() => onRevert(project.id, dep.id)}
                                            className="px-3 py-1 bg-white/6 hover:bg-white/10 text-white/60 hover:text-white text-[10px] font-medium rounded transition-all cursor-pointer flex items-center gap-1.5"
                                            title="Revert to this deployment"
                                        >
                                            <RotateCcw className="w-3 h-3" />
                                            Revert
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
                {(!project.deployments || project.deployments.length === 0) && (
                    <p className="text-xs text-white/20 text-center py-4 italic">No deployment history available.</p>
                )}
            </div>
        </div>
    );
};
