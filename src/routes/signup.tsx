import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { Mail, Lock, User, Loader2, ArrowRight, Globe } from "lucide-react";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(email, password, name);
      toast.success("Account created successfully! Welcome to Powerinova.");
      navigate({ to: "/dashboard" });
    } catch (error: any) {
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google successfully!");
      navigate({ to: "/dashboard" });
    } catch (error: any) {
      toast.error(error.message || "Google sign-in failed.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10 animate-fade-in">
          <img src="/logo.svg" alt="Powerinova" className="h-12 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-teal tracking-tight">Request Access</h1>
          <p className="text-muted-sage mt-2">Create your identity in the Powerinova grid.</p>
        </div>

        <div className="bg-white border border-pi-border rounded-3xl p-8 shadow-2xl shadow-teal/5 relative">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-teal ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-sage group-focus-within:text-brand transition-colors" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-cream/50 border border-pi-border rounded-2xl py-4 pl-12 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-muted-sage/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-teal ml-1">Email Terminal</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-sage group-focus-within:text-brand transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@powerinova.com"
                  className="w-full bg-cream/50 border border-pi-border rounded-2xl py-4 pl-12 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-muted-sage/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-teal ml-1">Secure Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-sage group-focus-within:text-brand transition-colors" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-cream/50 border border-pi-border rounded-2xl py-4 pl-12 pr-4 text-ink focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-muted-sage/50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pi-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-muted-sage tracking-widest font-bold">Or authorize with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full bg-cream hover:bg-cream/80 border border-pi-border text-teal font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {googleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Globe className="w-5 h-5" />
                <span>Google Protocol</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center mt-8 text-muted-sage">
          Already have an account?{" "}
          <Link to="/login" className="text-brand font-bold hover:underline">
            Establish Link
          </Link>
        </p>
      </div>
    </div>
  );
}
