import { Shield, CheckCircle2, Clock, Circle, Upload, LogOut, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const statusIcon = (status: string) => {
  if (status === "done") return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
  if (status === "in-progress") return <Clock className="w-5 h-5 text-[#d4af37] animate-pulse" />;
  return <Circle className="w-5 h-5 text-white/20" />;
};

const statusLabel = (status: string) => {
  if (status === "done") return <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Complete</span>;
  if (status === "in-progress") return <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">In Progress</span>;
  return <span className="text-[9px] font-mono uppercase tracking-widest text-white/25 font-bold">Pending</span>;
};

export default function PortalOnboarding() {
  const { user, logout } = useAuth();
  if (!user) return null;

  const doneCount = user.onboardingSteps.filter((s) => s.status === "done").length;
  const progress = Math.round((doneCount / user.onboardingSteps.length) * 100);

  return (
    <div className="min-h-screen bg-[#050914] text-white flex flex-col">
      {/* Top bar */}
      <header className="border-b border-white/5 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#d4af37] flex items-center justify-center">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="text-[15px] font-sans font-black tracking-tight text-white">NRI TRUST</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#d4af37]/60 font-bold ml-3">Client Portal</span>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/30 hover:text-white/70 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                {user.tier} — Portfolio {user.portfolioId}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-3">
              Welcome, <span className="italic text-[#d4af37]">{user.name.split(" ")[0]}.</span>
            </h1>
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto">
              Your NRI Trust account has been created. Complete the steps below to activate your dashboard and begin protecting your parents' financial life.
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold">Onboarding Progress</span>
              <span className="text-[10px] font-mono font-bold text-[#d4af37]">{progress}% Complete</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] rounded-full"
              />
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4 mb-10">
            {user.onboardingSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`p-6 rounded-2xl border transition-all ${
                  step.status === "in-progress"
                    ? "bg-[#d4af37]/5 border-[#d4af37]/25"
                    : step.status === "done"
                    ? "bg-emerald-500/5 border-emerald-500/15"
                    : "bg-white/[0.02] border-white/5"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0">{statusIcon(step.status)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono text-white/25 font-bold">STEP {String(i + 1).padStart(2, "0")}</span>
                      {statusLabel(step.status)}
                    </div>
                    <h3 className={`font-semibold mb-1 ${step.status === "pending" ? "text-white/40" : "text-white"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed ${step.status === "pending" ? "text-white/25" : "text-white/55"}`}>
                      {step.desc}
                    </p>
                    {step.scheduledDate && (
                      <div className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-[#d4af37]/8 border border-[#d4af37]/15 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="text-[11px] font-mono text-[#d4af37] font-bold">{step.scheduledDate}</span>
                      </div>
                    )}
                    {step.id === "step_02" && step.status !== "done" && (
                      <button className="mt-3 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-white/50 hover:text-white hover:border-white/20 transition-all">
                        <Upload className="w-3.5 h-3.5" />
                        Upload Documents
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Manager card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-2xl bg-[#0A0F0D] border border-white/8 flex items-center gap-5"
          >
            <div className="relative shrink-0">
              <img
                src={user.manager.photo}
                className="w-14 h-14 rounded-full object-cover grayscale"
                alt={user.manager.name}
              />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0F0D]" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold mb-1">Your Relationship Manager</div>
              <div className="text-white font-semibold">{user.manager.name}</div>
              <div className="text-[11px] text-[#d4af37]/70 font-mono">{user.manager.title}</div>
            </div>
            <a
              href={`https://wa.me/${user.manager.whatsapp.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono uppercase tracking-widest text-emerald-400 hover:bg-emerald-500/20 transition-all shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
