import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Receipt, ShieldCheck, FileText, BarChart3, Calculator, Percent, History, Info, AlertTriangle } from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";

export default function IncomeTax() {
  const data = getServiceBySlug("income-tax")!;

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Income Tax Compliance"
        subtitle="Algorithmic tax filing and global optimization for NRI family units."
        breadcrumbs={[{ label: "Practice Areas", href: "/services" }, { label: "Income Tax" }]}
      />

      {/* ─── UNIQUE HERO: THE PRECISION COMPLIANCE ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={luxuryStagger} className="lg:col-span-7">
              <motion.div variants={elegantFadeUp} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-rose-500/40" />
                <span className="accent-label !mb-0 text-rose-400">Tax Optimization</span>
              </motion.div>
              <motion.h1 variants={elegantFadeUp} className="display-title mb-8 !text-5xl md:!text-7xl">
                Algorithmic <br />
                <span className="text-rose-400 italic">Notice Defense.</span>
              </motion.h1>
              <motion.p variants={elegantFadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                Indian taxation for NRIs is becoming increasingly automated. From scrutiny notices to complex DTAA requirements, we provide a structured, expert-led approach to ensure your filings are accurate.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                <motion.div variants={elegantFadeUp}>
                  <div className="text-3xl font-serif text-white mb-2">2,000+</div>
                  <div className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">ITRs Filed Successfully</div>
                </motion.div>
                <motion.div variants={elegantFadeUp}>
                  <div className="text-3xl font-serif text-white mb-2">₹4.2 Cr+</div>
                  <div className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">Refunds Unlocked</div>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center hidden lg:flex">
              <div className="relative w-full h-full">
                {/* Abstract Data Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,63,94,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                
                <motion.div 
                  animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 glass-panel rounded-3xl border-rose-500/20 shadow-3xl bg-[#0A0F0D]/80 p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <Receipt className="w-8 h-8 text-rose-400" />
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-500 font-bold uppercase">Accepted</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-xs text-muted-foreground uppercase font-bold mb-1">Tax Refund</div>
                    <div className="text-2xl font-mono text-white">₹2,45,000</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SCRUTINY RISK ─── */}
      <section className="py-32 bg-[#050806] relative overflow-hidden">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
              <span className="accent-label text-rose-400">Notice Mitigation</span>
              <h2 className="section-title mb-8">Defending Your <br /><span className="text-white italic">Tax Status.</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                Unreported rental income, capital gains on mutual funds, or status confusion (ROR vs RNOR) are common triggers for IT scrutiny. We provide proactive defense by mapping your entire Indian income footprint.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {data.risks?.map((risk, i) => (
                  <div key={i} className="flex gap-4 p-5 glass-panel rounded-2xl border-white/5 bg-white/[0.01] hover:border-rose-500/20 transition-all">
                    <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                    <span className="text-sm text-white/80 font-light">{risk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                <img src="/attached_assets/image_1764305789793.png" alt="Tax scrutiny" className="w-full h-full object-cover grayscale opacity-20" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-12 text-center">
                <div className="text-[10px] font-mono text-rose-500 uppercase font-bold tracking-[0.4em] mb-4">Immediate Audit Defense</div>
                <div className="text-5xl font-serif text-white opacity-80">Section 143(1)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCOPE OF COMPLIANCE ─── */}
      <section className="section-padding bg-background relative overflow-hidden border-y border-white/[0.05]">
        <div className="max-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
            <span className="accent-label text-rose-400">Strategic Filing</span>
            <h2 className="section-title mb-8">The Stewardship <span className="text-rose-400 italic">Standard.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-rose-500/30 transition-all duration-500 bg-white/[0.01]"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-8 group-hover:bg-rose-500/20 transition-colors">
                  <Calculator className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-rose-400 transition-colors">{f.title}</h3>
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
            <span className="accent-label text-rose-400">Secure Your Compliance</span>
            <h2 className="display-title mb-10">Eliminate NRI <br /><span className="text-gradient-gold italic">Tax Anxiety.</span></h2>
            <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
              Don't let tax notices disrupt your family's peace of mind. Initiate a private review of your Indian tax portfolio today.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] !bg-rose-600 !text-white hover:!shadow-[0_0_50px_rgba(244,63,94,0.4)]">
                <span>Request Tax Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
