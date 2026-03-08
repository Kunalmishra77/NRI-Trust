import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Heart, Zap, FileText, ClipboardCheck, PhoneCall, AlertCircle, Info } from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";

export default function Insurance() {
  const data = getServiceBySlug("insurance")!;

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Insurance Advocacy"
        subtitle="Professional management of health and life insurance claims for NRI families."
        breadcrumbs={[{ label: "Practice Areas", href: "/services" }, { label: "Insurance Advocacy" }]}
      />

      {/* ─── UNIQUE HERO: THE PROTECTIVE SHIELD ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={luxuryStagger} className="lg:col-span-7">
              <motion.div variants={elegantFadeUp} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-purple-500/40" />
                <span className="accent-label !mb-0 text-purple-400">Financial Advocacy</span>
              </motion.div>
              <motion.h1 variants={elegantFadeUp} className="display-title mb-8 !text-5xl md:!text-7xl">
                Protection That <br />
                <span className="text-purple-400 italic">Actually Works.</span>
              </motion.h1>
              <motion.p variants={elegantFadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                Health insurance in India is administratively intensive. We provide professional advocacy to handle claim filings and dispute resolutions — ensuring your parents' protection works when it's needed most.
              </motion.p>
              
              <div className="flex flex-wrap gap-6">
                <motion.div variants={elegantFadeUp} className="px-6 py-4 glass-panel rounded-2xl border-purple-500/20 flex items-center gap-4 bg-purple-500/5">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium text-white/90">94% Claim Win Rate</span>
                </motion.div>
                <motion.div variants={elegantFadeUp} className="px-6 py-4 glass-panel rounded-2xl border-purple-500/20 flex items-center gap-4 bg-purple-500/5">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium text-white/90">Parental-First Empathy</span>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center hidden lg:flex">
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl -m-20"
                />
                <div className="w-64 h-64 rounded-[3rem] bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-3xl relative z-10 border border-purple-400/30">
                  <ShieldCheck className="w-32 h-32 text-white" />
                </div>
                {/* Floating stats */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 p-6 glass-panel rounded-2xl border-purple-500/30 bg-black/60"
                >
                  <div className="text-2xl font-serif text-white">₹8.5 Cr+</div>
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">Claims Settled</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE REJECTION CRISIS ─── */}
      <section className="py-32 bg-[#050806] relative overflow-hidden">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                <img src="/attached_assets/image_1764309114215.png" alt="Care coordination" className="w-full h-full object-cover" />
              </div>
              <motion.div 
                animate={{ x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 p-8 glass-panel rounded-3xl border-red-500/20 bg-black/80 max-w-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-[10px] font-mono text-red-500 uppercase font-bold tracking-widest">Immediate Escalation</span>
                </div>
                <p className="text-white font-serif italic text-lg leading-relaxed">
                  &ldquo;They rejected the claim citing a decade-old minor condition. NRI Trust overturned it in 14 days.&rdquo;
                </p>
              </motion.div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
              <span className="accent-label text-purple-400">Risk Mitigation</span>
              <h2 className="section-title mb-8">Defending Your <br /><span className="text-white italic">Family's Coverage.</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                TPAs and insurers often use documentation gaps to reject high-value claims. Our advocacy team takes over the entire lifecycle — from hospital billing liaison to Insurance Ombudsman (IRDAI) escalations.
              </p>
              <div className="space-y-4">
                {data.risks?.map((risk, i) => (
                  <div key={i} className="flex gap-4 p-5 glass-panel rounded-2xl border-white/5 bg-white/[0.01]">
                    <Info className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-sm text-white/80 font-light">{risk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SCOPE OF ADVOCACY ─── */}
      <section className="section-padding bg-background relative overflow-hidden border-y border-white/[0.05]">
        <div className="max-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
            <span className="accent-label text-purple-400">Continuous Stewardship</span>
            <h2 className="section-title mb-8">The Insurance <span className="text-purple-400 italic">Audit Standard.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-purple-500/30 transition-all duration-500 bg-white/[0.01]"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
                  <ClipboardCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-purple-400 transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOM CTA ─── */}
      <section className="section-padding bg-[#050806] text-center relative overflow-hidden">
        <div className="max-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
            <span className="accent-label text-purple-400">Establish Your Financial Shield</span>
            <h2 className="display-title mb-10">Protect Your Family's <br /><span className="text-gradient-gold italic">Medical Safety Net.</span></h2>
            <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
              Don't let an administrative error compromise your parents' coverage. Initiate a private review of your insurance portfolio today.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] !bg-purple-600 !text-white hover:!shadow-[0_0_50px_rgba(139,92,246,0.4)]">
                <span>Request Insurance Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
