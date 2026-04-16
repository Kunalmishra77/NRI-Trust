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
      className="relative w-full max-w-[340px]"
    >
      {/* Premium Glow Effect behind form */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 to-[#f3e5ab]/10 blur-3xl rounded-[2rem] -z-10" />

      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-5 md:p-6 rounded-[1.5rem] shadow-2xl relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

        <div className="mb-4 relative z-10">
          <h3 className="text-lg font-sans font-bold text-white mb-1 tracking-tight">Apply for Free Consultation</h3>
          <p className="text-[12px] text-white/50 font-medium leading-relaxed">with our experts on NRI's assets and financial security management</p>
        </div>

        <form className="space-y-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="relative group">
            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'name' ? 'text-[#d4af37]' : 'text-white/45'}`}>
              <User className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-[12px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/45"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'email' ? 'text-[#d4af37]' : 'text-white/45'}`}>
              <Mail className="w-3.5 h-3.5" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-[12px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/45"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="relative group">
            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'whatsapp' ? 'text-[#d4af37]' : 'text-white/45'}`}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <input
              type="tel"
              placeholder="WhatsApp Number"
              onFocus={() => setFocused('whatsapp')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-[12px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/45"
            />
          </div>

          {/* Service Interest */}
          <div className="relative group">
            <div className={`absolute left-3.5 top-3 transition-colors duration-300 ${focused === 'message' ? 'text-[#d4af37]' : 'text-white/45'}`}>
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <textarea
              placeholder="Tell us about your parents' situation..."
              rows={2}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-[12px] text-white font-medium outline-none focus:border-[#d4af37]/40 focus:bg-white/10 transition-all duration-300 placeholder:text-white/45 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#e5c04b" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#d4af37] text-[#050914] py-3 rounded-lg font-bold text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-xl shadow-[#d4af37]/10 group overflow-hidden relative"
          >
            <span className="relative z-10">Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />

            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.button>
        </form>

        <div className="mt-5 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]/40" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-white/55 leading-none">Your Information Is Handled Securely</span>
        </div>
      </div>
    </motion.div>
  );
}
