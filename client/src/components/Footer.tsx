import { Phone, Mail, ArrowRight, Shield, Linkedin, Twitter, Lock, Globe, MapPin, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Insurance Adequacy Check", href: "/services/insurance" },
      { label: "Bank Account Consolidation", href: "/services/banking-kyc" },
      { label: "Property Documents", href: "/services/property-tenancy" },
      { label: "Succession & Nominees", href: "/services/legal-succession" },
      { label: "Emergency Access", href: "/services/income-tax" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
    ]
  };

  return (
    <footer className="bg-[#FDFCFB] text-[#1A1A1A] relative overflow-hidden border-t border-black/[0.05] z-20">
      {/* Background Ambience - Block the globe with solid color and subtle gradients */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-red-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-12">

          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-4 mb-8 group w-fit">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center group-hover:bg-accent transition-all duration-500 shadow-2xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-sans font-black tracking-tight text-[#1A1A1A]">NRI TRUST</span>
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-accent mt-1 font-bold">Financial Protection</span>
              </div>
            </Link>

            <p className="text-lg text-[#1A1A1A]/90 font-medium mb-10 max-w-sm leading-relaxed">
              NRI Trust helps protect your parents' financial life in India — insurance, bank accounts, property, and legal matters, all in one place.
            </p>

            {/* Tactical Contact */}
            <div className="space-y-4 mb-10">
              <a href="mailto:advisory@nritrust.com" className="flex items-center gap-4 group text-[#1A1A1A]/80 hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-accent/30 transition-all">
                  <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[13px] font-bold tracking-wider">advisory@nritrust.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-4 group text-[#1A1A1A]/80 hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-accent/30 transition-all">
                  <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[13px] font-bold tracking-wider">+91 98765 43210</span>
              </a>
            </div>

            {/* Social Matrix */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
                { icon: Instagram, label: "Instagram" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/60 hover:text-white hover:bg-[#1A1A1A] transition-all duration-300 group shadow-sm"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 & 3: Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12 pt-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-mono text-[12px] font-black uppercase tracking-[0.3em] text-accent mb-10">{title}</h3>
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[#1A1A1A]/80 hover:text-accent transition-all flex items-center gap-3 group/link">
                        <div className="w-1.5 h-px bg-accent/30 group-hover/link:w-4 group-hover/link:bg-accent transition-all duration-500" />
                        <span className="text-[15px] font-bold">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Engagement & Status */}
          <div className="lg:col-span-3 flex flex-col pt-4">
            <h3 className="font-mono text-[12px] font-black uppercase tracking-[0.3em] text-accent mb-10">Client Access</h3>
            
            <Link href="/portal">
              <motion.div 
                whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.4)" }}
                className="p-6 rounded-[2rem] border border-[#1A1A1A]/10 bg-white transition-all cursor-pointer group mb-10 shadow-xl shadow-black/[0.02]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent transition-all duration-500">
                    <Lock className="w-5 h-5 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[13px] font-mono font-black text-[#1A1A1A] uppercase tracking-widest leading-none mb-1">Client Portal</div>
                    <div className="text-[11px] text-accent font-bold uppercase tracking-tight">Secure Family Access</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]/70 uppercase tracking-widest group-hover:text-accent transition-colors">
                  <span>Enter Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Operational Status */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A]/5 border border-[#1A1A1A]/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#1A1A1A]/75 uppercase font-bold">Network Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                  <span className="text-[10px] font-mono text-green-600 font-black uppercase">Live</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#1A1A1A]/75 uppercase font-bold">HQ Location</span>
                <span className="text-[12px] font-mono text-[#1A1A1A] font-black uppercase">Mumbai, IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Compliance & Copyright */}
        <div className="pt-12 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[13px] font-mono text-[#1A1A1A]/80 tracking-[0.15em] uppercase font-black">
            &copy; {currentYear} NRI Trust Global Advisory Ltd.
          </span>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-[12px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/75 hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-[12px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/75 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="text-[12px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/75 hover:text-accent transition-colors">Cookie Policy</Link>
            </div>

            <div className="hidden md:block h-4 w-px bg-black/10" />

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-[12px] font-mono text-[#1A1A1A]/75 uppercase tracking-widest font-black">
                <Globe className="w-3.5 h-3.5" />
                <span>40+ Global Jurisdictions</span>
              </div>
              <div className="h-4 w-px bg-black/10" />
              <div className="flex items-center gap-3 text-[12px] font-mono text-[#1A1A1A]/75 uppercase tracking-widest font-black">
                <MapPin className="w-3.5 h-3.5" />
                <span>FEMA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

