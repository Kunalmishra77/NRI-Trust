import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Shield, ChevronDown, Menu, X, Lock, Landmark, Scale, Home, Heart, FileText, Settings, Users, Trophy, Zap, HelpCircle } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
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
    title: "Banking & KYC",
    href: "/services/banking-kyc",
    description: "Digital transformation of your Indian banking and re-KYC compliance.",
    icon: Landmark
  },
  {
    title: "Legal & Succession",
    href: "/services/legal-succession",
    description: "Professional probate, inheritance management, and legal advisory.",
    icon: Scale
  },
  {
    title: "Property & Tenancy",
    href: "/services/property-tenancy",
    description: "Complete management of your real estate portfolio and disputes.",
    icon: Home
  },
  {
    title: "Insurance Management",
    href: "/services/insurance",
    description: "Optimizing health and life coverage for your parents in India.",
    icon: Heart
  },
  {
    title: "Tax & Compliance",
    href: "/services/income-tax",
    description: "Strategic tax planning and repatriation of Indian funds.",
    icon: FileText
  }
];

const company = [
  {
    title: "The Firm",
    href: "/about",
    description: "Learn about our mission to secure NRI legacies.",
    icon: Shield
  },
  {
    title: "Why NRI Trust",
    href: "/why-nri-trust",
    description: "Our dedicated fiduciary and executive stewardship model.",
    icon: Trophy
  },
  {
    title: "Our Process",
    href: "/how-it-works",
    description: "How we bridge the 10,000-mile gap with local presence.",
    icon: Zap
  }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={TRANSITION}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:scale-110">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-sans font-black tracking-tight transition-colors duration-500 ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>NRI TRUST</span>
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-accent font-bold mt-0.5">Global Advisory</span>
          </div>
        </Link>

        {/* Desktop Nav with Mega Menu */}
        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[15px] font-black transition-colors uppercase tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white hover:text-white"
                  )}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[15px] font-black tracking-[0.12em]",
                  isScrolled 
                    ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent" 
                    : "text-white hover:text-white data-[state=open]:text-white"
                )}>
                  The Firm
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-white border-none shadow-2xl rounded-2xl">
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
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent transition-colors uppercase text-[15px] font-black tracking-[0.12em]",
                  isScrolled 
                    ? "text-[#1A1A1A] hover:text-accent data-[state=open]:text-accent" 
                    : "text-white hover:text-white data-[state=open]:text-white"
                )}>
                  Practice Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[700px] bg-white border-none shadow-2xl rounded-2xl">
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
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[14px] font-bold transition-colors uppercase tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/80 hover:text-white"
                  )}>
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[14px] font-bold transition-colors uppercase tracking-[0.12em]",
                    isScrolled ? "text-[#1A1A1A] hover:text-accent" : "text-white/80 hover:text-white"
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
            <button className={`hidden xl:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors font-bold ${isScrolled ? "text-[#1A1A1A]/60 hover:text-accent" : "text-white/60 hover:text-accent"}`}>
              <Lock className="w-4.5 h-4.5" />
              Client Portal
            </button>
          </Link>
          <Link href="/contact" className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-white px-9 py-4 rounded-full text-[13px] font-black uppercase tracking-widest shadow-xl"
            >
              Initiate Review
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
              <div className="flex flex-col h-full pt-12">
                <div className="px-8 mb-12">
                  <SheetTitle className="text-left text-2xl font-black tracking-tight text-[#1A1A1A] mb-2 uppercase">NRI TRUST</SheetTitle>
                  <div className="h-px w-12 bg-accent/40" />
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-12">
                  <div className="space-y-10">
                    <div>
                      <Link href="/" onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()}>
                        <span className="text-3xl font-black uppercase tracking-widest text-[#1A1A1A] hover:text-accent transition-colors">Home</span>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Practice Areas</h4>
                      <div className="grid gap-6">
                        {services.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()}
                            className="flex items-center gap-4 group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A]/5 flex items-center justify-center border border-[#1A1A1A]/5 group-hover:border-accent/30 transition-all">
                              <item.icon className="w-5 h-5 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                            </div>
                            <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-accent transition-colors">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">The Firm</h4>
                      <div className="grid gap-6">
                        {company.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()}
                            className="flex items-center gap-4 group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A]/5 flex items-center justify-center border border-[#1A1A1A]/5 group-hover:border-accent/30 transition-all">
                              <item.icon className="w-5 h-5 text-[#1A1A1A]/40 group-hover:text-accent transition-colors" />
                            </div>
                            <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-accent transition-colors">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-black/5">
                      <Link href="/pricing" onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()} className="block text-xl font-bold text-[#1A1A1A] hover:text-accent uppercase tracking-widest transition-colors">Pricing</Link>
                      <Link href="/contact" onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()} className="block text-xl font-bold text-[#1A1A1A] hover:text-accent uppercase tracking-widest transition-colors">Contact</Link>
                      <Link href="/portal" onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()} className="flex items-center gap-2 text-xl font-bold text-accent uppercase tracking-widest transition-colors">
                        <Lock className="w-5 h-5" />
                        Portal
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#1A1A1A]/5">
                  <Link href="/contact" onClick={() => (document.querySelector('[data-radix-collection-item]') as any)?.click()}>
                    <button className="w-full bg-[#d4af37] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl">
                      Initiate Audit
                    </button>
                  </Link>
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

