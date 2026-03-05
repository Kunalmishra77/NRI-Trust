import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Banking & KYC", href: "/services/banking-kyc" },
      { label: "Legal & Succession", href: "/services/legal-succession" },
      { label: "Property & Tenancy", href: "/services/property-tenancy" },
      { label: "Insurance", href: "/services/insurance" },
      { label: "Income Tax", href: "/services/income-tax" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
      { label: "All Services", href: "/services" },
    ],
    Resources: [
      { label: "Success Stories", href: "/about" },
      { label: "How It Works", href: "/pricing" },
      { label: "NRI Guides", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer ref={containerRef} className="bg-gradient-to-b from-[hsl(180,45%,8%)] to-[hsl(180,50%,4%)] text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative amber gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[20vw] font-serif font-black text-center leading-none mt-20">NRI TRUST</h1>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(232,168,56,0.2)] bg-gradient-to-br from-accent to-amber-600 border border-amber-400/20">
                  <span className="text-white font-serif font-bold text-xl">NT</span>
                </div>
                <div>
                  <span className="text-2xl font-serif font-bold block leading-none mb-1 tracking-tight">NRI TRUST</span>
                  <span className="text-xs font-mono text-white/30 uppercase tracking-[0.25em]">Global Peace of Mind</span>
                </div>
              </Link>
              <p className="text-white/40 mb-10 max-w-sm leading-relaxed text-lg font-light">
                Your trusted partner for comprehensive financial and legal advisory services.
                Serving NRI families across 40+ countries since 2020.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-5 text-white/50 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-medium text-lg">+91 98765 43210</span>
                </a>
                <a
                  href="mailto:hello@nritrust.com"
                  className="flex items-center gap-5 text-white/50 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-medium text-lg">hello@nritrust.com</span>
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-mono tracking-[0.25em] text-amber-500/40 mb-8 text-xs uppercase">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <span className="text-base text-white/30 cursor-default">{link.label}</span>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base text-white/40 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <ArrowRight className="w-4 h-4 text-amber-400" />
                          </span>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-white/30 font-light">
              &copy; {currentYear} NRI Trust. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-medium text-white/40">System Operational</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
