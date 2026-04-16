import { motion } from "framer-motion";
import { cardReveal } from "@/motion/variants";
import { Calendar, FileSearch, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function ProcessTimeline({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
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
  <section className={cn(
    "py-24 md:py-32 relative overflow-hidden transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
  )}>
   {theme === 'dark' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
    </>
   )}
   {theme === 'light' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
    </>
   )}

   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={cardReveal}
     className="mb-24 text-center md:text-left"
    >
     <span className="accent-label text-[#D4AF37]">The Operational Flow</span>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-[#FDFCFB]"
     )}>
      From Anxiety to <br className="md:hidden" /><span className={cn("italic", theme === 'light' ? "text-black/55" : "text-white/40")}>Absolute Sovereignty.</span>
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
        <div className={cn(
         "hidden lg:block absolute top-12 left-[65%] right-[-35%] h-[1px] bg-gradient-to-r z-0",
         theme === 'light' ? "from-black/10 to-transparent" : "from-[#D4AF37]/30 to-transparent"
        )} />
       )}
       
       <div className={cn(
        "p-10 premium-card rounded-[2.5rem] relative z-10 h-full flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 overflow-hidden shadow-sm",
        theme === 'light' ? "bg-white border-black/5 hover:border-accent/40" : "bg-[#0B101E] border-white/5 hover:border-accent/30"
       )}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className={cn(
         "w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-inner transition-colors duration-500 relative z-10 border",
         theme === 'light' ? "bg-[#FDFCFB] border-black/5 group-hover:border-[#D4AF37]/30" : "bg-[#050914] border-white/5 group-hover:border-[#D4AF37]/30"
        )}>
         <step.icon className="w-8 h-8 text-[#D4AF37]/60 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500" />
        </div>
        
        <div className="text-[10px] font-mono text-[#D4AF37]/80 uppercase tracking-widest mb-4 font-bold relative z-10">Phase 0{i + 1}</div>
        <h3 className={cn(
         "text-2xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors relative z-10",
         theme === 'light' ? "text-[#1A1A1A]" : "text-[#FDFCFB]"
        )}>{step.title}</h3>
        <p className={cn(
          "text-sm font-light leading-relaxed relative z-10",
          theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
        )}>{step.desc}</p>
       </div>
      </motion.div>
     ))}
    </div>

    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={cardReveal}
     className="mt-24 text-center"
    >
     <Link href="/contact">
      <button className={cn(
       "btn-premium-outline flex items-center gap-4 mx-auto group",
       theme === 'light' ? "section-light" : "section-dark"
      )}>
       <span>Book Free Consultation</span>
       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
     </Link>
    </motion.div>
   </div>
  </section>
 );
}

