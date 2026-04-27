import { useState, useEffect, useRef } from "react";
import { apiClient, API_BASE_URL } from "../services/api";

export type DrawerTab = "build" | "runtime" | "settings";

export const useProjectLogs = (_selectedDeploymentId: string | null) => {
  const [activeLogId, setActiveLogId] = useState<string | null>(null);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const [drawerTab, setDrawerTab] = useState<DrawerTab>("build");
  const [logs, setLogs] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const streamLogs = async (logId: string, _projectId?: string) => {

    // Clear logs when starting a new stream
    setLogs([]);
    setIsLogsOpen(true);
    setDrawerTab(logId.startsWith("build") ? "build" : logId.startsWith("settings") ? "settings" : "runtime");
    setActiveLogId(logId);

    // Fetch historical logs
    if (!logId.startsWith("settings")) {
      try {
        let endpoint = `/logs/${logId.replace(':', '/')}`;
        if (logId.startsWith("runtime")) {
          const parts = logId.split(':');
          if (parts.length === 3) {
            endpoint = `/logs/runtime/${parts[1]}?deploymentId=${parts[2]}`;
          }
        }

        const resp = await apiClient.get(endpoint);
        if (resp.data && resp.data.lines) {
          setLogs(resp.data.lines);
        }
      } catch (err) {
        console.warn("Failed to fetch historical logs", err);
      }
    }
  };

  // WebSocket log stream
  useEffect(() => {
    if (!activeLogId || activeLogId.startsWith("settings")) return;

    const wsUrl = API_BASE_URL.replace("http", "ws") + `/logs/stream?id=${activeLogId}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "log") {
          setLogs((prev) => [...prev, msg.data]);
        }
      } catch (e) {
        console.error("Failed to parse log message", e);
      }
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [activeLogId]);

  // Auto-scroll logic
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return {
    logs,
    activeLogId,
    isLogsOpen,
    drawerTab,
    logsEndRef,
    setLogs,
    setIsLogsOpen,
    setDrawerTab,
    streamLogs,
  };
};
