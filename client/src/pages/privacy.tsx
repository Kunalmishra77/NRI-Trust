import PageHeader from "@/layouts/PageHeader";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function PrivacyProtocol() {
  return (
    <main className="min-h-screen">
      <div className="section-dark">
        <PageHeader
          title="Privacy Protocol"
          subtitle="Our institutional-grade data protection and non-disclosure governance for NRI family offices."
          breadcrumbs={[{ label: "Privacy Protocol" }]}
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
                <h2 className="text-3xl font-serif font-bold mb-6">1. Data Sovereignty</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Clients retain absolute sovereignty over all their India-based asset data. We act as a professional custodian and fiduciary proxy, ensuring that all information is processed exclusively for the purpose of the stewardship mandate.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">2. Non-Disclosure Governance</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  All NRI Trust advisors and directors are bound by lifetime non-disclosure agreements. We maintain an institutional 'wall of silence' regarding family legacies, wealth structures, and on-ground activities in India.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">3. Zero Third-Party Sharing</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  We never sell, lease, or share client data with third-party vendors or lead-generation platforms. Our engagement is a direct, private advisory relationship built on mutual trust and institutional integrity.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">4. Encryption Standards</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Communication regarding asset audits, legal filings, and banking transactions is conducted via secure channels using 256-bit AES encryption. Our digital infrastructure is audited annually for security compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
