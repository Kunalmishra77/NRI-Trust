import { Link } from "wouter";
import { ChevronRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

// --- REUSABLE ANIMATION CONSTANTS ---
const EASE_PREMIUM = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: EASE_PREMIUM } 
  },
};

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs, badge = "Professional Advisory" }: PageHeaderProps) {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center pt-32 pb-24 overflow-hidden border-b border-white/[0.05] bg-[#050914]">
      {/* --- LAYER 0: ATMOSPHERIC OVERLAYS --- */}
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      
      {/* Primary Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,transparent_0%,#050914_100%)] z-[1] pointer-events-none opacity-90" />
      
      {/* Deep Glows */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#d4af37]/10 blur-[180px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/10 blur-[180px] translate-y-1/2 -translate-x-1/4 pointer-events-none z-[1]" />

      {/* Subtle Dust/Noise for texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.04] z-[1] pointer-events-none" />

      {/* --- LAYER 2: FOREGROUND CONTENT --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full"
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav variants={revealVariants} className="flex flex-wrap items-center gap-3 text-white/80 mb-12">
            <Link href="/" className="font-mono text-[11px] tracking-[0.3em] hover:text-[#d4af37] transition-colors uppercase font-black">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3">
                <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="font-mono text-[11px] tracking-[0.3em] hover:text-[#d4af37] transition-colors uppercase font-black">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-[11px] tracking-[0.3em] text-white uppercase font-black">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="max-w-5xl">
          {/* Context Badge */}
          {badge && (
            <motion.div 
              variants={revealVariants}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
            >
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[11px] font-mono font-black uppercase tracking-[0.4em] text-[#d4af37]">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={revealVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.15] mb-10 drop-shadow-2xl"
          >
            {/* If title has two parts, color the second part gold. */}
            {title.includes(':') ? (
              <>
                {title.split(':')[0]}: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {title.split(':')[1]}
                </span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={revealVariants}
              className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed"
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
        transition={{ duration: 1.5, ease: EASE_PREMIUM, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent origin-left"
      />
    </section>
  );
}
