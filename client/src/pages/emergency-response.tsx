import PageHeader from "@/layouts/PageHeader";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Activity, ShieldAlert, ShieldCheck, ArrowRight, Scale, Landmark, FileText, Droplets, ZapOff } from "lucide-react";
import emergencyResolutionImage from "@assets/image_1764305821702.png";
import { cn } from "@/lib/utils";

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
  <main className="min-h-screen">
   {/* SECTION 1: DARK HERO */}
   <div className="section-dark">
    <PageHeader
     title="Emergency Support"
     subtitle="Immediate financial and legal intervention for situations requiring expert attention on the ground."
     breadcrumbs={[{ label: "Our Process", href: "/how-it-works" }, { label: "Emergency Support" }]}
    />
   </div>

   {/* SECTION 2: LIGHT CRISIS CONTAINMENT */}
   <section className="section-padding section-light">
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05)_0%,transparent_60%)] blur-[100px] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={elegantFadeUp}
      className="text-center mb-24 max-w-4xl mx-auto"
     >
      <div className="w-24 h-24 rounded-full bg-red-500/5 border border-red-500/20 flex items-center justify-center mx-auto mb-10 shadow-sm">
       <Activity className="w-10 h-10 text-red-500/80 animate-pulse" />
      </div>
      <h2 className="section-title text-[#1A1A1A] mb-8">
       Financial & Legal <br />
       <span className="text-red-500 italic">Crisis Containment.</span>
      </h2>
      <p className="text-xl text-[#1A1A1A] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
       When we refer to emergencies, we mean financial and legal emergencies — not medical ones. These situations require immediate, expert attention and can be just as stressful as a health crisis.
      </p>
      <div className="inline-flex items-center gap-3 bg-red-500/5 border border-red-500/10 px-8 py-4 rounded-full text-red-600 text-[12px] font-mono tracking-widest uppercase font-bold shadow-sm">
       <ShieldAlert className="w-4 h-4" />
       Purely Financial & Legal • No Medical Services
      </div>
     </motion.div>

     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Government & Legal */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}>
       <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center justify-center shadow-sm">
         <Scale className="w-5 h-5 text-red-500/70" />
        </div>
        <h3 className="text-2xl font-serif text-[#1A1A1A]">Government & Legal</h3>
       </div>
       <div className="space-y-6">
        {govtLegal.map((item, i) => (
         <motion.div key={i} variants={elegantFadeUp} className="premium-card p-10 bg-white border border-black/5 hover:border-red-500/30 transition-all group shadow-sm">
          <div className="flex items-center gap-5 mb-4">
           <item.icon className="w-6 h-6 text-red-500/50 group-hover:text-red-500 transition-colors" />
           <h4 className="text-xl font-serif text-[#1A1A1A] group-hover:text-red-600 transition-colors">{item.title}</h4>
          </div>
          <p className="text-[#1A1A1A] text-sm font-light leading-relaxed">{item.desc}</p>
         </motion.div>
        ))}
       </div>
      </motion.div>

      {/* Utilities & Services */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={luxuryStagger}>
       <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-center shadow-sm">
         <Droplets className="w-5 h-5 text-blue-500/70" />
        </div>
        <h3 className="text-2xl font-serif text-[#1A1A1A]">Utilities & Services</h3>
       </div>
       <div className="space-y-6">
        {utilityServices.map((item, i) => (
         <motion.div key={i} variants={elegantFadeUp} className="premium-card p-10 bg-white border border-black/5 hover:border-blue-500/30 transition-all group shadow-sm">
          <div className="flex items-center gap-5 mb-4">
           <item.icon className="w-6 h-6 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
           <h4 className="text-xl font-serif text-[#1A1A1A] group-hover:text-blue-600 transition-colors">{item.title}</h4>
          </div>
          <p className="text-[#1A1A1A] text-sm font-light leading-relaxed">{item.desc}</p>
         </motion.div>
        ))}
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* SECTION 3: DARK LIAISON */}
   <section className="section-padding section-dark border-y border-white/[0.05]">
    <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative group">
       <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl transition-all duration-1000 group-hover:border-accent/30">
        <img src={emergencyResolutionImage} alt="Emergency resolution" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
       </div>
       <div className="absolute -bottom-10 -right-10 p-10 glass-panel rounded-[2rem] border-red-500/20 bg-black/80 max-w-xs backdrop-blur-3xl shadow-2xl">
        <div className="text-2xl font-serif text-white mb-4">Immediate Dispatch</div>
        <p className="text-xs text-white/90 leading-relaxed font-light">Authorized directors intervene physically within hours across major Indian metros.</p>
       </div>
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <span className="accent-label text-red-500">Rapid Response</span>
       <h2 className="section-title text-[#FDFCFB] mb-8">Professional Physical <br /><span className="text-red-500 italic">Liaison.</span></h2>
       <p className="text-lg text-white/90 font-light leading-relaxed mb-10 max-w-xl">
        Situations like court notices or utility cuts require expert attention on the ground. We eliminate the time-zone liability by acting as your parents’ authorized physical proxy in India.
       </p>
       <div className="space-y-8">
        <div className="flex items-center gap-6 group/item">
         <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover/item:border-red-500/50 transition-colors shadow-inner">
          <ShieldCheck className="w-6 h-6 text-red-500/80" />
         </div>
         <span className="text-white/90 font-medium text-xl group-hover/item:text-white transition-colors">Govt & Municipal Liaison</span>
        </div>
        <div className="flex items-center gap-6 group/item">
         <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover/item:border-red-500/50 transition-colors shadow-inner">
          <ShieldCheck className="w-6 h-6 text-red-500/80" />
         </div>
         <span className="text-white/90 font-medium text-xl group-hover/item:text-white transition-colors">Bank & Utility Resolution</span>
        </div>
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* SECTION 4: LIGHT FINAL CTA */}
   <section className="section-padding section-light text-center border-t border-black/[0.05]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
      <div className="flex items-center justify-center gap-4 mb-8">
       <div className="h-px w-12 bg-accent/40" />
       <span className="accent-label !mb-0 text-accent">Legacy Protection</span>
       <div className="h-px w-12 bg-accent/40" />
      </div>
      <h2 className="display-title !text-3xl md:!text-5xl text-[#1A1A1A] mb-10 leading-tight">
       Secure Your Family's <br className="hidden md:block" />
       <span className="text-gradient-gold italic">Crisis Safety Net.</span>
      </h2>
      <p className="text-xl text-[#1A1A1A] font-light mb-16 max-w-2xl mx-auto leading-relaxed">
       Establish your fiduciary relationship today so we are authorized to act the moment your parents face a financial or legal crisis.
      </p>
      <div className="flex justify-center">
       <Link href="/contact">
        <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 group shadow-lg">
         <span>Initiate Pre-Emptive Review</span>
         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
      </div>
      <div className="mt-16 flex items-center justify-center gap-4 opacity-40">
       <ShieldCheck className="w-5 h-5 text-accent" />
       <span className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">
        Institutional Discretion Guaranteed
       </span>
      </div>
     </motion.div>
    </div>
   </section>
  </main>
 );
}

