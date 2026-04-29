import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { RefreshCcw, Download, Clock, Activity, Loader2 } from "lucide-react";
import { toast } from "sonner";
import EfficiencyGauge from "@/components/dashboard/EfficiencyGauge";
import UsageTrends from "@/components/dashboard/UsageTrends";
import SystemAlerts from "@/components/dashboard/SystemAlerts";
import UsageByCategory from "@/components/dashboard/UsageByCategory";
import AITipsPanel from "@/components/dashboard/AITipsPanel";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import KPIStrip from "@/components/dashboard/KPIStrip";
import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import RemindersPanel from "@/components/dashboard/RemindersPanel";
import GridSimulator from "@/components/dashboard/GridSimulator";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

function Overview() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const handleRefresh = () => {
    setIsRefreshing(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Synchronizing with grid...",
        success: () => {
          setIsRefreshing(false);
          setLastUpdated(new Date().toLocaleTimeString());
          return "System synchronization complete";
        },
        error: "Synchronization failed",
      }
    );
  };

  const handleGenerateAudit = () => {
    setIsGenerating(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2500)),
      {
        loading: "Generating comprehensive system audit...",
        success: () => {
          setIsGenerating(false);
          return "Audit report generated successfully. Check your downloads.";
        },
        error: "Failed to generate audit",
      }
    );
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Dashboard Sub-Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-pi-border rounded-2xl p-4 mb-2 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
            </span>
            <span className="text-sm font-bold text-teal tracking-tight uppercase">Grid Operational Status</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-sage bg-cream px-3 py-1.5 rounded-full border border-pi-border/50">
            <Clock className="w-3.5 h-3.5" />
            <span>Latest Synchronization: {lastUpdated}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cream hover:bg-pi-border/20 text-teal text-sm font-semibold rounded-xl border border-pi-border transition-all disabled:opacity-50 flex-1 sm:flex-none justify-center"
          >
            <RefreshCcw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            <span>{isRefreshing ? "Synchronizing..." : "Sync Grid"}</span>
          </button>
          <button 
            onClick={handleGenerateAudit}
            disabled={isGenerating}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand/90 shadow-lg shadow-brand/20 transition-all disabled:opacity-50 flex-1 sm:flex-none justify-center"
          >
            {isGenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isGenerating ? "Generating..." : "Generate Audit"}</span>
          </button>
        </div>
      </div>

      <KPIStrip isRefreshing={isRefreshing} />
      
      <GridSimulator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EfficiencyGauge />
        <UsageTrends />
        <UsageByCategory />
        <CategoryBreakdown />
        <AITipsPanel />
        <RemindersPanel />
        <SystemAlerts />
        <ActivityFeed />
      </div>
    </div>
  );
}
