import { Link } from "wouter";
import { ChevronRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

interface Breadcrumb { label: string; href?: string; }
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs, badge = "Professional Advisory" }: PageHeaderProps) {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center pt-32 pb-24 overflow-hidden border-b border-white/[0.05] bg-[#050914]">

      {/* ── BACKGROUND LAYERS ──────────────────────────────── */}

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold glow — top-center */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70vw] h-[55vw] bg-[#d4af37]/18 blur-[160px] pointer-events-none z-[1]" />
      {/* Blue accent glow — bottom-left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[40vw] bg-blue-800/15 blur-[140px] pointer-events-none z-[1]" />
      {/* Gold accent glow — bottom-right */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vw] bg-[#d4af37]/10 blur-[120px] pointer-events-none z-[1]" />

      {/* Radial vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050914_85%)] z-[2] pointer-events-none" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay opacity-[0.06] z-[2] pointer-events-none" />

      {/* ── DECORATIVE RINGS (centered behind content) ─────── */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
        {/* Outer ring */}
        <div className="w-[580px] h-[580px] rounded-full border border-[#d4af37]/8 absolute" />
        {/* Mid ring */}
        <div className="w-[400px] h-[400px] rounded-full border border-[#d4af37]/12 absolute" />
        {/* Inner ring */}
        <div className="w-[240px] h-[240px] rounded-full border border-[#d4af37]/18 absolute" />
        {/* Center dot */}
        <div className="w-3 h-3 rounded-full bg-[#d4af37]/30 absolute" />
        {/* Horizontal line through center */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/12 to-transparent absolute" />
        {/* Vertical line through center */}
        <div className="h-full w-px bg-gradient-to-b from-transparent via-[#d4af37]/12 to-transparent absolute" />
      </div>

      {/* ── FLOATING ORBS ──────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-[#d4af37]/50 blur-[2px] z-[4] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[55%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 blur-[1px] z-[4] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-white/30 blur-[1px] z-[4] pointer-events-none"
      />

      {/* ── FOREGROUND CONTENT ─────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full text-center"
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav variants={item} className="flex flex-wrap items-center justify-center gap-3 text-white/60 mb-10">
            <Link href="/" className="font-mono text-[11px] tracking-[0.3em] hover:text-[#d4af37] transition-colors uppercase font-bold">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3">
                <ChevronRight className="w-3 h-3 text-[#d4af37]/60" />
                {crumb.href ? (
                  <Link href={crumb.href} className="font-mono text-[11px] tracking-[0.3em] hover:text-[#d4af37] transition-colors uppercase font-bold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-[11px] tracking-[0.3em] text-white/80 uppercase font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Badge */}
          {badge && (
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-[#d4af37]/20 mb-8 backdrop-blur-md"
            >
              <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-mono font-black uppercase tracking-[0.4em] text-[#d4af37]">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.1] mb-8 drop-shadow-2xl"
          >
            {title.includes(":") ? (
              <>
                {title.split(":")[0]}:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">
                  {title.split(":")[1]}
                </span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          {/* Divider line */}
          <motion.div
            variants={item}
            className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mb-8"
          />

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent origin-left"
      />
    </section>
  );
}
