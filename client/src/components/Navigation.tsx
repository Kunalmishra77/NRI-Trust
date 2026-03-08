import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Lock, Shield, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = {
    firm: [
      { label: "Our Story", href: "/about" },
      { label: "Why Choose Us", href: "/why-nri-trust" },
      { label: "Success Stories", href: "/success-stories" },
    ],
    operations: [
      { label: "Our Process", href: "/how-it-works" },
      { label: "Pricing & Plans", href: "/pricing" },
      { label: "Emergency Support", href: "/emergency-response" },
    ],
    insights: [
      { label: "Helpful Guides", href: "/resources" }
    ]
  };

  const navLinks = [
    { id: "firm", label: "About Us", items: menuItems.firm },
    { id: "practice", label: "Our Services", items: services.map(s => ({ label: s.title, href: `/services/${s.slug}`, icon: s.icon })) },
    { id: "operations", label: "How It Works", items: menuItems.operations },
    { id: "insights", label: "Helpful Guides", items: menuItems.insights },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#050806]/95 backdrop-blur-xl py-4 border-b border-white/[0.05]"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-container flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-4 group z-50 shrink-0">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-accent to-[#8a652a] flex items-center justify-center border border-accent/20 group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-[0_0_30px_rgba(207,160,82,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent)]" />
            <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-[#0A0F0D] relative z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg lg:text-2xl font-serif font-medium tracking-tight text-white group-hover:text-accent transition-colors">NRI TRUST</span>
            <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.3em] uppercase text-accent/60 mt-1 font-bold">Parental Care</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-12">
          {navLinks.map((nav) => (
            <div 
              key={nav.id}
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown(nav.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`font-mono text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 transition-colors ${
                activeDropdown === nav.id || location.includes(nav.id) ? "text-accent" : "text-white/70 hover:text-white"
              }`}>
                {nav.label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === nav.id ? "rotate-180 text-accent" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === nav.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 min-w-[240px]"
                  >
                    <div className="glass-panel p-2 rounded-2xl border-white/10 shadow-3xl overflow-hidden relative bg-[#0A0F0D]">
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                      <div className="grid gap-0.5 relative z-10">
                        {nav.items.map((item, idx) => (
                          <Link key={idx} href={item.href}>
                            <div className="px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all group/link flex gap-3 items-center cursor-pointer border border-transparent hover:border-white/[0.05]">
                              {item.icon && (
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/link:bg-accent/10 transition-all">
                                  {/* @ts-ignore */}
                                  <item.icon className="w-4 h-4 text-white/40 group-hover/link:text-accent" />
                                </div>
                              )}
                              <span className="text-sm text-white/80 group-hover/link:text-white font-medium whitespace-nowrap">
                                {item.label}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      {nav.id === "practice" && (
                        <div className="mt-2 pt-2 border-t border-white/[0.05]">
                          <Link href="/services">
                            <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-accent/[0.02] hover:bg-accent/[0.05] transition-colors cursor-pointer group/all">
                              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent/80">View All Services</span>
                              <ArrowRight className="w-3 h-3 text-accent/60 group-hover:all:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 xl:gap-6 z-50">
          <button className="hidden xl:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-accent transition-colors">
            <Lock className="w-3 h-3" />
            Portal
          </button>
          
          <Link href="/contact" className="hidden sm:block">
            <button className="btn-premium-primary !px-6 !py-3 !text-[10px] !rounded-xl lg:!px-8 lg:!py-3.5">
              Book Review
            </button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/5 h-10 w-10 lg:h-12 lg:w-12 rounded-2xl">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#050806] border-l border-white/5 w-full sm:w-[400px] p-0 flex flex-col">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              
              <div className="p-8 border-b border-white/5 flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,160,82,0.1)_0%,transparent_70%)] pointer-events-none" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#0A0F0D]" />
                  </div>
                  <span className="text-xl font-serif text-white">NRI TRUST</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="h-10 w-10 relative z-10 text-white hover:bg-white/10">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {navLinks.map((nav) => (
                  <div key={nav.id} className="space-y-4">
                    <div className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold border-b border-white/5 pb-2">
                      {nav.label}
                    </div>
                    <div className="grid gap-2 pl-2">
                      {nav.items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-start gap-4 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="text-white/90 font-medium text-sm">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 border-t border-white/5 bg-[#0A0F0D]">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn-premium-primary w-full h-14 rounded-xl flex items-center justify-center gap-3">
                    Book Review Session
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}