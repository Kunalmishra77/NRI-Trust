import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Shield, ChevronDown, Menu, X, Lock, Landmark, Scale, Home, Heart, FileText, Settings, Users, Trophy, Zap, HelpCircle } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Consistent Animation Constants
const TRANSITION = { duration: 0.8, ease: "easeInOut" };

const services = [
  {
    title: "Insurance Check",
    href: "/services/insurance",
    description: "Check if your parents' health and life insurance is enough.",
    icon: Heart
  },
  {
    title: "Bank Account Setup",
    href: "/services/banking-kyc",
    description: "Find scattered accounts and organize them in one place.",
    icon: Landmark
  },
  {
    title: "Property Documents",
    href: "/services/property-tenancy",
    description: "Make sure all property papers are updated and accessible.",
    icon: Home
  },
  {
    title: "Succession & Nominees",
    href: "/services/legal-succession",
    description: "Set up correct nominees and plan for smooth legal transfer.",
    icon: Scale
  },
  {
    title: "Emergency Access",
    href: "/services/income-tax",
    description: "Prepare a clear plan so your family knows what to do in a crisis.",
    icon: FileText
  }
];

const company = [
  {
    title: "About Us",
    href: "/about",
    description: "How we help NRIs protect their parents' financial life in India.",
    icon: Shield
  },
  {
    title: "Why NRI Trust",
    href: "/why-nri-trust",
    description: "One structured system for insurance, accounts, documents and emergencies.",
    icon: Trophy
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    description: "Simple steps to secure your parents' complete financial life.",
    icon: Zap
  }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  const handleMobileNav = (href: string) => {
    sheetCloseRef.current?.click();
    setLocation(href);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
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
            {/* RESPONSIVE-ONLY: text-[22px] on tiny screens, [26px] from sm+ */}
            <span className={`text-[22px] sm:text-[26px] font-sans font-black tracking-tight leading-none transition-colors duration-500 ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>NRI TRUST</span>
            <div className="h-[3px] w-full bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full" />
          </div>
        </Link>

        {/* Desktop Nav with Mega Menu */}
        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[16px] font-semibold transition-colors uppercase tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/90 hover:text-white"
                  )}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[16px] font-semibold tracking-[0.12em]",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent"
                    : "text-white/90 hover:text-white data-[state=open]:text-white"
                )}>
                  The Firm
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[min(95vw,400px)] gap-3 p-6 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-white border-none shadow-2xl rounded-2xl">
                    {company.map((item) => (
                      <ListItem 
                        key={item.title} 
                        title={item.title} 
                        href={item.href} 
                        icon={item.icon}
                        onClick={(e) => {
                          e.preventDefault();
                          setLocation(item.href);
                        }}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[16px] font-semibold tracking-[0.12em]",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent"
                    : "text-white/90 hover:text-white data-[state=open]:text-white"
                )}>
                  Practice Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[min(95vw,400px)] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[700px] bg-white border-none shadow-2xl rounded-2xl">
                    {services.map((service) => (
                      <ListItem 
                        key={service.title} 
                        title={service.title} 
                        href={service.href} 
                        icon={service.icon}
                        onClick={(e) => {
                          e.preventDefault();
                          setLocation(service.href);
                        }}
                      >
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
                  )}>
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[16px] font-semibold transition-colors uppercase tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/90 hover:text-white"
                  )}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Actions */}
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

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden rounded-xl",
                  isScrolled ? "text-[#1A1A1A]" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#FDFCFB] border-none p-0 w-full sm:w-[400px]">
              {/* Hidden close button — clicked imperatively by handleMobileNav */}
              <SheetClose ref={sheetCloseRef} className="sr-only" />

              <div className="flex flex-col h-full pt-8">
                <div className="px-6 mb-6">
                  <SheetTitle className="text-left text-xl font-black tracking-tight text-[#1A1A1A] mb-2 uppercase">NRI TRUST</SheetTitle>
                  <div className="h-px w-12 bg-accent/40" />
                </div>

                <div className="flex-1 overflow-y-auto px-6 pb-6">
                  <div className="space-y-6">
                    <div>
                      <button onClick={() => handleMobileNav("/")} className="text-xl font-black uppercase tracking-widest text-[#1A1A1A] hover:text-accent transition-colors text-left">
                        Home
                      </button>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4">Practice Areas</h4>
                      <div className="grid gap-4">
                        {services.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleMobileNav(item.href)}
                            className="flex items-center gap-3 group text-left"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#1A1A1A]/5 flex items-center justify-center border border-[#1A1A1A]/5 group-hover:border-accent/30 transition-all shrink-0">
                              <item.icon className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                            </div>
                            <span className="text-base font-bold text-[#1A1A1A] group-hover:text-accent transition-colors">{item.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4">The Firm</h4>
                      <div className="grid gap-4">
                        {company.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleMobileNav(item.href)}
                            className="flex items-center gap-3 group text-left"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#1A1A1A]/5 flex items-center justify-center border border-[#1A1A1A]/5 group-hover:border-accent/30 transition-all shrink-0">
                              <item.icon className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                            </div>
                            <span className="text-base font-bold text-[#1A1A1A] group-hover:text-accent transition-colors">{item.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-black/5">
                      <button onClick={() => handleMobileNav("/pricing")} className="block text-base font-bold text-[#1A1A1A] hover:text-accent uppercase tracking-widest transition-colors text-left">Pricing</button>
                      <button onClick={() => handleMobileNav("/contact")} className="block text-base font-bold text-[#1A1A1A] hover:text-accent uppercase tracking-widest transition-colors text-left">Contact</button>
                      <button onClick={() => handleMobileNav("/portal")} className="flex items-center gap-2 text-base font-bold text-accent uppercase tracking-widest transition-colors">
                        <Lock className="w-4 h-4" />
                        Portal
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#1A1A1A]/5">
                  <button
                    onClick={() => handleMobileNav("/contact")}
                    className="w-full bg-[#d4af37] text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl"
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { icon?: any; title: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
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
        <p className="line-clamp-2 text-[13px] leading-relaxed text-black/40 mt-2 font-medium">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

