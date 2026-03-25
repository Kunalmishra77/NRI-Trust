import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

function FAQItem({ question, answer, theme }: { question: string; answer: string; theme?: 'dark' | 'light' }) {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <motion.div 
   variants={elegantFadeUp}
   className={cn(
    "border-b transition-all duration-500",
    theme === 'light' ? "border-black/[0.05]" : "border-white/[0.05]",
    isOpen ? (theme === 'light' ? "bg-black/[0.02]" : "bg-white/[0.02]") : ""
   )}
  >
   <button 
    onClick={() => setIsOpen(!isOpen)}
    className="w-full py-8 lg:py-10 flex items-start lg:items-center justify-between text-left group px-4 lg:px-8"
   >
    <span className={cn(
     "text-xl lg:text-2xl font-serif font-medium transition-colors pr-8",
     isOpen ? "text-accent" : (theme === 'light' ? "text-[#1A1A1A] group-hover:text-accent" : "text-white group-hover:text-white/80")
    )}>
     {question}
    </span>
    <div className={cn(
     "w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-inner",
     isOpen 
       ? (theme === 'light' ? "bg-[#FDFCFB] border-accent/30 rotate-180" : "bg-[#0A0F0D] border-accent/30 rotate-180") 
       : (theme === 'light' ? "bg-black/5 border-black/10 group-hover:border-accent/50" : "bg-white/5 border-white/10 group-hover:border-accent/50")
    )}>
     {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-accent group-hover:text-accent" />}
    </div>
   </button>
   <motion.div 
    initial={false}
    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
    className="overflow-hidden"
   >
    <p className={cn(
      "pb-8 lg:pb-10 px-4 lg:px-8 text-base lg:text-lg font-light leading-relaxed max-w-4xl border-l-2 border-accent/20 ml-4 lg:ml-8 mt-2",
      theme === 'light' ? "text-[#1A1A1A]/90" : "text-white/90"
    )}>
     {answer}
    </p>
   </motion.div>
  </motion.div>
 );
}

export default function FAQSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 return (
  <section className={cn(
    "section-padding relative overflow-hidden transition-colors duration-500",
    theme === 'light' ? "section-light" : "section-dark"
  )}>
   <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
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
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
     )}>Stewardship <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light">Questions</span></h2>
    </motion.div>

    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className={cn(
      "max-w-4xl mx-auto rounded-[3rem] overflow-hidden border shadow-sm",
      theme === 'light' ? "bg-white border-black/5" : "bg-[#0A0F0D] border-white/0.05"
     )}
    >
     {faqs.map((faq, idx) => (
      <FAQItem key={idx} {...faq} theme={theme} />
     ))}
    </motion.div>
   </div>
  </section>
 );
}

