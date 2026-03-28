import PageHeader from "@/layouts/PageHeader";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function TermsOfEngagement() {
  return (
    <main className="min-h-screen">
      <div className="section-dark">
        <PageHeader
          title="Terms of Engagement"
          subtitle="The terms that govern how we work with you and our professional advisory services."
          breadcrumbs={[{ label: "Terms of Engagement" }]}
        />
      </div>

      <section className="section-padding section-light">
        <div className="max-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elegantFadeUp}
            className="max-w-4xl mx-auto prose prose-neutral lg:prose-xl"
          >
            <div className="space-y-12 text-[#1A1A1A]">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">1. Our Commitment</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  NRI Trust operates under a strict professional commitment. Every action taken on behalf of our clients is performed with the highest standard of care, loyalty, and complete confidentiality. We manage your Indian assets as our own, ensuring transparency at every stage of the engagement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">2. Scope of Services</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Our services are limited to professional management, physical liaison, and strategic advisory across banking, legal, property, and tax domains in India. We do not provide medical services, emergency healthcare support, or personal caregiving.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">3. Professional Protection</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  All formal engagements are covered by comprehensive professional liability protocols. We maintain an audited trail of every digital and physical action performed, providing clients with verifiable documentation for all on-ground activities in India.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">4. Confidentiality Policy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Client data, family context, and asset details are governed by military-grade encryption and strict non-disclosure agreements. We never share client information with third-party vendors without explicit authorized proxy consent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
