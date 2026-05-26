import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Lock, Globe, ChevronRight, CheckCircle2, ShieldCheck,
  AlertCircle, FileText, Calendar, Info, TrendingDown, TrendingUp, Minus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSESSMENT_ENGINE } from "../../../shared/assessment-engine";
import type { Persona } from "../../../shared/assessment-engine";

// ─── ERROR BOUNDARY ───────────────────────────────────────────────────────────

class AssessmentErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(e: any, info: any) { console.error("ASSESSMENT_CRASH:", e, info); }
  render() {
    if (this.state.hasError) return (
      <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-3xl text-center">
        <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-serif text-white mb-3">Session Reset Required</h2>
        <p className="text-white/60 text-sm mb-8">A synchronisation error occurred. Please restart the intake.</p>
        <button onClick={() => window.location.reload()} className="btn-premium-primary px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest">Restart</button>
      </div>
    );
    return this.props.children;
  }
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Singapore",
  "UAE", "Germany", "Netherlands", "New Zealand", "Other"
];

const RISK_STATUS_CONFIG = {
  PROTECTED: { label: "Protected", color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/20", icon: CheckCircle2 },
  AT_RISK:   { label: "At Risk",   color: "text-red-400",     bg: "bg-red-500/10 border-red-400/20",   icon: TrendingDown },
  REVIEW:    { label: "Review",    color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-400/20", icon: Minus }
};

const PRIORITY_CONFIG = {
  CRITICAL: { color: "text-red-400",   bg: "bg-red-500/10 border-red-400/30",   dot: "bg-red-500" },
  HIGH:     { color: "text-amber-400", bg: "bg-amber-500/10 border-amber-400/30", dot: "bg-amber-500" },
  MEDIUM:   { color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-400/30", dot: "bg-yellow-500" }
};

// ─── ASSESSMENT CONTENT ───────────────────────────────────────────────────────

function AssessmentContent({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", country: "", parentLocation: "",
    answers: {} as Record<string, string>,
    consent: false
  });
  const [result, setResult] = useState<any>(null);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const isLight = theme === 'light';
  const textPrimary   = isLight ? "text-[#1A1A1A]"      : "text-white";
  const textSecondary = isLight ? "text-[#1A1A1A]/75"   : "text-white/75";
  const textMuted     = isLight ? "text-[#1A1A1A]/45"   : "text-white/45";
  const borderBase    = isLight ? "border-black/10"      : "border-white/10";
  const bgInput       = isLight ? "bg-[#FDFCFB]"        : "bg-background/50";
  const bgCard        = isLight ? "bg-black/[0.03]"      : "bg-white/[0.03]";
  const placeholder   = isLight ? "placeholder:text-black/35" : "placeholder:text-white/35";

  const getActiveQuestions = () => {
    const age = formData.answers['q_parent_age'];
    let persona: Persona = 'GREEN';
    if (age === '55_65') persona = 'ORANGE';
    if (age === '65_plus') persona = 'RED';
    return (ASSESSMENT_ENGINE.questions as any[]).filter(q =>
      q.visibility.includes(persona) && q.id !== 'q_parent_age'
    );
  };

  const allStep2Answered = () => {
    return getActiveQuestions()
      .filter(q => q.required !== false)
      .every(q => formData.answers[q.id] && formData.answers[q.id].trim() !== '');
  };

  const handleNext = () => {
    setApiError(null);
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.country || !formData.answers['q_parent_age']) return;
      setStep(2);
    } else if (step === 2) {
      submitAssessment();
    }
  };

  const submitAssessment = async () => {
    setIsSubmitting(true);
    setStep(3);
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const ct = res.headers.get("content-type") || "";
      if (!res.ok || !ct.includes("application/json")) {
        setApiError("Server error. Please try again.");
        setStep(2);
        return;
      }
      const data = await res.json();
      if (data.success) {
        setResult(data.result);
        setAssessmentId(data.assessmentId);
        setTimeout(() => setStep(4), 2200);
      } else {
        setApiError(data.error || "Failed to generate report.");
        setStep(2);
      }
    } catch (e: any) {
      setApiError(`Connection error: ${e.message}`);
      setStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setAnswer = (id: string, val: string) =>
    setFormData(f => ({ ...f, answers: { ...f.answers, [id]: val } }));

  return (
    <div className="relative min-h-[500px] flex flex-col">

      {/* Persistent header */}
      <div className="mb-8">
        <h3 className={cn("text-2xl font-serif mb-2 tracking-tight", textPrimary)}>
          Family Protection <span className="text-gradient-gold italic">Assessment.</span>
        </h3>
        <p className={cn("text-xs font-light tracking-wide max-w-lg leading-relaxed", textSecondary)}>
          Proprietary intelligence engine evaluating structural vulnerabilities across legal, financial, and healthcare domains.
        </p>
      </div>

      {apiError && (
        <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs font-bold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{apiError}</span>
        </div>
      )}

      <AnimatePresence mode="wait">

        {/* ── STEP 1: Basic Info ── */}
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 flex-grow">
            <div className={cn("flex items-center justify-between border-b pb-6", borderBase)}>
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-black">Secure Intake — Step 01</span>
              </div>
              <div className={cn("flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest", textMuted)}>
                <Globe className="w-3.5 h-3.5" /> Serving 40+ Jurisdictions
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Principal Name</label>
                <Input required placeholder="Full Legal Name" value={formData.name}
                  onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                  className={cn("h-13 rounded-xl transition-all focus:border-accent/50", bgInput, borderBase, textPrimary, placeholder)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Confidential Email</label>
                <Input required type="email" placeholder="name@organization.com" value={formData.email}
                  onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                  className={cn("h-13 rounded-xl transition-all focus:border-accent/50", bgInput, borderBase, textPrimary, placeholder)} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Country of Residency</label>
                <Select value={formData.country} onValueChange={v => setFormData(f => ({ ...f, country: v }))}>
                  <SelectTrigger className={cn("h-13 rounded-xl", bgInput, borderBase, textPrimary)}>
                    <SelectValue placeholder="Where do you live?" />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", isLight ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    {COUNTRIES.map(c => <SelectItem key={c} value={c} className="cursor-pointer py-2.5">{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-accent font-black">Parent Age Bracket</label>
                <Select value={formData.answers['q_parent_age'] || ""} onValueChange={v => setAnswer('q_parent_age', v)}>
                  <SelectTrigger className={cn("h-13 rounded-xl", bgInput, borderBase, textPrimary)}>
                    <SelectValue placeholder="Select parent age..." />
                  </SelectTrigger>
                  <SelectContent className={cn("z-[300]", isLight ? "bg-white text-[#1A1A1A]" : "bg-[#0A0F0D] text-white border-white/10")}>
                    <SelectItem value="under_55" className="cursor-pointer py-2.5">Under 55 (Green Zone)</SelectItem>
                    <SelectItem value="55_65" className="cursor-pointer py-2.5">55 – 65 (Orange Zone)</SelectItem>
                    <SelectItem value="65_plus" className="cursor-pointer py-2.5">65 or above (Red Zone)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!formData.name.trim() || !formData.email.trim() || !formData.country || !formData.answers['q_parent_age']}
              className="btn-premium-primary w-full h-16 !rounded-2xl flex items-center justify-center gap-4 group shadow-xl mt-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="font-black tracking-[0.2em] uppercase text-xs">Initialize Secure Assessment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* ── STEP 2: Zone Questions ── */}
        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10 flex-grow text-left">
            <div className={cn("flex items-center justify-between border-b pb-6", borderBase)}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-black">Customising Advisory Path</span>
              </div>
              <span className={cn("text-[11px] font-mono font-black", textMuted)}>STEP 02 OF 02</span>
            </div>

            <div className="space-y-10 max-h-[460px] overflow-y-auto pr-4 custom-scrollbar">
              {getActiveQuestions().map(q => (
                <div key={q.id} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className={cn("text-lg font-serif leading-tight block", textPrimary)}>{q.label}</label>
                    {q.description && <p className={cn("text-[13px] italic leading-relaxed", textSecondary)}>{q.description}</p>}
                  </div>

                  {q.type === 'radio_card' && (
                    <div className="grid gap-3">
                      {q.options?.map((opt: any) => (
                        <div key={opt.value}
                          onClick={() => setAnswer(q.id, opt.value)}
                          className={cn(
                            "p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                            formData.answers[q.id] === opt.value
                              ? "bg-accent/10 border-accent"
                              : cn(bgCard, borderBase, "hover:border-accent/40")
                          )}>
                          <span className={cn("text-base font-bold", textPrimary)}>{opt.label}</span>
                          <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                            formData.answers[q.id] === opt.value ? "border-accent" : (isLight ? "border-black/20" : "border-white/20"))}>
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
                      onChange={e => setAnswer(q.id, e.target.value)}
                      className={cn("min-h-[90px] text-base rounded-xl p-4 resize-none", bgInput, borderBase, textPrimary, placeholder, "focus:border-accent/50")}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={cn("flex items-center gap-4 p-4 rounded-xl border", bgCard, borderBase)}>
              <Checkbox id="consent" checked={formData.consent}
                onCheckedChange={v => setFormData(f => ({ ...f, consent: v as boolean }))}
                className="data-[state=checked]:bg-accent data-[state=checked]:border-accent h-5 w-5 rounded" />
              <label htmlFor="consent" className={cn("text-xs leading-relaxed cursor-pointer select-none", textSecondary)}>
                I consent to the secure processing of my data for a comprehensive family protection assessment.
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setStep(1)} className="btn-premium-outline !h-14 !rounded-xl text-[11px] uppercase tracking-[0.2em] font-black">Back</button>
              <button
                onClick={handleNext}
                disabled={!formData.consent || !allStep2Answered()}
                className="btn-premium-primary !h-14 !rounded-xl flex items-center justify-center gap-3 group disabled:opacity-40 disabled:cursor-not-allowed shadow-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] font-black">Generate Brief</span>
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 3: Processing ── */}
        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-grow flex flex-col items-center justify-center text-center py-24">
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-accent/20 border-t-accent" />
              <ShieldCheck className="w-10 h-10 text-accent" />
            </div>
            <h3 className={cn("text-2xl font-serif mb-3 italic tracking-tight", textPrimary)}>Calibrating Intelligence...</h3>
            <p className={cn("text-[10px] font-mono tracking-[0.3em] uppercase animate-pulse font-black text-accent")}>Generating Comprehensive Report</p>
          </motion.div>
        )}

        {/* ── STEP 4: Results ── */}
        {step === 4 && result && (
          <motion.div key="s4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 flex-grow text-left">

            {/* Status bar */}
            <div className={cn("flex items-center justify-between border-b-2 pb-5", borderBase)}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-black">Brief Generated</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                <span className="text-[10px] font-mono text-accent uppercase font-black">{result.persona} ADVISORY · {result.urgency}</span>
              </div>
            </div>

            {/* Risk Snapshot */}
            {result.categoryRisks && (
              <div className={cn("p-5 rounded-2xl border", bgCard, borderBase)}>
                <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent font-black mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Risk Snapshot
                </h5>
                <div className="grid gap-2">
                  {Object.values(result.categoryRisks).map((cat: any, i: number) => {
                    const cfg = RISK_STATUS_CONFIG[cat.status as keyof typeof RISK_STATUS_CONFIG] || RISK_STATUS_CONFIG.REVIEW;
                    const Icon = cfg.icon;
                    return (
                      <div key={i} className={cn("flex items-center justify-between p-3 rounded-lg border text-xs", cfg.bg)}>
                        <span className={cn("font-semibold", textPrimary)}>{cat.label}</span>
                        <div className="flex items-center gap-1.5">
                          {cat.status !== 'PROTECTED' && <span className={cn("text-[10px]", cfg.color)}>{cat.detail}</span>}
                          <div className="flex items-center gap-1">
                            <Icon className={cn("w-3.5 h-3.5", cfg.color)} />
                            <span className={cn("font-black text-[10px] uppercase", cfg.color)}>{cfg.label}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Priority Action Plan */}
            {result.priorityActions && result.priorityActions.length > 0 && (
              <div className={cn("p-5 rounded-2xl border", isLight ? "bg-white border-black/5" : "bg-[#050914] border-white/5")}>
                <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent font-black mb-5 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Your Priority Action Plan
                </h5>
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                  {result.priorityActions.map((action: any, i: number) => {
                    const cfg = PRIORITY_CONFIG[action.priority as keyof typeof PRIORITY_CONFIG] || PRIORITY_CONFIG.MEDIUM;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                        className={cn("flex gap-4 p-4 rounded-xl border transition-all hover:translate-x-0.5", cfg.bg)}>
                        <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                          <div className={cn("w-2 h-2 rounded-full shrink-0", cfg.dot)} />
                          <span className={cn("text-[9px] font-mono font-black uppercase", cfg.color)}>{action.priority}</span>
                        </div>
                        <div className="space-y-1 min-w-0">
                          <p className={cn("text-sm font-black leading-tight", textPrimary)}>{action.action}</p>
                          <p className={cn("text-[11px] leading-relaxed", textSecondary)}>{action.why}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specific Recommendations */}
            {result.recommendations && result.recommendations.length > 0 && (
              <div className="space-y-3">
                <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent font-black flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Specific Findings
                </h5>
                {result.recommendations.map((rec: any, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    className={cn("flex gap-4 p-5 rounded-2xl border", isLight ? "bg-[#FDFCFB] border-black/5" : "bg-white/5 border-white/5")}>
                    <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 text-accent font-black text-sm">{i + 1}</div>
                    <div className="space-y-1.5">
                      <p className={cn("text-base font-black", textPrimary)}>{rec.title}</p>
                      <p className={cn("text-sm leading-relaxed", textSecondary)}>{rec.description}</p>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent font-black">Directive: {rec.action}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pb-2">
              <Button
                variant="outline"
                className="btn-premium-outline !h-14 !rounded-xl gap-3 text-[11px] uppercase tracking-[0.2em] font-black group"
                disabled={!result.pdfUrl}
                onClick={() => result.pdfUrl && window.open(result.pdfUrl, '_blank')}
              >
                <FileText className="w-4 h-4 group-hover:text-accent transition-colors" />
                {result.pdfUrl ? "Download PDF Brief" : "PDF Processing..."}
              </Button>
              <Button
                className="btn-premium-primary !h-14 !rounded-xl gap-3 text-[11px] uppercase tracking-[0.2em] font-black group shadow-xl"
                onClick={() => setStep(5)}
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Book Strategy Session
              </Button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 5: Confirmation ── */}
        {step === 5 && (
          <motion.div key="s5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-grow flex flex-col items-center justify-center text-center py-20">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mb-6 shadow-xl">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className={cn("text-3xl font-serif mb-4 italic tracking-tight", textPrimary)}>Line Established.</h3>
            <p className={cn("text-base font-light leading-relaxed mb-6 max-w-sm", textSecondary)}>
              Your brief has been sent to your email. Our advisory lead will contact you personally within 4 hours.
            </p>
            {result?.pdfUrl && (
              <button
                onClick={() => window.open(result.pdfUrl, '_blank')}
                className="btn-premium-primary px-8 py-3 rounded-xl text-[11px] uppercase tracking-[0.2em] font-black mb-4 flex items-center gap-2 mx-auto"
              >
                <FileText className="w-4 h-4" /> Download Your PDF Brief
              </button>
            )}
            <button onClick={() => { setStep(1); setResult(null); setAssessmentId(null); setFormData({ name: "", email: "", country: "", parentLocation: "", answers: {}, consent: false }); }}
              className="btn-premium-outline px-10 py-3 rounded-xl text-[12px] uppercase tracking-[0.2em] font-black">
              Close Intake
            </button>
          </motion.div>
        )}

      </AnimatePresence>

      <div className="text-center mt-auto pt-10">
        <span className={cn("text-[10px] font-mono uppercase tracking-[0.3em] font-black", textMuted)}>
          Verified Trusted Intake Process · PRIVATE · NRI Trust
        </span>
      </div>
    </div>
  );
}

export default function AssessmentFlow(props: { theme?: 'dark' | 'light' }) {
  return (
    <AssessmentErrorBoundary>
      <AssessmentContent {...props} />
    </AssessmentErrorBoundary>
  );
}
