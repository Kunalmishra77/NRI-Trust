import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Zap, 
  FileText, 
  ClipboardCheck, 
  AlertCircle, 
  Info,
  CheckCircle2,
  XCircle,
  Activity,
  FileSearch,
  ShieldPlus
} from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Insurance() {
  const data = getServiceBySlug("insurance")!;

  const problems = [
    {
      title: "Claim Rejection",
      desc: "Insurance companies often reject hospital claims because of small paperwork mistakes or missing information.",
      icon: XCircle
    },
    {
      title: "Policy Lapses",
      desc: "Parents forget to renew their policy on time, and they lose years of waiting-period benefits for serious illnesses.",
      icon: AlertCircle
    },
    {
      title: "Wrong Documents",
      desc: "Mismatch between hospital records and policy papers causes delays in getting bills cleared during emergencies.",
      icon: FileText
    }
  ];

  const services = [
    { title: "Policy Renewals", desc: "We track all renewal dates and make sure health and life insurance never expires." },
    { title: "Claims Support", desc: "We help file claims at the hospital and follow up until the money is received." },
    { title: "Coverage Review", desc: "We check if existing insurance is enough for today's hospital costs and recommend changes." },
    { title: "Top-up Advice", desc: "We suggest affordable top-up plans so your parents have better coverage without high premiums." }
  ];

  const scenarios = [
    {
      title: "Hospitalization Claim",
      desc: "Your parent is in the hospital and you are abroad. We handle the cashless claim process and make sure the insurance company approves everything."
    },
    {
      title: "Multiple Policies",
      desc: "Your parents have policies from different companies. We coordinate between all of them to get the maximum claim amount."
    }
  ];

  const emergency = [
    { title: "Claim Rejection", desc: "If a valid claim is rejected while your parent is in the hospital, we immediately step in and resolve it with the insurance company." }
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Hero (Dark) */}
      <div className="section-dark">
        <PageHeader
          title="Managing Insurance for Your Parents in India"
          subtitle="We review your parents' insurance, identify gaps, and make sure claims are processed when it matters most."
          breadcrumbs={[
            { label: "Practice Areas", href: "/services" },
            { label: "Insurance" },
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
            <span className="accent-label text-red-500/80">Common Problems</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">Why Insurance <br /><span className="text-[#1A1A1A]/80 italic">Often Fails.</span></h2>
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

      {/* 3. Services Section (Dark) */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={elegantFadeUp}
            >
              <span className="accent-label text-accent">What We Do</span>
              <h2 className="section-title text-[#FDFCFB] mb-8">Complete <br /><span className="text-gradient-gold italic">Insurance Management.</span></h2>
              <p className="text-xl text-white/50 font-light mb-12 leading-relaxed">
                We take care of your parents' entire insurance — from checking if coverage is enough,
                to renewing policies on time, to filing claims when they are hospitalized.
              </p>
              
              <div className="space-y-6">
                {services.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-6 premium-card bg-white/[0.02] border-white/5 hover:border-accent/20 transition-all group shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-all">
                      <ShieldPlus className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
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
                  src="/attached_assets/image_1764309114215.png" 
                  alt="Insurance management" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-10 glass-panel border-accent/20 backdrop-blur-3xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">Insurance Protection Active</span>
                  </div>
                  <p className="text-white text-lg font-serif italic leading-relaxed">"Ensuring protection works when your parents need it most."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Scenarios Section (Light) */}
      <section className="section-padding section-light">
        <div className="max-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-20"
          >
            <span className="accent-label text-accent">Situations We Handle</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">When Your Parents <br /><span className="text-gradient-gold italic">Need Help Most.</span></h2>
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
                  <Heart className="w-8 h-8 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-[#1A1A1A]/90 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Emergency Section (Dark) */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="max-w-5xl mx-auto vault-surface p-12 md:p-24 rounded-[4rem] text-center bg-[#050914]">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <Zap className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCFB] mb-8">Emergency <span className="text-red-500 italic">Response.</span></h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              When an insurance claim is rejected while your parent is in the hospital,
              we step in immediately and work with the hospital and insurance company to fix it.
            </p>
            
            <div className="grid md:grid-cols-1 max-w-2xl mx-auto">
              {emergency.map((e, i) => (
                <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl text-left group hover:border-red-500/30 transition-all shadow-inner">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity className="w-6 h-6 text-red-500/40 group-hover:text-red-500 transition-colors" />
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
            <span className="accent-label text-accent">Our Plans</span>
            <h2 className="section-title text-[#1A1A1A] mb-6">What Each Plan <span className="text-gradient-gold italic">Covers.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Essential Care",
                items: data.tierCoverage.essential,
                bestFor: "Basic health & life insurance renewals."
              },
              {
                tier: "Comprehensive",
                items: data.tierCoverage.comprehensive,
                bestFor: "Regular policy check-ups & claims support.",
                highlight: true
              },
              {
                tier: "Premium Legacy",
                items: data.tierCoverage.premiumLegacy,
                bestFor: "Complete insurance management for the whole family."
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
                  plan.highlight ? "!text-white" : "text-[#1A1A1A]"
                )}>{plan.tier}</h3>
                <p className={cn(
                  "text-xs mb-10 leading-relaxed uppercase tracking-widest font-bold",
                  plan.highlight ? "!text-accent" : "text-[#1A1A1A]/90"
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
                        plan.highlight ? "!text-white" : "text-[#1A1A1A]/90"
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
            <span className="accent-label text-accent">Get Started</span>
            <h2 className="display-title mb-10 !text-4xl md:!text-6xl text-[#FDFCFB]">
              Ready to Protect Your <br />
              <span className="text-gradient-gold italic">Parents' Insurance?</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. We will check your parents' current insurance
              and show you exactly what needs to be fixed.
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


