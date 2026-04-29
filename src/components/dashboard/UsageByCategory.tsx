import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { TrendingUp, MoreHorizontal } from "lucide-react";
import { usageByCategory } from "@/data/mockData";

export default function UsageByCategory() {
  const data = usageByCategory.map((c) => ({
    category: c.category,
    total: c.total,
    used: c.used,
    remaining: c.remaining,
    color: c.color,
  }));

  return (
    <div className="bg-white border border-pi-border rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-teal font-bold text-base">Metric Allocation</h3>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-brand/10 text-brand text-xs font-semibold px-2.5 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" /> Flow
          </span>
          <button className="text-muted-sage"><MoreHorizontal className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="h-64 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }} barSize={56}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eef0ea" vertical={false} />
            <XAxis dataKey="category" tick={{ fill: "#144444", fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: "#6b7a6b", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v} Units`}
            />
            <Tooltip
              cursor={false}
              contentStyle={{ background: "#ffffff", border: "1px solid #144444", borderRadius: 8, fontSize: 12 }}
              itemStyle={{ color: "#144444", fontWeight: 600 }}
              labelStyle={{ color: "#6b7a6b", marginBottom: 4, fontWeight: 700 }}
              formatter={(v, n) => [`${v}%`, n === "used" ? "Allocated" : "Available"]}
            />
            <Bar dataKey="remaining" stackId="a" radius={[0, 0, 0, 0]}>
              {data.map((d) => <Cell key={`r-${d.category}`} fill={d.color} fillOpacity={0.35} />)}
              <LabelList
                dataKey="total"
                position="top"
                formatter={(v) => `${v} Units`}
                style={{ fill: "#144444", fontWeight: 700, fontSize: 12 }}
              />
            </Bar>
            <Bar dataKey="used" stackId="a" radius={[8, 8, 0, 0]}>
              {data.map((d) => <Cell key={`u-${d.category}`} fill={d.color} />)}
              <LabelList
                dataKey="used"
                position="insideTop"
                formatter={(v) => `${v}%`}
                style={{ fill: "white", fontWeight: 700, fontSize: 11 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
