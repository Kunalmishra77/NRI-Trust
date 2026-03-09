import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { VaultMotif } from "./ui/three-d-elements";
import { ShieldCheck, Lock, Eye, Zap, AlertCircle } from "lucide-react";

export default function TrustSystem() {
 const pillars = [
  { icon: Lock, title: "Radical Discretion", desc: "Treating your family's financial footprint with the highest level of confidentiality and bank-grade security." },
  { icon: Eye, title: "Proactive Governance", desc: "We monitor deadlines and compliance cycles before they become operational risks for your parents." },
  { icon: Zap, title: "Physical Liaison", desc: "Expert on-ground execution for bank coordination, legal filings, and municipal utility resolution." }
 ];

 return (
  <section className="py-24 md:py-32 bg-[#0A0F1A] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/[0.03]">
   {/* Background Ambience */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,42,0.8)_0%,transparent_80%)] pointer-events-none" />
   
   {/* ─── 3D MOTIF IN BACKGROUND ─── */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none scale-[1.8] mix-blend-screen">
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
      <span className="accent-label text-[#D4AF37]">The Stewardship Solution</span>
      <h2 className="display-title mb-10 max-w-4xl text-[#F5F3EC]">
       One Trusted Partner. <br />
       <span className="text-gradient-gold italic">Absolute Peace of Mind.</span>
      </h2>
      <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
       We consolidate the fragmented world of Indian compliance into a single, secure stewardship system designed for NRI families and their aging parents.
      </p>
      
      <div className="mt-12 flex items-center gap-4 bg-[#10B981]/10 border border-[#10B981]/20 px-6 py-3 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
       <ShieldCheck className="w-5 h-5 text-[#10B981]" />
       <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#10B981] font-bold">Authorized Financial Fiduciaries</span>
      </div>
     </motion.div>
    </div>

    <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
     {pillars.map((pillar, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
       className="group text-center premium-card p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-700"
      >
       <div className="w-20 h-20 rounded-3xl bg-[#050814] border border-white/5 flex items-center justify-center mx-auto mb-10 group-hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
        <pillar.icon className="w-8 h-8 text-[#D4AF37]/80 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500" />
       </div>
       <h3 className="text-2xl font-serif mb-4 text-[#F5F3EC] group-hover:text-[#D4AF37] transition-colors">{pillar.title}</h3>
       <p className="text-white/40 font-light leading-relaxed">{pillar.desc}</p>
      </motion.div>
     ))}
    </div>
    
    {/* Floating Success Indicator */}
    <motion.div 
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ delay: 0.5, duration: 1 }}
     className="mt-32 p-10 premium-card rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
    >
     <div className="flex items-center gap-6">
      <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
       <div className="absolute inset-0 rounded-full border border-[#10B981] animate-ping opacity-20" />
       <ShieldCheck className="w-7 h-7 text-[#10B981]" />
      </div>
      <div className="text-left">
       <div className="text-[#F5F3EC] font-serif text-2xl mb-1">Stewardship Active</div>
       <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-semibold">Security is our responsibility</div>
      </div>
     </div>
     
     <div className="flex gap-16 lg:gap-24">
      <div className="text-center">
       <div className="text-4xl font-serif text-[#F5F3EC] mb-2 font-medium group-hover:text-[#D4AF37] transition-colors">400+</div>
       <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#D4AF37] font-bold">Files Resolved</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-white/10" />
      <div className="text-center">
       <div className="text-4xl font-serif text-[#F5F3EC] mb-2 font-medium group-hover:text-[#D4AF37] transition-colors">₹50 Cr+</div>
       <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#D4AF37] font-bold">Assets Guarded</div>
      </div>
     </div>
    </motion.div>
   </div>
  </section>
 );
}
