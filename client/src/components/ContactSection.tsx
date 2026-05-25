import { Lock, ShieldAlert, ChevronRight, UserCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/motion/variants";
import { cn } from "@/lib/utils";
import AssessmentFlow from "./AssessmentFlow";

export default function ContactSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <section id="contact" className={cn(
      "py-20 md:py-28 relative overflow-hidden transition-colors duration-500",
      theme === 'light' ? "section-light" : "section-dark"
    )}>
      {/* Background Ambience */}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        </>
      )}
      {theme === 'light' && (
        <>
          <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        </>
      )}
      
      <div className="max-container relative z-10">
        {/* RESPONSIVE-ONLY: Reduced gap on mobile from 16 to 8 */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-24 items-stretch">
          
          {/* ─── BENEFITS SECTION (5 Cols) ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="lg:col-span-5 flex flex-col justify-between py-4"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-accent/40" />
                <span className="accent-label !mb-0 text-accent">Strategic Engagement</span>
              </div>
              
              {/* RESPONSIVE-ONLY: Scaled heading from 5xl→3xl on mobile, 5xl on md, 6xl on lg */}
              <h2 className={cn(
                "display-title mb-6 md:mb-10 !text-3xl md:!text-5xl lg:!text-6xl",
                theme === 'light' ? "text-[#1A1A1A]" : "text-white"
              )}>
                Book Your Free <br />
                <span className="text-gradient-gold italic">Review Session.</span>
              </h2>
              
              <p className={cn(
                "text-xl font-light leading-relaxed mb-16 max-w-md",
                theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
              )}>
                Get a free review of your parents' financial situation in India.
              </p>

              <div className="space-y-12">
                {[
                  { icon: Calendar, title: "30 Min Consultation", desc: "A focused executive session to map your family's specific Indian context and requirements." },
                  { icon: Lock, title: "Confidential Discussion", desc: "All sessions are governed by strict non-disclosure protocols and bank-grade data security." },
                  { icon: UserCheck, title: "Expert Advisory", desc: "Direct access to our Senior Portfolio Leads who coordinate legal, financial, and property domains." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500",
                      theme === 'light' ? "bg-accent/5 border-black/5 group-hover:border-accent/40" : "bg-accent/5 border-white/10 group-hover:border-accent/40"
                    )}>
                      <item.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-serif mb-2",
                        theme === 'light' ? "text-[#1A1A1A]" : "text-white"
                      )}>{item.title}</h3>
                      <p className={cn(
                        "text-sm font-light leading-relaxed",
                        theme === 'light' ? "text-[#1A1A1A]/65" : "text-white/65"
                      )}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESPONSIVE-ONLY: Reduced mt on mobile from 24 to 10 */}
            <div className={cn(
              "mt-10 md:mt-24 pt-8 md:pt-12 border-t",
              theme === 'light' ? "border-black/5" : "border-white/5"
            )}>
              <div className={cn(
                "flex items-center gap-4 p-6 border",
                theme === 'light' ? "bg-accent/5 border-accent/20" : "bg-accent/5 border-accent/20"
              )}>
                <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                <p className="text-[11px] font-mono leading-relaxed text-accent uppercase tracking-widest font-bold">
                  Professional Protection Channel — <span className={theme === 'light' ? "text-[#1A1A1A]" : "text-white"}>FEMA & RBI Compliant.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── SECURE BOOKING ASSESSMENT (7 Cols) ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-7"
          >
            <div className={cn(
              "p-6 sm:p-8 md:p-10 lg:p-16 rounded-[3.5rem] relative overflow-hidden h-full premium-card shadow-2xl transition-all duration-700",
              theme === 'light' ? "" : "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10"
            )}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              <AssessmentFlow theme={theme} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
