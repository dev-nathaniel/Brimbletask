import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProjects,
  triggerDeployment,
  createProject,
  getRepositories,
  getConnectGithubUrl,
  getProjectVariables,
  updateProjectVariables,
  revertDeployment,
  uploadProject,
} from "@/services/api";
import { toast } from "sonner";
import {
  Plus,
  Search,
  RefreshCw,
  Terminal,
  ChevronRight,
} from "lucide-react";

// Hooks
import { useProjectLogs } from "../hooks/useProjectLogs";
import { useGlobalStatus } from "../hooks/useGlobalStatus";

// Components
import { ProjectRow } from "../components/dashboard/ProjectRow";
import { LogDrawer } from "../components/dashboard/LogDrawer";
import { CreateProjectModal } from "../components/dashboard/CreateProjectModal";

const asArray = (val: any) => {
  if (Array.isArray(val)) return val;
  if (val && typeof val === "object" && Array.isArray(val.data))
    return val.data;
  return [];
};

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; icon: React.ReactNode }
> = {
  pending: { label: "Pending", color: "text-yellow-400", icon: <Terminal className="w-3 h-3" /> },
  building: { label: "Building", color: "text-blue-400", icon: <Terminal className="w-3 h-3 animate-spin" /> },
  deploying: { label: "Deploying", color: "text-purple-400", icon: <Terminal className="w-3 h-3 animate-spin" /> },
  success: { label: "Running", color: "text-green-400", icon: <Terminal className="w-3 h-3" /> },
  running: { label: "Running", color: "text-green-400", icon: <Terminal className="w-3 h-3" /> },
  failed: { label: "Failed", color: "text-red-400", icon: <Terminal className="w-3 h-3" /> },
};

