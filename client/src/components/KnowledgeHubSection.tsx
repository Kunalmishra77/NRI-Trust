import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Lock, Shield, Landmark, Scale } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

const guides = [
  {
    title: "Understanding Income Tax Notices for NRIs",
    tag: "Taxation • 8 min read",
    desc: "A technical breakdown of section 148 notices, foreign asset disclosure requirements, and the logic of NRO account scrutiny.",
    icon: Landmark,
    href: "/resources"
  },
  {
    title: "Preventing Property Encroachment in India",
    tag: "Property • 12 min read",
    desc: "Practical steps to protect your family's ancestral land, establishing authorized physical presence, and the utility of public notices.",
    icon: Scale,
    href: "/resources"
  },
  {
    title: "Bank KYC Compliance for Elderly Parents",
    tag: "Banking • 6 min read",
    desc: "Navigating re-KYC deadlocks for non-resident holders and coordinating branch-level formalities for senior citizens remotely.",
    icon: Shield,
    href: "/resources"
  },
  {
    title: "The NRI Succession Playbook",
    tag: "Legal • 15 min read",
    desc: "Professional strategies for Will registration, probate coordination across jurisdictions, and bringing all assets together.",
    icon: Lock,
    href: "/resources"
  }
];

export default function KnowledgeHubSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const [, setLocation] = useLocation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[450px,1fr] gap-12 lg:gap-24 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between py-2">
            <div className="lg:sticky lg:top-40">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 mb-8"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">
                  The Private Library
                </span>
              </motion.div>
              
              <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-[#1A1A1A] leading-tight mb-8">
                Authoritative <br />
                <span className="text-[#1A1A1A]/30 italic font-light">NRI Briefs.</span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[#1A1A1A]/60 font-medium leading-relaxed max-w-sm mb-12"
              >
                Practical guides on managing Indian assets, distilled for the global executive.
              </motion.p>

              <Link href="/resources">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 text-accent font-mono font-black uppercase tracking-[0.2em] text-xs"
                >
                  Access Full Archive
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Column: Dossier List */}
          <div className="flex flex-col border-t border-[#1A1A1A]/10 h-full">
            {guides.map((g, i) => {
              const isHovered = hoveredIdx === i;
              return (
                <div 
                  key={i}
                  onMouseEnter={() => setHoveredIdx(i)}
                  className={cn(
                    "group relative py-6 md:py-8 border-b border-[#1A1A1A]/10 cursor-pointer transition-all duration-500 overflow-hidden",
                    isHovered ? "px-8 md:px-10 bg-[#1A1A1A]/5" : "px-0"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-[9px] font-mono font-black text-accent/60 uppercase tracking-widest leading-none">
                          {g.tag}
                        </span>
                      </div>
                      
                      <h3 className={cn(
                        "text-lg md:text-2xl font-sans font-black tracking-tight transition-all duration-500",
                        isHovered ? "text-[#1A1A1A]" : "text-[#1A1A1A]/40"
                      )}>
                        {g.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="text-sm md:text-base text-[#1A1A1A]/60 leading-relaxed max-w-xl font-medium mt-4">
                              {g.desc}
                            </p>
                            <div className="mt-6">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLocation(g.href);
                                }}
                                className="flex items-center gap-2 text-[#1A1A1A] font-bold text-[10px] uppercase tracking-widest group/btn"
                              >
                                <span>Full Brief</span>
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all duration-500 shrink-0",
                      isHovered ? "bg-accent border-accent text-white scale-110 shadow-lg" : "bg-[#1A1A1A]/5 border-[#1A1A1A]/10 text-[#1A1A1A]/20"
                    )}>
                      <g.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

