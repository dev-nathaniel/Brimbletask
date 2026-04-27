import React, { useRef } from "react";
import {
    X,
    Link,
    Upload,
    CheckCircle2,
    Plus,
    GitBranch
} from "lucide-react";

export interface CreateProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    createTab: "git" | "upload";
    setCreateTab: (tab: "git" | "upload") => void;
    gitUrl: string;
    setGitUrl: (url: string) => void;
    gitToken: string;
    setGitToken: (token: string) => void;
    repoSearch: string;
    setRepoSearch: (search: string) => void;
    uploadedFile: File | null;
    setUploadedFile: (file: File | null) => void;
    envVars: { key: string; value: string }[];
    setEnvVars: (vars: { key: string; value: string }[]) => void;
    isDragging: boolean;
    setIsDragging: (is: boolean) => void;
    onDrop: (e: React.DragEvent) => void;
    onSubmit: () => void;
    isPending: boolean;
    // Repo selection props
    reposLoading: boolean;
    isGithubNotConnected: boolean;
    repositories: any[];
    onConnectGithub: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
    isOpen,
    onClose,
    createTab,
    setCreateTab,
    gitUrl,
    setGitUrl,
    gitToken,
    setGitToken,
    repoSearch,
    setRepoSearch,
    uploadedFile,
    setUploadedFile,
    envVars,
    setEnvVars,
    isDragging,
    setIsDragging,
    onDrop,
    onSubmit,
    isPending,
    reposLoading,
    isGithubNotConnected,
    repositories,
    onConnectGithub,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const renderRepoList = () => {
        if (reposLoading) {
            return (
                <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-12 bg-gray-800 rounded animate-pulse" />
                    ))}
                </div>
            );
        }

        if (isGithubNotConnected) {
            return (
                <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                    <GitBranch className="w-10 h-10 text-gray-500" />
                    <div>
                        <p className="text-white font-mono text-sm">Connect your GitHub account</p>
                        <p className="text-gray-500 font-mono text-xs mt-1">to import repositories for deployment</p>
                    </div>
                    <button
                        onClick={onConnectGithub}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-mono rounded hover:bg-gray-200 transition-colors"
                    >
                        <GitBranch className="w-4 h-4" /> Connect GitHub
                    </button>
                </div>
            );
        }

        const filtered = repositories.filter((r: any) =>
            r.name?.toLowerCase().includes(repoSearch.toLowerCase()),
        );

        return (
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {filtered.map((repo: any) => (
                    <button
                        key={repo.id}
                        onClick={() => {
                            setGitUrl(repo.cloneUrl);
                            setRepoSearch("");
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-800 transition-colors text-left"
                    >
                        <span className="text-white font-mono text-sm">{repo.fullName}</span>
                        <span className="text-gray-500 font-mono text-xs">{repo.private ? "Private" : "Public"}</span>
                    </button>
                ))}
                {filtered.length === 0 && (
                    <p className="text-gray-500 font-mono text-xs text-center py-4">No repositories found</p>
                )}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-[#111] border border-white/10 rounded-xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-5 border-b border-white/8 shrink-0">
                    <h2 className="text-sm font-semibold text-white">New Deployment</h2>
                    <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/8 shrink-0">
                    {(["git", "upload"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setCreateTab(tab)}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-medium transition-all cursor-pointer ${createTab === tab ? "text-white border-b-2 border-white" : "text-white/40 hover:text-white/70"}`}
                        >
                            {tab === "git" ? <><Link className="w-3.5 h-3.5" /> Git URL</> : <><Upload className="w-3.5 h-3.5" /> Upload</>}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    {createTab === "git" ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs text-white/50 mb-2">Repository URL</label>
                                <input
                                    type="url"
                                    placeholder="https://github.com/org/repo"
                                    value={gitUrl}
                                    onChange={(e) => setGitUrl(e.target.value)}
                                    className="w-full bg-white/4 border border-white/10 rounded-md h-9 px-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors mb-4"
                                />
                                <label className="block text-xs text-white/50 mb-2">GitHub Personal Access Token (Optional)</label>
                                <input
                                    type="password"
                                    placeholder="ghp_xxxxxxxxxxxx"
                                    value={gitToken}
                                    onChange={(e) => setGitToken(e.target.value)}
                                    className="w-full bg-white/4 border border-white/10 rounded-md h-9 px-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs text-white/50 mb-1">Or pick a repository</label>
                                <input
                                    type="text"
                                    placeholder="Search repositories..."
                                    value={repoSearch}
                                    onChange={(e) => setRepoSearch(e.target.value)}
                                    className="w-full bg-white/4 border border-white/10 rounded-md h-8 px-3 text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors mb-2"
                                />
                                {renderRepoList()}
                            </div>
                        </div>
                    ) : (
                        <div
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={onDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${isDragging ? "border-white/40 bg-white/6" : "border-white/10 hover:border-white/20 hover:bg-white/4"}`}
                        >
                            <input ref={fileInputRef} type="file" className="hidden" accept=".zip,.tar.gz" onChange={(e) => setUploadedFile(e.target.files?.[0] ?? null)} />
                            {uploadedFile ? (
                                <div className="flex items-center justify-center gap-2 text-sm text-white">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> {uploadedFile.name}
                                </div>
                            ) : (
                                <>
                                    <Upload className="w-6 h-6 text-white/30 mx-auto mb-2" />
                                    <p className="text-sm text-white/50">Drop your project here</p>
                                    <p className="text-xs text-white/25 mt-1">.zip or .tar.gz</p>
                                </>
                            )}
                        </div>
                    )}

                    {/* Environment Variables */}
                    <div className="pt-4 border-t border-white/8 space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-white/40">Environment Variables</label>
                            <button
                                onClick={() => setEnvVars([...envVars, { key: "", value: "" }])}
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
                                            setEnvVars(next);
                                        }}
                                        className="flex-1 bg-white/4 border border-white/10 rounded-md h-8 px-2 text-[10px] font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                    <input
                                        placeholder="VALUE"
                                        value={v.value}
                                        onChange={(e) => {
                                            const next = [...envVars];
                                            next[i].value = e.target.value;
                                            setEnvVars(next);
                                        }}
                                        className="flex-1 bg-white/4 border border-white/10 rounded-md h-8 px-2 text-[10px] font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                    <button onClick={() => setEnvVars(envVars.filter((_, idx) => idx !== i))} className="h-8 w-8 flex items-center justify-center text-white/20 hover:text-red-400 transition-colors cursor-pointer">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-5 border-t border-white/8 shrink-0">
                    <button
                        onClick={onSubmit}
                        disabled={isPending}
                        className="w-full h-9 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {isPending ? "Starting..." : "Deploy"}
                    </button>
                </div>
            </div>
        </div>
    );
};