export const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeploymentId, setSelectedDeploymentId] = useState<string | null>(null);

  // Custom Hooks
  useGlobalStatus();
  const {
    logs,
    isLogsOpen,
    drawerTab,
    logsEndRef,
    setIsLogsOpen,
    setDrawerTab,
    streamLogs,
  } = useProjectLogs(selectedDeploymentId);

  // Local State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createTab, setCreateTab] = useState<"git" | "upload">("git");
  const [gitUrl, setGitUrl] = useState("");
  const [repoSearch, setRepoSearch] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [gitToken, setGitToken] = useState("");
  const [envVars, setEnvVars] = useState<{ key: string; value: string }[]>([{ key: "PORT", value: "3000" }]);
  const [isDragging, setIsDragging] = useState(false);

  const queryClient = useQueryClient();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchInterval: 60000,
    placeholderData: (prev) => prev,
  });

  // Mutations
  const deployMutation = useMutation({
    mutationFn: ({ projectId, token }: { projectId: string; token?: string }) =>
      triggerDeployment(projectId, token),
    onSuccess: (data) => {
      toast.success("Deployment triggered");
      queryClient.invalidateQueries({ queryKey: ["deployments"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      if (data?.data?.buildId) {
        streamLogs(`build:${data.data.buildId}`, selectedDeploymentId!);
      }
    },
    onError: () => toast.error("Deployment failed to start"),
  });

  const revertDeploymentMutation = useMutation({
    mutationFn: ({ projectId, deploymentId }: { projectId: string; deploymentId: string }) =>
      revertDeployment(projectId, deploymentId),
    onSuccess: (data: any) => {
      toast.success("Deployment rollback initiated");
      queryClient.invalidateQueries({ queryKey: ["deployments"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      if (data?.data?.buildId) {
        streamLogs(`build:${data.data.buildId}`, selectedDeploymentId!);
      }
    },
    onError: (err: any) => {
      const message = err.response?.data?.message || "Deployment failed to revert";
      toast.error(message);
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => createProject(data),
    onSuccess: async (res) => {
      setIsCreateOpen(false);
      setGitUrl("");
      setRepoSearch("");
      setUploadedFile(null);
      const project = res.data || res;
      if (project && project.id) {
        try {
          let deployRes;
          if (createTab === "upload" && uploadedFile) {
            toast.loading("Uploading source code...");
            deployRes = await uploadProject(project.id, uploadedFile);
            toast.dismiss();
            toast.success("Source uploaded and build started");
          } else {
            deployRes = await triggerDeployment(project.id, gitToken || undefined);
            toast.success("Project created and deployment started");
          }

          queryClient.invalidateQueries({ queryKey: ["projects"] });
          if (deployRes?.data?.buildId || deployRes?.buildId) {
            streamLogs(`build:${deployRes?.data?.buildId || deployRes?.buildId}`, project.id);
          }
        } catch (err: any) {
          toast.dismiss();
          const msg = err.response?.data?.message || "Failed to start deployment";
          toast.error(msg);
        }
      }
    },
    onError: () => toast.error("Failed to create project"),
  });

  // GitHub logic
  const { data: reposData, isLoading: reposLoading, error: reposError, refetch: refetchRepos } = useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
    retry: false,
    enabled: isCreateOpen && createTab === "git",
  });

  const repositories = reposData?.repositories ?? [];
  const isGithubNotConnected = (reposError as any)?.response?.data?.code === "OAUTH_NOT_CONNECTED" || (reposError as any)?.response?.status === 400;

  const handleConnectGithub = async () => {
    const url = getConnectGithubUrl();
    const width = 600, height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(url, "github-oauth", `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`);

    const storageInterval = setInterval(() => {
      if (localStorage.getItem("github_connected")) {
        localStorage.removeItem("github_connected");
        clearInterval(storageInterval);
        toast.success("GitHub connected!");
        refetchRepos();
      }
    }, 500);
  };

  const handleSaveEnv = async () => {
    const project = asArray(projects).find(p => p.id === selectedDeploymentId);
    const envId = project?.environments?.[0]?.id;
    if (envId) {
      try {
        const variables = envVars.filter(v => v.key.trim() && v.value.trim());
        await updateProjectVariables(envId, variables);
        toast.success("Settings saved. Triggering redeploy...");
        deployMutation.mutate({ projectId: selectedDeploymentId! });
      } catch (err) {
        toast.error("Failed to update settings");
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleSubmitDeploy = () => {
    const variables = envVars.filter(v => v.key.trim() && v.value.trim());
    const name = gitUrl.split("/").pop()?.replace(".git", "") || uploadedFile?.name.split(".")[0] || "New Project";

    if (createTab === "git") {
      if (!gitUrl.trim()) return toast.error("Please enter a Git URL");
      createMutation.mutate({ name, teamId: "default", repositoryUrl: gitUrl, gitToken: gitToken || undefined, variables });
    } else {
      if (!uploadedFile) return toast.error("Please upload a file");
      createMutation.mutate({ name, teamId: "default", file: uploadedFile, variables });
    }
  };

  // Sync env vars when project changes
  useEffect(() => {
    if (selectedDeploymentId && (drawerTab === 'settings' || isLogsOpen)) {
      const project = asArray(projects).find((p: any) => p.id === selectedDeploymentId);
      const envId = project?.environments?.[0]?.id;
      if (envId) {
        const fetchVars = async () => {
          try {
            const resp = await getProjectVariables(envId);
            setEnvVars(resp.data || resp || []);
          } catch (err) {
            console.warn("Failed to sync environment variables", err);
          }
        };
        fetchVars();
      }
    }
  }, [selectedDeploymentId, projects, drawerTab, isLogsOpen]);

  const filteredProjects = asArray(projects).filter((p: any) =>
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allDeployments = asArray(projects).flatMap((p: any) => asArray(p.deployments));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      <nav className="border-b border-white/8 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-[10px] font-black">A</span>
            </div>
            <span className="text-sm font-semibold text-white">Adroit</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="text-sm text-white/50">Deployments</span>
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-2 bg-white text-black text-xs font-semibold px-3.5 py-1.5 rounded-md hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            New Deployment
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: asArray(projects).length, color: "text-white" },
            { label: "Running", value: allDeployments.filter((d: any) => d.status === "running").length, color: "text-green-400" },
            { label: "Building", value: allDeployments.filter((d: any) => ["building", "deploying"].includes(d.status)).length, color: "text-blue-400" },
            { label: "Failed", value: allDeployments.filter((d: any) => d.status === "failed").length, color: "text-red-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/4 border border-white/8 rounded-lg p-4">
              <p className="text-xs text-white/40 mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input
              placeholder="Search deployments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/4 border border-white/8 rounded-md h-9 pl-9 pr-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
          <button
            onClick={() => queryClient.invalidateQueries({ queryKey: ["projects"] })}
            className="h-9 w-9 flex items-center justify-center bg-white/4 border border-white/8 rounded-md text-white/50 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white/4 border border-white/8 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_100px] gap-4 px-4 py-2.5 border-b border-white/8 text-[11px] font-medium text-white/30 uppercase tracking-wider">
            <span>Project</span>
            <span>Status</span>
            <span>Image Tag</span>
            <span>Updated</span>
            <span />
          </div>

          {isLoading ? (
            <div className="divide-y divide-white/6">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="grid grid-cols-[2fr_1fr_1fr_1fr_100px] gap-4 px-4 py-3.5 animate-pulse">
                  <div className="h-4 bg-white/8 rounded w-3/4" /><div className="h-4 bg-white/8 rounded w-1/2" />
                  <div className="h-4 bg-white/8 rounded w-2/3" /><div className="h-4 bg-white/8 rounded w-1/2" />
                  <div className="h-4 bg-white/8 rounded w-8" />
                </div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-white/30">
              <Terminal className="w-8 h-8 mb-3 opacity-50" />
              <p className="text-sm">No deployments yet</p>
              <button onClick={() => setIsCreateOpen(true)} className="mt-4 text-xs text-white/50 hover:text-white underline underline-offset-2 cursor-pointer transition-colors">
                Create your first deployment
              </button>
            </div>
          ) : (
            <div className="divide-y divide-white/6">
              {filteredProjects.map((project: any) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  isSelected={selectedDeploymentId === project.id}
                  statusConfig={STATUS_CONFIG}
                  onToggleExpand={() => setSelectedDeploymentId(selectedDeploymentId === project.id ? null : project.id)}
                  onDeploy={(projectId) => deployMutation.mutate({ projectId })}
                  onStreamLogs={streamLogs}
                  onRevert={(projectId, deploymentId) => revertDeploymentMutation.mutate({ projectId, deploymentId })}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <CreateProjectModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        createTab={createTab}
        setCreateTab={setCreateTab}
        gitUrl={gitUrl}
        setGitUrl={setGitUrl}
        gitToken={gitToken}
        setGitToken={setGitToken}
        repoSearch={repoSearch}
        setRepoSearch={setRepoSearch}
        uploadedFile={uploadedFile}
        setUploadedFile={setUploadedFile}
        envVars={envVars}
        setEnvVars={setEnvVars}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        onDrop={handleDrop}
        onSubmit={handleSubmitDeploy}
        isPending={createMutation.isPending || deployMutation.isPending}
        reposLoading={reposLoading}
        isGithubNotConnected={isGithubNotConnected}
        repositories={repositories}
        onConnectGithub={handleConnectGithub}
      />

      <LogDrawer
        isOpen={isLogsOpen}
        drawerTab={drawerTab}
        logs={logs}
        logsEndRef={logsEndRef as React.RefObject<HTMLDivElement>}
        project={asArray(projects).find(p => p.id === selectedDeploymentId)}
        envVars={envVars}
        onClose={() => setIsLogsOpen(false)}
        onTabChange={setDrawerTab}
        onSetEnvVars={setEnvVars}
        onSaveEnv={handleSaveEnv}
        onStreamLogs={streamLogs}
      />
    </div>
  );
};
