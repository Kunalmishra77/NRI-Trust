import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, ShieldCheck, Camera, MapPin, Key, Home, Search, AlertTriangle } from "lucide-react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import PageHeader from "@/layouts/PageHeader";
import { getServiceBySlug } from "@/data/services";
import { IsometricProperty } from "@/components/ui/three-d-elements";

export default function PropertyTenancy() {
 const data = getServiceBySlug("property-tenancy")!;

 return (
  <div className="bg-background min-h-screen">
   <PageHeader
    title="Property & Tenancy"
    subtitle="Professional remote oversight and physical protection for your Indian real estate."
    breadcrumbs={[{ label: "Practice Areas", href: "/services" }, { label: "Property & Tenancy" }]}
   />

   {/* ─── UNIQUE HERO: THE VIGILANT OVERSIGHT ─── */}
   <section className="py-20 md:py-28 relative overflow-hidden border-b border-white/[0.05]">
    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-12 gap-20 items-center">
      <motion.div initial="hidden" animate="visible" variants={luxuryStagger} className="lg:col-span-7">
       <motion.div variants={elegantFadeUp} className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-amber-500/40" />
        <span className="accent-label !mb-0 text-amber-400">On-Ground Vigilance</span>
       </motion.div>
       <motion.h1 variants={elegantFadeUp} className="display-title mb-8 !text-5xl md:!text-7xl">
        Your Eyes and Ears <br />
        <span className="text-amber-400 italic">On the Ground.</span>
       </motion.h1>
       <motion.p variants={elegantFadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
        Managing Indian property from abroad involves tenant friction, municipal compliance, and physical risk. We provide continuous vigilance to ensure your property remains an asset, not a liability.
       </motion.p>
       
       <div className="flex flex-wrap gap-6">
        <motion.div variants={elegantFadeUp} className="px-6 py-4 glass-panel rounded-2xl border-amber-500/20 flex items-center gap-4 bg-amber-500/5">
         <Camera className="w-5 h-5 text-amber-400" />
         <span className="text-sm font-medium text-white/90">Visual Photo Audits</span>
        </motion.div>
        <motion.div variants={elegantFadeUp} className="px-6 py-4 glass-panel rounded-2xl border-amber-500/20 flex items-center gap-4 bg-amber-500/5">
         <MapPin className="w-5 h-5 text-amber-400" />
         <span className="text-sm font-medium text-white/90">Pan-India Network</span>
        </motion.div>
       </div>
      </motion.div>

      <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center perspective-container hidden lg:flex">
       <div className="relative preserve-3d">
        <IsometricProperty className="scale-[2]" />
        <motion.div 
         animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute -top-20 -right-20 p-6 glass-panel rounded-2xl border-amber-500/30 bg-black/40"
        >
         <Search className="w-8 h-8 text-amber-400" />
        </motion.div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── VISUAL OVERSIGHT SYSTEM ─── */}
   <section className="py-32 bg-[#050806] relative overflow-hidden">
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <span className="accent-label text-amber-400">Institutional Reporting</span>
       <h2 className="section-title mb-8">The Visual <span className="text-white italic">Audit Standard.</span></h2>
       <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
        We replace vague verbal updates with structured data. Every site visit is documented with 360° photo and video evidence, structural assessments, and verified neighbor liaison reports.
       </p>
       <div className="grid grid-cols-2 gap-6">
        <div className="p-6 glass-panel rounded-2xl border-white/5 bg-white/[0.01]">
         <div className="text-2xl font-serif text-white mb-1">₹250 Cr+</div>
         <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">Assets Guarded</div>
        </div>
        <div className="p-6 glass-panel rounded-2xl border-white/5 bg-white/[0.01]">
         <div className="text-2xl font-serif text-white mb-1">Pan-India</div>
         <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">Execution Network</div>
        </div>
       </div>
      </motion.div>
      <div className="relative">
       <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
        <img src="/attached_assets/image_1764307200659.png" alt="Property monitoring" className="w-full h-full object-cover" />
       </div>
       <div className="absolute top-10 left-10 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-full backdrop-blur-md flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Encroachment Shield Active</span>
       </div>
      </div>
     </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.features.map((f, i) => (
       <motion.div 
        key={i} 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
        className="p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-amber-500/30 transition-all duration-500 group bg-white/[0.01]"
       >
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
         <Building2 className="w-6 h-6 text-amber-400" />
        </div>
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">{f.title}</h3>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* ─── EMERGENCY SECTION: THE ENCROACHMENT SHIELD ─── */}
   <section className="section-padding bg-background relative overflow-hidden">
    <div className="max-container relative z-10">
     <div className="glass-panel p-12 md:p-24 rounded-[4rem] border-red-500/10 bg-[#0A0F0D] relative overflow-hidden shadow-3xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/40 via-red-600/10 to-transparent" />
      
      <div className="grid lg:grid-cols-2 gap-20 items-center">
       <div>
        <div className="flex items-center gap-4 mb-8">
         <AlertTriangle className="w-6 h-6 text-red-500" />
         <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">Encroachment Deterrence</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Physical Asset <br /><span className="text-red-500 italic">Protection.</span></h2>
        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
         Neighbors encroaching on vacant land or tenants refusing to vacate are the biggest risks for NRIs. Our team installs physical deterrence, files police diaries, and establishes a clear legal presence on your behalf.
        </p>
        <div className="space-y-4">
         {data.emergencies.map((e, i) => (
          <div key={i} className="flex items-center gap-4 text-white/80">
           <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
           <span className="text-sm">{e}</span>
          </div>
         ))}
        </div>
       </div>
       <div className="grid grid-cols-2 gap-6">
        <div className="aspect-square glass-panel rounded-3xl border-white/10 overflow-hidden relative">
         <img src="/attached_assets/image_1764308005552.png" alt="Inspection" className="w-full h-full object-cover " />
        </div>
        <div className="aspect-square glass-panel rounded-3xl border-white/10 overflow-hidden relative mt-12">
         <img src="/attached_assets/image_1764308558151.png" alt="Maintenance" className="w-full h-full object-cover " />
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── CUSTOM CTA ─── */}
   <section className="section-padding bg-[#050806] text-center relative overflow-hidden border-t border-white/[0.05]">
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <span className="accent-label text-amber-400">Secure Your Real Estate</span>
      <h2 className="display-title mb-10">Protect Your Indian <br /><span className="text-gradient-gold italic">Property Portfolio.</span></h2>
      <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
       Ensure your properties are managed with professional vigilance. Initiate a private audit of your real estate portfolio today.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] !bg-amber-600 !text-[#0A0F0D] hover:!shadow-[0_0_50px_rgba(217,119,6,0.4)]">
        <span>Request Property Audit</span>
       </button>
      </Link>
     </motion.div>
    </div>
   </section>
  </div>
 );
}
