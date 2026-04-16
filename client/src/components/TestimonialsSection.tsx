import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, useCountUp } from "@/motion/variants";
import { cn } from "@/lib/utils";
import { useState } from "react";

function StatCounter({ end, suffix, label, theme }: { end: number; suffix: string; label: string; theme?: 'dark' | 'light' }) {
 const { ref, display } = useCountUp(end, 2.5);
 return (
  <div className="text-center group flex flex-col items-center">
   <div className={cn(
    "text-3xl md:text-4xl lg:text-5xl mb-4 font-sans font-medium transition-colors duration-500",
    theme === 'light' ? "text-[#1A1A1A] group-hover:text-[#D4AF37]" : "text-[#FDFCFB] group-hover:text-[#D4AF37]"
   )}>
    <span ref={ref}>{display}</span>{suffix}
   </div>
   <div className="text-[12px] md:text-[13px] font-mono text-[#D4AF37]/85 uppercase tracking-[0.25em] font-semibold">{label}</div>
  </div>
 );
}

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  outcome: string;
}

const row1Testimonials: Testimonial[] = [
  {
    name: "Sunita Mehta",
    location: "California, USA",
    quote: "My father had a heart attack and we had no idea his health insurance had lapsed. NRI Trust had already flagged the gap months before — we renewed it just in time. The claim was processed without a single issue.",
    outcome: "Insurance gap caught before emergency",
  },
  {
    name: "Vikram Iyer",
    location: "Dubai, UAE",
    quote: "After my father passed, we thought everything would be stuck in legal battles. But NRI Trust had already set up all nominees correctly and the bank transfer happened in days, not months.",
    outcome: "Smooth bank succession in 5 days",
  },
  {
    name: "Priya Krishnamurthy",
    location: "San Francisco, USA",
    quote: "We had 4 bank accounts across 3 cities with outdated KYC. NRI Trust organized everything, fixed nominees, and now we have one clear dashboard of my parents' finances.",
    outcome: "4 scattered accounts organized",
  },
  {
    name: "Arjun Desai",
    location: "Singapore",
    quote: "My mother's medical insurance claim was rejected twice. NRI Trust stepped in, compiled all the paperwork properly, and got the full amount reimbursed within 2 weeks.",
    outcome: "Reversed ₹6L insurance rejection",
  },
  {
    name: "Neha Kapoor",
    location: "London, UK",
    quote: "We never realized property documents for our family home were outdated. NRI Trust updated everything and now there are zero legal risks if we ever need to transfer or sell.",
    outcome: "Property documents fully updated",
  },
  {
    name: "Sanjay Patel",
    location: "Houston, USA",
    quote: "My parents had 3 fixed deposits in different banks. Nobody knew the maturity dates or nominee details. NRI Trust tracked all of it and set up proper nominations on every single one.",
    outcome: "3 FDs tracked and nominees fixed",
  },
  {
    name: "Divya Rangan",
    location: "Auckland, NZ",
    quote: "Papa's life insurance was only ₹5 lakhs — completely inadequate for a family of four. NRI Trust identified this gap during the first review and helped us get proper coverage in place.",
    outcome: "Life insurance upgraded from ₹5L to ₹50L",
  },
  {
    name: "Karan Malhotra",
    location: "Chicago, USA",
    quote: "We had a tenant in our Delhi flat who refused to leave for 2 years. NRI Trust handled the entire legal process and got the property vacated without us having to fly back even once.",
    outcome: "Tenant issue resolved remotely",
  },
  {
    name: "Anjali Bhatt",
    location: "Frankfurt, Germany",
    quote: "After Mummy's surgery, the hospital billed ₹8 lakhs. Insurance rejected the first claim. NRI Trust resubmitted with proper documentation and the full amount was reimbursed in 10 days.",
    outcome: "₹8L hospital claim approved",
  },
  {
    name: "Ravi Sundaram",
    location: "Doha, Qatar",
    quote: "I didn't even know my parents had an old savings account with ₹3 lakhs sitting in it. NRI Trust discovered it during the financial audit and helped us combine it with their main account.",
    outcome: "Hidden ₹3L account discovered",
  },
];

