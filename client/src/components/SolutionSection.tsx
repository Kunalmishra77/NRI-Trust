import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger, lineDraw } from "@/motion/variants";
import { services } from "@/data/services";

export default function SolutionSection() {
  const beforeAfter = {
    before: [
      "10 different people to coordinate",
      "Missed deadlines and frozen accounts",
      "Emergency panic mode from abroad",
      "Constant stress + family disputes",
    ],
    after: [
      "1 dedicated team for everything",
      "Proactive compliance management",
      "24/7 emergency response on ground",
      "Peace of mind + family harmony",
    ],
  };

  return (
    <section
      id="services"
      className="relative bg-[hsl(180,50%,8%)] overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,hsl(180_45%_14%_/_0.4)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,hsl(38_85%_55%_/_0.04)_0%,transparent_50%)] pointer-events-none" />

      {/* ─── Section heading ─── */}
      <div className="py-20 md:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight text-white">
              <span className="text-amber-400">5 Service Areas.</span> One Trusted Partner.
            </h2>
            <motion.div
              variants={lineDraw}
              className="w-16 h-px bg-gradient-to-r from-amber-400/60 to-amber-600/60 mx-auto mb-6 origin-left"
            />
            <p className="text-lg md:text-xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">
              From banking compliance to estate planning — every financial and legal need for NRIs, handled by{" "}
              <span className="text-white/70 font-medium">one dedicated team</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── Service rows ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={luxuryStagger}
          className="divide-y divide-white/[0.04]"
        >
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.slug}
                variants={elegantFadeUp}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center cursor-pointer hover:bg-white/[0.015] transition-colors duration-500 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">

                    {/* Number */}
                    <div className="md:col-span-1 flex md:block">
                      <span className="font-mono text-sm font-bold text-amber-500/30 group-hover:text-amber-500/60 transition-colors duration-500">
                        {number}
                      </span>
                    </div>

                    {/* Icon badge */}
                    <div className="hidden md:flex md:col-span-1 justify-center">
                      <div className={`w-12 h-12 rounded-xl ${service.color} bg-opacity-90 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title + tagline */}
                    <div className="md:col-span-4">
                      {/* Mobile icon */}
                      <div className={`flex md:hidden w-10 h-10 rounded-xl ${service.color} bg-opacity-90 items-center justify-center shadow-lg mb-4`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors duration-500 mb-2">
                        {service.shortTitle}
                      </h3>
                      <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Feature bullets */}
                    <div className="md:col-span-5">
                      <ul className="grid grid-cols-1 gap-2.5">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-white/30 group-hover:text-white/50 transition-colors duration-500">
                            <span className="w-1 h-1 rounded-full bg-amber-500/40 flex-shrink-0 group-hover:bg-amber-500/70 transition-colors duration-500" />
                            {feature.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow CTA */}
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="flex items-center gap-2 text-white/20 group-hover:text-amber-400 transition-all duration-500 group-hover:translate-x-1">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ─── Before / After ─── */}
      <div className="border-t border-white/5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
          >
            {/* Heading */}
            <div className="text-center mb-12">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
                The Difference
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Before & After NRI Trust
              </h3>
            </div>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              {/* Without */}
              <div className="p-8 md:p-10 bg-white/[0.02] border-r border-white/5">
                <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/5">
                  <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <span className="font-mono text-xs font-bold text-red-400/70 tracking-[0.25em] uppercase">Without NRI Trust</span>
                </div>
                <ul className="space-y-5">
                  {beforeAfter.before.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <X className="w-4 h-4 text-red-400/40 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/35 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With NRI Trust */}
              <div className="p-8 md:p-10 bg-amber-500/[0.03] relative overflow-hidden">
                {/* Subtle amber glow */}
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-8 pb-5 border-b border-amber-500/10 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400/70 tracking-[0.25em] uppercase">With NRI Trust</span>
                </div>
                <ul className="space-y-5 relative z-10">
                  {beforeAfter.after.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <Check className="w-4 h-4 text-amber-400/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
