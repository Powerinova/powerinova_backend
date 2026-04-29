import { useState } from "react";
import { Zap, Cpu, Wifi } from "lucide-react";

export default function ActionableEngine() {
  const [switches, setSwitches] = useState({
    s1: true,
    s2: false,
    s3: true,
  });

  const toggle = (id: keyof typeof switches) => setSwitches(s => ({ ...s, [id]: !s[id] }));

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-teal" />
          <h3 className="text-teal font-semibold">Active Optimizations</h3>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-1 rounded-md">Efficiency Engine</span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between p-4 hover:bg-cream/50 rounded-lg transition-colors">
          <div className="flex items-center gap-4">
            <Cpu className="w-5 h-5 text-brand" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Terminal Throttle Control</span>
              <span className="text-xs text-muted-sage">Regulates background CPU cycles for inactive terminals</span>
            </div>
          </div>
          <button 
            onClick={() => toggle("s1")}
            className={`w-10 h-5 rounded-full relative transition-colors focus:outline-none ${switches.s1 ? 'bg-brand' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${switches.s1 ? 'translate-x-5' : 'translate-x-0'}`}></span>
          </button>
        </div>

        <div className="flex items-center justify-between p-4 hover:bg-cream/50 rounded-lg transition-colors">
          <div className="flex items-center gap-4">
            <Wifi className="w-5 h-5 text-brand" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Network Standby Protocol</span>
              <span className="text-xs text-muted-sage">Auto-disconnects nodes during established low-activity hours</span>
            </div>
          </div>
          <button 
            onClick={() => toggle("s2")}
            className={`w-10 h-5 rounded-full relative transition-colors focus:outline-none ${switches.s2 ? 'bg-brand' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${switches.s2 ? 'translate-x-5' : 'translate-x-0'}`}></span>
          </button>
        </div>

        <div className="flex items-center justify-between p-4 hover:bg-cream/50 rounded-lg transition-colors">
          <div className="flex items-center gap-4">
            <Zap className="w-5 h-5 text-brand" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">System Power Reserve</span>
              <span className="text-xs text-muted-sage">Prioritizes critical telemetry tasks below 15% charge</span>
            </div>
          </div>
          <button 
            onClick={() => toggle("s3")}
            className={`w-10 h-5 rounded-full relative transition-colors focus:outline-none ${switches.s3 ? 'bg-brand' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${switches.s3 ? 'translate-x-5' : 'translate-x-0'}`}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
