import PageHeader from "@/layouts/PageHeader";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { CalendarCheck, FileSearch, UserCheck, ShieldCheck, Clock, MapPin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const bookingExpectations = [
  {
    icon: CalendarCheck,
    title: "Consultation Scheduled",
    desc: "Within 4 business hours, a Senior Portfolio Lead reaches out to confirm your private 30-minute review session."
  },
  {
    icon: FileSearch,
    title: "Review Assessment",
    desc: "We perform a preliminary high-level audit of your family context to ensure the session is highly technical and productive."
  },
  {
    icon: UserCheck,
    title: "Expert Strategy Session",
    desc: "A confidential discussion to map your Indian asset footprint and identify immediate risk vectors or compliance gaps."
  },
  {
    icon: ShieldCheck,
    title: "Tier Recommendation",
    desc: "Post-session, you receive a detailed protection plan with a specific service tier recommendation for your units."
  }
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1: DARK HERO */}
      <div className="section-dark">
        <PageHeader
          title="Book Your Free Review Session"
          subtitle="We help NRI families protect their parents' financial life in India — insurance, bank accounts, property, and legal documents."
          breadcrumbs={[{ label: "Direct Channel" }]}
        />
      </div>
      
      {/* SECTION 2: LIGHT CONTACT FORM */}
      <ContactSection theme="light" />

      {/* SECTION 3: DARK WHAT HAPPENS NEXT */}
      <section className="section-padding section-dark border-t border-white/[0.05]">
        <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
        
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantFadeUp}
            className="text-center mb-24 md:mb-32"
          >
            <span className="accent-label text-accent">Post-Submission Steps</span>
            <h2 className="section-title text-[#FDFCFB]">
              The Journey to <br />
              <span className="text-gradient-gold italic">Complete Control.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={luxuryStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          >
            {bookingExpectations.map((step, idx) => (
              <motion.div
                key={idx}
                variants={elegantFadeUp}
                className="group p-10 flex flex-col relative premium-card bg-white/[0.01] border border-white/[0.03] rounded-[2.5rem] hover:border-accent/20 transition-all duration-500 shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#050914] border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                  <step.icon className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-[#FDFCFB] mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/90 font-light leading-relaxed group-hover:text-white transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LIGHT GLOBAL CHANNELS */}
      <section className="py-24 section-light relative overflow-hidden border-y border-black/[0.05]">
        <div className="max-container flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-1000">
          {[
            { icon: Clock, text: "24/7 Priority Support" },
            { icon: ShieldCheck, text: "FEMA & RBI Compliant" },
            { icon: MapPin, text: "HQ: Nariman Point, Mumbai" },
            { icon: Globe, text: "Serving 40+ Jurisdictions" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

