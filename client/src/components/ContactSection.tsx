import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Clock, Shield, Phone, Mail, Calendar, CheckCircle2, MessageSquare, ShieldAlert, Globe, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { elegantFadeUp, slideInLeft, slideInRight } from "@/motion/variants";

export default function ContactSection() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  countryCode: "+91",
  country: "",
  service: "",
  message: "",
  consent: false,
  honeypot: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (formData.honeypot) { setShowSuccess(true); return; }
  setIsSubmitting(true);
  try {
   await new Promise(resolve => setTimeout(resolve, 2000));
   setShowSuccess(true);
  } catch (error) {
   console.error(error);
  } finally {
   setIsSubmitting(false);
  }
 };

 const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Singapore",
  "UAE", "Germany", "Netherlands", "New Zealand", "Other"
 ];

 const services = [
  "Banking & KYC Compliance",
  "Legal & Succession Planning",
  "Property & Tenancy Management",
  "Insurance (Financial) Management",
  "Income Tax Filing & Compliance",
  "Multiple Services",
  "Not sure - Need consultation",
 ];

 return (
  <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
   {/* Background Ambience */}
   <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
   <div className="absolute top-0 right-0 w-[60vw] h-[60vw] mesh-glow-emerald opacity-60 blur-[120px] pointer-events-none" />
   <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] mesh-glow-gold opacity-10 blur-[100px] pointer-events-none" />

   <div className="max-container relative z-10">
    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
     
     {/* ─── THE ADVISORY ENTRANCE (5 Cols) ─── */}
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInLeft}
      className="lg:col-span-5 flex flex-col justify-between py-4"
     >
      <div>
       <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-accent/40" />
        <span className="accent-label !mb-0">Direct Engagement Channel</span>
       </div>
       
       <h2 className="display-title mb-10 !text-5xl md:!text-6xl">
        Initiate Your <br />
        <span className="text-gradient-gold italic">Private Review.</span>
       </h2>
       
       <p className="text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-md">
        Securely submit your portfolio context. All initial communications are governed by our radical privacy protocol.
       </p>

       <div className="space-y-12">
        {[
         { icon: Shield, title: "Fiduciary Discretion", desc: "Your data is encrypted and accessible only to your assigned Senior Portfolio Lead." },
         { icon: Clock, title: "Global Scheduling", desc: "We coordinate sessions across all timezones—from San Francisco to Singapore." },
         { icon: Lock, title: "Zero Data Sharing", desc: "We do not sell data. Your information is used strictly for advisory purposes." }
        ].map((item, i) => (
         <div key={i} className="flex gap-6 group">
          <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-all duration-500 shadow-inner">
           <item.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
          </div>
          <div>
           <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
           <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
          </div>
         </div>
        ))}
       </div>
      </div>

      <div className="mt-24 pt-12 border-t border-white/5">
       <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl border-accent/20 bg-accent/5">
        <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
        <p className="text-[11px] font-mono leading-relaxed text-accent uppercase tracking-widest font-bold">
         Authorized Financial & Legal Stewardship Only — <span className="text-white">Non-Medical.</span>
        </p>
       </div>
      </div>
     </motion.div>

     {/* ─── SECURE FORM (7 Cols) ─── */}
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInRight}
      className="lg:col-span-7"
     >
      <div className="vault-surface p-10 md:p-16 rounded-[3.5rem] relative overflow-hidden h-full">
       <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
       
       <AnimatePresence mode="wait">
        {showSuccess ? (
         <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="h-full flex flex-col items-center justify-center text-center py-20"
         >
          <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
           <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h3 className="text-3xl font-serif text-white mb-6">Engagement Secured.</h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-sm">
           Your request has been routed to our Senior Portfolio Director. You will receive a confirmation within 4 business hours.
          </p>
          <button
           onClick={() => setShowSuccess(false)}
           className="btn-premium-outline !px-8 !py-4"
          >
           Return to Form
          </button>
         </motion.div>
        ) : (
         <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
         >
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
           <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">256-Bit SSL Encrypted</span>
           </div>
           <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/20">
            <Globe className="w-3 h-3" />
            Server Location: Mumbai
           </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
           <input type="text" name="website" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} className="hidden" tabIndex={-1} />

           <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
             <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Principal Name</label>
             <Input 
              required 
              placeholder="Full Legal Name" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              className="h-14 bg-background/50 border-white/10 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white placeholder:text-white/20"
             />
            </div>
            <div className="space-y-3">
             <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Confidential Email</label>
             <Input 
              required 
              type="email" 
              placeholder="your.name@global.com" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              className="h-14 bg-background/50 border-white/10 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white placeholder:text-white/20"
             />
            </div>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
             <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Current Residency</label>
             <Select required onValueChange={(val) => setFormData({...formData, country: val})}>
              <SelectTrigger className="h-14 bg-background/50 border-white/10 rounded-xl text-white">
               <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0F0D] border-white/10 text-white">
               {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
             </Select>
            </div>
            <div className="space-y-3">
             <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Contact Number</label>
             <div className="flex gap-2">
              <Select value={formData.countryCode} onValueChange={(val) => setFormData({...formData, countryCode: val})}>
               <SelectTrigger className="w-[100px] h-14 bg-background/50 border-white/10 rounded-xl text-white">
                <SelectValue />
               </SelectTrigger>
               <SelectContent className="bg-[#0A0F0D] border-white/10 text-white">
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+65">+65</SelectItem>
               </SelectContent>
              </Select>
              <Input 
               required 
               type="tel" 
               placeholder="Phone" 
               value={formData.phone} 
               onChange={(e) => setFormData({...formData, phone: e.target.value})} 
               className="flex-1 h-14 bg-background/50 border-white/10 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white placeholder:text-white/20"
              />
             </div>
            </div>
           </div>

           <div className="space-y-3">
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Domain of Interest</label>
            <Select onValueChange={(val) => setFormData({...formData, service: val})}>
             <SelectTrigger className="h-14 bg-background/50 border-white/10 rounded-xl text-white">
              <SelectValue placeholder="Select Primary Practice Area" />
             </SelectTrigger>
             <SelectContent className="bg-[#0A0F0D] border-white/10 text-white">
              {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
             </SelectContent>
            </Select>
           </div>

           <div className="space-y-3">
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Portfolio Context (Confidential)</label>
            <Textarea 
             placeholder="Briefly describe the assets or concerns requiring stewardship..." 
             value={formData.message} 
             onChange={(e) => setFormData({...formData, message: e.target.value})} 
             className="min-h-[140px] bg-background/50 border-white/10 rounded-xl p-5 text-white focus:border-accent/50 focus:ring-accent/20 transition-all resize-none placeholder:text-white/20"
            />
           </div>

           <div className="flex items-start gap-4 p-6 glass-panel border-white/5 rounded-2xl bg-white/[0.01]">
            <Checkbox 
             id="consent" 
             checked={formData.consent} 
             onCheckedChange={(val) => setFormData({...formData, consent: val as boolean})} 
             className="mt-1 border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent h-5 w-5 rounded" 
            />
            <label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer select-none text-muted-foreground font-light hover:text-white transition-colors">
             I consent to the secure processing of my data for the purpose of a confidential advisory engagement. All communications are private.
            </label>
           </div>

           <button
            type="submit"
            disabled={isSubmitting}
            className="btn-premium-primary w-full h-20 !rounded-2xl flex items-center justify-center gap-4 group"
           >
            {isSubmitting ? (
             <div className="w-6 h-6 border-2 border-[#0A0F0D]/30 border-t-[#0A0F0D] rounded-full animate-spin" />
            ) : (
             <>
              <MessageSquare className="w-5 h-5" />
              <span>Request Private Review Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </>
            )}
           </button>

           <div className="text-center">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/20 font-bold">Verified Fiduciary Engagement Channel</span>
           </div>
          </form>
         </motion.div>
        )}
       </AnimatePresence>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
