import React from "react";
import { Terminal, X, Loader2 } from "lucide-react";
import { EnvironmentVariables } from "./EnvironmentVariables";
import type { DrawerTab } from "../../hooks/useProjectLogs";

export interface LogDrawerProps {
    isOpen: boolean;
    drawerTab: DrawerTab;
    logs: string[];
    logsEndRef: React.RefObject<HTMLDivElement>;
    project: any;
    envVars: { key: string; value: string }[];
    onClose: () => void;
    onTabChange: (tab: DrawerTab) => void;
    onSetEnvVars: (vars: { key: string; value: string }[]) => void;
    onSaveEnv: () => void;
    onStreamLogs: (logId: string, projectId?: string) => void;
}

export const LogDrawer: React.FC<LogDrawerProps> = ({
    isOpen,
    drawerTab,
    logs,
    logsEndRef,
    project,
    envVars,
    onClose,
    onTabChange,
    onSetEnvVars,
    onSaveEnv,
    onStreamLogs,
}) => {
    if (!isOpen) return null;

    const buildId = project?.deployments?.[0]?.buildId;
    const currentProjectId = project?.id;

    const lastLine = logs[logs.length - 1] || "";
    const isDone = lastLine.includes("complete") || lastLine.includes("Succeeded");
    const isFailed = lastLine.includes("failed") || lastLine.includes("[FATAL]") || lastLine.includes("Error");

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 h-[45vh] bg-[#0d0d0d] border-t border-white/10 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/8 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-white/50">
                        <Terminal className="w-3.5 h-3.5" />
                        <span className="font-semibold text-white">Logs</span>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 bg-white/4 p-0.5 rounded-md">
                        {(["build", "runtime", "settings"] as const).map((tabId) => {
                            const isActive = drawerTab === tabId;
                            const label = tabId.charAt(0).toUpperCase() + tabId.slice(1);

                            return (
                                <button
                                    key={tabId}
                                    onClick={() => {
                                        onTabChange(tabId);
                                        if (!currentProjectId) return;
                                        if (tabId === 'build' && buildId) onStreamLogs(`build:${buildId}`, currentProjectId);
                                        else if (tabId === 'runtime') {
                                            const latestDepId = project?.deployments?.[0]?.id;
                                            onStreamLogs(`runtime:${currentProjectId}${latestDepId ? `:${latestDepId}` : ''}`, currentProjectId);
                                        }
                                        else if (tabId === 'settings') onStreamLogs(`settings:${currentProjectId}`, currentProjectId);
                                    }}
                                    className={`px-3 py-1 text-[10px] font-medium rounded transition-all cursor-pointer ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/60'}`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    {logs.length > 0 && (
                        <span className="text-white/20 text-[10px]">· {logs.length} lines</span>
                    )}
                </div>
                <div className="flex items-center gap-1">
                    <div
                        className={`w-2 h-2 rounded-full ${isDone ? "bg-green-400" : isFailed ? "bg-red-400" : "bg-blue-400 animate-pulse"}`}
                    />
                    <span className={`text-[10px] mr-3 ${isFailed ? "text-red-400 font-bold" : "text-white/30"}`}>
                        {isDone ? "Done" : isFailed ? "Failed" : "Streaming"}
                    </span>
                    <button
                        onClick={onClose}
                        className="w-6 h-6 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[11px] leading-relaxed space-y-0.5 text-white/90">
                {drawerTab === 'settings' ? (
                    <EnvironmentVariables
                        envVars={envVars}
                        onSetEnvVars={onSetEnvVars}
                        onSave={onSaveEnv}
                    />
                ) : (
                    <>
                        {(() => {
                            const latest = project?.deployments?.[0];
                            if (latest && (latest.status === 'building' || latest.status === 'pending')) {
                                return (
                                    <div className="mb-4 p-2 bg-blue-500/10 border border-blue-500/20 rounded flex items-center gap-2 text-blue-400">
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                        <span className="text-[10px] font-medium">A new deployment is currently building. Showing logs from the live instance.</span>
                                    </div>
                                );
                            }
                            return null;
                        })()}

                        {logs.length === 0 ? (
                            <p className="text-white/20">Waiting for logs...</p>
                        ) : (
                            logs.map((line, i) => {
                                const isLineSuccess = line.includes("✓") || line.includes("complete") || line.includes("Succeeded");
                                const isLineError = line.toLowerCase().includes("error") || line.toLowerCase().includes("failed") || line.includes("[FATAL]");
                                return (
                                    <div
                                        key={i}
                                        className={`${isLineSuccess ? "text-green-400" : isLineError ? "text-red-400 bg-red-400/10 px-1 -mx-1" : "text-white/60"}`}
                                    >
                                        {line}
                                    </div>
                                );
                            })
                        )}
                        <div ref={logsEndRef} />
                    </>
                )}
            </div>
        </div>
    );
};
