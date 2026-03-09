import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { Calendar, FileSearch, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";

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
  <section className="py-24 md:py-32 bg-[#0B101E] relative overflow-hidden border-y border-white/[0.03]">
   <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={elegantFadeUp}
     className="mb-24 text-center md:text-left"
    >
     <span className="accent-label text-[#D4AF37]">The Operational Flow</span>
     <h2 className="section-title mb-8 text-[#F5F3EC]">
      From Anxiety to <br className="md:hidden" /><span className="text-white/40 italic">Absolute Sovereignty.</span>
     </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {steps.map((step, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: i * 0.15, duration: 0.8 }}
       className="relative group"
      >
       {/* Connector Line (Desktop) */}
       {i < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[65%] right-[-35%] h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent z-0" />
       )}
       
       <div className="p-10 premium-card rounded-[2.5rem] relative z-10 h-full flex flex-col items-center md:items-start text-center md:text-left hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="w-20 h-20 rounded-3xl bg-[#050814] border border-white/5 flex items-center justify-center mb-8 group-hover:border-[#D4AF37]/30 shadow-inner transition-colors duration-500 relative z-10">
         <step.icon className="w-8 h-8 text-[#D4AF37]/60 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500" />
        </div>
        
        <div className="text-[10px] font-mono text-[#D4AF37]/50 uppercase tracking-widest mb-4 font-bold relative z-10">Phase 0{i + 1}</div>
        <h3 className="text-2xl font-serif text-[#F5F3EC] mb-4 group-hover:text-[#D4AF37] transition-colors relative z-10">{step.title}</h3>
        <p className="text-sm text-white/50 font-light leading-relaxed relative z-10">{step.desc}</p>
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
     <Link href="/how-it-works">
      <button className="btn-premium-outline flex items-center gap-4 mx-auto group">
       <span>Examine Detailed Process</span>
       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
     </Link>
    </motion.div>
   </div>
  </section>
 );
}
