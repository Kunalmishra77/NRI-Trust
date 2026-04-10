import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import useMagnetic from "@/hooks/useMagnetic";
import { useUser, PHASE_CONFIG } from "@/context/UserContext";

export default function FinalCTA() {
  const magneticButtonRef = useMagnetic<HTMLButtonElement>();
  const { phase } = useUser();

  const phaseConfig = phase ? PHASE_CONFIG[phase] : null;
  const phaseColor = phaseConfig?.color || '#d4af37';
  const isRed = phase === 'red';
  const isOrange = phase === 'orange';

  // Phase-specific content
  const headline = phaseConfig ? (
    <>
      {isRed ? "Every Hour " : isOrange ? "Every Day " : "Don't Wait for a "}
      <br className="hidden md:block" />
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(to right, ${phaseColor}, white, ${phaseColor})` }}
      >
        {isRed ? "Matters." : isOrange ? "Is Critical." : "Crisis to Act."}
      </span>
    </>
  ) : (
    <>
      Don't Wait for a <br className="hidden md:block" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">Crisis to Act.</span>
    </>
  );

  const subtext = phaseConfig
    ? phaseConfig.description + " Our team is standing by."
    : "Most families discover financial problems only during emergencies. Let us help you protect your parents' financial life before it's too late.";

  const ctaText = phaseConfig?.ctaText || 'Get Free Consultation';
  const urgencyText = phaseConfig?.ctaUrgency || '100% Secure · Free Consultation';

  return (
    <section className="relative py-16 md:py-20 bg-[#050914] overflow-hidden border-t border-white/10">
      {/* Phase-colored background accent */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px]"
          style={{
            background: `linear-gradient(to right, transparent, ${phaseColor}30, transparent)`,
            boxShadow: `0 0 100px ${phaseColor}15`,
          }}
        />
        <div className="absolute top-0 right-0 w-[30vw] h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${phaseColor}04 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Narrative */}
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <ShieldCheck className="w-4 h-4" style={{ color: phaseColor }} />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]" style={{ color: phaseColor }}>
                {isRed ? 'Emergency Response' : isOrange ? 'Active Protection' : 'Take Action Now'}
              </span>
              {/* Urgency pulse for red */}
              {isRed && (
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: phaseColor }}
                />
              )}
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05] mb-6">
              {headline}
            </h2>

            <p className="text-lg text-white/40 font-medium max-w-xl leading-relaxed">
              {subtext}
            </p>

            {/* Phase-specific trust stats */}
            {phase && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start"
              >
                {[
                  isRed
                    ? { val: '2hr', label: 'Response time' }
                    : { val: '500+', label: 'Families protected' },
                  isRed
                    ? { val: '24/7', label: 'Support active' }
                    : { val: '98%', label: 'Issues resolved' },
                  { val: '₹250Cr+', label: 'Assets managed' },
                ].map(stat => (
                  <div key={stat.label} className="flex flex-col items-center lg:items-start">
                    <span className="font-black text-2xl text-white" style={{ color: phaseColor }}>{stat.val}</span>
                    <span className="text-white/30 text-xs font-mono uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: CTAs */}
          <div className="shrink-0 flex flex-col items-center gap-4 w-full lg:w-auto">

            {/* Primary CTA */}
            <Link href="/contact">
              <motion.button
                ref={magneticButtonRef}
                whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${phaseColor}25` }}
                whileTap={{ scale: 0.98 }}
                className="text-[#050914] px-12 py-6 rounded-full font-black text-[14px] uppercase tracking-widest flex items-center gap-4 shadow-2xl transition-all duration-500 overflow-hidden relative group mx-auto lg:mx-0"
                style={{ backgroundColor: phaseColor, boxShadow: `0 8px 30px ${phaseColor}20` }}
              >
                <span className="relative z-10">{ctaText}</span>
                {isRed ? (
                  <Zap className="w-5 h-5 relative z-10 group-hover:scale-125 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                )}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-0"
                />
              </motion.button>
            </Link>

            {/* WhatsApp secondary CTA */}
            {isRed ? (
              <motion.a
                href={`https://wa.me/919999999999?text=${encodeURIComponent('Hello NRI Trust, I need assistance.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full border text-sm font-bold transition-all duration-400"
                style={{
                  borderColor: 'rgba(34,197,94,0.35)',
                  backgroundColor: 'rgba(34,197,94,0.08)',
                  color: '#4ade80',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                {isRed ? 'Emergency WhatsApp Line' : 'Message on WhatsApp'}
                {isRed && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                )}
              </motion.a>
            ) : null}

            <div className="flex items-center gap-6 opacity-30">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white">100% Secure</span>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: phaseColor }} />
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white">{urgencyText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
