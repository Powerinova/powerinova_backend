import { useState } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Zap, ChevronRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { efficiencyOverview } from "@/data/mockData";

export default function EfficiencyGauge() {
  const { score, thisMonth, lastMonth, trend, networkUtilization, resourceAllocation } = efficiencyOverview;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const data = [{ name: "score", value: score, fill: "#75b239" }];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Performing deep system audit...",
        success: () => {
          setIsAnalyzing(false);
          return "System audit completed. All nodes are performing within optimal parameters.";
        },
        error: "Audit failed",
      }
    );
  };

  const handleMetricsExplorer = () => {
    toast.info("Initializing Metrics Explorer...", {
      description: "Redirecting to detailed telemetry breakdown.",
    });
  };

  return (
    <div className="bg-white border border-pi-border rounded-2xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-teal font-bold text-base">Net Efficiency Analysis</h3>
        <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-xs font-semibold px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Optimized State
        </span>
      </div>

      <div className="relative h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="78%"
            outerRadius="100%"
            data={data}
            startAngle={210}
            endAngle={-30}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar background={{ fill: "#eef0ea" }} dataKey="value" cornerRadius={20} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-6">
          <div className="text-4xl font-bold text-teal">{score}%</div>
          <div className="text-xs text-muted-sage mt-8 font-medium uppercase tracking-tight">System Score</div>
          <span className="mt-2 inline-block bg-brand/10 text-brand text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
            Performance Stable
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border border-pi-border rounded-xl p-3 bg-cream/30">
        <div className="text-center">
          <div className="text-[10px] text-muted-sage font-bold uppercase tracking-tight mb-1">Current Cycle</div>
          <div className="text-lg font-bold text-teal">{thisMonth}%</div>
        </div>
        <div className="text-center border-x border-pi-border">
          <div className="text-[10px] text-muted-sage font-bold uppercase tracking-tight mb-1">Prior Cycle</div>
          <div className="text-lg font-bold text-teal">{lastMonth}%</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-muted-sage font-bold uppercase tracking-tight mb-1">Trend</div>
          <div className="text-lg font-bold text-brand">{trend}</div>
        </div>
      </div>

      <div className="mt-4 space-y-3 flex-1">
        <Bar label="Node Utilization" value={networkUtilization} />
        <Bar label="Power Distribution" value={resourceAllocation} />
      </div>

      <div className="mt-5 pt-4 border-t border-pi-border grid grid-cols-2 gap-3">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-teal text-white text-xs font-bold rounded-xl hover:bg-teal/90 transition-all disabled:opacity-50"
        >
          {isAnalyzing ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Zap className="w-3.5 h-3.5" />
          )}
          <span>{isAnalyzing ? "Syncing..." : "Deep Audit"}</span>
        </button>
        <button 
          onClick={handleMetricsExplorer}
          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-pi-border text-teal text-xs font-bold rounded-xl hover:bg-cream transition-all group"
        >
          <span>Metrics Explorer</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] mb-1.5 uppercase tracking-tight font-bold">
        <span className="text-muted-sage">{label}</span>
        <span className="text-teal">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-pi-border overflow-hidden">
        <div className="h-full bg-teal rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

