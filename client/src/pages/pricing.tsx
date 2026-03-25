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
  <main className="min-h-screen">
   {/* SECTION 1: DARK HERO */}
   <div className="section-dark">
    <PageHeader
     title="Engagement Models"
     subtitle="Transparent, retainer-based pricing for consolidated family stewardship. Recommended after your private review."
     breadcrumbs={[{ label: "Pricing & Plans" }]}
    />
   </div>
   
   {/* SECTION 2: LIGHT PRICING */}
   <PricingSection theme="light" />
   
   {/* SECTION 3: DARK HOW IT WORKS */}
   <HowItWorksSection theme="dark" />
   
   {/* SECTION 4: LIGHT FAQ */}
   <FAQSection theme="light" />

   {/* SECTION 5: DARK FINAL CTA */}
   <section className="section-padding section-dark border-t border-white/[0.05]">
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
       <span className="accent-label !mb-0 text-accent">Ready to Engage</span>
       <div className="h-[1px] w-12 bg-accent/40" />
      </div>
      <h2 className="display-title mb-10 text-[#FDFCFB]">
       Begin Your Family's <br />
       <span className="text-gradient-gold italic">Stewardship Audit.</span>
      </h2>
      <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
       Initiate a confidential 30-minute review session. We'll audit your current India-based risks and recommend the right tier for your family.
      </p>
      
      <div className="flex justify-center">
       <Link href="/contact">
        <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 group shadow-[0_0_40px_rgba(207,160,82,0.2)]">
         <span>Book Private Review Session</span>
         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
      </div>
      
      <div className="mt-16 flex items-center justify-center gap-3">
       <ShieldCheck className="w-4 h-4 text-accent" />
       <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">NO COMMITMENTS • STRICTLY CONFIDENTIAL</span>
      </div>
     </motion.div>
    </div>
   </section>
  </main>
 );
}

