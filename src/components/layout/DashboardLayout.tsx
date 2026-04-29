import { Outlet, useLocation, Link, useNavigate } from "@tanstack/react-router";
import { Bell, ChevronDown, LogOut, Settings, Activity, Cpu } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import { useAlerts } from "@/context/AlertsContext";
import { useProfile } from "@/context/ProfileContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const titleMap: Record<string, string> = {
  "/dashboard": "Welcome, Daniel Carter",
  "/dashboard/analytics": "Usage Trends",
  "/dashboard/optimization": "Efficiency Hub",
  "/dashboard/devices": "Devices",
  "/dashboard/utilities": "Utilities",
  "/dashboard/digital-services": "Digital Services",
  "/dashboard/reminders": "System Alerts",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
};

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const { profile } = useProfile();
  const title = titleMap[pathname] ?? "Dashboard";
  const { unreadCount } = useAlerts();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Signed out successfully.");
      navigate({ to: "/login" });
    } catch (error: any) {
      toast.error("Logout failed.");
    }
  };

  return (
    <div className="flex min-h-screen bg-cream font-sans text-ink">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <div className="sticky top-0 z-40 bg-cream border-b border-pi-border mb-6">
          <header className="px-6 pt-5 pb-3 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-teal font-bold text-xl tracking-tight truncate">{title}</h1>
            </div>


            <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
              <Link to="/dashboard/reminders" aria-label="Notifications" className="w-9 h-9 rounded-lg bg-white border border-pi-border flex items-center justify-center text-teal hover:text-brand relative">
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-amber text-white text-[9px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-3 pl-1.5 pr-3 py-1.5 rounded-full bg-white border border-pi-border focus:outline-none focus:border-brand text-left">
                    {profile.avatarUrl ? (
                      <img src={profile.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {profile.name.charAt(0)}
                      </span>
                    )}
                    <div className="flex flex-col hidden sm:flex">
                      <span className="text-sm font-semibold text-teal leading-tight">{profile.name}</span>
                      <span className="text-xs text-muted-sage leading-tight">{profile.email}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-sage ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/settings" className="cursor-pointer flex items-center gap-2 w-full">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center gap-2 text-red-600 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        </div>
        <main className="flex-1 px-6 pb-6">
          <Outlet />
        </main>
        <footer className="text-center text-xs text-muted-sage py-4">
          Powerinova Systems Inc. | © 2024 | Powered by NVIDIA SDK | <a className="text-brand hover:underline" href="#">Support</a>
        </footer>
      </div>
    </div>
  );
}
