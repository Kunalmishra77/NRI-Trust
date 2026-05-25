import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Lock, Globe, ChevronRight, CheckCircle2, ShieldCheck, AlertCircle, FileText, Calendar, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Use relative import for stability in local environment
import { ASSESSMENT_ENGINE } from "../../../shared/assessment-engine";
import type { Persona } from "../../../shared/assessment-engine";

// --- EMERGENCY ERROR BOUNDARY ---
class AssessmentErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  componentDidCatch(error: any, errorInfo: any) { 
    console.error("ASSESSMENT_CRASH_DETECTED:", error, errorInfo); 
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-3xl text-center backdrop-blur-xl">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-serif text-white mb-3">Advisory System Reset</h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed max-w-xs mx-auto">
            A synchronization error occurred. Please click below to restart the intake session.
          </p>
          <button onClick={() => window.location.reload()} className="btn-premium-primary !px-8 !py-4 rounded-xl text-[10px] font-black uppercase tracking-widest">
            Restart Intake
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Singapore",
  "UAE", "Germany", "Netherlands", "New Zealand", "Other"
];

function AssessmentContent({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    parentLocation: "",
    answers: {} as Record<string, string>,
    consent: false
  });
  const [result, setResult] = useState<any>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleNext = () => {
    setApiError(null);
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.country || !formData.answers['q_parent_age']) {
        return;
      }
      setStep(2);
    } else if (step === 2) {
      processAssessment();
    }
  };

  const processAssessment = async () => {
    setIsSubmitting(true);
    setApiError(null);
    setStep(3); 
    
    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType?.includes("application/json")) {
        setApiError(`Assessment Engine Error. Infrastructure connectivity check failed.`);
        setStep(2);
        return;
      }
      
      const data = await response.json();
      if (data.success) {
        setResult(data.result);
        setTimeout(() => setStep(4), 2500); 
      } else {
        setApiError(data.error || "Failed to process results.");
        setStep(2);
      }
    } catch (error: any) {
      setApiError(`Secure Line Error: ${error.message}`);
      setStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getActiveQuestions = () => {
    const ageBracket = formData.answers['q_parent_age'];
    let persona: Persona = 'GREEN';
    if (ageBracket === '55_65') persona = 'ORANGE';
    if (ageBracket === '65_plus') persona = 'RED';

    return (ASSESSMENT_ENGINE.questions as any[]).filter(q => 
      q.visibility.includes(persona) && q.id !== 'q_parent_age'
    );
  };

  const textPrimary = theme === 'light' ? "text-[#1A1A1A]" : "text-white";
  const textSecondary = theme === 'light' ? "text-[#1A1A1A]/80" : "text-white/80";
  const textMuted = theme === 'light' ? "text-[#1A1A1A]/50" : "text-white/50";
  const placeholderColor = theme === 'light' ? "placeholder:text-black/40" : "placeholder:text-white/40";
  const borderPrimary = theme === 'light' ? "border-black/10" : "border-white/10";
  const bgInput = theme === 'light' ? "bg-[#FDFCFB]" : "bg-background/50";

  return (
    <div className="relative min-h-[500px] flex flex-col">
      {/* PERSISTENT HEADER */}
      <div className="mb-8 text-left">
        <h3 className={cn("text-2xl font-serif mb-2 tracking-tight", textPrimary)}>
          Family Protection <span className="text-gradient-gold italic">Assessment.</span>
        </h3>
        <p className={cn("text-xs font-light tracking-wide max-w-lg leading-relaxed", textSecondary)}>
          Proprietary intelligence engine evaluating structural vulnerabilities across legal, financial, and healthcare domains.
        </p>
      </div>

      {apiError && (
        <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-500 text-xs font-bold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p>{apiError}</p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="space-y-8 flex-grow"
          >
            <div className={cn("flex items-center justify-between mb-6 border-b pb-6", borderPrimary)}>
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-black">Secure Intake - Step 01</span>
              </div>
              <div className={cn("flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest", textMuted)}>
                <Globe className="w-3.5 h-3.5" />
                Serving 40+ Jurisdictions
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Principal Name</label>
                <Input 
                  required 
                  placeholder="Full Legal Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className={cn("h-13 rounded-xl transition-all shadow-sm focus:border-accent/50 focus:ring-accent/20", bgInput, borderPrimary, textPrimary, placeholderColor)} 
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Confidential Email</label>
                <Input 
                  required 
                  type="email" 
                  placeholder="name@organization.com" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className={cn("h-13 rounded-xl transition-all shadow-sm focus:border-accent/50 focus:ring-accent/20", bgInput, borderPrimary, textPrimary, placeholderColor)} 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2.5 text-left">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Country of Residency</label>
                <Select value={formData.country || ""} onValueChange={(val) => setFormData({...formData, country: val})}>
                  <SelectTrigger className={cn("h-13 rounded-xl transition-all", bgInput, borderPrimary, textPrimary)}>
                    <SelectValue placeholder="Where do you live?" />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", theme === 'light' ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    {countries.map(c => (
                      <SelectItem key={c} value={c} className="text-sm py-2.5 cursor-pointer">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2.5 text-left">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Parent Age Bracket</label>
                <Select value={formData.answers['q_parent_age'] || ""} onValueChange={(val) => setFormData({...formData, answers: {...formData.answers, q_parent_age: val}})}>
                  <SelectTrigger className={cn("h-13 rounded-xl transition-all", bgInput, borderPrimary, textPrimary)}>
                    <SelectValue placeholder="Select parent age..." />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", theme === 'light' ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    <SelectItem value="under_55" className="text-sm py-2.5 cursor-pointer">Under 55 (Green Zone)</SelectItem>
                    <SelectItem value="55_65" className="text-sm py-2.5 cursor-pointer">55 - 65 (Orange Zone)</SelectItem>
                    <SelectItem value="65_plus" className="text-sm py-2.5 cursor-pointer">65 or above (Red Zone)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button onClick={handleNext} className="btn-premium-primary w-full h-16 !rounded-2xl flex items-center justify-center gap-4 group shadow-xl mt-8 transition-all hover:scale-[1.01] active:scale-[0.99]">
              <span className="font-black tracking-[0.2em] uppercase text-xs">Initialize Secure Assessment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10 flex-grow text-left">
            <div className={cn("flex items-center justify-between mb-6 border-b pb-6", borderPrimary)}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-black">Customizing Advisory Path</span>
              </div>
              <span className={cn("text-[11px] font-mono font-black", textMuted)}>STEP 02 OF 02</span>
            </div>

            <div className="space-y-10 max-h-[450px] overflow-y-auto pr-6 custom-scrollbar">
              {getActiveQuestions().map((q) => (
                <div key={q.id} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className={cn("text-lg font-serif leading-tight block", textPrimary)}>{q.label}</label>
                    {q.description && <p className={cn("text-[13px] italic leading-relaxed", textSecondary)}>{q.description}</p>}
                  </div>
                  
                  {q.type === 'radio_card' && (
                    <div className="grid gap-4">
                      {q.options?.map((opt: any) => (
                        <div key={opt.value} onClick={() => setFormData({...formData, answers: {...formData.answers, [q.id]: opt.value}})} className={cn("p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group", formData.answers[q.id] === opt.value ? "bg-accent/10 border-accent text-white" : cn(theme === 'light' ? "bg-black/5" : "bg-white/5", borderPrimary, textSecondary, "hover:border-accent/40"))}>
                          <span className="text-base font-bold">{opt.label}</span>
                          <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", formData.answers[q.id] === opt.value ? "border-accent" : (theme === 'light' ? "border-black/20" : "border-white/20"))}>
                            {formData.answers[q.id] === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {q.type === 'text' && (
                    <Textarea 
                      placeholder="Type your response here..."
                      value={formData.answers[q.id] || ""}
                      onChange={(e) => setFormData({...formData, answers: {...formData.answers, [q.id]: e.target.value}})}
                      className={cn("min-h-[100px] text-base rounded-xl p-4 transition-all resize-none shadow-sm leading-relaxed", bgInput, borderPrimary, textPrimary, placeholderColor, "focus:border-accent/50")}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={cn("flex items-center gap-5 p-5 rounded-xl border", theme === 'light' ? "bg-black/[0.03]" : "bg-white/[0.03]", borderPrimary)}>
              <Checkbox id="consent" checked={formData.consent} onCheckedChange={(val) => setFormData({...formData, consent: val as boolean})} className={cn("mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent h-6 w-6 rounded", theme === 'light' ? "border-black/30" : "border-white/30")} />
              <label htmlFor="consent" className={cn("text-xs leading-relaxed cursor-pointer select-none font-bold hover:text-accent transition-colors", textSecondary)}>I consent to the secure processing of my data for a comprehensive assessment.</label>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <button onClick={() => setStep(1)} className="btn-premium-outline !h-16 !rounded-xl text-[11px] uppercase tracking-[0.2em] font-black hover:bg-white/10 transition-all">Back</button>
              <button onClick={handleNext} disabled={!formData.consent || getActiveQuestions().some(q => q.required !== false && !formData.answers[q.id])} className="btn-premium-primary !h-16 !rounded-xl flex items-center justify-center gap-4 group disabled:opacity-50 shadow-xl transition-all">
                <span className="text-[11px] uppercase tracking-[0.2em] font-black">Generate Brief</span>
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center text-center py-24">
            <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-[3px] border-accent/20 border-t-accent" />
              <ShieldCheck className="w-12 h-12 text-accent" />
            </div>
            <h3 className={cn("text-2xl font-serif mb-4 italic tracking-tight", textPrimary)}>Calibrating Intelligence...</h3>
            <p className={cn("text-[10px] font-mono tracking-[0.3em] uppercase animate-pulse font-black text-accent")}>Generating Comprehensive Report</p>
          </motion.div>
        )}

        {step === 4 && result && (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-10 flex-grow text-left">
            <div className={cn("flex items-center justify-between mb-6 border-b-2 pb-6", borderPrimary)}>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-black">Brief Generated</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 shadow-xl">
                <span className="text-[10px] font-mono text-accent uppercase font-black">{result.persona} ADVISORY</span>
              </div>
            </div>

            <div className={cn("p-8 rounded-[2.5rem] border space-y-10 shadow-2xl relative overflow-hidden", theme === 'light' ? "bg-white border-black/5" : "bg-[#050914] border-white/5")}>
               <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[80px] rounded-full" />

              <div className="flex items-start gap-6 relative z-10">
                <AlertCircle className={cn("w-8 h-8 shrink-0 mt-1.5", result.urgency === 'CRITICAL' ? "text-red-500" : "text-accent")} />
                <div className="space-y-6">
                  <h4 className={cn("text-xl font-serif tracking-tight leading-tight uppercase", textPrimary)}>
                    {result.urgency} RISK PROFILE IDENTIFIED
                  </h4>
                  
                  <div className="grid gap-8">
                    {result.fullSummary.split('\n\n').map((part: string, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className={cn("text-base leading-relaxed font-light", textSecondary)}
                        dangerouslySetInnerHTML={{ 
                          __html: part.replace(/\*\*(.*?)\*\*/g, '<b class="text-accent font-bold uppercase tracking-wide">$1</b>')
                                      .replace(/â— /g, '<span class="text-accent mr-2">â— </span>') 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={cn("pt-10 border-t grid gap-6 relative z-10", borderPrimary)}>
                <h5 className="text-[13px] font-mono uppercase tracking-[0.2em] text-accent font-black flex items-center gap-3">
                  <Info className="w-5 h-5" />
                  Immediate A-Z Action Items:
                </h5>
                <div className="grid gap-4">
                  {result.recommendations.map((rec: any, i: number) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className={cn("flex gap-5 p-6 rounded-2xl border transition-all hover:translate-x-1 shadow-sm hover:shadow-xl", theme === 'light' ? "bg-[#FDFCFB] border-black/5" : "bg-white/5 border-white/5")}>
                      <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20 text-accent font-black">{i+1}</div>
                      <div className="space-y-2">
                        <p className={cn("text-lg font-black tracking-tight", textPrimary)}>{rec.title}</p>
                        <p className={cn("text-sm leading-relaxed font-medium", textSecondary)}>{rec.description}</p>
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-accent font-black">Directive: {rec.action}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pb-6">
              <Button variant="outline" className="btn-premium-outline !h-16 !rounded-xl gap-4 text-[11px] uppercase tracking-[0.2em] font-black group" onClick={() => window.open(result.pdfUrl)}>
                <FileText className="w-4 h-4 group-hover:text-accent transition-colors" /> Download PDF Brief
              </Button>
              <Button className="btn-premium-primary !h-16 !rounded-xl gap-4 text-[11px] uppercase tracking-[0.2em] font-black group shadow-xl" onClick={() => setStep(5)}>
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" /> Book Strategy Session
              </Button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
           <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-24">
             <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mb-8 shadow-xl">
               <CheckCircle2 className="w-12 h-12 text-emerald-500" />
             </div>
             <h3 className={cn("text-3xl font-serif mb-6 italic tracking-tight", textPrimary)}>Line Established.</h3>
             <p className={cn("text-lg font-light leading-relaxed mb-16 max-w-md", textSecondary)}>Our advisory lead will contact you personally within 4 hours to initiate your review session.</p>
             <button onClick={() => setStep(1)} className="btn-premium-outline !px-12 !py-5 rounded-xl text-[12px] uppercase tracking-[0.2em] font-black">Close Intake</button>
           </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-auto pt-12">
        <span className={cn("text-[10px] font-mono uppercase tracking-[0.3em] font-black", textMuted)}>Verified Trusted Intake Process · PRIVATE · NRI Trust</span>
      </div>
    </div>
  );
}

export default function AssessmentFlow(props: any) {
  return (
    <AssessmentErrorBoundary>
      <AssessmentContent {...props} />
    </AssessmentErrorBoundary>
  );
}
