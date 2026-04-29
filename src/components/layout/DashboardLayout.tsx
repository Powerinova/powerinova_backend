import { Outlet, useLocation, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Bell, ChevronDown, LogOut, Settings, Activity, Cpu, Menu, X } from "lucide-react";
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
  "/dashboard": "Welcome",
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
  const baseTitle = titleMap[pathname] ?? "Dashboard";
  const title = pathname === "/dashboard" ? `${baseTitle}, ${profile.name}` : baseTitle;
  const { unreadCount } = useAlerts();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

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
    <div className="flex min-h-screen bg-cream font-sans text-ink relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <div className="sticky top-0 z-40 bg-cream border-b border-pi-border mb-6">
          <header className="px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-pi-border/20 text-teal transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-teal font-bold text-lg sm:text-xl tracking-tight truncate">{title}</h1>
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
                  <button className="flex items-center gap-3 pl-1.5 pr-3 py-1.5 rounded-full bg-white border border-pi-border focus:outline-none focus:border-brand text-left shrink-0">
                    <img src={profile.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="flex flex-col hidden sm:flex">
                      <span className="text-sm font-semibold text-teal leading-tight truncate max-w-[120px]">{profile.name}</span>
                      <span className="text-xs text-muted-sage leading-tight truncate max-w-[120px]">{profile.email}</span>
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
