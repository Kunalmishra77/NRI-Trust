import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AnxietySection from "@/components/AnxietySection";
import ComparisonSection from "@/components/ComparisonSection";
import ServiceEcosystem from "@/components/ServiceEcosystem";
import EmergencyTimeline from "@/components/EmergencyTimeline";
import HowItWorksGSAP from "@/components/HowItWorksGSAP";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import KnowledgeHubSection from "@/components/KnowledgeHubSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { ArrowRight, Globe } from "lucide-react";

function PricingPreview() {
  const tiers = [
    { name: "Essential", price: "₹12,000", desc: "Foundational compliance and insurance coordination.", highlight: false },
    { name: "Comprehensive", price: "₹24,000", desc: "Full property oversight and bank KYC liaison.", highlight: true },
    { name: "Legacy", price: "₹36,000", desc: "Complete fiduciary stewardship and succession planning.", highlight: false }
  ];

  return (
    <section className="py-20 bg-[#050814] relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      <div className="max-container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="text-center mb-16">
          <span className="accent-label text-[#D4AF37]">Engagement Models</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC]">Private Care <span className="text-white/40 italic">Plans.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-container">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col transition-all duration-700 hover:-translate-y-3 ${tier.highlight ? 'bg-gradient-to-b from-[#11182A] to-[#0A0F1A] border-accent/30 shadow-[0_30px_60px_rgba(212,175,55,0.1)] ring-1 ring-accent/20 scale-[1.05] z-10' : 'premium-card bg-[#0B101E]/50'}`}
            >
              {tier.highlight && <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold mb-8">Recommended Plan</div>}
              {!tier.highlight && <div className="h-8 mb-8" />}
              <h3 className="text-3xl font-serif text-[#F5F3EC] mb-4">{tier.name}</h3>
              <p className="text-[15px] text-white/50 font-light mb-10 flex-1 leading-relaxed">{tier.desc}</p>
              <div className="text-4xl font-mono text-[#F5F3EC] mb-10 border-b border-white/5 pb-10">{tier.price}<span className="text-sm text-white/40">/mo</span></div>
              <Link href="/pricing">
                <button className={`w-full py-4 text-[11px] font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-500 ${tier.highlight ? 'bg-gradient-to-r from-accent to-[#F3E5AB] text-[#050814] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                  Review Framework
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#050814] relative overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Centered Background Globe */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <Globe className="w-[800px] h-[800px] text-accent animate-slow-spin" strokeWidth={0.3} />
      </div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-container text-center relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={elegantFadeUp} 
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-accent/40" />
            <span className="accent-label !mb-0 text-accent text-[10px]">Strategic Action</span>
            <div className="h-px w-10 bg-accent/40" />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8 leading-[1.1] tracking-tight">
            Protect Your Parents’ <br />
            <span className="text-gradient-gold italic">Financial Legacy.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards institutional-grade stewardship. 
            Book your private strategy audit with our executive team.
          </p>

          <div className="flex justify-center">
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[280px] flex items-center justify-center gap-4 group h-16 text-lg shadow-[0_0_40px_rgba(207,160,82,0.12)]">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 opacity-40">
            <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white font-bold">Absolute Discretion</div>
            <div className="w-1 h-1 rounded-full bg-accent" />
            <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white font-bold">Institutional Access</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050814]">
      <HeroSection />
      <TrustStrip />
      <AnxietySection />
      <ComparisonSection />
      <ServiceEcosystem />
      <EmergencyTimeline />
      <HowItWorksGSAP />
      <SuccessStoriesSection />
      <KnowledgeHubSection />
      <PricingPreview />
      <FinalCTA />
    </main>
  );
}
