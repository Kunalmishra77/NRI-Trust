import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { AlertCircle, ArrowUpRight, ShieldAlert, Landmark, Home, Heart, FileText, Zap, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const anxieties = [
  {
    title: "Underinsured",
    problem: "Your parents may be underinsured without knowing it.",
    impact: "No cover when it matters most.",
    icon: Heart,
    color: "rgba(244, 63, 94, 0.2)",
    href: "/services/insurance"
  },
  {
    title: "Scattered Accounts",
    problem: "Multiple bank accounts may be scattered and untracked.",
    impact: "Money stuck, no one knows where.",
    icon: Landmark,
    color: "rgba(249, 115, 22, 0.2)",
    href: "/services/banking-kyc"
  },
  {
    title: "Missing Documents",
    problem: "Property documents may not be updated or accessible.",
    impact: "Legal trouble during transfer.",
    icon: FileText,
    color: "rgba(245, 158, 11, 0.2)",
    href: "/services/property-tenancy"
  },
  {
    title: "Wrong Nominees",
    problem: "Nominees may be missing or incorrect across accounts.",
    impact: "Family can't access funds.",
    icon: ShieldAlert,
    color: "rgba(220, 38, 38, 0.2)",
    href: "/services/legal-succession"
  },
  {
    title: "No Emergency Plan",
    problem: "In an emergency, no one knows what to do.",
    impact: "Panic and costly delays.",
    icon: Zap,
    color: "rgba(239, 68, 68, 0.2)",
    href: "/services/insurance"
  },
  {
    title: "Hidden Problems",
    problem: "These problems stay hidden — until a crisis exposes everything.",
    impact: "Family struggles at the worst time.",
    icon: Home,
    color: "rgba(234, 179, 8, 0.2)",
    href: "/services/property-tenancy"
  }
];

function CircularOrbitCard({ 
  item, 
  index, 
  total, 
  angleRef, 
  setIsHovered 
}: { 
  item: typeof anxieties[0], 
  index: number, 
  total: number, 
  angleRef: any,
  setIsHovered: (v: boolean) => void 
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();

  // Calculate orbit position
  const baseAngle = (index / total) * Math.PI * 2;
  
  // DYNAMIC RADIUS SETTINGS
  const getRadiusX = () => {
    if (typeof window === 'undefined') return 400;
    if (window.innerWidth < 400) return window.innerWidth * 0.35;
    if (window.innerWidth < 768) return window.innerWidth * 0.4;
    return window.innerWidth * 0.38;
  };

  const getRadiusZ = () => {
    if (typeof window === 'undefined') return 350;
    if (window.innerWidth < 400) return 120;
    if (window.innerWidth < 768) return 180;
    return 350;
  };

  const radiusX = getRadiusX();
  const radiusZ = getRadiusZ();

  const x = useTransform(angleRef, (a: number) => Math.cos(baseAngle + a) * radiusX);
  const z = useTransform(angleRef, (a: number) => Math.sin(baseAngle + a) * radiusZ + (isMobile ? 100 : 200)); 
  
  // Dynamic scale based on Z
  const scale = useTransform(angleRef, (a: number) => {
    const zPos = Math.sin(baseAngle + a) * radiusZ;
    const baseScale = isMobile ? 0.5 : 0.85;
    const extraScale = isMobile ? 0.5 : 0.55;
    return baseScale + ((zPos + radiusZ) / (radiusZ * 2)) * extraScale; 
  });

  // Opacity
  const opacity = useTransform(angleRef, (a: number) => {
    const zPos = Math.sin(baseAngle + a) * radiusZ;
    const minOpacity = isMobile ? 0.4 : 0.9;
    return minOpacity + ((zPos + radiusZ) / (radiusZ * 2)) * (1 - minOpacity);
  });

  // Card Size scaling
  const getCardSize = () => {
    if (typeof window === 'undefined') return 280;
    if (window.innerWidth < 400) return 160;
    if (window.innerWidth < 768) return 220;
    return 280;
  };

  const currentSize = getCardSize();
  const offset = `-${currentSize / 2}px`;

  return (
    <motion.div
      style={{
        x,
        z,
        scale,
        opacity,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: offset, 
        marginLeft: offset, 
        transformStyle: "preserve-3d",
        width: currentSize,
        height: currentSize
      }}
      className="perspective-[2000px] group"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-full cursor-pointer shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute inset-0 rounded-full border border-[#d4af37]/20 bg-[#FDFCFB] p-4 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#050914]/5 border border-[#050914]/10 flex items-center justify-center mb-2 md:mb-4 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-all duration-500">
            <item.icon className="w-5 h-5 md:w-7 md:h-7 text-[#050914] group-hover:text-[#d4af37] transition-colors" />
          </div>
          <h3 className="text-sm md:text-2xl font-sans font-black text-[#050914] tracking-tight mb-1 md:mb-2 leading-tight px-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 md:mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <RefreshCw className="w-2.5 h-2.5 text-[#050914]" />
            <span className="text-[6px] md:text-[9px] font-mono uppercase tracking-widest text-[#050914]">Analyze</span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 rounded-full border border-white/10 bg-[#050914] backdrop-blur-xl p-4 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse mb-2 md:mb-3 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <p className="text-[8px] md:text-xs text-white/60 leading-relaxed mb-2 md:mb-3 italic px-2">
            &ldquo;{item.problem}&rdquo;
          </p>
          <p className="text-[10px] md:text-sm font-sans font-black text-white leading-tight mb-3 md:mb-4 px-2">
            {item.impact}
          </p>
          
          <Link href={item.href}>
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white text-[#050914] font-bold text-[7px] md:text-[9px] uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
              Learn More <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AnxietySection() {
  const angleRef = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate logic
  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      angleRef.set(angleRef.get() - (delta / 1000) * 0.2); 
    }
  });

  return (
    <section className="relative h-screen w-screen bg-transparent overflow-hidden flex flex-col items-center">
      {/* Global Globe is rendered behind this transparent section */}
      
      {/* Subtle vignette to ensure focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(253,252,251,0.4)_80%)] z-0 pointer-events-none" />

      {/* 3D Orbit Container - Full screen with overflow allowed for 3D elements */}
      <div 
        className="absolute inset-0 z-10 w-full h-full flex items-center justify-center perspective-[3000px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Invisible interactive area */}
        <div className="absolute inset-0 z-[-1]" onMouseEnter={() => setIsHovered(false)} />
        
        {anxieties.map((item, idx) => (
          <CircularOrbitCard 
            key={idx} 
            item={item} 
            index={idx} 
            total={anxieties.length} 
            angleRef={angleRef}
            setIsHovered={setIsHovered}
          />
        ))}
      </div>

    </section>
  );
}
