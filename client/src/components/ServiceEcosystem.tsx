import { motion } from "framer-motion";
import { services as allServices } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";

// Service order per phase
const PHASE_ORDER: Record<string, string[]> = {
  green:  ["legal-succession", "banking-kyc", "insurance", "property-tenancy", "emergency-access"],
  orange: ["property-tenancy", "legal-succession", "insurance", "banking-kyc", "emergency-access"],
  red:    ["emergency-access", "legal-succession", "insurance", "banking-kyc", "property-tenancy"],
};

// Phase-specific section copy
const PHASE_COPY = {
  green: {
    label: "Your Protection Plan",
    headline: "Build Your Shield Now.",
    sub: "The earlier you start, the more complete your protection.",
  },
  orange: {
    label: "Active Management",
    headline: "Every Issue, Handled.",
    sub: "Strategic management across all fronts.",
  },
  red: {
    label: "Emergency Services",
    headline: "Immediate Action Required.",
    sub: "Time is critical. Stabilizing actions first.",
  },
};

export default function ServiceEcosystem() {
  const { phase: rawPhase } = useUser();

  const phaseKey = rawPhase || 'green';
  const order = PHASE_ORDER[phaseKey];
  const services = order
    ? order.map(slug => allServices.find(s => s.slug === slug)).filter(Boolean) as typeof allServices
    : allServices;

  const copy = PHASE_COPY[phaseKey as keyof typeof PHASE_COPY] || PHASE_COPY.green;
  const phaseColor = rawPhase ? PHASE_CONFIG[rawPhase].color : '#d4af37';
  const phaseLabel = rawPhase ? PHASE_CONFIG[rawPhase].label : null;

  return (
    <section className="relative bg-[#050914] text-white py-20 md:py-28 overflow-visible">
      {/* Background Glow — phase-colored */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-[150px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: `${phaseColor}20` }}
      />

      <div className="max-container relative z-30 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-6 opacity-30" style={{ backgroundColor: phaseColor }} />
            <span
              className="inline-block px-4 py-1.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-[0.2em]"
              style={{
                borderColor: `${phaseColor}30`,
                backgroundColor: `${phaseColor}10`,
                color: phaseColor,
              }}
            >
              {phaseLabel || copy.label}
            </span>
            <div className="h-px w-6 opacity-30" style={{ backgroundColor: phaseColor }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight mb-4"
          >
            {copy.headline.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "" : "text-white"} style={i === arr.length - 1 ? { color: phaseColor } : {}}>
                {word}{' '}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto font-medium leading-relaxed px-4"
          >
            {copy.sub}
          </motion.p>
        </div>

        {/* 
          Compact Sticky Stacking Cards 
        */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 pb-10">
          {services.map((service, index) => {
            const isPriority = rawPhase === 'red' && index < 2;
            
            // Adjusted sticky top offset for smaller cards
            const topOffset = 100 + (index * 30);

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="sticky w-full px-4 sm:px-6"
                style={{ 
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div
                    className="w-full bg-[#0A0F1A] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-[0_-15px_40px_rgba(0,0,0,0.5)] cursor-pointer group transition-all duration-500 overflow-hidden relative"
                  >
                    {/* Priority badge */}
                    {isPriority && (
                      <div
                        className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest z-20"
                        style={{ backgroundColor: `${phaseColor}20`, border: `1px solid ${phaseColor}40`, color: phaseColor }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: phaseColor }}
                        />
                        Priority
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 relative z-10">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.2rem] border flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-105"
                        style={{ backgroundColor: `${phaseColor}10`, borderColor: `${phaseColor}30` }}
                      >
                        <service.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: phaseColor }} />
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className="text-lg md:text-2xl font-sans font-black text-white mb-1.5 transition-colors" style={{ transition: 'color 0.3s' }}>
                           <span className="group-hover:hidden">{service.title}</span>
                           <span className="hidden group-hover:block" style={{ color: phaseColor }}>{service.title}</span>
                        </h3>
                        <p className="text-xs md:text-base text-white/50 font-medium leading-relaxed max-w-lg group-hover:text-white/70 transition-colors">
                          {service.tagline}
                        </p>
                      </div>

                      <div 
                        className="hidden md:flex w-10 h-10 md:w-12 md:h-12 rounded-full border items-center justify-center transition-all duration-500 shrink-0 group-hover:scale-105"
                        style={{ borderColor: `${phaseColor}20`, backgroundColor: `${phaseColor}05` }}
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-all duration-500 group-hover:translate-x-1" style={{ color: phaseColor }} />
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: phaseColor }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
