import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { services } from "@/data/services";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const isHome = location === "/";
  const showTransparent = isHome && !isScrolled;

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent
          ? "bg-transparent py-4"
          : "glass-dark py-2 shadow-lg shadow-black/10"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20" role="navigation" aria-label="Main navigation">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none group"
            aria-label="NRI Trust - Go to homepage"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 border-2 border-amber-500/30 bg-gradient-to-br from-primary to-[hsl(180_50%_12%)]">
              <span className="text-white font-serif font-bold text-lg">NT</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-serif font-bold text-white transition-colors">
                NRI TRUST
              </span>
              <span className="text-[10px] hidden sm:block font-mono tracking-[0.25em] uppercase transition-colors text-white/50">
                Your Parents. Your Assets.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`text-sm font-sans tracking-wide uppercase font-medium transition-colors hover:text-amber-400 relative group flex items-center gap-1 text-white/80 ${
                  location.startsWith("/services") ? "text-amber-400" : ""
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ${location.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="glass-dark rounded-xl shadow-xl p-2 min-w-[260px]">
                    <Link
                      href="/services"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-amber-400 hover:bg-white/5 transition-colors"
                    >
                      All Services
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors ${
                          location === `/services/${service.slug}` ? "bg-white/5 text-amber-400 font-medium" : ""
                        }`}
                      >
                        <service.icon className="w-4 h-4 text-white/40" />
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-sans tracking-wide uppercase font-medium transition-colors hover:text-amber-400 relative group text-white/80 ${
                  location === item.href ? "text-amber-400" : ""
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ${location === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 text-sm font-bold transition-colors text-white/80 hover:text-amber-400"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>

            <Link href="/contact">
              <Button
                className={`hidden sm:inline-flex transition-all duration-300 hover:-translate-y-0.5 ${
                  showTransparent
                    ? "bg-transparent border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 backdrop-blur-sm"
                    : "bg-gradient-to-r from-accent to-amber-500 text-white shadow-lg hover:shadow-amber-500/30"
                }`}
              >
                Book Free Review Session
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l-white/5">
                <div className="flex flex-col h-full bg-gradient-to-b from-[hsl(180,50%,10%)] to-[hsl(180,50%,6%)]">
                  <div className="flex items-center gap-3 p-6 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md border-2 border-amber-500/30 bg-gradient-to-br from-primary to-[hsl(180_50%_12%)]">
                      <span className="text-white font-serif font-bold">NT</span>
                    </div>
                    <div>
                      <span className="text-xl font-serif font-bold text-white block leading-none mb-1">NRI TRUST</span>
                      <span className="text-[10px] text-white/40 font-mono uppercase tracking-[0.25em] block leading-none">Your Parents. Your Assets.</span>
                    </div>
                  </div>

                  <nav className="flex flex-col p-4 gap-1 overflow-y-auto" aria-label="Mobile navigation">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between py-4 px-4 text-lg font-medium text-white/70 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-200"
                    >
                      Services
                      <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 px-4 text-base font-semibold text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-4 text-sm text-white/50 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
                          >
                            <service.icon className="w-4 h-4" />
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    )}

                    {navLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-left py-4 px-4 text-lg font-medium text-white/70 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto p-6 border-t border-white/5 space-y-4">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 py-3 px-4 text-white/60 hover:text-amber-400 rounded-xl transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                        <Phone className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="font-bold">+91 98765 43210</span>
                    </a>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        className="w-full bg-gradient-to-r from-accent to-amber-500 text-white h-12 text-base shadow-md"
                        size="lg"
                      >
                        Book Free Review Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
