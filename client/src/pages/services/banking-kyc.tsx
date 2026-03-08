import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Landmark, ShieldCheck, Lock, Activity, RefreshCw, AlertCircle, FileCheck } from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";
import { ComplianceCard, VaultMotif } from "@/components/ui/three-d-elements";

export default function BankingKyc() {
  const data = getServiceBySlug("banking-kyc")!;

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Banking & KYC"
        subtitle="Institutional-grade liquidity management and compliance for global families."
        breadcrumbs={[{ label: "Practice Areas", href: "/services" }, { label: "Banking & KYC" }]}
      />

      {/* ─── UNIQUE HERO: THE COMPLIANCE VAULT ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={luxuryStagger} className="lg:col-span-7">
              <motion.div variants={elegantFadeUp} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-blue-500/40" />
                <span className="accent-label !mb-0 text-blue-400">Liquidity Stewardship</span>
              </motion.div>
              <motion.h1 variants={elegantFadeUp} className="display-title mb-8 !text-5xl md:!text-7xl">
                Unlocking Your <br />
                <span className="text-blue-400 italic">Financial Mobility.</span>
              </motion.h1>
              <motion.p variants={elegantFadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                Indian banking regulations are increasingly algorithmic. We serve as your authorized physical proxy, ensuring that mandatory KYC cycles and NRO/NRE maintenance never result in frozen family capital.
              </motion.p>
              
              <motion.div variants={elegantFadeUp} className="flex flex-wrap gap-6">
                <div className="px-6 py-4 glass-panel rounded-2xl border-blue-500/20 flex items-center gap-4 bg-blue-500/5">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-white/90">Real-time Account Monitoring</span>
                </div>
                <div className="px-6 py-4 glass-panel rounded-2xl border-blue-500/20 flex items-center gap-4 bg-blue-500/5">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-white/90">Authorized PoA Liaison</span>
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center perspective-container hidden lg:flex">
              <div className="relative preserve-3d">
                <ComplianceCard title="NRE Account" status="Active" className="rotate-y-12" delay={0.2} />
                <ComplianceCard title="NRO Portfolio" status="Compliant" className="absolute -bottom-20 -left-20 -rotate-y-12 bg-blue-900/20 border-blue-500/30" delay={0.5} />
                <VaultMotif className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 scale-150" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE BANKING MATRIX ─── */}
      <section className="py-32 bg-[#050806] relative overflow-hidden">
        <div className="max-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-24">
            <span className="accent-label text-blue-400">Operational Scope</span>
            <h2 className="section-title mb-8">The NRI Banking <span className="text-blue-400 italic">Matrix.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-blue-500/30 transition-all duration-500 group bg-white/[0.01]"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                  <RefreshCw className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNIQUE SECTION: EMERGENCY FREEZE RESOLUTION ─── */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] border-red-500/10 bg-[#0A0F0D] relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/40 via-red-600/5 to-transparent" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-6 h-6 text-red-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">Rapid Response Unit</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Account Freeze <br /><span className="text-red-500 italic">Resolution.</span></h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                  Most NRI bank freezes happen because of outdated KYC or dormant status. Our unit skips the automated help-desks and goes directly to the base branch with verified documentation to restore liquidity.
                </p>
                <div className="space-y-6">
                  {data.emergencies.map((e, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
                  <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay z-10" />
                  <img src="/attached_assets/image_1764305821702.png" alt="Secure vault" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 p-8 glass-panel rounded-2xl border-red-500/20 bg-black/60 backdrop-blur-xl max-w-xs">
                  <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2 font-bold">Resolution SLA</div>
                  <div className="text-3xl font-serif text-white">48-72 Hours</div>
                  <div className="text-[10px] text-muted-foreground mt-2 uppercase font-bold">From PoA Authorization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CUSTOM CTA ─── */}
      <section className="section-padding bg-[#050806] text-center relative overflow-hidden">
        <div className="max-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
            <span className="accent-label text-blue-400">Establish Your Fiduciary Bridge</span>
            <h2 className="display-title mb-10">Secure Your family's <br /><span className="text-gradient-gold italic">Indian Liquidity.</span></h2>
            <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
              Initiate a private banking review to audit your family's Indian portfolio and identify immediate compliance vulnerabilities.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] !bg-blue-600 !text-white hover:!shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                <span>Request Banking Audit</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
