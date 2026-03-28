import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, MessageSquare, ShieldAlert, Globe, ChevronRight, UserCheck, Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight } from "@/motion/variants";
import { cn } from "@/lib/utils";

export default function ContactSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    parentLocation: "",
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

  return (
    <section id="contact" className={cn(
      "py-20 md:py-28 relative overflow-hidden transition-colors duration-500",
      theme === 'light' ? "section-light" : "section-dark"
    )}>
      {/* Background Ambience */}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(207,160,82,0.05)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        </>
      )}
      {theme === 'light' && (
        <>
          <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
        </>
      )}
      
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* ─── BENEFITS SECTION (5 Cols) ─── */}
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
                <span className="accent-label !mb-0 text-accent">Strategic Engagement</span>
              </div>
              
              <h2 className={cn(
                "display-title mb-10 !text-5xl md:!text-6xl",
                theme === 'light' ? "text-[#1A1A1A]" : "text-white"
              )}>
                Book Your Free <br />
                <span className="text-gradient-gold italic">Review Session.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-md">
                Get a free review of your parents' financial situation in India.
              </p>

              <div className="space-y-12">
                {[
                  { icon: Calendar, title: "30 Min Consultation", desc: "A focused executive session to map your family's specific Indian context and requirements." },
                  { icon: Lock, title: "Confidential Discussion", desc: "All sessions are governed by strict non-disclosure protocols and bank-grade data security." },
                  { icon: UserCheck, title: "Expert Advisory", desc: "Direct access to our Senior Portfolio Leads who coordinate legal, financial, and property domains." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500",
                      theme === 'light' ? "bg-accent/5 border-black/5 group-hover:border-accent/40" : "bg-accent/5 border-white/10 group-hover:border-accent/40"
                    )}>
                      <item.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-serif mb-2",
                        theme === 'light' ? "text-[#1A1A1A]" : "text-white"
                      )}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn(
              "mt-24 pt-12 border-t",
              theme === 'light' ? "border-black/5" : "border-white/5"
            )}>
              <div className={cn(
                "flex items-center gap-4 p-6 border",
                theme === 'light' ? "bg-accent/5 border-accent/20" : "bg-accent/5 border-accent/20"
              )}>
                <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                <p className="text-[11px] font-mono leading-relaxed text-accent uppercase tracking-widest font-bold">
                  Professional Protection Channel — <span className={theme === 'light' ? "text-[#1A1A1A]" : "text-white"}>FEMA & RBI Compliant.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── SECURE BOOKING FORM (7 Cols) ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-7"
          >
            <div className={cn(
              "p-10 md:p-16 rounded-[3.5rem] relative overflow-hidden h-full premium-card shadow-2xl transition-all duration-700",
              theme === 'light' ? "" : "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10"
            )}>
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
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-10 shadow-inner">
                      <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    </div>
                    <h3 className={cn(
                      "text-3xl font-serif mb-6",
                      theme === 'light' ? "text-[#1A1A1A]" : "text-white"
                    )}>Request Received.</h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-sm">
                      Our scheduling unit will contact you within 4 hours to confirm your private review session.
                    </p>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className={cn(
                        "btn-premium-outline !px-8 !py-4",
                        theme === 'light' ? "section-light" : "section-dark"
                      )}
                    >
                      New Booking
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={cn(
                      "flex items-center justify-between mb-12 border-b pb-8",
                      theme === 'light' ? "border-black/5" : "border-white/5"
                    )}>
                      <div className="flex items-center gap-3">
                        <Lock className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">Encrypted Booking Line</span>
                      </div>
                      <div className={cn(
                        "flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest",
                        theme === 'light' ? "text-black/20" : "text-white/20"
                      )}>
                        <Globe className="w-3 h-3" />
                        Serving 40+ Jurisdictions
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
                            className={cn(
                              "h-14 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all shadow-sm",
                              theme === 'light' 
                                ? "bg-[#FDFCFB] border-black/10 text-[#1A1A1A] placeholder:text-black/20" 
                                : "bg-background/50 border-white/10 text-white placeholder:text-white/20"
                            )}
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Confidential Email</label>
                          <Input 
                            required 
                            type="email" 
                            placeholder="name@organization.com" 
                            value={formData.email} 
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            className={cn(
                              "h-14 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all shadow-sm",
                              theme === 'light' 
                                ? "bg-[#FDFCFB] border-black/10 text-[#1A1A1A] placeholder:text-black/20" 
                                : "bg-background/50 border-white/10 text-white placeholder:text-white/20"
                            )}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Country of Residency</label>
                          <Select required onValueChange={(val) => setFormData({...formData, country: val})}>
                            <SelectTrigger className={cn(
                              "h-14 rounded-xl shadow-sm transition-all",
                              theme === 'light' 
                                ? "bg-[#FDFCFB] border-black/10 text-[#1A1A1A]" 
                                : "bg-background/50 border-white/10 text-white"
                            )}>
                              <SelectValue placeholder="Where do you live?" />
                            </SelectTrigger>
                            <SelectContent className={cn(
                              "border-black/5",
                              theme === 'light' ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] border-white/10 text-white"
                            )}>
                              {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Parent Location (India)</label>
                          <Input 
                            required 
                            placeholder="City/State in India" 
                            value={formData.parentLocation} 
                            onChange={(e) => setFormData({...formData, parentLocation: e.target.value})} 
                            className={cn(
                              "h-14 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all shadow-sm",
                              theme === 'light' 
                                ? "bg-[#FDFCFB] border-black/10 text-[#1A1A1A] placeholder:text-black/20" 
                                : "bg-background/50 border-white/10 text-white placeholder:text-white/20"
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">Family Context & Requirements</label>
                        <Textarea 
                          required
                          placeholder="Briefly describe the assets or concerns requiring financial protection..." 
                          value={formData.message} 
                          onChange={(e) => setFormData({...formData, message: e.target.value})} 
                          className={cn(
                            "min-h-[140px] rounded-xl p-5 transition-all resize-none shadow-sm",
                            theme === 'light' 
                              ? "bg-[#FDFCFB] border-black/10 text-[#1A1A1A] placeholder:text-black/20 focus:border-accent/50" 
                              : "bg-background/50 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50"
                          )}
                        />
                      </div>

                      <div className={cn(
                        "flex items-start gap-4 p-6 rounded-2xl border shadow-inner",
                        theme === 'light' ? "bg-black/[0.01] border-black/5" : "bg-white/[0.01] border-white/5"
                      )}>
                        <Checkbox 
                          id="consent" 
                          checked={formData.consent} 
                          onCheckedChange={(val) => setFormData({...formData, consent: val as boolean})} 
                          className={cn(
                            "mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent h-5 w-5 rounded",
                            theme === 'light' ? "border-black/20" : "border-white/20"
                          )} 
                        />
                        <label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer select-none text-muted-foreground font-light hover:text-accent transition-colors">
                          I consent to the secure processing of my data for the purpose of a confidential advisory consultation. All communications are strictly private.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-premium-primary w-full h-20 !rounded-2xl flex items-center justify-center gap-4 group shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-[#0A0F0D]/30 border-t-[#0A0F0D] rounded-full animate-spin" />
                        ) : (
                          <>
                            <MessageSquare className="w-5 h-5" />
                            <span>Schedule My Free Review</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <div className="text-center">
                        <span className={cn(
                          "text-[9px] font-mono uppercase tracking-[0.3em] font-bold",
                          theme === 'light' ? "text-black/20" : "text-white/20"
                        )}>Verified Trusted Intake Process</span>
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

