import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../services/api";

export const useGlobalStatus = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const wsUrl = API_BASE_URL.replace("http", "ws") + "/logs/status";
    const ws = new WebSocket(wsUrl);

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "status") {
          console.log("[Global status] update received", msg.data);
          queryClient.invalidateQueries({ queryKey: ["projects"] });
          queryClient.invalidateQueries({ queryKey: ["deployments"] });
        }
      } catch (e) {
        console.error("Failed to parse status message", e);
      }
    };

    ws.onerror = (err) => console.warn("Global status WebSocket error", err);

    return () => ws.close();
  }, [queryClient]);
};
