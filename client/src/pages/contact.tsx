import PageHeader from "@/layouts/PageHeader";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import { CalendarCheck, FileSearch, UserCheck, ShieldCheck, Clock, MapPin } from "lucide-react";

const bookingExpectations = [
  {
    icon: CalendarCheck,
    title: "Priority Scheduling",
    desc: "Within 4 hours, a Senior Portfolio Lead reaches out to confirm your slot in your preferred timezone."
  },
  {
    icon: FileSearch,
    title: "Preliminary Audit",
    desc: "Our team conducts a high-level review of your domain requirements before the session starts."
  },
  {
    icon: UserCheck,
    title: "Digital Consultation",
    desc: "A private 30-minute session to map your family's Indian asset footprint and identify risk vectors."
  },
  {
    icon: ShieldCheck,
    title: "Fiduciary Roadmap",
    desc: "Following the session, you receive a custom stewardship tier recommendation for your legacy."
  }
];

export default function Contact() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Consultation Booking"
        subtitle="Secure your family's Indian legacy. Our advisory team coordinates the complexity."
        breadcrumbs={[{ label: "Direct Channel" }]}
      />
      
      <ContactSection />

      {/* ─── OPERATIONAL TRANSPARENCY ─── */}
      <section className="section-padding bg-[#050806] border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
        
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantFadeUp}
            className="text-center mb-24 md:mb-32"
          >
            <span className="accent-label">Post-Submission Protocol</span>
            <h2 className="section-title text-white">
              The Journey to <br />
              <span className="text-gradient-gold italic">Absolute Sovereignty.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={luxuryStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {bookingExpectations.map((step, idx) => (
              <motion.div
                key={idx}
                variants={elegantFadeUp}
                className="group p-10 flex flex-col relative bg-white/[0.01] border border-white/[0.03] rounded-[2.5rem] hover:border-accent/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                  <step.icon className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GLOBAL CHANNELS ─── */}
      <section className="py-24 bg-background relative overflow-hidden border-y border-white/[0.05]">
        <div className="max-container flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-1000">
          {[
            { icon: Clock, text: "24/7 Priority Support" },
            { icon: ShieldCheck, text: "FEMA Compliant" },
            { icon: MapPin, text: "HQ: Nariman Point, Mumbai" },
            { icon: Globe, text: "Serving 40+ Jurisdictions" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
