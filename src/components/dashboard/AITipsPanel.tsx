import { useState } from "react";
import { Moon, Settings2, Box, Download, Lightbulb, CheckCircle2, XCircle, type LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { aiTips, type Priority } from "@/data/mockData";

const iconMap: Record<string, LucideIcon> = {
  moon: Moon,
  "settings-2": Settings2,
  box: Box,
  download: Download,
};

const priorityStyle: Record<Priority, string> = {
  High: "bg-amber/10 text-amber",
  Medium: "bg-indigo/10 text-indigo",
  Low: "bg-brand/10 text-brand",
};

export default function AITipsPanel({ limit }: { limit?: number }) {
  const [tips, setTips] = useState(typeof limit === "number" ? aiTips.slice(0, limit) : aiTips);

  const handleApply = (id: string, title: string) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1200)),
      {
        loading: `Applying optimization: ${title}...`,
        success: () => {
          setTips(prev => prev.filter(t => t.id !== id));
          return `Optimization applied: ${title}`;
        },
        error: "Failed to apply optimization",
      }
    );
  };

  const handleDismiss = (id: string) => {
    setTips(prev => prev.filter(t => t.id !== id));
    toast.success("Recommendation dismissed");
  };

  if (tips.length === 0) {
    return (
      <div className="bg-white border border-pi-border rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6 text-brand" />
        </div>
        <h3 className="text-teal font-bold">All Optimized</h3>
        <p className="text-sm text-muted-sage mt-1">No pending recommendations at this time.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-brand" />
          </div>
          <h3 className="text-teal font-semibold">Heuristic Recommendations</h3>
        </div>
        <span className="text-xs text-muted-sage">{tips.length} Proposals</span>
      </div>
      <div className="space-y-3">
        {tips.map((t) => {
          const Icon = iconMap[t.icon] ?? Lightbulb;
          return (
            <article key={t.id} className="group border border-pi-border rounded-lg p-4 hover:border-brand/40 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-cream flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-teal" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${priorityStyle[t.priority]}`}>
                      {t.priority}
                    </span>
                    <span className="text-[11px] text-muted-sage">{t.category}</span>
                    <span className="text-[11px] text-brand font-semibold ml-auto">{t.saving}</span>
                  </div>
                  <h4 className="mt-1.5 text-sm font-semibold text-teal">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-sage leading-relaxed">{t.description}</p>
                  
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleApply(t.id, t.title)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-white text-[10px] font-bold rounded-lg hover:bg-brand/90 transition-all"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>APPLY</span>
                    </button>
                    <button 
                      onClick={() => handleDismiss(t.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-pi-border text-muted-sage text-[10px] font-bold rounded-lg hover:bg-cream transition-all"
                    >
                      <XCircle className="w-3 h-3" />
                      <span>DISMISS</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}