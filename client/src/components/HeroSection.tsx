import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Lock, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { FloatingLegalDoc, ComplianceCard, VaultMotif } from "./ui/three-d-elements";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function HeroSection() {
 const containerRef = useRef<HTMLElement>(null);
 const { scrollY } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"]
 });

 const y1 = useTransform(scrollY, [0, 500], [0, 200]);
 const opacity = useTransform(scrollY, [0, 300], [1, 0]);

 return (
  <section
   ref={containerRef}
   className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container"
  >
   {/* ─── CINEMATIC BACKGROUND ─── */}
   <div className="absolute inset-0 bg-background z-0" />
   <div className="absolute inset-0 noise-overlay opacity-60 z-[1]" />
   
   {/* Animated Light Streaks */}
   <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
    <motion.div 
     animate={{ x: ["-100%", "200%"] }}
     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
     className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[15deg]" 
    />
   </div>

   {/* Depth Glows */}
   <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] mesh-glow-emerald blur-[120px] opacity-30 pointer-events-none" />
   <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] mesh-glow-gold blur-[100px] opacity-60 pointer-events-none" />

   <div className="max-container relative z-10 pt-20">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
     
     {/* ─── CONTENT (7 Cols) ─── */}
     <motion.div
      style={{ y: y1, opacity }}
      variants={luxuryStagger}
      initial="hidden"
      animate="visible"
      className="lg:col-span-7 text-center lg:text-left"
     >
      <motion.div variants={elegantFadeUp} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
       <div className="h-px w-12 bg-accent/40" />
       <span className="accent-label !mb-0">Elderly Financial & Legal Care</span>
      </motion.div>

      <motion.h1
       variants={elegantFadeUp}
       className="display-title mb-8 !text-5xl md:!text-6xl lg:!text-7xl"
      >
       Protecting Your <br />
       <span className="text-gradient-gold italic">Parents' Well-Being</span> <br />
       While You're Away.
      </motion.h1>

      <motion.p
       variants={elegantFadeUp}
       className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light"
      >
       A dedicated stewardship service for NRIs with aging parents in India. We handle the complexities of banking, legal, and property compliance so you can focus on your life abroad.
      </motion.p>

      <motion.div 
       variants={elegantFadeUp}
       className="inline-flex items-center gap-3 bg-accent/5 border border-accent/20 px-5 py-3 rounded-2xl mb-12"
      >
       <ShieldAlert className="w-4 h-4 text-accent" />
       <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Purely Financial & Legal • No Medical Services</span>
      </motion.div>

      <motion.div
       variants={elegantFadeUp}
       className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
      >
       <Link href="/contact">
        <button className="btn-premium-primary min-w-[240px] flex items-center justify-center gap-3 group">
         Book Review Session
         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
       <Link href="/services">
        <button className="btn-premium-outline min-w-[240px]">
         Our Services
        </button>
       </Link>
      </motion.div>
     </motion.div>

     {/* ─── IMAGE COMPOSITION (5 Cols) ─── */}
     <div className="lg:col-span-5 relative h-[550px] hidden lg:block perspective-container">
      <motion.div 
       initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
       animate={{ opacity: 1, scale: 1, rotateY: 0 }}
       transition={{ duration: 1.2, ease: "easeOut" }}
       className="relative w-full h-full preserve-3d flex items-center justify-center"
      >
       {/* Image Wrapper - Made smaller with w-[85%] */}
       <div className="relative w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(207,160,82,0.1)] group">
        <img 
         src="/hero-parents.png" 
         alt="Elderly Parents in India" 
         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
       </div>
       
       {/* Floating UI Elements - Moved further out and scaled down */}
       <FloatingLegalDoc className="absolute top-0 -right-4 z-20 scale-75 origin-top-right" delay={0.2} />
       <ComplianceCard title="Parent Profile" status="Secure" className="absolute bottom-0 -left-4 z-30 scale-75 origin-bottom-left" delay={0.5} />
      </motion.div>
     </div>
    </div>
   </div>

   {/* Scroll Indicator */}
   <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 cursor-pointer"
    onClick={() => containerRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
   >
    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent opacity-80">Scroll to Explore</span>
    <ChevronDown className="w-5 h-5 text-accent opacity-80" />
   </motion.div>
  </section>
 );
}
