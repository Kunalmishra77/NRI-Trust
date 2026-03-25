import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, FileSearch, Target, TrendingUp, Users, Activity } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const cases = [
  {
    category: "Legal & Succession",
    title: "Estate Probate Resolved Remotely",
    location: "The Kapoor Family • UK",
    problem: "Ancestral assets frozen across three Indian states due to an unregistered Will and missing legal heirs.",
    resolution: "Professional directors acted as physical proxies, coordinating 14 legal hearings and consolidating assets into a single family trust.",
    impact: "₹12Cr Assets Unlocked",
    statIcon: TrendingUp,
    accent: "text-blue-500"
  },
  {
    category: "Property Governance",
    title: "Encroachment Defended in Absentia",
    location: "The Menon Family • Singapore",
    problem: "Ancestral property targeted by local land-grabbers using forged utility documents while the family was abroad.",
    resolution: "Immediate physical dispatch of security and legal team. Established 24/7 ground monitoring and secured local police protection.",
    impact: "Title Secured Permanently",
    statIcon: Target,
    accent: "text-orange-500"
  },
  {
    category: "Tax & Compliance",
    title: "₹45L Tax Demand Rectified",
    location: "The Sharma Family • USA",
    problem: "Sudden NRO account freeze and heavy penalty notices for 'undisclosed' high-value foreign remittances.",
    resolution: "Reconstructed 10 years of bank records. Direct liaison with the IT ombudsman to prove source of funds and clear all liabilities.",
    impact: "Penalty Zeroed",
    statIcon: ShieldCheck,
    accent: "text-green-600"
  }
];

export default function SuccessStoriesSection() {
  return (
    <section id="outcomes" className="relative py-20 md:py-28 overflow-hidden bg-[#050914] border-y border-white/[0.05]">
      {/* Background Sophistication */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#d4af37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-container relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 mb-8"
            >
              <Activity className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                Fiduciary Track Record
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-sans font-black text-white leading-tight tracking-tight">
              Real Impact for <br />
              <span className="text-white/40">Global Families.</span>
            </h2>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 pb-2">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050914] bg-[#0A0F1A] flex items-center justify-center overflow-hidden shadow-sm">
                  <Users className="w-5 h-5 text-white/20" />
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/40 leading-tight text-left">
              Active Stewardship <br/> 200+ Elite Portfolios
            </p>
          </div>
        </div>

        {/* Cinematic List Logic */}
        <div className="space-y-12">
          {cases.map((item, idx) => {
            const isReversed = idx === 1; // Reverse only the second card
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden bg-[#0A0F1A] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all duration-700 hover:shadow-[0_50px_100px_rgba(0,0,0,0.6)] hover:-translate-y-1">
                  
                  {/* Left Side: Identity & Result (4 cols) */}
                  <div className={cn(
                    "lg:col-span-4 p-8 md:p-12 bg-[#050914] text-white flex flex-col justify-between relative overflow-hidden min-h-[380px]",
                    isReversed ? "lg:order-last border-l border-white/5" : "border-r border-white/5"
                  )}>
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#d4af37] mb-6 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        {item.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-sans font-black mb-3 leading-tight tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#d4af37]/60 font-mono text-[10px] uppercase tracking-widest font-bold">
                        {item.location}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                          <item.statIcon className="w-6 h-6 text-[#d4af37]" />
                        </div>
                        <div>
                          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-1 font-bold">Outcome</div>
                          <div className="text-lg font-sans font-black text-white">{item.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Narrative Diagnostic (8 cols) */}
                  <div className={cn(
                    "lg:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-[#0A0F1A] relative min-h-[380px]",
                    isReversed ? "lg:order-first" : ""
                  )}>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                      {/* Problem */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center">
                            <FileSearch className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-red-500/70">The Deadlock</span>
                        </div>
                        <p className="text-lg text-white/60 leading-relaxed font-medium">
                          &ldquo;{item.problem}&rdquo;
                        </p>
                      </div>

                      {/* Resolution */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                          </div>
                          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-green-500/70">The Execution</span>
                        </div>
                        <p className="text-lg text-white leading-relaxed font-bold">
                          {item.resolution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 flex justify-end">
                      <Link href="/contact">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white text-[11px] font-mono font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-white hover:text-black"
                        >
                          Protocol Detail
                          <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

