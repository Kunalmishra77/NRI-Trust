import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

const guides = [
  {
    title: "Understanding Income Tax Notices for NRIs",
    tag: "Taxation",
    time: "8 min read"
  },
  {
    title: "Preventing Property Encroachment in India",
    tag: "Property",
    time: "12 min read"
  },
  {
    title: "Bank KYC Compliance for Elderly Parents",
    tag: "Banking",
    time: "6 min read"
  }
];

export default function KnowledgeHubSection() {
  return (
    <section className="section-padding bg-[#050814] relative overflow-hidden border-t border-white/[0.03]">
      <div className="max-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-24"
        >
          <span className="accent-label text-accent">The Private Library</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5F3EC] mb-8 leading-tight">
            Authoritative <span className="text-white/40 italic">NRI Briefs.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {guides.map((g, i) => (
            <Link key={i} href="/resources">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group premium-card p-10 rounded-[2rem] flex flex-col h-full cursor-pointer hover:border-accent/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{g.tag}</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{g.time}</div>
                </div>
                
                <h3 className="text-2xl font-serif text-[#F5F3EC] mb-12 group-hover:text-accent transition-colors leading-snug">
                  {g.title}
                </h3>
                
                <div className="mt-auto flex items-center gap-3 text-white/40 group-hover:text-accent transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-widest font-bold">Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
