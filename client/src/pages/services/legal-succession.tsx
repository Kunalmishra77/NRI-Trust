import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export default function LegalSuccession() {
  const data = getServiceBySlug("legal-succession")!;
  return <ServiceDetailTemplate data={data} />;
}
