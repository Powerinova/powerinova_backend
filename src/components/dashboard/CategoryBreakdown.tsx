import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { categoryData } from "@/data/mockData";

export default function CategoryBreakdown() {
  return (
    <div className="bg-white border border-pi-border rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-teal font-semibold">Segment Distribution</h3>
        <span className="text-xs text-muted-sage">Allocation Share</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryData} dataKey="value" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {categoryData.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex flex-col justify-center gap-2">
          {categoryData.map((c) => (
            <li key={c.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                <span className="text-ink">{c.name}</span>
              </div>
              <span className="font-semibold text-teal">{c.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}