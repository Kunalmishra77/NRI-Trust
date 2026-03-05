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
    <section className="relative bg-gradient-to-br from-[hsl(180,50%,10%)] via-[hsl(180,45%,14%)] to-[hsl(180,50%,12%)] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Amber radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(38_85%_55%_/_0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

      <motion.div
        variants={luxuryStagger}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav variants={elegantFadeUp} className="flex items-center gap-1.5 text-white/40 mb-6">
            <Link href="/" className="font-mono text-xs tracking-wider hover:text-amber-400 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-amber-500/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="font-mono text-xs tracking-wider hover:text-amber-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-mono text-xs tracking-wider text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          variants={elegantFadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={elegantFadeUp}
            className="text-lg md:text-xl text-white/50 max-w-2xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Bottom amber gradient line */}
      <motion.div
        variants={lineDraw}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent origin-center"
      />
    </section>
  );
}
