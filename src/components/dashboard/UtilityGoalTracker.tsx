import { Zap, Droplet, Flame } from "lucide-react";

export default function UtilityGoalTracker() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-teal font-semibold">Grid Quota Compliance</h3>
        <span className="text-xs text-muted-sage">Cycle reset: 96h</span>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber" />
              <span className="text-sm font-semibold text-teal">Primary Grid</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-teal">430 Units</span>
              <span className="text-muted-sage"> / 450 Units</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-cream overflow-hidden">
            <div className="h-full bg-amber rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2">
              <Droplet className="w-4 h-4 text-indigo" />
              <span className="text-sm font-semibold text-teal">Hydraulic Node</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-red-500">190 Vol.</span>
              <span className="text-muted-sage"> / 180 Vol.</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-cream overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-brand" />
              <span className="text-sm font-semibold text-teal">Thermal Unit</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-teal">95 Vol.</span>
              <span className="text-muted-sage"> / 120 Vol.</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-cream overflow-hidden">
            <div className="h-full bg-brand rounded-full" style={{ width: '79%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
