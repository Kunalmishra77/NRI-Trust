import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Lock, ShieldAlert, Globe2 } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { FloatingLegalDoc, ComplianceCard } from "./ui/three-d-elements";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

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
   className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B14] perspective-container"
  >
   {/* ─── LUXURY BACKGROUND ─── */}
   <div className="absolute inset-0 noise-overlay opacity-60 z-[1]" />
   
   {/* Abstract Volumetric Glows */}
   <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-[100px] pointer-events-none z-[2]" />
   <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)] blur-[100px] pointer-events-none z-[2]" />

   {/* Animated Lines */}
   <motion.div 
    animate={{ x: ["-100%", "200%"] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rotate-[20deg] z-[2]" 
   />

   <div className="max-container relative z-10 pt-32 pb-20">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
     
     {/* ─── CONTENT (7 Cols) ─── */}
     <motion.div
      style={{ y: y1, opacity }}
      variants={luxuryStagger}
      initial="hidden"
      animate="visible"
      className="lg:col-span-7 text-center lg:text-left"
     >
      <motion.div variants={elegantFadeUp} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
       <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-md">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#F3E5AB] font-semibold">Private Advisory • Non-Medical</span>
       </div>
      </motion.div>

      <motion.h1
       variants={elegantFadeUp}
       className="display-title mb-8 text-[#F5F3EC]"
      >
       Stewardship For <br />
       Your Parents' <span className="text-gradient-gold italic">Indian Legacy.</span>
      </motion.h1>

      <motion.p
       variants={elegantFadeUp}
       className="text-lg md:text-xl lg:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 font-light"
      >
       An elite digital family office exclusively for NRIs. We provide absolute operational control over your parents' banking, property, tax, and legal frameworks in India.
      </motion.p>

      <motion.div
       variants={elegantFadeUp}
       className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
      >
       <Link href="/contact">
        <button className="btn-premium-primary min-w-[240px] flex items-center justify-center gap-3 group">
         Initiate Private Review
         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
       <Link href="/services">
        <button className="btn-premium-outline min-w-[240px] flex items-center justify-center gap-3">
         <Globe2 className="w-4 h-4 text-[#D4AF37]" />
         Examine Practice Areas
        </button>
       </Link>
      </motion.div>
      
      <motion.div variants={elegantFadeUp} className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
       <div className="flex items-center gap-3">
        <Lock className="w-4 h-4 text-[#D4AF37]" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-white">Bank-Grade Security</span>
       </div>
       <div className="w-px h-4 bg-white/20" />
       <div className="flex items-center gap-3">
        <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-white">Fiduciary Oath</span>
       </div>
      </motion.div>
     </motion.div>

     {/* ─── CINEMATIC IMAGE COMPOSITION (5 Cols) ─── */}
     <div className="lg:col-span-5 relative h-[600px] hidden lg:block perspective-container">
      <motion.div 
       initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
       animate={{ opacity: 1, scale: 1, rotateY: 0 }}
       transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
       className="relative w-full h-full preserve-3d flex items-center justify-center"
      >
       {/* Main Image Frame - Refined Luxury Treatment */}
       <div className="relative w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0D1322] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
        
        <img 
         src="/hero-parents.png" 
         alt="Elite Indian Parents" 
         className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-[#050814]/20 to-transparent pointer-events-none z-10" />
        
        {/* Subtle inner border */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 z-20 pointer-events-none" />
       </div>
       
       {/* Floating Interactive 3D Elements */}
       <Link href="/services/legal-succession">
        <motion.div 
         whileHover={{ scale: 0.9, z: 50, rotateY: -10 }} 
         className="absolute top-[8%] -right-[8%] z-30 cursor-pointer drop-shadow-2xl"
        >
         <FloatingLegalDoc className="scale-75 backdrop-blur-xl bg-[#0B101E]/90 border border-[#D4AF37]/20" />
        </motion.div>
       </Link>

       <Link href="/about">
        <motion.div 
         whileHover={{ scale: 0.9, z: 50, rotateY: 10 }} 
         className="absolute bottom-[12%] -left-[8%] z-30 cursor-pointer drop-shadow-2xl"
        >
         <ComplianceCard title="Identity Verified" status="Encrypted" className="scale-75 backdrop-blur-xl bg-[#0B101E]/90 border border-[#10B981]/20" />
        </motion.div>
       </Link>
       
       {/* Background orbital rings */}
       <motion.div 
        animate={{ rotateZ: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 border border-white/5 rounded-full scale-[1.2] opacity-50"
       />
      </motion.div>
     </div>
    </div>
   </div>

   {/* Scroll Indicator */}
   <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group"
    onClick={() => containerRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
   >
    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">Descend</span>
    <ChevronDown className="w-4 h-4 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
   </motion.div>
  </section>
 );
}
