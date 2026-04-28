import { Link } from "wouter";
import { ChevronRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

interface Breadcrumb { label: string; href?: string; }
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
}

const STATS = [
  { val: "200+", label: "Elite NRI Families" },
  { val: "40+",  label: "Jurisdictions" },
  { val: "15+",  label: "Years Experience" },
  { val: "24/7", label: "Active Protection" },
];

export default function PageHeader({ title, subtitle, breadcrumbs, badge = "Professional Advisory" }: PageHeaderProps) {
  return (
    <section className="relative min-h-[72vh] w-full flex flex-col justify-center pt-32 pb-0 overflow-hidden border-b border-white/[0.05] bg-[#050914]">

      {/* ── BACKGROUND LAYERS ─────────────────────────────── */}

      {/* Fine grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Stage spotlight — focused ellipse behind content */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[55vw] h-[50vw] bg-[#d4af37]/14 blur-[130px] rounded-full pointer-events-none z-[1]" />
      {/* Depth: cool blue counter-glow bottom */}
      <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[45vw] h-[30vw] bg-blue-900/18 blur-[120px] rounded-full pointer-events-none z-[1]" />

      {/* Vignette — keep edges dark so content pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_40%,#050914_90%)] z-[2] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.05] z-[2] pointer-events-none" />

      {/* ── CORNER RING CLUSTERS ──────────────────────────── */}

      {/* Top-right corner */}
      <div className="absolute -top-24 -right-24 z-[3] pointer-events-none opacity-30">
        <div className="w-[340px] h-[340px] rounded-full border border-[#d4af37]/40 absolute top-0 right-0" />
        <div className="w-[220px] h-[220px] rounded-full border border-[#d4af37]/50 absolute top-[60px] right-[60px]" />
        <div className="w-[110px] h-[110px] rounded-full border border-[#d4af37]/60 absolute top-[115px] right-[115px]" />
      </div>

      {/* Bottom-left corner */}
      <div className="absolute -bottom-20 -left-20 z-[3] pointer-events-none opacity-25">
        <div className="w-[280px] h-[280px] rounded-full border border-[#d4af37]/35 absolute bottom-0 left-0" />
        <div className="w-[170px] h-[170px] rounded-full border border-[#d4af37]/45 absolute bottom-[55px] left-[55px]" />
        <div className="w-[80px] h-[80px] rounded-full border border-[#d4af37]/55 absolute bottom-[100px] left-[100px]" />
      </div>

      {/* ── FLOATING PARTICLES ────────────────────────────── */}
      {[
        { top: "18%", left: "8%",  size: "w-1.5 h-1.5", delay: 0,   dur: 6  },
        { top: "65%", left: "18%", size: "w-1 h-1",     delay: 2,   dur: 8  },
        { top: "25%", right: "9%", size: "w-2 h-2",     delay: 1,   dur: 7  },
        { top: "70%", right: "6%", size: "w-1 h-1",     delay: 3,   dur: 9  },
        { top: "45%", left: "5%",  size: "w-1 h-1",     delay: 1.5, dur: 7.5},
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -14 : 12, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className={`absolute ${p.size} rounded-full bg-[#d4af37]/50 blur-[1px] z-[4] pointer-events-none`}
          style={{ top: p.top, left: (p as any).left, right: (p as any).right }}
        />
      ))}

      {/* ── MAIN CONTENT ──────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full text-center pb-16"
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link href="/" className="font-mono text-[11px] tracking-[0.28em] text-white/45 hover:text-[#d4af37] transition-colors uppercase font-bold">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3">
                <ChevronRight className="w-3 h-3 text-[#d4af37]/50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="font-mono text-[11px] tracking-[0.28em] text-white/45 hover:text-[#d4af37] transition-colors uppercase font-bold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-[11px] tracking-[0.28em] text-white/70 uppercase font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="flex flex-col items-center max-w-4xl mx-auto">

          {/* Badge with flanking lines */}
          {badge && (
            <motion.div variants={item} className="flex items-center gap-5 mb-10">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-[#d4af37]/25 backdrop-blur-md">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.45em] text-[#d4af37]">
                  {badge}
                </span>
              </div>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-sans font-black tracking-tight text-white leading-[1.08] mb-7"
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

          {/* Gold rule beneath title */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 mb-7"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/70" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={item}
              className="text-base md:text-lg text-white/50 max-w-xl font-light leading-relaxed tracking-wide"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* ── BOTTOM STATS STRIP ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
        className="relative z-[20] border-t border-white/[0.06] bg-white/[0.015] backdrop-blur-sm"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-4 bg-white/10 hidden sm:block" />}
              <span className="text-[13px] font-black text-white">{s.val}</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">{s.label}</span>
            </div>
          ))}
        </div>
        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent origin-center"
        />
      </motion.div>
    </section>
  );
}
