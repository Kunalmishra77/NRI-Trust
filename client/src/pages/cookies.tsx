import PageHeader from "@/layouts/PageHeader";
import { motion } from "framer-motion";
import { elegantFadeUp } from "@/motion/variants";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen">
      <div className="section-dark">
        <PageHeader
          title="Cookie Policy"
          subtitle="Understanding how we use browser-level identifiers to maintain your secure session."
          breadcrumbs={[{ label: "Cookie Policy" }]}
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
                <h2 className="text-3xl font-serif font-bold mb-6">1. Session Governance</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  We use essential cookies to maintain secure sessions for our clients. These identifiers are critical for the functionality of the client portal and ensure that authorized access is preserved throughout your engagement with our platform.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">2. Non-Intrusive Tracking</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Our platform does not use third-party advertising cookies, retargeting pixels, or behavioral tracking identifiers. We respect the privacy of our high-net-worth clients and maintain a clean, professional digital footprint.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">3. Technical Identifiers</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  We may use technical cookies for performance monitoring and ensuring the stability of our global advisory infrastructure. These cookies do not contain personally identifiable information and are purged upon session termination.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">4. Client Control</h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Clients have full control over cookie settings via their browser preferences. However, disabling essential cookies may impact the performance and security of the client portal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
