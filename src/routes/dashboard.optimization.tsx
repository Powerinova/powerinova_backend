import { createFileRoute } from "@tanstack/react-router";
import AITipsPanel from "@/components/dashboard/AITipsPanel";
import EfficiencyGauge from "@/components/dashboard/EfficiencyGauge";
import SavingsTracker from "@/components/dashboard/SavingsTracker";
import ActionableEngine from "@/components/dashboard/ActionableEngine";

export const Route = createFileRoute("/dashboard/optimization")({
  component: Optimization,
});

function Optimization() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AITipsPanel />
        </div>
        <EfficiencyGauge />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActionableEngine />
        </div>
        <SavingsTracker />
      </div>
    </div>
  );
}