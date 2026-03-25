import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe2, Shield } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import HeroForm from "./HeroForm";

// --- REUSABLE ANIMATION CONSTANTS ---
const EASE_PREMIUM = [0.16, 1, 0.3, 1];

const SLIDING_WORDS = ["Financial Peace", "Health Security", "Legal Control", "Global Legacy"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDING_WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // --- STAGGER REVEAL VARIANTS ---
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: EASE_PREMIUM } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050914]/40 pt-20 pb-10">
      {/* --- LAYER 0: ATMOSPHERIC OVERLAYS --- */}
      
      {/* Primary Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] z-[1] pointer-events-none opacity-90" />
      
      {/* Floor Glow to ground the 3D elements */}
      <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#050914] via-[#050914]/80 to-transparent z-[1] pointer-events-none" />
      
      {/* Subtle Dust/Noise for texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] z-[1] pointer-events-none" />

      {/* --- LAYER 2: FOREGROUND CONTENT --- */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-[20] w-full">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Sliding Text & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            {/* Main Headline with Sliding Text */}
            <div className="space-y-2 mb-10">
              <motion.h1 
                variants={revealVariants}
                className="text-3xl md:text-6xl xl:text-7xl font-sans font-black leading-tight tracking-tight text-white drop-shadow-2xl"
              >
                Your Parents'
              </motion.h1>
              
              <div className="h-[50px] md:h-[80px] xl:h-[100px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                    className="absolute inset-0 flex items-center justify-start"
                  >
                    <span className="text-3xl md:text-6xl xl:text-7xl font-sans font-black leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] whitespace-nowrap filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      {SLIDING_WORDS[index]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.h1 
                variants={revealVariants}
                className="text-3xl md:text-6xl xl:text-7xl font-sans font-black leading-tight tracking-tight text-white drop-shadow-2xl"
              >
                Managed Globally.
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p 
              variants={revealVariants} 
              className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-12 font-medium"
            >
              The dedicated family office and executive stewardship bridge for global NRIs. Absolute operational control over your Indian legacy from anywhere in the world.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={revealVariants} className="flex flex-wrap items-center gap-6">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212,175,55,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#d4af37] text-[#050914] px-10 py-5 rounded-full font-black text-[15px] tracking-wide flex items-center justify-center gap-3 shadow-2xl transition-all duration-500 group relative overflow-hidden"
                >
                  <span className="relative z-10 font-black">Explore Services</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                  
                  {/* Sweep Shine Effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                  />
                </motion.button>
              </Link>
              
              <Link href="/how-it-works">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-[15px] tracking-wide flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md transition-all duration-500 group"
                >
                  <Globe2 className="w-5 h-5 text-[#d4af37] group-hover:rotate-12 transition-transform" />
                  Our Process
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Form (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <HeroForm />
          </div>

        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5, ease: EASE_PREMIUM }}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-4 z-10 hidden xl:flex"
      >
        <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#d4af37]/60"
          />
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/20 font-bold rotate-90 translate-y-8">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

