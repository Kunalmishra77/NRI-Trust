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
        <div className="p-12 bg-red-500/5 border-2 border-red-500/20 rounded-[2.5rem] text-center backdrop-blur-xl">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-serif text-white mb-4">Advisory System Reset Required</h2>
          <p className="text-white/60 mb-10 text-base leading-relaxed max-w-sm mx-auto">
            A temporary synchronization error occurred in the secure portal. Please click below to re-initialize the intake session.
          </p>
          <button onClick={() => window.location.reload()} className="btn-premium-primary !px-12 !py-5 rounded-2xl text-sm font-black uppercase tracking-widest">
            Re-Initialize System
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
        console.warn("Validation: Missing fields on Step 1");
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
    <div className="relative min-h-[600px] flex flex-col">
      <div className="mb-10 text-left">
        <h3 className={cn("text-4xl font-serif mb-4 tracking-tight", textPrimary)}>
          Family Protection <span className="text-gradient-gold italic">Assessment.</span>
        </h3>
        <p className={cn("text-base font-light tracking-wide max-w-xl leading-relaxed", textSecondary)}>
          Our proprietary intelligence engine evaluates your structural vulnerabilities in India across legal, financial, and healthcare domains to provide an A-Z advisory report.
        </p>
      </div>

      {apiError && (
        <div className="mb-6 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center gap-4 text-red-500 text-base font-bold">
          <AlertCircle className="w-6 h-6 shrink-0" />
          <p>{apiError}</p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="space-y-10 flex-grow"
          >
            <div className={cn("flex items-center justify-between mb-8 border-b pb-8", borderPrimary)}>
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-emerald-500" />
                <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-emerald-500 font-black">Secure Intake - Step 01</span>
              </div>
              <div className={cn("flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest", textMuted)}>
                <Globe className="w-4 h-4" />
                Serving 40+ Jurisdictions
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[14px] font-mono uppercase tracking-widest text-accent font-black">Principal Name</label>
                <Input 
                  required 
                  placeholder="Full Legal Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className={cn("h-16 text-lg rounded-2xl transition-all shadow-sm focus:border-accent/50 focus:ring-accent/20", bgInput, borderPrimary, textPrimary, placeholderColor)} 
                />
              </div>
              <div className="space-y-4">
                <label className="text-[14px] font-mono uppercase tracking-widest text-accent font-black">Confidential Email</label>
                <Input 
                  required 
                  type="email" 
                  placeholder="name@organization.com" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className={cn("h-16 text-lg rounded-2xl transition-all shadow-sm focus:border-accent/50 focus:ring-accent/20", bgInput, borderPrimary, textPrimary, placeholderColor)} 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-left">
                <label className="text-[14px] font-mono uppercase tracking-widest text-accent font-black">Country of Residency</label>
                <Select value={formData.country || undefined} onValueChange={(val) => setFormData({...formData, country: val})}>
                  <SelectTrigger className={cn("h-16 text-lg rounded-2xl transition-all", bgInput, borderPrimary, textPrimary)}>
                    <SelectValue placeholder="Where do you live?" />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", theme === 'light' ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    {countries.map(c => (
                      <SelectItem key={c} value={c} className="text-base py-3 cursor-pointer">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4 text-left">
                <label className="text-[14px] font-mono uppercase tracking-widest text-accent font-black">Parent Age Bracket</label>
                <Select value={formData.answers['q_parent_age'] || undefined} onValueChange={(val) => setFormData({...formData, answers: {...formData.answers, q_parent_age: val}})}>
                  <SelectTrigger className={cn("h-16 text-lg rounded-2xl transition-all", bgInput, borderPrimary, textPrimary)}>
                    <SelectValue placeholder="Select parent age..." />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", theme === 'light' ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    <SelectItem value="under_55" className="text-base py-3 cursor-pointer">Under 55 (Green Zone)</SelectItem>
                    <SelectItem value="55_65" className="text-base py-3 cursor-pointer">55 - 65 (Orange Zone)</SelectItem>
                    <SelectItem value="65_plus" className="text-base py-3 cursor-pointer">65 or above (Red Zone)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button onClick={handleNext} className="btn-premium-primary w-full h-24 !rounded-[2.5rem] flex items-center justify-center gap-6 group shadow-2xl mt-12 transition-all hover:scale-[1.01] active:scale-[0.99]">
              <span className="font-black tracking-[0.3em] uppercase text-base">Initialize Secure Assessment</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12 flex-grow text-left">
            <div className={cn("flex items-center justify-between mb-8 border-b pb-8", borderPrimary)}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-accent font-black">Customizing Advisory Path</span>
              </div>
              <span className={cn("text-[14px] font-mono font-black", textMuted)}>STEP 02 OF 02</span>
            </div>

            <div className="space-y-12 max-h-[500px] overflow-y-auto pr-8 custom-scrollbar">
              {getActiveQuestions().map((q) => (
                <div key={q.id} className="space-y-6">
                  <div className="space-y-2">
                    <label className={cn("text-2xl font-serif leading-tight block", textPrimary)}>{q.label}</label>
                    {q.description && <p className={cn("text-base italic leading-relaxed", textSecondary)}>{q.description}</p>}
                  </div>
                  
                  {q.type === 'radio_card' && (
                    <div className="grid gap-5">
                      {q.options?.map((opt: any) => (
                        <div key={opt.value} onClick={() => setFormData({...formData, answers: {...formData.answers, [q.id]: opt.value}})} className={cn("p-6 rounded-[1.5rem] border-2 transition-all cursor-pointer flex items-center justify-between group", formData.answers[q.id] === opt.value ? "bg-accent/10 border-accent text-white ring-4 ring-accent/5" : cn(theme === 'light' ? "bg-black/5" : "bg-white/5", borderPrimary, textSecondary, "hover:border-accent/40"))}>
                          <span className="text-lg font-bold">{opt.label}</span>
                          <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", formData.answers[q.id] === opt.value ? "border-accent" : (theme === 'light' ? "border-black/20" : "border-white/20"))}>
                            {formData.answers[q.id] === opt.value && <div className="w-3 h-3 rounded-full bg-accent" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {q.type === 'text' && (
                    <Textarea 
                      placeholder="Type your comprehensive response here..."
                      value={formData.answers[q.id] || ""}
                      onChange={(e) => setFormData({...formData, answers: {...formData.answers, [q.id]: e.target.value}})}
                      className={cn("min-h-[160px] text-lg rounded-[1.5rem] p-6 transition-all resize-none shadow-sm leading-relaxed", bgInput, borderPrimary, textPrimary, placeholderColor, "focus:border-accent/50")}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={cn("flex items-center gap-6 p-7 rounded-[2rem] border-2", theme === 'light' ? "bg-black/[0.04]" : "bg-white/[0.04]", borderPrimary)}>
              <Checkbox id="consent" checked={formData.consent} onCheckedChange={(val) => setFormData({...formData, consent: val as boolean})} className={cn("mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent h-7 w-7 rounded-lg", theme === 'light' ? "border-black/30" : "border-white/30")} />
              <label htmlFor="consent" className={cn("text-base leading-relaxed cursor-pointer select-none font-bold hover:text-accent transition-colors", textSecondary)}>I consent to the secure processing of my data for a comprehensive A-Z family protection assessment.</label>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <button onClick={() => setStep(1)} className="btn-premium-outline !h-24 !rounded-[2rem] text-[14px] uppercase tracking-[0.25em] font-black hover:bg-white/10 transition-all">Back</button>
              <button onClick={handleNext} disabled={!formData.consent || getActiveQuestions().some(q => q.required !== false && !formData.answers[q.id])} className="btn-premium-primary !h-24 !rounded-[2.5rem] flex items-center justify-center gap-5 group disabled:opacity-50 shadow-2xl transition-all">
                <span className="text-[14px] uppercase tracking-[0.25em] font-black">Generate Deep Brief</span>
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center text-center py-32">
            <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-[4px] border-accent/20 border-t-accent" />
              <ShieldCheck className="w-16 h-16 text-accent" />
            </div>
            <h3 className={cn("text-4xl font-serif mb-6 italic tracking-tight", textPrimary)}>Calibrating Advisory Intelligence...</h3>
            <p className={cn("text-[14px] font-mono tracking-[0.4em] uppercase animate-pulse font-black text-accent")}>Generating Comprehensive A-Z Report</p>
          </motion.div>
        )}

        {step === 4 && result && (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-12 flex-grow text-left">
            <div className={cn("flex items-center justify-between mb-8 border-b-2 pb-8", borderPrimary)}>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                <span className="text-[14px] font-mono uppercase tracking-[0.3em] text-emerald-500 font-black">Confidential Deep Brief Generated</span>
              </div>
              <div className="flex items-center gap-4 px-6 py-2.5 rounded-full bg-accent/10 border-2 border-accent/30 shadow-xl">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-[12px] font-mono text-accent uppercase font-black">{result.persona} ADVISORY</span>
              </div>
            </div>

            <div className={cn("p-12 rounded-[3.5rem] border-2 space-y-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden", theme === 'light' ? "bg-white border-black/10" : "bg-[#050914] border-white/10")}>
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />

              <div className="flex items-start gap-8 relative z-10">
                <AlertCircle className={cn("w-12 h-12 shrink-0 mt-1.5", result.urgency === 'CRITICAL' ? "text-red-500" : "text-accent")} />
                <div className="space-y-8">
                  <h4 className={cn("text-3xl font-serif tracking-tight leading-tight uppercase", textPrimary)}>
                    {result.urgency} RISK PROFILE IDENTIFIED
                  </h4>
                  
                  <div className="grid gap-12">
                    {result.fullSummary.split('\n\n').map((part: string, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className={cn("text-lg leading-relaxed font-light", textSecondary)}
                        dangerouslySetInnerHTML={{ 
                          __html: part.replace(/\*\*(.*?)\*\*/g, '<b class="text-accent font-black uppercase tracking-wider">$1</b>')
                                      .replace(/â— /g, '<span class="text-accent mr-2">â— </span>') 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={cn("pt-12 border-t-2 grid gap-8 relative z-10", borderPrimary)}>
                <h5 className="text-[16px] font-mono uppercase tracking-[0.3em] text-accent font-black flex items-center gap-3">
                  <Info className="w-6 h-6" />
                  Immediate A-Z Action Items:
                </h5>
                <div className="grid gap-6">
                  {result.recommendations.map((rec: any, i: number) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className={cn("flex gap-6 p-8 rounded-[2rem] border-2 transition-all hover:translate-x-2 shadow-sm hover:shadow-2xl", theme === 'light' ? "bg-[#FDFCFB] border-black/5" : "bg-white/5 border-white/5 hover:bg-white/[0.08]")}>
                      <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 border-2 border-accent/20">
                        <span className="text-xl text-accent font-black">{i+1}</span>
                      </div>
                      <div className="space-y-3">
                        <p className={cn("text-xl font-black tracking-tight", textPrimary)}>{rec.title}</p>
                        <p className={cn("text-base leading-relaxed font-medium", textSecondary)}>{rec.description}</p>
                        <div className="flex items-center gap-3 pt-2">
                          <ShieldCheck className="w-5 h-5 text-accent" />
                          <p className="text-[13px] font-mono uppercase tracking-[0.2em] text-accent font-black">Directive: {rec.action}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pb-10">
              <Button variant="outline" className="btn-premium-outline !h-24 !rounded-[2.5rem] gap-5 text-[14px] uppercase tracking-[0.3em] font-black group transition-all" onClick={() => window.open(result.pdfUrl)}>
                <FileText className="w-6 h-6 group-hover:text-accent transition-colors" /> Download Structural Brief (PDF)
              </Button>
              <Button className="btn-premium-primary !h-24 !rounded-[2.5rem] gap-5 text-[14px] uppercase tracking-[0.3em] font-black group shadow-[0_20px_50px_-10px_rgba(207,160,82,0.4)] transition-all" onClick={() => setStep(5)}>
                <Calendar className="w-6 h-6 group-hover:scale-125 transition-transform" /> Book A-Z Strategy Session
              </Button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
           <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-32">
             <div className="w-32 h-32 rounded-full bg-emerald-500/10 border-4 border-emerald-500/30 flex items-center justify-center mb-12 shadow-[0_0_80px_-10px_rgba(16,185,129,0.3)]">
               <CheckCircle2 className="w-16 h-16 text-emerald-500" />
             </div>
             <h3 className={cn("text-5xl font-serif mb-8 italic tracking-tight", textPrimary)}>Secure Line Established.</h3>
             <p className={cn("text-2xl font-light leading-relaxed mb-20 max-w-xl", textSecondary)}>Our senior advisory lead will contact you personally within 4 hours to initiate your private review session.</p>
             <button onClick={() => setStep(1)} className="btn-premium-outline !px-16 !py-6 rounded-[2rem] text-[14px] uppercase tracking-[0.3em] font-black hover:bg-accent hover:text-black transition-all">Terminate Secure Intake</button>
           </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-auto pt-16 border-t-2" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <span className={cn("text-[12px] font-mono uppercase tracking-[0.4em] font-black", textMuted)}>Verified Trusted Intake Process · PRIVATE & CONFIDENTIAL · NRI Trust Advisory Firm</span>
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
