import { Calendar, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function ReportScheduler() {
  const handleManageSchedule = () => {
    toast.info("Accessing Schedule Manager...", {
      description: "Redirecting to your automated delivery configuration dashboard.",
    });
  };

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-teal font-semibold">Automated Delivery</h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-1 rounded-md">Scheduled</span>
        </div>
        <p className="text-sm text-muted-sage mb-5">Configure reports to be automatically generated and sent to your stakeholders.</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg border border-pi-border">
            <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-brand" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Weekly Efficiency Summary</span>
              <span className="text-xs text-muted-sage">Every Monday at 9:00 AM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg border border-pi-border">
            <div className="w-8 h-8 rounded-full bg-indigo/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-indigo" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal">Monthly Utility Audit</span>
              <span className="text-xs text-muted-sage">1st of every month at 12:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleManageSchedule}
        className="mt-5 w-full flex items-center justify-center gap-2 bg-cream text-teal text-sm font-semibold py-2.5 rounded-lg border border-pi-border hover:bg-pi-border/30 transition-colors"
      >
        <Send className="w-4 h-4" /> Manage Schedules
      </button>
    </div>
  );
}
