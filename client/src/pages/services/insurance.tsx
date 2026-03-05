import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export default function Insurance() {
  const data = getServiceBySlug("insurance")!;
  return <ServiceDetailTemplate data={data} />;
}
