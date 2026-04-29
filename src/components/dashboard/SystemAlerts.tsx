import { AlertTriangle, CheckCircle2, BellOff, MoreHorizontal, Inbox } from "lucide-react";
import { toast } from "sonner";
import { useAlerts } from "@/context/AlertsContext";

export default function SystemAlerts() {
  const { alerts, removeAlert, clearAll } = useAlerts();

  const handleAcknowledge = (id: string, title: string) => {
    removeAlert(id);
    toast.success(`Anomaly acknowledged: ${title}`);
  };

  const handleIgnore = (id: string) => {
    removeAlert(id);
    toast.info("Alert ignored and archived.");
  };

  const handleClearFeed = () => {
    if (alerts.length === 0) return;
    clearAll();
    toast.success("All alerts cleared.");
  };

  const handleAccessLogs = () => {
    toast.info("Accessing master logs...", {
      description: "Establishing secure connection to core telemetry server.",
    });
  };

  return (
    <div className="bg-white border border-pi-border rounded-2xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-teal font-bold text-base">Live Node Feed</h3>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleClearFeed}
            className="text-[10px] font-bold text-brand uppercase tracking-wider hover:underline px-2 py-1 bg-brand/5 rounded-lg transition-colors disabled:opacity-50"
            disabled={alerts.length === 0}
          >
            Clear Feed
          </button>
          <button className="p-1.5 text-muted-sage hover:bg-cream rounded-lg transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 bg-amber/10 text-amber text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full bg-amber ${alerts.length > 0 ? "animate-pulse" : ""}`} /> {alerts.length} Critical Anomalies
        </span>
      </div>

      {alerts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-pi-border rounded-xl bg-cream/20">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-3">
            <Inbox className="w-6 h-6 text-brand" />
          </div>
          <h4 className="text-teal font-bold text-sm">System Healthy</h4>
          <p className="text-xs text-muted-sage mt-1">No anomalies detected in the current cycle.</p>
        </div>
      ) : (
        <ul className="space-y-3 flex-1 overflow-y-auto max-h-[400px] pr-1 custom-scrollbar">
          {alerts.map((a) => (
            <li key={a.id} className="group bg-cream/30 border border-pi-border rounded-xl p-4 hover:border-brand/30 transition-all hover:shadow-md hover:shadow-brand/5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber/10 text-amber flex items-center justify-center shrink-0 border border-amber/20 group-hover:bg-amber group-hover:text-white transition-colors">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-muted-sage uppercase tracking-wider">{a.date}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      a.level === 'Alert' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {a.level}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-teal leading-snug group-hover:text-brand transition-colors">
                    {a.title}
                  </p>
                  
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleAcknowledge(a.id, a.title)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-brand text-white text-[10px] font-bold rounded-lg hover:bg-brand/90 transition-all"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>ACKNOWLEDGE</span>
                    </button>
                    <button 
                      onClick={() => handleIgnore(a.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-pi-border text-muted-sage text-[10px] font-bold rounded-lg hover:bg-cream transition-all"
                    >
                      <BellOff className="w-3 h-3" />
                      <span>IGNORE</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <button 
        onClick={handleAccessLogs}
        className="mt-4 w-full py-2.5 text-xs font-bold text-teal bg-cream border border-pi-border rounded-xl hover:bg-pi-border/20 transition-all uppercase tracking-wider"
      >
        Access Master Logs
      </button>
    </div>
  );
}

