import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ServiceEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#050914] text-white overflow-visible"
      // Increased scroll height significantly for better scroll feel
      style={{ height: `${(services.length + 2) * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start pt-12 md:pt-20 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-container relative z-30 w-full text-center mb-6 md:mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight mb-2"
          >
            What We Do For You.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-white/50 max-w-2xl mx-auto font-medium leading-relaxed px-4"
          >
            We bring your parents' complete financial life into one structured system — insurance checked, accounts organized, documents secured, emergency plan ready.
          </motion.p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 h-full flex justify-center -mt-4">
          {services.map((service, index) => {
            // Refined Stacking Logic:
            // Each card should start its animation at a specific point in the scroll
            const start = index / (services.length + 1);
            const end = (index + 1) / (services.length + 1);
            
            // Movement from bottom to its final "stacked" position
            const cardY = useTransform(
              scrollYProgress,
              [start, end],
              ["80vh", "0vh"]
            );

            // Subtle scale down as more cards stack on top
            const cardScale = useTransform(
              scrollYProgress,
              [end, 1],
              [1, 1 - (services.length - index) * 0.02]
            );

            // Fade in
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.05],
              [0, 1]
            );

            return (
              <motion.div
                key={service.slug}
                style={{ 
                  scale: cardScale,
                  y: cardY,
                  opacity,
                  // Fixed offset for the stack effect - moved higher by reducing this or using negative top
                  top: `${index * 40}px`, 
                  zIndex: index + 10
                }}
                className="absolute w-full px-4 sm:px-6"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="w-full bg-[#0A0F1A] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] cursor-pointer group hover:border-[#d4af37]/40 transition-all duration-500 overflow-hidden relative">
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative z-10">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all duration-500 shadow-2xl">
                        <service.icon className="w-8 h-8 md:w-12 md:h-12 text-[#d4af37] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-black text-white mb-2 md:mb-4 group-hover:text-[#d4af37] transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-lg text-white/60 font-medium leading-relaxed max-w-xl group-hover:text-white/80 transition-colors">
                          {service.tagline}
                        </p>
                      </div>

                      <div className="hidden md:flex w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500 shrink-0">
                        <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white/50 group-hover:text-[#050914] group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

