import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Calendar, FileSearch, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Calendar,
      title: "Discovery",
      desc: "30-min private audit of your Indian asset footprint."
    },
    {
      icon: FileSearch,
      title: "Diagnosis",
      desc: "Identifying dormant risks and compliance gaps."
    },
    {
      icon: UserCheck,
      title: "Onboarding",
      desc: "Introduction to your dedicated Relationship Lead."
    },
    {
      icon: ShieldCheck,
      title: "Governance",
      desc: "Ongoing monitoring and 24/7 emergency dispatch."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050806] relative overflow-hidden border-y border-white/[0.05]">
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="mb-24"
        >
          <span className="accent-label">The Operational Flow</span>
          <h2 className="section-title mb-8 whitespace-nowrap overflow-visible">
            From Anxiety to <span className="text-muted-foreground italic">Absolute Sovereignty.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={elegantFadeUp}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-accent/30 to-transparent z-0" />
              )}
              
              <div className="p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-accent/20 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03] relative z-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent/40 shadow-inner transition-all duration-500">
                  <step.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="text-[10px] font-mono text-accent/40 uppercase tracking-widest mb-4 font-bold">Phase 0{i + 1}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="mt-24 text-center"
        >
          <button className="btn-premium-outline flex items-center gap-4 mx-auto group">
            <span>Detailed Operational Model</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
