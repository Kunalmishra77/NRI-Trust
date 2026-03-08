import PageHeader from "@/layouts/PageHeader";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "wouter";
import { ArrowRight, Trophy, Target, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";
import chennaiEstateImage from "@assets/image_1764307200659.png";
import taxShieldImage from "@assets/image_1764305789793.png";

export default function SuccessStories() {
  const highlightStats = [
    { value: "₹250Cr+", label: "Property Monitored", icon: Trophy },
    { value: "450+", label: "Legal Disputes Prevented", icon: Target },
    { value: "100%", label: "Client Confidentiality", icon: ShieldCheck }
  ];

  const caseStudies = [
    {
      title: "The Chennai Estate Recovery",
      scenario: "A multi-acre ancestral plot in suburban Chennai was being systematically encroached by local political elements while the family was based in New Jersey.",
      outcome: "NRI Trust's Rapid Response Unit established a physical perimeter, filed a formal Title Rectification, and negotiated a clean exit for the encroachers within 180 days.",
      stat: "₹18 Cr Asset Secured",
      image: chennaiEstateImage
    },
    {
      title: "The Singapore-Mumbai Tax Shield",
      scenario: "An HNI family in Singapore received a major Section 148 notice for historic unreported capital gains on mutual fund transfers from 2018.",
      outcome: "Our tax stewardship team reconstructed 6 years of financial data, established DTAA residency proof, and reduced the potential penalty by 85%.",
      stat: "₹45L Liability Saved",
      image: taxShieldImage
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Success Stories"
        subtitle="Measurable outcomes and restored peace of mind for global Indian families."
        breadcrumbs={[{ label: "The Firm" }, { label: "Success Stories" }]}
      />

      {/* ─── HIGHLIGHT STATS ─── */}
      <section className="pt-24 pb-12 bg-background relative overflow-hidden">
        <div className="max-container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={luxuryStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlightStats.map((stat, i) => (
              <motion.div key={i} variants={elegantFadeUp} className="p-10 glass-panel rounded-[2.5rem] border-white/5 text-center bg-white/[0.01] hover:border-accent/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-8 group-hover:border-accent/40 shadow-inner transition-all">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CASE STUDY NARRATIVES ─── */}
      <section className="section-padding bg-[#050806] relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="max-container relative z-10">
          <div className="space-y-32">
            {caseStudies.map((study, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={elegantFadeUp}
                className={`grid lg:grid-cols-12 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <span className="accent-label text-accent">Real-World Outcome 0{i + 1}</span>
                  <h2 className="section-title text-white mb-8">{study.title}</h2>
                  <div className="space-y-8 mb-12">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 font-bold">The Challenge</div>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">{study.scenario}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-3 font-bold">The Stewardship Solution</div>
                      <p className="text-lg text-white/90 font-light leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                  <div className="p-6 glass-panel rounded-2xl border-accent/20 bg-accent/5 w-fit flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span className="text-xl font-serif text-white">{study.stat}</span>
                  </div>
                </div>
                <div className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Final CTA */}
      <section className="section-padding bg-[#050806] relative overflow-hidden border-t border-white/[0.05] text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(160_30%_15%_/_0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantFadeUp}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent/40" />
              <span className="accent-label !mb-0">Join Our Families</span>
              <div className="h-[1px] w-12 bg-accent/40" />
            </div>
            <h2 className="display-title mb-10">
              Become a <br />
              <span className="text-gradient-gold italic">Protected Portfolio.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Book a confidential 30-minute review session to discuss how we can secure your family's specific assets in India.
            </p>
            <Link href="/contact">
              <button className="btn-premium-primary min-w-[320px] group">
                <span>Book Private Review</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}