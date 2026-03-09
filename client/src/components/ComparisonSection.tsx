import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { X, Check, ArrowRight, ShieldCheck, UserMinus, HardHat, FileText, Smartphone } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="section-padding bg-[#0B101E] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label">The Evolution of Support</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8 leading-tight">
            Why Fragmented <br className="hidden md:block" />
            <span className="text-white/40 italic">Handling Fails.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* THE FRAGMENTED SYSTEM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="premium-card p-10 lg:p-16 rounded-[3rem] border-red-500/10 bg-red-500/[0.02] relative group"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-serif text-[#F5F3EC]">Fragmented Chaos</h3>
            </div>

            <div className="space-y-10 relative">
              {[
                { icon: UserMinus, label: "Random Local CA", desc: "Only handles tax, misses bank kyc link." },
                { icon: HardHat, label: "Property Broker", desc: "Conflict of interest with tenants." },
                { icon: FileText, label: "Freelance Lawyer", desc: "No continuity for succession data." },
                { icon: Smartphone, label: "Relatives", desc: "Good intentions, but lacks expertise." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full border border-red-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <div className="text-[#F5F3EC] font-medium mb-1">{item.label}</div>
                    <div className="text-white/40 text-sm font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
              
              {/* Abstract Messy Connectors */}
              <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent -z-10" />
            </div>
          </motion.div>

          {/* THE NRI TRUST SYSTEM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="premium-card p-10 lg:p-16 rounded-[3rem] border-accent/20 bg-accent/[0.03] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
            
            <div className="flex items-center gap-4 mb-12 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif text-[#F5F3EC]">The NRI Trust System</h3>
            </div>

            <div className="bg-[#050814]/60 backdrop-blur-xl rounded-2xl p-8 border border-white/5 mb-12 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">One Coordinated Team</span>
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <ShieldCheck className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-xs text-white/80 font-medium">Compliance</div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <ArrowRight className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-xs text-white/80 font-medium">Liaison</div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <FileText className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-xs text-white/80 font-medium">Reporting</div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <Check className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-xs text-white/80 font-medium">Security</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/60 font-light leading-relaxed relative z-10">
              A single point of truth for your entire Indian portfolio. Our multi-disciplinary team ensures every action is legal, compliant, and documented.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
