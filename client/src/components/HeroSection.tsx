import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Elderly_Indian_parents_at_home_c0cf334b.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { elegantFadeUp, luxuryStagger, useCountUp } from "@/motion/variants";
import { useRef } from "react";

function CountUpStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { ref, display } = useCountUp(end, 2);
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">
        <span ref={ref}>{display}</span>{suffix}
      </div>
      <div className="text-xs text-white/40 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[hsl(180,50%,8%)]"
      aria-label="Hero section"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(38_85%_55%_/_0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(180_50%_20%_/_0.15)_0%,transparent_50%)]" />

      {/* Main content: Editorial split */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT column (text) — 7 of 12 cols */}
          <motion.div
            variants={luxuryStagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.span
              variants={elegantFadeUp}
              className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-4"
            >
              Financial & Legal Advisory for NRIs
            </motion.span>

            <motion.h1
              variants={elegantFadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight"
            >
              You're Building Your Life Abroad.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                We're Protecting Your Legacy at Home.
              </span>
            </motion.h1>

            <motion.p
              variants={elegantFadeUp}
              className="text-lg md:text-xl text-white/50 mb-10 max-w-xl leading-relaxed font-light"
            >
              Banking compliance, legal succession, property management, insurance claims, and tax filings —{" "}
              <span className="font-medium text-amber-300/80">one trusted team handles it all</span> so you don't have to.
            </motion.p>

            <motion.div
              variants={elegantFadeUp}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden text-base px-8 py-6 bg-gradient-to-r from-accent to-amber-500 text-white shadow-2xl shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 font-bold tracking-wide">Book Your Free Review Session</span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 transition-transform group-hover:translate-x-full duration-700 ease-out" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-white/15 text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT column (image) — 5 of 12 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                style={{ y: imgY }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
              >
                <img
                  src={heroImage}
                  alt="Happy elderly Indian parents at home"
                  className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]"
                />
              </motion.div>
              {/* Decorative amber glow behind image */}
              <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Stats Bar — full width, separated */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat end={200} suffix="+" label="NRI Families" />
            <CountUpStat end={40} suffix="+" label="Countries Served" />
            <CountUpStat end={5} suffix="" label="Service Areas" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">Since 2020</div>
              <div className="text-xs text-white/40 font-medium tracking-wide uppercase">5+ Years</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => {
            const el = document.querySelector("#problems");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-amber-400 transition-colors"
          aria-label="Scroll down to learn more"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
        </button>
      </motion.div>
    </section>
  );
}
