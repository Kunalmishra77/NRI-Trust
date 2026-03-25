import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import testimonial1 from "@assets/generated_images/Professional_woman_headshot_testimonial_ca34b4f9.png";
import testimonial2 from "@assets/generated_images/Professional_man_headshot_testimonial_c0227483.png";
import testimonial3 from "@assets/generated_images/Professional_consultant_headshot_testimonial_a7bea24e.png";
import { motion } from "framer-motion";
import { cardReveal, gridStagger, useCountUp } from "@/motion/variants";
import { cn } from "@/lib/utils";

function StatCounter({ end, suffix, label, theme }: { end: number; suffix: string; label: string; theme?: 'dark' | 'light' }) {
 const { ref, display } = useCountUp(end, 2.5);
 return (
  <div className="text-center group flex flex-col items-center">
   <div className={cn(
    "text-4xl md:text-5xl lg:text-7xl mb-4 font-serif font-medium transition-colors duration-500",
    theme === 'light' ? "text-[#1A1A1A] group-hover:text-[#D4AF37]" : "text-[#FDFCFB] group-hover:text-[#D4AF37]"
   )}>
    <span ref={ref}>{display}</span>{suffix}
   </div>
   <div className="text-[10px] md:text-[11px] font-mono text-[#D4AF37]/60 uppercase tracking-[0.3em] font-semibold">{label}</div>
  </div>
 );
}

export default function TestimonialsSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
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
  <section id="testimonials" className={cn(
   "py-24 md:py-32 relative overflow-hidden transition-colors duration-500",
   theme === 'light' ? "section-light" : "section-dark"
  )}>
   {theme === 'dark' && (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
   )}

   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={cardReveal}
     className="text-center mb-24 md:mb-32"
    >
     <div className="flex items-center justify-center gap-6 mb-8">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
      <span className="accent-label !mb-0 text-[#D4AF37]">Trust & Reputation</span>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
     </div>
     <h2 className={cn(
      "section-title mb-8",
      theme === 'light' ? "text-[#1A1A1A]" : "text-[#FDFCFB]"
     )}>
      The Families We <br className="hidden md:block" />
      <span className="text-gradient-gold italic font-light">Privately Advise.</span>
     </h2>
    </motion.div>

    {/* Testimonials Stack */}
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-50px" }}
     variants={gridStagger}
     className="space-y-16 lg:space-y-24 max-w-5xl mx-auto"
    >
     {testimonials.map((testimonial, index) => (
      <motion.div
       key={index}
       variants={cardReveal}
       className={cn(
        "flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16",
        index < testimonials.length - 1 ? (theme === 'light' ? "pb-16 lg:pb-24 border-b border-black/[0.05]" : "pb-16 lg:pb-24 border-b border-white/[0.05]") : ""
       )}
      >
       {/* Profile Image */}
       <div className="flex-shrink-0 relative group">
        <Avatar className={cn(
         "w-24 h-24 lg:w-36 lg:h-36 border transition-all duration-500 rounded-2xl",
         theme === 'light' ? "border-black/5 bg-white shadow-sm group-hover:border-[#D4AF37]/20" : "border-white/10 bg-[#0B101E] group-hover:border-[#D4AF37]/20"
        )}>
         <AvatarImage src={testimonial.image} className="object-cover" />
         <AvatarFallback className={cn(
          "text-3xl font-serif rounded-2xl",
          theme === 'light' ? "bg-accent/10 text-accent" : "bg-[#0B101E] text-[#D4AF37]"
         )}>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
       </div>

       {/* Quote Content */}
       <div className="flex-1 text-center md:text-left">
        <div className={cn(
         "border-l-2 pl-8 mb-10",
         theme === 'light' ? "border-[#D4AF37]/30" : "border-[#D4AF37]/25"
        )}>
         <p className={cn(
          "text-2xl md:text-3xl lg:text-[30px] italic font-serif leading-relaxed tracking-tight",
          theme === 'light' ? "text-[#1A1A1A]/85" : "text-[#FDFCFB]/85"
         )}>
          {testimonial.quote}
         </p>
        </div>

        <div className={cn(
         "flex flex-col md:flex-row md:items-center gap-6 md:gap-8 premium-card p-6 rounded-2xl shadow-sm",
         theme === 'light' ? "bg-white border-black/5" : "bg-[#0D1322] border-white/5"
        )}>
         <div>
          <div className={cn(
           "text-[17px] font-medium mb-2",
           theme === 'light' ? "text-[#1A1A1A]" : "text-[#FDFCFB]"
          )}>{testimonial.name}</div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]/60">
           {testimonial.role} <span className="mx-2 text-white/20">&middot;</span> {testimonial.location}
          </div>
         </div>

         <div className={cn(
          "hidden md:block w-px h-12",
          theme === 'light' ? "bg-black/10" : "bg-white/10"
         )} />

         <div className="inline-flex items-center justify-center md:justify-start gap-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-5 py-3 rounded-xl ml-auto md:ml-0">
          <Check className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[12px] font-medium text-[#D4AF37] tracking-wider uppercase font-mono">{testimonial.outcome}</span>
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
     variants={cardReveal}
     className={cn(
      "mt-32 pt-24 border-t relative",
      theme === 'light' ? "border-black/[0.05]" : "border-white/[0.05]"
     )}
    >
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 max-w-6xl mx-auto relative z-10">
      {stats.map((stat, i) => (
       <StatCounter key={i} end={stat.number} suffix={stat.suffix} label={stat.label} theme={theme} />
      ))}
     </div>
    </motion.div>
   </div>
  </section>
 );
}

