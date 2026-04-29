import { createFileRoute } from "@tanstack/react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Zap, Droplet, Flame } from "lucide-react";
import UtilityGoalTracker from "@/components/dashboard/UtilityGoalTracker";
import UtilityAnomalyAlerts from "@/components/dashboard/UtilityAnomalyAlerts";

export const Route = createFileRoute("/dashboard/utilities")({
  component: Utilities,
});

const utilityData = [
  { month: "May", electricity: 420, water: 180, gas: 90 },
  { month: "Jun", electricity: 440, water: 200, gas: 85 },
  { month: "Jul", electricity: 510, water: 260, gas: 70 },
  { month: "Aug", electricity: 540, water: 280, gas: 65 },
  { month: "Sep", electricity: 470, water: 210, gas: 80 },
  { month: "Oct", electricity: 430, water: 190, gas: 95 },
];

const stats = [
  { label: "Primary Grid", value: "430 Units", icon: Zap, color: "text-amber" },
  { label: "Hydraulic Node", value: "190 Vol.", icon: Droplet, color: "text-indigo" },
  { label: "Thermal Unit", value: "95 Vol.", icon: Flame, color: "text-brand" },
];

function Utilities() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-pi-border rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-cream flex items-center justify-center ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-sage">{s.label}</p>
                  <p className="text-xl font-bold text-teal">{s.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white border border-pi-border rounded-2xl p-5">
        <h3 className="text-teal font-bold text-base">Grid Resource Load</h3>
        <div className="h-72 mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={utilityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef0ea" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={false}
                contentStyle={{ background: "#ffffff", border: "1px solid #144444", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#144444", fontWeight: 600 }}
                labelStyle={{ color: "#6b7a6b", marginBottom: 4, fontWeight: 700 }}
              />
              <Bar dataKey="electricity" fill="#e3940b" radius={[6, 6, 0, 0]} />
              <Bar dataKey="water" fill="#484c7f" radius={[6, 6, 0, 0]} />
              <Bar dataKey="gas" fill="#75b239" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <UtilityGoalTracker />
        <UtilityAnomalyAlerts />
      </div>
    </div>
  );
}