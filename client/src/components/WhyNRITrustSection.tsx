import { CheckCircle2, XCircle, Shield, Users, Clock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { cn } from "@/lib/utils";

export default function WhyNRITrustSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 const comparisons = [
  {
   icon: Users,
   title: "Everything in One Place",
   others: "Juggling separate CAs, lawyers, property agents, and bank managers — nobody talks to each other.",
   nriTrust: "One team handling insurance, banking, property, legal, and emergencies — with one person you can call.",
  },
  {
   icon: Shield,
   title: "Real Accountability",
   others: "No records, no proof of work, and no accountability when a local contact makes a mistake.",
   nriTrust: "Every action is documented. You get regular reports and can see exactly what was done.",
  },
  {
   icon: FileCheck,
   title: "Clear Updates",
   others: "Vague phone calls, verbal promises, and no way to verify if things were actually done.",
   nriTrust: "Secure online portal with monthly reports, photos, and verified documentation.",
  },
  {
   icon: Clock,
   title: "Emergency Help",
   others: "No guaranteed response. Hoping someone is available when something goes wrong.",
   nriTrust: "A dedicated team ready to respond immediately for any financial, legal, or property emergency.",
  },
 ];

 return (
  <section className={cn(
    "section-padding relative overflow-hidden transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
  )}>
   {theme === 'dark' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(160_30%_15%_/_0.15)_0%,transparent_60%)] pointer-events-none" />
    </>
   )}
   {theme === 'light' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.03)_0%,transparent_60%)] pointer-events-none" />
    </>
   )}
   
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
      <span className="accent-label !mb-0 tracking-[0.25em]">Why Choose Us</span>
      <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-accent/50" />
     </div>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
     )}>
      Why Families <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light drop-shadow-md">Trust NRI Trust</span>
     </h2>
     <p className={cn(
      "text-lg font-light max-w-3xl mx-auto leading-relaxed",
      theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
     )}>
      Other families rely on scattered agents and relatives.
      We give you one organized system that covers everything — with proper accountability and regular updates.
     </p>
    </motion.div>

    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="space-y-8 relative"
    >
     <div className={cn(
      "absolute top-0 bottom-0 left-[18%] md:left-[25%] lg:left-[25%] w-px hidden md:block transition-colors",
      theme === 'light' ? "bg-gradient-to-b from-transparent via-black/5 to-transparent" : "bg-gradient-to-b from-transparent via-white/5 to-transparent"
     )} />

     {comparisons.map((item, index) => {
      const IconComponent = item.icon;
      return (
       <motion.div
        key={index}
        variants={elegantFadeUp}
        className={cn(
         "group overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(207,160,82,0.1)] border premium-card",
         theme === 'light' ? "bg-white border-black/5" : "bg-white/[0.01] border-white/[0.03]"
        )}
       >
        <div className="grid md:grid-cols-12 items-stretch">
         {/* Category */}
         <div className={cn(
          "md:col-span-3 p-8 lg:p-10 border-b md:border-b-0 md:border-r flex flex-col justify-center relative transition-colors",
          theme === 'light' ? "bg-[#FDFCFB]/50 group-hover:bg-white border-black/5" : "bg-[#0A0F0D]/50 group-hover:bg-[#0A0F0D] border-white/[0.05]"
         )}>
          <div className={cn(
           "w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500 border",
           theme === 'light' ? "bg-white border-black/5" : "bg-[#0A0F0D] border-white/10"
          )}>
           <IconComponent className="w-6 h-6 text-accent/70 group-hover:text-accent transition-colors" />
          </div>
          <h3 className={cn(
           "text-xl font-serif font-medium leading-tight group-hover:text-accent transition-colors",
           theme === 'light' ? "text-[#1A1A1A]" : "text-white"
          )}>
           {item.title}
          </h3>
         </div>

         {/* Competitive Landscape */}
         <div className={cn(
          "md:col-span-4 p-8 lg:p-10",
          theme === 'light' ? "bg-black/[0.01]" : "bg-black/20"
         )}>
          <div className="flex flex-col h-full">
           <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-red-400/40 mb-4">Market Standard</span>
           <div className="flex gap-4">
            <XCircle className="w-5 h-5 text-red-400/20 flex-shrink-0 mt-1" />
            <p className={cn("text-[14px] lg:text-[15px] font-light leading-relaxed italic", theme === 'light' ? "text-[#1A1A1A]/50" : "text-white/50")}>
             {item.others}
            </p>
           </div>
          </div>
         </div>

         {/* Our Standard */}
         <div className={cn(
          "md:col-span-5 p-8 lg:p-10 relative overflow-hidden group-hover:bg-accent/[0.02] transition-colors border-l",
          theme === 'light' ? "border-black/[0.02]" : "border-white/[0.02]"
         )}>
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/30 to-transparent group-hover:via-accent/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,160,82,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col h-full relative z-10">
           <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent/60 mb-4">Our Standard</span>
           <div className="flex gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(207,160,82,0.5)] rounded-full" />
            <p className={cn(
             "text-[15px] lg:text-[16px] font-medium leading-relaxed group-hover:text-accent transition-colors",
             theme === 'light' ? "text-[#1A1A1A]/90" : "text-white/90"
            )}>
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

