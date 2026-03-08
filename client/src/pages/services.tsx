import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Practice Areas"
        subtitle="Institutional-grade advisory for all Indian financial and legal requirements."
        breadcrumbs={[{ label: "Practice Areas" }]}
      />

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,hsl(160_30%_15%_/_0.2)_0%,transparent_55%)] pointer-events-none" />

        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={luxuryStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-container"
          >
            {services.map((service, index) => (
              <motion.div key={service.slug} variants={elegantFadeUp} className="h-full preserve-3d">
                <Link href={`/services/${service.slug}`}>
                  <div className="group glass-panel p-10 lg:p-12 h-full flex flex-col cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white/[0.01] hover:bg-[#0A0F0D] border-white/5 hover:border-accent/30 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(207,160,82,0.15)] relative">
                    {/* Animated identifier */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-[#8a652a] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <div className="absolute -inset-20 bg-accent/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="flex items-center justify-between mb-10 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-[#121A17] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-accent/40">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-white/20 group-hover:text-accent/50 transition-colors">
                        Domain 0{index + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors duration-300 leading-tight relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-10 flex-1 relative z-10 group-hover:text-white/80 transition-colors">
                      {service.tagline}
                    </p>
                    
                    <div className="flex items-center justify-between text-[11px] font-bold text-accent/50 group-hover:text-accent transition-colors duration-300 mt-auto pt-6 border-t border-white/[0.05] relative z-10">
                      <span className="uppercase tracking-[0.2em] font-mono">Examine Strategy</span>
                      <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Consultation Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantFadeUp}
            className="mt-32 md:mt-48 max-w-5xl mx-auto"
          >
            <div className="vault-surface p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden text-center bg-[#0A0F0D]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.08)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-accent/50" />
                  <span className="accent-label !mb-0 text-accent">Strategic Guidance</span>
                  <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-accent/50" />
                </div>
                <h2 className="section-title text-white mb-8">Not Sure Where to <span className="text-gradient-gold italic">Begin?</span></h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                  Private portfolios often require an integrated approach across multiple practice areas. Initiate a complimentary review session to build your family's custom stewardship roadmap.
                </p>
                <Link href="/contact">
                  <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group">
                    <span>Book Review Session</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="mt-12 flex items-center justify-center gap-3 opacity-50">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-white">Absolute Discretion Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
