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
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    image: "/generated_images/Professional_man_headshot_testimonial_c0227483.png",
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
    <main className="min-h-screen">
      {/* SECTION 1: DARK HERO */}
      <div className="section-dark">
        <PageHeader
          title="NRI Guides"
          subtitle="Institutional-grade intelligence for the global Indian family unit."
          breadcrumbs={[{ label: "The Firm", href: "/why-nri-trust" }, { label: "Library" }]}
        />
      </div>

      {/* SECTION 2: DARK FILTERS (STICKY) */}
      <section className="py-12 bg-[#0A0F0D] border-b border-white/[0.05] sticky top-[72px] lg:top-[88px] z-40 backdrop-blur-xl bg-opacity-90">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-6 py-3 rounded-full text-[12px] font-mono font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 border shadow-sm",
                    activeCategory === cat.id 
                      ? "bg-accent border-accent text-black shadow-[0_0_30px_rgba(207,160,82,0.2)]" 
                      : "bg-white/[0.02] border-white/10 text-white/90 hover:border-accent/40 hover:text-white"
                  )}
                >
                  <cat.icon className={cn("w-3.5 h-3.5", activeCategory === cat.id ? "text-black" : "text-accent")} />
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/90 group-focus-within:text-accent transition-colors" />
              <input 
                type="text" 
                placeholder="Search the Library..." 
                className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-14 pr-8 text-sm text-white focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all placeholder:text-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT FEATURED EDITORIAL */}
      {featuredArticle && (
        <section className="section-padding section-light">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-container relative z-10">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={elegantFadeUp}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-0 rounded-[3.5rem] overflow-hidden border border-black/5 bg-white shadow-2xl">
                <div className="lg:col-span-7 p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-mono text-accent font-bold uppercase tracking-widest">
                      Featured Analysis
                    </span>
                    <div className="flex items-center gap-2 text-[#1A1A1A] text-[12px] font-mono uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-8 leading-[1.1] group-hover:text-accent transition-colors duration-700">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-xl text-[#1A1A1A]/90 font-light leading-relaxed mb-12 max-w-2xl">
                    {featuredArticle.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-10 border-t border-black/5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FDFCFB] border border-black/5 flex items-center justify-center shadow-inner">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-[12px] font-mono text-[#1A1A1A] uppercase tracking-widest">Expert Authority</div>
                        <div className="text-sm text-[#1A1A1A] font-medium">{featuredArticle.author}</div>
                      </div>
                    </div>
                    
                    <button className="btn-premium-outline !px-10 group/btn !border-black/10 !text-[#1A1A1A] hover:!bg-black/5">
                      <span>Examine Brief</span>
                      <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="lg:col-span-5 h-full min-h-[500px] relative overflow-hidden bg-[#FDFCFB]">
                  <img 
                    src={featuredArticle.image || "/hero-parents.png"} 
                    alt="Editorial visual" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* SECTION 4: DARK ARTICLE GRID */}
      <section className="section-padding section-dark border-y border-white/[0.05]">
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] w-12 bg-accent/40" />
            <h3 className="text-sm font-mono text-white/90 uppercase tracking-[0.4em] font-bold">
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {filteredArticles.filter(a => activeCategory !== 'all' || !a.featured).map((article) => (
                <motion.div 
                  key={article.id} 
                  variants={elegantFadeUp}
                  className="group flex flex-col h-full premium-card bg-white/[0.01] border border-white/[0.03] hover:border-accent/30 transition-all duration-500 overflow-hidden shadow-2xl"
                >
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="text-[12px] font-mono text-accent font-bold uppercase tracking-[0.2em]">
                        {article.categoryLabel}
                      </div>
                      <div className="text-[12px] font-mono text-white/90 uppercase tracking-widest">
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-serif text-[#FDFCFB] mb-6 leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h4>
                    
                    <p className="text-sm text-white/90 font-light leading-relaxed mb-10 flex-1 line-clamp-3">
                      {article.desc}
                    </p>
                    
                    <div className="pt-8 border-t border-white/[0.05] flex items-center justify-between">
                      <div className="text-[12px] font-mono text-white/90 uppercase tracking-widest italic font-medium">
                        By {article.author}
                      </div>
                      <Link href="/resources">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all shadow-inner">
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

      {/* SECTION 5: LIGHT NEWSLETTER */}
      <section className="section-padding section-light border-b border-black/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="accent-label text-accent">Stay Briefed</span>
            <h2 className="section-title text-[#1A1A1A] mb-8">Receive Institutional <br /><span className="text-gradient-gold italic">Intelligence.</span></h2>
            <p className="text-lg text-[#1A1A1A]/90 font-light mb-12">
              Monthly technical updates on Indian regulation changes impacting global families. 
              No marketing. Strictly operational briefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="flex-1 bg-white border border-black/10 rounded-full px-8 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-accent/40 shadow-sm transition-all"
              />
              <button className="btn-premium-primary whitespace-nowrap !h-14">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK FINAL CTA */}
      <section className="section-padding section-dark text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,160,82,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="display-title mb-10 text-[#FDFCFB]">
              Turn Intelligence Into <br />
              <span className="text-gradient-gold italic">Strategic Action.</span>
            </h2>
            <p className="text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              These guides outline the landscape. Our private review session secures your units. 
              Initiate your family's stewardship roadmap today.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] flex items-center justify-center gap-4 mx-auto group shadow-lg">
                <span>Book Private Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

