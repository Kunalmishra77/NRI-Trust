import HeroSection from "@/components/HeroSection";
import ProblemLandscape from "@/components/ProblemLandscape";
import FailureMatrix from "@/components/FailureMatrix";
import TrustSystem from "@/components/TrustSystem";
import SolutionSection from "@/components/SolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { ArrowRight, ShieldCheck, CalendarCheck, Activity, Globe, Lock } from "lucide-react";

// --- INLINE COMPONENTS FOR THE HOMEPAGE NARRATIVE ---

function TrustProofStrip() {
 return (
  <div className="border-y border-white/[0.05] bg-[#030404] py-8 lg:py-12 relative z-20">
   <div className="max-container flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700">
    <div className="flex items-center gap-3">
     <ShieldCheck className="w-5 h-5 text-accent" />
     <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">Purely Financial & Legal</span>
    </div>
    <div className="hidden lg:block w-px h-6 bg-white/20" />
    <div className="flex items-center gap-3">
     <Globe className="w-5 h-5 text-accent" />
     <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">For NRIs with Parents in India</span>
    </div>
    <div className="hidden lg:block w-px h-6 bg-white/20" />
    <div className="flex items-center gap-3">
     <Lock className="w-5 h-5 text-accent" />
     <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">Safe & Confidential</span>
    </div>
   </div>
  </div>
 );
}

function EmergencyHighlight() {
 return (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)] pointer-events-none blur-[50px]" />
   
   <div className="max-container relative z-10">
    <div className="glass-panel rounded-[3rem] p-10 md:p-20 border-red-500/20 shadow-[0_0_80px_rgba(239,68,68,0.1)] relative overflow-hidden bg-[#050806]">
     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 via-red-600/10 to-transparent" />
     <div className="absolute -bottom-20 -right-20 opacity-5">
      <Activity className="w-96 h-96 text-red-500" />
     </div>

     <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <div className="flex items-center gap-4 mb-8">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-red-500 font-bold">Priority Support</span>
       </div>
       <h2 className="section-title mb-8">Handling Financial <br /><span className="text-white italic">& Legal Emergencies.</span></h2>
       <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
        Situations like court notices, bank freezes, or utility cuts require immediate attention on the ground. We act as your parents’ authorized physical proxy in India.
       </p>
       <Link href="/emergency-response">
        <button className="flex items-center gap-4 text-red-400 font-mono text-sm uppercase tracking-widest font-bold hover:text-red-300 transition-colors group">
         View Emergency Support
         <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
       </Link>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger} className="relative group">
       <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl mb-8">
        <img src="/When Timezones.png" alt="Emergency Resolution" className="w-full h-full object-cover transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
         <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">Active Dispatch: 48-72h SLA</span>
        </div>
       </div>
       <div className="space-y-4">
        {[
         { title: "Govt & Legal", desc: "Court notices, tax issues, and municipal body notices." },
         { title: "Utilities & Services", desc: "Disconnection of electricity or water, and bill management." }
        ].map((item, idx) => (
         <motion.div key={idx} variants={elegantFadeUp} className="p-6 bg-black/40 border border-white/5 rounded-2xl flex items-start gap-5 hover:border-red-500/30 transition-colors">
          <ShieldCheck className="w-6 h-6 text-red-500 shrink-0 mt-1" />
          <div>
           <h4 className="text-white font-serif text-xl mb-2">{item.title}</h4>
           <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
          </div>
         </motion.div>
        ))}
       </div>
      </motion.div>
     </div>
    </div>
   </div>
  </section>
 );
}

