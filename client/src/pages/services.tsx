import { Link } from "wouter";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section (Dark) */}
      <div className="section-dark">
        <PageHeader
          title="Complete Financial and Legal Support for NRI Families"
          subtitle="We manage your parents' insurance, bank accounts, property, legal documents, and emergencies — all in one place."
          breadcrumbs={[{ label: "Practice Areas" }]}
        />
      </div>

      {/* 2. Service List (Mixed Theme) */}
      {services.map((service, index) => {
        const isLight = index % 2 === 0;
        return (
          <section 
            key={service.slug} 
            className={cn(
              "section-padding relative overflow-hidden transition-colors duration-500",
              isLight ? "section-light" : "section-dark"
            )}
          >
            {isLight && (
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
            )}
            {!isLight && (
              <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
            )}
            
            <div className="max-container relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={elegantFadeUp}
                className={cn(
                  "grid lg:grid-cols-12 gap-12 lg:gap-24 items-center",
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                )}
              >
                {/* Visual / Icon Column */}
                <div className={cn(
                  "lg:col-span-5",
                  index % 2 !== 0 ? "lg:order-2" : ""
                )}>
                  <div className="relative group">
                    <div className={cn(
                      "absolute -inset-10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none",
                      isLight ? "bg-accent/10" : "bg-accent/5"
                    )} />
                    
                    <div className={cn(
                      "aspect-square rounded-[3rem] border flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-700",
                      isLight 
                        ? "bg-white border-black/5 group-hover:border-accent/40" 
                        : "bg-[#050914] border-white/5 group-hover:border-accent/20"
                    )}>
                      <div className={cn(
                        "absolute inset-0",
                        isLight 
                          ? "bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" 
                          : "bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)]"
                      )} />
                      
                      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/10 rounded-full animate-pulse" />
                      <div className="absolute bottom-20 right-10 w-32 h-32 border border-accent/5 rounded-full animate-slow-spin" />
                      
                      <service.icon className="w-32 h-32 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-700 relative z-10 drop-shadow-[0_0_30px_rgba(207,160,82,0.3)]" />
                      
                      <div className={cn(
                        "absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 backdrop-blur-md border rounded-full",
                        isLight ? "bg-white/40 border-black/10" : "bg-black/40 border-white/10"
                      )}>
                        <span className={cn(
                          "text-[11px] font-mono uppercase tracking-[0.4em] font-bold",
                          isLight ? "text-[#1A1A1A]" : "text-white"
                        )}>
                          Practice Area 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={cn(
                  "lg:col-span-7",
                  index % 2 !== 0 ? "lg:order-1 text-right lg:text-left" : ""
                )}>
                  <div className={cn(
                    "flex items-center gap-4 mb-8",
                    index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"
                  )}>
                    <div className="h-px w-12 bg-accent/30" />
                    <span className="accent-label !mb-0 text-accent uppercase tracking-[0.3em]">
                      {service.shortTitle}
                    </span>
                  </div>

                  <h2 className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight",
                    isLight ? "text-[#1A1A1A]" : "text-white"
                  )}>
                    {service.title}
                  </h2>

                  <p className={cn(
                    "text-xl font-light leading-relaxed mb-12 max-w-2xl",
                    isLight ? "text-[#1A1A1A]" : "text-white/90"
                  )}>
                    {service.description}
                  </p>

                  {/* Problems Solved Section */}
                  <div className="mb-12">
                    <div className={cn(
                      "flex items-center gap-3 mb-6",
                      index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"
                    )}>
                      <AlertCircle className="w-4 h-4 text-accent" />
                      <span className={cn(
                        "text-[11px] font-mono uppercase tracking-widest font-bold",
                        isLight ? "text-[#1A1A1A]" : "text-white"
                      )}>
                        Problems We Solve
                      </span>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 gap-4">
                      {service.scenarios.concat(service.risks ? [{ title: "Common Risk", description: service.risks[0] }] : []).slice(0, 3).map((problem, pIdx) => (
                        <div 
                          key={pIdx}
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-2xl border transition-all group/problem shadow-sm",
                            isLight 
                              ? "bg-white border-black/5 hover:border-accent/40" 
                              : "bg-white/[0.02] border-white/[0.05] hover:border-accent/20",
                            index % 2 !== 0 ? "lg:flex-row flex-row-reverse" : ""
                          )}
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 group-hover/problem:bg-accent/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <div>
                            <h4 className={cn(
                              "font-medium mb-1 text-[15px]",
                              isLight ? "text-[#1A1A1A]" : "text-white"
                            )}>{problem.title}</h4>
                            <p className={cn(
                              "text-sm font-light leading-relaxed",
                              isLight ? "text-[#1A1A1A]" : "text-white/90"
                            )}>
                              {problem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <button className={cn(
                      "btn-premium-outline !px-10 !py-5 flex items-center gap-4 group mx-auto lg:mx-0",
                      isLight ? "section-light" : "section-dark"
                    )}>
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* 3. Final Consultation CTA (Dark) */}
      <section className="section-padding section-dark border-t border-white/[0.05]">
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center"
          >
            <div className="vault-surface p-12 md:p-24 rounded-[4rem] relative overflow-hidden bg-[#050914]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.1)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="accent-label text-accent mb-8 block">Get Started</span>
                <h2 className="display-title !text-4xl md:!text-6xl text-[#FDFCFB] mb-10">
                  Ready to Protect Your <br />
                  <span className="text-gradient-gold italic">Parents' Financial Life?</span>
                </h2>
                <p className="text-xl text-white/50 font-light mb-16 leading-relaxed">
                  Every family's situation is different. Book a free consultation and we will create a plan that fits your parents' needs.
                </p>
                <Link href="/contact">
                  <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.2)]">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <div className="mt-12 flex items-center justify-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white font-bold opacity-60">
                    Your Information Is Handled Securely
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

