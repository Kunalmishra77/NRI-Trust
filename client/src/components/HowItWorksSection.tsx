import { CalendarCheck, FileSearch, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { cn } from "@/lib/utils";

export default function HowItWorksSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 const steps = [
  {
   icon: CalendarCheck,
   number: "01",
   title: "Complimentary Review Session",
   description: "We assess your parents' financial and legal situation to understand the scope of support needed.",
  },
  {
   icon: FileSearch,
   number: "02",
   title: "Tier Recommendation",
   description: "Based on the review, we recommend the most suitable service tier (Essential, Comprehensive, or Premium Legacy).",
  },
  {
   icon: UserCheck,
   number: "03",
   title: "Onboarding",
   description: "We collect necessary documents, establish points of contact, and set up your parents' care profile.",
  },
  {
   icon: ShieldCheck,
   number: "04",
   title: "Ongoing Support",
   description: "Regular reviews as per your tier, plus emergency response whenever a financial or legal crisis arises.",
  },
 ];

 return (
  <section
   id="how-it-works"
   className={cn(
    "py-32 md:py-48 relative overflow-hidden transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
   )}
  >
   {theme === 'dark' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(160_30%_15%_/_0.2)_0%,transparent_60%)] pointer-events-none" />
    </>
   )}
   {theme === 'light' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03)_0%,transparent_60%)] pointer-events-none" />
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
      <div className="h-[1px] w-10 bg-accent/40" />
      <span className="accent-label !mb-0 text-accent">Our Process</span>
      <div className="h-[1px] w-10 bg-accent/40" />
     </div>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
     )}>
      How We Secure Your <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light">Parents' Well-Being.</span>
     </h2>
     <p className={cn(
      "text-lg font-light max-w-2xl mx-auto leading-relaxed",
      theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
     )}>
      A structured, 4-step journey to transition from fragmented handling to professional care.
     </p>
    </motion.div>

    {/* Steps Stack */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative perspective-container"
    >
     {/* Connector line background (desktop) */}
     <div className={cn(
      "hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px]",
      theme === 'light' ? "bg-black/[0.05]" : "bg-white/[0.05]"
     )} />

     {steps.map((step, idx) => {
      const IconComponent = step.icon;
      return (
       <motion.div
        key={step.number}
        variants={elegantFadeUp}
        className={cn(
         "group p-10 lg:p-12 flex flex-col relative transition-all duration-500 rounded-[2.5rem] border shadow-sm",
         theme === 'light' 
           ? "bg-white border-black/5 hover:border-accent/40 hover:-translate-y-2" 
           : "border-white/[0.03] hover:border-accent/20 bg-white/[0.01] hover:bg-[#0A0F0D] hover:-translate-y-2"
        )}
       >
        {/* Visual marker */}
        <div className="mb-10 relative z-10 flex justify-between items-start">
         <span className={cn(
          "font-mono text-5xl lg:text-6xl font-bold leading-none select-none group-hover:text-accent/10 transition-colors",
          theme === 'light' ? "text-black/[0.03]" : "text-white/[0.03]"
         )}>
          {step.number}
         </span>
         
         {/* Icon block */}
         <div className={cn(
          "w-14 h-14 rounded-2xl border flex items-center justify-center shadow-inner group-hover:border-accent/40 transition-all duration-500",
          theme === 'light' ? "bg-[#FDFCFB] border-black/5" : "bg-background border-white/10"
         )}>
          <IconComponent className="w-6 h-6 text-accent/70 group-hover:text-accent transition-colors" />
         </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
         <div className="w-10 h-[1px] bg-accent/20 mb-6 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
         <h3 className={cn(
          "text-xl lg:text-2xl font-serif font-medium mb-4 group-hover:text-accent transition-colors",
          theme === 'light' ? "text-[#1A1A1A]" : "text-white"
         )}>
          {step.title}
         </h3>
         <p className={cn(
          "text-[14px] font-light leading-relaxed",
          theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
         )}>
          {step.description}
         </p>
        </div>
        
        {/* Subtle Hover Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(207,160,82,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
       </motion.div>
      );
     })}
    </motion.div>

    {/* Final Engagement CTA */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="text-center mt-24 md:mt-32"
    >
     <div className="flex justify-center">
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] group">
        <span className="relative z-10">Book Review Session</span>
        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform inline-block" />
       </button>
      </Link>
     </div>
     <div className="mt-12 flex items-center justify-center gap-4 opacity-30">
      <ShieldCheck className="w-4 h-4 text-accent" />
      <p className={cn(
       "text-[10px] font-mono font-bold tracking-[0.2em] uppercase",
       theme === 'light' ? "text-black" : "text-white"
      )}>
       Strictly Financial & Legal • Non-Medical
      </p>
     </div>
    </motion.div>
   </div>
  </section>
 );
}

