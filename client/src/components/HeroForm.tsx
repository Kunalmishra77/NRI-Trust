import { motion } from "framer-motion";
import { ArrowRight, User, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function HeroForm() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[380px]"
    >
      {/* Premium Glow Effect behind form */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 to-[#f3e5ab]/10 blur-3xl rounded-[2.5rem] -z-10" />
      
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="mb-6 relative z-10">
          <h3 className="text-xl font-sans font-bold text-white mb-1.5 tracking-tight">Schedule Private Audit</h3>
          <p className="text-[13px] text-white/50 font-medium leading-relaxed">Secure your Indian legacy with dedicated executive stewardship.</p>
        </div>

        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="relative group">
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'name' ? 'text-[#d4af37]' : 'text-white/20'}`}>
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-[13px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/20"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'email' ? 'text-[#d4af37]' : 'text-white/20'}`}>
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder="Work Email"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-[13px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/20"
            />
          </div>

          {/* Service Interest */}
          <div className="relative group">
            <div className={`absolute left-4 top-4 transition-colors duration-300 ${focused === 'message' ? 'text-[#d4af37]' : 'text-white/20'}`}>
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              placeholder="Context or Requirements..."
              rows={2}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-[13px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/20 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#e5c04b" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#d4af37] text-[#050914] py-4 rounded-xl font-bold text-[12px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-xl shadow-[#d4af37]/10 group overflow-hidden relative"
          >
            <span className="relative z-10">Initiate Advisory</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]/40" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/30 leading-none">Military-Grade Encryption</span>
        </div>
      </div>
    </motion.div>
  );
}

