import { createFileRoute } from "@tanstack/react-router";
import { Globe, Database, Cloud, Lock } from "lucide-react";
import ServiceBandwidthChart from "@/components/dashboard/ServiceBandwidthChart";
import ActiveSubscriptions from "@/components/dashboard/ActiveSubscriptions";

export const Route = createFileRoute("/dashboard/digital-services")({
  component: DigitalServices,
});

const services = [
  { name: "Edge Delivery Platform", uptime: "99.98%", usage: "480 Units", icon: Globe, status: "Active" },
  { name: "Storage Cluster", uptime: "99.92%", usage: "310 Units", icon: Database, status: "Active" },
  { name: "Distributed Vault", uptime: "99.99%", usage: "250 Units", icon: Cloud, status: "Active" },
  { name: "Identity Protocol", uptime: "99.87%", usage: "42 Units", icon: Lock, status: "Caution" },
];

function DigitalServices() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ServiceBandwidthChart />
        </div>
        <div>
          <ActiveSubscriptions />
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-teal font-semibold text-lg">System Infrastructure</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((s) => {
        const Icon = s.icon;
        const active = s.status === "Active";
        return (
          <div key={s.name} className="bg-white border border-pi-border rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-teal">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal">{s.name}</p>
                  <p className="text-xs text-muted-sage">Uptime {s.uptime}</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${active ? "bg-brand/10 text-brand" : "bg-amber/10 text-amber"}`}>
                {s.status}
              </span>
            </div>
            <div className="mt-4 text-xs text-muted-sage">Metric Throughput</div>
            <div className="text-xl font-bold text-teal">{s.usage}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
}