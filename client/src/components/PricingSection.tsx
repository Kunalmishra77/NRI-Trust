import { ShieldCheck, Star, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { cn } from "@/lib/utils";

export default function PricingSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 const tiers = [
  {
   name: "Essential Care",
   price: "₹12,000",
   period: "/ month",
   frequency: "Annual Review (1x/year)",
   bestFor: "Basic financial & insurance compliance for parents.",
   features: [
    "Health insurance renewals & claims",
    "Life insurance management",
    "Income Tax filing & notices",
    "Basic financial compliance",
    "Emergency for tax & insurance",
   ],
   popular: false,
  },
  {
   name: "Comprehensive",
   price: "₹24,000",
   period: "/ month",
   frequency: "Semi-Annual Review (2x/year)",
   bestFor: "Active property and banking stewardship.",
   features: [
    "Everything in Essential Care",
    "House Tax & municipal issues",
    "Tenant disputes & management",
    "One property oversight",
    "Banking KYC & nominations",
    "Utility payment monitoring",
   ],
   popular: true,
  },
  {
   name: "Premium Legacy",
   price: "₹36,000",
   period: "/ month",
   frequency: "Quarterly Review (4x/year)",
   bestFor: "Full family estate & asset management.",
   features: [
    "Everything in Comprehensive Care",
    "Multiple fixed asset management",
    "Full property portfolio oversight",
    "Succession & Will planning",
    "Probate & legal formalities",
    "Complete tax & legal management",
   ],
   popular: false,
  },
 ];

 return (
  <section id="pricing" className={cn(
    "py-32 md:py-48 relative overflow-hidden transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
  )}>
   {/* ─── BACKGROUND LAYERS ─── */}
   {theme === 'dark' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] mesh-glow-emerald opacity-10 blur-[120px] pointer-events-none" />
    </>
   )}
   {theme === 'light' && (
    <>
     <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
    </>
   )}

   <div className="max-container relative z-10">
    {/* ─── HEADING ─── */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="text-center mb-24 md:mb-32"
    >
     <div className="flex items-center justify-center gap-4 mb-8">
      <div className="h-[1px] w-12 bg-accent/40" />
      <span className="accent-label !mb-0 text-accent">Service Tiers</span>
      <div className="h-[1px] w-12 bg-accent/40" />
     </div>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
     )}>
      Choosing the Right <br className="hidden md:block" />
      <span className="text-gradient-gold italic font-light">Care Level.</span>
     </h2>
     <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
      We offer three carefully designed tiers to match the specific needs of your family. During a complimentary review session, we assess your parents’ situation and recommend the most appropriate tier.
     </p>
    </motion.div>

    {/* ─── CARDS GRID ─── */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-24 lg:mb-40 perspective-container"
    >
     {tiers.map((tier, index) => (
      <motion.div
       key={index}
       variants={elegantFadeUp}
       className="relative flex flex-col h-full group preserve-3d"
      >
       <div
        className={cn(
         "flex flex-col h-full p-6 md:p-10 lg:p-12 transition-all duration-700 rounded-[2.5rem] border",
         tier.popular
          ? "bg-gradient-to-b from-[#121A17] to-[#0A0F0D] border-accent/40 shadow-[0_0_50px_rgba(207,160,82,0.15)] ring-1 ring-accent/20 scale-[1.03] z-10"
          : (theme === 'light' 
              ? "bg-white border-black/5 hover:border-accent/40 shadow-sm hover:-translate-y-2" 
              : "glass-panel border-white/5 bg-white/[0.01] hover:border-accent/30 hover:-translate-y-2 hover:bg-[#0A0F0D]")
        )}
       >
        {/* Popular Marker */}
        {tier.popular && (
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-accent text-[#0A0F0D] px-6 py-2 rounded-full shadow-[0_10px_20px_rgba(207,160,82,0.3)] flex items-center gap-2">
           <Star className="w-3.5 h-3.5 fill-current" />
           <span className="text-[12px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap">Recommended Standard</span>
          </div>
         </div>
        )}
        
        <div className="mb-10 relative z-10">
         <span className={cn(
          "font-mono text-[12px] tracking-[0.2em] uppercase block mb-4 font-bold",
          tier.popular ? "text-accent !text-accent" : (theme === 'light' ? "text-[#1A1A1A]/70" : "text-white/70")
         )}>
          {tier.frequency}
         </span>
         <h3 className={cn(
          "text-xl lg:text-3xl font-serif font-medium mb-4",
          tier.popular ? "text-white !text-white" : (theme === 'light' ? "text-[#1A1A1A]" : "text-white")
         )}>
          {tier.name}
         </h3>
         <p className={cn(
           "text-[14px] font-light leading-relaxed",
           tier.popular ? "text-white/80 !text-white/80" : (theme === 'dark' ? "text-white/70" : "text-[#1A1A1A]/70")
         )}>
          {tier.bestFor}
         </p>
        </div>

        <div className={cn(
         "pb-10 mb-10 border-b relative z-10",
         tier.popular ? "border-accent/20" : (theme === 'light' ? "border-black/[0.05]" : "border-white/[0.05]")
        )}>
         <div className="flex items-baseline gap-2">
          <span className={cn(
           "text-3xl lg:text-5xl font-mono font-medium",
           tier.popular ? "text-accent !text-accent" : (theme === 'light' ? "text-[#1A1A1A]" : "text-white")
          )}>
           {tier.price}
          </span>
          <span className={cn(
            "text-[14px] font-light",
            tier.popular ? "text-white/60 !text-white/60" : (theme === 'dark' ? "text-white/40" : "text-[#1A1A1A]/40")
          )}>{tier.period}</span>
         </div>
        </div>

        <ul className="space-y-6 flex-1 mb-12 relative z-10">
         {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4">
           <div className={cn(
            "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 border",
            tier.popular 
              ? "bg-accent/10 border-accent/30 text-accent shadow-[0_0_10px_rgba(207,160,82,0.2)]" 
              : (theme === 'light' ? "bg-black/5 border-black/10 text-[#1A1A1A]/90" : "bg-white/5 border-white/10 text-white/90")
           )}>
            <Check className="w-3 h-3" />
           </div>
           <span className={cn(
            "text-[15px] font-light leading-snug",
            tier.popular ? "text-white/90 !text-white/90" : (theme === 'dark' ? "text-white/80" : "text-[#1A1A1A]/80")
           )}>{feature}</span>
          </li>
         ))}
        </ul>

        <Link href="/contact" className="mt-auto relative z-10">
         <button className={cn(
          "w-full py-5 text-xs font-mono tracking-[0.2em] font-bold uppercase flex items-center justify-center gap-3 transition-all duration-500 rounded-full group/btn",
          tier.popular 
            ? "bg-accent text-[#0A0F0D] shadow-[0_0_30px_rgba(207,160,82,0.15)] hover:shadow-[0_0_40px_rgba(207,160,82,0.3)] hover:-translate-y-1" 
            : "border border-accent/30 text-accent hover:bg-accent/10"
         )}>
          Book {tier.name}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
         </button>
        </Link>
       </div>
      </motion.div>
     ))}
    </motion.div>

    {/* ─── REASSURANCE STRIP ─── */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="max-w-4xl mx-auto"
    >
     <div className={cn(
      "p-10 md:p-14 rounded-[3rem] border flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group shadow-sm transition-all duration-500",
      theme === 'light' ? "bg-white border-black/5 hover:border-accent/40" : "vault-surface border-white/5 bg-[#0A0F0D]"
     )}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(207,160,82,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      <div className={cn(
       "w-24 h-24 rounded-2xl border flex items-center justify-center shrink-0 relative z-10 shadow-inner group-hover:scale-105 transition-transform duration-500",
       theme === 'light' ? "bg-[#FDFCFB] border-black/5" : "bg-[#121A17] border-accent/20"
      )}>
       <ShieldCheck className="w-10 h-10 text-accent" />
      </div>
      <div className="relative z-10 text-center md:text-left">
       <h4 className={cn(
        "text-2xl lg:text-3xl font-serif font-medium mb-4",
        theme === 'light' ? "text-[#1A1A1A]" : "text-white"
       )}>Our Fiduciary Promise</h4>
       <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
        Your parents’ financial security is our responsibility. We handle the complexities in India so you can focus on your life abroad with complete peace of mind.
       </p>
      </div>
     </div>
    </motion.div>
   </div>
  </section>
 );
}

