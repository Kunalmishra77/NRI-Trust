import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services as allServices } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";

// Service order per phase
const PHASE_ORDER: Record<string, string[]> = {
  green:  ["legal-succession", "banking-kyc", "insurance", "property-tenancy", "income-tax"],
  orange: ["property-tenancy", "legal-succession", "insurance", "banking-kyc", "income-tax"],
  red:    ["income-tax", "legal-succession", "insurance", "banking-kyc", "property-tenancy"],
};

// Phase-specific section copy
const PHASE_COPY = {
  green: {
    label: "Your Protection Plan",
    headline: "Build Your Shield Now.",
    sub: "The earlier you start, the more complete your protection. Here's what we set up first for families in the Planning Zone.",
  },
  orange: {
    label: "Active Management",
    headline: "Every Issue, Handled.",
    sub: "At this stage, active management across all fronts is critical. Here's where we focus first for you.",
  },
  red: {
    label: "Emergency Services",
    headline: "Immediate Action Required.",
    sub: "Time is critical. These are the services that need to move first for your situation.",
  },
};

export default function ServiceEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { phase: rawPhase } = useUser();

  const phaseKey = rawPhase || 'green';
  const order = PHASE_ORDER[phaseKey];
  const services = order
    ? order.map(slug => allServices.find(s => s.slug === slug)).filter(Boolean) as typeof allServices
    : allServices;

  const copy = PHASE_COPY[phaseKey as keyof typeof PHASE_COPY] || PHASE_COPY.green;
  const phaseColor = rawPhase ? PHASE_CONFIG[rawPhase].color : '#d4af37';
  const phaseLabel = rawPhase ? PHASE_CONFIG[rawPhase].label : null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050914] text-white overflow-visible"
      style={{ height: `${(services.length + 2) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start pt-12 md:pt-20 overflow-hidden">

        {/* Background Glow — phase-colored */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-[150px] pointer-events-none transition-all duration-700"
          style={{ backgroundColor: `${phaseColor}06` }}
        />

        <div className="max-container relative z-30 w-full text-center mb-6 md:mb-10">

          {/* Phase label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 opacity-30" style={{ backgroundColor: phaseColor }} />
            <span
              className="inline-block px-5 py-2 rounded-full border text-[11px] font-mono font-bold uppercase tracking-[0.3em]"
              style={{
                borderColor: `${phaseColor}30`,
                backgroundColor: `${phaseColor}10`,
                color: phaseColor,
              }}
            >
              {phaseLabel || copy.label}
            </span>
            <div className="h-px w-8 opacity-30" style={{ backgroundColor: phaseColor }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight mb-3"
          >
            {copy.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-white/50 max-w-2xl mx-auto font-medium leading-relaxed px-4"
          >
            {copy.sub}
          </motion.p>
        </div>

        {/* Stacking Cards */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 h-full flex justify-center -mt-4">
          {services.map((service, index) => {
            const start = index / (services.length + 1);
            const end = (index + 1) / (services.length + 1);

            const cardY = useTransform(scrollYProgress, [start, end], ["80vh", "0vh"]);
            const cardScale = useTransform(scrollYProgress, [end, 1], [1, 1 - (services.length - index) * 0.02]);
            const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0, 1]);

            // Priority badge for first 2 cards in red phase
            const isPriority = rawPhase === 'red' && index < 2;
            const isFirst = index === 0;

            return (
              <motion.div
                key={service.slug}
                style={{
                  scale: cardScale,
                  y: cardY,
                  opacity,
                  top: `${index * 40}px`,
                  zIndex: index + 10,
                }}
                className="absolute w-full px-4 sm:px-6"
              >
                <Link href={`/services/${service.slug}`}>
                  <div
                    className="w-full bg-[#0A0F1A] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] cursor-pointer group hover:border-opacity-40 transition-all duration-500 overflow-hidden relative"
                    style={{
                      '--hover-color': phaseColor,
                    } as React.CSSProperties}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${phaseColor}40`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    {/* Priority badge */}
                    {isPriority && (
                      <div
                        className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest"
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

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative z-10">
                      <div
                        className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500"
                        style={{}}
                      >
                        <service.icon
                          className="w-8 h-8 md:w-12 md:h-12 transition-all duration-500"
                          style={{ color: '#d4af37' }}
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-black text-white mb-2 md:mb-4 transition-colors duration-500 group-hover:text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-lg text-white/60 font-medium leading-relaxed max-w-xl group-hover:text-white/80 transition-colors">
                          {service.tagline}
                        </p>
                      </div>

                      <div
                        className="hidden md:flex w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 items-center justify-center transition-all duration-500 shrink-0 group-hover:border-opacity-100"
                        style={{}}
                      >
                        <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white/50 group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Hover glow — phase color */}
                    <div
                      className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: `${phaseColor}10` }}
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
