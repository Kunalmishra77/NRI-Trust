import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/layouts/PageHeader";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { Link } from "wouter";
import { 
  ArrowRight, 
  FileText, 
  Search, 
  Landmark, 
  Scale, 
  Building2, 
  Shield, 
  Receipt, 
  BookOpen, 
  ChevronRight,
  Clock,
  TrendingUp,
  Gavel,
  ShieldCheck,
  Zap
} from "lucide-react";

const categories = [
  { id: "all", label: "All Briefs", icon: BookOpen },
  { id: "tax", label: "Tax", icon: Receipt },
  { id: "property", label: "Property", icon: Building2 },
  { id: "legal", label: "Legal", icon: Scale },
  { id: "banking", label: "Banking", icon: Landmark },
  { id: "insurance", label: "Insurance", icon: Shield }
];

const articles = [
  {
    id: 1,
    category: "tax",
    categoryLabel: "Taxation",
    title: "The NRI Guide to Property Capital Gains",
    desc: "Understanding TDS, Section 54 exemptions, and repatriation limits when selling Indian real estate. A technical breakdown for global sellers looking to optimize their tax footprint.",
    readTime: "12 min read",
    featured: true,
    image: "/generated_images/Professional_man_headshot_testimonial_c0227483.png", // Reusing for editorial feel
    author: "Senior Tax Counsel"
  },
  {
    id: 2,
    category: "legal",
    categoryLabel: "Succession",
    title: "Registering a Will from Abroad: A Remote Protocol",
    desc: "The definitive process for drafting, notarizing, and registering succession documents without traveling to India.",
    readTime: "8 min read",
    featured: false,
    author: "Estate Lead"
  },
  {
    id: 3,
    category: "banking",
    categoryLabel: "Compliance",
    title: "NRO vs NRE: Strategic Portfolio Allocation",
    desc: "How to optimize your Indian banking footprint for rental income, FD interest, and tax-efficient outward remittances.",
    readTime: "6 min read",
    featured: false,
    author: "Banking Director"
  },
  {
    id: 4,
    category: "property",
    categoryLabel: "Asset Protection",
    title: "The Encroachment Shield: Deterrence Strategies",
    desc: "Actionable steps to deter unauthorized occupancy on vacant land and establish a clear legal presence on the ground.",
    readTime: "10 min read",
    featured: false,
    author: "Field Operations"
  },
  {
    id: 5,
    category: "tax",
    categoryLabel: "Compliance",
    title: "Handling 143(1) Notices for Foreign Income",
    desc: "A step-by-step resolution guide for NRIs receiving automated scrutiny notices regarding global assets.",
    readTime: "15 min read",
    featured: false,
    author: "Taxation Unit"
  },
  {
    id: 6,
    category: "insurance",
    categoryLabel: "Advocacy",
    title: "Navigating TPA Rejections in Medical Claims",
    desc: "Professional advocacy techniques to overturn technical denials in health insurance claims for aging parents.",
    readTime: "9 min read",
    featured: false,
    author: "Claims Advocate"
  }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles.find(a => a.featured && (activeCategory === 'all' || a.category === activeCategory)) || filteredArticles[0];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="NRI Guides"
        subtitle="Institutional-grade intelligence for the global Indian family unit."
        breadcrumbs={[{ label: "The Firm", href: "/why-nri-trust" }, { label: "Library" }]}
      />

      {/* ─── ELEGANT FILTERS ─── */}
      <section className="py-12 bg-[#0A0F0D] border-b border-white/[0.05] sticky top-[72px] lg:top-[88px] z-40 backdrop-blur-xl bg-opacity-90">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-[11px] font-mono font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 border ${
                    activeCategory === cat.id 
                      ? "bg-accent border-accent text-black shadow-[0_0_30px_rgba(207,160,82,0.2)]" 
                      : "bg-white/[0.02] border-white/5 text-white/40 hover:border-accent/40 hover:text-white"
                  }`}
                >
                  <cat.icon className={`w-3.5 h-3.5 ${activeCategory === cat.id ? "text-black" : "text-accent/60"}`} />
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-accent transition-colors" />
              <input 
                type="text" 
                placeholder="Search the Library..." 
                className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-14 pr-8 text-sm text-white focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all placeholder:text-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED EDITORIAL ─── */}
      {featuredArticle && (
        <section className="section-padding relative overflow-hidden bg-background">
          <div className="max-container relative z-10">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={elegantFadeUp}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden border border-white/5 bg-[#050806] shadow-3xl">
                <div className="lg:col-span-7 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                      Featured Analysis
                    </span>
                    <div className="flex items-center gap-2 text-white/30 text-[10px] font-mono uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.1] group-hover:text-accent transition-colors duration-700">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl">
                    {featuredArticle.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Expert Authority</div>
                        <div className="text-sm text-white font-medium">{featuredArticle.author}</div>
                      </div>
                    </div>
                    
                    <button className="btn-premium-outline !px-10 group/btn">
                      <span>Examine Brief</span>
                      <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="lg:col-span-5 h-full min-h-[500px] relative overflow-hidden bg-[#0A0F0D]">
                  <img 
                    src={featuredArticle.image || "/hero-parents.png"} 
                    alt="Editorial visual" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 scale-105 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050806] via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── ARTICLE GRID ─── */}
      <section className="pb-32 pt-10 relative">
        <div className="max-container">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-accent/40" />
            <h3 className="text-sm font-mono text-white/40 uppercase tracking-[0.4em] font-bold">
              The {activeCategory === 'all' ? 'Complete' : activeCategory} Library
            </h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial="hidden" 
              animate="visible" 
              exit="hidden" 
              variants={luxuryStagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.filter(a => activeCategory !== 'all' || !a.featured).map((article) => (
                <motion.div 
                  key={article.id} 
                  variants={elegantFadeUp}
                  className="group flex flex-col h-full bg-[#050806] rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-[0.2em]">
                        {article.categoryLabel}
                      </div>
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-serif text-white mb-6 leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-10 flex-1 line-clamp-3">
                      {article.desc}
                    </p>
                    
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest italic">
                        By {article.author}
                      </div>
                      <Link href="/resources">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── NEWSLETTER / SUBSCRIPTION ─── */}
      <section className="section-padding bg-[#0A0F0D] border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.03)_0%,transparent_70%)]" />
        <div className="max-container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="accent-label">Stay Briefed</span>
            <h2 className="section-title mb-8">Receive Institutional <br /><span className="text-gradient-gold italic">Intelligence.</span></h2>
            <p className="body-large text-muted-foreground mb-12">
              Monthly technical updates on Indian regulation changes impacting global families. 
              No marketing. Strictly operational briefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="flex-1 bg-black border border-white/10 rounded-full px-8 py-4 text-sm text-white focus:outline-none focus:border-accent/40 transition-all"
              />
              <button className="btn-premium-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-padding bg-background text-center">
        <div className="max-container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="display-title mb-10">
              Turn Intelligence Into <br />
              <span className="text-gradient-gold italic">Strategic Action.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-16 leading-relaxed">
              These guides outline the landscape. Our private review session secures your units. 
              Initiate your family's stewardship roadmap today.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group h-16">
                <span>Book Private Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
