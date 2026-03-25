import PageHeader from "@/layouts/PageHeader";
import FailureMatrix from "@/components/FailureMatrix";
import WhyNRITrustSection from "@/components/WhyNRITrustSection";
import NRIReality from "@/components/why-nri-trust/NRIReality";
import OperatingPrinciples from "@/components/why-nri-trust/OperatingPrinciples";
import DedicatedManager from "@/components/why-nri-trust/DedicatedManager";
import ClientOutcomes from "@/components/why-nri-trust/ClientOutcomes";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function WhyNRITrust() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero (Dark) */}
      <div className="section-dark">
        <PageHeader
          title="Why NRI Trust Exists"
          subtitle="Moving beyond fragmented agents to institutional-grade stewardship for NRI families."
          breadcrumbs={[{ label: "The Firm" }, { label: "Why NRI Trust" }]}
        />
      </div>

      {/* 2. The NRI Reality (Light) */}
      <NRIReality theme="light" />

      {/* 3. Fragmented Solutions Problem (Dark) */}
      <FailureMatrix theme="dark" />

      {/* 4. The NRI Trust Model (Light) */}
      <WhyNRITrustSection theme="light" />

      {/* 5. Our Operating Principles (Dark) */}
      <div className="section-dark">
        <OperatingPrinciples />
      </div>

      {/* 6. Dedicated Manager Model (Light) */}
      <div className="section-light">
        <DedicatedManager />
      </div>

      {/* 7. Client Outcomes (Dark) */}
      <div className="section-dark">
        <ClientOutcomes />
      </div>

      {/* 8. Final CTA (Dark) */}
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
              <span className="accent-label !mb-0 text-accent">Secure Your Legacy</span>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
            </div>
            <h2 className="display-title !text-4xl md:!text-6xl text-white mb-10 leading-tight">
              Stop Leaving Your Assets <br className="hidden md:block" />
              <span className="text-gradient-gold italic">To Chance.</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Book a confidential 30-minute review session. We will evaluate your current India-based risks and demonstrate our professional stewardship roadmap.
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

