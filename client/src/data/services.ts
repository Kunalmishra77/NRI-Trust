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
    title: "Banking & KYC",
    shortTitle: "Banking",
    tagline: "Bank nominations and account maintenance for parents.",
    description: "We handle bank KYC compliance, nominations, and account maintenance, acting as a liaison with banks on behalf of your elderly parents in India.",
    icon: Landmark,
    features: [
      {
        title: "KYC Compliance",
        description: "Ensuring all bank accounts remain active and compliant with the latest regulatory requirements.",
      },
      {
        title: "Bank Nominations",
        description: "Formalizing and verifying nominee details across all family bank accounts.",
      },
      {
        title: "Account Maintenance",
        description: "Regular monitoring of NRE/NRO accounts, fixed deposits, and monthly interest credits.",
      },
      {
        title: "Bank Liaison",
        description: "Physical and digital coordination with bank managers to resolve procedural deadlocks.",
      },
    ],
    scenarios: [
      {
        title: "Frozen Accounts",
        description: "When an account becomes dormant due to missing KYC or expired documentation.",
      },
      {
        title: "Nomination Gaps",
        description: "Lack of clear nominees leading to potential legal hurdles during wealth transition.",
      },
    ],
    emergencies: [
      "Sudden bank account freeze",
      "Urgent KYC update requirement",
      "Unauthorized transaction detection",
      "Banking documentation lost/misplaced",
    ],
    tierCoverage: {
      essential: ["Basic financial compliance", "Liaison for tax/insurance banking"],
      comprehensive: ["Banking KYC & nominations", "Account maintenance monitoring"],
      premiumLegacy: ["Full banking portfolio management", "Liaison for all fixed assets"],
    },
    risks: [
      "Account dormancy due to non-KYC",
      "FEMA non-compliance for NRE/NRO",
      "Locked capital during emergencies",
    ],
    domainStats: [
      { value: "48-72h", label: "Resolution SLA" },
      { value: "100%", label: "KYC Verified" },
    ],
  },
  {
    slug: "legal-succession",
    title: "Legal & Succession",
    shortTitle: "Legal",
    tagline: "Succession documents and Will registration for families.",
    description: "Professional management of survival certificates, succession documents, Will registration, Probate of Wills, and related legal formalities in India.",
    icon: Scale,
    features: [
      {
        title: "Will Registration",
        description: "Assisting in the drafting and formal registration of Wills to ensure clear asset transition.",
      },
      {
        title: "Probate of Wills",
        description: "Navigating the court process for probate to validate and execute family Wills.",
      },
      {
        title: "Succession Documents",
        description: "Preparation and filing of survival certificates and succession certificates.",
      },
      {
        title: "Legal Formalities",
        description: "Handling all procedural legal work required for asset protection and transfer.",
      },
    ],
    scenarios: [
      {
        title: "Unregistered Wills",
        description: "Handwritten or unregistered documents being challenged by local elements.",
      },
      {
        title: "Survival Certificate Gaps",
        description: "Missing documentation required for pension or account transitions for parents.",
      },
    ],
    emergencies: [
      "Sudden court notice or summons",
      "Urgent legal notice from govt departments",
      "Contested property title discovery",
      "Immediate PoA requirement for surgery",
    ],
    tierCoverage: {
      essential: ["Succession document audit", "Basic legal compliance"],
      comprehensive: ["Will drafting support", "PoA management"],
      premiumLegacy: ["Full succession & Will planning", "Probate & legal formalities"],
    },
    risks: [
      "Multi-generational legal disputes",
      "Invalid or contested Wills",
      "Locked ancestral titles",
    ],
    domainStats: [
      { value: "98%", label: "Dispute Prevention" },
      { value: "Verified", label: "Legal Title" },
    ],
  },
  {
    slug: "property-tenancy",
    title: "Property & Tenancy",
    shortTitle: "Property",
    tagline: "Tenant management and encroachment protection.",
    description: "We resolve tenancy disputes, manage tenant relationships, handle House Tax matters, and ensure property-related compliance and encroachment protection.",
    icon: Building2,
    features: [
      {
        title: "Tenant Management",
        description: "Formalizing rent agreements, verifying tenants, and managing monthly collection.",
      },
      {
        title: "Encroachment Shield",
        description: "Physical vigilance and boundary verification to deter unauthorized occupancy.",
      },
      {
        title: "House Tax Matters",
        description: "Ensuring timely assessment and payment of municipal taxes and utility bills.",
      },
      {
        title: "Property Compliance",
        description: "Regular audits of property documentation and physical structural status.",
      },
    ],
    scenarios: [
      {
        title: "Non-paying Tenants",
        description: "When tenants refuse to pay rent or vacate the premises after agreement expiry.",
      },
      {
        title: "Encroachment Risks",
        description: "Local elements attempting to alter boundaries on vacant family land.",
      },
    ],
    emergencies: [
      "Property encroachment attempt",
      "MCD / Municipal body notice",
      "Utility disconnection threat",
      "Tenant refusing to vacate premises",
    ],
    tierCoverage: {
      essential: ["House Tax guidance", "Property document audit"],
      comprehensive: ["One property oversight", "Tenant disputes & management"],
      premiumLegacy: ["Full property portfolio oversight", "Multi-asset management"],
    },
    risks: [
      "Unauthorized physical occupancy",
      "Municipal tax penalties",
      "Devaluation due to disrepair",
    ],
    domainStats: [
      { value: "24/7", label: "Vigilance Active" },
      { value: "₹250Cr+", label: "Property Monitored" },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance (Financial)",
    shortTitle: "Insurance",
    tagline: "Health insurance claims and renewal assistance.",
    description: "We manage health insurance renewals, claims assistance, and financial emergencies arising from health or surgical procedures for your parents.",
    icon: Shield,
    features: [
      {
        title: "Claims Assistance",
        description: "Professional advocacy to ensure hospital bills and insurance claims are processed accurately.",
      },
      {
        title: "Policy Renewals",
        description: "Timely monitoring and execution of health and life insurance policy renewals.",
      },
      {
        title: "Top-up Assessments",
        description: "Evaluating existing coverage and recommending necessary top-ups for parents.",
      },
      {
        title: "Financial Advocacy",
        description: "Managing the financial side of medical emergencies to prevent out-of-pocket loss.",
      },
    ],
    scenarios: [
      {
        title: "Claim Rejections",
        description: "When an insurer rejects a valid medical claim on technical or documentation grounds.",
      },
      {
        title: "Policy Lapses",
        description: "Parents forgetting renewal dates leading to a permanent loss of waiting-period benefits.",
      },
    ],
    emergencies: [
      "Urgent insurance claim rejection",
      "Hospital billing dispute",
      "Medical procedure financing crisis",
      "Sudden policy lapse detection",
    ],
    tierCoverage: {
      essential: ["Health insurance renewals & claims", "Life insurance management"],
      comprehensive: ["Regular policy monitoring", "Claims advocacy"],
      premiumLegacy: ["Complete medical-financial stewardship", "Family unit coverage"],
    },
    risks: [
      "Rejection of critical claims",
      "Loss of continuous coverage",
      "High out-of-pocket medical debt",
    ],
    domainStats: [
      { value: "94%", label: "Claim Success Rate" },
      { value: "Immediate", label: "Advocacy Support" },
    ],
  },
  {
    slug: "income-tax",
    title: "Income Tax",
    shortTitle: "Tax",
    tagline: "Tax filing support and responding to IT notices.",
    description: "Comprehensive tax filing support and responding to Income Tax notices, ensuring ongoing compliance for elderly parents in India.",
    icon: Receipt,
    features: [
      {
        title: "ITR Filing",
        description: "Accuracy-driven tax filing for your parents, covering rental, interest, and capital gains.",
      },
      {
        title: "Notice Resolution",
        description: "Professional drafting and representation in response to Income Tax show-cause notices.",
      },
      {
        title: "Compliance Audit",
        description: "Ongoing monitoring of tax liabilities and TDS credits to ensure a clean status.",
      },
      {
        title: "Status Advisory",
        description: "Guidance on residency status impacts (ROR/RNOR) for global family units.",
      },
    ],
    scenarios: [
      {
        title: "Unresolved Notices",
        description: "Old tax notices appearing in the portal that could lead to account freezes.",
      },
      {
        title: "Rental TDS Gaps",
        description: "Incorrect TDS deduction on rental income leading to compliance penalties.",
      },
    ],
    emergencies: [
      "Urgent Income Tax notice",
      "Show-cause notice from department",
      "Account freeze due to tax issues",
      "Demand for tax payment arrears",
    ],
    tierCoverage: {
      essential: ["Income Tax filing & notices", "Basic tax compliance"],
      comprehensive: ["TDS monitoring & reconciliation", "Priority tax support"],
      premiumLegacy: ["Complete tax management across all assets", "Notice resolution suite"],
    },
    risks: [
      "Tax department penalties",
      "Frozen liquidity for arrears",
      "Scrutiny of global transfers",
    ],
    domainStats: [
      { value: "2,000+", label: "Returns Filed" },
      { value: "Verified", label: "Compliance Status" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
