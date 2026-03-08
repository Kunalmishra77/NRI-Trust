import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { X, Check, ArrowRight, AlertCircle } from "lucide-react";

export default function FailureMatrix() {
  const comparisons = [
    {
      domain: "Legal Coordination",
      fail: "Relying on overburdened relatives or local agents who lack technical legal expertise.",
      trust: "Professional directors acting as authorized physical proxies for all legal formalities."
    },
    {
      domain: "Financial Vigilance",
      fail: "Reactive response to bank freezes or tax notices only after they become crises.",
      trust: "Proactive governance and regular monitoring to prevent emergencies before they occur."
    },
    {
      domain: "Accountability",
      fail: "Fragmented communication and zero formal audit trail for actions taken in India.",
      trust: "Consolidated stewardship with institutional reporting and absolute fiduciary accountability."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050806] relative border-y border-white/[0.05]">
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="lg:col-span-7"
          >
            <span className="accent-label text-accent">The Fiduciary Shift</span>
            <h2 className="section-title mb-8">Why Informal <br /><span className="text-muted-foreground italic text-3xl md:text-4xl">Handling Is High-Risk.</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Protecting your parents’ financial well-being requires more than just 'checking in.' It requires a structured, professional system that bridges the distance gap.
            </p>
          </motion.div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 relative group">
              <img 
                src="/vThe Evolution of Care.png" 
                alt="The Evolution of Care" 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Fiduciary Standard</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-3xl">
          {/* Market Status Quo */}
          <div className="lg:col-span-5 p-10 lg:p-16 bg-background relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <X className="w-64 h-64 text-red-500" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-red-500/50 uppercase mb-10 block">Informal Handling</span>
              <h3 className="text-2xl font-serif mb-12 text-white/80">The Fragile System</h3>
              
              <div className="space-y-10">
                {comparisons.map((c, i) => (
                  <div key={i} className="flex gap-6 group/item">
                    <X className="w-5 h-5 text-red-500/30 shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground/60 font-light leading-relaxed italic">{c.fail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NRI Trust Standard */}
          <div className="lg:col-span-7 p-10 lg:p-16 bg-accent/[0.02] relative overflow-hidden border-l border-white/[0.05]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(207,160,82,0.1)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-accent uppercase mb-10 block">The NRI Trust Standard</span>
              <h3 className="text-2xl font-serif mb-12 text-white">Consolidated Stewardship</h3>
              
              <div className="space-y-10">
                {comparisons.map((c, i) => (
                  <div key={i} className="flex gap-8 group/item">
                    <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-1 bg-accent/5 group-hover/item:bg-accent/20 transition-all">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-accent/60 mb-2 font-bold">{c.domain}</div>
                      <p className="text-base text-white/90 font-light leading-relaxed group-hover/item:text-white transition-colors">{c.trust}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-white/[0.05]">
                <Link href="/contact">
                  <button className="flex items-center gap-4 text-accent hover:text-white transition-all group/btn">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">Secure Your Stewardship</span>
                    <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-[#0A0F0D] transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}