const row2Testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    location: "Melbourne, Australia",
    quote: "When Papa was diagnosed with a serious illness, the medical insurance was adequate because NRI Trust had reviewed and upgraded our policy 6 months earlier. We didn't pay a single rupee out of pocket.",
    outcome: "Full medical coverage when needed",
  },
  {
    name: "Kavita Nair",
    location: "Toronto, Canada",
    quote: "I was always worried about what would happen if something happened to my parents suddenly. NRI Trust created a complete emergency plan — contacts, documents, steps. Now my whole family knows exactly what to do.",
    outcome: "Emergency plan saved the family",
  },
  {
    name: "Rohit Agarwal",
    location: "New York, USA",
    quote: "Our property paperwork was a mess — some papers with my uncle, some in a locker, some lost. NRI Trust tracked everything down and organized it. No legal issues when we finally needed to transfer the property.",
    outcome: "No legal issues due to proper docs",
  },
  {
    name: "Meera Joshi",
    location: "Berlin, Germany",
    quote: "Bank nominations were wrong on 2 accounts — my grandfather's name was still listed. NRI Trust fixed all of it quietly and now every account has the correct nominee. One less thing to worry about.",
    outcome: "All nominee details corrected",
  },
  {
    name: "Anil Reddy",
    location: "Kuala Lumpur, Malaysia",
    quote: "After Papa passed, we didn't know which accounts had money, which policies were active, or where the documents were. NRI Trust had already organized everything — we just followed the checklist they had prepared.",
    outcome: "Checklist made succession painless",
  },
  {
    name: "Pooja Venkatesh",
    location: "Seattle, USA",
    quote: "My mother was paying premium on a policy that had already matured 2 years ago. NRI Trust caught this during the audit, stopped the unnecessary payments, and helped her claim the maturity amount.",
    outcome: "Stopped ₹24K/year unnecessary premium",
  },
  {
    name: "Manish Gupta",
    location: "Hong Kong",
    quote: "Our ancestral land in UP had no clear title deed. NRI Trust worked with local lawyers and got the mutation done properly. Now the land is legally in my father's name with zero disputes.",
    outcome: "Land title secured after years",
  },
  {
    name: "Lakshmi Narayan",
    location: "Riyadh, Saudi Arabia",
    quote: "My parents are 75+ and can't go to the bank themselves. NRI Trust handles all their banking — KYC updates, cheque deposits, even speaking to the branch manager when needed.",
    outcome: "Complete banking managed for elderly parents",
  },
  {
    name: "Deepak Choudhary",
    location: "Vancouver, Canada",
    quote: "We had no idea that our house tax was unpaid for 3 years. NRI Trust discovered this, paid the outstanding amount, and set up auto-reminders so it never happens again.",
    outcome: "3 years of house tax cleared",
  },
  {
    name: "Shreya Banerjee",
    location: "Dublin, Ireland",
    quote: "My brother and I were confused about who gets what after Papa. NRI Trust helped draft a proper Will, registered it, and now there's complete clarity. No family fights, no confusion.",
    outcome: "Will registered, family aligned",
  },
];

