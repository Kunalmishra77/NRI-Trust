import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function ProblemSection() {
  const painPoints = [
    {
      number: "01",
      title: "KYC Issues & Frozen Accounts",
      description: "Bank accounts frozen because KYC expired while you're overseas — no one to visit the branch.",
    },
    {
      number: "02",
      title: "Court Notices & Legal Threats",
      description: "Unexpected legal notices for property disputes or inheritance claims piling up unanswered.",
    },
    {
      number: "03",
      title: "Property Encroachment",
      description: "Neighbors encroaching on your land, tenants refusing to pay — and you're 10,000 miles away.",
    },
    {
      number: "04",
      title: "Insurance Claims Denied",
      description: "Your parent's hospitalization claim was rejected. Who fights the insurer on your behalf?",
    },
    {
      number: "05",
      title: "Tax Notices & Compliance",
      description: "IT department notices for unreported rental income or capital gains — deadlines approaching fast.",
    },
    {
      number: "06",
      title: "Succession Left Unplanned",
      description: "No will, no power of attorney, no succession plan — a recipe for family disputes and legal chaos.",
    },
  ];

  return (
    <section
      id="problems"
      className="py-24 md:py-32 bg-[hsl(180,50%,8%)] relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(180_50%_15%_/_0.15)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            If You're an NRI, <span className="text-red-400">This Keeps You Up at Night</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light">
            Managing finances, legal matters, and properties from abroad is stressful — and risky.
          </p>
        </motion.div>

        {/* 2-column grid of pain points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.number}
              variants={elegantFadeUp}
              className="group p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:border-l-amber-500/50 hover:border-l-2 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-sm text-amber-500/40 block mb-2">{point.number}</span>
              <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">{point.title}</h3>
              <p className="text-sm md:text-base text-white/40 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull-quote at bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center"
        >
          <div className="relative inline-block max-w-3xl">
            <span className="absolute -top-6 -left-4 text-5xl text-amber-500/20 font-serif leading-none select-none">&ldquo;</span>
            <p className="text-xl md:text-2xl text-white/50 italic font-serif leading-relaxed px-8">
              The stress of managing everything remotely... the fear of missing a deadline... the risk of losing what you've built.
            </p>
            <span className="absolute -bottom-6 -right-4 text-5xl text-amber-500/20 font-serif leading-none select-none">&rdquo;</span>
          </div>
          <p className="text-amber-400/60 font-mono text-xs tracking-[0.3em] uppercase mt-8">
            Every NRI faces this. You're not alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
