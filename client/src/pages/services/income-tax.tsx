import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Receipt, 
  ShieldCheck, 
  AlertTriangle, 
  Calculator, 
  FileText, 
  Activity, 
  CheckCircle2,
  XCircle,
  Zap,
  TrendingUp,
  Clock,
  History
} from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";

export default function IncomeTax() {
  const data = getServiceBySlug("income-tax")!;

  const challenges = [
    {
      title: "Rental Income",
      desc: "Managing TDS on rent and ensuring correct reporting of property income to avoid compliance gaps.",
      icon: TrendingUp
    },
    {
      title: "Tax Notices",
      desc: "Responding to automated scrutiny notices or show-cause orders from the Income Tax department.",
      icon: AlertTriangle
    },
    {
      title: "Refund Delays",
      desc: "Navigating the administrative hurdles that cause significant delays in receiving legitimate tax refunds.",
      icon: Clock
    }
  ];

  const services = [
    { title: "ITR Filing", desc: "Precise income tax return filing covering all Indian income sources." },
    { title: "Notice Response", desc: "Expert drafting and submission of responses to departmental inquiries." },
    { title: "Refund Follow-up", desc: "Persistent liaison with the department to expedite blocked or delayed refunds." },
    { title: "Capital Gains Guidance", desc: "Strategic advice on tax-efficient reporting of property or equity sales." }
  ];

  const scenarios = [
    { 
      title: "Old Tax Notices Appearing", 
      desc: "When a notice regarding a transaction from years ago suddenly appears in the portal, requiring immediate historical data mapping." 
    },
    { 
      title: "Incorrect TDS on Rent", 
      desc: "When tenants fail to deposit correct TDS, creating a liability that needs professional rectification with the department." 
    }
  ];

  const emergency = [
    { title: "Urgent Tax Notice", desc: "Immediate representation and response filing for high-priority or time-sensitive tax notices." },
    { title: "Filing Deadline", desc: "Rapid processing for clients who have missed or are nearing critical statutory deadlines." }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Stay Compliant With Indian Tax Laws"
        subtitle="Moving beyond fragmented agents to institutional-grade stewardship for NRI family units."
        breadcrumbs={[
          { label: "Practice Areas", href: "/services" },
          { label: "Income Tax" },
        ]}
      />

      {/* 1. Challenges Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-20"
          >
            <span className="accent-label text-red-500/80">Compliance Risks</span>
            <h2 className="section-title mb-6">Navigating <br /><span className="text-muted-foreground italic text-3xl md:text-4xl">Tax Complexity.</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {challenges.map((c, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="glass-card p-10 border-red-500/10 hover:border-red-500/30 transition-all group bg-red-500/[0.01]">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <c.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="section-padding bg-[#050806] border-y border-white/[0.05]">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={elegantFadeUp}
            >
              <span className="accent-label text-accent">Institutional Compliance</span>
              <h2 className="section-title mb-8">Comprehensive <br /><span className="text-gradient-gold italic">Tax Stewardship.</span></h2>
              <p className="body-large text-muted-foreground mb-12">
                We replace reactive filing with proactive stewardship. Our advisors map your 
                entire Indian income footprint to ensure complete compliance and defense 
                against algorithmic IT scrutiny.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {services.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-6 glass-card border-white/5 hover:border-accent/20 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-all">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
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
                  src="/attached_assets/image_1764305789793.png" 
                  alt="Tax compliance support" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-accent/20 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Authorized Tax Protocol</span>
                  </div>
                  <p className="text-white text-lg font-serif italic">"Building a clean tax footprint for your Indian family legacy."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Common Scenarios */}
      <section className="section-padding bg-background">
        <div className="max-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-20"
          >
            <span className="accent-label">Scenarios We Resolve</span>
            <h2 className="section-title mb-6">Complexity <br /><span className="text-gradient-gold italic">Simplified.</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-2 gap-12"
          >
            {scenarios.map((s, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="group glass-card p-12 border-white/5 hover:border-accent/20 transition-all flex flex-col h-full bg-white/[0.01]">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                  <History className="w-8 h-8 text-accent/60 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-bold">Strategic Resolution</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Emergency Section */}
      <section className="section-padding relative overflow-hidden bg-[#0A0F0D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />
        <div className="max-container relative z-10">
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-24 rounded-[4rem] border-red-500/10 shadow-[0_0_100px_rgba(239,68,68,0.05)] text-center">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-10">
              <Zap className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Crisis <span className="text-red-500 italic">Protocols.</span></h2>
            <p className="text-lg text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
              Urgent tax notices or account freezes require immediate expert intervention. 
              Our response unit represents your family to restore compliance and liquidity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {emergency.map((e, i) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl text-left group hover:border-red-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="w-5 h-5 text-red-500/40 group-hover:text-red-500 transition-colors" />
                    <h4 className="text-white font-medium">{e.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{e.desc}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Plan Coverage */}
      <section className="section-padding bg-background border-t border-white/[0.05]">
        <div className="max-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-24"
          >
            <span className="accent-label text-accent">Strategic Tiers</span>
            <h2 className="section-title mb-6">Service <span className="text-gradient-gold italic">Coverage.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                tier: "Essential Care", 
                items: data.tierCoverage.essential,
                bestFor: "Basic income tax filing & compliance guidance."
              },
              { 
                tier: "Comprehensive", 
                items: data.tierCoverage.comprehensive,
                bestFor: "Priority tax support & TDS reconciliation stewardship.",
                highlight: true
              },
              { 
                tier: "Premium Legacy", 
                items: data.tierCoverage.premiumLegacy,
                bestFor: "Full multi-asset tax management & notice resolution."
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[2.5rem] border flex flex-col h-full transition-all duration-500 ${
                  plan.highlight 
                    ? "bg-accent/[0.03] border-accent/40 shadow-[0_0_50px_rgba(207,160,82,0.1)] scale-105 z-10" 
                    : "glass-card border-white/5 hover:border-accent/20"
                }`}
              >
                <h3 className="text-2xl font-serif text-white mb-4">{plan.tier}</h3>
                <p className="text-xs text-muted-foreground mb-10 leading-relaxed uppercase tracking-widest font-bold">{plan.bestFor}</p>
                
                <div className="space-y-6 flex-1 mb-12">
                  {plan.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlight ? "text-accent" : "text-white/20"}`} />
                      <span className="text-[14px] text-white/70 font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/pricing">
                  <button className={`w-full py-4 text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-full transition-all ${
                    plan.highlight 
                      ? "bg-accent text-black hover:shadow-[0_0_30px_rgba(207,160,82,0.4)]" 
                      : "border border-accent/30 text-accent hover:bg-accent/5"
                  }`}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="section-padding bg-[#0A0F0D] text-center relative overflow-hidden">
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
            <h2 className="display-title mb-10 !text-4xl md:!text-6xl text-white">
              Ready to Secure Your <br />
              <span className="text-gradient-gold italic">Family's Tax Footprint?</span>
            </h2>
            <p className="body-large mb-16 text-muted-foreground max-w-2xl mx-auto">
              Book a confidential 30-minute review session. We will evaluate your family's 
              Indian tax risks and demonstrate our professional stewardship roadmap.
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
    </div>
  );
}
