import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Menu, X, Lock, Landmark, Scale, Home, Heart, FileText, Trophy, Zap, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const TRANSITION = { duration: 0.8, ease: "easeInOut" };
const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  { title: "Insurance Check", href: "/services/insurance", description: "Check if your parents' health and life insurance is enough.", icon: Heart },
  { title: "Bank Account Setup", href: "/services/banking-kyc", description: "Find scattered accounts and organize them in one place.", icon: Landmark },
  { title: "Property Documents", href: "/services/property-tenancy", description: "Make sure all property papers are updated and accessible.", icon: Home },
  { title: "Succession & Nominees", href: "/services/legal-succession", description: "Set up correct nominees and plan for smooth legal transfer.", icon: Scale },
  { title: "Emergency Access", href: "/services/emergency-access", description: "Prepare a clear plan so your family knows what to do in a crisis.", icon: FileText },
];

const company = [
  { title: "About Us", href: "/about", description: "How we help NRIs protect their parents' financial life in India.", icon: Shield },
  { title: "Why NRI Trust", href: "/why-nri-trust", description: "One structured system for insurance, accounts, documents and emergencies.", icon: Trophy },
  { title: "How It Works", href: "/how-it-works", description: "Simple steps to secure your parents' complete financial life.", icon: Zap },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { scrollY } = useScroll();

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const go = (href: string) => {
    setMobileOpen(false);
    setLocation(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={TRANSITION}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "py-3 md:py-4 bg-white border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "py-4 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:scale-110">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col leading-none gap-[6px]">
              <span className={`text-[22px] sm:text-[26px] font-sans font-black tracking-tight leading-none transition-colors duration-500 ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>
                NRI TRUST
              </span>
              <div className="h-[3px] w-full bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[16px] font-semibold transition-colors uppercase tracking-[0.12em]",
                      isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/90 hover:text-white"
                    )}>Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[16px] font-semibold tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent" : "text-white/90 hover:text-white data-[state=open]:text-white"
                  )}>The Firm</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[min(95vw,400px)] gap-3 p-6 md:w-[500px] lg:w-[600px] bg-white border-none shadow-2xl rounded-2xl">
                      {company.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}
                          onClick={(e) => { e.preventDefault(); setLocation(item.href); }}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[16px] font-semibold tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent" : "text-white/90 hover:text-white data-[state=open]:text-white"
                  )}>Practice Areas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[min(95vw,400px)] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[700px] bg-white border-none shadow-2xl rounded-2xl">
                      {services.map((service) => (
                        <ListItem key={service.title} title={service.title} href={service.href} icon={service.icon}
                          onClick={(e) => { e.preventDefault(); setLocation(service.href); }}>
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/pricing" className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[16px] font-semibold transition-colors uppercase tracking-[0.12em]",
                      isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/90 hover:text-white"
                    )}>Pricing</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[16px] font-semibold transition-colors uppercase tracking-[0.12em]",
                      isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/90 hover:text-white"
                    )}>Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop actions */}
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/portal">
              <button className={`hidden lg:flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors font-bold ${isScrolled ? "text-[#1A1A1A]/60 hover:text-accent" : "text-white/60 hover:text-accent"}`}>
                <Lock className="w-4 h-4" />
                Client Portal
              </button>
            </Link>
            <Link href="/contact" className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212,175,55,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white px-8 py-4 rounded-full text-[15px] font-black uppercase tracking-wider whitespace-nowrap shadow-xl"
              >
                Free Consultation
              </motion.button>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                isScrolled ? "text-[#1A1A1A] hover:bg-black/5" : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer (custom, no Radix Sheet) ─────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[120] w-[88vw] sm:w-[380px] bg-[#FAFAF8] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.06]">
                <div>
                  <div className="font-black text-xl tracking-tight text-[#1A1A1A] uppercase">NRI TRUST</div>
                  <div className="h-[2.5px] w-10 bg-gradient-to-r from-accent to-accent/30 rounded-full mt-1.5" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#1A1A1A]/6 flex items-center justify-center hover:bg-[#1A1A1A]/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-[#1A1A1A]" />
                </button>
              </div>

              {/* Scrollable links */}
              <div className="flex-1 overflow-y-auto px-5 py-5">

                {/* Home */}
                <button
                  onClick={() => go("/")}
                  className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-[#1A1A1A]/4 transition-colors group mb-2"
                >
                  <span className="text-[15px] font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-accent transition-colors">Home</span>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/20 group-hover:text-accent transition-colors" />
                </button>

                {/* Practice Areas */}
                <div className="mb-2 mt-4 px-4">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.35em] text-accent">Practice Areas</span>
                </div>
                <div className="space-y-0.5">
                  {services.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => go(item.href)}
                      className="w-full flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-[#1A1A1A]/4 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1A1A1A]/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                        <item.icon className="w-4 h-4 text-[#1A1A1A]/35 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[14px] font-bold text-[#1A1A1A] group-hover:text-accent transition-colors text-left">{item.title}</span>
                    </button>
                  ))}
                </div>

                {/* The Firm */}
                <div className="mb-2 mt-5 px-4">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.35em] text-accent">The Firm</span>
                </div>
                <div className="space-y-0.5">
                  {company.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => go(item.href)}
                      className="w-full flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-[#1A1A1A]/4 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1A1A1A]/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                        <item.icon className="w-4 h-4 text-[#1A1A1A]/35 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[14px] font-bold text-[#1A1A1A] group-hover:text-accent transition-colors text-left">{item.title}</span>
                    </button>
                  ))}
                </div>

                {/* Quick links */}
                <div className="mt-4 pt-4 border-t border-black/[0.06] space-y-0.5">
                  {[
                    { label: "Pricing", href: "/pricing" },
                    { label: "Contact", href: "/contact" },
                  ].map((l) => (
                    <button
                      key={l.href}
                      onClick={() => go(l.href)}
                      className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-[#1A1A1A]/4 transition-colors group"
                    >
                      <span className="text-[14px] font-bold text-[#1A1A1A] uppercase tracking-widest group-hover:text-accent transition-colors">{l.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]/20 group-hover:text-accent transition-colors" />
                    </button>
                  ))}
                  <button
                    onClick={() => go("/portal")}
                    className="w-full flex items-center gap-2 py-3.5 px-4 rounded-xl hover:bg-accent/5 transition-colors group"
                  >
                    <Lock className="w-4 h-4 text-accent" />
                    <span className="text-[14px] font-bold text-accent uppercase tracking-widest">Client Portal</span>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="p-5 border-t border-black/[0.06]">
                <button
                  onClick={() => go("/contact")}
                  className="w-full bg-accent text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-lg active:scale-[0.98] transition-transform"
                >
                  Get Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { icon?: any; title: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => (
  <li>
    <NavigationMenuLink
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent/5 hover:text-accent focus:bg-accent/5 focus:text-accent group",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />}
        <div className="text-[15px] font-bold leading-none tracking-tight">{title}</div>
      </div>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-black/40 mt-2 font-medium">{children}</p>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
