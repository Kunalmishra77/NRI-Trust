import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Lock, Shield, Landmark, Scale, Zap, Heart } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";

const ALL_GUIDES = {
  green: [
    {
      title: "How to Register a Will in India as an NRI",
      tag: "Estate Planning • 10 min read",
      desc: "Step-by-step guide to drafting and registering your parents' Will from abroad — covering executor appointment, registered vs. unregistered Wills, and avoiding common disputes.",
      icon: Scale,
      href: "/resources",
    },
    {
      title: "Complete NRI Banking KYC Guide: 2024",
      tag: "Banking • 8 min read",
      desc: "Everything you need to know about keeping your parents' NRE/NRO accounts active, updating KYC remotely, fixing nominee details, and preventing account freezes.",
      icon: Landmark,
      href: "/resources",
    },
    {
      title: "Setting Up Power of Attorney from Abroad",
      tag: "Legal • 6 min read",
      desc: "How to create a legally valid, notarised Power of Attorney for your parents — covering which type you need, how to execute it internationally, and registration in India.",
      icon: FileText,
      href: "/resources",
    },
    {
      title: "NRI Health Insurance: Gaps Most Families Miss",
      tag: "Insurance • 7 min read",
      desc: "Why your parents' current health cover is probably inadequate, what top-up and super top-up policies to consider, and how to manage renewals remotely.",
      icon: Heart,
      href: "/resources",
    },
  ],
  orange: [
    {
      title: "Preventing Property Encroachment in India",
      tag: "Property • 12 min read",
      desc: "Practical steps to protect your family's ancestral land — establishing authorized physical presence, public notices, and the right local contacts to engage.",
      icon: Scale,
      href: "/resources",
    },
    {
      title: "Managing Tenants Remotely: Legal Framework",
      tag: "Property • 9 min read",
      desc: "Rent agreements, tenant verification, eviction procedures, and how to handle non-paying tenants from abroad without a single visit to India.",
      icon: Shield,
      href: "/resources",
    },
    {
      title: "Income Tax Compliance for NRI Parents",
      tag: "Taxation • 8 min read",
      desc: "Section 148 notices, senior citizen tax benefits, NRO account TDS management, and ensuring your parents remain fully compliant without missing deadlines.",
      icon: Landmark,
      href: "/resources",
    },
    {
      title: "Building an Emergency Action Plan for Your Parents",
      tag: "Emergency • 6 min read",
      desc: "How to create a documented emergency plan — contacts, document locations, bank access procedures — so your family knows exactly what to do in any crisis.",
      icon: Zap,
      href: "/resources",
    },
  ],
  red: [
    {
      title: "The NRI Succession Playbook",
      tag: "Legal • 15 min read",
      desc: "Professional strategies for succession certificates, probate coordination across jurisdictions, bank transfers after passing, and resolving Will disputes quickly.",
      icon: Lock,
      href: "/resources",
    },
    {
      title: "Reversing Insurance Claim Rejections",
      tag: "Insurance • 8 min read",
      desc: "Why claims get rejected, how to prepare a watertight resubmission, and the escalation path through insurance ombudsman if the insurer refuses.",
      icon: Heart,
      href: "/resources",
    },
    {
      title: "Bank Account Succession After a Parent Passes",
      tag: "Banking • 10 min read",
      desc: "How to access frozen accounts, what documents banks require, the role of succession certificates vs. nominee claims, and timelines for each process.",
      icon: Landmark,
      href: "/resources",
    },
    {
      title: "Emergency Document Checklist for NRI Families",
      tag: "Emergency • 5 min read",
      desc: "The complete list of documents you need for insurance claims, bank succession, and property transfer — with guidance on what to do if any are missing.",
      icon: FileText,
      href: "/resources",
    },
  ],
};

export default function KnowledgeHubSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const [, setLocation] = useLocation();
  const { phase: rawPhase } = useUser();

  const phase = rawPhase || 'green';
  const guides = ALL_GUIDES[phase];
  const phaseColor = rawPhase ? PHASE_CONFIG[rawPhase].color : '#d4af37';

  const sectionLabel = {
    green: 'Planning Resources',
    orange: 'Active Management Guides',
    red: 'Urgent Reference',
  }[phase];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 pointer-events-none"
          style={{ backgroundColor: `${phaseColor}08` }} />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[450px,1fr] gap-12 lg:gap-24 items-stretch">

          {/* Left column */}
          <div className="flex flex-col justify-between py-2">
            <div className="lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 mb-8"
              >
                <BookOpen className="w-4 h-4" style={{ color: phaseColor }} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]" style={{ color: phaseColor }}>
                  {sectionLabel}
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#1A1A1A] leading-[1.05] mb-8">
                Authoritative <br />
                <span className="text-[#1A1A1A]/30 italic font-light">NRI Briefs.</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[#1A1A1A]/60 font-medium leading-relaxed max-w-sm mb-6"
              >
                {phase === 'red'
                  ? 'Immediate reference guides for the situation you are in right now.'
                  : phase === 'orange'
                  ? 'Practical guides for active management of your family\'s affairs from abroad.'
                  : 'Guides to help you build complete protection before any crisis arises.'}
              </motion.p>

              {/* Phase indicator */}
              {rawPhase && (
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8"
                  style={{ backgroundColor: `${phaseColor}10`, border: `1px solid ${phaseColor}25`, color: phaseColor }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phaseColor }} />
                  Curated for {PHASE_CONFIG[phase].label}
                </div>
              )}

              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 font-mono font-black uppercase tracking-[0.2em] text-xs"
                  style={{ color: phaseColor }}
                >
                  Access Full Archive
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right column */}
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
                        <span
                          className="text-[9px] font-mono font-black uppercase tracking-widest leading-none"
                          style={{ color: isHovered ? phaseColor : `${phaseColor}50` }}
                        >
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
                                onClick={e => { e.stopPropagation(); setLocation(g.href); }}
                                className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest group/btn transition-colors"
                                style={{ color: phaseColor }}
                              >
                                <span>Read Brief</span>
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div
                      className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all duration-500 shrink-0",
                        isHovered ? "scale-110 shadow-lg text-white" : "bg-[#1A1A1A]/5 border-[#1A1A1A]/10 text-[#1A1A1A]/20"
                      )}
                      style={isHovered ? { backgroundColor: phaseColor, borderColor: phaseColor } : {}}
                    >
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
