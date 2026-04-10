import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe2, ChevronRight, Shield } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import HeroForm from "./HeroForm";
import { useUser, PHASE_CONFIG, Phase } from "@/context/UserContext";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Zone card data ─────────────────────────────────────────────
const ZONES: { id: Phase; emoji: string }[] = [
  { id: 'green',  emoji: '🟢' },
  { id: 'orange', emoji: '🟠' },
  { id: 'red',    emoji: '🔴' },
];

// ── Hover preview panel ────────────────────────────────────────
function HoverPanel({ config, color }: { config: typeof PHASE_CONFIG['green']; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.22, ease: EASE }}
      className="absolute bottom-[calc(100%+12px)] left-0 right-0 z-50 rounded-2xl p-5 backdrop-blur-xl border shadow-2xl"
      style={{
        background: 'rgba(5,9,20,0.97)',
        borderColor: `${color}30`,
        boxShadow: `0 -4px 40px ${color}12`,
      }}
    >
      {/* Questions */}
      <div className="mb-4">
        <p className="text-[9px] font-mono font-black uppercase tracking-[0.35em] mb-2.5" style={{ color }}>
          Ask yourself
        </p>
        <ul className="space-y-1.5">
          {config.hoverContent.questions.map((q, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />
              <span className="text-white/60 text-[11px] leading-relaxed">{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Problems */}
      <div className="mb-4 pt-3.5 border-t border-white/[0.06]">
        <p className="text-[9px] font-mono font-black uppercase tracking-[0.35em] mb-2.5 text-white/30">
          What we see
        </p>
        <ul className="space-y-1.5">
          {config.hoverContent.problems.map((p, i) => (
            <li key={i} className="text-white/40 text-[11px] leading-relaxed italic">
              "{p}"
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="pt-3.5 border-t border-white/[0.06]">
        <p className="text-[9px] font-mono font-black uppercase tracking-[0.35em] mb-2.5" style={{ color }}>
          How we help
        </p>
        <ul className="space-y-1.5">
          {config.hoverContent.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" style={{ color }} />
              <span className="text-white/70 text-[11px] leading-relaxed font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow pointing down */}
      <div
        className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b"
        style={{ background: 'rgba(5,9,20,0.97)', borderColor: `${color}30` }}
      />
    </motion.div>
  );
}

// ── Zone picker card ───────────────────────────────────────────
function ZoneCard({ id, onSelect }: { id: Phase; onSelect: (p: Phase) => void }) {
  const [hovered, setHovered] = useState(false);
  const config = PHASE_CONFIG[id];
  const color = config.color;

  return (
    <div className="relative" onMouseLeave={() => setHovered(false)}>
      <AnimatePresence>{hovered && <HoverPanel config={config} color={color} />}</AnimatePresence>

      <motion.button
        onMouseEnter={() => setHovered(true)}
        onClick={() => { setHovered(false); onSelect(id); }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="relative w-full text-left rounded-2xl p-5 border transition-all duration-300 overflow-hidden group"
        style={{
          background: hovered ? `${color}08` : 'rgba(255,255,255,0.03)',
          borderColor: hovered ? `${color}40` : 'rgba(255,255,255,0.08)',
          boxShadow: hovered ? `0 8px 32px ${color}12` : 'none',
        }}
      >
        {/* Phase dot */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={hovered ? { scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em]" style={{ color }}>
            {config.label}
          </span>
        </div>

        {/* Age range */}
        <div className="text-white font-black text-sm mb-1 leading-tight">
          {config.ageRange}
        </div>

        {/* Stage */}
        <div className="text-white/35 text-[11px] font-medium leading-snug">
          {config.stage}
        </div>

        {/* Arrow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4"
        >
          <ArrowRight className="w-3.5 h-3.5" style={{ color }} />
        </motion.div>

        {/* Corner glow */}
        <div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
          style={{ background: color, opacity: hovered ? 0.06 : 0 }}
        />
      </motion.button>
    </div>
  );
}

// ── Heartbeat SVG ──────────────────────────────────────────────
function PhaseHeartbeat({ color, pulse }: { color: string; pulse: number }) {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none opacity-20">
      <svg viewBox="0 0 400 40" className="w-80 h-10">
        <motion.polyline
          points="0,20 40,20 50,4 60,36 70,20 110,20 120,8 130,32 140,20 180,20 190,4 200,36 210,20 250,20 260,8 270,32 280,20 320,20 330,8 340,32 350,20 400,20"
          fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <motion.circle r="2.5" fill={color}
          animate={{ cx: [0, 400], opacity: [1, 0.4, 1] }}
          transition={{ duration: pulse, repeat: Infinity, ease: "linear" }}
          cy="20" style={{ filter: `drop-shadow(0 0 3px ${color})` }}
        />
      </svg>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function HeroSection() {
  const { phase, selectZone, zoneSelected } = useUser();
  const phaseConfig = phase ? PHASE_CONFIG[phase] : null;
  const phaseColor = phaseConfig?.color || '#d4af37';
  const phasePulse = phaseConfig?.pulse || 2.5;
  const isRed = phase === 'red';

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050914]/40 pt-20 pb-10">

      {/* Phase glow overlay */}
      <AnimatePresence>
        {phase && (
          <motion.div
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ background: `radial-gradient(ellipse 60% 50% at 20% 50%, ${phaseColor}07, transparent)` }}
          />
        )}
      </AnimatePresence>

      {/* Emergency banner — red */}
      <AnimatePresence>
        {isRed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="absolute top-20 left-0 right-0 z-[25] flex justify-center"
          >
            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-red-500/15 border border-red-500/30 backdrop-blur-sm">
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.7, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-400 text-xs font-black uppercase tracking-widest">
                Emergency Response Active · 2-hour callback guaranteed
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] z-[1] pointer-events-none opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#050914] via-[#050914]/80 to-transparent z-[1] pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full">
        <AnimatePresence mode="wait">

          {/* ── STATE A: No zone selected ────────────────────── */}
          {!zoneSelected && (
            <motion.div
              key="state-a"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex flex-col items-start max-w-3xl"
            >
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

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6"
              >
                Is Your Parents'
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">
                  Future Protected?
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
                className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-12 font-medium"
              >
                Most NRI families discover financial problems only during a crisis —
                when it's already too late. Select your parents' age group to see
                what you need right now.
              </motion.p>

              {/* Zone picker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                className="w-full"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 mb-4 font-bold">
                  Select your parents' age group
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                  {ZONES.map(z => (
                    <ZoneCard key={z.id} id={z.id} onSelect={selectZone} />
                  ))}
                </div>
                <p className="text-[10px] font-mono text-white/15 mt-5 tracking-widest">
                  Hover to preview · Click to personalise
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* ── STATE B: Zone selected ───────────────────────── */}
          {zoneSelected && phaseConfig && (
            <motion.div
              key={`state-b-${phase}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20 items-center"
            >
              {/* Left col */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex flex-col items-start"
              >
                {/* Phase badge */}
                <div
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                  style={{ backgroundColor: `${phaseColor}12`, border: `1px solid ${phaseColor}30` }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                    transition={{ duration: phasePulse, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full absolute"
                    style={{ backgroundColor: phaseColor }}
                  />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phaseColor }} />
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]" style={{ color: phaseColor }}>
                    {phaseConfig.label} · {phaseConfig.sublabel}
                  </span>
                </div>

                {/* Phase headline */}
                <div className="space-y-2 mb-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
                    className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight"
                  >
                    {phaseConfig.heroHeadline[0]}
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
                    className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight"
                    style={{ color: phaseColor, textShadow: `0 0 40px ${phaseColor}35` }}
                  >
                    {phaseConfig.heroHeadline[1]}
                  </motion.h1>
                </div>

                {/* Sub */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
                  className="text-white/55 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-medium"
                >
                  {phaseConfig.heroSub}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
                  className="flex flex-wrap items-center gap-4 mb-8"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: `0 20px 40px ${phaseColor}30` }}
                      whileTap={{ scale: 0.96 }}
                      className="px-8 py-4 rounded-full font-black text-sm tracking-wide flex items-center gap-3 shadow-xl transition-all duration-400 relative overflow-hidden text-[#050914]"
                      style={{ backgroundColor: phaseColor }}
                    >
                      <span className="relative z-10">{phaseConfig.ctaText}</span>
                      <ArrowRight className="w-4 h-4 relative z-10" />
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      />
                    </motion.button>
                  </Link>

                  <Link href={phaseConfig.zonePage}>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-3 border bg-white/5 backdrop-blur-md transition-all duration-400"
                      style={{ borderColor: `${phaseColor}35`, color: phaseColor }}
                    >
                      <Globe2 className="w-4 h-4" />
                      Learn about your zone
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Change zone link */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => selectZone(phase!)}
                  className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors"
                >
                  ← Change age group
                </motion.button>
              </motion.div>

              {/* Right col: HeroForm */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                className="hidden lg:flex justify-end"
              >
                <HeroForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phase heartbeat */}
      {phase && <PhaseHeartbeat color={phaseColor} pulse={phasePulse} />}

      {/* Scroll indicator */}
      {zoneSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-10 flex-col items-center gap-4 z-10 hidden xl:flex"
        >
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ backgroundColor: `${phaseColor}60` }}
            />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/20 font-bold rotate-90 translate-y-8">
            Scroll
          </span>
        </motion.div>
      )}
    </section>
  );
}
