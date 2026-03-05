import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(180,50%,10%)] via-[hsl(180,45%,14%)] to-[hsl(180,50%,12%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(38_85%_55%_/_0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
            Ready to Start
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to Protect Your Family's Legacy?
          </h2>
          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light">
            Book a complimentary review session. We'll assess your situation and recommend the right plan — no pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-7 bg-gradient-to-r from-accent to-amber-500 text-white shadow-2xl shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:-translate-y-1"
              >
                Book Free Review Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-7 glass-dark border-white/10 text-white hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
