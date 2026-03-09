import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Clock, Zap, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const emergencySteps = [
  {
    time: "0-2 Hours",
    title: "Crisis Triage",
    desc: "Verification of the notice or disconnection and immediate legal assessment.",
    icon: Clock
  },
  {
    time: "2-12 Hours",
    title: "Physical Dispatch",
    desc: "Deployment of local representative to the bank, municipal office, or court.",
    icon: Zap
  },
  {
    time: "12-24 Hours",
    title: "Resolution Track",
    desc: "Submission of required documentation and securing stay or temporary relief.",
    icon: UserCheck
  },
  {
    time: "24-48 Hours",
    title: "Final Closure",
    desc: "Verification of restored services or officially acknowledged legal response.",
    icon: ShieldCheck
  }
];

export default function EmergencyTimeline() {
  return (
    <section className="section-padding bg-[#050814] relative overflow-hidden border-y border-white/[0.03]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-red-500 font-bold">Priority Intervention</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8 leading-tight">
              Administrative <br />
              <span className="text-white/40 italic">Emergencies Don’t Wait.</span>
            </h2>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-12">
              Whether it's a sudden bank freeze, a utility cutoff, or a legal summons, we provide an immediate ground presence to resolve crises within 48 hours.
            </p>
            
            <Link href="/emergency-response">
              <button className="btn-premium-primary !bg-red-600/10 !border-red-600/20 !text-red-500 hover:!bg-red-600/20 transition-all">
                View Emergency Protocol
              </button>
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="space-y-6"
          >
            {emergencySteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={elegantFadeUp}
                className="premium-card p-8 rounded-2xl flex gap-8 items-center border-white/5 hover:border-red-500/20 transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="text-[10px] font-mono text-red-500 font-bold uppercase mb-2">{step.time}</div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#F5F3EC] mb-1">{step.title}</h3>
                  <p className="text-sm text-white/40 font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
