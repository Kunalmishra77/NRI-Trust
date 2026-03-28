import PageHeader from "@/layouts/PageHeader";
import ProcessTimeline from "@/components/ProcessTimeline";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function HowItWorks() {
 return (
  <main className="min-h-screen">
   {/* SECTION 1: DARK HERO */}
   <div className="section-dark">
    <PageHeader
     title="Operational Model"
     subtitle="A secure, frictionless process designed specifically for global NRIs."
     breadcrumbs={[{ label: "The Firm" }, { label: "How It Works" }]}
    />
   </div>

   {/* SECTION 2: LIGHT TIMELINE */}
   <ProcessTimeline theme="light" />

   {/* SECTION 3: DARK HOW IT WORKS */}
   <HowItWorksSection theme="dark" />

   {/* SECTION 4: LIGHT FAQ */}
   <FAQSection theme="light" />

   {/* SECTION 5: DARK FINAL CTA */}
   <section className="section-padding section-dark border-t border-white/[0.05] text-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(160_30%_15%_/_0.2)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={elegantFadeUp}
     >
      <div className="flex items-center justify-center gap-4 mb-8">
       <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent/50" />
       <span className="accent-label !mb-0 text-accent">Begin The Process</span>
       <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
      </div>
      <h2 className="display-title !text-4xl md:!text-6xl text-[#FDFCFB] mb-10 leading-tight">
       Start Protecting Your <br className="hidden md:block" />
       <span className="text-gradient-gold italic">Parents.</span>
      </h2>
      <p className="text-xl text-white/50 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
       The first step is a confidential, no-obligation discovery session to map your family's assets and assess immediate risks.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.15)]">
        <span>Book Discovery Session</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
       </button>
      </Link>
     </motion.div>
    </div>
   </section>
  </main>
 );
}

