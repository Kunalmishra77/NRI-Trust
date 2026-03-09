import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { services } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ServiceEcosystem() {
  return (
    <section className="section-padding bg-[#050814] relative overflow-hidden border-t border-white/[0.03]">
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label text-[#D4AF37]">Practice Areas</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8 leading-tight">
            Our Service <span className="text-white/40 italic">Ecosystem.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Five specialized pillars of stewardship, coordinated by one dedicated relationship lead for your family.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              variants={elegantFadeUp}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.5rem)] flex"
            >
              <Link href={`/services/${service.slug}`} className="w-full flex">
                <div
                  className="premium-card p-8 lg:p-10 rounded-[2.5rem] w-full flex flex-col group cursor-pointer border-white/5 bg-[#0B101E]/50 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#050814] border border-white/5 flex items-center justify-center mb-8 group-hover:border-accent/30 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#F5F3EC] mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-[15px] text-white/50 font-light leading-relaxed mb-10 flex-1">
                    {service.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest font-bold">Stewardship Active</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-[#050814] transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
