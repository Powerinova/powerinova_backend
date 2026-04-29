import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock } from "lucide-react";

const peakData = [
  { time: "00:00", usage: 0.5 },
  { time: "04:00", usage: 0.2 },
  { time: "08:00", usage: 2.1 },
  { time: "12:00", usage: 3.5 },
  { time: "16:00", usage: 4.2 },
  { time: "20:00", usage: 5.8 },
  { time: "23:00", usage: 2.0 },
];

export default function PeakUsageChart() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand" />
          <h3 className="text-teal font-semibold">Peak Usage Hours</h3>
        </div>
        <span className="text-xs text-muted-sage px-2 py-1 bg-cream rounded-full">Avg. Today</span>
      </div>
      <div className="h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={peakData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e4dc" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: "#6b7a6b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7a6b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{ fill: '#f4f3f0' }}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e8e4dc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="usage" fill="#75b239" radius={[4, 4, 0, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
