import React from "react";
import {
    Circle,
    Loader2,
    CheckCircle2,
    XCircle
} from "lucide-react";

const STATUS_CONFIG: Record<
    string,
    { label: string; color: string; icon: React.ReactNode }
> = {
    pending: {
        label: "Pending",
        color: "text-yellow-400",
        icon: <Circle className="w-3 h-3" />,
    },
    building: {
        label: "Building",
        color: "text-blue-400",
        icon: <Loader2 className="w-3 h-3 animate-spin" />,
    },
    deploying: {
        label: "Deploying",
        color: "text-purple-400",
        icon: <Loader2 className="w-3 h-3 animate-spin" />,
    },
    success: {
        label: "Running",
        color: "text-green-400",
        icon: <CheckCircle2 className="w-3 h-3" />,
    },
    running: {
        label: "Running",
        color: "text-green-400",
        icon: <CheckCircle2 className="w-3 h-3" />,
    },
    failed: {
        label: "Failed",
        color: "text-red-400",
        icon: <XCircle className="w-3 h-3" />,
    },
};

export interface StatusBadgeProps {
    status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const config = STATUS_CONFIG[status.toLowerCase()] || STATUS_CONFIG.pending;

    return (
        <div className={`flex items-center gap-1.5 ${config.color} px-2 py-0.5`}>
            {/* <div className={`flex items-center gap-1.5 ${config.color} bg-white/4 px-2 py-0.5 rounded-full`}> */}
            {config.icon}
            <span className="text-[10px] font-bold uppercase tracking-wider">
                {config.label}
            </span>
        </div>
    );
};
