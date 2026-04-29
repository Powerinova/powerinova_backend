import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard,
  TrendingUp,
  Activity,
  Monitor,
  Zap,
  Globe,
  AlertTriangle,
  FileText,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";
import { userProfile } from "../../data/mockData";
import { useAlerts } from "@/context/AlertsContext";
import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/context/ProfileContext";
import { toast } from "sonner";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { unreadCount } = useAlerts();
  const { logout } = useAuth();
  const { profile } = useProfile();
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

  const navItems = [
    { icon: LayoutDashboard, label: "Command Center", to: "/dashboard" },
    { icon: TrendingUp, label: "Usage Analytics", to: "/dashboard/analytics" },
    { icon: Zap, label: "Efficiency Hub", to: "/dashboard/optimization" },
    { icon: Monitor, label: "Smart Terminals", to: "/dashboard/devices" },
    { icon: Activity, label: "Grid Monitor", to: "/dashboard/utilities" },
    { icon: Globe, label: "Digital Nodes", to: "/dashboard/digital-services" },
    { icon: AlertTriangle, label: "System Alerts", to: "/dashboard/reminders", badge: unreadCount },
    { icon: FileText, label: "Audit Reports", to: "/dashboard/reports" },
    { icon: SettingsIcon, label: "Configuration", to: "/dashboard/settings" },
  ] as const;

  return (
    <aside className="w-60 shrink-0 bg-white border-r border-pi-border text-ink flex flex-col h-screen sticky top-0 overflow-y-auto">
      <div className="px-5  flex items-center gap-2">
        <img src="/logo.svg" alt="Powerinova Logo" className="w-40 h-auto object-contain" />
        
      </div>

      <nav className="flex-1 px-3 py-2 space-y-0.5">
        {navItems.map(({ icon: Icon, label, to, ...rest }) => {
          const active = pathname === to;
          const badge = "badge" in rest ? rest.badge : undefined;
          return (
            <Link
              key={to}
              to={to}
              className={[
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                active
                  ? "bg-brand text-white"
                  : "text-muted-sage hover:bg-cream hover:text-teal",
              ].join(" ")}
            >
              <Icon className="w-4 h-4" />
              <span className="flex-1">{label}</span>
              {badge && badge > 0 ? (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber text-white text-[10px] font-bold">
                  {badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-pi-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="font-medium text-sm">
                {profile.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink truncate">{profile.name}</p>
            <p className="text-xs text-muted-sage truncate">{profile.plan} Plan</p>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-muted-sage hover:text-red-500 hover:bg-red-50 rounded-md transition-colors" 
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
