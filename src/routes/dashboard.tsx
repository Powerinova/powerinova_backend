import { createFileRoute, useNavigate, Outlet } from "@tanstack/react-router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { AlertsProvider } from "@/context/AlertsContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

function DashboardWithProvider() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-brand" />
        <p className="mt-4 text-teal font-medium tracking-tight">Authorizing Grid Access...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <ProfileProvider>
      <AlertsProvider>
        <DashboardLayout />
      </AlertsProvider>
    </ProfileProvider>
  );
}

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Powerinova" },
      { name: "description", content: "Track efficiency, usage, and smart reminders across all your activity." },
    ],
  }),
  component: DashboardWithProvider,
});