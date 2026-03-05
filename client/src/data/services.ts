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

export interface TierCoverage {
  essential: string[];
  comprehensive: string[];
  premiumLegacy: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  description: string;
  features: ServiceFeature[];
  scenarios: ServiceScenario[];
  emergencies: string[];
  tierCoverage: TierCoverage;
}

export const services: ServiceData[] = [
  {
    slug: "banking-kyc",
    title: "Banking & KYC Compliance",
    shortTitle: "Banking & KYC",
    tagline: "Keep your Indian bank accounts active and compliant from anywhere in the world.",
    icon: Landmark,
    color: "bg-blue-600",
    description:
      "NRI bank accounts face unique challenges — KYC deadlines, dormant account reactivation, NRO/NRE conversions, and regulatory changes. We handle all bank-related compliance so your money stays accessible and working for you.",
    features: [
      {
        title: "KYC Updates & Renewals",
        description: "Timely submission of KYC documents across all your Indian bank accounts before deadlines.",
      },
      {
        title: "Dormant Account Reactivation",
        description: "Revive frozen or dormant accounts with proper documentation and bank coordination.",
      },
      {
        title: "NRO/NRE Account Management",
        description: "Account conversions, repatriation assistance, and compliance with FEMA regulations.",
      },
      {
        title: "Fixed Deposit Renewals",
        description: "Track maturity dates, negotiate rates, and handle renewals across multiple banks.",
      },
      {
        title: "Bank Correspondence",
        description: "Handle all bank letters, notices, and documentation requirements on your behalf.",
      },
      {
        title: "Digital Banking Setup",
        description: "Ensure net banking, mobile apps, and digital access are properly configured for overseas use.",
      },
    ],
    scenarios: [
      {
        title: "KYC Deadline Missed",
        description:
          "Your SBI account was frozen because KYC expired while you were abroad. We coordinate with the branch, submit documents via power of attorney, and restore full access within 7-10 days.",
      },
      {
        title: "NRE Account Conversion",
        description:
          "After returning to India temporarily, your resident account needs conversion to NRO. We handle the paperwork, tax implications briefing, and ensure uninterrupted access.",
      },
      {
        title: "Multiple Bank Accounts",
        description:
          "You have accounts in 4 banks across 3 cities. We consolidate KYC tracking, ensure all are compliant, and provide a single dashboard of your banking status.",
      },
      {
        title: "Deceased Parent's Account",
        description:
          "After a parent's passing, their bank accounts need to be claimed by legal heirs. We manage the succession certificate process and bank claim procedures.",
      },
    ],
    emergencies: [
      "Account frozen due to expired KYC",
      "Unexpected FEMA notice from bank",
      "Urgent fund transfer blocked",
      "Bank branch closure or merger affecting accounts",
    ],
    tierCoverage: {
      essential: ["Annual KYC tracking for up to 2 accounts", "Basic bank correspondence"],
      comprehensive: [
        "KYC management for up to 5 accounts",
        "NRO/NRE advisory",
        "FD renewal tracking",
        "Priority bank liaison",
      ],
      premiumLegacy: [
        "Unlimited account management",
        "Full NRO/NRE conversion support",
        "Dedicated bank relationship coordination",
        "Succession planning for bank assets",
      ],
    },
  },
  {
    slug: "legal-succession",
    title: "Legal & Succession Planning",
    shortTitle: "Legal & Succession",
    tagline: "Protect your family legacy with proper legal documentation and succession planning.",
    icon: Scale,
    color: "bg-emerald-600",
    description:
      "From drafting wills to managing power of attorney, succession certificates to court representations — we ensure your legal affairs in India are airtight. Don't let legal gaps become family disputes.",
    features: [
      {
        title: "Will Drafting & Registration",
        description: "Legally sound wills that clearly distribute assets and prevent future disputes among heirs.",
      },
      {
        title: "Power of Attorney",
        description: "Draft, notarize, and register general or specific PoA for property, banking, and legal matters.",
      },
      {
        title: "Succession Certificates",
        description: "Obtain succession certificates and legal heir certificates from appropriate courts.",
      },
      {
        title: "Property Title Verification",
        description: "Due diligence on property ownership records, encumbrance certificates, and title clarity.",
      },
      {
        title: "Court Representation",
        description: "Coordinate with advocates for property disputes, inheritance cases, and civil matters.",
      },
      {
        title: "Family Settlement Agreements",
        description: "Mediate and document fair settlements among family members to avoid costly litigation.",
      },
    ],
    scenarios: [
      {
        title: "No Will Exists",
        description:
          "Your father passed away without a will. Multiple siblings across different countries claim the ancestral property. We coordinate legal heir certificates, mediate settlements, and handle court procedures.",
      },
      {
        title: "Disputed Power of Attorney",
        description:
          "A relative is misusing a general PoA to sell family property. We help revoke the existing PoA, register a new one with proper safeguards, and initiate legal action if needed.",
      },
      {
        title: "Cross-Border Succession",
        description:
          "You hold assets in India but are a citizen of another country. We navigate the complex intersection of Indian succession law and your country's regulations.",
      },
      {
        title: "Ancestral Property Partition",
        description:
          "Joint family property needs to be legally partitioned among multiple heirs spread across 3 countries. We manage the entire process from survey to registration.",
      },
    ],
    emergencies: [
      "Urgent court date for property dispute",
      "Unauthorized property sale attempt by relative",
      "Legal notice received for inheritance claim",
      "Emergency PoA needed for hospitalized parent",
    ],
    tierCoverage: {
      essential: ["Annual legal document review", "Basic PoA guidance"],
      comprehensive: [
        "Will drafting & registration",
        "PoA management",
        "Succession certificate coordination",
        "Legal document storage",
      ],
      premiumLegacy: [
        "Full estate planning",
        "Court representation coordination",
        "Family mediation",
        "Multi-property succession planning",
        "Cross-border legal advisory",
      ],
    },
  },
  {
    slug: "property-tenancy",
    title: "Property & Tenancy Management",
    shortTitle: "Property & Tenancy",
    tagline: "Your properties maintained, tenants managed, and rental income secured — all remotely.",
    icon: Building2,
    color: "bg-amber-600",
    description:
      "Owning property in India while living abroad is a full-time headache — encroachments, tenant disputes, maintenance emergencies, and municipal compliance. We act as your eyes, ears, and hands on the ground.",
    features: [
      {
        title: "Tenant Verification & Onboarding",
        description: "Police verification, reference checks, agreement drafting, and move-in coordination for new tenants.",
      },
      {
        title: "Rent Collection & Deposits",
        description: "Timely rent collection, deposit management, and direct credit to your account with monthly statements.",
      },
      {
        title: "Property Maintenance",
        description: "Regular inspections, vendor coordination for repairs, and photo/video reports of property condition.",
      },
      {
        title: "Municipal & Utility Compliance",
        description: "Property tax payments, water/electricity connections, and municipal permit renewals handled on time.",
      },
      {
        title: "Encroachment Protection",
        description: "Regular boundary checks, documentation of encroachments, and legal action coordination if needed.",
      },
      {
        title: "Renovation & Sale Support",
        description: "Project management for renovations, market valuation, and end-to-end sale/purchase facilitation.",
      },
    ],
    scenarios: [
      {
        title: "Tenant Refuses to Vacate",
        description:
          "Your tenant in Mumbai hasn't paid rent for 6 months and refuses to leave. We serve legal notice, coordinate with advocates, and manage the eviction process per Maharashtra Rent Control Act.",
      },
      {
        title: "Property Encroachment",
        description:
          "A neighbor has built a wall extending into your plot in Chennai. We document the encroachment with surveys, file a police complaint, and initiate civil proceedings.",
      },
      {
        title: "Emergency Plumbing/Electrical",
        description:
          "Your apartment in Bangalore has a major water leak at 2 AM. Our emergency team coordinates with verified plumbers, manages the repair, and sends you photo updates.",
      },
      {
        title: "Vacant Property Security",
        description:
          "Your ancestral home in Kerala has been vacant for 2 years. We arrange security, conduct monthly inspections, manage garden upkeep, and deter unauthorized occupation.",
      },
    ],
    emergencies: [
      "Tenant causing property damage",
      "Unauthorized construction on your land",
      "Municipal demolition notice",
      "Utility disconnection at tenant-occupied property",
    ],
    tierCoverage: {
      essential: ["Quarterly property inspection with photo report", "Annual property tax payment"],
      comprehensive: [
        "Monthly property inspection",
        "Tenant management for 1 property",
        "Rent collection & deposit",
        "Utility bill management",
        "Maintenance coordination",
      ],
      premiumLegacy: [
        "Multiple property management",
        "Full tenant lifecycle management",
        "Renovation project oversight",
        "Sale/purchase facilitation",
        "Dedicated property coordinator",
      ],
    },
  },
  {
    slug: "insurance",
    title: "Insurance (Financial) Management",
    shortTitle: "Insurance",
    tagline: "Navigate Indian insurance claims, renewals, and disputes without the runaround.",
    icon: Shield,
    color: "bg-purple-600",
    description:
      "Health insurance claims denied? Life insurance policy lapsed? We manage your entire insurance portfolio in India — from claim filing and hospital coordination to policy renewals and dispute resolution.",
    features: [
      {
        title: "Health Insurance Claims",
        description: "End-to-end claim filing, hospital coordination, and follow-up until settlement for parents' medical expenses.",
      },
      {
        title: "Life Insurance Management",
        description: "Premium tracking, policy renewals, nomination updates, and maturity claim processing.",
      },
      {
        title: "Policy Portfolio Review",
        description: "Annual review of all insurance policies to ensure adequate coverage and eliminate redundancies.",
      },
      {
        title: "Claim Dispute Resolution",
        description: "Escalation to IRDAI ombudsman, documentation preparation, and follow-up for rejected claims.",
      },
      {
        title: "New Policy Advisory",
        description: "Unbiased guidance on health, life, and property insurance suitable for NRI families.",
      },
      {
        title: "Nomination & Assignment Updates",
        description: "Keep beneficiary details current across all policies to prevent claim complications.",
      },
    ],
    scenarios: [
      {
        title: "Health Claim Denied",
        description:
          "Your mother's hospitalization claim of ₹8 lakh was rejected citing 'pre-existing condition.' We gather medical evidence, file an appeal with the insurer, and escalate to IRDAI if needed.",
      },
      {
        title: "Lapsed Life Insurance",
        description:
          "Your father's LIC policy lapsed because premiums weren't paid while he was unwell. We negotiate revival with minimal penalties and ensure future auto-debit setup.",
      },
      {
        title: "Multiple Policy Consolidation",
        description:
          "Parents have 7 insurance policies across 4 companies with overlapping coverage. We review, recommend consolidation, and manage the transition.",
      },
      {
        title: "Death Claim Processing",
        description:
          "After a parent's passing, life insurance claims need to be filed urgently. We handle documentation, nominee verification, and follow up until the claim is settled.",
      },
    ],
    emergencies: [
      "Emergency hospitalization — cashless claim needed",
      "Claim rejection requiring immediate appeal",
      "Policy about to lapse within days",
      "Insurance company refusing to honor terms",
    ],
    tierCoverage: {
      essential: ["Annual policy portfolio review", "Basic claim guidance"],
      comprehensive: [
        "Health insurance claim management",
        "Policy renewal tracking",
        "Nomination updates",
        "Claim filing assistance",
      ],
      premiumLegacy: [
        "Full claim management & dispute resolution",
        "IRDAI escalation support",
        "New policy advisory",
        "Death claim processing",
        "Multi-company portfolio management",
      ],
    },
  },
  {
    slug: "income-tax",
    title: "Income Tax Filing & Compliance",
    shortTitle: "Income Tax",
    tagline: "Stay compliant with Indian tax laws — filings, notices, and refunds handled for you.",
    icon: Receipt,
    color: "bg-rose-600",
    description:
      "NRI taxation in India is complex — rental income TDS, capital gains on property sale, DTAA benefits, and Form 15CA/CB requirements. We ensure you're compliant, optimized, and stress-free.",
    features: [
      {
        title: "Annual ITR Filing",
        description: "Timely filing of Income Tax Returns for NRIs with Indian income — rental, capital gains, interest, etc.",
      },
      {
        title: "TDS Management",
        description: "Track TDS deductions on rent, property sale, and FD interest. File for refunds where applicable.",
      },
      {
        title: "Tax Notice Response",
        description: "Handle notices from IT department — scrutiny, demand, and rectification — with proper documentation.",
      },
      {
        title: "Capital Gains Advisory",
        description: "Tax planning for property sales, mutual fund redemptions, and other capital transactions.",
      },
      {
        title: "DTAA Optimization",
        description: "Leverage Double Taxation Avoidance Agreements to minimize tax burden across countries.",
      },
      {
        title: "Form 15CA/CB Certification",
        description: "Mandatory certifications for foreign remittances from India, filed accurately and on time.",
      },
    ],
    scenarios: [
      {
        title: "Tax Notice for Rental Income",
        description:
          "You received a demand notice for unreported rental income from your Delhi flat. We compile rent receipts, file revised returns, respond to the IT department, and resolve the issue.",
      },
      {
        title: "Property Sale Capital Gains",
        description:
          "You're selling your Bangalore apartment and need to understand capital gains implications, TDS requirements, and reinvestment options under Section 54. We handle end-to-end tax planning.",
      },
      {
        title: "NRI Status Confusion",
        description:
          "You spent 180+ days in India last year and your residential status changed. We re-evaluate your tax obligations, file appropriate returns, and advise on future planning.",
      },
      {
        title: "Refund Stuck for Years",
        description:
          "Your IT refund of ₹2.5 lakh has been pending for 3 years. We trace the status, file rectification requests, and follow up with CPC Bangalore until you receive your money.",
      },
    ],
    emergencies: [
      "IT department notice with tight deadline",
      "Unexpected tax demand during property sale",
      "TDS refund blocked requiring urgent action",
      "Last-minute ITR filing deadline approaching",
    ],
    tierCoverage: {
      essential: ["Annual ITR filing for 1 person", "Basic tax documentation"],
      comprehensive: [
        "ITR filing for 2 persons (NRI + parent)",
        "TDS tracking & refund claims",
        "Tax notice response",
        "Capital gains advisory",
      ],
      premiumLegacy: [
        "Full family ITR filing",
        "DTAA optimization",
        "Proactive tax planning",
        "Form 15CA/CB management",
        "Dedicated tax advisor",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
