import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
 {
  question: "How do I know which plan is right for my family?",
  answer: "We offer a free consultation where we review your parents' situation — their insurance, bank accounts, property, and legal documents. Based on that, we recommend the plan that covers everything they need without paying for extras."
 },
 {
  question: "Can I change my plan later?",
  answer: "Yes. As your family's needs change — like buying new property or starting succession planning — you can move to a higher plan anytime. Most families start with Comprehensive Care."
 },
 {
  question: "What counts as an emergency?",
  answer: "Emergencies include frozen bank accounts, sudden legal notices, someone trying to take over your property, or insurance claims getting rejected during hospitalization. We do NOT provide medical care, but we handle the financial and paperwork side of medical emergencies."
 },
 {
  question: "Does the plan include healthcare or medical costs?",
  answer: "No. NRI Trust handles insurance claims, hospital billing, and all the administrative work. We are not a healthcare provider or nursing service — we handle the financial and legal side."
 },
 {
  question: "Does one plan cover both parents and different cities?",
  answer: "Yes. Our Comprehensive and Premium plans cover your entire family's assets across India. During onboarding, we map all accounts, properties, and documents regardless of which city they are in."
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
      <span className="accent-label !mb-0 tracking-[0.25em]">Common Questions</span>
      <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-accent/50" />
     </div>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
     )}>Frequently Asked <span className="text-transparent bg-clip-text bg-gold-gradient italic font-light">Questions</span></h2>
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

