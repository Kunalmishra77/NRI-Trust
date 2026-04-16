import { motion } from "framer-motion";
import { cardReveal } from "@/motion/variants";
import { X, Check, ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function FailureMatrix({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 const comparisons = [
  {
   domain: "Legal & Documents",
   fail: "Relying on busy relatives or local agents who don't understand legal paperwork properly.",
   trust: "A professional team that handles all legal formalities, bank visits, and document work on your behalf."
  },
  {
   domain: "Financial Safety",
   fail: "Only finding out about frozen accounts or tax notices after they become emergencies.",
   trust: "Regular monitoring of all accounts and documents so problems are caught and fixed early."
  },
  {
   domain: "Accountability",
   fail: "No proper updates, no records, and no way to verify what was actually done in India.",
   trust: "One organized system with regular reports, documented actions, and complete transparency."
  }
 ];

 return (
  <section className={cn(
    "py-24 md:py-32 relative transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
  )}>
   <div className="max-container relative z-10">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardReveal}
      className="lg:col-span-7"
     >
      <span className="accent-label text-accent">Why You Need This</span>
      <h2 className={cn(
        "section-title mb-8",
        theme === 'light' ? "text-[#1A1A1A]" : "text-white"
      )}>Why Informal <br /><span className={cn("italic text-3xl md:text-4xl", theme === 'light' ? "text-[#1A1A1A]/90" : "text-white/90")}>Handling Does Not Work.</span></h2>
      <p className={cn(
        "text-lg font-light leading-relaxed max-w-xl",
        theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
      )}>
       Protecting your parents' financial life requires more than just checking in once in a while. It requires a proper system that works even when you are thousands of miles away.
      </p>
     </motion.div>
     
     <div className="lg:col-span-5 relative hidden lg:block">
      <div className={cn(
        "aspect-video rounded-3xl overflow-hidden border relative group shadow-2xl transition-all duration-700",
        theme === 'light' ? "border-black/5" : "border-white/5"
      )}>
       <img 
        src="/vThe Evolution of Care.png" 
        alt="The Evolution of Care" 
        className={cn(
          "w-full h-full object-cover transition-all duration-1000",
          theme === 'light' ? "opacity-90 group-hover:opacity-100" : "opacity-80 group-hover:opacity-100"
        )} 
       />
       <div className={cn(
         "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
         theme === 'light' ? "from-[#FDFCFB]" : "from-[#050806]"
       )} />
       <div className="absolute bottom-8 left-8 flex items-center gap-3">
        <AlertCircle className="w-4 h-4 text-accent" />
        <span className="text-[12px] font-mono text-accent uppercase tracking-widest font-bold">Professional Standard</span>
       </div>
      </div>
     </div>
    </div>

    <div className={cn(
      "grid lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden border shadow-3xl",
      theme === 'light' ? "border-black/5" : "border-white/[0.05]"
    )}>
     {/* Market Status Quo */}
     <div className={cn(
       "lg:col-span-5 p-10 lg:p-16 relative overflow-hidden group",
       theme === 'light' ? "bg-black/[0.02]" : "bg-[#050914]"
     )}>
      <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
       <X className="w-64 h-64 text-red-500" />
      </div>
      <div className="relative z-10">
       <span className="text-[12px] font-mono font-bold tracking-[0.3em] text-red-500/70 uppercase mb-10 block">Informal Handling</span>
       <h3 className={cn(
         "text-2xl font-serif mb-12",
         theme === 'light' ? "text-[#1A1A1A]" : "text-white/90"
       )}>The Risky Way</h3>
       
       <div className="space-y-10">
        {comparisons.map((c, i) => (
         <div key={i} className="flex gap-6 group/item">
          <X className="w-5 h-5 text-red-500/50 shrink-0 mt-1" />
          <p className={cn(
            "text-sm font-light leading-relaxed italic",
            theme === 'light' ? "text-[#1A1A1A]/90" : "text-white/90"
          )}>{c.fail}</p>
         </div>
        ))}
       </div>
      </div>
     </div>

     {/* NRI Trust Standard */}
     <div className={cn(
       "lg:col-span-7 p-10 lg:p-16 relative overflow-hidden border-l",
       theme === 'light' ? "bg-[#FDFCFB] border-black/5" : "bg-accent/[0.02] border-white/[0.05]"
     )}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(207,160,82,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
      
      <div className="relative z-10">
       <span className="text-[12px] font-mono font-bold tracking-[0.3em] text-accent uppercase mb-10 block">The NRI Trust Standard</span>
       <h3 className={cn(
         "text-2xl font-serif mb-12",
         theme === 'light' ? "text-[#1A1A1A]" : "text-white"
       )}>One Structured System</h3>
       
       <div className="space-y-10">
        {comparisons.map((c, i) => (
         <div key={i} className="flex gap-8 group/item">
          <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-1 bg-accent/5 group-hover/item:bg-accent/20 transition-all">
           <Check className="w-3.5 h-3.5 text-accent" />
          </div>
          <div>
           <div className="text-[12px] font-mono uppercase tracking-widest text-accent mb-2 font-bold">{c.domain}</div>
           <p className={cn(
             "text-base font-light leading-relaxed group-hover/item:text-accent transition-colors",
             theme === 'light' ? "text-[#1A1A1A]/90" : "text-white/90"
           )}>{c.trust}</p>
          </div>
         </div>
        ))}
       </div>

       <div className={cn(
         "mt-16 pt-10 border-t",
         theme === 'light' ? "border-black/5" : "border-white/[0.05]"
       )}>
        <Link href="/contact">
         <button className="flex items-center gap-4 text-accent hover:text-accent/80 transition-all group/btn">
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">Get Free Consultation</span>
          <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-[#0A0F0D] transition-all shadow-sm">
           <ArrowRight className="w-4 h-4" />
          </div>
         </button>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

