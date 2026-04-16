import { useEffect, useRef, useState } from "react";
import { Clock, Zap, UserCheck, ShieldCheck, ArrowRight, AlertCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";

const emergencySteps = [
  {
    time: "Step 1",
    title: "Who to Contact",
    desc: "We give you a clear list of emergency contacts — family members, doctors, lawyers, and our team. No confusion about who to call first.",
    icon: Clock,
  },
  {
    time: "Step 2",
    title: "How to Access Money",
    desc: "We make sure your family knows which bank accounts to use, where the documents are, and how to withdraw funds quickly during an emergency.",
    icon: Zap,
  },
  {
    time: "Step 3",
    title: "What Documents Are Needed",
    desc: "Insurance policies, death certificates, bank papers, property documents — we prepare a checklist so nothing is missed when it matters most.",
    icon: UserCheck,
  },
  {
    time: "Step 4",
    title: "What Steps to Take",
    desc: "A simple, step-by-step guide for your family — from filing insurance claims to starting bank succession. No guesswork, no legal surprises.",
    icon: ShieldCheck,
  },
];

const PHASE_CONTENT = {
  green: {
    headline: "Build Your Emergency Plan Now",
    highlight: "Before You Ever Need It.",
    sub: "Most NRI families have no documented emergency plan. Set one up while everything is calm — it takes minutes, and it could save months of chaos.",
    urgency: false,
    badge: null,
  },
  orange: {
    headline: "Your Emergency Plan:",
    highlight: "Are You Ready?",
    sub: "At this stage, having a documented, rehearsed emergency plan is no longer optional. Let's make sure your family knows exactly what to do.",
    urgency: false,
    badge: "Review your plan",
  },
  red: {
    headline: "Emergency Protocol:",
    highlight: "Follow These Steps Now.",
    sub: "Our team is standing by. Follow these steps immediately — we handle everything alongside your family.",
    urgency: true,
    badge: "Active emergency support",
  },
};

export default function EmergencyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const { phase: rawPhase } = useUser();

  const phase = rawPhase || 'green';
  const phaseColor = rawPhase ? PHASE_CONFIG[rawPhase].color : '#ef4444';
  const content = PHASE_CONTENT[phase];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % emergencySteps.length);
      }, 5000);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying]);

  const handleManualSelection = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const stepColor = phase === 'red' ? '#ef4444' : phase === 'orange' ? '#f97316' : '#64748b';

  return (
    <section className="relative py-24 md:py-32 bg-[#FDFCFB] overflow-hidden text-[#1A1A1A]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      {/* Phase tinted radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${phaseColor}04 0%, transparent 70%)` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-4xl">

            {/* Badge */}
            {content.badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{
                  backgroundColor: `${phaseColor}10`,
                  border: `1px solid ${phaseColor}30`,
                }}
              >
                {content.urgency && (
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: phaseColor }}
                  />
                )}
                <span className="text-[12px] font-mono font-black uppercase tracking-widest" style={{ color: phaseColor }}>
                  {content.badge}
                </span>
              </motion.div>
            )}

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-[1.05] text-[#1A1A1A]">
              {content.headline}{' '}
              <span style={{ color: stepColor }}>{content.highlight}</span>
            </h2>
            <p className="text-[#1A1A1A]/50 text-base md:text-lg font-medium mt-4 max-w-2xl leading-relaxed">
              {content.sub}
            </p>
          </div>

          <Link href="/emergency-response">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full border border-[#1A1A1A]/10 bg-white/50 backdrop-blur-xl text-[#1A1A1A] font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-sm whitespace-nowrap"
            >
              {phase === 'red' ? 'Get Help Now' : 'See Full Plan'} <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr,550px] gap-12 lg:gap-20 items-stretch">

          {/* Left: Detail Card */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full w-full rounded-[3rem] border border-[#1A1A1A]/10 bg-white p-10 md:p-16 flex flex-col justify-between overflow-hidden relative shadow-xl">
                  {/* Progress bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1A1A1A]/5">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full"
                      style={{ backgroundColor: stepColor }}
                    />
                  </div>

                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 opacity-15 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: phaseColor }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-12 border border-[#1A1A1A]/5 shadow-xl"
                      style={{ backgroundColor: `${phaseColor}12` }}
                    >
                      {(() => {
                        const Icon = emergencySteps[activeIndex].icon;
                        return <Icon className="w-10 h-10" style={{ color: stepColor }} />;
                      })()}
                    </div>

                    <span
                      className="font-mono text-lg font-black mb-4 block"
                      style={{ color: `${stepColor}80` }}
                    >
                      {emergencySteps[activeIndex].time}
                    </span>

                    <h3 className="text-2xl md:text-4xl font-sans font-black text-[#1A1A1A] mb-8 tracking-tighter">
                      {emergencySteps[activeIndex].title}
                    </h3>

                    <p className="text-xl md:text-2xl text-[#1A1A1A]/60 leading-relaxed max-w-xl font-medium italic">
                      &ldquo;{emergencySteps[activeIndex].desc}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-[#1A1A1A]/5 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stepColor }} />
                      <span className="text-[12px] font-mono font-black uppercase tracking-widest text-[#1A1A1A]/40 leading-none">
                        {phase === 'red' ? 'Emergency Mode Active' : 'Execution Logic Active'}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-[#1A1A1A]/5" />
                    <AlertCircle className="w-5 h-5 text-[#1A1A1A]/10" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Protocol list */}
          <div className="flex flex-col gap-4">
            {emergencySteps.map((step, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => handleManualSelection(idx)}
                  className={cn(
                    "group relative p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer overflow-hidden",
                    isActive
                      ? "bg-white border-[#1A1A1A]/10 text-[#1A1A1A] translate-x-4 shadow-2xl"
                      : "bg-[#1A1A1A]/5 border-transparent text-[#1A1A1A]/40 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]/60"
                  )}
                  style={{ boxShadow: isActive ? `0 20px 60px ${phaseColor}08` : 'none' }}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500"
                        style={isActive
                          ? { backgroundColor: '#1A1A1A', color: 'white' }
                          : { backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(26,26,26,0.05)' }
                        }
                      >
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div
                          className="text-[11px] font-mono font-black uppercase tracking-widest mb-1"
                          style={{ color: isActive ? stepColor : 'rgba(26,26,26,0.3)' }}
                        >
                          {step.time}
                        </div>
                        <h4 className="text-xl md:text-2xl font-sans font-black tracking-tight leading-none">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={cn("w-5 h-5 transition-transform duration-500", isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0")} />
                  </div>

                  <div className={cn("absolute right-4 bottom-[-10%] text-6xl font-black transition-opacity duration-500 pointer-events-none", isActive ? "opacity-[0.03]" : "opacity-0")}>
                    0{idx + 1}
                  </div>
                </div>
              );
            })}

            {/* Red phase: direct action CTA */}
            {phase === 'red' && (
              <motion.a
                href="https://wa.me/919999999999?text=Emergency%20Support%20Needed"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 p-5 rounded-[2rem] border mt-2 transition-all"
                style={{ backgroundColor: `${phaseColor}10`, borderColor: `${phaseColor}30` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: phaseColor }}
                />
                <span className="font-black text-sm uppercase tracking-widest" style={{ color: phaseColor }}>
                  Emergency WhatsApp — Available Now
                </span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
