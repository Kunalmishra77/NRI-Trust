import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import useMagnetic from "@/hooks/useMagnetic";

export default function FinalCTA() {
  const magneticButtonRef = useMagnetic<HTMLButtonElement>();

  return (
    <section className="relative py-16 md:py-20 bg-[#050914] overflow-hidden border-t border-white/10">
      {/* High-Intensity Horizontal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent shadow-[0_0_100px_rgba(212,175,55,0.2)]" />
        <div className="absolute top-0 right-0 w-[30vw] h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Persuasive Narrative */}
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#d4af37]">
                Take Action Now
              </span>
            </motion.div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white leading-none mb-6">
              Don't Wait for a <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">Crisis to Act.</span>
            </h2>

            <p className="text-lg text-white/40 font-medium max-w-xl leading-relaxed">
              Most families discover financial problems only during emergencies. Let us help you protect your parents' financial life before it's too late.
            </p>
          </div>

          {/* Right: The Trigger */}
          <div className="shrink-0 flex flex-col items-center gap-6 w-full lg:w-auto">
            <Link href="/contact">
              <motion.button 
                ref={magneticButtonRef}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212,175,55,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#d4af37] text-[#050914] px-12 py-6 rounded-full font-black text-[14px] uppercase tracking-widest flex items-center gap-4 shadow-2xl transition-all duration-500 overflow-hidden relative group mx-auto lg:mx-0"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                
                {/* Sweep Shine */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-0"
                />
              </motion.button>
            </Link>

            <div className="flex items-center gap-6 opacity-30">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white">100% Secure</span>
              <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white">Free Consultation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

