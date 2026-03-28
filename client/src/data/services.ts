import {
  Landmark,
  Scale,
  Building2,
  Shield,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceScenario {
  title: string;
  description: string;
}

export interface DomainStat {
  value: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  scenarios: ServiceScenario[];
  emergencies: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  tierCoverage: {
    essential: string[];
    comprehensive: string[];
    premiumLegacy: string[];
  };
  risks?: string[];
  domainStats?: DomainStat[];
}

export const services: ServiceData[] = [
  {
    slug: "banking-kyc",
    title: "Bank Account Consolidation",
    shortTitle: "Banking",
    tagline: "Find scattered accounts and organize them in one place.",
    description: "We help you identify scattered bank accounts, update KYC, fix nominations, and consolidate everything so your family has complete visibility.",
    icon: Landmark,
    features: [
      {
        title: "KYC Updates",
        description: "We make sure all your parents' bank accounts stay active by keeping KYC documents up to date.",
      },
      {
        title: "Nominee Verification",
        description: "We check and correct nominee details across all bank accounts so there are no problems later.",
      },
      {
        title: "Account Monitoring",
        description: "We track NRE/NRO accounts, fixed deposits, and interest payments so nothing is missed.",
      },
      {
        title: "Bank Coordination",
        description: "We visit the bank on your behalf to resolve any issues — your parents don't have to go.",
      },
    ],
    scenarios: [
      {
        title: "Frozen Accounts",
        description: "When a bank account gets blocked because KYC was not updated on time.",
      },
      {
        title: "Missing Nominees",
        description: "No nominee listed on accounts, which creates legal problems if something happens.",
      },
    ],
    emergencies: [
      "Bank account suddenly frozen",
      "Urgent KYC update needed",
      "Suspicious transaction detected",
      "Banking documents lost or misplaced",
    ],
    tierCoverage: {
      essential: ["Basic KYC compliance help", "Tax and insurance banking support"],
      comprehensive: ["Full KYC & nominee updates", "Account monitoring & alerts"],
      premiumLegacy: ["Complete banking management", "All accounts & fixed deposits handled"],
    },
    risks: [
      "Account frozen due to expired KYC",
      "Non-compliance with NRE/NRO rules",
      "Cannot access money during emergencies",
    ],
    domainStats: [
      { value: "48-72h", label: "Issue Resolution" },
      { value: "100%", label: "KYC Updated" },
    ],
  },
  {
    slug: "legal-succession",
    title: "Succession & Nominee Setup",
    shortTitle: "Legal",
    tagline: "Set up correct nominees and plan for smooth legal transfer.",
    description: "We help set up proper nominees across all accounts and policies, prepare succession certificates, register Wills, and handle probate so your family avoids legal trouble.",
    icon: Scale,
    features: [
      {
        title: "Will Registration",
        description: "We help draft and register your parents' Will so there is no confusion about who gets what.",
      },
      {
        title: "Probate Support",
        description: "We handle the court process to get the Will approved and executed properly.",
      },
      {
        title: "Succession Certificates",
        description: "We prepare and file all the certificates needed for bank and pension transfers.",
      },
      {
        title: "Legal Paperwork",
        description: "We handle all the legal forms and filings needed to protect and transfer assets.",
      },
    ],
    scenarios: [
      {
        title: "Unregistered Wills",
        description: "When a Will was never officially registered and someone tries to challenge it.",
      },
      {
        title: "Missing Certificates",
        description: "When survival or succession certificates are missing, blocking pension or account access.",
      },
    ],
    emergencies: [
      "Sudden court notice received",
      "Legal notice from government",
      "Someone challenging property ownership",
      "Urgent Power of Attorney needed",
    ],
    tierCoverage: {
      essential: ["Succession document check", "Basic legal help"],
      comprehensive: ["Will drafting help", "Power of Attorney setup"],
      premiumLegacy: ["Complete succession & Will planning", "Probate & all legal work"],
    },
    risks: [
      "Family legal disputes over property",
      "Will found to be invalid",
      "Property stuck due to missing documents",
    ],
    domainStats: [
      { value: "98%", label: "Disputes Prevented" },
      { value: "Verified", label: "Legal Documents" },
    ],
  },
  {
    slug: "property-tenancy",
    title: "Property Document Organization",
    shortTitle: "Property",
    tagline: "Make sure all property papers are updated and accessible.",
    description: "We organize all property documents, resolve tenant issues, ensure house tax compliance, and protect your family property from encroachment or legal disputes.",
    icon: Building2,
    features: [
      {
        title: "Tenant Management",
        description: "We handle rent agreements, verify tenants, and collect monthly rent on your behalf.",
      },
      {
        title: "Encroachment Protection",
        description: "We physically check your property boundaries to make sure no one is illegally occupying your land.",
      },
      {
        title: "House Tax & Bills",
        description: "We make sure municipal taxes and utility bills are paid on time so there are no penalties.",
      },
      {
        title: "Document Organization",
        description: "We collect, organize, and verify all your property documents so everything is in order.",
      },
    ],
    scenarios: [
      {
        title: "Non-paying Tenants",
        description: "When tenants stop paying rent or refuse to leave after the agreement ends.",
      },
      {
        title: "Encroachment Risks",
        description: "Someone trying to take over or alter boundaries on your vacant family land.",
      },
    ],
    emergencies: [
      "Someone trying to encroach on your property",
      "Municipal notice received",
      "Electricity or water disconnection threat",
      "Tenant refusing to leave",
    ],
    tierCoverage: {
      essential: ["House Tax help", "Property document check"],
      comprehensive: ["One property managed", "Tenant issues handled"],
      premiumLegacy: ["All properties managed", "Multiple assets handled"],
    },
    risks: [
      "Someone illegally occupying your property",
      "Tax penalties from missed payments",
      "Property value dropping due to neglect",
    ],
    domainStats: [
      { value: "24/7", label: "Property Watched" },
      { value: "₹250Cr+", label: "Property Protected" },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance Adequacy Check",
    shortTitle: "Insurance",
    tagline: "Check if your parents' health and life insurance is enough.",
    description: "We review your parents' health and life insurance policies, identify coverage gaps, assist with claims, and make sure they are not underinsured when it matters most.",
    icon: Shield,
    features: [
      {
        title: "Claims Help",
        description: "We help process hospital bills and insurance claims so nothing gets rejected unfairly.",
      },
      {
        title: "Policy Renewals",
        description: "We track renewal dates and make sure health and life insurance never lapses.",
      },
      {
        title: "Coverage Check",
        description: "We review existing policies and recommend top-ups if your parents are underinsured.",
      },
      {
        title: "Emergency Support",
        description: "During a medical emergency, we handle the insurance and billing side so your family can focus on care.",
      },
    ],
    scenarios: [
      {
        title: "Claim Rejections",
        description: "When the insurance company rejects a valid hospital claim due to paperwork issues.",
      },
      {
        title: "Policy Lapses",
        description: "When parents forget to renew their policy and lose years of waiting-period benefits.",
      },
    ],
    emergencies: [
      "Insurance claim rejected during hospitalization",
      "Hospital billing dispute",
      "Cannot pay for medical procedure",
      "Policy lapsed without notice",
    ],
    tierCoverage: {
      essential: ["Health insurance renewals & claims", "Life insurance management"],
      comprehensive: ["Regular policy check-ups", "Claims support & follow-up"],
      premiumLegacy: ["Complete insurance management for family", "All policies covered"],
    },
    risks: [
      "Important claims getting rejected",
      "Insurance coverage lapsing",
      "Huge hospital bills paid from pocket",
    ],
    domainStats: [
      { value: "94%", label: "Claims Approved" },
      { value: "Immediate", label: "Emergency Help" },
    ],
  },
  {
    slug: "income-tax",
    title: "Emergency Access Guidance",
    shortTitle: "Emergency",
    tagline: "Prepare a clear plan so your family knows what to do in a crisis.",
    description: "We create a complete emergency plan — who to contact, how to access money, what documents are needed, and what steps to take — so your family is never caught off guard.",
    icon: Receipt,
    features: [
      {
        title: "Emergency Contact List",
        description: "We create a clear list of who to call first — family, doctors, lawyers, and our team.",
      },
      {
        title: "Money Access Plan",
        description: "We make sure your family knows which accounts to use and how to withdraw funds quickly.",
      },
      {
        title: "Document Checklist",
        description: "Insurance papers, bank documents, legal records — we prepare a checklist so nothing is missed.",
      },
      {
        title: "Step-by-Step Guide",
        description: "A simple guide for your family — from filing claims to starting bank succession.",
      },
    ],
    scenarios: [
      {
        title: "Sudden Medical Emergency",
        description: "Family does not know which insurance to use or how to file a claim quickly.",
      },
      {
        title: "After a Parent Passes",
        description: "Family is overwhelmed and does not know what documents are needed or what steps to take.",
      },
    ],
    emergencies: [
      "Family does not know what to do next",
      "Cannot access money during emergency",
      "Missing critical documents",
      "Need to file claims urgently",
    ],
    tierCoverage: {
      essential: ["Basic emergency contact list", "Simple document checklist"],
      comprehensive: ["Full emergency plan", "Money access guidance"],
      premiumLegacy: ["Complete crisis management", "Step-by-step family guide"],
    },
    risks: [
      "Family panics and makes mistakes",
      "Money stuck in accounts during emergency",
      "Important deadlines missed",
    ],
    domainStats: [
      { value: "200+", label: "Families Prepared" },
      { value: "Ready", label: "Emergency Plan" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
