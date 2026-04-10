import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useUser, PHASE_CONFIG, Phase } from "@/context/UserContext";

const EASE = [0.16, 1, 0.3, 1] as const;

// Words that slot into: "Is Your Parents' [WORD] Protected?"
const CYCLING_WORDS = ["Future", "Insurance", "Banking", "Property", "Succession"];

const ZONES: Phase[] = ["green", "orange", "red"];

const STATS = [
  { val: "500+", label: "Families protected" },
  { val: "₹250Cr+", label: "Assets managed" },
  { val: "40+", label: "Jurisdictions" },
];

// ── Inline preview (shown above cards on hover) ────────────────
function PreviewPanel({ phase }: { phase: Phase }) {
  const config = PHASE_CONFIG[phase];
  const color = config.color;

  return (
    <motion.div
      key={phase}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="rounded-2xl p-5 border w-full"
      style={{
        background: "rgba(5,9,20,0.9)",
        borderColor: `${color}28`,
        backdropFilter: "blur(16px)",
      }}
    >
      <p className="text-[9px] font-mono font-black uppercase tracking-[0.35em] mb-3" style={{ color }}>
        Ask yourself
      </p>
      <ul className="space-y-2 mb-4">
        {config.hoverContent.questions.map((q, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ backgroundColor: color }} />
            <span className="text-white/55 text-[11px] leading-relaxed">{q}</span>
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-white/[0.06]">
        <p className="text-[9px] font-mono font-black uppercase tracking-[0.35em] mb-2" style={{ color }}>
          How we help
        </p>
        <ul className="space-y-1.5">
          {config.hoverContent.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" style={{ color }} />
              <span className="text-white/65 text-[11px] leading-relaxed font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ── Default panel (shown when nothing is hovered) ──────────────
function DefaultPanel() {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white mb-0.5">{s.val}</div>
            <div className="text-[10px] text-white/30 font-medium leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
      {/* Trust badges */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
        {["FEMA Compliant", "Registered Legal Firm", "24/7 Support"].map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#d4af37]/50" />
            <span className="text-white/30 text-[11px] font-medium">{t}</span>
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
  const config = PHASE_CONFIG[id];
  const color = config.color;

  return (
    <Link href={config.zonePage}>
      <motion.a
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        onClick={() => selectZone(id)}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full text-left rounded-2xl px-5 py-4 border transition-colors duration-200 overflow-hidden flex items-center justify-between gap-4 cursor-pointer"
        style={{
          background: isHovered ? `${color}09` : "rgba(255,255,255,0.03)",
          borderColor: isHovered ? `${color}45` : "rgba(255,255,255,0.08)",
          display: "flex",
        }}
      >
        {/* Left: dot + labels */}
        <div className="flex items-center gap-3 min-w-0">
          <motion.div
            animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
            transition={{ duration: 0.9, repeat: isHovered ? Infinity : 0 }}
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
          <div className="min-w-0">
            <div className="text-white font-black text-sm leading-tight">{config.ageRange}</div>
            <div className="text-[9px] font-mono uppercase tracking-[0.28em] mt-0.5" style={{ color }}>
              {config.label}
            </div>
          </div>
        </div>

        {/* Right: stage + arrow */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-white/25 text-[11px] font-medium hidden sm:block">{config.stage}</span>
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.25, x: isHovered ? 0 : -3 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowRight className="w-4 h-4" style={{ color }} />
          </motion.div>
        </div>

        {/* Corner glow */}
        <div
          className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-xl pointer-events-none transition-opacity duration-300"
          style={{ background: color, opacity: isHovered ? 0.07 : 0 }}
        />
      </motion.a>
    </Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: 3-line cycling headline ──────────────────── */}
          <div className="flex flex-col items-start">

            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <Shield className="w-3.5 h-3.5 text-[#d4af37]/50" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#d4af37]/50">
                India's Most Trusted NRI Family Protection Platform
              </span>
            </motion.div>

            {/* 3-line headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className="mb-6 w-full"
            >
              {/* Line 1 — static */}
              <div className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.06] tracking-tight">
                Is Your Parents'
              </div>

              {/* Line 2 — cycling (same size as h1, invisible spacer for height) */}
              <div className="relative text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.06] tracking-tight overflow-hidden">
                {/* Invisible spacer — fixes height to match font-size */}
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

              {/* Line 3 — static */}
              <div className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.06] tracking-tight">
                Protected?
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="text-white/45 text-base md:text-lg leading-relaxed max-w-xl font-medium"
            >
              Most NRI families discover financial problems only during a crisis —
              when it's already too late. Select your parents' age group below to
              see exactly what needs to be done right now.
            </motion.p>
          </div>

          {/* ── RIGHT: Preview + zone cards ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* Preview / default panel */}
            <div className="min-h-[152px] flex items-center">
              <AnimatePresence mode="wait">
                {hoveredZone ? (
                  <PreviewPanel key={hoveredZone} phase={hoveredZone} />
                ) : (
                  <DefaultPanel key="default" />
                )}
              </AnimatePresence>
            </div>

            {/* Divider + label */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 font-bold shrink-0">
                Select age group
              </p>
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
            </div>

            {/* Zone cards */}
            <div className="flex flex-col gap-2.5">
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

            <p className="text-[10px] font-mono text-white/15 tracking-widest text-center">
              Hover to preview · Click to view your plan
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
