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
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-mono font-bold text-amber-400 mb-1">
        <span ref={ref}>{display}</span>{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/40 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Krishnamurthy",
      role: "Software Engineer",
      location: "San Francisco, USA",
      image: testimonial1,
      quote: "My father received a tax notice for unreported rental income. NRI Trust handled everything — compiled documents, filed revised returns, and resolved the demand within 3 weeks. I didn't miss a single day of work.",
      outcome: "₹4.5L tax notice resolved",
    },
    {
      name: "Rajesh Sharma",
      role: "Investment Banker",
      location: "Singapore",
      image: testimonial2,
      quote: "My mother's ₹8 lakh insurance claim was denied 3 times citing 'pre-existing condition.' NRI Trust gathered the right medical evidence, filed an appeal, and got it approved in 2 weeks. Game changer.",
      outcome: "₹8L insurance claim approved",
    },
    {
      name: "Anita Menon",
      role: "Management Consultant",
      location: "London, UK",
      image: testimonial3,
      quote: "A neighbor had encroached on our family property in Chennai. NRI Trust documented everything, filed the police complaint, and coordinated with our advocate. The encroachment was removed within 2 months.",
      outcome: "Property dispute settled",
    },
  ];

  const stats = [
    { number: 200, suffix: "+", label: "Happy Families" },
    { number: 40, suffix: "+", label: "Countries Served" },
    { number: 50, suffix: "Cr+", label: "Assets Managed" },
    { number: 4.9, suffix: "/5", label: "Average Rating" },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[hsl(180,50%,8%)] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(180_50%_15%_/_0.1)_0%,transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500/60 block mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Real NRI Families. <span className="text-amber-400">Real Results.</span>
          </h2>
        </motion.div>

        {/* Stacked pull-quote testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={luxuryStagger}
          className="space-y-0"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={elegantFadeUp}
              className={`py-12 md:py-16 text-center ${
                index < testimonials.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              {/* Large serif italic quote */}
              <p className="text-xl sm:text-2xl md:text-[1.75rem] text-white/60 italic font-serif leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-white/10">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback className="bg-primary text-white">{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/30 font-mono text-xs uppercase tracking-wider">
                    {testimonial.role} &middot; {testimonial.location}
                  </div>
                </div>
                {/* Outcome badge */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/20 mt-1">
                  <Check className="w-3 h-3" />
                  {testimonial.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elegantFadeUp}
          className="mt-16 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCounter key={i} end={stat.number} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
