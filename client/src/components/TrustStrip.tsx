import { motion } from "framer-motion";
import { elegantFadeUp, useCountUp } from "@/motion/variants";
import { Users, Globe, Building2, Activity } from "lucide-react";

function StatCounter({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: any }) {
  const { ref, display } = useCountUp(end, 2.5);
  return (
    <div className="flex flex-col items-center lg:items-start group">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl md:text-4xl font-serif text-[#F5F3EC]">
          <span ref={ref}>{display}</span>{suffix}
        </div>
      </div>
      <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-semibold">{label}</div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <div className="border-y border-white/[0.05] bg-[#050814] py-12 lg:py-16 relative z-30">
      <div className="max-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <StatCounter icon={Users} end={200} suffix="+" label="Families Supported" />
          <StatCounter icon={Globe} end={40} suffix="+" label="Countries" />
          <StatCounter icon={Building2} end={15} suffix="+" label="Cities Covered" />
          <StatCounter icon={Activity} end={24} suffix="/7" label="Emergency Resolution" />
        </div>
      </div>
    </div>
  );
}
