import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const activityData = [
  { time: "10:00", active: 18, idle: 2 },
  { time: "11:00", active: 15, idle: 5 },
  { time: "12:00", active: 10, idle: 10 },
  { time: "13:00", active: 14, idle: 6 },
  { time: "14:00", active: 19, idle: 1 },
  { time: "15:00", active: 20, idle: 0 },
  { time: "16:00", active: 17, idle: 3 },
];

export default function DeviceActivityGraph() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-brand" />
          <h3 className="text-teal font-semibold">Node Telemetry</h3>
        </div>
        <span className="text-xs text-muted-sage">Real-time Buffer</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e4dc" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7a6b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #e8e4dc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line type="monotone" dataKey="active" stroke="#75b239" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Online Terminals" />
            <Line type="monotone" dataKey="idle" stroke="#a8b4a0" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Standby Nodes" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
