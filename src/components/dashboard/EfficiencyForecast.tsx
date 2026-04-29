import { TrendingUp, Target, AlertTriangle } from "lucide-react";

export default function EfficiencyForecast() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-teal" />
            <h3 className="text-teal font-semibold">Weekly Forecast</h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-1 rounded-md">AI Prediction</span>
        </div>
        
        <div className="flex items-end gap-3 mb-6">
          <span className="text-5xl font-bold text-teal tracking-tighter">89%</span>
          <div className="flex flex-col pb-1">
            <span className="text-sm font-semibold text-brand">+5%</span>
            <span className="text-xs text-muted-sage">vs last week</span>
          </div>
        </div>

        <p className="text-sm text-ink mb-6">
          Based on your current trajectory and weekend habits, the AI engine predicts you will exceed your efficiency target by Thursday.
        </p>
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-center justify-between p-3 rounded-lg border border-pi-border bg-cream/50">
          <div className="flex items-center gap-3">
            <Target className="w-4 h-4 text-teal" />
            <span className="text-sm font-medium text-teal">Projected Goal</span>
          </div>
          <span className="text-sm font-bold text-brand">Hit</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-red-100 bg-red-50/50">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">Risk Factor</span>
          </div>
          <span className="text-sm font-bold text-red-600">Late night usage</span>
        </div>
      </div>
    </div>
  );
}
