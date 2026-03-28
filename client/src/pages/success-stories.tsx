import PageHeader from "@/layouts/PageHeader";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { ArrowRight, Trophy, Target, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { cn } from "@/lib/utils";

export default function SuccessStories() {
  const highlightStats = [
    { value: "₹250Cr+", label: "Property Monitored", icon: Trophy },
    { value: "450+", label: "Legal Disputes Prevented", icon: Target },
    { value: "100%", label: "Client Confidentiality", icon: ShieldCheck }
  ];

  const outcomes = [
    {
      category: "Taxation",
      title: "Tax Notice Resolved",
      problem: "A high-value Section 148 notice was issued for transactions dating back 6 years, which the NRI client was unaware of.",
      risk: "A potential penalty of ₹45L and the immediate freezing of all Indian NRO accounts.",
      help: "Our tax team reconstructed 6 years of financial history, established DTAA residency proof, and represented the client before the IT department.",
      result: "Liability reduced by 85%, and the case was closed without any bank account disruptions.",
      icon: TrendingUp
    },
    {
      category: "Property",
      title: "Tenant Eviction Managed",
      problem: "A long-term tenant in a Mumbai apartment stopped paying rent and refused to vacate, claiming 'local connections'.",
      risk: "A ₹4.2 Cr prime real estate asset being occupied indefinitely, leading to massive capital loss.",
      help: "We provided on-ground physical verification, initiated formal legal notices through our panel counsel, and negotiated a clean, documented exit.",
      result: "Full possession of the property restored to the family in 45 days without entering lengthy litigation.",
      icon: ShieldCheck
    },
    {
      category: "Insurance",
      title: "Insurance Claim Approved",
      problem: "A health insurance claim for a senior parent's heart surgery was rejected three times by the TPA citing 'pre-existing conditions'.",
      risk: "₹8.5L in urgent out-of-pocket medical expenses that the family had to bear unexpectedly.",
      help: "Our team reviewed the medical records and insurance policies, re-filed the claim with corrected hospital documentation, and escalated to the Ombudsman.",
      result: "The full claim amount was credited to the client's account within 14 days of our intervention.",
      icon: CheckCircle2
    },
    {
      category: "Banking",
      title: "Dormant Account Reactivated",
      problem: "An elderly parent's primary pension account was flagged as 'Dormant' due to a 3-year KYC lapse, blocking all withdrawals.",
      risk: "Complete loss of monthly liquidity for the parents and the risk of the account being transferred to the DEA fund.",
      help: "We acted as the family's physical proxy at the base branch, managed the fresh KYC documentation, and synchronized the mobile-linkage for net-banking.",
      result: "Account fully reactivated and digital access restored within 72 hours without the parent leaving their home.",
      icon: Trophy
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: DARK HERO */}
      <div className="section-dark">
        <PageHeader
          title="Case Outcomes"
          subtitle="Measurable results and restored control for global Indian families."
          breadcrumbs={[{ label: "The Firm", href: "/why-nri-trust" }, { label: "Success Stories" }]}
        />
      </div>

      {/* SECTION 2: LIGHT HIGHLIGHT STATS */}
      <section className="section-padding section-light">
        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlightStats.map((stat, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="premium-card p-10 text-center bg-white border border-black/5 hover:border-accent/40 shadow-sm transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-accent/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-2">{stat.value}</div>
                <div className="text-[12px] font-mono uppercase tracking-widest text-[#1A1A1A]/80 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: DARK CASE OUTCOMES GRID */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={luxuryStagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {outcomes.map((item, i) => (
              <motion.div 
                key={i} 
                variants={elegantFadeUp}
                className="group flex flex-col h-full premium-card bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-700 overflow-hidden shadow-2xl"
              >
                <div className="p-10 md:p-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-mono text-accent font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all shadow-inner">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-[#FDFCFB] mb-12 group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>

                  <div className="space-y-10 flex-1">
                    <div className="flex gap-6">
                      <div className="shrink-0 w-px h-full bg-red-500/20 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase tracking-widest text-red-500 block mb-2 font-bold">The Problem</span>
                        <p className="text-sm text-white/90 leading-relaxed italic">"{item.problem}"</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="shrink-0 w-px h-full bg-orange-500/20 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase tracking-widest text-orange-500 block mb-2 font-bold">What Was At Risk</span>
                        <p className="text-sm text-white/90 leading-relaxed">{item.risk}</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="shrink-0 w-px h-full bg-accent/20 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase tracking-widest text-accent block mb-2 font-bold">How NRI Trust Helped</span>
                        <p className="text-base text-white/90 font-light leading-relaxed">{item.help}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4 text-[#10B981]">
                      <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 shadow-inner">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase tracking-widest font-bold block opacity-90">Final Result</span>
                        <span className="text-lg font-serif font-medium">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LIGHT TESTIMONIALS */}
      <TestimonialsSection theme="light" />

      {/* SECTION 5: DARK FINAL CTA */}
      <section className="section-padding section-dark text-center border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(160_40%_15%_/_0.2)_0%,transparent_80%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto"
          >
            <span className="accent-label text-accent">Join Our Protected Families</span>
            <h2 className="display-title mb-10 text-[#FDFCFB]">
              Become Our Next <br />
              <span className="text-gradient-gold italic">Success Story.</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Don't wait for a crisis to get professional help. Book your private review session today.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-lg">
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

