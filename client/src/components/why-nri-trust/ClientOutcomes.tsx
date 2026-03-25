import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ClientOutcomes() {
  const outcomes = [
    {
      title: "Inheritance Transferred",
      scenario: "An NRI in London faced a 3-year deadlock in transferring his late father's property and bank assets due to missing documentation and physical KYC requirements.",
      result: "We acted as his physical proxy, resolved the documentation gaps with the municipal corporation, and successfully completed the mutation and repatriation within 6 months.",
      impact: "£450k Assets Repatriated"
    },
    {
      title: "Property Encroachment Averted",
      scenario: "A client in Silicon Valley discovered an unauthorized 'temporary' structure being built on her vacant ancestral land in Bangalore.",
      result: "Our legal team and physical liaisons intervened within 48 hours, filed a formal police complaint, and secured the perimeter with institutional-grade monitoring.",
      impact: "₹4.2 Cr Asset Secured"
    },
    {
      title: "Tax Notice Resolved",
      scenario: "An NRI in Dubai received multiple IT notices for unreported capital gains on a property sale from 5 years ago, risking a bank account freeze.",
      result: "We consolidated his tax history, filed the necessary appeals, and resolved the discrepancy without him having to travel to India once.",
      impact: "Zero Penalties Incurred"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label">The Stewardship Proof</span>
          <h2 className="section-title mb-6">Real Scenarios. <br /><span className="text-gradient-gold italic">Definitive Outcomes.</span></h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Our value isn't just in what we do, but in the peace of mind we provide when complex 
            Indian bureaucracy meets global expectations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              variants={elegantFadeUp}
              className="glass-card p-10 flex flex-col h-full border-white/5 hover:border-accent/20 transition-all duration-500 bg-white/[0.01]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-serif text-white">{item.title}</h3>
              </div>
              
              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/70 block mb-2">The Challenge</span>
                  <p className="text-sm text-white/90 leading-relaxed italic">"{item.scenario}"</p>
                </div>
                
                <div className="pt-6 border-t border-white/[0.05]">
                  <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent block mb-2 font-bold">The NRI Trust Result</span>
                  <p className="text-sm text-white/90 leading-relaxed font-light">{item.result}</p>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-accent/20 flex items-center justify-between">
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent font-bold">{item.impact}</span>
                <ArrowRight className="w-4 h-4 text-accent/60" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

