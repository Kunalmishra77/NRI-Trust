import { Calendar, FileText, Handshake, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Free Review Session",
      description: "30-minute video call in your time zone. We assess your financial and legal situation — no sales pressure, no commitment.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Tier Recommendation",
      description: "Within 24 hours, receive a personalized proposal. Choose Essential, Comprehensive, or Premium Legacy.",
    },
    {
      icon: Handshake,
      number: "03",
      title: "Onboarding",
      description: "Meet your relationship manager via WhatsApp and video. Share documents and get first actions within 7 days.",
    },
    {
      icon: Smartphone,
      number: "04",
      title: "Ongoing Support",
      description: "Regular review calls, proactive compliance tracking, and a 24/7 emergency team on standby.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[hsl(180,50%,8%)] overflow-hidden py-24 md:py-32"
    >
      {/* Radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(180_45%_16%_/_0.35)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,hsl(38_85%_55%_/_0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight text-white">
            From Overwhelmed to{" "}
            <span className="text-amber-400">Organized</span> in 4 Steps
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light">
            Getting started is simple. We handle the complexity so you don't have to.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/5"
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={elegantFadeUp}
                className="bg-[hsl(180,50%,8%)] p-8 md:p-10 flex flex-col relative group hover:bg-white/[0.02] transition-colors duration-500"
              >
                {/* Step number + amber line above */}
                <div className="mb-8">
                  <div className="w-8 h-px bg-amber-500/30 mb-4 group-hover:bg-amber-500/70 group-hover:w-14 transition-all duration-500" />
                  <span className="font-mono text-4xl font-bold text-white/[0.06] leading-none select-none">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-amber-500/20 group-hover:bg-amber-500/5 transition-all duration-500">
                  <IconComponent className="w-5 h-5 text-amber-400/60 group-hover:text-amber-400 transition-colors duration-500" />
                </div>

                {/* Text */}
                <h3 className="font-serif font-bold text-lg text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Step connector line (not on last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[4.5rem] right-0 w-px h-8 bg-white/[0.04]" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-amber-500 text-white px-10 py-7 text-base font-bold shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all rounded-xl"
            >
              Get Started Today — It's Free
            </Button>
          </Link>
          <p className="text-sm text-white/25 mt-4 font-medium">
            No commitment required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
