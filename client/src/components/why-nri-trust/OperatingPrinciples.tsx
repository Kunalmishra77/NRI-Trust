import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { ShieldCheck, UserCheck, Eye, Lock, HeartPulse } from "lucide-react";

export default function OperatingPrinciples() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Absolute Trust",
      description: "We act as your physical proxy in India, bound by the highest highest standards of honesty and care."
    },
    {
      icon: UserCheck,
      title: "Accountability",
      description: "Every action is documented, every rupee accounted for, and every deadline met with professional precision."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Access your client portal for real-time updates, formal reporting, and direct communication with your manager."
    },
    {
      icon: Lock,
      title: "Confidentiality",
      description: "Your family's financial footprint is protected with bank-grade security and complete confidentiality."
    },
    {
      icon: HeartPulse,
      title: "Family Sensitivity",
      description: "We understand the emotional nuances of parent care and property management in the Indian context."
    }
  ];

  return (
    <section className="section-padding bg-[#050914] relative border-y border-white/[0.05]">
      <div className="max-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label">Our Core Pillars</span>
          <h2 className="section-title mb-6">Built on <span className="text-gradient-gold italic">Core Principles.</span></h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            While others provide fragmented services, we provide a one organized system of protection 
            governed by five non-negotiable principles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {principles.map((item, i) => (
            <motion.div
              key={i}
              variants={elegantFadeUp}
              className="text-center flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-500">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[11px] text-white/80 leading-relaxed uppercase tracking-widest font-black">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
