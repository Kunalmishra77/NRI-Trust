import PageHeader from "@/layouts/PageHeader";
import FailureMatrix from "@/components/FailureMatrix";
import WhyNRITrustSection from "@/components/WhyNRITrustSection";
import NRIReality from "@/components/why-nri-trust/NRIReality";
import OperatingPrinciples from "@/components/why-nri-trust/OperatingPrinciples";
import DedicatedManager from "@/components/why-nri-trust/DedicatedManager";
import ClientOutcomes from "@/components/why-nri-trust/ClientOutcomes";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function WhyNRITrust() {
  return (
    <>
      {/* 1. Hero */}
      <PageHeader
        title="Why NRI Trust Exists"
        subtitle="Moving beyond fragmented agents to institutional-grade stewardship for NRI families."
        breadcrumbs={[{ label: "The Firm" }, { label: "Why NRI Trust" }]}
      />

      {/* 2. The NRI Reality */}
      <NRIReality />

      {/* 3. Fragmented Solutions Problem */}
      <FailureMatrix />

      {/* 4. The NRI Trust Model */}
      <WhyNRITrustSection />

      {/* 5. Our Operating Principles */}
      <OperatingPrinciples />

      {/* 6. Dedicated Manager Model */}
      <DedicatedManager />

      {/* 7. Client Outcomes */}
      <ClientOutcomes />

      {/* 8. Final CTA */}
      <section className="section-padding bg-[#0A0F0D] relative overflow-hidden border-t border-white/[0.05] text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(160_30%_15%_/_0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="accent-label !mb-0">Secure Your Legacy</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <h2 className="display-title !text-4xl md:!text-6xl text-white mb-10 leading-tight">
            Stop Leaving Your Assets <br className="hidden md:block" />
            <span className="text-gradient-gold italic">To Chance.</span>
          </h2>
          <p className="body-large mb-16 text-muted-foreground max-w-2xl mx-auto">
            Book a confidential 30-minute review session. We will evaluate your current India-based risks and demonstrate our professional stewardship roadmap.
          </p>
          <Link href="/contact">
            <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.15)]">
              <span>Book Private Review</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
