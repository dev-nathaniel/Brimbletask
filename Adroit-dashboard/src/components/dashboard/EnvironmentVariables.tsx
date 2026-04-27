import React from "react";
import { Plus, X } from "lucide-react";

export interface EnvironmentVariablesProps {
    envVars: { key: string; value: string }[];
    onSetEnvVars: (vars: { key: string; value: string }[]) => void;
    onSave: () => void;
}

export const EnvironmentVariables: React.FC<EnvironmentVariablesProps> = ({
    envVars,
    onSetEnvVars,
    onSave,
}) => {
    return (
        <div className="max-w-2xl mx-auto w-full py-4 space-y-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Environment Variables</h3>
                    <button
                        onClick={() => onSetEnvVars([...envVars, { key: "", value: "" }])}
                        className="text-[10px] text-white/60 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                        <Plus className="w-3 h-3" /> Add Variable
                    </button>
                </div>

                <div className="space-y-2">
                    {envVars.map((v, i) => (
                        <div key={i} className="flex gap-2 items-center">
                            <input
                                placeholder="KEY"
                                value={v.key}
                                onChange={(e) => {
                                    const next = [...envVars];
                                    next[i].key = e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, '');
                                    onSetEnvVars(next);
                                }}
                                className="flex-1 bg-white/4 border border-white/10 rounded-md h-8 px-2 text-[10px] font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                            />
                            <input
                                placeholder="VALUE"
                                value={v.value}
                                onChange={(e) => {
                                    const next = [...envVars];
                                    next[i].value = e.target.value;
                                    onSetEnvVars(next);
                                }}
                                className="flex-1 bg-white/4 border border-white/10 rounded-md h-8 px-2 text-[10px] font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                            />
                            <button
                                onClick={() => onSetEnvVars(envVars.filter((_, idx) => idx !== i))}
                                className="h-8 w-8 flex items-center justify-center text-white/20 hover:text-red-400 transition-colors cursor-pointer"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <button
                        onClick={onSave}
                        className="px-4 py-1.5 bg-white text-black text-[10px] font-bold rounded hover:bg-white/90 transition-all cursor-pointer"
                    >
                        Save & Redeploy
                    </button>
                </div>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-md">
                <p className="text-[10px] text-blue-400 flex items-start gap-2 leading-relaxed">
                    <span className="font-bold">TIP:</span> Adroit automatically detects the <code className="bg-blue-400/20 px-1 rounded">PORT</code> variable to configure your application's external access and health checks.
                </p>
            </div>
        </div>
    );
};
