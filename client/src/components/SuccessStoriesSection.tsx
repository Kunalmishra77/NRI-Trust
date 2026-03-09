import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const cases = [
  {
    title: "Tax Notice Resolved",
    tag: "Taxation",
    summary: "A high-value transaction notice for a parent's NRO account was resolved by coordinated CA and bank liaison within 10 days.",
    result: "Avoided ₹4.2L penalty"
  },
  {
    title: "Tenant Eviction Managed",
    tag: "Property",
    summary: "Legal coordination and physical verification ensured a non-paying tenant vacated a family estate in Pune without litigation.",
    result: "Possession restored in 45 days"
  },
  {
    title: "Insurance Claim Approved",
    tag: "Insurance",
    summary: "After 3 rejections, our advisory team re-filed a surgery claim with correct medical documentation, securing full reimbursement.",
    result: "₹8.5L claim credited"
  }
];

export default function SuccessStoriesSection() {
  return (
    <section className="section-padding bg-[#0B101E] relative overflow-hidden">
      <div className="max-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
            <span className="accent-label text-[#D4AF37]">Evidence of Impact</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC]">Case <span className="text-white/40 italic">Outcomes.</span></h2>
          </motion.div>
          <Link href="/success-stories">
            <button className="flex items-center gap-4 text-accent hover:text-[#F3E5AB] transition-colors group">
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Explore All Outcomes</span>
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-[#050814] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </Link>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid lg:grid-cols-3 gap-8"
        >
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              variants={elegantFadeUp}
              className="premium-card p-10 rounded-[2.5rem] bg-[#050814]/50 flex flex-col group h-full"
            >
              <div className="text-[10px] font-mono text-accent/60 uppercase tracking-widest font-bold mb-6">{item.tag}</div>
              <h3 className="text-2xl font-serif text-[#F5F3EC] mb-6 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-10 flex-1">{item.summary}</p>
              
              <div className="pt-8 border-t border-white/5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#10B981] font-mono text-[11px] font-bold uppercase tracking-widest">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
