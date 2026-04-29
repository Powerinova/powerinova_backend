import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Cpu, HardDrive, Server } from "lucide-react";
import DeviceHealthSummary from "@/components/dashboard/DeviceHealthSummary";
import DeviceActivityGraph from "@/components/dashboard/DeviceActivityGraph";

export const Route = createFileRoute("/dashboard/devices")({
  component: Devices,
});

const devices = [
  { name: "Terminal Node 1", status: "Online", load: 62, icon: Server },
  { name: "Terminal Node 2", status: "Online", load: 41, icon: Server },
  { name: "Terminal Node 3", status: "Idle", load: 12, icon: HardDrive },
  { name: "Terminal Node 4", status: "Warning", load: 92, icon: Cpu },
  { name: "Operator Terminal A", status: "Online", load: 55, icon: Monitor },
  { name: "Operator Terminal B", status: "Offline", load: 0, icon: Monitor },
];

const statusStyle: Record<string, string> = {
  Online: "bg-brand/10 text-brand",
  Idle: "bg-indigo/10 text-indigo",
  Warning: "bg-amber/10 text-amber",
  Offline: "bg-pi-border text-muted-sage",
};

function Devices() {
  return (
    <div>
      <DeviceHealthSummary />
      <DeviceActivityGraph />
      
      <div className="flex items-center justify-between mb-4 mt-2">
        <h3 className="text-teal font-semibold text-lg">Terminal Grid</h3>
        <span className="text-xs text-muted-sage px-3 py-1 bg-white border border-pi-border rounded-full">Monitoring 6 nodes</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {devices.map((d) => {
        const Icon = d.icon;
        return (
          <div key={d.name} className="bg-white border border-pi-border rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-teal">
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${statusStyle[d.status]}`}>
                {d.status}
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-teal">{d.name}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-sage">Duty Cycle</span>
                <span className="text-teal font-semibold">{d.load}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-pi-border overflow-hidden">
                <div
                  className={`h-full rounded-full ${d.load > 85 ? "bg-amber" : "bg-brand"}`}
                  style={{ width: `${d.load}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}