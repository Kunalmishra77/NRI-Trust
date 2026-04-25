import HeroSection from "@/components/HeroSection";
import AnxietySection from "@/components/AnxietySection";
import ComparisonSection from "@/components/ComparisonSection";
import ServiceEcosystem from "@/components/ServiceEcosystem";
import EmergencyTimeline from "@/components/EmergencyTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import KnowledgeHubSection from "@/components/KnowledgeHubSection";
import FinalCTA from "@/components/FinalCTA";
import GlobalStewardshipScroll from "@/components/GlobalStewardshipScroll";

export default function Home() {
  return (
    <main className="bg-[#FDFCFB] min-h-screen relative">
      {/* 1. Immersive Entry */}
      <HeroSection />

      {/* 2. Typographic Storytelling */}
      <AnxietySection />

      {/* 3. Global Protection */}
      <GlobalStewardshipScroll />

      {/* 4. The Evolution / Comparison */}
      <div className="relative z-10 bg-[#FDFCFB]">
        <ComparisonSection />
      </div>

      {/* 4. Service Ecosystem */}
      <ServiceEcosystem />

      {/* 5. Emergency Steps */}
      <EmergencyTimeline />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. The Private Library */}
      <KnowledgeHubSection />

      {/* 8. Strategic Action */}
      <FinalCTA />
    </main>
  );
}

