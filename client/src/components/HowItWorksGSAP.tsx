import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "A 30-minute private strategy session to audit your Indian asset footprint and parent concerns.",
    image: "/hero-parents.png",
    icon: Users,
    detail: "Technical portfolio audit"
  },
  {
    number: "02",
    title: "Diagnosis",
    desc: "A detailed assessment of latent risks, compliance gaps, and selection of the appropriate care plan.",
    image: "/generated_images/Professional_man_headshot_testimonial_c0227483.png",
    icon: Zap,
    detail: "Risk-based gap analysis"
  },
  {
    number: "03",
    title: "Onboarding",
    desc: "Digital secure setup and introduction to your dedicated India-based relationship steward.",
    image: "/vThe Evolution of Care.png",
    icon: ShieldCheck,
    detail: "Authorized proxy setup"
  },
  {
    number: "04",
    title: "Stewardship",
    desc: "Continuous monitoring, preemptive reporting, and 24/7 priority emergency dispatch.",
    image: "/When Timezones.png",
    icon: CheckCircle2,
    detail: "Active 24/7 monitoring"
  }
];

export default function HowItWorksGSAP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalWidth = sectionRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;
    
    const pin = gsap.to(sectionRef.current, {
      x: () => -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#050814] h-screen overflow-hidden flex flex-col">
      <div className="max-container pt-20 flex-shrink-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
        >
          <span className="accent-label text-[#D4AF37]">The Onboarding Protocol</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC]">How It <span className="text-white/40 italic">Works.</span></h2>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center">
        <div ref={sectionRef} className="flex flex-nowrap items-center px-[10vw] gap-[15vw] h-full">
          {steps.map((step, idx) => (
            <div key={idx} className="w-[80vw] md:w-[70vw] lg:w-[65vw] flex-shrink-0 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 group h-[60vh]">
              {/* Content Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="text-[10rem] md:text-[15rem] font-serif font-black text-accent/[0.03] absolute -top-32 md:-top-48 -left-10 md:-left-20 pointer-events-none select-none">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold">{step.detail}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:mb-8 group-hover:text-accent transition-colors duration-500 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-light max-w-xl leading-relaxed mb-8 md:mb-12">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="h-px w-12 md:w-16 bg-accent/30" />
                    <span className="text-[10px] md:text-[11px] font-mono text-white/20 uppercase tracking-[0.4em]">Phase 0{idx + 1} Status: Ready</span>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-1/2 hidden lg:block">
                <div className="aspect-video w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 relative shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-1000">
                  <img 
                    src={step.image} 
                    className="w-full h-full object-cover opacity-60 grayscale-[0.5] group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" 
                    alt={step.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent" />
                  
                  {/* Glass Accent */}
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 p-4 md:p-6 glass-card border-accent/20 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span className="text-[9px] md:text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Standard Secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


