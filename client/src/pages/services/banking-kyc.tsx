import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export default function BankingKyc() {
  const data = getServiceBySlug("banking-kyc")!;
  return <ServiceDetailTemplate data={data} />;
}
