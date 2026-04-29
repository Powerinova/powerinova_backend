import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, MoreHorizontal } from "lucide-react";
import { usageTrendData } from "@/data/mockData";

export default function UsageTrends() {
  return (
    <div className="bg-white border border-pi-border rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-teal font-bold text-base">System Load Analytics</h3>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-brand/10 text-brand text-xs font-semibold px-2.5 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" /> Trend
          </span>
          <button className="text-muted-sage"><MoreHorizontal className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="flex items-start justify-between mt-2">
        <div>
          <p className="text-sm font-semibold text-teal">Cumulative Performance</p>
          <p className="text-[11px] text-muted-sage">(Metrics per Node)</p>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-teal">
            <span className="w-3 h-0.5 bg-teal" /> Actual Load
          </span>
          <span className="flex items-center gap-1 text-muted-sage">
            <span className="w-3 border-t border-dashed border-muted-sage" /> System Baseline
          </span>
        </div>
      </div>
      <div className="h-56 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usageTrendData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eef0ea" vertical={false} />
            <XAxis dataKey="date" tick={{ fill: "#6b7a6b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7a6b", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 2]} />
            <Tooltip
              contentStyle={{ background: "#ffffff", border: "1px solid #144444", borderRadius: 8, fontSize: 12 }}
              itemStyle={{ color: "#144444", fontWeight: 600 }}
              labelStyle={{ color: "#6b7a6b", marginBottom: 4, fontWeight: 700 }}
              formatter={(v) => [`${v} Metric`, "Load"]}
            />
            <ReferenceLine y={1.3} stroke="#a8b4a0" strokeDasharray="4 4" />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#144444"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#75b239", stroke: "#144444", strokeWidth: 1 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-4 text-[11px] mt-1">
        <span className="flex items-center gap-1 text-teal"><span className="w-2 h-2 rounded-full bg-brand" /> Actual Load</span>
        <span className="flex items-center gap-1 text-muted-sage"><span className="w-3 border-t border-dashed border-muted-sage" /> System Baseline</span>
      </div>
    </div>
  );
}
