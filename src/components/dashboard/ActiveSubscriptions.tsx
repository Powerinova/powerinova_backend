import { CreditCard, ArrowRight } from "lucide-react";

export default function ActiveSubscriptions() {
  const subs = [
    { name: "Enterprise Node Alpha", cost: "1,240.00 Units", status: "Active", renewal: "Cycle reset: Oct 1" },
    { name: "Messaging Gateway", cost: "340.50 Units", status: "Active", renewal: "Cycle reset: Oct 5" },
    { name: "Notification Hub", cost: "85.00 Units", status: "Warning", renewal: "Approaching Limit" },
    { name: "Performance Monitor", cost: "620.00 Units", status: "Active", renewal: "Cycle reset: Oct 12" },
    { name: "Edge Proxy", cost: "200.00 Units", status: "Active", renewal: "Cycle reset: Oct 15" },
  ];

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 mb-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-teal" />
          <h3 className="text-teal font-semibold">Digital Service Nodes</h3>
        </div>
      </div>

      <div className="space-y-3 flex-1">
        {subs.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-pi-border hover:bg-cream/50 transition-colors cursor-pointer">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">{s.name}</span>
              <span className={`text-xs ${s.status === 'Warning' ? 'text-amber font-medium' : 'text-muted-sage'}`}>{s.renewal}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-teal">{s.cost}</span>
              <ArrowRight className="w-4 h-4 text-pi-border" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
