import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const bandwidthData = [
  { time: "00:00", in: 120, out: 80 },
  { time: "04:00", in: 80, out: 50 },
  { time: "08:00", in: 350, out: 200 },
  { time: "12:00", in: 500, out: 420 },
  { time: "16:00", in: 480, out: 390 },
  { time: "20:00", in: 250, out: 180 },
  { time: "23:00", in: 150, out: 90 },
];

export default function ServiceBandwidthChart() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-teal" />
          <h3 className="text-teal font-semibold">Global Bandwidth (TB)</h3>
        </div>
        <span className="text-xs text-muted-sage bg-cream px-2 py-1 rounded-full">Last 24h</span>
      </div>
      <div className="flex-1 min-h-[250px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={bandwidthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#75b239" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#75b239" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#144444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#144444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e4dc" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e8e4dc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="in" name="Ingress" stroke="#75b239" strokeWidth={2} fillOpacity={1} fill="url(#colorIn)" />
            <Area type="monotone" dataKey="out" name="Egress" stroke="#144444" strokeWidth={2} fillOpacity={1} fill="url(#colorOut)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
