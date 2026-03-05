import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export default function PropertyTenancy() {
  const data = getServiceBySlug("property-tenancy")!;
  return <ServiceDetailTemplate data={data} />;
}
