import { CheckCircle2, XCircle, Shield, Users, Clock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function WhyNRITrustSection() {
  const comparisons = [
    {
      icon: Users,
      title: "Integrated Solution",
      others: "Separate CA + lawyer + property manager + insurance agent = coordination chaos",
      nriTrust: "ONE team handles all 5 service areas = seamless communication, zero gaps",
    },
    {
      icon: Shield,
      title: "Verified & Insured",
      others: "No insurance, no accountability, no audit trail",
      nriTrust: "₹5 Crore liability coverage + fully documented processes",
    },
    {
      icon: FileCheck,
      title: "Transparent Reporting",
      others: "Vague updates, no documentation, months without communication",
      nriTrust: "Regular review calls, detailed reports, photo evidence for property",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      others: "Call different people, hope someone picks up at midnight IST",
      nriTrust: "Dedicated emergency team — frozen accounts, legal notices, property emergencies",
    },
  ];

  return (
    <section className="relative bg-[hsl(180,50%,8%)] overflow-hidden py-24 md:py-32">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(180_45%_14%_/_0.3)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/50 block mb-4">
            Why NRI Trust
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Why NRIs Choose Us Over{" "}
            <span className="text-amber-400">DIY or Local Agents</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light">
            The difference between stress and peace of mind is choosing the right partner.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="space-y-3"
        >
          {comparisons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={elegantFadeUp}
                className="rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.035] transition-colors duration-500 overflow-hidden"
              >
                <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.04]">
                  {/* Label column */}
                  <div className="md:col-span-3 p-6 md:p-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-amber-400/60" />
                    </div>
                    <h3 className="font-serif font-bold text-white/80 text-base leading-snug">{item.title}</h3>
                  </div>

                  {/* Others column */}
                  <div className="md:col-span-4 p-6 md:p-8">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400/50 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[10px] text-red-400/50 uppercase tracking-[0.2em] block mb-2">Others</span>
                        <p className="text-sm text-white/30 leading-relaxed">{item.others}</p>
                      </div>
                    </div>
                  </div>

                  {/* NRI Trust column */}
                  <div className="md:col-span-5 p-6 md:p-8 bg-amber-500/[0.02]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400/70 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[10px] text-amber-400/60 uppercase tracking-[0.2em] block mb-2">NRI Trust</span>
                        <p className="text-sm text-white/70 font-medium leading-relaxed">{item.nriTrust}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
