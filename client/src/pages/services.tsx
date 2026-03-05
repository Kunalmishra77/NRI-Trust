import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive financial and legal advisory for NRIs — from banking compliance to estate planning."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-20 md:py-28 bg-[hsl(180,50%,8%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,hsl(180_45%_16%_/_0.25)_0%,transparent_55%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={luxuryStagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.05]"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={elegantFadeUp}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-[hsl(180,50%,8%)] hover:bg-white/[0.02] transition-colors duration-500 p-8 h-full flex flex-col relative overflow-hidden cursor-pointer">
                    {/* Amber top line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-3 text-white/70 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/30 text-sm leading-relaxed mb-6 flex-1">
                      {service.tagline}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-500/40 group-hover:text-amber-400 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="mt-20 text-center"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
              Need Guidance?
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white">Not Sure Which Service You Need?</h3>
            <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto font-light">
              Book a free review session and we'll assess your situation to recommend the right services and plan.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-white px-8 py-6 text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all">
                Book Free Review Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
