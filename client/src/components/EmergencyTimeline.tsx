import { useEffect, useRef, useState } from "react";
import { Clock, Zap, UserCheck, ShieldCheck, ArrowRight, AlertCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const emergencySteps = [
  {
    time: "T + 02 Hours",
    title: "Crisis Triage",
    desc: "Confidential intake and immediate risk assessment. Our legal and financial directors evaluate the deadlock or emergency within 120 minutes of engagement.",
    icon: Clock,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    time: "T + 12 Hours",
    title: "Physical Dispatch",
    desc: "Authorized physical presence deployed. Our local representatives reach the bank branch, property site, or legal office to initiate ground-level resolution.",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    time: "T + 24 Hours",
    title: "Resolution Track",
    desc: "Direct liaison with institution heads. We bypass standard customer service queues, moving your case directly to managerial or specialized legal oversight.",
    icon: UserCheck,
    color: "text-red-600",
    bg: "bg-red-600/10"
  },
  {
    time: "T + 48 Hours",
    title: "Final Closure",
    desc: "Documented resolution and audit trail. The emergency is cleared, and a full executive report is filed in your family portal for absolute accountability.",
    icon: ShieldCheck,
    color: "text-red-700",
    bg: "bg-red-700/10"
  }
];

export default function EmergencyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-swipe logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % emergencySteps.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handleManualSelection = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FDFCFB] overflow-hidden text-[#1A1A1A]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-[1.1] text-[#1A1A1A]">
              Rapid Response Protocol: <span className="text-red-600 italic">Emergencies Don’t Wait.</span>
            </h2>
          </div>
          <Link href="/emergency-response">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full border border-[#1A1A1A]/10 bg-white/50 backdrop-blur-xl text-[#1A1A1A] font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-sm"
            >
              View Full Protocol <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr,550px] gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Featured Detail Card */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full w-full rounded-[3rem] border border-[#1A1A1A]/10 bg-white p-10 md:p-16 flex flex-col justify-between overflow-hidden relative group shadow-xl shadow-red-900/5">
                  {/* Dynamic Progress Bar Background */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1A1A1A]/5">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-red-600"
                    />
                  </div>

                  {/* Corner Accent */}
                  <div className={cn("absolute top-0 right-0 w-40 h-40 opacity-20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-1000", emergencySteps[activeIndex].bg)} />

                  <div className="relative z-10">
                    <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-12 border border-[#1A1A1A]/5 shadow-xl transition-colors duration-500", emergencySteps[activeIndex].bg)}>
                      {(() => {
                        const Icon = emergencySteps[activeIndex].icon;
                        return <Icon className={cn("w-10 h-10 transition-colors", emergencySteps[activeIndex].color)} />;
                      })()}
                    </div>
                    
                    <span className="font-mono text-lg font-black text-red-600/60 mb-4 block">
                      {emergencySteps[activeIndex].time}
                    </span>
                    
                    <h3 className="text-4xl md:text-6xl font-sans font-black text-[#1A1A1A] mb-8 tracking-tighter">
                      {emergencySteps[activeIndex].title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-[#1A1A1A]/60 leading-relaxed max-w-xl font-medium italic">
                      &ldquo;{emergencySteps[activeIndex].desc}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-[#1A1A1A]/5 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#1A1A1A]/40 leading-none">Execution Logic Active</span>
                    </div>
                    <div className="h-px flex-1 bg-[#1A1A1A]/5" />
                    <AlertCircle className="w-5 h-5 text-[#1A1A1A]/10" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive Protocol List */}
          <div className="flex flex-col gap-4">
            {emergencySteps.map((step, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => handleManualSelection(idx)}
                  className={cn(
                    "group relative p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer overflow-hidden",
                    isActive 
                      ? "bg-white border-[#1A1A1A]/10 text-[#1A1A1A] translate-x-4 shadow-2xl shadow-red-600/5" 
                      : "bg-[#1A1A1A]/5 border-transparent text-[#1A1A1A]/40 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]/60"
                  )}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                        isActive ? "bg-[#1A1A1A] text-white" : "bg-white/50 border border-[#1A1A1A]/5"
                      )}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className={cn(
                          "text-[9px] font-mono font-black uppercase tracking-widest mb-1",
                          isActive ? "text-red-600" : "text-[#1A1A1A]/30"
                        )}>
                          {step.time}
                        </div>
                        <h4 className="text-xl md:text-2xl font-sans font-black tracking-tight leading-none">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-transform duration-500",
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    )} />
                  </div>
                  
                  {/* Subtle Background Number */}
                  <div className={cn(
                    "absolute right-4 bottom-[-10%] text-6xl font-black transition-opacity duration-500 pointer-events-none",
                    isActive ? "opacity-[0.03]" : "opacity-0"
                  )}>
                    0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

