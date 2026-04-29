export type ReminderType = "warning" | "info" | "success";
export type Priority = "High" | "Medium" | "Low";

export const userProfile = {
  name: "Daniel Carter",
  email: "daniel@powerinova.com",
  plan: "Pro",
  avatar: null as string | null,
  joinedDate: "March 2024",
};

export const kpiStats = [
  { label: "Efficiency Score", value: "91.4%", change: "+4.2%", up: true, icon: "gauge" },
  { label: "Energy Waste", value: "12.5%", change: "-2.1%", up: true, icon: "zap-off" },
  { label: "Tracked Devices", value: "14", change: "+3", up: true, icon: "monitor" },
  { label: "Critical Alerts", value: "2", change: "-5", up: true, icon: "alert-octagon" },
] as const;

export const efficiencyScore = 91;

export const categoryData = [
  { name: "Active Terminals", value: 42, color: "#75b239" },
  { name: "Grid Utilities", value: 28, color: "#e3940b" },
  { name: "Core Processing", value: 15, color: "#144444" },
  { name: "Network I/O", value: 10, color: "#484c7f" },
  { name: "Redundancy", value: 5, color: "#a8b4a0" },
];

export const usageTrendData = [
  { date: "Oct 1", usage: 1.1, target: 1.3 },
  { date: "Oct 4", usage: 1.25, target: 1.3 },
  { date: "Oct 7", usage: 0.9, target: 1.3 },
  { date: "Oct 10", usage: 1.2, target: 1.3 },
  { date: "Oct 13", usage: 1.35, target: 1.3 },
  { date: "Oct 16", usage: 1.4, target: 1.3 },
  { date: "Oct 18", usage: 1.8, target: 1.3 },
  { date: "Oct 22", usage: 1.3, target: 1.3 },
  { date: "Oct 25", usage: 1.45, target: 1.3 },
  { date: "Oct 28", usage: 1.5, target: 1.3 },
  { date: "Oct 31", usage: 1.65, target: 1.3 },
];

export const usageByCategory = [
  { category: "Smart Terminals", total: 480, used: 312, remaining: 168, color: "#144444" },
  { category: "Utility Nodes", total: 310, used: 145, remaining: 165, color: "#1f6b55" },
  { category: "Digital Services", total: 250, used: 85, remaining: 165, color: "#2d8f6b" },
];

export const systemAlerts = [
  { id: 1, date: "Oct 29", title: "Node Latency: Terminal 4-B", level: "Warning" },
  { id: 2, date: "Oct 27", title: "Utility Spike: HVAC Unit 2", level: "Alert" },
  { id: 3, date: "Oct 25", title: "Efficiency Drop: Main Frame", level: "Warning" },
  { id: 4, date: "Oct 23", title: "Sync Failure: Utility Hub", level: "Warning" },
];

export const efficiencyOverview = {
  score: 91,
  thisMonth: 91,
  lastMonth: 86,
  trend: "+5.8%",
  networkUtilization: 82,
  resourceAllocation: 94,
};

export const reminders: {
  id: number;
  type: ReminderType;
  title: string;
  description: string;
  time: string;
  icon: string;
}[] = [
  {
    id: 1,
    type: "warning",
    title: "Terminal limit exceeded",
    description: "Active session time for Node 4 reached 8 hours. Auto-throttle initiated.",
    time: "45 minutes ago",
    icon: "timer",
  },
  {
    id: 2,
    type: "info",
    title: "Grid consumption spike",
    description: "Utility draw is 18% above the defined baseline for current cycle.",
    time: "2 hours ago",
    icon: "activity",
  },
  {
    id: 3,
    type: "success",
    title: "Weekly target achieved",
    description: "System efficiency sustained above 90% for the 7-day monitoring window.",
    time: "Yesterday",
    icon: "check-circle-2",
  },
  {
    id: 4,
    type: "warning",
    title: "Ghost load detected",
    description: "Three peripheral nodes are consuming power without active data throughput.",
    time: "Yesterday",
    icon: "ghost",
  },
];

export const activityFeed = [
  { id: 1, action: "Metric log synchronized", category: "Terminal", time: "08:14 AM", icon: "refresh-cw" },
  { id: 2, action: "Efficiency recalibrated", category: "System", time: "09:00 AM", icon: "cpu" },
  { id: 3, action: "Threshold alert cleared", category: "Utilities", time: "11:30 AM", icon: "shield-check" },
  { id: 4, action: "AI optimization applied", category: "Optimization", time: "01:00 PM", icon: "sparkles" },
  { id: 5, action: "Usage report compiled", category: "Devices", time: "03:45 PM", icon: "file-spreadsheet" },
  { id: 6, action: "Grid audit completed", category: "System", time: "06:00 PM", icon: "clipboard-list" },
];

export const aiTips: {
  id: number;
  priority: Priority;
  title: string;
  description: string;
  category: string;
  icon: string;
  saving: string;
}[] = [
  {
    id: 1,
    priority: "High",
    title: "Optimize terminal sleep cycles",
    description:
      "Telemetry data indicates high terminal activity during inactive periods. Adjusting sleep triggers could increase net efficiency by 12%.",
    category: "Terminals",
    icon: "moon",
    saving: "12% gain",
  },
  {
    id: 2,
    priority: "Medium",
    title: "Reconfigure background sync",
    description:
      "Frequent polling on secondary nodes creates unnecessary overhead. Extending poll intervals reduces data waste without affecting reliability.",
    category: "Devices",
    icon: "settings-2",
    saving: "1.4GB saved",
  },
  {
    id: 3,
    priority: "Medium",
    title: "Consolidate data processing",
    description:
      "Fragmented compute tasks on distributed nodes lead to higher utility draw. Batch processing tasks on the primary node reduces thermal output.",
    category: "System",
    icon: "box",
    saving: "15% lower draw",
  },
  {
    id: 4,
    priority: "Low",
    title: "Update node firmware",
    description:
      "Available firmware updates include efficiency patches for wireless modules. Applying these reduces standby power consumption across the grid.",
    category: "Utilities",
    icon: "download",
    saving: "Optimization ready",
  },
];
