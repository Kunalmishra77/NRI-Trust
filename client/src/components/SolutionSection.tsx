import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { services } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SolutionSection() {
 return (
  <section className="py-24 md:py-32 bg-[#050814] relative overflow-hidden border-t border-white/[0.03]">
   <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
   
   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={elegantFadeUp}
     className="mb-32 text-center md:text-left"
    >
     <span className="accent-label text-[#D4AF37]">Core Practice Areas</span>
     <h2 className="section-title mb-8 text-[#F5F3EC]">
      Dedicated Support <br />
      <span className="text-white/40 italic text-3xl md:text-5xl font-light">Exclusively for Aging Parents in India.</span>
     </h2>
     <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
      We provide purely financial, legal, and administrative stewardship. We do not provide healthcare services, allowing us to maintain a sharp focus on your family's fiscal security.
     </p>
    </motion.div>

    <div className="space-y-32 md:space-y-48">
     {services.map((service, index) => (
      <motion.div
       key={service.slug}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, margin: "-100px" }}
       variants={elegantFadeUp}
       className={`grid lg:grid-cols-12 gap-16 lg:gap-24 items-center ${
        index % 2 !== 0 ? "lg:direction-rtl" : ""
       }`}
      >
       {/* Content Column */}
       <div className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-2 text-right lg:text-left" : ""}`}>
        <div className={`flex items-center gap-6 mb-8 ${index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"}`}>
         <div className="w-16 h-16 rounded-2xl bg-[#0B101E] border border-white/5 flex items-center justify-center shadow-inner group-hover:border-[#D4AF37]/40 transition-all duration-500">
          <service.icon className="w-8 h-8 text-[#D4AF37]" />
         </div>
         <div className="text-[10px] font-mono text-[#D4AF37]/50 uppercase tracking-[0.4em] font-bold">Service 0{index + 1}</div>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-serif text-[#F5F3EC] mb-6 leading-tight">
         {service.title}
        </h3>
        
        <p className="text-lg text-white/50 font-light leading-relaxed mb-10">
         {service.description}
        </p>
        
        <div className="space-y-4 mb-12">
         {service.features.slice(0, 3).map((f, i) => (
          <div key={i} className={`flex items-start gap-4 ${index % 2 !== 0 ? "lg:justify-start justify-end" : "justify-start"}`}>
           <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
           <span className="text-[15px] text-[#F5F3EC]/80 font-light">{f.title}</span>
          </div>
         ))}
        </div>

        <Link href={`/services/${service.slug}`}>
         <button className="btn-premium-outline !px-8 !py-4 flex items-center gap-4 group mx-auto lg:mx-0">
          <span>Examine {service.shortTitle}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>
        </Link>
       </div>

       {/* Visual/Perspective Column */}
       <div className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
        <div className="relative group perspective-container">
         <div className="absolute -inset-10 bg-[#D4AF37]/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
         
         <motion.div
          whileHover={{ rotateY: index % 2 === 0 ? 8 : -8, rotateX: 4, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="preserve-3d relative"
         >
          {/* Editorial Image Composition */}
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 bg-[#0D1322] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#050814]/80 via-transparent to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none z-10" />
           
           {/* Decorative elements based on service type */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
            <service.icon className="w-64 h-64 text-white" />
           </div>
           
           <div className="p-12 relative z-20 h-full flex flex-col justify-end">
            <div className="p-8 premium-card rounded-[2rem] max-w-sm transform translate-z-30 backdrop-blur-2xl bg-[#0B101E]/90 border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
             <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold text-left">Fiduciary Protocol</span>
             </div>
             <p className="text-[#F5F3EC] text-lg font-serif italic leading-relaxed text-left">
              &ldquo;Providing the physical liaison required to manage Indian {service.shortTitle.toLowerCase()} compliance for seniors.&rdquo;
             </p>
            </div>
           </div>
          </div>
         </motion.div>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
