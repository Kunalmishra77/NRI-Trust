import { motion } from "framer-motion";
import { X, Check, ArrowRight, ShieldCheck, UserMinus, HardHat, FileText, Smartphone, AlertTriangle, Shield } from "lucide-react";
import { Link } from "wouter";

export default function ComparisonSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FDFCFB] text-[#1A1A1A]">
      {/* Structural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full border border-[#1A1A1A]/10 bg-[#1A1A1A]/5 backdrop-blur-sm text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-8"
          >
            Why You Need This
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-black tracking-tight mb-8 leading-[1.1] text-[#1A1A1A]"
          >
            Without Preparation, <br />
            <span className="text-[#1A1A1A]/65">Families Struggle.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Comparison Matrix Logic */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-[#1A1A1A]/10 shadow-2xl bg-white">
            
            {/* LEFT: THE CHAOS (BEFORE) */}
            <div className="p-10 md:p-16 bg-[#FDFCFB] border-r border-[#1A1A1A]/5 relative overflow-hidden group">
              <div className="absolute top-[-5%] left-[-5%] opacity-[0.03] rotate-[-15deg] pointer-events-none">
                <AlertTriangle size={400} className="text-red-600" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-16">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-xs font-mono font-black uppercase tracking-[0.2em] text-red-600/70">Without NRI Trust</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-sans font-black mb-12 text-[#1A1A1A]">Scattered <br/>& Unorganized</h3>

                <div className="space-y-10">
                  {[
                    { label: "No Single View", desc: "Insurance with one agent, bank work with another, property with a third — nobody connects the dots.", icon: UserMinus },
                    { label: "Missing Information", desc: "Nominee details wrong, policies expired, documents scattered across lockers and relatives.", icon: Smartphone },
                    { label: "Panic in Emergency", desc: "When something happens, nobody knows what to do, who to call, or where to find papers.", icon: FileText }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-[#1A1A1A] mb-1">{item.label}</div>
                        <div className="text-base text-[#1A1A1A]/70 font-medium leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: THE CONTROL (AFTER) */}
            <div className="p-10 md:p-16 bg-[#050914] text-white relative overflow-hidden group">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-16">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <Shield className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <span className="text-xs font-mono font-black uppercase tracking-[0.2em] text-[#d4af37]">With NRI Trust</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-sans font-black mb-12">One Structured <br/>System</h3>

                <div className="space-y-10">
                  {[
                    { label: "Everything in One Place", desc: "Insurance, bank accounts, property papers, nominees — all organized and accessible.", icon: ShieldCheck },
                    { label: "Nothing Falls Through", desc: "We track every policy renewal, KYC update, and document expiry so you don't have to.", icon: ArrowRight },
                    { label: "Emergency Ready", desc: "Your family has a clear plan — contacts, documents, steps — for any situation.", icon: Check }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#d4af37]/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#d4af37]" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white mb-1 group-hover:text-accent transition-colors">{item.label}</div>
                        <div className="text-base text-white/75 font-medium leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/10">
                  <Link href="/contact">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-[#d4af37] font-sans font-black uppercase tracking-[0.2em] text-xs"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Center Connector Badge */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border border-[#1A1A1A]/10 shadow-2xl items-center justify-center z-20">
            <div className="text-center">
              <div className="text-[13px] font-mono font-black text-[#1A1A1A]/65 leading-none">VS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

