import { Zap, Clock, DollarSign, ArrowUpRight } from "lucide-react";

export default function SavingsTracker() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-teal font-semibold">Optimization Gains</h3>
        <span className="text-xs text-muted-sage bg-cream px-2 py-1 rounded-full">This Month</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg border border-pi-border hover:border-brand/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-brand" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Cycle Time Saved</span>
              <span className="text-xs text-muted-sage">From active sleep triggers</span>
            </div>
          </div>
          <span className="font-bold text-teal flex items-center gap-1">12h <ArrowUpRight className="w-3 h-3 text-brand" /></span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg border border-pi-border hover:border-brand/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Grid Draw Reduced</span>
              <span className="text-xs text-muted-sage">From node throttling</span>
            </div>
          </div>
          <span className="font-bold text-teal flex items-center gap-1">45 Units <ArrowUpRight className="w-3 h-3 text-brand" /></span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg border border-pi-border hover:border-brand/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Efficiency Rating</span>
              <span className="text-xs text-muted-sage">Net system performance</span>
            </div>
          </div>
          <span className="font-bold text-teal flex items-center gap-1">94.2 Pts <ArrowUpRight className="w-3 h-3 text-brand" /></span>
        </div>
      </div>
    </div>
  );
}
