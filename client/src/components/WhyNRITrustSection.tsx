import { CheckCircle2, XCircle, Shield, Users, Clock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function WhyNRITrustSection() {
 const comparisons = [
  {
   icon: Users,
   title: "Consolidated Expertise",
   others: "Coordinating separate CAs, lawyers, agents, and managers — resulting in communication gaps.",
   nriTrust: "One unified advisor managing all domains with a single, high-trust relationship manager.",
  },
  {
   icon: Shield,
   title: "Professional Indemnity",
   others: "Zero accountability or insurance for local 'help' or family-friend referrals.",
   nriTrust: "Full professional liability coverage with a documented, audited trail for every action.",
  },
  {
   icon: FileCheck,
   title: "Strategic Transparency",
   others: "Opaque updates, verbal promises, and a lack of formal documentation or photo evidence.",
   nriTrust: "Secure client portal, monthly data-driven reports, and on-ground verified documentation.",
  },
  {
   icon: Clock,
   title: "Emergency Readiness",
   others: "No guaranteed response. Relying on someone's availability during Indian business hours.",
   nriTrust: "A dedicated 24/7 Rapid Response team for legal, financial, or property emergencies.",
  },
 ];

 return (
  <section className="section-padding bg-background relative overflow-hidden">
   <div className="absolute inset-0 bg-noise pointer-events-none" />
   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(160_30%_15%_/_0.15)_0%,transparent_60%)] pointer-events-none" />
   
   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="text-center mb-24 md:mb-32"
    >
     <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-accent/50" />
      <span className="accent-label !mb-0 tracking-[0.25em]">Market Distinction</span>
      <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-accent/50" />
     </div>
     <h2 className="section-title text-white mb-8">
      Why Discerning Families <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light drop-shadow-md">Choose NRI Trust</span>
     </h2>
     <p className="body-large max-w-3xl mx-auto text-muted-foreground">
      We operate as a private family office for NRIs. 
      While others provide fragmented services, we provide stewardship, accountability, and absolute discretion.
     </p>
    </motion.div>

    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="space-y-8 relative"
    >
     <div className="absolute top-0 bottom-0 left-[18%] md:left-[25%] lg:left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

     {comparisons.map((item, index) => {
      const IconComponent = item.icon;
      return (
       <motion.div
        key={index}
        variants={elegantFadeUp}
        className="group glass-card overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(207,160,82,0.1)] border border-white/[0.03] bg-white/[0.01]"
       >
        <div className="grid md:grid-cols-12 items-stretch">
         {/* Category */}
         <div className="md:col-span-3 p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.05] flex flex-col justify-center relative bg-[#0A0F0D]/50 group-hover:bg-[#0A0F0D] transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#0A0F0D] border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500">
           <IconComponent className="w-6 h-6 text-accent/70 group-hover:text-accent transition-colors" />
          </div>
          <h3 className="text-xl font-serif font-medium text-white leading-tight group-hover:text-accent transition-colors">
           {item.title}
          </h3>
         </div>

         {/* Competitive Landscape */}
         <div className="md:col-span-4 p-8 lg:p-10 bg-black/20">
          <div className="flex flex-col h-full">
           <span className="caption-text !text-red-400/30 uppercase tracking-[0.2em] font-bold mb-4">Market Standard</span>
           <div className="flex gap-4">
            <XCircle className="w-5 h-5 text-red-400/20 flex-shrink-0 mt-1" />
            <p className="text-[14px] lg:text-[15px] text-muted-foreground/50 font-light leading-relaxed italic">
             {item.others}
            </p>
           </div>
          </div>
         </div>

         {/* Our Standard */}
         <div className="md:col-span-5 p-8 lg:p-10 relative overflow-hidden group-hover:bg-accent/[0.02] transition-colors border-l border-white/[0.02]">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/30 to-transparent group-hover:via-accent/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,160,82,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col h-full relative z-10">
           <span className="caption-text !text-accent/60 uppercase tracking-[0.2em] font-bold mb-4">Our Standard</span>
           <div className="flex gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(207,160,82,0.5)] rounded-full" />
            <p className="text-[15px] lg:text-[16px] text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors">
             {item.nriTrust}
            </p>
           </div>
          </div>
         </div>
        </div>
       </motion.div>
      );
     })}
    </motion.div>
   </div>
  </section>
 );
}
