import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Wrench, 
  Search, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2,
  XCircle,
  Zap,
  Key
} from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";
import { cn } from "@/lib/utils";

export default function PropertyTenancy() {
  const data = getServiceBySlug("property-tenancy")!;

  const problems = [
    {
      title: "Tenant Disputes",
      desc: "Disagreements over rent hikes, maintenance responsibilities, or lease renewals that escalate due to your absence.",
      icon: Users
    },
    {
      title: "Encroachment",
      desc: "Vacant plots or apartments targeted by local elements attempting to alter boundaries or occupy land illegally.",
      icon: MapPin
    },
    {
      title: "Maintenance Issues",
      desc: "Structural damage, plumbing leaks, or electrical failures that go unnoticed, leading to massive devaluation.",
      icon: Wrench
    }
  ];

  const handleItems = [
    { title: "Tenant Verification", desc: "Rigorous background checks and formal police verification for every new occupant." },
    { title: "Rent Coordination", desc: "Automated collection monitoring and structured escrow management for NRI landlords." },
    { title: "Property Inspections", desc: "Quarterly physical site visits with 360° photo and video reporting sent to your dashboard." },
    { title: "Municipal Issues", desc: "Handling House Tax assessments, utility transfers, and responses to local body notices." }
  ];

  const scenarios = [
    { 
      title: "Tenant Stops Paying", 
      desc: "When monthly rent ceases and tenants become unresponsive, requiring professional physical intervention and legal notices." 
    },
    { 
      title: "Property Left Vacant", 
      desc: "Ensuring high-security locks, regular cleaning, and visible 'Private Property' signage to deter unauthorized interest." 
    }
  ];

  const emergencyResponse = [
    { title: "Illegal Occupation", desc: "Immediate physical and legal deployment to secure the perimeter and file formal police diaries." },
    { title: "Utility Failure", desc: "Rapid coordination with municipal departments to resolve major electrical or water system collapses." }
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Hero (Dark) */}
      <div className="section-dark">
        <PageHeader
          title="Protect Your Property While You Live Abroad"
          subtitle="Moving beyond fragmented agents to institutional-grade stewardship for your Indian real estate."
          breadcrumbs={[
            { label: "Practice Areas", href: "/services" },
            { label: "Property & Tenancy" },
          ]}
        />
      </div>

      {/* 2. Problems Section (Light) */}
      <section className="section-padding section-light">
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-20"
          >
            <span className="accent-label text-red-500/80">Asset Vulnerabilities</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">Risks of <br /><span className="text-[#1A1A1A]/80 italic">Remote Management.</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {problems.map((p, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="premium-card p-10 bg-white border border-black/5 hover:border-red-500/30 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <p.icon className="w-6 h-6 text-red-500/80 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-red-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. What We Handle (Dark) */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={elegantFadeUp}
            >
              <span className="accent-label text-accent">Our Stewardship Scope</span>
              <h2 className="section-title text-[#FDFCFB] mb-8">Comprehensive <br /><span className="text-gradient-gold italic">Estate Management.</span></h2>
              <p className="text-xl text-white/90 font-light mb-12 leading-relaxed">
                We replace unreliable local agents with a structured, professional system. 
                We serve as your physical liaison in India, ensuring your property 
                remains secure, compliant, and profitable.
              </p>
              
              <div className="space-y-6">
                {handleItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-6 premium-card bg-white/[0.02] border-white/5 hover:border-accent/20 transition-all group shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-all">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-xs text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={elegantFadeUp}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
                <img 
                  src="/attached_assets/image_1764307200659.png" 
                  alt="Property oversight" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-10 glass-panel border-accent/20 backdrop-blur-3xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">Authorized Fiduciary Protocol</span>
                  </div>
                  <p className="text-white text-lg font-serif italic leading-relaxed">"Establishing physical presence to ensure your assets are guarded 24/7."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Common Scenarios (Light) */}
      <section className="section-padding section-light">
        <div className="max-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-20"
          >
            <span className="accent-label text-accent">Scenarios We Resolve</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">Restoring <br /><span className="text-gradient-gold italic">Asset Control.</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-2 gap-10"
          >
            {scenarios.map((s, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="text-left group p-10 premium-card bg-white border border-black/5 hover:border-accent/40 shadow-sm transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-[#FDFCFB] border border-black/5 flex items-center justify-center mb-8 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all shadow-inner">
                  <Search className="w-8 h-8 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-[#1A1A1A]/90 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Emergency Response (Dark) */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="max-w-5xl mx-auto vault-surface p-12 md:p-24 rounded-[4rem] text-center bg-[#050914]">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <Zap className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCFB] mb-8">Rapid <span className="text-red-500 italic">Response.</span></h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Critical property failures or illegal attempts to occupy land require 
              immediate physical presence. Our unit secures your assets within 48 hours.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {emergencyResponse.map((e, i) => (
                <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl text-left group hover:border-red-500/30 transition-all shadow-inner">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-6 h-6 text-red-500/40 group-hover:text-red-500 transition-colors" />
                    <h4 className="text-xl font-medium text-white group-hover:text-red-500 transition-colors">{e.title}</h4>
                  </div>
                  <p className="text-base text-white/80 font-light leading-relaxed italic">"{e.desc}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Plan Coverage (Light) */}
      <section className="section-padding section-light">
        <div className="max-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-24"
          >
            <span className="accent-label text-accent">Strategic Tiers</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">Service <span className="text-gradient-gold italic">Coverage.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                tier: "Essential Care", 
                items: data.tierCoverage.essential,
                bestFor: "Basic house tax guidance & property document audits."
              },
              { 
                tier: "Comprehensive", 
                items: data.tierCoverage.comprehensive,
                bestFor: "One property oversight & tenant management.",
                highlight: true
              },
              { 
                tier: "Premium Legacy", 
                items: data.tierCoverage.premiumLegacy,
                bestFor: "Full multi-asset portfolio oversight & management."
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-10 rounded-[2.5rem] border flex flex-col h-full transition-all duration-500 shadow-sm",
                  plan.highlight 
                    ? "bg-gradient-to-b from-[#050914] to-[#020409] border-accent/40 shadow-[0_0_50px_rgba(207,160,82,0.15)] ring-1 ring-accent/20 scale-[1.05] z-10" 
                    : "bg-white border-black/5 hover:border-accent/40"
                )}
              >
                <h3 className={cn(
                  "text-2xl font-serif mb-4",
                  plan.highlight ? "text-white" : "text-[#1A1A1A]"
                )}>{plan.tier}</h3>
                <p className={cn(
                  "text-xs mb-10 leading-relaxed uppercase tracking-widest font-bold",
                  plan.highlight ? "text-accent/80" : "text-[#1A1A1A]/90"
                )}>{plan.bestFor}</p>
                
                <div className="space-y-6 flex-1 mb-12">
                  {plan.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 className={cn(
                        "w-5 h-5 mt-0.5 shrink-0",
                        plan.highlight ? "text-accent" : "text-black/20"
                      )} />
                      <span className={cn(
                        "text-[14px] font-light leading-snug",
                        plan.highlight ? "text-white/80" : "text-[#1A1A1A]/90"
                      )}>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/pricing">
                  <button className={cn(
                    "w-full py-5 text-[11px] font-mono uppercase tracking-[0.2em] font-bold rounded-full transition-all",
                    plan.highlight 
                      ? "bg-accent text-black hover:shadow-[0_0_30px_rgba(207,160,82,0.4)]" 
                      : "border border-accent/30 text-accent hover:bg-accent/10"
                  )}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section (Dark) */}
      <section className="section-padding section-dark text-center border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)]" />
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto"
          >
            <span className="accent-label text-accent">Initiate Stewardship</span>
            <h2 className="display-title mb-10 !text-4xl md:!text-6xl text-[#FDFCFB]">
              Ready to Secure Your <br />
              <span className="text-gradient-gold italic">Indian Property Portfolio?</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Book a confidential 30-minute review session. We will evaluate your family's 
              real estate risks and demonstrate our professional stewardship roadmap.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.15)]">
                <span>Book Private Review</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


