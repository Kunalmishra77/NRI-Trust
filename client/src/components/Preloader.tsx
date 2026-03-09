import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050814] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

      {/* 3D Wireframe Globe simulation */}
      <div className="relative flex justify-center items-center h-48 w-48 mb-8 perspective-container">
        <motion.div
          animate={{ rotateY: 360, rotateX: 10 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="preserve-3d relative w-32 h-32"
        >
          {/* Latitude rings */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`lat-${i}`}
              className="absolute inset-0 border border-[#D4AF37]/20 rounded-full"
              style={{ transform: `rotateX(${i * 30}deg)` }}
            />
          ))}
          {/* Longitude rings */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`lon-${i}`}
              className="absolute inset-0 border border-[#D4AF37]/20 rounded-full"
              style={{ transform: `rotateY(${i * 30}deg)` }}
            />
          ))}
          
          {/* Connection lines to India (abstract representation) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Globe className="w-12 h-12 text-[#D4AF37] opacity-60 animate-pulse" strokeWidth={1} />
          </div>
        </motion.div>
        
        {/* Orbital dots */}
        <motion.div 
          animate={{ rotateZ: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#F3E5AB] rounded-full shadow-[0_0_10px_#F3E5AB]" />
        </motion.div>
      </div>

      {/* Branding and Loading text */}
      <div className="text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl font-serif text-[#F5F3EC] tracking-[0.2em] uppercase mb-4"
        >
          NRI Trust
        </motion.h1>
        
        <div className="flex items-center gap-4 justify-center">
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"
            initial={{ scaleX: 0, originX: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/80 font-semibold"
          >
            Establishing Secure Connection
          </motion.span>
          <motion.div 
            className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
