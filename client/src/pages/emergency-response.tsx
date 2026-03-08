import PageHeader from "@/layouts/PageHeader";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Activity, ShieldAlert, Phone, ShieldCheck, ArrowRight, Zap, Scale, Landmark, FileText, Droplets, ZapOff } from "lucide-react";
import emergencyResolutionImage from "@assets/image_1764305821702.png";

export default function EmergencyResponse() {
  const govtLegal = [
    { icon: FileText, title: "Court Notices", desc: "Urgent legal summons or court notices requiring immediate representation." },
    { icon: Landmark, title: "Dept Show-Cause", desc: "Notices from government departments that need technical drafting and response." },
    { icon: ShieldCheck, title: "Income Tax Issues", desc: "Tax scrutiny or demand notices appearing on the compliance portal." },
    { icon: Scale, title: "MCD / Municipal", desc: "Sudden notices regarding property boundaries, demolition, or heavy fines." }
  ];

  const utilityServices = [
    { icon: ZapOff, title: "Utility Payments", desc: "Management of non-payment issues to prevent service loss for parents." },
    { icon: Droplets, title: "Service Cuts", desc: "Immediate resolution for disconnection of electricity or water supply." },
    { icon: Activity, title: "Disruptions", desc: "Urgent handling of critical service disruptions requiring physical presence." }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Emergency Support"
        subtitle="Immediate financial and legal intervention for situations requiring expert attention on the ground."
        breadcrumbs={[{ label: "Our Process", href: "/how-it-works" }, { label: "Emergency Support" }]}
      />

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15)_0%,transparent_60%)] blur-[100px] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
              <Activity className="w-10 h-10 text-red-500 animate-pulse" />
            </div>
            <h2 className="section-title mb-8">
              Financial & Legal <br />
              <span className="text-red-500 italic">Crisis Containment.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              When we refer to emergencies, we mean financial and legal emergencies — not medical ones. These situations require immediate, expert attention and can be just as stressful as a health crisis.
            </p>
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-full text-red-400 text-sm font-mono tracking-widest uppercase font-bold">
              <ShieldAlert className="w-4 h-4" />
              Purely Financial & Legal • No Medical Services
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Government & Legal */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-serif text-white">Government & Legal</h3>
              </div>
              <div className="space-y-6">
                {govtLegal.map((item, i) => (
                  <motion.div key={i} variants={elegantFadeUp} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-red-500/30 transition-all group bg-white/[0.01]">
                    <div className="flex items-center gap-5 mb-4">
                      <item.icon className="w-6 h-6 text-red-500/60" />
                      <h4 className="text-xl font-serif text-white">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Utilities & Services */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-2xl font-serif text-white">Utilities & Services</h3>
              </div>
              <div className="space-y-6">
                {utilityServices.map((item, i) => (
                  <motion.div key={i} variants={elegantFadeUp} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all group bg-white/[0.01]">
                    <div className="flex items-center gap-5 mb-4">
                      <item.icon className="w-6 h-6 text-blue-500/60" />
                      <h4 className="text-xl font-serif text-white">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ON-GROUND PROXY ─── */}
      <section className="section-padding bg-[#050806] relative overflow-hidden border-y border-white/[0.05]">
        <div className="max-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={emergencyResolutionImage} alt="Emergency resolution" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 p-8 glass-panel rounded-2xl border-red-500/20 bg-black/60 max-w-xs backdrop-blur-xl">
                <div className="text-3xl font-serif text-white mb-2">Immediate Dispatch</div>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">Authorized directors intervene physically within hours across major Indian metros.</p>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
              <span className="accent-label text-red-500">Rapid Response</span>
              <h2 className="section-title text-white mb-8">Professional Physical <br /><span className="text-red-500 italic">Liaison.</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                Situations like court notices or utility cuts require expert attention on the ground. We eliminate the time-zone liability by acting as your parents’ authorized physical proxy in India.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-white/80 font-medium text-lg">Govt & Municipal Liaison</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-white/80 font-medium text-lg">Bank & Utility Resolution</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center bg-background relative overflow-hidden">
        <div className="max-container relative z-10">
          <h2 className="display-title !text-4xl md:!text-6xl text-white mb-10 leading-tight">
            Secure Your Family's <br className="hidden md:block" />
            <span className="text-gradient-gold italic">Crisis Safety Net.</span>
          </h2>
          <p className="body-large mb-16 text-muted-foreground max-w-2xl mx-auto">
            Establish your fiduciary relationship today so we are authorized to act the moment your parents face a financial or legal crisis.
          </p>
          <Link href="/contact">
            <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-[0_0_40px_rgba(207,160,82,0.15)]">
              <span>Initiate Pre-Emptive Review</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
