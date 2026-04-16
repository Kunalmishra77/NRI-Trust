import { useState } from "react";
import { Shield, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function PortalLogin() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    const success = login(email, password);
    if (!success) {
      setError("Invalid credentials. Please check your email and password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050914] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37] flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
              <Shield className="w-7 h-7 text-black" />
            </div>
            <div className="text-left">
              <div className="text-[22px] font-sans font-black tracking-tight text-white leading-none">NRI TRUST</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#d4af37]/70 font-bold mt-1">Client Portal</div>
            </div>
          </div>
          <h1 className="text-2xl font-serif text-white mb-2">Secure Access</h1>
          <p className="text-sm text-white/40 font-light leading-relaxed">
            Your portal credentials are sent to you by your<br />relationship manager after onboarding.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#0A0F0D] border border-white/[0.07] rounded-[2.5rem] p-10 shadow-2xl"
        >
          {/* Security badge */}
          <div className="flex items-center gap-2 mb-10 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
            <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">256-bit encrypted session</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">Email Address</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/40 transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Your secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 pr-14 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/8 border border-red-500/20"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-sm text-red-400 font-light">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#d4af37] text-black rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#e8c94a] transition-all disabled:opacity-60 shadow-lg shadow-[#d4af37]/20 mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <span>Access Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center space-y-2">
            <p className="text-[11px] font-mono text-white/25 uppercase tracking-widest">
              Don't have access yet?
            </p>
            <a
              href="/contact"
              className="text-[12px] text-[#d4af37]/70 hover:text-[#d4af37] transition-colors font-medium"
            >
              Book a free consultation to get started →
            </a>
          </div>
        </motion.div>

        {/* Demo hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02]"
        >
          <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest text-center mb-3 font-bold">Demo Accounts</p>
          <div className="grid grid-cols-2 gap-3 text-[11px] font-mono text-white/30">
            <div className="space-y-1">
              <div className="text-[#d4af37]/50 font-bold">Onboarded Client</div>
              <div>rahul.sharma@gmail.com</div>
              <div>Client@2026</div>
            </div>
            <div className="space-y-1">
              <div className="text-indigo-400/50 font-bold">First-Time Client</div>
              <div>anita.verma@gmail.com</div>
              <div>Client@2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
