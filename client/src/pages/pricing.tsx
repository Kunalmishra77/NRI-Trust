import PageHeader from "@/layouts/PageHeader";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Engagement Models"
        subtitle="Transparent, retainer-based pricing for consolidated family stewardship. Recommended after your private review."
        breadcrumbs={[{ label: "Pricing & Plans" }]}
      />
      
      <PricingSection />
      
      <HowItWorksSection />
      
      <FAQSection />

      {/* ─── FINAL CTA ─── */}
      <section className="section-padding bg-[#050806] relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(160_30%_15%_/_0.2)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-container text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent/40" />
              <span className="accent-label !mb-0">Ready to Engage</span>
              <div className="h-[1px] w-12 bg-accent/40" />
            </div>
            <h2 className="display-title mb-10">
              Begin Your Family's <br />
              <span className="text-gradient-gold italic">Stewardship Audit.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Initiate a confidential 30-minute review session. We'll audit your current India-based risks and recommend the right tier for your family.
            </p>
            
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group">
                <span>Book Private Review Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <div className="mt-16 flex items-center justify-center gap-3 opacity-30">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">NO COMMITMENTS • STRICTLY CONFIDENTIAL</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
