import { Gauge, ZapOff, Monitor, AlertOctagon, ArrowUp, ArrowDown, type LucideIcon, Activity, Zap } from "lucide-react";
import { kpiStats } from "@/data/mockData";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const iconMap: Record<string, LucideIcon> = {
  gauge: Gauge,
  "zap-off": ZapOff,
  monitor: Monitor,
  "alert-octagon": AlertOctagon,
};

export default function KPIStrip({ isRefreshing }: { isRefreshing?: boolean }) {
  const [stats, setStats] = useState([...kpiStats]);

  useEffect(() => {
    if (isRefreshing) {
      const timer = setTimeout(() => {
        setStats(prev => prev.map(s => {
          if (s.label === "Efficiency Score") {
            const currentVal = parseInt(s.value);
            const newVal = Math.min(95, Math.max(80, currentVal + (Math.random() > 0.5 ? 1 : -1)));
            return { ...s, value: `${newVal}%` };
          }
          return s;
        }));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isRefreshing]);

  const handleCardClick = (label: string, value: string) => {
    toast.info(`${label} Telemetry`, {
      description: `Current reading: ${value}. System status is nominal.`,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => {
        const Icon = iconMap[s.icon] ?? Zap;
        return (
          <div 
            key={s.label} 
            onClick={() => handleCardClick(s.label, s.value)}
            className="bg-white border border-pi-border rounded-2xl p-5 group hover:border-brand/30 transition-all hover:shadow-lg hover:shadow-brand/5 relative overflow-hidden cursor-pointer active:scale-[0.98]"
          >
            <div className={`absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity ${isRefreshing ? "opacity-100" : ""}`}>
               <Activity className={`w-3 h-3 text-brand ${isRefreshing ? "animate-pulse" : ""}`} />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
              </div>
              <span
                className={[
                  "inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider",
                  s.up ? "bg-brand/10 text-brand" : "bg-amber/10 text-amber",
                ].join(" ")}
              >
                {s.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <div className="text-3xl font-bold text-teal tracking-tight group-hover:scale-105 transition-transform origin-left">{s.value}</div>
              {isRefreshing && <span className="text-[10px] text-brand animate-pulse font-bold ml-1">...</span>}
            </div>
            <div className="text-xs font-semibold text-muted-sage mt-1 uppercase tracking-tight">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}