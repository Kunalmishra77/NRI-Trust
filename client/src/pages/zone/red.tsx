import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Scale, Landmark, FileText, Zap, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { useUser } from "@/context/UserContext";
import HeroForm from "@/components/HeroForm";

const EASE = [0.16, 1, 0.3, 1] as const;
const COLOR = "#ef4444";

const QUESTIONS = [
  {
    q: "Can your family access bank funds within 24 hours right now?",
    risk: "Frozen accounts leave families unable to pay for medical care, funerals, or basic expenses.",
  },
  {
    q: "Is there a registered Will — and do you know where it is?",
    risk: "Without a registered Will, property disputes begin immediately and can last decades.",
  },
  {
    q: "Has an insurance claim been filed? Is it being actively followed up?",
    risk: "Claims stall without someone pushing them. Insurers exploit every technical gap.",
  },
  {
    q: "Is there a legal representative managing matters on the ground in India?",
    risk: "Courts, banks, and government offices require physical presence. Remote management fails.",
  },
  {
    q: "Do you have a succession certificate or probate in process?",
    risk: "Without legal authority, assets cannot be transferred — regardless of what the Will says.",
  },
];

const PROBLEMS = [
  {
    title: "Bank accounts frozen. Family has no money.",
    desc: "The most common emergency we handle. Without succession certificates and the right documentation, banks will not release funds — even for urgent medical needs.",
  },
  {
    title: "Insurance rejected at the worst possible moment.",
    desc: "Claim denied. Wrong nominee on file. Document missing. Procedure not followed. Our team fights these rejections and recovers settlements families were told were impossible.",
  },
  {
    title: "Property dispute started the day after the passing.",
    desc: "Relatives, neighbours, or tenants moved fast. Without a registered Will and immediate legal action, property that took a lifetime to build gets locked in courts for years.",
  },
];

const SERVICES = [
  { icon: Zap,       title: "Emergency Bank Access",         desc: "We file for succession certificates, coordinate with banks, and get your family access to funds as fast as legally possible — often within days." },
  { icon: Scale,     title: "Legal & Probate Management",    desc: "We handle court filings, probate applications, legal notices, and succession paperwork — so your family doesn't have to navigate this alone." },
  { icon: FileText,  title: "Insurance Claim Recovery",      desc: "We fight rejected and stalled claims. Our team knows exactly which documents to produce and which arguments work with every major insurer." },
  { icon: Landmark,  title: "Asset Mapping & Estate Control", desc: "We locate every account, property, and asset — then build a complete picture so nothing is missed, disputed, or lost in the transition." },
];

const OUTCOMES = [
  { stat: "2 hr",  label: "Emergency response time — day or night" },
  { stat: "24/7",  label: "Support available across all time zones" },
  { stat: "₹250Cr+", label: "In contested assets recovered for families" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: EASE, delay },
  };
}

export default function ZoneRed() {
  const { selectZone } = useUser();

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-[#1A1A1A]">

      {/* ── HERO BAND ─────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 bg-[#050914] overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(239,68,68,0.1) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050914_100%)] opacity-60" />

        {/* Urgency pulse */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 40% 30% at 20% 60%, rgba(239,68,68,0.06) 0%, transparent 60%)" }}
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: COLOR }}
                />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.45em]" style={{ color: COLOR }}>
                  Red Zone · Critical Care · Immediate Support
                </span>
              </motion.div>

              <motion.h1 {...fadeUp(0.1)}
                className="text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
                We're here.
                <br />
                <span style={{ color: COLOR }}>Right now.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)}
                className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-medium">
                Every hour matters. Our team responds within 2 hours — 24/7 — to handle every
                legal, financial, and administrative crisis you are facing from abroad.
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
                <a href="https://wa.me/919999999999?text=URGENT%3A%20I%20need%20emergency%20support%20for%20my%20parents"
                  target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="px-8 py-4 rounded-full font-black text-sm tracking-wide flex items-center gap-3 text-white"
                    style={{ backgroundColor: COLOR }}>
                    <Zap className="w-4 h-4" />
                    Get Emergency Support Now
                  </motion.button>
                </a>
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="px-8 py-4 rounded-full font-bold text-sm flex items-center gap-3 border text-white/60 border-white/15 hover:border-white/30 transition-all">
                    <Phone className="w-4 h-4" />
                    Schedule Urgent Call
                  </motion.button>
                </Link>
                <Link href="/">
                  <button className="px-8 py-4 rounded-full font-bold text-sm border text-white/40 border-white/10 hover:border-white/20 transition-all">
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
              Immediate Assessment
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1A1A1A]">
              5 things we need to<br />
              <span className="text-[#1A1A1A]/30 font-light italic">know about your situation.</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {QUESTIONS.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="flex gap-6 p-7 rounded-2xl border border-[#1A1A1A]/[0.06] bg-[#FDFCFB] hover:border-red-500/20 transition-all duration-400">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-sm"
                  style={{ backgroundColor: COLOR + "12", color: COLOR }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-black text-[#1A1A1A] text-base md:text-lg mb-2 leading-snug">{item.q}</p>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
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
              What Families Face
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-white">
              The crises we resolve<br />
              <span style={{ color: COLOR }}>every single week.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: COLOR + "04", borderColor: COLOR + "18" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: COLOR + "18" }}>
                  <Zap className="w-4 h-4" style={{ color: COLOR }} />
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
              Emergency Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1A1A1A]">
              What we activate immediately<br />
              <span className="text-[#1A1A1A]/30 font-light italic">for families in crisis.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="flex gap-5 p-8 rounded-2xl border border-[#1A1A1A]/[0.06] bg-[#FDFCFB] hover:border-red-500/20 hover:shadow-lg transition-all duration-400 group">
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
              Our commitment to you right now.
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
              Don't wait another hour.<br />
              <span style={{ color: COLOR }}>We respond in 2 hours.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto font-medium">
              Call, WhatsApp, or book a call. Our emergency response team picks up the case immediately and begins working on your behalf within the hour.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919999999999?text=URGENT%3A%20I%20need%20emergency%20NRI%20Trust%20support"
                target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 rounded-full font-black text-sm tracking-wide flex items-center gap-3 text-white"
                  style={{ backgroundColor: COLOR }}>
                  <Zap className="w-4 h-4" />
                  Emergency WhatsApp Now
                </motion.button>
              </a>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 rounded-full font-bold text-sm flex items-center gap-3 border text-red-400 border-red-500/30 bg-red-500/10">
                  <MessageCircle className="w-4 h-4" />
                  Schedule Urgent Call
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
