import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Shield, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useUser, PHASE_CONFIG, Phase } from "@/context/UserContext";

const EASE = [0.16, 1, 0.3, 1] as const;

const CYCLING_WORDS = ["Future", "Insurance", "Banking", "Property", "Succession"];
const ZONES: Phase[] = ["green", "orange", "red"];

const STATS = [
  { val: "500+", label: "Families protected" },
  { val: "₹250Cr+", label: "Assets managed" },
  { val: "40+", label: "Jurisdictions" },
];

// ── Preview panel (hovered state) ─────────────────────────────
function PreviewPanel({ phase }: { phase: Phase }) {
  const config = PHASE_CONFIG[phase];
  const color = config.color;
  return (
    <motion.div
      key={phase}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 rounded-2xl p-4 border overflow-hidden"
      style={{ background: "rgba(8,14,30,0.96)", borderColor: `${color}35` }}
    >
      <p className="text-[11px] font-mono font-black uppercase tracking-[0.25em] mb-2.5" style={{ color }}>
        Ask yourself
      </p>
      <ul className="space-y-1.5 mb-3">
        {config.hoverContent.questions.map((q, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full mt-[6px] shrink-0" style={{ backgroundColor: color }} />
            <span className="text-white/85 text-[12px] leading-snug">{q}</span>
          </li>
        ))}
      </ul>
      <div className="pt-2.5 border-t border-white/10">
        <p className="text-[11px] font-mono font-black uppercase tracking-[0.25em] mb-2" style={{ color }}>
          How we help
        </p>
        <ul className="space-y-1">
          {config.hoverContent.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" style={{ color }} />
              <span className="text-white/90 text-[12px] leading-snug font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ── Default panel (no hover) ───────────────────────────────────
function DefaultPanel() {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="grid grid-cols-3 gap-3 mb-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.val}</div>
            <div className="text-[12px] text-white/75 font-medium leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
        {["FEMA Compliant", "Registered Legal Firm", "24/7 Support"].map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#d4af37]/70" />
            <span className="text-white/75 text-[12px] font-medium">{t}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Zone card ──────────────────────────────────────────────────
function ZoneCard({
  id,
  isHovered,
  onHoverIn,
  onHoverOut,
}: {
  id: Phase;
  isHovered: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
}) {
  const { selectZone } = useUser();
  const [, navigate] = useLocation();
  const config = PHASE_CONFIG[id];
  const color = config.color;

  return (
    <motion.button
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onClick={() => { selectZone(id); navigate(config.zonePage); }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full text-left rounded-2xl px-5 py-4 border overflow-hidden flex items-center justify-between gap-4 transition-colors duration-200"
      style={{
        background: isHovered ? `${color}12` : "rgba(255,255,255,0.04)",
        borderColor: isHovered ? `${color}50` : "rgba(255,255,255,0.10)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-200"
          style={{
            backgroundColor: color,
            boxShadow: isHovered ? `0 0 8px ${color}80` : "none",
          }}
        />
        <div className="min-w-0">
          <div className="text-white font-black text-sm leading-tight">{config.ageRange}</div>
          <div className="text-[12px] font-mono uppercase tracking-[0.2em] mt-0.5 font-bold" style={{ color }}>
            {config.label}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2.5 shrink-0">
        <span
          className="text-[12px] font-medium hidden sm:block transition-colors duration-200"
          style={{ color: isHovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}
        >
          {config.stage}
        </span>
        <ArrowRight
          className="w-4 h-4 transition-all duration-200"
          style={{
            color,
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? "translateX(2px)" : "translateX(0)",
          }}
        />
      </div>

      {/* Subtle left accent bar */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-200"
        style={{
          height: isHovered ? "60%" : "0%",
          backgroundColor: color,
        }}
      />
    </motion.button>
  );
}

// ── Main ───────────────────────────────────────────────────────
export default function HeroSection() {
  const [cycleIdx, setCycleIdx] = useState(0);
  const [hoveredZone, setHoveredZone] = useState<Phase | null>(null);

  useEffect(() => {
    const id = setInterval(
      () => setCycleIdx((i) => (i + 1) % CYCLING_WORDS.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#050914]/40 pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] z-[1] pointer-events-none opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-[#050914] via-[#050914]/70 to-transparent z-[1] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">

          {/* ── LEFT ───────────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <Shield className="w-3.5 h-3.5 text-[#d4af37]/80" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#d4af37]/80">
                India's Most Trusted NRI Family Protection Platform
              </span>
            </motion.div>

            {/* 3-line headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className="mb-7 w-full"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.06] tracking-tight">
                Is Your Parents'
              </div>

              {/* Cycling word — invisible spacer keeps height stable */}
              <div className="relative text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.06] tracking-tight overflow-hidden">
                <span className="invisible select-none pointer-events-none">Future</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cycleIdx}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{ duration: 0.44, ease: EASE }}
                    className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]"
                  >
                    {CYCLING_WORDS[cycleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.06] tracking-tight">
                Protected?
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl font-medium"
            >
              Most NRI families discover financial problems only during a crisis —
              when it's already too late. Select your parents' age group to see
              exactly what needs to be done right now.
            </motion.p>
          </div>

          {/* ── RIGHT ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* Fixed-height preview area — panels are absolute so cards never shift */}
            <div className="relative h-[180px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredZone
                  ? <PreviewPanel key={hoveredZone} phase={hoveredZone} />
                  : <DefaultPanel key="default" />
                }
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-white/10" />
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/55 font-bold shrink-0">
                Select age group
              </p>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            {/* Zone cards */}
            <div className="flex flex-col gap-3.5">
              {ZONES.map((id) => (
                <ZoneCard
                  key={id}
                  id={id}
                  isHovered={hoveredZone === id}
                  onHoverIn={() => setHoveredZone(id)}
                  onHoverOut={() => setHoveredZone(null)}
                />
              ))}
            </div>

            <p className="text-[11px] font-mono text-white/50 tracking-wider text-center">
              Hover to preview · Click to view your plan
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
