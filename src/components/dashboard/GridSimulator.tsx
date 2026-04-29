import React, { useState } from "react";
import { Zap, Cpu, Clock, Shield, Play, Loader2, CheckCircle2, TrendingUp, Sparkles, Monitor } from "lucide-react";
import { toast } from "sonner";

export default function GridSimulator() {
  const [nodes, setNodes] = useState(24);
  const [uptime, setUptime] = useState(12);
  const [priority, setPriority] = useState("Standard");
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setResult] = useState<{ score: number; savings: string; protocol: string } | null>(null);

  const handleSimulate = () => {
    setIsSimulating(true);
    setResult(null);
    
    // Artificial delay for "calculation"
    setTimeout(() => {
      const baseScore = 70;
      const nodesFactor = (100 - nodes) / 10;
      const uptimeFactor = (24 - uptime) / 2;
      const priorityBoost = priority === "Critical" ? 15 : priority === "Standard" ? 5 : 0;
      
      const optimizedScore = Math.min(98, Math.round(baseScore + nodesFactor + uptimeFactor + priorityBoost));
      const projectedSavings = ((optimizedScore - baseScore) * 1.5).toFixed(1);
      
      setResult({
        score: optimizedScore,
        savings: `${projectedSavings}%`,
        protocol: priority === "Critical" ? "Aggressive Redundancy Sync" : "Distributed Load Balancing",
      });
      
      setIsSimulating(false);
      toast.success("Simulation complete: Optimized grid parameters generated.");
    }, 2000);
  };

  return (
    <div className="bg-white border border-pi-border rounded-2xl overflow-hidden shadow-sm animate-fade-in">
      <div className="p-6 border-b border-pi-border bg-cream/20">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 bg-brand/10 rounded-lg">
            <Cpu className="w-5 h-5 text-brand" />
          </div>
          <h3 className="text-teal font-bold text-lg tracking-tight">Interactive Grid Simulator</h3>
        </div>
        <p className="text-muted-sage text-sm">Adjust parameters to calculate your system's optimal efficiency protocol.</p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-teal flex items-center gap-2 uppercase tracking-wider">
                <Monitor className="w-4 h-4 text-brand" />
                Active Terminal Nodes
              </label>
              <span className="text-sm font-bold bg-brand/10 text-brand px-2 py-0.5 rounded-md min-w-[3rem] text-center">{nodes}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="100" 
              value={nodes} 
              onChange={(e) => setNodes(parseInt(e.target.value))}
              className="w-full accent-brand h-1.5 bg-pi-border rounded-lg appearance-none cursor-pointer hover:accent-brand/80 transition-all"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-teal flex items-center gap-2 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-brand" />
                Daily Uptime Profile
              </label>
              <span className="text-sm font-bold bg-brand/10 text-brand px-2 py-0.5 rounded-md min-w-[3rem] text-center">{uptime}h</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="24" 
              value={uptime} 
              onChange={(e) => setUptime(parseInt(e.target.value))}
              className="w-full accent-brand h-1.5 bg-pi-border rounded-lg appearance-none cursor-pointer hover:accent-brand/80 transition-all"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-teal flex items-center gap-2 uppercase tracking-wider">
              <Shield className="w-4 h-4 text-brand" />
              Service Priority Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Low", "Standard", "Critical"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={[
                    "py-2.5 px-3 text-[10px] font-bold rounded-xl border transition-all uppercase tracking-widest",
                    priority === p 
                      ? "bg-teal border-teal text-white shadow-lg shadow-teal/20 scale-[1.02]" 
                      : "bg-white border-pi-border text-muted-sage hover:bg-cream hover:border-brand/30"
                  ].join(" ")}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 relative overflow-hidden"
          >
            {isSimulating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                <span className="tracking-widest uppercase text-xs">Initialize Simulation</span>
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="relative min-h-[300px] flex items-center justify-center border-l border-pi-border/30 pl-0 lg:pl-10">
          {!result && !isSimulating && (
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto text-pi-border border-2 border-dashed border-pi-border/50">
                 <Zap className="w-10 h-10" />
              </div>
              <div className="max-w-[200px] mx-auto">
                <p className="text-teal font-bold text-sm tracking-tight uppercase">Awaiting Parameters</p>
                <p className="text-[10px] text-muted-sage mt-1 font-medium">Configure the grid topography and run the simulator to view results.</p>
              </div>
            </div>
          )}

          {isSimulating && (
            <div className="text-center space-y-6 animate-pulse">
              <div className="relative">
                <div className="w-24 h-24 border-4 border-pi-border border-t-brand rounded-full animate-spin mx-auto" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-brand" />
              </div>
              <div>
                <p className="text-teal font-bold tracking-tight uppercase text-sm">Analyzing Grid Matrix...</p>
                <p className="text-[10px] text-muted-sage mt-1">Applying NVIDIA-accelerated optimization models.</p>
              </div>
            </div>
          )}

          {result && !isSimulating && (
            <div className="w-full space-y-5 animate-in slide-in-from-bottom duration-700">
              <div className="bg-brand text-white p-6 rounded-3xl shadow-2xl shadow-brand/20 relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Optimized Efficiency Score</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black">{result.score}</span>
                    <span className="text-2xl font-bold opacity-80">%</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold bg-white/20 backdrop-blur-md w-fit px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +{result.savings} projected gain
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white border border-pi-border rounded-2xl p-4 hover:border-brand/30 transition-colors group">
                  <p className="text-[10px] font-bold text-muted-sage uppercase tracking-widest mb-1 opacity-70">Protocol ID</p>
                  <p className="text-xs font-bold text-teal flex items-center gap-2 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand group-hover:scale-110 transition-transform" />
                    {result.protocol}
                  </p>
                </div>
                <div className="bg-white border border-pi-border rounded-2xl p-4 hover:border-amber/30 transition-colors group">
                  <p className="text-[10px] font-bold text-muted-sage uppercase tracking-widest mb-1 opacity-70">Grid Status</p>
                  <p className="text-xs font-bold text-teal flex items-center gap-2 truncate">
                    <Zap className="w-3.5 h-3.5 text-amber group-hover:scale-110 transition-transform" />
                    Optimized Load
                  </p>
                </div>
              </div>
              
              <div className="bg-teal p-4 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 p-3 opacity-10">
                  <Sparkles className="w-10 h-10" />
                </div>
                <p className="text-[9px] font-bold uppercase opacity-60 mb-1.5 tracking-widest">System Recommendation</p>
                <p className="text-[11px] leading-relaxed font-medium">
                  Based on your <span className="text-brand font-bold">{nodes} node</span> topography, we recommend 
                  <span className="font-bold italic"> Dynamic Load Shedding</span> to sustain a 
                  <span className="text-brand font-bold"> {result.score}% </span> benchmark.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
