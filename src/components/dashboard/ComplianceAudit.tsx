import { ShieldCheck, FileCheck, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function ComplianceAudit() {
  const handleComplianceHub = () => {
    toast.info("Entering Compliance Hub...", {
      description: "Synchronizing with global energy standard protocols.",
    });
  };

  return (
    <div className="bg-white border border-pi-border rounded-xl p-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-teal font-semibold">Grid Protocol Audit</h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-1 rounded-md">Compliant</span>
        </div>
        
        <div className="flex items-center justify-center py-6">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-cream"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-brand"
                strokeDasharray="94, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-brand mb-1" />
              <span className="text-2xl font-bold text-teal">94<span className="text-lg">%</span></span>
            </div>
          </div>
        </div>
      </div>

      <div 
        onClick={handleComplianceHub}
        className="flex items-center justify-between p-3 rounded-lg border border-pi-border bg-cream/30 hover:bg-cream/50 transition-colors cursor-pointer mt-4"
      >
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-teal" />
          <span className="text-sm font-semibold text-teal">Standard Compliance Hub</span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-brand" />
      </div>
    </div>
  );
}
