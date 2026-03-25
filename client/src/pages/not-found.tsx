import { Link } from "wouter";
import { ArrowRight, SearchX } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function NotFound() {
 return (
  <main className="min-h-screen flex items-center justify-center section-dark relative overflow-hidden">
   {/* ─── LUXURY BACKGROUND ─── */}
   <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,160,82,0.05)_0%,transparent_70%)] pointer-events-none" />
   
   <div className="max-container relative z-10 w-full text-center py-32">
    <motion.div
     initial="hidden"
     animate="visible"
     variants={elegantFadeUp}
     className="flex flex-col items-center max-w-2xl mx-auto"
    >
     <div className="w-24 h-24 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-2xl flex items-center justify-center mb-10 group">
      <SearchX className="w-10 h-10 text-accent/60 group-hover:text-accent transition-colors" />
     </div>

     <span className="accent-label text-accent">Error 404</span>
     
     <h1 className="display-title !text-5xl md:!text-6xl text-[#FDFCFB] mb-8 leading-tight">
      Page Not <span className="text-gradient-gold italic">Found</span>
     </h1>
     
     <p className="text-xl text-white/50 font-light mb-16 leading-relaxed">
      The advisory page you are looking for has been moved or no longer exists. 
      Please return to the homepage or explore our core practice areas.
     </p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
      <Link href="/" className="w-full sm:w-auto">
       <button className="btn-premium-primary min-w-[240px] h-16">
        Return to Homepage
       </button>
      </Link>
      <Link href="/services" className="w-full sm:w-auto">
       <button className="btn-premium-outline min-w-[240px] h-16 flex items-center justify-center gap-3 group">
        Practice Areas
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
       </button>
      </Link>
     </div>
    </motion.div>
   </div>
  </main>
 );
}

