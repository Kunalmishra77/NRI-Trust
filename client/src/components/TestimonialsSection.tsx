import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import testimonial1 from "@assets/generated_images/Professional_woman_headshot_testimonial_ca34b4f9.png";
import testimonial2 from "@assets/generated_images/Professional_man_headshot_testimonial_c0227483.png";
import testimonial3 from "@assets/generated_images/Professional_consultant_headshot_testimonial_a7bea24e.png";
import { motion } from "framer-motion";
import { elegantFadeUp, luxuryStagger, useCountUp } from "@/motion/variants";

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
 const { ref, display } = useCountUp(end, 2.5);
 return (
  <div className="text-center group flex flex-col items-center">
   <div className="text-4xl md:text-5xl lg:text-7xl mb-4 font-serif font-medium text-[#F5F3EC] group-hover:text-[#D4AF37] transition-colors duration-500">
    <span ref={ref}>{display}</span>{suffix}
   </div>
   <div className="text-[10px] md:text-[11px] font-mono text-[#D4AF37]/60 uppercase tracking-[0.3em] font-semibold">{label}</div>
  </div>
 );
}

export default function TestimonialsSection() {
 const testimonials = [
  {
   name: "Priya Krishnamurthy",
   role: "Software Architect",
   location: "San Francisco, USA",
   image: testimonial1,
   quote: "Managing my father's taxation from 8,000 miles away used to be a source of constant anxiety. NRI Trust's advisory team took over the entire communication with the IT department. The result was a resolution that saved us months of paperwork and significant potential penalties.",
   outcome: "Resolved ₹4.5L complex tax demand",
  },
  {
   name: "Rajesh Sharma",
   role: "VP, Investment Banking",
   location: "Singapore",
   image: testimonial2,
   quote: "When my mother's health insurance claim was rejected for the fourth time, I felt helpless. NRI Trust intervened as our professional advocate, compiled the medical records correctly, and secured a full reimbursement within 14 days. This is the peace of mind money can't buy.",
   outcome: "Reversed ₹8L insurance rejection",
  },
  {
   name: "Anita Menon",
   role: "Strategy Consultant",
   location: "London, UK",
   image: testimonial3,
   quote: "Property encroachment is every NRI's worst nightmare. NRI Trust didn't just 'monitor' our family estate; they handled the legal coordination, police liaison, and on-ground verification that settled a multi-year dispute in months.",
   outcome: "Secured family estate in Chennai",
  },
 ];

 const stats = [
  { number: 400, suffix: "+", label: "Files Resolved" },
  { number: 40, suffix: "+", label: "Countries" },
  { number: 50, suffix: "Cr+", label: "Assets Guarded" },
  { number: 4.9, suffix: "/5", label: "Family Rating" },
 ];

 return (
  <section id="testimonials" className="py-24 md:py-32 bg-[#050814] relative overflow-hidden border-t border-white/[0.03]">
   <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="text-center mb-24 md:mb-32"
    >
     <div className="flex items-center justify-center gap-6 mb-8">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
      <span className="accent-label !mb-0 text-[#D4AF37]">Trust & Reputation</span>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
     </div>
     <h2 className="section-title text-[#F5F3EC] mb-8">
      The Families We <br className="hidden md:block" />
      <span className="text-gradient-gold italic font-light">Privately Advise.</span>
     </h2>
    </motion.div>

    {/* Testimonials Stack */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={luxuryStagger}
     className="space-y-16 lg:space-y-24 max-w-5xl mx-auto"
    >
     {testimonials.map((testimonial, index) => (
      <motion.div
       key={index}
       variants={elegantFadeUp}
       className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 ${
        index < testimonials.length - 1 ? "pb-16 lg:pb-24 border-b border-white/[0.05]" : ""
       }`}
      >
       {/* Profile Image */}
       <div className="flex-shrink-0 relative group perspective-1000">
        <Avatar className="w-24 h-24 lg:w-40 lg:h-40 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform-gpu group-hover:scale-[1.02] group-hover:rotate-y-6 transition-all duration-700 rounded-3xl bg-[#0B101E]">
         <AvatarImage src={testimonial.image} className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
         <AvatarFallback className="bg-[#0B101E] text-[#D4AF37] text-3xl font-serif rounded-3xl">{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div className="absolute -inset-6 bg-[#D4AF37]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-full" />
       </div>

       {/* Quote Content */}
       <div className="flex-1 text-center md:text-left">
        <div className="mb-6 opacity-40">
         <span className="text-7xl font-serif text-[#D4AF37] leading-none">&ldquo;</span>
        </div>
        <p className="text-2xl md:text-3xl lg:text-[32px] text-[#F5F3EC]/90 italic font-serif leading-relaxed mb-10 tracking-tight">
         {testimonial.quote}
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 premium-card p-6 rounded-2xl">
         <div>
          <div className="text-[17px] font-medium text-[#F5F3EC] mb-2">{testimonial.name}</div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]/60">
           {testimonial.role} <span className="mx-2 text-white/20">&middot;</span> {testimonial.location}
          </div>
         </div>

         <div className="hidden md:block w-px h-12 bg-white/10" />

         <div className="inline-flex items-center justify-center md:justify-start gap-4 bg-[#10B981]/5 border border-[#10B981]/20 px-6 py-4 rounded-xl shadow-inner ml-auto md:ml-0">
          <Check className="w-5 h-5 text-[#10B981]" />
          <span className="text-[13px] font-medium text-[#10B981] tracking-wide uppercase font-mono">{testimonial.outcome}</span>
         </div>
        </div>
       </div>
      </motion.div>
     ))}
    </motion.div>

    {/* Global Statistics */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={elegantFadeUp}
     className="mt-32 pt-24 border-t border-white/[0.05] relative"
    >
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 max-w-6xl mx-auto relative z-10">
      {stats.map((stat, i) => (
       <StatCounter key={i} end={stat.number} suffix={stat.suffix} label={stat.label} />
      ))}
     </div>
    </motion.div>
   </div>
  </section>
 );
}
