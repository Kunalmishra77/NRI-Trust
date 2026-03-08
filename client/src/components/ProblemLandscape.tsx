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
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
   <div className="absolute top-0 right-0 w-[40vw] h-[40vw] mesh-glow-emerald opacity-60 blur-[120px]" />
   
   <div className="max-container relative z-10">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={elegantFadeUp}
     >
      <span className="accent-label text-accent">The Stewardship Mandate</span>
      <h2 className="section-title mb-8 text-white">
       Protecting Your Parents’ <br />
       <span className="text-gradient-gold italic">Financial Well-Being.</span>
      </h2>
      <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
       Living abroad shouldn't mean leaving your family's Indian legacy—or your parents' daily financial peace—to chance. We provide dedicated on-ground support exclusively for NRIs.
      </p>
      
      <div className="space-y-8 mb-12">
       {risks.map((risk, i) => (
        <div key={i} className="flex gap-6 p-8 glass-panel rounded-3xl border-white/5 hover:border-accent/20 transition-all duration-500 bg-white/[0.01]">
         <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center shrink-0">
          <risk.icon className="w-6 h-6 text-accent" />
         </div>
         <div>
          <h3 className="text-xl font-serif text-white mb-2">{risk.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{risk.desc}</p>
         </div>
        </div>
       ))}
      </div>

      <div className="flex items-center gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
       <ShieldCheck className="w-6 h-6 text-red-500 shrink-0" />
       <p className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
        IMPORTANT: Exclusively Financial & Legal Advisory. No Medical Services.
       </p>
      </div>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
     >
      <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 relative group shadow-3xl bg-[#0A0F0D]">
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
       <img 
        src="/Wealth is Global.png" 
        alt="Wealth is Global" 
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
       />
       
       {/* Alert Overlay */}
       <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 left-10 z-20 flex items-center gap-3 bg-red-500/20 border border-red-500/40 px-6 py-3 rounded-full backdrop-blur-md"
       >
        <AlertTriangle className="w-4 h-4 text-red-500" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">Vulnerability Shield Active</span>
       </motion.div>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
