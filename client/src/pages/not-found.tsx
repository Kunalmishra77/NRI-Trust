import { Link } from "wouter";
import { ArrowRight, SearchX } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function NotFound() {
 return (
  <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
   {/* ─── LUXURY BACKGROUND ─── */}
   <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(180_50%_15%_/_0.3)_0%,transparent_60%)] pointer-events-none" />
   
   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none blur-3xl opacity-90" />

   <div className="max-container relative z-10 w-full text-center py-32">
    <motion.div
     initial="hidden"
     animate="visible"
     variants={elegantFadeUp}
     className="flex flex-col items-center max-w-2xl mx-auto"
    >
     <div className="w-24 h-24 rounded-[2rem] bg-card border border-white/5 shadow-2xl flex items-center justify-center mb-10">
      <SearchX className="w-10 h-10 text-accent/60" />
     </div>

     <span className="eyebrow-label !text-accent">Error 404</span>
     
     <h1 className="display-heading !text-5xl md:!text-6xl text-foreground mb-8">
      Page Not <span className="text-accent italic font-light">Found</span>
     </h1>
     
     <p className="body-large mb-16 !text-foreground/70">
      The advisory page you are looking for has been moved or no longer exists. 
      Please return to the homepage or explore our core practice areas.
     </p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
      <Link href="/" className="w-full sm:w-auto">
       <button className="premium-button-primary w-full h-16 px-10 text-base">
        Return to Homepage
       </button>
      </Link>
      <Link href="/services" className="w-full sm:w-auto">
       <button className="premium-button-outline w-full h-16 px-10 text-base flex items-center justify-center gap-3 group">
        Practice Areas
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
       </button>
      </Link>
     </div>
    </motion.div>
   </div>
  </section>
 );
}