function TestimonialCard({ testimonial, theme, sizeClass }: { testimonial: Testimonial; theme: 'dark' | 'light'; sizeClass: string }) {
  return (
    <div className={cn(
      "flex-shrink-0 rounded-2xl border p-4 md:p-5 flex flex-col justify-between transition-all duration-300",
      sizeClass,
      theme === 'light'
        ? "bg-white border-black/[0.06] hover:border-[#D4AF37]/30 hover:shadow-lg"
        : "bg-white/[0.03] border-white/[0.08] hover:border-[#D4AF37]/30 hover:bg-white/[0.06]"
    )}>
      <p className={cn(
        "text-[12px] md:text-[13px] leading-relaxed mb-3 font-medium",
        theme === 'light' ? "text-[#1A1A1A]/75" : "text-white/70"
      )}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <Check className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[12px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">{testimonial.outcome}</span>
        </div>
        <div className={cn(
          "text-[12px] font-semibold",
          theme === 'light' ? "text-[#1A1A1A]" : "text-white"
        )}>
          {testimonial.name}
        </div>
        <div className="text-[10px] font-mono text-[#D4AF37]/80 uppercase tracking-wider">
          {testimonial.location}
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction,
  theme,
  isPaused
}: {
  testimonials: Testimonial[];
  direction: 'left' | 'right';
  theme: 'dark' | 'light';
  isPaused: boolean;
}) {
  const items = [...testimonials, ...testimonials];

  const sizeClasses = [
    "w-[320px] md:w-[380px]",
    "w-[310px] md:w-[365px]",
    "w-[300px] md:w-[350px]",
    "w-[290px] md:w-[335px]",
    "w-[280px] md:w-[320px]",
    "w-[270px] md:w-[310px]",
    "w-[260px] md:w-[300px]",
    "w-[250px] md:w-[290px]",
    "w-[240px] md:w-[280px]",
    "w-[230px] md:w-[270px]",
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <div className={cn(
        "absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none",
        theme === 'light'
          ? "bg-gradient-to-r from-[#FDFCFB] to-transparent"
          : "bg-gradient-to-r from-[#050914] to-transparent"
      )} />
      <div className={cn(
        "absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none",
        theme === 'light'
          ? "bg-gradient-to-l from-[#FDFCFB] to-transparent"
          : "bg-gradient-to-l from-[#050914] to-transparent"
      )} />

      <div
        className={cn(
          "flex gap-4 md:gap-5",
          direction === 'left' ? "animate-marquee-left" : "animate-marquee-right",
          isPaused && "paused"
        )}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {items.map((testimonial, idx) => (
          <TestimonialCard
            key={`${testimonial.name}-${idx}`}
            testimonial={testimonial}
            theme={theme}
            sizeClass={sizeClasses[idx % sizeClasses.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
 const [isPaused, setIsPaused] = useState(false);

 const stats = [
  { number: 400, suffix: "+", label: "Families Helped" },
  { number: 40, suffix: "+", label: "Countries" },
  { number: 50, suffix: "Cr+", label: "Assets Protected" },
  { number: 4.9, suffix: "/5", label: "Family Rating" },
 ];

 return (
  <section id="testimonials" className={cn(
   "py-20 md:py-28 relative overflow-hidden transition-colors duration-500",
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
     className="text-center mb-12 md:mb-16"
    >
     <div className="flex items-center justify-center gap-6 mb-6">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
      <span className="accent-label !mb-0 text-[#D4AF37]">Real Stories</span>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
     </div>
     <h2 className={cn(
      "text-2xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight leading-[1.1] mb-4",
      theme === 'light' ? "text-[#1A1A1A]" : "text-[#FDFCFB]"
     )}>
      Families Who Trusted <br className="hidden md:block" />
      <span className="text-gradient-gold font-medium">Us With Their Parents.</span>
     </h2>
     <p className={cn(
       "text-base font-medium max-w-2xl mx-auto leading-relaxed",
       theme === 'light' ? "text-[#1A1A1A]/60" : "text-white/50"
     )}>
       Real impact stories from NRI families across the world.
     </p>
    </motion.div>
   </div>

   {/* Single Marquee Row */}
   <div
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
   >
    <MarqueeRow testimonials={[...row1Testimonials, ...row2Testimonials]} direction="left" theme={theme} isPaused={isPaused} />
   </div>

   {/* Global Statistics */}
   <div className="max-container relative z-10">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
     variants={cardReveal}
     className={cn(
      "mt-20 md:mt-28 pt-16 md:pt-20 border-t relative",
      theme === 'light' ? "border-black/[0.05]" : "border-white/[0.05]"
     )}
    >
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
      {stats.map((stat, i) => (
       <StatCounter key={i} end={stat.number} suffix={stat.suffix} label={stat.label} theme={theme} />
      ))}
     </div>
    </motion.div>
   </div>
  </section>
 );
}
