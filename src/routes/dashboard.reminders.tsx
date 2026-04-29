import { createFileRoute } from "@tanstack/react-router";
import NotificationCenter from "@/components/dashboard/NotificationCenter";

export const Route = createFileRoute("/dashboard/reminders")({
  component: Reminders,
});

function Reminders() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <NotificationCenter />
    </div>
  );
}