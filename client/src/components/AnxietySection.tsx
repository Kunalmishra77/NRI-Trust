import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { AlertCircle, HelpCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const anxieties = [
  {
    title: "Tax Notice",
    problem: "Sudden show-cause notices from the Income Tax department regarding high-value transactions or dormant NRO accounts.",
    impact: "Potential frozen liquidity and hefty compliance penalties.",
    href: "/services/income-tax"
  },
  {
    title: "Bank Account Frozen",
    problem: "KYC non-compliance or lack of proper nomination leading to parents being unable to access their own savings.",
    impact: "Severe financial stress during medical or emergency needs.",
    href: "/services/banking-kyc"
  },
  {
    title: "Tenant Dispute",
    problem: "Tenants refusing to vacate or stopping rent payments, knowing the owner lives 10,000 miles away.",
    impact: "Legal deadlock and loss of property control for parents.",
    href: "/services/property-tenancy"
  },
  {
    title: "Utility Disconnection",
    problem: "Missed municipal taxes or utility bills causing sudden disconnection of water or electricity.",
    impact: "Immediate physical hardship for elderly residents.",
    href: "/services/property-tenancy"
  },
  {
    title: "Succession Delay",
    problem: "Lack of registered Wills or survival certificates causing assets to be locked for years.",
    impact: "Generational wealth erosion and legal infighting.",
    href: "/services/legal-succession"
  },
  {
    title: "Insurance Rejection",
    problem: "Complex claim filing processes or policy lapses due to non-monitoring of renewal dates.",
    impact: "Huge out-of-pocket medical expenses during surgery.",
    href: "/services/insurance"
  }
];

export default function AnxietySection() {
  return (
    <section className="section-padding bg-[#050814] relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label text-[#D4AF37]">The Burden of Distance</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8">
            What Keeps <span className="text-white/40 italic">NRIs Awake at Night?</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            The anxiety isn't just about healthcare—it's the structural failures that threaten your family's Indian legacy.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {anxieties.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <motion.div
                variants={elegantFadeUp}
                className="group relative h-80 perspective-container cursor-pointer"
              >
                <div className="preserve-3d w-full h-full transition-all duration-700 group-hover:rotate-y-12">
                  {/* Front Side */}
                  <div className="absolute inset-0 premium-card p-10 rounded-[2rem] flex flex-col backdrop-blur-xl border-white/5 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500 shadow-2xl">
                    <div className="flex flex-col h-full group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
                        <AlertCircle className="w-6 h-6 text-accent" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif text-[#F5F3EC] mb-4">{item.title}</h3>
                        <p className="text-xs text-white/30 font-light leading-relaxed line-clamp-2">
                          {item.problem}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <div className="h-[1px] w-8 bg-accent/30" />
                        <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-accent/40 uppercase tracking-widest">
                          <span>Examine Strategy</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Reveal Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0B101E] rounded-[2rem] p-10 flex flex-col justify-center gap-6 z-20 border border-accent/40 translate-z-10 shadow-[0_0_50px_rgba(207,160,82,0.1)]">
                    <div className="flex items-center justify-between">
                      <div className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                        <HelpCircle className="w-3 h-3" />
                        Risk Analysis
                      </div>
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                    
                    <p className="text-[#F5F3EC] text-[15px] leading-relaxed font-light italic">"{item.problem}"</p>
                    
                    <div className="h-px w-full bg-white/10" />
                    
                    <div>
                      <span className="text-[10px] font-mono text-accent/60 uppercase tracking-widest block mb-2 font-bold">Outcome</span>
                      <p className="text-white/60 text-xs font-light leading-relaxed">{item.impact}</p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                      <span>Initiate Resolution</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

