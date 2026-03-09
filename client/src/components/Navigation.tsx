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
   { label: "Why NRI Trust", href: "/why-nri-trust" },
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
     ? "bg-[#050814]/90 backdrop-blur-xl py-4 border-b border-white/[0.05] shadow-lg"
     : "bg-transparent py-8"
   }`}
  >
   <div className="max-container flex items-center justify-between">
    {/* Brand */}
    <Link href="/" className="flex items-center gap-4 group z-50 shrink-0">
     <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-105 transition-all duration-500 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent)]" />
      <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-[#050814] relative z-10" />
     </div>
     <div className="flex flex-col leading-none">
      <span className="text-xl lg:text-2xl font-serif font-medium tracking-tight text-[#F5F3EC] group-hover:text-[#D4AF37] transition-colors">NRI TRUST</span>
      <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]/80 mt-1 font-bold">Private Advisory</span>
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
       <button className={`font-sans text-[16px] xl:text-[18px] font-medium flex items-center gap-2 transition-all duration-300 ${
        activeDropdown === nav.id || location.includes(nav.id) ? "text-[#D4AF37]" : "text-[#F5F3EC]/80 hover:text-[#F5F3EC]"
       }`}>
        {nav.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeDropdown === nav.id ? "rotate-180 text-[#D4AF37]" : ""}`} />
       </button>
       
       <AnimatePresence>
        {activeDropdown === nav.id && (
         <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 pt-4 min-w-[280px]"
         >
          <div className="premium-card p-2 rounded-2xl overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#0B101E]/95">
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
           <div className="grid gap-1 relative z-10 p-1">
            {nav.items.map((item, idx) => (
             <Link key={idx} href={item.href}>
              <div className="px-5 py-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-300 group/link flex gap-4 items-center cursor-pointer">
               {item.icon && (
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover/link:bg-[#D4AF37]/10 group-hover/link:border-[#D4AF37]/20 transition-all">
                 {/* @ts-ignore */}
                 <item.icon className="w-5 h-5 text-[#F5F3EC]/40 group-hover/link:text-[#D4AF37]" />
                </div>
               )}
               <span className="text-[15px] text-[#F5F3EC]/80 group-hover/link:text-[#D4AF37] font-medium whitespace-nowrap transition-colors">
                {item.label}
               </span>
              </div>
             </Link>
            ))}
           </div>
           {nav.id === "practice" && (
            <div className="mt-2 pt-3 border-t border-white/[0.05] px-2 pb-1">
             <Link href="/services">
              <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/10 transition-colors cursor-pointer group/all">
               <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">Examine All Practices</span>
               <ArrowRight className="w-4 h-4 text-[#D4AF37]/60 group-hover:all:translate-x-1 transition-transform" />
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
    <div className="flex items-center gap-6 xl:gap-8 z-50">
     <Link href="/portal">
      <button className="hidden xl:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F5F3EC]/50 hover:text-[#D4AF37] transition-colors cursor-pointer">
       <Lock className="w-3.5 h-3.5" />
       Client Portal
      </button>
     </Link>
     
     <Link href="/contact" className="hidden sm:block">
      <button className="btn-premium-primary !px-7 !py-3.5 !text-[11px]">
       Initiate Review
      </button>
     </Link>

     {/* Mobile Menu */}
     <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild className="lg:hidden">
       <Button variant="ghost" size="icon" className="text-[#F5F3EC] hover:bg-white/5 h-12 w-12 rounded-2xl">
        <Menu className="h-6 w-6" />
       </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#050814] border-l border-white/[0.05] w-full sm:w-[400px] p-0 flex flex-col shadow-2xl">
       <SheetTitle className="sr-only">Menu</SheetTitle>
       
       <div className="p-8 border-b border-white/[0.05] flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="flex items-center gap-4 relative z-10">
         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center">
          <Shield className="w-5 h-5 text-[#050814]" />
         </div>
         <span className="text-xl font-serif text-[#F5F3EC]">NRI TRUST</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="h-10 w-10 relative z-10 text-white hover:bg-white/10 rounded-xl">
         <X className="h-5 w-5" />
        </Button>
       </div>
       
       <div className="flex-1 overflow-y-auto p-8 space-y-10">
        <Link href="/portal" onClick={() => setIsMobileMenuOpen(false)}>
         <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10 mb-6">
          <Lock className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Access Client Portal</span>
         </div>
        </Link>
        {navLinks.map((nav) => (
         <div key={nav.id} className="space-y-5">
          <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-3">
           {nav.label}
          </div>
          <div className="grid gap-1">
           {nav.items.map((item, idx) => (
            <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-start gap-4 py-3 px-4 rounded-xl hover:bg-white/[0.03] transition-colors">
             <div className="text-[#F5F3EC]/90 font-medium text-[16px]">{item.label}</div>
            </Link>
           ))}
          </div>
         </div>
        ))}
       </div>
       
       <div className="p-8 border-t border-white/[0.05] bg-[#0A0F1A]">
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
         <button className="btn-premium-primary w-full h-14 rounded-xl flex items-center justify-center gap-3">
          Initiate Review
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
