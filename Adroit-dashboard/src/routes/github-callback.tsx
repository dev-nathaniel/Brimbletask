import { useEffect, useState } from "react";
import { GitBranch, CheckCircle2 } from "lucide-react";

export const GithubCallback = () => {
  const [status, setStatus] = useState<"success" | "error" | "closing">(
    "success",
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");

    if (success === "true") {
      setStatus("closing");

      // Always try to postMessage to opener — works even if opener reference
      // is lost after redirect chain, as long as same origin
      try {
        window.opener?.postMessage({ type: "GITHUB_CONNECTED" }, "*");
      } catch (_) {}

      // Also broadcast via localStorage as a fallback
      localStorage.setItem("github_connected", Date.now().toString());

      setTimeout(() => {
        window.close();
        // If window.close() is blocked (no opener), redirect to home
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }, 1500);
    } else {
      setStatus("error");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center space-y-4">
        {status === "closing" && (
          <>
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
            <p className="text-green-400 text-lg font-mono">
              GitHub connected successfully.
            </p>
            <p className="text-gray-500 text-sm font-mono">Closing window...</p>
          </>
        )}
        {status === "success" && (
          <>
            <GitBranch className="w-10 h-10 text-white mx-auto animate-pulse" />
            <p className="text-white font-mono">Completing connection...</p>
          </>
        )}
        {status === "error" && (
          <>
            <p className="text-red-400 font-mono">
              GitHub connection failed. Please try again.
            </p>
            <button
              onClick={() => window.close()}
              className="px-4 py-2 bg-white text-black font-mono text-sm rounded"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};
