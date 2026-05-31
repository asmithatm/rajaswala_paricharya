import React from "react";
import { Sparkles, History, Compass, Activity, CheckCircle } from "lucide-react";

export type EpistemologyType =
  | "ayurvedic"
  | "historical"
  | "symbolic"
  | "correlation"
  | "scientific";

interface EpistemologyBadgeProps {
  type: EpistemologyType;
  className?: string;
  withBorder?: boolean;
}

export const EpistemologyBadge: React.FC<EpistemologyBadgeProps> = ({
  type,
  className = "",
  withBorder = false,
}) => {
  const config = {
    ayurvedic: {
      label: "Classical Ayurvedic View",
      style: "bg-amber-50 text-amber-800 border-amber-600/30",
      icon: <Sparkles className="w-3 h-3 text-amber-700" />,
      borderStyle: "border-l-[3px] border-l-amber-500 bg-amber-50/20",
    },
    historical: {
      label: "Historical Interpretation",
      style: "bg-stone-100 text-stone-800 border-stone-800/20",
      icon: <History className="w-3 h-3 text-stone-700" />,
      borderStyle: "border-l-[3px] border-l-stone-600 bg-stone-50/30",
    },
    symbolic: {
      label: "Symbolic Interpretation",
      style: "bg-indigo-50 text-indigo-800 border-indigo-200",
      icon: <Compass className="w-3 h-3 text-indigo-700" />,
      borderStyle: "border-l-[3px] border-l-indigo-400 bg-indigo-50/20",
    },
    correlation: {
      label: "Emerging Scientific Correlation",
      style: "bg-emerald-50 text-emerald-800 border-emerald-800/10",
      icon: <Activity className="w-3 h-3 text-emerald-700" />,
      borderStyle: "border-l-[3px] border-l-emerald-400 bg-emerald-50/20",
    },
    scientific: {
      label: "Modern Scientific Evidence",
      style: "bg-teal-50 text-teal-800 border-teal-800/15",
      icon: <CheckCircle className="w-3 h-3 text-teal-700" />,
      borderStyle: "border-l-[3px] border-l-teal-500 bg-teal-50/25",
    },
  };

  const current = config[type];

  if (withBorder) {
    return (
      <div className={`p-4 rounded-sm border ${current.borderStyle} ${className}`}>
        <div className="flex items-center gap-1.5 mb-2">
          {current.icon}
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold">
            {current.label}
          </span>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold tracking-wider uppercase ${current.style} ${className}`}
    >
      {current.icon}
      {current.label}
    </span>
  );
};
