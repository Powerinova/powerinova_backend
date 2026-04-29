import { Server, CheckCircle, AlertTriangle, MonitorOff, HardDrive } from "lucide-react";

export default function DeviceHealthSummary() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Server className="w-5 h-5 text-teal" />
        <h3 className="text-teal font-semibold">Node Status Overview</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-brand/5 border border-brand/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-brand">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Active Nodes</span>
          </div>
          <span className="text-3xl font-bold text-teal">12</span>
        </div>
        <div className="p-4 rounded-lg bg-amber/5 border border-amber/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Node Anomalies</span>
          </div>
          <span className="text-3xl font-bold text-teal">2</span>
        </div>
        <div className="p-4 rounded-lg bg-pi-border/30 border border-pi-border flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-sage">
            <HardDrive className="w-4 h-4" />
            <span className="text-sm font-semibold">Standby Terminals</span>
          </div>
          <span className="text-3xl font-bold text-teal">5</span>
        </div>
        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-red-500">
            <MonitorOff className="w-4 h-4" />
            <span className="text-sm font-semibold">Disabled Nodes</span>
          </div>
          <span className="text-3xl font-bold text-teal">1</span>
        </div>
      </div>
    </div>
  );
}
