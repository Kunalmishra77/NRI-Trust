import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/layouts/PageHeader";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Link } from "wouter";
import { 
 ArrowRight, 
 FileText, 
 Download, 
 Search, 
 Landmark, 
 Scale, 
 Building2, 
 Shield, 
 Receipt, 
 BookOpen, 
 ChevronRight,
 Clock
} from "lucide-react";

const categories = [
 { id: "all", label: "All Insights", icon: BookOpen },
 { id: "banking", label: "Banking & KYC", icon: Landmark },
 { id: "legal", label: "Legal & Succession", icon: Scale },
 { id: "property", label: "Property", icon: Building2 },
 { id: "insurance", label: "Insurance", icon: Shield },
 { id: "tax", label: "Income Tax", icon: Receipt },
 { id: "readiness", label: "NRI Readiness", icon: ClipboardCheckIcon }
];

// Custom icon since ClipboardCheck isn't in my immediate mental import list but likely exists
function ClipboardCheckIcon(props: any) {
 return (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
 );
}

const articles = [
 {
  id: 1,
  category: "tax",
  title: "The NRI Guide to Property Capital Gains",
  desc: "Understanding TDS, Section 54 exemptions, and repatriation limits when selling Indian real estate. A technical breakdown for global sellers.",
  readTime: "12 min read",
  featured: true,
  image: "/attached_assets/image_1764305789793.png"
 },
 {
  id: 2,
  category: "legal",
  title: "Registering a Will from Abroad: A Remote Protocol",
  desc: "The definitive process for drafting, notarizing, and registering succession documents without traveling to India.",
  readTime: "8 min read",
  featured: false
 },
 {
  id: 3,
  category: "banking",
  title: "NRO vs NRE: Strategic Portfolio Allocation",
  desc: "How to optimize your Indian banking footprint for rental income, FD interest, and tax-efficient outward remittances.",
  readTime: "6 min read",
  featured: false
 },
 {
  id: 4,
  category: "property",
  title: "The Encroachment Shield: Deterrence Strategies",
  desc: "Actionable steps to deter unauthorized occupancy on vacant land and establish a clear legal presence on the ground.",
  readTime: "10 min read",
  featured: false
 },
 {
  id: 5,
  category: "readiness",
  title: "NRI Return-to-India Readiness Checklist",
  desc: "A comprehensive document audit for families planning a relocation or managing ancestral transition.",
  readTime: "15 min read",
  featured: false,
  downloadable: true
 },
 {
  id: 6,
  category: "insurance",
  title: "Navigating TPA Rejections in Medical Claims",
  desc: "Professional advocacy techniques to overturn technical denials in health insurance claims for aging parents.",
  readTime: "9 min read",
  featured: false
 }
];

