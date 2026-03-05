import PageHeader from "@/layouts/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Book a free review session or reach out with any questions. We're here to help."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
