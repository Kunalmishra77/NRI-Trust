import { Phone, Mail, ArrowRight, Shield, MapPin, Linkedin, Twitter, Lock, Globe } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
 const currentYear = new Date().getFullYear();

 const footerLinks = {
  Advisory: [
   { label: "Banking & KYC", href: "/services/banking-kyc" },
   { label: "Legal & Succession", href: "/services/legal-succession" },
   { label: "Property & Tenancy", href: "/services/property-tenancy" },
   { label: "Insurance Advocacy", href: "/services/insurance" },
   { label: "Tax Compliance", href: "/services/income-tax" },
  ],
  Practice: [
   { label: "About the Firm", href: "/about" },
   { label: "Engagement Models", href: "/pricing" },
   { label: "Private Consultation", href: "/contact" },
   { label: "Practice Areas", href: "/services" },
  ]
 };

 return (
  <footer className="bg-[#050814] text-[#F5F3EC] relative overflow-hidden border-t border-white/[0.03]">
   <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
   
   {/* Cinematic Watermark - Perfectly centered and scaled */}
   <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02] select-none flex items-center justify-center p-12">
    <h1 className="text-[10vw] lg:text-[8vw] font-serif font-black text-center leading-none tracking-[0.1em] whitespace-nowrap text-white transform-gpu uppercase opacity-90">
     NRI TRUST
    </h1>
   </div>

   <div className="max-w-7xl mx-auto px-8 relative z-10 pt-16 pb-12">
    <div className="grid lg:grid-cols-12 gap-16 mb-20">
     
     {/* Brand Pillar */}
     <div className="lg:col-span-4">
      <Link href="/" className="flex items-center gap-5 mb-8 group">
       <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-[#8a652a] flex items-center justify-center border border-accent/20 group-hover:scale-105 transition-all duration-500 shadow-2xl">
        <Shield className="w-7 h-7 text-[#0A0F0D]" />
       </div>
       <div className="flex flex-col leading-none">
        <span className="text-3xl font-serif font-medium tracking-tight text-white group-hover:text-accent transition-colors">NRI TRUST</span>
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-accent/60 mt-1 font-bold">Digital Vault</span>
       </div>
      </Link>
      
      <p className="text-xl text-muted-foreground font-light mb-10 max-w-md leading-relaxed">
       Acting as a professional fiduciary for global Indian families across 40+ countries. 
      </p>

      <div className="flex flex-col gap-6 mb-10">
       <a href="mailto:advisory@nritrust.com" className="flex items-center gap-4 text-white/70 hover:text-accent transition-all group">
        <Mail className="w-5 h-5 text-accent/40 group-hover:text-accent" />
        <span className="font-mono text-sm tracking-widest font-medium">advisory@nritrust.com</span>
       </a>
       <a href="tel:+919876543210" className="flex items-center gap-4 text-white/70 hover:text-accent transition-all group">
        <Phone className="w-5 h-5 text-accent/40 group-hover:text-accent" />
        <span className="font-mono text-sm tracking-widest font-medium">+91 98765 43210</span>
       </a>
      </div>

      <div className="flex items-center gap-5">
       <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all text-white/40 hover:text-accent shadow-inner">
        <Linkedin className="w-5 h-5" />
       </a>
       <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all text-white/40 hover:text-accent shadow-inner">
        <Twitter className="w-5 h-5" />
       </a>
       <div className="w-px h-8 bg-white/10 mx-4" />
       <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-white/40">
        <Globe className="w-4 h-4" />
        HQ: Mumbai
       </div>
      </div>
     </div>

     {/* Links Grid */}
     <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 pt-2">
      {Object.entries(footerLinks).map(([title, links]) => (
       <div key={title}>
        <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-10">{title}</h3>
        <ul className="space-y-6">
         {links.map((link) => (
          <li key={link.label}>
           <Link href={link.href} className="text-white/70 hover:text-white transition-all flex items-center gap-4 group/link">
            <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-3 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            <span className="text-[16px] font-light tracking-wide">{link.label}</span>
           </Link>
          </li>
         ))}
        </ul>
       </div>
      ))}
      
      <div className="md:col-span-1">
       <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-10">Client Access</h3>
       <button className="flex items-center gap-4 p-6 glass-panel rounded-2xl border-white/10 hover:border-accent/30 transition-all w-full text-left group bg-white/[0.02]">
        <Lock className="w-5 h-5 text-accent/50 group-hover:text-accent" />
        <div className="flex flex-col leading-tight">
         <span className="text-[11px] font-mono font-bold text-white uppercase tracking-widest">Portal</span>
         <span className="text-[10px] text-muted-foreground font-light uppercase mt-1">Secure Login</span>
        </div>
       </button>
      </div>
     </div>
    </div>

    {/* Bottom Bar - Tightened and positioned at the very bottom */}
    <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-10">
     <div className="text-[11px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">
      &copy; {currentYear} NRI TRUST GLOBAL ADVISORY.
     </div>
     
     <div className="flex items-center gap-12">
      <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#1B332D]/30 border border-[#20B2AA]/20">
       <div className="w-1.5 h-1.5 rounded-full bg-[#20B2AA] animate-pulse shadow-[0_0_10px_#20B2AA]" />
       <span className="text-[10px] font-mono font-bold text-[#20B2AA] tracking-widest uppercase text-nowrap">Encryption Active</span>
      </div>
      <div className="flex items-center gap-5 opacity-70 hover:opacity-100 transition-opacity">
       <Shield className="w-4 h-4 text-accent" />
       <span className="text-[10px] font-mono font-bold tracking-widest text-white text-nowrap uppercase">FEMA Compliant</span>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
}