export default function Resources() {
 const [activeCategory, setActiveCategory] = useState("all");

 const filteredArticles = activeCategory === "all" 
  ? articles 
  : articles.filter(a => a.category === activeCategory);

 const featuredArticle = articles.find(a => a.featured);

 return (
  <div className="bg-background min-h-screen">
   <PageHeader
    title="Knowledge Center"
    subtitle="Authoritative insights and operational guides for global Indian families."
    breadcrumbs={[{ label: "Insights" }]}
   />

   {/* ─── SEARCH & FILTER ─── */}
   <section className="py-12 bg-[#050806] border-b border-white/[0.05] sticky top-[72px] lg:top-[88px] z-40 backdrop-blur-xl bg-opacity-80">
    <div className="max-container flex flex-col lg:flex-row justify-between items-center gap-8">
     <div className="flex flex-wrap justify-center lg:justify-start gap-3">
      {categories.map((cat) => (
       <button
        key={cat.id}
        onClick={() => setActiveCategory(cat.id)}
        className={`px-5 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest transition-all flex items-center gap-2 border ${
         activeCategory === cat.id 
          ? "bg-accent border-accent text-[#0A0F0D] shadow-[0_0_20px_rgba(207,160,82,0.3)]" 
          : "bg-white/5 border-white/10 text-white/60 hover:border-accent/40 hover:text-white"
        }`}
       >
        <cat.icon className="w-3.5 h-3.5" />
        {cat.label}
       </button>
      ))}
     </div>
     <div className="relative w-full lg:w-72 group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-accent transition-colors" />
      <input 
       type="text" 
       placeholder="Search Knowledge Base..." 
       className="w-full bg-background/50 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-white/20"
      />
     </div>
    </div>
   </section>

   {/* ─── FEATURED SPOTLIGHT ─── */}
   {activeCategory === "all" && featuredArticle && (
    <section className="py-20 md:py-32 relative overflow-hidden">
     <div className="max-container relative z-10">
      <motion.div 
       initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}
       className="vault-surface rounded-[3.5rem] overflow-hidden border-white/10 shadow-3xl group"
      >
       <div className="grid lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 p-10 md:p-16 lg:p-24 relative z-10">
         <div className="flex items-center gap-4 mb-8">
          <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
           Featured Technical Insight
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{featuredArticle.readTime}</span>
         </div>
         <h2 className="display-title !text-4xl md:!text-5xl lg:!text-6xl mb-8 group-hover:text-accent transition-colors duration-500">
          {featuredArticle.title}
         </h2>
         <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
          {featuredArticle.desc}
         </p>
         <button className="btn-premium-primary !px-10 group/btn">
          <span>Read Full Brief</span>
          <ArrowRight className="w-4 h-4 inline-block ml-3 group-hover/btn:translate-x-1 transition-transform" />
         </button>
        </div>
        <div className="lg:col-span-5 h-full min-h-[400px] relative overflow-hidden order-first lg:order-last">
         <div className="absolute inset-0 bg-gradient-to-r from-[#080C0A] via-transparent to-transparent z-10 hidden lg:block" />
         <img 
          src={featuredArticle.image} 
          alt="Featured Insight" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
         />
        </div>
       </div>
      </motion.div>
     </div>
    </section>
   )}

   {/* ─── ARTICLE GRID ─── */}
   <section className="py-20 md:py-32 relative">
    <div className="max-container">
     <AnimatePresence mode="wait">
      <motion.div 
       key={activeCategory}
       initial="hidden" animate="visible" exit="hidden" variants={luxuryStagger}
       className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
       {filteredArticles.filter(a => !a.featured || activeCategory !== 'all').map((article) => (
        <motion.div 
         key={article.id} 
         variants={elegantFadeUp}
         className="group glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-accent/30 transition-all duration-500 bg-white/[0.01] hover:bg-[#0A0F0D] flex flex-col h-full shadow-lg"
        >
         <div className="flex justify-between items-start mb-10">
          <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-all shadow-inner">
           {article.downloadable ? <Download className="w-5 h-5 text-accent" /> : <FileText className="w-5 h-5 text-accent/60 group-hover:text-accent" />}
          </div>
          <span className="text-[10px] font-mono text-white/30 uppercase font-bold tracking-widest">{article.readTime}</span>
         </div>
         
         <div className="flex-1">
          <div className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.2em] font-bold mb-4">{article.category}</div>
          <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors leading-snug">
           {article.title}
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
           {article.desc}
          </p>
         </div>

         <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <button className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2">
           {article.downloadable ? "Access Checklist" : "Examine Brief"}
           <ChevronRight className="w-3 h-3 text-accent" />
          </button>
          {article.downloadable && (
           <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
          )}
         </div>
        </motion.div>
       ))}
      </motion.div>
     </AnimatePresence>
    </div>
   </section>

   {/* ─── READINESS TOOL / CHECKLIST ─── */}
   <section className="section-padding bg-[#050806] border-y border-white/[0.05] relative overflow-hidden">
    <div className="absolute inset-0 mesh-glow-emerald opacity-10 blur-[120px] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp}>
       <span className="accent-label">Operational Tool</span>
       <h2 className="section-title mb-8">NRI Compliance <br /><span className="text-gradient-gold italic">Ready-Check.</span></h2>
       <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
        Download our institutional-grade audit checklists to manually evaluate your current exposure across banking, legal, and property domains.
       </p>
       
       <div className="space-y-4">
        {[
         "Bank KYC & FEMA Compliance Map",
         "Succession Registry Audit",
         "Property Title Verification Flow",
         "NRI Income Tax Document List"
        ].map((item, i) => (
         <div key={i} className="flex items-center justify-between p-6 glass-panel rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group cursor-pointer">
          <div className="flex items-center gap-4">
           <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
           <span className="text-sm text-white/80 font-medium">{item}</span>
          </div>
          <Download className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
         </div>
        ))}
       </div>
      </motion.div>

      <div className="relative perspective-container hidden lg:block">
       <div className="w-full h-[500px] preserve-3d flex items-center justify-center">
        <div className="w-80 h-[450px] glass-panel rounded-2xl border-white/10 shadow-3xl bg-[#0A0F0D] p-10 transform rotate-y-12">
         <div className="flex items-center justify-between mb-12">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
           <ClipboardCheckIcon className="w-5 h-5 text-accent" />
          </div>
          <div className="text-[10px] font-mono text-white/20 uppercase font-bold">Confidential</div>
         </div>
         <div className="space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
           <div key={i} className="flex gap-4">
            <div className="w-5 h-5 rounded border border-accent/30 shrink-0 flex items-center justify-center">
             {i < 2 && <div className="w-2.5 h-2.5 bg-accent rounded-sm" />}
            </div>
            <div className={`h-2 rounded-full bg-white/5 ${i === 0 ? 'w-full' : i === 1 ? 'w-3/4' : 'w-2/3'}`} />
           </div>
          ))}
         </div>
         <div className="mt-20 pt-8 border-t border-white/5">
          <div className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest mb-2">Audit Progress</div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
           <div className="h-full w-2/5 bg-accent shadow-[0_0_10px_rgba(207,160,82,0.5)]" />
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ─── FINAL ADVISORY CTA ─── */}
   <section className="section-padding bg-background text-center relative overflow-hidden border-t border-white/[0.05]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(160_40%_15%_/_0.2)_0%,transparent_80%)] pointer-events-none" />
    
    <div className="max-container relative z-10">
     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={elegantFadeUp} className="max-w-4xl mx-auto">
      <span className="accent-label">The Stewardship Bridge</span>
      <h2 className="display-title mb-10">Turn Insights Into <br /><span className="text-gradient-gold italic">Active Protection.</span></h2>
      <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
       These articles define the strategy. Our private review session defines the execution. Apply these insights to your family's specific Indian asset unit.
      </p>
      <Link href="/contact">
       <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group">
        <span>Book Private Strategy Session</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
       </button>
      </Link>
     </motion.div>
    </div>
   </section>
  </div>
 );
}