function PricingPreview() {
 return (
  <section className="py-24 md:py-32 bg-[#050806] border-t border-white/[0.05] relative overflow-hidden">
   <div className="absolute inset-0 noise-overlay opacity-60" />
   <div className="absolute top-0 right-0 w-[600px] h-[600px] mesh-glow-gold opacity-10 blur-[120px] pointer-events-none" />

   <div className="max-container relative z-10">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
     <span className="accent-label text-accent">Service Tiers</span>
     <h2 className="section-title mb-8 text-white text-4xl md:text-5xl">Care Plans for Your <br /><span className="text-gradient-gold italic">Family's Needs.</span></h2>
     <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
      We offer three carefully designed tiers to match the specific needs of your family. We recommend the most appropriate tier after a review session.
     </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-container">
     {[
      { name: "Essential Care", price: "₹12,000", desc: "Health & Life insurance, Income Tax filing, and basic compliance." },
      { name: "Comprehensive", price: "₹24,000", desc: "Essential plus property oversight, tenant management, and bank KYC.", highlight: true },
      { name: "Premium Legacy", price: "₹36,000", desc: "Full asset management, succession planning, and probate support." }
     ].map((tier, i) => (
      <motion.div 
       key={i} 
       initial={{ opacity: 0, y: 20 }} 
       whileInView={{ opacity: 1, y: 0 }} 
       viewport={{ once: true }} 
       transition={{ delay: i * 0.1 }}
       className={`p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${tier.highlight ? 'bg-gradient-to-b from-[#121A17] to-[#0A0F0D] border-accent/40 shadow-[0_0_50px_rgba(207,160,82,0.15)] ring-1 ring-accent/20 scale-[1.05] z-10' : 'glass-panel border-white/5 bg-white/[0.01]'}`}
      >
       {tier.highlight && <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold mb-6">Most Popular</div>}
       <h3 className="text-2xl font-serif text-white mb-4">{tier.name}</h3>
       <p className="text-sm text-muted-foreground font-light mb-8 flex-1 leading-relaxed">{tier.desc}</p>
       <div className="text-4xl font-mono text-white mb-8 border-b border-white/10 pb-8">{tier.price}<span className="text-sm text-muted-foreground">/mo</span></div>
       <Link href="/pricing">
        <button className={`w-full py-4 text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all ${tier.highlight ? 'bg-accent text-[#0A0F0D] hover:shadow-[0_0_20px_rgba(207,160,82,0.4)]' : 'border border-white/20 text-white hover:bg-white/10'}`}>
         View Details
        </button>
       </Link>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}

function KnowledgePreview() {
 const guides = [
  { title: "NRO vs NRE Optimization", tag: "Banking" },
  { title: "Registering a Will from Abroad", tag: "Legal" },
  { title: "TDS on Property Sales", tag: "Taxation" }
 ];

 return (
  <section className="py-24 bg-background relative border-y border-white/[0.05]">
   <div className="max-container">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
      <span className="accent-label">NRI Knowledge Center</span>
      <h2 className="text-4xl font-serif text-white">Authoritative <span className="text-muted-foreground italic">Insights.</span></h2>
     </motion.div>
     <Link href="/resources">
      <button className="flex items-center gap-3 text-accent hover:text-white transition-colors group">
       <span className="font-mono text-xs uppercase tracking-widest font-bold">Access All Guides</span>
       <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-[#0A0F0D] transition-all">
        <ArrowRight className="w-4 h-4" />
       </div>
      </button>
     </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
     {guides.map((g, i) => (
      <Link key={i} href="/resources">
       <motion.div 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
        className="group p-8 glass-panel rounded-3xl border-white/5 hover:border-accent/30 transition-all duration-500 cursor-pointer bg-white/[0.01]"
       >
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent/60 font-bold mb-4">{g.tag}</div>
        <h3 className="text-xl font-serif text-white/90 mb-8 group-hover:text-accent transition-colors">{g.title}</h3>
        <div className="flex justify-end">
         <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
        </div>
       </motion.div>
      </Link>
     ))}
    </div>
   </div>
  </section>
 );
}

export default function Home() {
 return (
  <>
   <HeroSection />
   <TrustProofStrip />
   
   {/* ─── NARRATIVE FLOW ─── */}
   <ProblemLandscape />
   <FailureMatrix />
   <TrustSystem />
   
   {/* ─── SERVICES & EXPERTISE ─── */}
   <SolutionSection />
   
   {/* ─── EMERGENCY CAPABILITY ─── */}
   <EmergencyHighlight />
   
   {/* ─── OPERATIONAL PROCESS ─── */}
   <ProcessTimeline />
   
   {/* ─── PROOF & OUTCOMES ─── */}
   <TestimonialsSection />
   
   {/* ─── VALUE PREVIEWS ─── */}
   <PricingPreview />

   {/* ─── GLOBAL CLOSING CTA ─── */}
   <section className="section-padding bg-background relative overflow-hidden border-t border-white/[0.05]">
    <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(207,160,82,0.15)_0%,transparent_70%)] pointer-events-none" />
    
    <div className="max-container text-center relative z-10">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={elegantFadeUp}
      className="max-w-5xl mx-auto"
     >
      <div className="flex items-center justify-center gap-4 mb-10">
       <div className="h-px w-12 bg-accent/40" />
       <span className="accent-label !mb-0">Our Promise</span>
       <div className="h-px w-12 bg-accent/40" />
      </div>

      <h2 className="display-title mb-10 text-4xl md:text-6xl lg:text-7xl">
       Parents' Financial Security <br />
       <span className="text-gradient-gold italic">Our Responsibility.</span>
      </h2>

      <p className="text-xl md:text-2xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto leading-relaxed">
       We handle the complexities in India so you can focus on your life abroad with complete peace of mind.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
       <Link href="/contact" className="w-full sm:w-auto">
        <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 group">
         <span>Book Private Review</span>
         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
       <Link href="/pricing" className="w-full sm:w-auto">
        <button className="btn-premium-outline min-w-[320px]">
         View Care Plans
        </button>
       </Link>
      </div>
      
      {/* Trust Badges in CTA */}
      <div className="mt-32 pt-12 border-t border-white/[0.05] flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-80 hover:opacity-100 transition-opacity duration-700">
       <div className="flex items-center gap-3">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <span className="text-[10px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">Strictly Financial & Legal</span>
       </div>
       <div className="flex items-center gap-3">
        <CalendarCheck className="w-4 h-4 text-accent" />
        <span className="text-[10px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">Complimentary Review</span>
       </div>
       <div className="flex items-center gap-3">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <span className="text-[10px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">No Medical Services</span>
       </div>
      </div>
     </motion.div>
    </div>
   </section>
  </>
 );
}
