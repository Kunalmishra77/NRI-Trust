import PageHeader from "@/layouts/PageHeader";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Pricing & Plans"
        subtitle="Transparent pricing with no hidden fees. Choose the plan that fits your family's needs."
        breadcrumbs={[{ label: "Pricing" }]}
      />
      <PricingSection />
      <HowItWorksSection />
    </>
  );
}
