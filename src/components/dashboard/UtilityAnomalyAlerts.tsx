import { AlertCircle, TrendingUp, Info } from "lucide-react";

export default function UtilityAnomalyAlerts() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-teal font-semibold">Anomaly Detection</h3>
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-1 rounded-md">Active</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-red-700">Water usage spike detected</h4>
            <p className="text-xs text-red-600/80 mt-1">Usage in Zone 3 is 40% higher than the historical average for Sunday.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-amber/5 border border-amber/20">
          <TrendingUp className="w-5 h-5 text-amber shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-amber-700">HVAC inefficiency</h4>
            <p className="text-xs text-amber-700/80 mt-1">Electricity load increased despite lower outside temperatures. Filter check recommended.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-brand/5 border border-brand/20">
          <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-teal">Gas consumption nominal</h4>
            <p className="text-xs text-muted-sage mt-1">No anomalies detected in the last 14 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
