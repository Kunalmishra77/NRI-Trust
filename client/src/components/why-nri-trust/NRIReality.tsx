import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Plane, Clock, ShieldAlert, Heart } from "lucide-react";

export default function NRIReality() {
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
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
          >
            <span className="accent-label">Section 01</span>
            <h2 className="section-title mb-8">
              The Reality of <br />
              <span className="text-gradient-gold italic">Global Citizenship.</span>
            </h2>
            <p className="body-large text-muted-foreground">
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
            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="/hero-parents.png" 
                alt="Aging parents in India" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
              className="glass-card p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
