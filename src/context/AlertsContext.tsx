import { createContext, useContext, useState, ReactNode } from "react";

import { systemAlerts } from "@/data/mockData";

export type Alert = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "warning" | "info" | "success" | "error";
  read: boolean;
  level?: string;
  date?: string;
};

const defaultAlerts: Alert[] = systemAlerts.map(a => ({
  id: a.id.toString(),
  title: a.title,
  description: `Automated detection triggered on ${a.date}. System response initiated.`,
  time: a.date,
  type: a.level === "Alert" ? "error" : "warning",
  read: false,
  level: a.level,
  date: a.date
}));

interface AlertsContextType {
  alerts: Alert[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  removeAlert: (id: string) => void;
}

const AlertsContext = createContext<AlertsContextType | undefined>(undefined);

export function AlertsProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>(defaultAlerts);

  const unreadCount = alerts.filter(a => !a.read).length;

  const markAsRead = (id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, read: true } : a));
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(a => ({ ...a, read: true })));
  };

  const clearAll = () => {
    setAlerts([]);
  };

  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  return (
    <AlertsContext.Provider value={{ alerts, unreadCount, markAsRead, markAllAsRead, clearAll, removeAlert }}>
      {children}
    </AlertsContext.Provider>
  );
}

export function useAlerts() {
  const context = useContext(AlertsContext);
  if (context === undefined) {
    throw new Error("useAlerts must be used within an AlertsProvider");
  }
  return context;
}
