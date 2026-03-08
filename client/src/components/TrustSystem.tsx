import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { VaultMotif } from "./ui/three-d-elements";
import { ShieldCheck, Lock, Eye, Zap, AlertCircle } from "lucide-react";

export default function TrustSystem() {
 const pillars = [
  { icon: Lock, title: "Radical Discretion", desc: "Treating your family's financial footprint with the highest level of confidentiality." },
  { icon: Eye, title: "Proactive Governance", desc: "We monitor deadlines and compliance cycles before they become risks for your parents." },
  { icon: Zap, title: "Physical Liaison", desc: "Expert on-ground execution for bank coordination, legal filings, and utility resolution." }
 ];

 return (
  <section className="section-padding bg-background relative overflow-hidden flex flex-col items-center justify-center">
   {/* Background Ambience */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(160_40%_15%_/_0.3)_0%,transparent_80%)] pointer-events-none" />
   
   {/* ─── 3D MOTIF IN BACKGROUND ─── */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-60 pointer-events-none scale-150">
    <VaultMotif />
   </div>

   <div className="max-container relative z-10 w-full">
    <div className="flex flex-col items-center text-center mb-24 md:mb-32">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={elegantFadeUp}
      className="flex flex-col items-center"
     >
      <span className="accent-label text-accent">The Stewardship Solution</span>
      <h2 className="display-title mb-10 max-w-4xl">
       One Trusted Partner. <br />
       <span className="text-gradient-gold italic">Absolute Peace of Mind.</span>
      </h2>
      <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
       We consolidate the fragmented world of Indian compliance into a single, secure stewardship system designed for NRI families and their aging parents.
      </p>
      
      <div className="mt-12 flex items-center gap-3 bg-red-500/5 border border-red-500/20 px-5 py-2 rounded-full">
       <AlertCircle className="w-4 h-4 text-red-500" />
       <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">Purely Financial & Legal • Not a Medical Service</span>
      </div>
     </motion.div>
    </div>

    <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
     {pillars.map((pillar, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: i * 0.2, duration: 0.8 }}
       className="group text-center"
      >
       <div className="w-20 h-20 rounded-3xl bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-10 group-hover:border-accent/40 transition-all duration-500 shadow-inner group-hover:bg-accent/10 backdrop-blur-sm">
        <pillar.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
       </div>
       <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-accent transition-colors">{pillar.title}</h3>
       <p className="text-muted-foreground/70 font-light leading-relaxed">{pillar.desc}</p>
      </motion.div>
     ))}
    </div>
    
    {/* Floating Success Indicator */}
    <motion.div 
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
     className="mt-32 md:mt-40 p-10 glass-panel rounded-[3rem] border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto bg-white/[0.01]"
    >
     <div className="flex items-center gap-6">
      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
       <ShieldCheck className="w-7 h-7 text-emerald-500" />
      </div>
      <div className="text-left">
       <div className="text-white font-serif text-xl">Stewardship Active</div>
       <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Parents' financial security is our responsibility</div>
      </div>
     </div>
     
     <div className="flex gap-12 lg:gap-20">
      <div className="text-center">
       <div className="text-3xl font-serif text-white mb-1 font-medium">400+</div>
       <div className="text-[9px] font-mono uppercase tracking-widest text-accent font-bold">Files Resolved</div>
      </div>
      <div className="text-center">
       <div className="text-3xl font-serif text-white mb-1 font-medium">₹50 Cr+</div>
       <div className="text-[9px] font-mono uppercase tracking-widest text-accent font-bold">Assets Guarded</div>
      </div>
     </div>
    </motion.div>
   </div>
  </section>
 );
}
