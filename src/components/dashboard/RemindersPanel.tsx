import { useState } from "react";
import { AlertTriangle, Info, CheckCircle2, Timer, Activity, CheckCircle, Ghost, BellOff, type LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { reminders, type ReminderType } from "@/data/mockData";

const iconMap: Record<string, LucideIcon> = {
  timer: Timer,
  activity: Activity,
  "check-circle-2": CheckCircle,
  ghost: Ghost,
};

const styleMap: Record<ReminderType, { bg: string; text: string; Icon: LucideIcon }> = {
  warning: { bg: "bg-amber/10", text: "text-amber", Icon: AlertTriangle },
  info: { bg: "bg-indigo/10", text: "text-indigo", Icon: Info },
  success: { bg: "bg-brand/10", text: "text-brand", Icon: CheckCircle2 },
};

export default function RemindersPanel({ limit }: { limit?: number }) {
  const [items, setItems] = useState(typeof limit === "number" ? reminders.slice(0, limit) : reminders);

  const handleComplete = (id: string, title: string) => {
    setItems(prev => prev.filter(r => r.id !== id));
    toast.success(`Notification resolved: ${title}`);
  };

  const handleSnooze = (id: string) => {
    toast.info("Notification snoozed for 1 hour");
  };

  if (items.length === 0) {
    return (
      <div className="bg-white border border-pi-border rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6 text-brand" />
        </div>
        <h3 className="text-teal font-bold">Clear Inbox</h3>
        <p className="text-sm text-muted-sage mt-1">No active notifications at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-teal font-semibold">Autonomous Notifications</h3>
        <span className="text-xs text-muted-sage">{items.length} Flagged</span>
      </div>
      <ul className="divide-y divide-pi-border">
        {items.map((r) => {
          const s = styleMap[r.type];
          const Icon = iconMap[r.icon] ?? s.Icon;
          return (
            <li key={r.id} className="group py-3 first:pt-0 last:pb-0 flex gap-3">
              <div className={`w-9 h-9 rounded-lg ${s.bg} ${s.text} flex items-center justify-center shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-teal truncate">{r.title}</p>
                  <span className="text-[11px] text-muted-sage shrink-0">{r.time}</span>
                </div>
                <p className="text-sm text-muted-sage mt-0.5 leading-relaxed">{r.description}</p>
                
                <div className="mt-2.5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleComplete(r.id, r.title)}
                    className="text-[10px] font-bold text-brand hover:underline px-2 py-1 bg-brand/5 rounded-lg transition-all"
                  >
                    RESOLVE
                  </button>
                  <button 
                    onClick={() => handleSnooze(r.id)}
                    className="text-[10px] font-bold text-muted-sage hover:underline px-2 py-1 bg-cream rounded-lg transition-all"
                  >
                    SNOOZE
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}