import { Link } from "wouter";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero Section */}
      <PageHeader
        title="Complete Financial and Legal Support for NRI Families"
        subtitle="Moving beyond fragmented agents to institutional-grade stewardship."
        breadcrumbs={[{ label: "Practice Areas" }]}
      />

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
        
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={luxuryStagger}
            className="space-y-32 md:space-y-48"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={elegantFadeUp}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual / Icon Column */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    {/* Animated Background Glow */}
                    <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    
                    <div className="aspect-square rounded-[3rem] bg-[#0A0F0D] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl group-hover:border-accent/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)]" />
                      
                      {/* Floating Decorative Elements */}
                      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/10 rounded-full animate-pulse" />
                      <div className="absolute bottom-20 right-10 w-32 h-32 border border-accent/5 rounded-full animate-slow-spin" />
                      
                      <service.icon className="w-32 h-32 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-700 relative z-10 drop-shadow-[0_0_30px_rgba(207,160,82,0.3)]" />
                      
                      {/* Domain Badge */}
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60 font-bold">
                          Practice Area 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-1 text-right lg:text-left" : ""}`}>
                  <div className={`flex items-center gap-4 mb-8 ${index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"}`}>
                    <div className="h-px w-12 bg-accent/30" />
                    <span className="accent-label !mb-0 text-accent uppercase tracking-[0.3em]">
                      {service.shortTitle} Excellence
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl">
                    {service.description}
                  </p>

                  {/* Problems Solved Section */}
                  <div className="mb-12">
                    <div className={`flex items-center gap-3 mb-6 ${index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"}`}>
                      <AlertCircle className="w-4 h-4 text-accent/60" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 font-bold">
                        Critical Problems Resolved
                      </span>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 gap-4">
                      {service.scenarios.concat(service.risks ? [{ title: "Institutional Risk", description: service.risks[0] }] : []).slice(0, 3).map((problem, pIdx) => (
                        <div 
                          key={pIdx}
                          className={`flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-all group/problem ${
                            index % 2 !== 0 ? "lg:flex-row flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 group-hover/problem:bg-accent/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-[15px]">{problem.title}</h4>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                              {problem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <button className="btn-premium-outline !px-10 !py-5 flex items-center gap-4 group mx-auto lg:mx-0">
                      <span>Examine Strategy</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Consultation CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="mt-40 text-center"
          >
            <div className="vault-surface p-12 md:p-24 rounded-[4rem] relative overflow-hidden bg-[#0A0F0D]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.1)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="accent-label text-accent mb-8 block">Legacy Protection</span>
                <h2 className="display-title !text-4xl md:!text-6xl text-white mb-10">
                  Ready to Secure Your <br />
                  <span className="text-gradient-gold italic">Family's Future?</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
                  Every family legacy is unique. Initiate a confidential consultation with our advisors to build your bespoke stewardship plan.
                </p>
                <Link href="/contact">
                  <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.2)]">
                    <span>Book Private Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <div className="mt-12 flex items-center justify-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white font-bold">
                    Institutional Discretion Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
