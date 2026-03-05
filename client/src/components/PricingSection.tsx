import { Button } from "@/components/ui/button";
import { ShieldCheck, Star } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function PricingSection() {
  const tiers = [
    {
      name: "Essential Care",
      price: "₹12,000",
      period: "/ month",
      frequency: "Annual Review · 1×/year",
      popular: false,
      prose: "Ideal for NRIs with straightforward needs. Covers annual KYC tracking for up to 2 bank accounts, yearly legal document review, quarterly property inspections with photo reports, annual insurance portfolio review, and ITR filing for one person. Includes 24/7 emergency response and WhatsApp support.",
    },
    {
      name: "Comprehensive",
      price: "₹24,000",
      period: "/ month",
      frequency: "Semi-Annual Review · 2×/year",
      popular: true,
      prose: "Everything in Essential Care, plus expanded coverage for active needs. KYC for up to 5 accounts, will drafting and PoA management, monthly property inspections with tenant management, health insurance claim processing, ITR for 2 persons with TDS tracking, utility bill management, and priority emergency services.",
    },
    {
      name: "Premium Legacy",
      price: "₹36,000",
      period: "/ month",
      frequency: "Quarterly Review · 4×/year",
      popular: false,
      prose: "Everything in Comprehensive, plus white-glove service for complex family estates. Unlimited accounts, full estate and succession planning, multiple property management, IRDAI dispute resolution, DTAA optimization, full family ITR filing, a dedicated relationship manager, and cross-border legal advisory.",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-[hsl(180,50%,8%)] overflow-hidden py-24 md:py-32"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(38_85%_55%_/_0.04)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,hsl(180_45%_16%_/_0.2)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-white">
            Choose the Plan Your Family Needs
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto font-light">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05] mb-12"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={elegantFadeUp}
              className="relative flex flex-col"
            >
              <div
                className={`flex flex-col h-full p-8 md:p-10 transition-colors duration-300 ${
                  tier.popular
                    ? "bg-[hsl(180,48%,12%)]"
                    : "bg-[hsl(180,50%,8%)] hover:bg-white/[0.015]"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-amber-500 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Amber top accent on popular */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                )}

                {/* Tier name */}
                <div className="mb-1">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-amber-500/40 block mb-2">
                    {tier.frequency}
                  </span>
                  <h3 className={`text-xl font-serif font-bold ${tier.popular ? "text-white" : "text-white/70"}`}>
                    {tier.name}
                  </h3>
                </div>

                {/* Price */}
                <div className={`py-6 mb-6 border-b ${tier.popular ? "border-white/10" : "border-white/[0.05]"}`}>
                  <div className={`text-4xl font-mono font-bold ${tier.popular ? "text-amber-400" : "text-white/60"}`}>
                    {tier.price}
                    <span className={`text-sm font-normal ml-1 ${tier.popular ? "text-white/40" : "text-white/25"}`}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Prose */}
                <p className={`text-sm leading-relaxed flex-1 mb-8 ${
                  tier.popular ? "text-white/55" : "text-white/30"
                }`}>
                  {tier.prose}
                </p>

                {/* CTA */}
                <Link href="/contact" className="w-full mt-auto">
                  <Button
                    className={`w-full py-6 text-sm font-bold transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-accent to-amber-500 text-white shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
                        : "bg-white/[0.04] border border-white/[0.08] text-white/50 hover:bg-white/[0.08] hover:text-white/70"
                    }`}
                    variant="ghost"
                    size="lg"
                  >
                    Select {tier.name}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left py-8 px-10 rounded-xl border border-white/[0.05] bg-white/[0.02] max-w-2xl mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-amber-400/60" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-white/80 text-lg mb-1">30-Day Risk-Free Guarantee</h4>
            <p className="text-sm text-white/30 font-light">
              Not satisfied in the first month? Full refund, no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
