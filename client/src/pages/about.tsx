import PageHeader from "@/layouts/PageHeader";
import WhyNRITrustSection from "@/components/WhyNRITrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Shield, Users, Globe, Award } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Shield, number: "FEMA Compliant", label: "100% Legal Operations" },
    { icon: Users, number: "200+", label: "NRI Families Served" },
    { icon: Globe, number: "40+", label: "Countries Covered" },
    { icon: Award, number: "Since 2020", label: "5+ Years Experience" },
  ];

  return (
    <>
      <PageHeader
        title="About NRI Trust"
        subtitle="Your trusted partner for financial and legal advisory — bridging the distance for NRIs worldwide."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-[hsl(180,50%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(180_45%_16%_/_0.3)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg md:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-light">
              NRIs work hard abroad to build a better life — but managing financial, legal, and property matters in India from overseas is a constant source of stress. We exist to eliminate that burden. One dedicated team, one point of contact, complete peace of mind.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.05]"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={elegantFadeUp}
                  className="bg-[hsl(180,50%,8%)] p-8 text-center hover:bg-white/[0.02] transition-colors duration-500"
                >
                  <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.06] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-5 h-5 text-amber-400/60" />
                  </div>
                  <div className="text-xl font-mono font-bold text-white mb-1">{item.number}</div>
                  <div className="text-sm text-white/35">{item.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <WhyNRITrustSection />
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-20 bg-[hsl(180,50%,8%)] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(38_85%_55%_/_0.06)_0%,transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
            Ready to Start
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Join 200+ NRI Families Who Trust Us
          </h2>
          <p className="text-lg text-white/40 mb-8 font-light">
            Book a complimentary review session and see how we can help your family.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-white px-8 py-6 text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all">
              Book Free Review Session
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
