import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Globe, Lock, ArrowRight, Landmark, Zap, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Insurance Checked",
    desc: "We review your parents' health and life insurance to make sure there are no gaps in coverage.",
    number: "01",
    icon: Globe,
    stat: "Coverage Verified",
    href: "/services/insurance"
  },
  {
    title: "Accounts Organized",
    desc: "We find all scattered bank accounts, update KYC, and fix nominees so nothing is missed.",
    number: "02",
    icon: Shield,
    stat: "All Accounts Tracked",
    href: "/services/banking-kyc"
  },
  {
    title: "Documents Secured",
    desc: "Property papers, insurance policies, legal records — everything organized and accessible.",
    number: "03",
    icon: Lock,
    stat: "Documents Safe",
    href: "/services/property-tenancy"
  },
  {
    title: "Nominees Updated",
    desc: "We check and correct nominee details across all bank accounts and insurance policies.",
    number: "04",
    icon: Landmark,
    stat: "Nominees Verified",
    href: "/services/legal-succession"
  },
  {
    title: "Emergency Plan Ready",
    desc: "A clear plan for your family — who to contact, how to access money, what steps to take.",
    number: "05",
    icon: Zap,
    stat: "Plan Activated",
    href: "/services/income-tax"
  },
  {
    title: "Legal Transfer Ready",
    desc: "Succession certificates, Wills, and probate — everything prepared so there are no legal battles.",
    number: "06",
    icon: ShieldAlert,
    stat: "Legally Prepared",
    href: "/services/legal-succession"
  }
];

export default function GlobalStewardshipScroll() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate pillars for seamless loop
  const duplicatedPillars = [...pillars, ...pillars];

  return (
    <section 
      className="relative bg-[#050914] py-24 text-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <h2 className="text-[25vw] font-black font-sans whitespace-nowrap leading-none tracking-tighter text-white">
          PROTECTION
        </h2>
      </div>

      <div className="max-container w-full relative z-10 px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          <div className="max-w-3xl text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="accent-label text-[#d4af37] font-bold block mb-4"
            >
              OUR PROMISE
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-black tracking-tight text-white leading-[1.1]">
              Managed Locally. <br className="hidden md:block" />
              <span className="text-[#d4af37]">Trusted Globally.</span>
            </h2>
          </div>
          <div className="max-w-sm lg:pb-2">
            <p className="text-lg md:text-xl text-white/65 font-medium leading-relaxed text-left">
              We are physically present in India to manage everything your parents need.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="flex gap-6 lg:gap-8 flex-nowrap w-fit px-6"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="pillar-card w-[min(85vw,300px)] sm:w-[340px] md:w-[380px] flex-shrink-0"
            >
              <Link href={pillar.href}>
                <div className="group relative p-7 lg:p-8 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden h-full min-h-[340px] flex flex-col justify-between cursor-pointer hover:border-[#d4af37]/40">
                  
                  <div className="absolute top-[-5%] right-[-5%] text-[8rem] font-black text-white/[0.02] group-hover:text-[#d4af37]/[0.04] transition-colors duration-700 leading-none">
                    {pillar.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500 shadow-sm">
                      <pillar.icon className="w-6 h-6 text-[#d4af37] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-sans font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-500">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-base text-white/60 font-medium leading-relaxed max-w-md">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between mt-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                      {pillar.stat}
                    </span>
                    <div className="flex items-center gap-3 text-white/65 group-hover:text-[#d4af37] transition-colors font-bold">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
