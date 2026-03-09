import HeroSection from "@/components/HeroSection";
import ProblemLandscape from "@/components/ProblemLandscape";
import TrustSystem from "@/components/TrustSystem";
import SolutionSection from "@/components/SolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { ArrowRight, ShieldCheck, CalendarCheck, Activity, Globe, Lock, Shield, FileCheck, Building2 } from "lucide-react";

function TrustProofStrip() {
 return (
  <div className="border-y border-white/[0.04] bg-[#050814] py-8 lg:py-10 relative z-20 shadow-xl">
   <div className="max-container flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-700">
    <div className="flex items-center gap-4 group cursor-default">
     <Shield className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
     <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#F5F3EC] uppercase">Strictly Financial & Legal</span>
    </div>
    <div className="hidden lg:block w-px h-6 bg-white/10" />
    <div className="flex items-center gap-4 group cursor-default">
     <Globe className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
     <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#F5F3EC] uppercase">Global NRI Families</span>
    </div>
    <div className="hidden lg:block w-px h-6 bg-white/10" />
    <div className="flex items-center gap-4 group cursor-default">
     <Lock className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
     <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#F5F3EC] uppercase">Fiduciary Confidentiality</span>
    </div>
   </div>
  </div>
 );
}

function EmergencyHighlight() {
 return (
  <section className="py-24 md:py-32 bg-[#0B101E] relative overflow-hidden">
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none blur-[80px]" />
   
   <div className="max-container relative z-10">
    <div className="premium-card rounded-[3rem] p-10 md:p-20 border-[#10B981]/20 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden bg-[#0A0F1A]">
     <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#10B981]/40 via-[#10B981]/10 to-transparent" />
     <div className="absolute -bottom-20 -right-20 opacity-[0.03]">
      <ShieldCheck className="w-96 h-96 text-[#10B981]" />
     </div>

     <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <div className="flex items-center gap-4 mb-8">
        <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#10B981] font-bold">Priority Resolution Unit</span>
       </div>
       <h2 className="section-title mb-8 text-[#F5F3EC]">Crisis Containment <br /><span className="text-[#10B981] italic">& Intervention.</span></h2>
       <p className="text-xl text-white/60 font-light leading-relaxed mb-10">
        Court notices, bank freezes, or sudden utility disconnections require an immediate ground presence. We act as your family's authorized proxy to resolve administrative crises within 48 hours.
       </p>
       <Link href="/emergency-response">
        <button className="flex items-center gap-4 text-[#10B981] font-mono text-xs uppercase tracking-widest font-bold hover:text-[#059669] transition-colors group">
         Examine Protocol
         <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
       </Link>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger} className="relative group">
       <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8 bg-[#050814]">
        <img src="/When Timezones.png" alt="Emergency Resolution" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/30 to-transparent" />
        <div className="absolute bottom-8 left-8 flex items-center gap-3 backdrop-blur-md bg-[#050814]/50 border border-white/10 px-5 py-3 rounded-full">
         <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
         <span className="text-[10px] font-mono text-[#F5F3EC] font-bold uppercase tracking-widest">Active Dispatch: 48h SLA</span>
        </div>
       </div>
       <div className="grid grid-cols-2 gap-4">
        {[
         { icon: FileCheck, title: "Govt & Legal", desc: "Court notices, tax audits" },
         { icon: Building2, title: "Utility Blocks", desc: "Water/power disconnection" }
        ].map((item, idx) => (
         <motion.div key={idx} variants={elegantFadeUp} className="p-6 premium-card rounded-2xl flex flex-col gap-4">
          <item.icon className="w-6 h-6 text-[#10B981]" />
          <div>
           <h4 className="text-[#F5F3EC] font-serif text-lg mb-1">{item.title}</h4>
           <p className="text-white/50 text-xs font-light">{item.desc}</p>
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
  <section className="py-24 md:py-32 bg-[#050814] border-t border-white/[0.03] relative overflow-hidden">
   <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
   <div className="absolute top-0 right-0 w-[600px] h-[600px] mesh-glow-gold opacity-10 blur-[120px] pointer-events-none" />

   <div className="max-container relative z-10">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
     <span className="accent-label text-[#D4AF37]">Engagement Models</span>
     <h2 className="section-title mb-8 text-[#F5F3EC]">Private Care Plans <br /><span className="text-gradient-gold italic">Tailored for You.</span></h2>
     <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
      We operate on a retainer model, ensuring continuous monitoring and preemptive action for your family's Indian portfolio.
     </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-container">
     {[
      { name: "Essential", price: "₹12,000", desc: "Foundational compliance, insurance coordination, and tax filing support." },
      { name: "Comprehensive", price: "₹24,000", desc: "Essential plus property oversight, tenant management, and KYC liaison.", highlight: true },
      { name: "Legacy", price: "₹36,000", desc: "Complete fiduciary stewardship, succession planning, and dedicated legal tracking." }
     ].map((tier, i) => (
      <motion.div 
       key={i} 
       initial={{ opacity: 0, y: 30 }} 
       whileInView={{ opacity: 1, y: 0 }} 
       viewport={{ once: true }} 
       transition={{ delay: i * 0.15, duration: 0.8 }}
       className={`p-10 rounded-[2.5rem] flex flex-col transition-all duration-700 hover:-translate-y-3 ${tier.highlight ? 'bg-gradient-to-b from-[#11182A] to-[#0A0F1A] border-[#D4AF37]/30 shadow-[0_30px_60px_rgba(212,175,55,0.1)] ring-1 ring-[#D4AF37]/20 scale-[1.05] z-10 border' : 'premium-card'}`}
      >
       {tier.highlight && <div className="text-[9px] font-mono text-[#050814] bg-[#D4AF37] px-4 py-1.5 rounded-full inline-block w-fit uppercase tracking-widest font-bold mb-8">Recommended</div>}
       {!tier.highlight && <div className="h-8 mb-8" />}
       <h3 className="text-3xl font-serif text-[#F5F3EC] mb-4">{tier.name}</h3>
       <p className="text-[15px] text-white/50 font-light mb-10 flex-1 leading-relaxed">{tier.desc}</p>
       <div className="text-4xl font-mono text-[#F5F3EC] mb-10 border-b border-white/[0.05] pb-10">{tier.price}<span className="text-sm text-white/40">/mo</span></div>
       <Link href="/pricing">
        <button className={`w-full py-4 text-[11px] font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-500 ${tier.highlight ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050814] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-[1.02]' : 'border border-white/10 text-white hover:bg-white/5 hover:border-white/30'}`}>
         Review Framework
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
  { title: "NRO vs NRE Portfolio Optimization", tag: "Banking" },
  { title: "Registering a Will from Abroad", tag: "Legal" },
  { title: "Mitigating TDS on Property Sales", tag: "Taxation" }
 ];

 return (
  <section className="py-32 bg-[#0A0F1A] relative border-y border-white/[0.03]">
   <div className="absolute inset-0 mesh-glow-navy opacity-30 pointer-events-none" />
   <div className="max-container relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
      <span className="accent-label text-[#D4AF37]">The Knowledge Desk</span>
      <h2 className="text-4xl md:text-5xl font-serif text-[#F5F3EC]">Authoritative <span className="text-white/40 italic">Insights.</span></h2>
     </motion.div>
     <Link href="/resources">
      <button className="flex items-center gap-4 text-[#D4AF37] hover:text-[#F3E5AB] transition-colors group">
       <span className="font-mono text-xs uppercase tracking-widest font-bold">Access All Briefs</span>
       <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050814] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
        <ArrowRight className="w-4 h-4" />
       </div>
      </button>
     </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
     {guides.map((g, i) => (
      <Link key={i} href="/resources">
       <motion.div 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
        className="group premium-card p-10 rounded-[2rem] cursor-pointer flex flex-col h-full"
       >
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]/60 font-bold mb-6">{g.tag}</div>
        <h3 className="text-2xl font-serif text-[#F5F3EC] mb-12 group-hover:text-[#D4AF37] transition-colors leading-snug">{g.title}</h3>
        <div className="flex justify-end mt-auto pt-8 border-t border-white/[0.05]">
         <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all duration-500" />
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
   <KnowledgePreview />

   {/* ─── GLOBAL CLOSING CTA ─── */}
   <section className="py-32 md:py-48 bg-[#050814] relative overflow-hidden border-t border-white/[0.05]">
    <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.12)_0%,transparent_60%)] pointer-events-none" />
    
    <div className="max-container text-center relative z-10">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={elegantFadeUp}
      className="max-w-5xl mx-auto"
     >
      <div className="flex items-center justify-center gap-6 mb-12">
       <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
       <span className="accent-label !mb-0 text-[#D4AF37]">The Ultimate Promise</span>
       <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
      </div>

      <h2 className="display-title mb-12 text-[#F5F3EC]">
       Distance Should Never <br />
       <span className="text-gradient-gold italic">Compromise Care.</span>
      </h2>

      <p className="text-xl md:text-2xl text-white/50 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
       We manage the structural complexities in India, giving you the freedom to focus on your life abroad with absolute peace of mind.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
       <Link href="/contact" className="w-full sm:w-auto">
        <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 group">
         <span>Initiate Consultation</span>
         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
       <Link href="/pricing" className="w-full sm:w-auto">
        <button className="btn-premium-outline min-w-[320px]">
         Examine Engagement Models
        </button>
       </Link>
      </div>
      
      {/* Trust Badges in CTA */}
      <div className="mt-32 pt-16 border-t border-white/[0.03] flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
       <div className="flex items-center gap-4">
        <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[11px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">Strictly Financial & Legal</span>
       </div>
       <div className="flex items-center gap-4">
        <CalendarCheck className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[11px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">Confidential Review</span>
       </div>
       <div className="flex items-center gap-4">
        <Activity className="w-5 h-5 text-[#D4AF37]" />
        <span className="text-[11px] text-white font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap text-nowrap">No Medical Services</span>
       </div>
      </div>
     </motion.div>
    </div>
   </section>
  </>
 );
}
