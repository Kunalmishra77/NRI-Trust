import { motion } from "framer-motion";
import { FileText, Shield, CreditCard, Building2, Scale } from "lucide-react";

export const FloatingLegalDoc = ({ delay = 0, className = "" }) => (
 <motion.div
  initial={{ opacity: 0, y: 20, rotateX: 20 }}
  animate={{ 
   opacity: 1, 
   y: [0, -15, 0],
   rotateX: [15, 10, 15],
   rotateY: [-5, 5, -5]
  }}
  transition={{ 
   opacity: { duration: 1, delay },
   y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
   rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
   rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" }
  }}
  className={`preserve-3d glass-panel p-6 rounded-xl w-48 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-white/10 ${className}`}
 >
  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
   <FileText className="w-5 h-5 text-accent" />
  </div>
  <div className="space-y-2">
   <div className="h-1.5 w-full bg-white/10 rounded-full" />
   <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
   <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
  </div>
  <div className="mt-6 flex justify-end">
   <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
    <Shield className="w-3 h-3 text-accent" />
   </div>
  </div>
 </motion.div>
);

export const ComplianceCard = ({ title, status, delay = 0, className = "" }) => (
 <motion.div
  initial={{ opacity: 0, x: -20, rotateY: -20 }}
  animate={{ 
   opacity: 1, 
   x: 0,
   rotateY: [-15, -10, -15],
   y: [0, 10, 0]
  }}
  transition={{ 
   opacity: { duration: 1, delay },
   y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
   rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }}
  className={`preserve-3d glass-panel p-5 rounded-2xl w-64 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-accent/10 ${className}`}
 >
  <div className="flex items-center gap-4 mb-4">
   <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
    <CreditCard className="w-5 h-5 text-emerald-500" />
   </div>
   <div>
    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{title}</div>
    <div className="text-xs font-bold text-white uppercase">{status}</div>
   </div>
  </div>
  <div className="flex gap-1">
   {Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="h-1 flex-1 bg-emerald-500/40 rounded-full" />
   ))}
  </div>
 </motion.div>
);

export const VaultMotif = ({ className = "" }) => (
 <div className={`relative perspective-container ${className}`}>
  <motion.div
   animate={{ rotateY: [0, 360] }}
   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
   className="preserve-3d w-64 h-64 relative"
  >
   {/* Abstract Vault Rings */}
   <div className="absolute inset-0 border-2 border-accent/20 rounded-full scale-100" />
   <div className="absolute inset-4 border border-accent/10 rounded-full scale-90" />
   <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl animate-pulse" />
    <Shield className="w-16 h-16 text-accent relative z-10" />
   </div>
   
   {/* Floating orbital elements */}
   <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0"
   >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(207,160,82,0.8)]" />
   </motion.div>
  </motion.div>
 </div>
);

export const IsometricProperty = ({ delay = 0, className = "" }) => (
 <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
  transition={{ 
   opacity: { duration: 1, delay },
   y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }}
  className={`relative group ${className}`}
 >
  <div className="w-32 h-32 relative preserve-3d rotate-x-45 rotate-z-45">
   <div className="absolute inset-0 bg-accent/20 border border-accent/40 translate-z-10" />
   <div className="absolute inset-0 bg-accent/10 border border-accent/20 origin-left -rotate-y-90 w-10" />
   <div className="absolute inset-0 bg-accent/5 border border-accent/20 origin-top -rotate-x-90 h-10" />
   <Building2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-z-45 -rotate-x-45 w-12 h-12 text-accent" />
  </div>
 </motion.div>
);
