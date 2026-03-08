import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Scale, ShieldCheck, FileText, History, Gavel, Users, Info } from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";
import { FloatingLegalDoc } from "@/components/ui/three-d-elements";

export default function LegalSuccession() {
 const data = getServiceBySlug("legal-succession")!;

 return (
  <div className="bg-background min-h-screen">
   <PageHeader
    title="Legal & Succession"
    subtitle="Protecting ancestral heritage and multi-generational wealth distribution."
    breadcrumbs={[{ label: "Practice Areas", href: "/services" }, { label: "Legal & Succession" }]}
   />

   {/* ─── UNIQUE HERO: THE HERITAGE SHIELD ─── */}
   <section className="py-20 md:py-28 relative overflow-hidden border-b border-white/[0.05]">
    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-12 gap-20 items-center">
      <motion.div initial="hidden" animate="visible" variants={luxuryStagger} className="lg:col-span-7">
       <motion.div variants={elegantFadeUp} className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-emerald-500/40" />
        <span className="accent-label !mb-0 text-emerald-400">Legacy Stewardship</span>
       </motion.div>
       <motion.h1 variants={elegantFadeUp} className="display-title mb-8 !text-5xl md:!text-7xl">
        Securing Your <br />
        <span className="text-emerald-400 italic">Ancestral Rights.</span>
       </motion.h1>
       <motion.p variants={elegantFadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
        Succession in India is fraught with procedural delays and family friction. We provide a calm, legally structured approach to ensure your assets and parents' wishes are registered and protected.
       </motion.p>
       
       <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
        <motion.div variants={elegantFadeUp}>
         <div className="text-3xl font-serif text-white mb-2">98%</div>
         <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Dispute Prevention Rate</div>
        </motion.div>
        <motion.div variants={elegantFadeUp}>
         <div className="text-3xl font-serif text-white mb-2">450+</div>
         <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Files Resolved</div>
        </motion.div>
       </div>
      </motion.div>

      <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center perspective-container hidden lg:flex">
       <div className="relative preserve-3d">
        <FloatingLegalDoc className="scale-150 border-emerald-500/30" />
        <motion.div 
         animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         className="absolute inset-0 -m-20 border border-emerald-500/10 rounded-full"
        />
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── NARRATIVE SECTION: LEGACY AT RISK ─── */}
   <section className="py-32 bg-[#050806] relative overflow-hidden">
    <div className="max-container">
     <div className="grid lg:grid-cols-2 gap-24 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <span className="accent-label text-emerald-400">Emotional Risk</span>
       <h2 className="section-title mb-8">The Cost of <br /><span className="text-white italic">Unplanned Succession.</span></h2>
       <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
        Absence of registered Wills or adjudicated Powers of Attorney leads to multi-generational legal disputes. Ancestral assets often remain permanently locked when heirs cannot coordinate from multiple global locations.
       </p>
       <div className="space-y-6">
        {data.risks?.map((risk, i) => (
         <div key={i} className="flex gap-4 p-6 glass-panel rounded-2xl border-white/5 bg-white/[0.01]">
          <Info className="w-5 h-5 text-emerald-500 shrink-0" />
          <span className="text-sm text-white/80 font-light">{risk}</span>
         </div>
        ))}
       </div>
      </motion.div>
      <div className="relative">
       <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
        <img src="/attached_assets/image_1764305837111.png" alt="Succession planning" className="w-full h-full object-cover transition-all duration-1000" />
       </div>
       <div className="absolute -bottom-10 -left-10 p-10 glass-panel rounded-3xl border-emerald-500/20 bg-black/60 max-w-sm">
        <Gavel className="w-8 h-8 text-emerald-400 mb-4" />
        <p className="text-white font-serif italic text-lg leading-relaxed">
         &ldquo;A registered Will is not just a document; it is the final act of love for your global family.&rdquo;
        </p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── OPERATIONAL FLOW: THE INHERITANCE ROADMAP ─── */}
   <section className="section-padding bg-background relative overflow-hidden border-y border-white/[0.05]">
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
      <span className="accent-label text-emerald-400">Domain Expertise</span>
      <h2 className="section-title mb-8">Succession <span className="text-emerald-400 italic">Audit & Execution.</span></h2>
     </motion.div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.features.map((f, i) => (
       <motion.div 
        key={i} 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
        className="group p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-emerald-500/30 transition-all duration-500 bg-white/[0.01]"
       >
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
         <FileText className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-emerald-400 transition-colors">{f.title}</h3>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* ─── CUSTOM CTA ─── */}
   <section className="section-padding bg-[#050806] text-center relative overflow-hidden border-t border-white/[0.05]">
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <span className="accent-label text-emerald-400">Secure Your Heritage</span>
      <h2 className="display-title mb-10">Establish Your Family's <br /><span className="text-gradient-gold italic">Legal Shield.</span></h2>
      <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
       Don't leave succession to chance. Initiate a private review of your family's legal documentation and inheritance roadmap today.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] !bg-emerald-600 !text-white hover:!shadow-[0_0_50px_rgba(16,185,129,0.4)]">
        <span>Start Succession Audit</span>
       </button>
      </Link>
     </motion.div>
    </div>
   </section>
  </div>
 );
}
