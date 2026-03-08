import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { services } from "@/data/services";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SolutionSection() {
 return (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={elegantFadeUp}
     className="mb-32"
    >
     <span className="accent-label text-accent">Core Practice Areas</span>
     <h2 className="section-title mb-8 text-white">
      Dedicated Support <br />
      <span className="text-muted-foreground italic text-3xl md:text-4xl">Exclusively for Aging Parents in India.</span>
     </h2>
     <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
      We provide purely financial, legal, and administrative stewardship. We do not provide healthcare services, allowing us to maintain a sharp focus on your family's fiscal security.
     </p>
    </motion.div>

    <div className="space-y-32 md:space-y-40">
     {services.map((service, index) => (
      <motion.div
       key={service.slug}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, margin: "-100px" }}
       variants={elegantFadeUp}
       className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
        index % 2 !== 0 ? "lg:direction-rtl" : ""
       }`}
      >
       {/* Content Column */}
       <div className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-2 text-right lg:text-left" : ""}`}>
        <div className={`flex items-center gap-6 mb-8 ${index % 2 !== 0 ? "lg:justify-start justify-end" : ""}`}>
         <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center shadow-inner group-hover:border-accent/40 transition-all duration-500">
          <service.icon className="w-8 h-8 text-accent" />
         </div>
         <div className="text-[10px] font-mono text-accent/40 uppercase tracking-[0.3em] font-bold text-left">Service 0{index + 1}</div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
         {service.title}
        </h3>
        
        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
         {service.description}
        </p>
        
        <div className="space-y-4 mb-12">
         {service.features.slice(0, 3).map((f, i) => (
          <div key={i} className={`flex items-start gap-4 ${index % 2 !== 0 ? "lg:justify-start justify-end" : ""}`}>
           <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(207,160,82,0.5)]" />
           <span className="text-sm text-white/70 font-light">{f.title}</span>
          </div>
         ))}
        </div>

        <Link href={`/services/${service.slug}`}>
         <button className="btn-premium-outline !px-8 !py-4 flex items-center gap-3 group mx-auto lg:mx-0">
          <span>Examine Service</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>
        </Link>
       </div>

       {/* Visual/Perspective Column */}
       <div className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
        <div className="relative group perspective-container">
         <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
         
         <motion.div
          whileHover={{ rotateY: index % 2 === 0 ? 10 : -10, rotateX: 5, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="preserve-3d relative"
         >
          {/* Editorial Image Composition */}
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 bg-[#0A0F0D] shadow-3xl">
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-transparent z-10" />
           <div className="absolute inset-0 bg-transparent pointer-events-none z-10" />
           
           {/* Decorative elements based on service type */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <service.icon className="w-64 h-64 text-accent" />
           </div>
           
           <div className="p-12 relative z-20 h-full flex flex-col justify-end">
            <div className="p-8 glass-panel rounded-3xl border-white/10 max-w-sm transform translate-z-20">
             <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold text-left">Fiduciary Protocol</span>
             </div>
             <p className="text-white text-lg font-serif italic italic leading-relaxed text-left">
              &ldquo;Providing the physical liaison required to manage Indian {service.shortTitle.toLowerCase()} compliance for seniors.&rdquo;
             </p>
            </div>
           </div>
          </div>
          
          {/* Shadow Layer */}
          <div className="absolute -bottom-10 inset-x-10 h-20 bg-black/40 blur-3xl -z-10 rounded-full" />
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
