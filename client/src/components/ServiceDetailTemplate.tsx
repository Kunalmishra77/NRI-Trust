import { Link } from "wouter";
import { ArrowRight, AlertTriangle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import type { ServiceData } from "@/data/services";

interface ServiceDetailTemplateProps {
  data: ServiceData;
}

export default function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
  return (
    <>
      <PageHeader
        title={data.title}
        subtitle={data.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.shortTitle },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="flex items-start gap-6"
          >
            <div className={`w-16 h-16 ${data.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <data.icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 md:py-24 bg-[hsl(30,15%,92%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What We Handle</h2>
            <p className="text-muted-foreground text-lg font-light">Comprehensive coverage for all your {data.shortTitle.toLowerCase()} needs.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={elegantFadeUp}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="font-mono text-xs text-primary/30 block mb-2">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
              Real Situations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Common Scenarios</h2>
            <p className="text-muted-foreground text-lg font-light">Real-world situations where NRIs need our help.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {data.scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                variants={elegantFadeUp}
                className="bg-white rounded-2xl p-8 border border-border/30 shadow-sm"
              >
                <span className="text-4xl md:text-5xl font-mono font-bold text-primary/[0.07] block leading-none mb-3 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-bold text-lg mb-3 text-foreground">{scenario.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{scenario.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 md:py-20 bg-red-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="bg-white rounded-2xl p-8 md:p-10 border border-red-100 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground">Emergencies We Handle</h2>
            </div>
            <ul className="space-y-3">
              {data.emergencies.map((emergency, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/70">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <span>{emergency}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tier Coverage */}
      <section className="py-16 md:py-24 bg-[hsl(30,15%,92%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
              Plan Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What's Included in Each Plan</h2>
            <p className="text-muted-foreground text-lg font-light">See how {data.shortTitle.toLowerCase()} coverage scales with your plan.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {([
              { name: "Essential Care", items: data.tierCoverage.essential, color: "border-border/50" },
              { name: "Comprehensive", items: data.tierCoverage.comprehensive, color: "border-amber-500" },
              { name: "Premium Legacy", items: data.tierCoverage.premiumLegacy, color: "border-primary" },
            ] as const).map((tier) => (
              <motion.div
                key={tier.name}
                variants={elegantFadeUp}
                className={`bg-white rounded-xl p-6 md:p-8 border-2 ${tier.color} shadow-sm`}
              >
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">{tier.name}</h3>
                <ul className="space-y-3">
                  {tier.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/5">
                View Full Pricing Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[hsl(180,50%,10%)] to-[hsl(180,45%,14%)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(38_85%_55%_/_0.1)_0%,transparent_60%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="max-w-3xl mx-auto px-4 relative z-10"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
            Ready to Start
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Help With {data.shortTitle}?
          </h2>
          <p className="text-lg text-white/50 mb-8 font-light">
            Book a free review session and let us assess your {data.shortTitle.toLowerCase()} needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-white px-8 py-6 text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all">
              Book Free Review Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
