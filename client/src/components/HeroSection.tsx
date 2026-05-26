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
      whileTap={{ scale: 0.99 }}
      className="relative w-full text-left rounded-2xl px-8 py-7 border overflow-hidden transition-all duration-300"
      style={{
        background: isHovered ? `${color}14` : "rgba(255,255,255,0.04)",
        borderColor: isHovered ? `${color}55` : "rgba(255,255,255,0.10)",
        boxShadow: isHovered ? `0 8px 32px ${color}18` : "none",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-5 min-w-0">
          <div
            className="w-4 h-4 rounded-full shrink-0 transition-all duration-300"
            style={{
              backgroundColor: color,
              boxShadow: isHovered ? `0 0 14px ${color}` : "none",
            }}
          />
          <div className="min-w-0">
            <div className="text-white font-black text-2xl lg:text-3xl leading-tight tracking-tight">
              {config.ageRange}
            </div>
            <div
              className="text-[14px] font-mono uppercase tracking-[0.22em] mt-1 font-bold"
              style={{ color }}
            >
              {config.label}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className="text-[13px] font-semibold hidden sm:block transition-colors duration-300 whitespace-nowrap"
            style={{ color: isHovered ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.35)" }}
          >
            {config.stage}
          </span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0"
            style={{
              backgroundColor: isHovered ? color : "rgba(255,255,255,0.06)",
              border: `1px solid ${isHovered ? color : "rgba(255,255,255,0.10)"}`,
            }}
          >
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300"
              style={{
                color: isHovered ? "#fff" : color,
                transform: isHovered ? "translateX(1px)" : "translateX(0)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hover content — expands inside the card only */}
      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-5 border-t border-white/10 grid sm:grid-cols-2 gap-6">
              <div>
                <p
                  className="text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-3"
                  style={{ color }}
                >
                  Ask yourself
                </p>
                <ul className="space-y-2">
                  {config.hoverContent.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-white/70 text-[12px] leading-snug text-left">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[10px] font-mono font-black uppercase tracking-[0.3em] mb-3"
                  style={{ color }}
                >
                  How we help
                </p>
                <ul className="space-y-2">
                  {config.hoverContent.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 mt-[3px] shrink-0" style={{ color }} />
                      <span className="text-white/85 text-[12px] leading-snug font-medium text-left">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left full-height accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300"
        style={{ backgroundColor: color, opacity: isHovered ? 1 : 0 }}
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
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-[#050914]/40 pt-20 sm:pt-24 md:pt-28 pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] z-[1] pointer-events-none opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-[#050914] via-[#050914]/70 to-transparent z-[1] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT ───────────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Shield className="w-4 h-4 text-[#d4af37]/80 shrink-0" />
              <span className="text-[14px] font-mono font-bold uppercase tracking-[0.08em] sm:tracking-[0.25em] text-[#d4af37]/80">
                India's Most Trusted NRI Family Protection Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className="mb-6 w-full"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Is Your Parent's
              </div>
              <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight overflow-hidden">
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
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Protected?
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg font-medium mb-8"
            >
              Most NRI families discover financial problems only during a crisis —
              when it's already too late. Select your parents' age group to see
              exactly what needs to be done right now.
            </motion.p>

            {/* Compliance labels */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {["FEMA Compliant", "Registered Legal Firm", "24/7 Support"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]/70 shrink-0" />
                  <span className="text-white/70 text-[13px] font-bold tracking-wide">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-white/8" />
              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/40 font-bold shrink-0 px-1">
                Select age group
              </p>
              <div className="h-[1px] flex-1 bg-white/8" />
            </div>

            {/* Zone cards */}
            <div className="flex flex-col gap-3">
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

            <p className="text-[11px] font-mono text-white/30 tracking-wider text-center">
              Hover to preview · Click to view your plan
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap justify-center items-center gap-x-14 gap-y-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <div className="text-xl md:text-2xl font-black text-white">{s.val}</div>
              <div className="text-[11px] text-white/35 font-bold tracking-[0.15em] uppercase whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
