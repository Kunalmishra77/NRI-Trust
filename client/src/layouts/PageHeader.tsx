import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger, lineDraw } from "@/motion/variants";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-[#050806] pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-white/[0.05]">
      {/* Background Ambience */}
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] mesh-glow-emerald opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] mesh-glow-gold opacity-10 blur-[100px] pointer-events-none" />

      <motion.div
        variants={luxuryStagger}
        initial="hidden"
        animate="visible"
        className="max-container relative z-10"
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav variants={elegantFadeUp} className="flex flex-wrap items-center gap-2 text-white/40 mb-10">
            <Link href="/" className="font-mono text-[10px] tracking-[0.2em] hover:text-accent transition-colors uppercase font-bold">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-accent/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="font-mono text-[10px] tracking-[0.2em] hover:text-accent transition-colors uppercase font-bold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/80 uppercase font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          variants={elegantFadeUp}
          className="display-title !text-5xl md:!text-6xl lg:!text-7xl mb-8"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={elegantFadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        variants={lineDraw}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-center"
      />
    </section>
  );
}
