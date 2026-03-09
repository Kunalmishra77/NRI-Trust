import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { AlertTriangle, ShieldAlert, Landmark, ShieldCheck } from "lucide-react";

export default function ProblemLandscape() {
 const risks = [
  {
   title: "Parental Financial Safety",
   desc: "Liaison with banks for KYC and nominations on behalf of elderly parents who may struggle with modern digital hurdles.",
   icon: ShieldAlert
  },
  {
   title: "Administrative Vulnerability",
   desc: "Handling show-cause notices or utility disruptions that can be just as stressful as a health crisis for seniors.",
   icon: Landmark
  }
 ];

 return (
  <section className="py-24 md:py-32 bg-[#050814] relative overflow-hidden border-t border-white/[0.03]">
   <div className="absolute top-0 right-0 w-[40vw] h-[40vw] mesh-glow-emerald opacity-30 blur-[120px] pointer-events-none" />
   <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
   
   <div className="max-container relative z-10">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={elegantFadeUp}
     >
      <span className="accent-label text-[#D4AF37]">The Stewardship Mandate</span>
      <h2 className="section-title mb-8 text-[#F5F3EC]">
       Protecting Your Parents’ <br />
       <span className="text-gradient-gold italic">Financial Well-Being.</span>
      </h2>
      <p className="text-lg text-white/50 font-light leading-relaxed mb-12 max-w-xl">
       Living abroad shouldn't mean leaving your family's Indian legacy—or your parents' daily financial peace—to chance. We provide dedicated on-ground support exclusively for NRIs, replacing the chaos of fragmented local agents.
      </p>
      
      <div className="space-y-6 mb-12">
       {risks.map((risk, i) => (
        <div key={i} className="flex gap-6 p-8 premium-card rounded-3xl group">
         <div className="w-14 h-14 rounded-2xl bg-[#050814] border border-white/5 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#D4AF37]/30 transition-colors duration-500">
          <risk.icon className="w-6 h-6 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors" />
         </div>
         <div>
          <h3 className="text-xl font-serif text-[#F5F3EC] mb-3 group-hover:text-[#D4AF37] transition-colors">{risk.title}</h3>
          <p className="text-sm text-white/40 leading-relaxed font-light">{risk.desc}</p>
         </div>
        </div>
       ))}
      </div>

      <div className="flex items-center gap-5 p-6 premium-card border-l-4 border-l-[#10B981] rounded-2xl">
       <ShieldCheck className="w-6 h-6 text-[#10B981] shrink-0" />
       <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10B981] font-bold leading-relaxed">
        IMPORTANT: Exclusively Financial & Legal Advisory. <br /> No Medical Services Provided.
       </p>
      </div>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
     >
      <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 relative group shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-[#0D1322]">
       <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/20 to-transparent z-10 pointer-events-none" />
       <img 
        src="/Wealth is Global.png" 
        alt="Wealth is Global" 
        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-80"
       />
       
       {/* Alert Overlay */}
       <motion.div 
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 z-20 flex items-center gap-4 premium-card border-[#10B981]/30 px-6 py-4 rounded-full backdrop-blur-xl bg-[#0B101E]/90"
       >
        <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#F5F3EC] uppercase">Active Vulnerability Shield</span>
       </motion.div>

       <div className="absolute bottom-10 left-10 right-10 z-20">
        <div className="premium-card p-8 rounded-3xl bg-[#0B101E]/90 backdrop-blur-xl border-white/10">
         <p className="text-[#F5F3EC] font-serif text-2xl italic leading-snug">
          "The most expensive mistake an NRI makes is assuming local agents will act as true fiduciaries."
         </p>
        </div>
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
