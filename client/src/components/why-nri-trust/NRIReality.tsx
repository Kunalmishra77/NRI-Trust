import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Plane, Clock, ShieldAlert, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NRIReality({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const realities = [
    {
      icon: Plane,
      title: "The Distance Barrier",
      description: "Managing Indian assets from 8,000 miles away is not just a logistical challenge—it's a significant risk factor for your parents' peace of mind."
    },
    {
      icon: Clock,
      title: "Time Zone Asymmetry",
      description: "Banks, courts, and municipal offices operate while you sleep. By the time you respond, the window for action has often closed."
    },
    {
      icon: ShieldAlert,
      title: "The Trust Gap",
      description: "Relying on local 'helpers' or distant relatives often leads to fragmented results, lack of accountability, and potential exploitation."
    },
    {
      icon: Heart,
      title: "Aging Parent Anxiety",
      description: "The mental burden of managing complex compliance often falls on seniors who should be enjoying their retirement, not battling bureaucracy."
    }
  ];

  return (
    <section className={cn(
      "section-padding relative overflow-hidden transition-colors duration-500",
      theme === 'light' ? "section-light" : "section-dark"
    )}>
      {theme === 'light' && (
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
      )}
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
          >
            <span className="accent-label text-accent">Section 01</span>
            <h2 className={cn(
              "section-title mb-8",
              theme === 'light' ? "text-[#1A1A1A]" : "text-white"
            )}>
              The Reality of <br />
              <span className="text-gradient-gold italic">Global Citizenship.</span>
            </h2>
            <p className={cn(
              "text-xl font-medium leading-relaxed",
              theme === 'light' ? "text-[#1A1A1A]" : "text-white/90"
            )}>
              Being an NRI means building a life abroad while maintaining roots in India. 
              But as parents age and assets grow, the "remote management" model begins to fracture.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="relative"
          >
            <div className={cn(
              "aspect-video rounded-[2rem] overflow-hidden border shadow-2xl transition-all duration-700",
              theme === 'light' ? "border-black/5" : "border-white/5"
            )}>
              <img 
                src="/hero-parents.png" 
                alt="Aging parents in India" 
                className={cn(
                  "w-full h-full object-cover",
                  theme === 'light' ? "opacity-90" : "opacity-60"
                )}
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                theme === 'light' ? "from-[#FDFCFB]" : "from-[#050914]"
              )} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {realities.map((item, i) => (
            <motion.div
              key={i}
              variants={elegantFadeUp}
              className={cn(
                "p-8 transition-all duration-500 premium-card",
                theme === 'light' ? "bg-white border-black/5 shadow-sm hover:border-accent/40" : "bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-accent/30"
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 shadow-inner">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className={cn(
                "text-xl font-bold mb-4",
                theme === 'light' ? "text-[#1A1A1A]" : "text-white"
              )}>{item.title}</h3>
              <p className={cn(
                "text-[14px] leading-relaxed font-medium",
                theme === 'light' ? "text-[#1A1A1A]/80" : "text-white/80"
              )}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
