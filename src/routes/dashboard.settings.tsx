import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useProfile } from "@/context/ProfileContext";
import { Camera, Save, Check } from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: Settings,
});

function Toggle({ label, description, defaultOn = false }: { label: string; description: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-pi-border last:border-0">
      <div>
        <p className="text-sm font-semibold text-teal">{label}</p>
        <p className="text-xs text-muted-sage mt-0.5 leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className={`relative w-10 h-6 rounded-full transition-colors shrink-0 focus:outline-none ${on ? "bg-brand" : "bg-pi-border"}`}
        aria-pressed={on}
      >
        <span className={`absolute top-0.5 ${on ? "left-4" : "left-0.5"} w-5 h-5 bg-white rounded-full shadow transition-all`} />
      </button>
    </div>
  );
}

function Settings() {
  const { profile, updateProfile } = useProfile();
  
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ avatarUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const updates: any = { name, email };
    if (newPassword) updates.password = newPassword;
    
    updateProfile(updates);
    
    setNewPassword("");
    setConfirmPassword("");
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white border border-pi-border rounded-xl p-5">
        <h3 className="text-teal font-semibold mb-6">Node Configuration</h3>
        
        <form onSubmit={handleSave} className="space-y-5">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div 
              className="relative w-20 h-20 rounded-full bg-brand text-white flex items-center justify-center text-3xl font-bold cursor-pointer group shadow-sm"
              onClick={handleAvatarClick}
            >
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                profile.name.charAt(0)
              )}
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-muted-sage mt-3">Update Identifier</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-teal mb-1">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-cream/50 border border-pi-border rounded-lg text-sm text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-teal mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-cream/50 border border-pi-border rounded-lg text-sm text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="pt-3 border-t border-pi-border">
            <label className="block text-xs font-semibold text-teal mb-1">New Password</label>
            <input 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Leave blank to keep current"
              className="w-full px-3 py-2 bg-cream/50 border border-pi-border rounded-lg text-sm text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand mb-3"
            />
            <label className="block text-xs font-semibold text-teal mb-1">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-3 py-2 bg-cream/50 border border-pi-border rounded-lg text-sm text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-brand/90 transition-colors"
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {isSaved ? "Changes Committed" : "Commit Changes"}
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-white border border-pi-border rounded-xl p-5 lg:col-span-2">
        <h3 className="text-teal font-semibold">Protocol Settings</h3>
        <div className="mt-2">
          <Toggle label="Autonomous Notifications" description="Trigger alerts when metrics exceed defined thresholds." defaultOn />
          <Toggle label="Cycle Audit Report" description="Transmit summary at cycle conclusion." defaultOn />
          <Toggle label="Heuristic Optimization" description="Derive optimization proposals from telemetry data." defaultOn />
          <Toggle label="Terminal Standby Alerts" description="Alert when terminals maintain standby state for extended durations." />
          <Toggle label="Dark Mode" description="Utilize a dark color palette across the dashboard." />
        </div>
      </div>
    </div>
  );
}