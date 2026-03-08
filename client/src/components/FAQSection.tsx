import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do we select the right tier for our family?",
    answer: "Tier selection is handled during your complimentary Discovery Session. We audit your current financial, legal, and property footprint in India and recommend the tier that provides optimal coverage without unnecessary complexity."
  },
  {
    question: "Can we upgrade or transition between tiers later?",
    answer: "Yes. As your family requirements evolve—such as acquiring new property or beginning estate planning—you can transition to a higher tier. Most families start with Comprehensive Care for immediate risk mitigation."
  },
  {
    question: "What exactly counts as 'Emergency Support'?",
    answer: "We define emergencies as critical financial or legal events: frozen bank accounts, unexpected legal notices, property encroachment attempts, or critical health insurance claim rejections. We do NOT provide medical care, but we handle the financial/admin side of medical emergencies."
  },
  {
    question: "Does the pricing include healthcare or medical costs?",
    answer: "No. NRI Trust is a financial and legal stewardship firm. We handle insurance claims, hospital billing audits, and administrative coordination, but we are not a healthcare provider or a home-care nursing service."
  },
  {
    question: "Does one plan cover multiple parents and different cities?",
    answer: "Our Comprehensive and Premium tiers are designed to cover the entire family unit's assets across India. During onboarding, we map all assets regardless of location to ensure unified stewardship."
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      variants={elegantFadeUp}
      className={`border-b border-white/[0.05] transition-all duration-500 ${isOpen ? "bg-white/[0.02]" : ""}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 lg:py-10 flex items-start lg:items-center justify-between text-left group px-4 lg:px-8"
      >
        <span className={`text-xl lg:text-2xl font-serif font-medium transition-colors pr-8 ${isOpen ? "text-accent" : "text-white group-hover:text-white/80"}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-inner ${isOpen ? "bg-[#0A0F0D] border-accent/30 rotate-180" : "bg-white/5 border-white/10 group-hover:border-accent/50"}`}>
          {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-accent/60 group-hover:text-accent" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-8 lg:pb-10 px-4 lg:px-8 text-base lg:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl border-l-2 border-accent/20 ml-4 lg:ml-8 mt-2">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-[#070b09] relative overflow-hidden border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={elegantFadeUp}
          className="mb-20 md:mb-32 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="accent-label !mb-0 tracking-[0.25em]">Common Inquiries</span>
            <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <h2 className="section-title text-white">Stewardship <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light">Questions</span></h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={luxuryStagger}
          className="max-w-4xl mx-auto glass-card rounded-[3rem] overflow-hidden border border-white/[0.05] bg-[#0A0F0D]"
        >
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
