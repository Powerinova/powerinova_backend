import { useAlerts } from "@/context/AlertsContext";
import { AlertCircle, CheckCircle2, Info, XCircle, Check, Trash2 } from "lucide-react";

export default function NotificationCenter() {
  const { alerts, markAsRead, markAllAsRead, clearAll } = useAlerts();

  const getIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertCircle className="w-5 h-5 text-amber" />;
      case "success": return <CheckCircle2 className="w-5 h-5 text-brand" />;
      case "error": return <XCircle className="w-5 h-5 text-red-500" />;
      case "info":
      default: return <Info className="w-5 h-5 text-teal" />;
    }
  };

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 lg:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-teal font-semibold text-lg">System Alerts & Notifications</h3>
          <p className="text-sm text-muted-sage mt-1">Manage your automated alerts and system messages.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllAsRead}
            disabled={alerts.every(a => a.read) || alerts.length === 0}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-teal hover:bg-cream rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            Mark all read
          </button>
          <button 
            onClick={clearAll}
            disabled={alerts.length === 0}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
            Clear all
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.length === 0 ? (
          <div className="text-center py-10 text-muted-sage">
            <CheckCircle2 className="w-12 h-12 mx-auto text-brand/30 mb-3" />
            <p>You're all caught up!</p>
          </div>
        ) : (
          alerts.map(alert => (
            <div 
              key={alert.id} 
              className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${alert.read ? 'bg-white border-pi-border opacity-70' : 'bg-cream/30 border-brand/20 shadow-sm'}`}
            >
              <div className="mt-0.5 shrink-0">
                {getIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className={`text-sm font-semibold truncate ${alert.read ? 'text-ink' : 'text-teal'}`}>
                    {alert.title}
                  </h4>
                  <span className="text-xs text-muted-sage whitespace-nowrap shrink-0">{alert.time}</span>
                </div>
                <p className="text-sm text-muted-sage">{alert.description}</p>
              </div>
              {!alert.read && (
                <button 
                  onClick={() => markAsRead(alert.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-brand/10 text-brand shrink-0 transition-colors"
                  title="Mark as read"
                >
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
