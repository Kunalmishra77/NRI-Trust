import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Landmark, Receipt, Scale, Shield } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

const ServiceCard = ({ icon: Icon, title, delay, href }: { icon: any, title: string, delay: number, href: string }) => (
  <Link href={href}>
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: 30 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, translateZ: 30, borderColor: "rgba(212,175,55,0.4)" }}
      className="glass-panel p-6 rounded-2xl border-white/10 flex items-center gap-4 w-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl group cursor-pointer transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <span className="text-[#F5F3EC] font-serif text-lg group-hover:text-accent transition-colors">{title}</span>
    </motion.div>
  </Link>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050814]"
    >
      {/* ─── CINEMATIC BACKGROUND ─── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/80 via-[#050814]/40 to-[#050814] z-10" />
        <div className="absolute inset-0 bg-[#050814]/20 z-10" />
        
        {/* Color-rich Image Fallback/Background */}
        <img 
          src="/hero-parents.png" 
          alt="Family legacy" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 pointer-events-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-senior-man-on-a-video-call-with-his-family-34551-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Abstract Volumetric Glows */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.08)_0%,transparent_60%)] blur-[120px] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)] blur-[120px] pointer-events-none z-[2]" />

      <div className="max-container relative z-20 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ─── CONTENT (7 Cols) ─── */}
          <motion.div
            style={{ y: y1, opacity }}
            variants={luxuryStagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div variants={elegantFadeUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F3E5AB] font-semibold">Global Fiduciary Stewardship</span>
              </div>
            </motion.div>

            <motion.h1
              variants={elegantFadeUp}
              className="text-5xl md:text-7xl xl:text-[5.5rem] font-serif font-medium leading-[1.05] tracking-tighter text-[#F5F3EC] mb-8"
            >
              Your Parents’ Financial <br />
              <span className="text-gradient-gold italic">Peace of Mind,</span> <br />
              Managed From Anywhere.
            </motion.h1>

            <motion.p
              variants={elegantFadeUp}
              className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 font-light"
            >
              The dedicated financial, legal, and administrative family office for NRI families. Absolute operational control over your Indian legacy.
            </motion.p>

            <motion.div
              variants={elegantFadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link href="/contact">
                <button className="btn-premium-primary min-w-[260px] flex items-center justify-center gap-3 group">
                  Book Free Review
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="btn-premium-outline min-w-[260px] flex items-center justify-center gap-3">
                  <Globe2 className="w-4 h-4 text-accent" />
                  Explore Services
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── 3D FLOATING CARDS (5 Cols) ─── */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end gap-6 perspective-container">
            <ServiceCard icon={Landmark} title="Banking & KYC" delay={0.2} href="/services/banking-kyc" />
            <ServiceCard icon={Scale} title="Legal & Succession" delay={0.4} href="/services/legal-succession" />
            <ServiceCard icon={ShieldCheck} title="Property Stewardship" delay={0.6} href="/services/property-tenancy" />
            <ServiceCard icon={Receipt} title="Income Tax & TDS" delay={0.8} href="/services/income-tax" />
            <ServiceCard icon={Shield} title="Insurance Advocacy" delay={1.0} href="/services/insurance" />
            
            {/* Background orbital rings for depth */}
            <motion.div 
              animate={{ rotateZ: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 -z-10 border border-white/5 rounded-full w-[500px] h-[500px] opacity-30"
            />
            <motion.div 
              animate={{ rotateZ: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 top-1/2 -translate-y-1/2 -z-10 border border-white/5 rounded-full w-[400px] h-[400px] opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
