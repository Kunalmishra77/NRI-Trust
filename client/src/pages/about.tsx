import PageHeader from "@/layouts/PageHeader";
import WhyNRITrustSection from "@/components/WhyNRITrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Shield, Users, Globe, Award, HeartHandshake, Eye, Scale, Briefcase, Lock } from "lucide-react";

export default function About() {
 const highlights = [
  { icon: Shield, number: "Trusted", label: "Legal Responsibility" },
  { icon: Users, number: "200+", label: "Elite NRI Families" },
  { icon: Globe, number: "40+", label: "Jurisdictions" },
  { icon: Award, number: "since 2020", label: "Protection Active" },
 ];

 const operatingPrinciples = [
  {
   icon: Briefcase,
   title: "Combined Lead",
   description: "One senior advisor who understands your family's entire India-based asset footprint. No more repeating your story to different agents."
  },
  {
   icon: Eye,
   title: "Proactive Governance",
   description: "We don't wait for notices. We monitor bank KYC cycles, tax deadlines, and property status to preempt issues before they become emergencies."
  },
  {
   icon: Scale,
   title: "Escalation Process",
   description: "When legal or financial deadlocks occur, we have an immediate escalation path to senior legal counsel and banking ombudsmen."
  },
  {
   icon: HeartHandshake,
   title: "Empathetic Coordination",
   description: "We handle parents with the dignity they deserve. Our team coordinates branch visits with empathy and zero stress for them."
  }
 ];

 return (
  <main className="min-h-screen">
   {/* SECTION 1: DARK HERO */}
   <div className="section-dark">
    <PageHeader
     title="Our Mission"
     subtitle="A private advisory bridge for global Indian families who prioritize legacy and absolute peace of mind."
     breadcrumbs={[{ label: "The Firm" }]}
    />
   </div>

   {/* SECTION 2: LIGHT ETHOS */}
   <section className="section-padding section-light">
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
       initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      >
       <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-accent/40" />
        <span className="accent-label !mb-0 text-accent">Foundational Ethos</span>
       </div>
       <h2 className="display-title !text-4xl md:!text-6xl mb-10 text-white">
        Eliminating the Burden of <br />
        <span className="text-gradient-gold italic">Managing Assets from Afar.</span>
       </h2>
       <p className="text-xl text-white/65 font-light leading-relaxed mb-12 max-w-xl">
        NRIs operate at the highest levels of global commerce, yet managing family assets in India remains a source of manual, fragmented stress. We serve as your professional proxy on the ground.
       </p>
       <div className="flex items-center gap-4 p-6 bg-accent/5 rounded-2xl border border-accent/20 w-fit shadow-sm">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[11px] font-mono font-bold tracking-widest text-accent uppercase">Authorized Private Advisory • Non-Medical</span>
       </div>
      </motion.div>

      {/* Feature photo */}
      <motion.div
       initial={{ opacity: 0, x: 30 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
       className="relative"
      >
       <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto shadow-2xl">
        <img
         src="/generated_images/owner1.jpeg"
         alt="Dhananjay Agrawal — Founder, NRI Trust"
         className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
         <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-1">Founder & Managing Partner</div>
         <div className="text-white font-bold text-lg leading-tight">Dhananjay Agrawal</div>
         <div className="text-white/60 text-sm">15+ years · Estate, Banking & Property Law</div>
        </div>
       </div>
       <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-accent/20 -z-10" />
      </motion.div>
     </div>

     {/* Stats row */}
     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/[0.06]"
     >
      {highlights.map((item, i) => (
       <motion.div
        key={i}
        variants={elegantFadeUp}
        className="premium-card p-5 md:p-8 bg-white border border-black/5 hover:border-accent/40 shadow-sm transition-all duration-500 group text-center"
       >
        <div className="w-10 h-10 rounded-xl bg-[#FDFCFB] border border-black/5 flex items-center justify-center mx-auto mb-4 group-hover:border-accent/40 shadow-sm transition-all">
         <item.icon className="w-5 h-5 text-accent" />
        </div>
        <div className="text-2xl font-serif text-[#1A1A1A] mb-1">{item.number}</div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] font-bold">{item.label}</div>
       </motion.div>
      ))}
     </motion.div>
    </div>
   </section>

   {/* SECTION 3: FOUNDER */}
   <section className="section-padding section-light border-t border-black/[0.05]">
    <div className="max-container relative z-10">

     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      className="text-center mb-16"
     >
      <div className="flex items-center justify-center gap-6 mb-6">
       <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent/50" />
       <span className="accent-label !mb-0 text-accent">The Person Behind It</span>
       <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
      </div>
      <h2 className="section-title text-[#1A1A1A] mb-4">Meet Our <span className="text-gradient-gold italic">Founder.</span></h2>
     </motion.div>

     {/* Founder card — horizontal on desktop */}
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid lg:grid-cols-[380px,1fr] gap-10 lg:gap-16 items-center bg-white rounded-3xl border border-black/[0.06] shadow-xl overflow-hidden"
     >
      {/* Primary photo */}
      <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[360px] overflow-hidden">
       <img
        src="/generated_images/owner2.jpeg"
        alt="Dhananjay Agrawal — Founder, NRI Trust"
        className="w-full h-full object-cover object-top"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5" />
       <div className="absolute bottom-5 left-5 lg:hidden">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-0.5">Founder & Managing Partner</div>
        <div className="text-white font-black text-xl">Dhananjay Agrawal</div>
       </div>
      </div>

      {/* Details */}
      <div className="px-8 py-10 lg:py-12 lg:pr-12">
       <div className="hidden lg:block mb-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-accent font-black mb-3">Founder & Managing Partner</div>
        <h3 className="text-4xl font-black text-[#1A1A1A] tracking-tight mb-1">Dhananjay Agrawal</h3>
        <div className="h-[3px] w-14 bg-gradient-to-r from-accent to-accent/30 rounded-full mt-3 mb-6" />
       </div>

       <p className="text-[#1A1A1A]/65 text-base leading-relaxed font-medium mb-8">
        With over 15 years of hands-on experience in Indian family law, banking compliance, and NRI property management, Dhananjay founded NRI Trust to give global Indian families a trusted partner on the ground. His work spans estate planning, bank succession, insurance disputes, and property legal matters — all managed remotely for NRI clients across 40+ countries.
       </p>

       {/* Expertise tags */}
       <div className="flex flex-wrap gap-2 mb-8">
        {["Estate & Succession Law", "Banking & KYC", "Property Management", "Insurance Advisory", "FEMA Compliance"].map((tag) => (
         <span key={tag} className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/8 text-accent border border-accent/20">
          {tag}
         </span>
        ))}
       </div>

       {/* Photo strip — all 3 shots */}
       <div className="flex gap-3">
        {[
         { src: "/generated_images/owner2.jpeg", label: "Professional" },
         { src: "/generated_images/owner1.jpeg", label: "Formal" },
         { src: "/generated_images/owner3.jpeg", label: "Working" },
        ].map((p, i) => (
         <div key={i} className="relative w-16 h-20 rounded-xl overflow-hidden border-2 border-black/[0.06] hover:border-accent/40 transition-colors cursor-default shrink-0 shadow-sm">
          <img src={p.src} alt={`Dhananjay Agrawal — ${p.label}`} className="w-full h-full object-cover object-top" />
         </div>
        ))}
        <div className="flex items-center pl-2">
         <span className="text-[11px] font-mono text-[#1A1A1A]/35 uppercase tracking-widest">Dhananjay Agrawal</span>
        </div>
       </div>
      </div>
     </motion.div>
    </div>
   </section>

   {/* SECTION 3: DARK WHY NRI TRUST */}
   <div className="section-dark">
    <WhyNRITrustSection />
   </div>
   
   {/* SECTION 4: LIGHT OPERATING PRINCIPLES */}
   <section className="section-padding section-light border-y border-black/[0.05]">
    <div className="absolute inset-0 noise-overlay pointer-events-none" />
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
      className="text-center mb-24"
     >
      <span className="accent-label text-accent">The Standard of Care</span>
      <h2 className="section-title text-[#1A1A1A] mb-8">Our Operating <span className="text-gradient-gold italic">Principles.</span></h2>
     </motion.div>

     <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {operatingPrinciples.map((item, i) => (
       <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
        className="group p-10 premium-card bg-white border border-black/5 hover:border-accent/30 transition-all duration-500 flex gap-8 items-start shadow-sm"
       >
        <div className="w-16 h-16 rounded-2xl bg-[#FDFCFB] border border-black/5 flex items-center justify-center shrink-0 group-hover:border-accent/40 shadow-inner transition-all">
         <item.icon className="w-7 h-7 text-accent group-hover:text-accent transition-colors" />
        </div>
        <div>
         <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
         <p className="text-[15px] text-[#1A1A1A] font-light leading-relaxed">{item.description}</p>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* SECTION 5: DARK TRUST VOW */}
   <section className="section-padding section-dark">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-container relative z-10 text-center">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <div className="w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center mx-auto mb-12 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
       <Lock className="w-8 h-8 text-accent opacity-80" />
      </div>
      <h2 className="display-title !text-3xl md:!text-5xl italic font-light text-[#FDFCFB] mb-16 leading-snug tracking-tight">
       &ldquo;To act with complete privacy, to manage every family asset as our own, and to ensure that distance never compromises the legacy you've built.&rdquo;
      </h2>
      <div className="h-px w-24 bg-accent/40 mx-auto" />
      <div className="mt-8 text-[11px] font-mono uppercase tracking-[0.4em] text-accent font-bold">Our Promise</div>
     </motion.div>
    </div>
   </section>

   {/* SECTION 6: LIGHT TESTIMONIALS */}
   <div className="section-light">
    <TestimonialsSection theme="light" />
   </div>

   {/* SECTION 7: DARK FINAL CTA */}
   <section className="section-padding section-dark border-t border-white/[0.05]">
    <div className="max-container relative z-10 text-center">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <span className="accent-label text-accent">Ready to Engage</span>
      <h2 className="display-title mb-10 text-[#FDFCFB]">Secure Your Family's <br /><span className="text-gradient-gold italic">Indian Legacy Today.</span></h2>
      <p className="text-xl text-white/90 font-light mb-16 leading-relaxed">
       Book a free consultation to review your parents' financial situation in India and create a protection plan.
      </p>
      <div className="flex justify-center">
       <Link href="/contact">
        <button className="btn-premium-primary min-w-[200px] sm:min-w-[260px] md:min-w-[320px]">
         <span>Book Free Consultation</span>
        </button>
       </Link>
      </div>
      <div className="mt-16 flex justify-center items-center gap-10">
       <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">Confidential</span>
       <div className="w-1 h-1 rounded-full bg-white" />
       <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">Secure</span>
       <div className="w-1 h-1 rounded-full bg-white" />
       <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">Global Support</span>
      </div>
     </motion.div>
    </div>
   </section>
  </main>
 );
}

