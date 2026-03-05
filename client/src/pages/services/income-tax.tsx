import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export default function IncomeTax() {
  const data = getServiceBySlug("income-tax")!;
  return <ServiceDetailTemplate data={data} />;
}
