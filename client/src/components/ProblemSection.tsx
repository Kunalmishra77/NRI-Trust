import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Landmark, Scale, Building2, ShieldAlert, Receipt, MapPinOff, ArrowRight, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
 const painPoints = [
  {
   icon: Landmark,
   title: "Banking & KYC Deadlocks",
   description: "NRE/NRO accounts frozen while you're overseas. KYC updates that mandate physical branch visits.",
   impact: "Locked liquidity"
  },
  {
   icon: Scale,
   title: "Unplanned Succession",
   description: "Absence of Wills or PoA leading to multi-generational legal disputes over family assets.",
   impact: "Legacy risk"
  },
  {
   icon: Building2,
   title: "Property Vulnerability",
   description: "Encroachment on vacant land or tenants refusing to vacate without on-ground pressure.",
   impact: "Asset loss"
  },
  {
   icon: ShieldAlert,
   title: "Insurance Red Tape",
   description: "Critical health insurance claims for aging parents rejected due to documentation gaps.",
   impact: "Financial drain"
  },
  {
   icon: Receipt,
   title: "Tax & Compliance",
   description: "Notices for unreported rental income or capital gains while you navigate complex DTAA laws.",
   impact: "IT scrutiny"
  },
  {
   icon: MapPinOff,
   title: "Distance Paralysis",
   description: "The inability to be 'on the ground' during a crisis. Relying on unreliable local agents.",
   impact: "Friction"
  },
 ];

 return (
  <section id="problems" className="section-padding bg-background relative overflow-hidden">
   {/* ─── AMBIENT DESIGN ─── */}
   <div className="absolute inset-0 bg-noise pointer-events-none opacity-60" />
   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,hsl(160_30%_15%_/_0.2)_0%,transparent_70%)] pointer-events-none" />

   <div className="max-container relative z-10">
    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={elegantFadeUp}
      className="lg:col-span-7"
     >
      <div className="flex items-center gap-4 mb-6">
       <div className="h-[1px] w-10 bg-accent/40" />
       <span className="accent-label !mb-0">The Distance Barrier</span>
       <div className="h-[1px] w-10 bg-accent/40" />
      </div>
      <h2 className="section-title text-white mb-8">
       Hidden Risks of <br className="hidden md:block" />
       <span className="text-gradient-gold italic font-light">Remote Stewardship.</span>
      </h2>
      <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
       Living globally shouldn't mean leaving your family's Indian legacy to chance. 
       Fragmented management creates risks that local agents often overlook.
      </p>
     </motion.div>
     
     <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-5 relative"
     >
      <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl  transition-all duration-1000 group">
       <img src="/attached_assets/image_1764305837111.png" alt="Family heritage risks" className="w-full h-full object-cover group-hover:scale-105" />       <div className="absolute top-8 left-8 flex items-center gap-3 bg-red-500/20 border border-red-500/40 px-4 py-2 rounded-full backdrop-blur-md z-20">
        <AlertTriangle className="w-4 h-4 text-red-500" />
        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Compliance Gap</span>
       </div>
      </div>
     </motion.div>
    </div>

    {/* ─── CHALLENGE GRID ─── */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-container"
    >
     {painPoints.map((point, idx) => (
      <motion.div
       key={idx}
       variants={elegantFadeUp}
       className="group glass-panel p-10 lg:p-12 hover:-translate-y-2 transition-all duration-500 border-white/5 hover:border-accent/30 bg-white/[0.01] hover:bg-[#0A0F0D] relative overflow-hidden flex flex-col h-full shadow-lg"
      >
       <div className="flex flex-col h-full relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-accent/40 transition-all duration-500">
         <point.icon className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors" />
        </div>
        
        <h3 className="text-xl font-serif text-white mb-4 group-hover:text-accent transition-colors duration-300">
         {point.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 flex-1">
         {point.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
         <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">{point.impact}</span>
         </div>
         <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-all group-hover:translate-x-1" />
        </div>
       </div>
      </motion.div>
     ))}
    </motion.div>

    {/* ─── REFINED PULL QUOTE ─── */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="mt-32 md:mt-40 text-center"
    >
     <div className="vault-surface inline-block w-full max-w-5xl px-8 md:px-24 py-20 rounded-[3rem] relative overflow-hidden group">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,160,82,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
       <span className="text-6xl text-accent/20 font-serif leading-none mb-10">&ldquo;</span>
       <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic leading-snug tracking-tight mb-12">
        Wealth management is easy. <span className="text-gradient-gold not-italic font-medium">Stewardship</span> is difficult. 
        The most expensive mistake an NRI makes is assuming everything is 'fine' until a crisis proves otherwise.
       </p>
       <div className="h-px w-16 bg-accent/40 mb-6" />
       <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-accent font-bold">The Advisory Perspective</span>
      </div>
     </div>
    </motion.div>
   </div>
  </section>
 );
}
