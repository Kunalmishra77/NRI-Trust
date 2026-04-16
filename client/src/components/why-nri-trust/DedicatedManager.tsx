import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";
import { UserCheck, MessageSquare, ShieldCheck, Activity } from "lucide-react";

export default function DedicatedManager() {
  return (
    <section className="section-padding bg-[#0A0F0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,160,82,0.05)_0%,transparent_70%)]" />
      
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
          >
            <span className="accent-label !text-accent">Personalized Management</span>
            <h2 className="section-title !text-white mb-8">
              Your Single Point of <br />
              <span className="text-gradient-gold italic !text-transparent bg-clip-text">Complete Accountability.</span>
            </h2>
            <p className="body-large !text-white/90 mb-12">
              We don't believe in call centers or automated ticket systems.
              Each NRI Trust client is assigned a <strong className="!text-white font-medium">Senior Relationship Manager</strong> who acts
              as your family's personal CFO and physical proxy in India.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: UserCheck,
                  title: "Single Accountability",
                  desc: "One person who knows your entire family context, property history, and financial goals."
                },
                {
                  icon: MessageSquare,
                  title: "Direct WhatsApp Line",
                  desc: "Secure, real-time communication that bridges the distance and time-zone gap."
                },
                {
                  icon: Activity,
                  title: "Proactive Reporting",
                  desc: "Monthly status updates and immediate alerts for any compliance or legal risks."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="!text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm !text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 relative group">
              <img 
                src="/generated_images/Professional_man_headshot_testimonial_c0227483.png" 
                alt="Senior Relationship Manager" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-accent/20 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-12 bg-accent" />
                  <div>
                    <div className="!text-white font-serif text-xl italic">"Our role is to ensure that while you sleep in New York, your legacy in New Delhi is being actively guarded."</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-bold">Dedicated Manager Process</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

