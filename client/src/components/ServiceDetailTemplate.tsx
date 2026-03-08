import { Link } from "wouter";
import { ArrowRight, Activity, ShieldCheck, Check, Target, Zap, Shield, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import type { ServiceData } from "@/data/services";
import { FloatingLegalDoc, ComplianceCard, IsometricProperty } from "./ui/three-d-elements";

interface ServiceDetailTemplateProps {
 data: ServiceData;
}

export default function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
 return (
  <div className="bg-background">
   <PageHeader
    title={data.title}
    subtitle={data.tagline}
    breadcrumbs={[
     { label: "Practice Areas", href: "/services" },
     { label: data.shortTitle },
    ]}
   />

   {/* ─── INTRO WITH 3D VISUAL ─── */}
   <section className="section-padding relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] mesh-glow-emerald opacity-60 blur-[120px]" />
    
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-12 gap-20 items-center">
      <motion.div 
       initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
       className="lg:col-span-7"
      >
       <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-accent/40" />
        <span className="accent-label !mb-0">Executive Domain Summary</span>
       </div>
       <h2 className="section-title mb-8">{data.shortTitle} <br /><span className="text-muted-foreground italic">Stewardship.</span></h2>
       <p className="text-xl md:text-2xl text-white font-serif font-light leading-snug tracking-tight mb-12">
        {data.description}
       </p>
       
       <div className="grid md:grid-cols-2 gap-8">
        {data.risks?.map((risk, i) => (
         <div key={i} className="flex gap-4 items-start p-6 glass-panel rounded-2xl border-white/5">
          <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
          <span className="text-sm text-white/70 font-light">{risk}</span>
         </div>
        ))}
       </div>
      </motion.div>

      <div className="lg:col-span-5 relative h-[500px] hidden lg:flex items-center justify-center perspective-container">
       <div className="relative preserve-3d">
        {/* Dynamic 3D element based on domain */}
        {data.slug === 'property-tenancy' ? <IsometricProperty /> : <FloatingLegalDoc scale={1.5} />}
        <ComplianceCard 
         title="Compliance Status" 
         status="Active" 
         className="absolute -bottom-10 -left-20 rotate-y-10" 
         delay={0.3}
        />
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── OPERATIONAL SCOPE ─── */}
   <section className="section-padding bg-[#050806] relative border-y border-white/[0.05]">
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      className="text-center mb-24"
     >
      <span className="accent-label">The Scope of Handling</span>
      <h2 className="section-title mb-8">What We <span className="text-gradient-gold italic">Proactively Manage.</span></h2>
     </motion.div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.features.map((feature, index) => (
       <motion.div
        key={index}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
        transition={{ delay: index * 0.1 }}
        className="group p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-accent/30 transition-all duration-500 bg-white/[0.01]"
       >
        <div className="text-[10px] font-mono text-accent/40 font-bold tracking-widest mb-8 uppercase">Phase 0{index + 1}</div>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">{feature.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* ─── CRISIS PROTOCOL ─── */}
   <section className="section-padding relative overflow-hidden bg-background">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />
    <div className="max-container relative z-10">
     <div className="max-w-5xl mx-auto glass-panel p-12 md:p-24 rounded-[4rem] border-red-500/10 shadow-[0_0_100px_rgba(239,68,68,0.05)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/40 via-red-500/10 to-transparent" />
      
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
       <div className="w-24 h-24 rounded-3xl bg-red-500/5 border border-red-500/20 flex items-center justify-center shrink-0">
        <Activity className="w-10 h-10 text-red-500 animate-pulse" />
       </div>
       <div className="text-center md:text-left">
        <span className="accent-label !text-red-500/60 !mb-3">Rapid Response Unit</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white">Crisis Containment</h2>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
       {data.emergencies.map((e, i) => (
        <div key={i} className="flex items-start gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-red-500/30 transition-all">
         <div className="w-2 h-2 rounded-full bg-red-500/40 mt-2 shrink-0 group-hover:bg-red-500 transition-all shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
         <span className="text-white/80 font-light leading-snug">{e}</span>
        </div>
       ))}
      </div>
     </div>
    </div>
   </section>

   {/* ─── FINAL ENGAGEMENT ─── */}
   <section className="section-padding text-center relative overflow-hidden border-t border-white/[0.05]">
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      className="max-w-4xl mx-auto"
     >
      <span className="accent-label">Secure This Domain</span>
      <h2 className="display-title mb-10">
       Protect Your family's <br />
       <span className="text-gradient-gold italic">{data.shortTitle} Portfolio.</span>
      </h2>
      <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
       Initiate a private discovery session to audit your family's {data.shortTitle.toLowerCase()} risks and requirements.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 group">
        <span>Initiate Review Session</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
       </button>
      </Link>
     </motion.div>
    </div>
   </section>
  </div>
 );
}
