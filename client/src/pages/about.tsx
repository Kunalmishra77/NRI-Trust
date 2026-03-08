import PageHeader from "@/layouts/PageHeader";
import WhyNRITrustSection from "@/components/WhyNRITrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Shield, Users, Globe, Award, HeartHandshake, Eye, Scale, Briefcase, ArrowRight, Lock } from "lucide-react";

export default function About() {
 const highlights = [
  { icon: Shield, number: "Fiduciary", label: "Legal Responsibility" },
  { icon: Users, number: "200+", label: "Elite NRI Families" },
  { icon: Globe, number: "40+", label: "Jurisdictions" },
  { icon: Award, number: "since 2020", label: "Stewardship Active" },
 ];

 const operatingPrinciples = [
  {
   icon: Briefcase,
   title: "Consolidated Lead",
   description: "One senior advisor who understands your family's entire India-based asset footprint. No more repeating your story to different agents."
  },
  {
   icon: Eye,
   title: "Proactive Governance",
   description: "We don't wait for notices. We monitor bank KYC cycles, tax deadlines, and property status to preempt issues before they become emergencies."
  },
  {
   icon: Scale,
   title: "Escalation Protocol",
   description: "When legal or financial deadlocks occur, we have an immediate escalation path to senior legal counsel and banking ombudsmen."
  },
  {
   icon: HeartHandshake,
   title: "Empathetic Coordination",
   description: "We handle parents with the dignity they deserve. Our team coordinates branch visits with empathy and zero stress for them."
  }
 ];

 return (
  <div className="bg-background min-h-screen">
   <PageHeader
    title="The Stewardship Mission"
    subtitle="A private advisory bridge for global Indian families who prioritize legacy and absolute peace of mind."
    breadcrumbs={[{ label: "The Firm" }]}
   />

   {/* ─── FOUNDATIONAL ETHOS ─── */}
   <section className="section-padding relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] mesh-glow-emerald opacity-60 blur-[120px] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
      <motion.div
       initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      >
       <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-accent/40" />
        <span className="accent-label !mb-0">Foundational Ethos</span>
       </div>
       <h2 className="display-title !text-4xl md:!text-6xl mb-10">
        Eliminating the Burden of <br />
        <span className="text-gradient-gold italic">Managing Assets from Afar.</span>
       </h2>
       <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
        NRIs operate at the highest levels of global commerce, yet managing family assets in India remains a source of manual, fragmented stress. We serve as your professional proxy on the ground.
       </p>
       
       <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl border-accent/20 bg-accent/5 w-fit">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">Authorized Private Advisory • Non-Medical</span>
       </div>
      </motion.div>

      <motion.div
       initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}
       className="grid grid-cols-2 gap-6"
      >
       {highlights.map((item, i) => (
        <motion.div
         key={i}
         variants={elegantFadeUp}
         className="p-10 glass-panel rounded-[2.5rem] border-white/5 text-center bg-white/[0.01] hover:border-accent/30 transition-all duration-500 group"
        >
         <div className="w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-accent/40 shadow-inner transition-all">
          <item.icon className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors" />
         </div>
         <div className="text-3xl font-serif text-white mb-2">{item.number}</div>
         <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{item.label}</div>
        </motion.div>
       ))}
      </motion.div>
     </div>
    </div>
   </section>

   {/* ─── WHY NRI TRUST (COMPONENT) ─── */}
   <WhyNRITrustSection />
   
   {/* ─── OPERATING PRINCIPLES ─── */}
   <section className="section-padding bg-[#050806] border-y border-white/[0.05] relative overflow-hidden">
    <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      className="text-center mb-24"
     >
      <span className="accent-label">The Standard of Care</span>
      <h2 className="section-title mb-8">Our Operating <span className="text-gradient-gold italic">Principles.</span></h2>
     </motion.div>

     <div className="grid md:grid-cols-2 gap-10">
      {operatingPrinciples.map((item, i) => (
       <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
        className="group p-10 glass-panel rounded-[3rem] border-white/5 hover:border-accent/30 transition-all duration-500 bg-white/[0.01] flex gap-8 items-start"
       >
        <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 shadow-inner transition-all">
         <item.icon className="w-7 h-7 text-accent/60 group-hover:text-accent transition-colors" />
        </div>
        <div>
         <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
         <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* ─── THE FIDUCIARY VOW ─── */}
   <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-container relative z-10 text-center">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <div className="w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center mx-auto mb-12">
       <Lock className="w-8 h-8 text-accent opacity-80" />
      </div>
      <h2 className="display-title !text-3xl md:!text-5xl italic font-light text-white mb-16 leading-snug tracking-tight">
       &ldquo;To act with absolute discretion, to manage every family asset as our own, and to ensure that distance never compromises the legacy you've built.&rdquo;
      </h2>
      <div className="h-px w-24 bg-accent/40 mx-auto" />
      <div className="mt-8 text-[10px] font-mono uppercase tracking-[0.4em] text-accent font-bold">The Fiduciary Oath</div>
     </motion.div>
    </div>
   </section>

   <TestimonialsSection />

   {/* ─── FINAL CTA ─── */}
   <section className="section-padding bg-[#050806] border-t border-white/[0.05] relative overflow-hidden text-center">
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <span className="accent-label">Ready to Engage</span>
      <h2 className="display-title mb-10">Secure Your Family's <br /><span className="text-gradient-gold italic">Indian Legacy Today.</span></h2>
      <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
       Initiate a confidential review session to evaluate your family's current India-based risks and build a professional stewardship roadmap.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px]">
        <span>Initiate Discovery Session</span>
       </button>
      </Link>
      <div className="mt-16 flex justify-center items-center gap-10 opacity-30">
       <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Confidential</span>
       <div className="w-1 h-1 rounded-full bg-white" />
       <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Secure</span>
       <div className="w-1 h-1 rounded-full bg-white" />
       <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Global Support</span>
      </div>
     </motion.div>
    </div>
   </section>
  </div>
 );
}
