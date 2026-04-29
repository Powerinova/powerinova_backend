import { RefreshCw, Cpu, ShieldCheck, Sparkles, FileSpreadsheet, ClipboardList, type LucideIcon, ArrowRight } from "lucide-react";
import { activityFeed } from "@/data/mockData";

const iconMap: Record<string, LucideIcon> = {
  "refresh-cw": RefreshCw,
  cpu: Cpu,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  "file-spreadsheet": FileSpreadsheet,
  "clipboard-list": ClipboardList,
};

export default function ActivityFeed() {
  return (
    <div className="bg-white border border-pi-border rounded-2xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-teal font-bold text-base tracking-tight">Live Event Stream</h3>
        <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded-lg uppercase tracking-wider">{activityFeed.length} LOGS LOGGED</span>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 -mr-2">
        <ol className="relative border-l-2 border-pi-border/50 ml-3 space-y-6">
          {activityFeed.map((a) => {
            const Icon = iconMap[a.icon] ?? Zap;
            return (
              <li key={a.id} className="pl-7 relative group cursor-pointer">
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white border-2 border-pi-border flex items-center justify-center group-hover:border-brand group-hover:scale-110 transition-all">
                  <Icon className="w-3 h-3 text-brand" />
                </span>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="text-sm font-bold text-teal group-hover:text-brand transition-colors">{a.action}</p>
                  <span className="text-[10px] font-bold text-muted-sage whitespace-nowrap bg-cream px-2 py-0.5 rounded border border-pi-border/50">{a.time}</span>
                </div>
                <p className="text-xs font-semibold text-muted-sage uppercase tracking-tight">{a.category}</p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-brand" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <button className="mt-8 w-full py-3 bg-white border border-pi-border text-teal text-xs font-bold rounded-xl hover:bg-cream transition-all flex items-center justify-center gap-2 group uppercase tracking-widest">
        <span>Access Full History</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}