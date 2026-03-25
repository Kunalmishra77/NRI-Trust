import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { AlertCircle, ArrowUpRight, ShieldAlert, Landmark, Home, Heart, FileText, Zap, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const anxieties = [
  {
    title: "Tax Scrutiny",
    problem: "Sudden show-cause notices on legacy accounts.",
    impact: "Frozen liquidity & penalties.",
    icon: ShieldAlert,
    color: "rgba(239, 68, 68, 0.2)",
    href: "/services/income-tax"
  },
  {
    title: "Frozen Assets",
    problem: "KYC non-compliance leading to blocked savings.",
    impact: "Zero medical emergency access.",
    icon: Landmark,
    color: "rgba(249, 115, 22, 0.2)",
    href: "/services/banking-kyc"
  },
  {
    title: "Tenant Deadlock",
    problem: "Refusal to vacate ancestral property.",
    impact: "Loss of property control.",
    icon: Home,
    color: "rgba(245, 158, 11, 0.2)",
    href: "/services/property-tenancy"
  },
  {
    title: "Legacy Erosion",
    problem: "Lack of registered Wills causing locking.",
    impact: "Generational wealth erosion.",
    icon: FileText,
    color: "rgba(220, 38, 38, 0.2)",
    href: "/services/legal-succession"
  },
  {
    title: "Health Denials",
    problem: "Insurance claim rejected due to gaps.",
    impact: "Huge out-of-pocket expenses.",
    icon: Heart,
    color: "rgba(244, 63, 94, 0.2)",
    href: "/services/insurance"
  },
  {
    title: "Utility Cutoffs",
    problem: "Municipal tax lapses causing disconnection.",
    impact: "Hardship for elderly parents.",
    icon: Zap,
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

  // Calculate orbit position
  const baseAngle = (index / total) * Math.PI * 2;
  
  // RADIUS SETTINGS - Adjusted for slight side padding
  // Using 38% of width leaves comfortable room on left/right so cards aren't cut
  const radiusX = window.innerWidth * 0.38; 
  const radiusZ = 350; 

  const x = useTransform(angleRef, (a: number) => Math.cos(baseAngle + a) * radiusX);
  const z = useTransform(angleRef, (a: number) => Math.sin(baseAngle + a) * radiusZ + 200); 
  
  // Dynamic scale based on Z
  const scale = useTransform(angleRef, (a: number) => {
    const zPos = Math.sin(baseAngle + a) * radiusZ;
    return 0.85 + ((zPos + radiusZ) / (radiusZ * 2)) * 0.55; 
  });

  // Opacity
  const opacity = useTransform(angleRef, (a: number) => {
    const zPos = Math.sin(baseAngle + a) * radiusZ;
    return 0.7 + ((zPos + radiusZ) / (radiusZ * 2)) * 0.3;
  });

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
        marginTop: "-140px", 
        marginLeft: "-140px", 
        transformStyle: "preserve-3d"
      }}
      className="w-[280px] h-[280px] perspective-[2000px] group"
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
          className="absolute inset-0 rounded-full border border-[#050914]/10 bg-white/70 backdrop-blur-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div className="w-16 h-16 rounded-full bg-[#050914]/5 border border-[#050914]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-all duration-500">
            <item.icon className="w-7 h-7 text-[#050914] group-hover:text-[#d4af37] transition-colors" />
          </div>
          <h3 className="text-2xl font-sans font-black text-[#050914] tracking-tight mb-2 leading-tight">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <RefreshCw className="w-3 h-3 text-[#050914]" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#050914]">Hover to analyze</span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 rounded-full border border-white/10 bg-[#050914] backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mb-3 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <p className="text-xs text-white/60 leading-relaxed mb-3 italic">
            &ldquo;{item.problem}&rdquo;
          </p>
          <p className="text-sm font-sans font-black text-white leading-tight mb-4">
            {item.impact}
          </p>
          
          <Link href={item.href}>
            <button className="px-4 py-2 rounded-full bg-white text-[#050914] font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
              Protocol <ArrowUpRight className="w-3 h-3" />
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

