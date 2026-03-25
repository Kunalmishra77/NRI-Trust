import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Globe, Lock, ArrowRight, Landmark, Zap, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Global Custody",
    desc: "Institutional-grade oversight of your Indian assets, monitored from every timezone.",
    number: "01",
    icon: Globe,
    stat: "40+ Countries Covered"
  },
  {
    title: "Fiduciary Trust",
    desc: "Acting as your professional proxy for bank KYC, legal probate, and property disputes.",
    number: "02",
    icon: Shield,
    stat: "₹500Cr+ Under Advisory"
  },
  {
    title: "Legacy Security",
    desc: "Ensuring your parents' financial peace is never compromised by administrative gaps.",
    number: "03",
    icon: Lock,
    stat: "24/7 Response Active"
  },
  {
    title: "Tax Stewardship",
    desc: "Coordinating complex NRI tax compliance and strategic repatriation of Indian capital.",
    number: "04",
    icon: Landmark,
    stat: "Compliance Optimized"
  },
  {
    title: "Physical Advocacy",
    desc: "On-the-ground authorized presence for property inspections and institutional liaison.",
    number: "05",
    icon: Zap,
    stat: "Ground Teams Ready"
  },
  {
    title: "Risk Governance",
    desc: "Proactive monitoring of legal notices and bank status to prevent asset freezes.",
    number: "06",
    icon: ShieldAlert,
    stat: "Absolute Oversight"
  }
];

export default function GlobalStewardshipScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = scrollWrapperRef.current;
      if (!wrapper) return;

      const totalWidth = wrapper.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth + (window.innerWidth * 0.1);

      gsap.to(wrapper, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${wrapper.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });

      gsap.to(".bg-text-scroll", {
        x: -600,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 2,
          start: "top bottom",
          end: "bottom top",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-[#050914] overflow-hidden flex flex-col justify-center pt-24 pb-12 text-white"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <h2 className="bg-text-scroll text-[25vw] font-black font-sans whitespace-nowrap leading-none tracking-tighter text-white">
          STEWARDSHIP
        </h2>
      </div>

      <div className="max-container w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="accent-label text-[#d4af37] font-bold"
            >
              The Institutional Standard
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-tight">
              Managed Locally. <span className="text-[#d4af37]">Trusted Globally.</span>
            </h2>
          </div>
          <p className="text-lg text-white/40 max-w-sm font-medium leading-relaxed pb-2 text-left">
            Professional fiduciary presence on the ground in India, bridging the 10,000-mile gap.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollWrapperRef} 
            className="flex gap-6 lg:gap-8 flex-nowrap w-fit pb-10"
          >
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="pillar-card w-[85vw] md:w-[360px] flex-shrink-0"
              >
                <div className="group relative p-8 lg:p-9 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden h-[400px] flex flex-col justify-between">
                  
                  <div className="absolute top-[-5%] right-[-5%] text-[9rem] font-black text-white/[0.02] group-hover:text-[#d4af37]/[0.04] transition-colors duration-700 leading-none">
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

                  <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between mt-4">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                      {pillar.stat}
                    </span>
                    <div className="flex items-center gap-3 text-white/40 group-hover:text-[#d4af37] transition-colors font-bold">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            ))}
            <div className="w-[15vw] flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

