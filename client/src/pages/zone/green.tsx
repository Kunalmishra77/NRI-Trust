import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Scale, Landmark, FileText, Heart, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";
import HeroForm from "@/components/HeroForm";

const EASE = [0.16, 1, 0.3, 1] as const;
const COLOR = "#22c55e";
const CONFIG = PHASE_CONFIG.green;

const QUESTIONS = [
  {
    q: "Do your parents have health insurance that covers major surgery?",
    risk: "One hospitalisation can wipe out years of savings.",
  },
  {
    q: "Is there a registered Will in place?",
    risk: "Property disputes can tie up assets for years in court.",
  },
  {
    q: "Have you set up Power of Attorney to act on their behalf from abroad?",
    risk: "You cannot sign, transfer, or manage anything remotely.",
  },
  {
    q: "Are all bank accounts mapped with correct, updated nominees?",
    risk: "Accounts get frozen. Family cannot access funds.",
  },
  {
    q: "Is there a documented emergency plan your family can follow?",
    risk: "Panic leads to expensive, irreversible mistakes.",
  },
];

const PROBLEMS = [
  {
    title: '"We thought we had time."',
    desc: "The most common thing families say after a crisis. By then, the Will is missing, accounts are frozen, and months of legal work lie ahead.",
  },
  {
    title: "Insurance exists. But it's the wrong kind.",
    desc: "Most families discover their parents' policy has inadequate coverage, wrong nominees, and outdated terms — only when a claim is filed.",
  },
  {
    title: "Documents scattered across three cities.",
    desc: "Property papers in Mumbai, bank documents in Pune, insurance policies in a cupboard no one can access. This is the norm, not the exception.",
  },
];

const SERVICES = [
  { icon: Heart,     title: "Insurance Adequacy Check",    desc: "We review every policy, fix nominees, and ensure coverage matches your parents' current needs." },
  { icon: Scale,     title: "Will Registration",           desc: "We draft and register your parents' Will so there is no confusion — or dispute — about who gets what." },
  { icon: FileText,  title: "Power of Attorney",           desc: "We set up a legally valid POA so you can manage everything from abroad, without a single India visit." },
  { icon: Landmark,  title: "Bank Account Mapping",        desc: "We identify every account, fix nominees, and ensure KYC is current — before accounts get frozen." },
];

const OUTCOMES = [
  { stat: "20 min",   label: "Free audit — we identify every gap" },
  { stat: "98%",      label: "Disputes prevented with a registered Will" },
  { stat: "100%",     label: "KYC updated across all managed accounts" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: EASE, delay },
  };
}

export default function ZoneGreen() {
  const { selectZone } = useUser();

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-[#1A1A1A]">

      {/* ── HERO BAND ─────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 bg-[#050914] overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] opacity-60" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLOR }} />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.45em]" style={{ color: COLOR }}>
                  Green Zone · Planning & Prevention · Parents 55–65
                </span>
              </motion.div>

              <motion.h1 {...fadeUp(0.1)}
                className="text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
                You have time.
                <br />
                <span style={{ color: COLOR }}>Use it well.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)}
                className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-medium">
                The best time to protect your parents' future is before anything goes wrong.
                That time is right now — and the cost of waiting is far greater than the cost of starting.
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="px-8 py-4 rounded-full font-black text-sm tracking-wide flex items-center gap-3 text-[#050914]"
                    style={{ backgroundColor: COLOR }}>
                    Start Free Audit <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/">
                  <button className="px-8 py-4 rounded-full font-bold text-sm border text-white/60 border-white/15 hover:border-white/30 transition-all">
                    ← Back to Homepage
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div {...fadeUp(0.2)} className="hidden lg:flex justify-end">
              <HeroForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── REALITY CHECK ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-4" style={{ color: COLOR }}>
              Reality Check
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1A1A1A]">
              5 questions every NRI<br />
              <span className="text-[#1A1A1A]/30 font-light italic">should be able to answer.</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {QUESTIONS.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="flex gap-6 p-7 rounded-2xl border border-[#1A1A1A]/[0.06] bg-[#FDFCFB] hover:border-[#22c55e]/20 transition-all duration-400">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-sm"
                  style={{ backgroundColor: COLOR + "12", color: COLOR }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-black text-[#1A1A1A] text-base md:text-lg mb-2 leading-snug">{item.q}</p>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[#1A1A1A]/45 text-sm font-medium leading-relaxed">
                      If not: {item.risk}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050914]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-4 text-white/30">
              What We See
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-white">
              The problems that only<br />
              <span style={{ color: COLOR }}>show up during a crisis.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: COLOR + "04", borderColor: COLOR + "15" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: COLOR + "15" }}>
                  <AlertTriangle className="w-4 h-4" style={{ color: COLOR }} />
                </div>
                <h3 className="text-white font-black text-lg mb-3 leading-tight">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-4" style={{ color: COLOR }}>
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1A1A1A]">
              What we set up first<br />
              <span className="text-[#1A1A1A]/30 font-light italic">for families in the Green Zone.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="flex gap-5 p-8 rounded-2xl border border-[#1A1A1A]/[0.06] bg-[#FDFCFB] hover:border-[#22c55e]/20 hover:shadow-lg transition-all duration-400 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400"
                  style={{ backgroundColor: COLOR + "10", border: "1px solid " + COLOR + "20" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = COLOR;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = COLOR + "10";
                  }}>
                  <s.icon className="w-5 h-5" style={{ color: COLOR }} />
                </div>
                <div>
                  <h3 className="font-black text-[#1A1A1A] text-lg mb-2">{s.title}</h3>
                  <p className="text-[#1A1A1A]/55 text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: COLOR + "06" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">
              What you get when you act now.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {OUTCOMES.map((o, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ color: COLOR }}>
                  {o.stat}
                </div>
                <p className="text-[#1A1A1A]/55 text-sm font-medium leading-relaxed">{o.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-6">
            {["FEMA Compliant", "40+ Jurisdictions", "500+ Families Protected"].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: COLOR }} />
                <span className="text-[#1A1A1A]/60 text-sm font-bold">{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050914]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8"
              style={{ backgroundColor: COLOR + "15", border: "1px solid " + COLOR + "30" }}>
              <ShieldCheck className="w-7 h-7" style={{ color: COLOR }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] mb-6">
              Start with a free review.<br />
              <span style={{ color: COLOR }}>Takes 20 minutes.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto font-medium">
              We review your parents' insurance, banking, legal documents, and property — then tell you exactly what needs to be done, in order of urgency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 rounded-full font-black text-sm tracking-wide flex items-center gap-3 text-[#050914]"
                  style={{ backgroundColor: COLOR }}>
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20learn%20more%20about%20Green%20Zone%20planning"
                target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 rounded-full font-bold text-sm flex items-center gap-3 border text-green-400 border-green-500/30 bg-green-500/10">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
