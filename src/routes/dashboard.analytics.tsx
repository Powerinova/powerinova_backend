import { createFileRoute } from "@tanstack/react-router";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import KPIStrip from "@/components/dashboard/KPIStrip";
import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import PeakUsageChart from "@/components/dashboard/PeakUsageChart";
import EfficiencyForecast from "@/components/dashboard/EfficiencyForecast";

export const Route = createFileRoute("/dashboard/analytics")({
  component: Analytics,
});

const weekly = [
  { day: "Mon", score: 72, usage: 5.4 },
  { day: "Tue", score: 78, usage: 6.1 },
  { day: "Wed", score: 81, usage: 5.8 },
  { day: "Thu", score: 76, usage: 6.7 },
  { day: "Fri", score: 85, usage: 5.2 },
  { day: "Sat", score: 88, usage: 4.8 },
  { day: "Sun", score: 84, usage: 5.0 },
];

function Analytics() {
  return (
    <div className="space-y-6">
      <KPIStrip />
      <div className="bg-white border border-pi-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-teal font-semibold">System Recalibration Trend</h3>
          <span className="text-xs text-muted-sage">Weekly Buffer</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weekly} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#75b239" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#75b239" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e4dc" />
              <XAxis dataKey="day" tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="score" stroke="#75b239" strokeWidth={2.5} fill="url(#g1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PeakUsageChart />
        <EfficiencyForecast />
        <div className="bg-white border border-pi-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-teal font-semibold">Daily Node Load</h3>
            <span className="text-xs text-muted-sage">Terminal uptime</span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekly} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8e4dc" />
                <XAxis dataKey="day" tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="usage" fill="#144444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <CategoryBreakdown />
      </div>
    </div>
  );
}