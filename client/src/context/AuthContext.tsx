import React, { createContext, useContext, useState } from "react";

export type ServiceStatus = "Active" | "Pending" | "Locked";
export type IssueStatus = "In Progress" | "Pending Data" | "Manager Review" | "Resolved";
export type IssuePriority = "High" | "Medium" | "Low";
export type Category = "Insurance" | "Banking" | "Property" | "Legal" | "Emergency" | "General";
export type DeadlineStatus = "Action Needed" | "NRI Trust Handling" | "Done";
export type OnboardingStatus = "done" | "in-progress" | "pending";

export interface PortalUser {
  id: string;
  name: string;
  email: string;
  portfolioId: string;
  tier: "Essential Care" | "Comprehensive" | "Premium Legacy";
  tierColor: string;
  location: string;
  parentsLocation: string;
  managedSince: string;
  isOnboarded: boolean;
  manager: {
    name: string;
    title: string;
    phone: string;
    whatsapp: string;
    available: boolean;
    photo: string;
    lastActive: string;
  };
  onboardingSteps: {
    id: string;
    title: string;
    desc: string;
    status: OnboardingStatus;
    scheduledDate?: string;
  }[];
  issues: {
    id: string;
    title: string;
    category: Category;
    status: IssueStatus;
    priority: IssuePriority;
    due: string;
    description: string;
  }[];
  documents: {
    id: string;
    name: string;
    category: "Insurance" | "Banking" | "Property" | "Legal";
    date: string;
    size: string;
  }[];
  deadlines: {
    id: string;
    title: string;
    date: string;
    daysLeft: number;
    category: "Insurance" | "Banking" | "Property" | "Legal";
    status: DeadlineStatus;
  }[];
  managerUpdates: {
    id: string;
    date: string;
    message: string;
    category: Category;
  }[];
  services: {
    id: string;
    name: string;
    category: Category;
    status: ServiceStatus;
    detail: string;
    nextAction?: string;
  }[];
}

const USERS: (PortalUser & { password: string })[] = [
  {
    id: "usr_001",
    email: "rahul.sharma@gmail.com",
    password: "Client@2026",
    name: "Rahul Sharma",
    portfolioId: "NT-2026-4421",
    tier: "Comprehensive",
    tierColor: "#d4af37",
    location: "San Francisco, USA",
    parentsLocation: "Pune, Maharashtra",
    managedSince: "January 2025",
    isOnboarded: true,
    manager: {
      name: "Vikram Malhotra",
      title: "Senior Portfolio Lead",
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      available: true,
      photo: "/generated_images/Professional_man_headshot_testimonial_c0227483.png",
      lastActive: "2 hours ago",
    },
    onboardingSteps: [],
    issues: [
      {
        id: "iss_001",
        title: "SBI Savings Account KYC Update",
        category: "Banking",
        status: "In Progress",
        priority: "High",
        due: "20 Apr 2026",
        description:
          "KYC documents submitted to SBI branch. Awaiting bank confirmation. Nominee details will be updated simultaneously.",
      },
      {
        id: "iss_002",
        title: "Property Tax Assessment — Flat 4B",
        category: "Property",
        status: "Pending Data",
        priority: "Medium",
        due: "30 Jun 2026",
        description:
          "MCD property tax invoice received. Assessment pending. Will file before the June 30 deadline.",
      },
      {
        id: "iss_003",
        title: "Health Insurance Top-Up Review",
        category: "Insurance",
        status: "Manager Review",
        priority: "Medium",
        due: "15 Apr 2026",
        description:
          "Current sum insured of ₹5L may be inadequate. Reviewing top-up options before renewal date.",
      },
    ],
    documents: [
      { id: "doc_001", name: "Mediclaim Policy 2025-26.pdf", category: "Insurance", date: "Apr 2025", size: "1.2 MB" },
      { id: "doc_002", name: "LIC Life Cover Certificate.pdf", category: "Insurance", date: "Jan 2021", size: "840 KB" },
      { id: "doc_003", name: "SBI Account Statement Feb 2026.pdf", category: "Banking", date: "Feb 2026", size: "540 KB" },
      { id: "doc_004", name: "FD Certificate — ₹3.2L (HDFC).pdf", category: "Banking", date: "Nov 2025", size: "320 KB" },
      { id: "doc_005", name: "Flat 4B Registration Deed.pdf", category: "Property", date: "Mar 2018", size: "3.4 MB" },
      { id: "doc_006", name: "Property Tax Receipt 2024-25.pdf", category: "Property", date: "Dec 2024", size: "280 KB" },
      { id: "doc_007", name: "General Power of Attorney.pdf", category: "Legal", date: "Jan 2025", size: "1.1 MB" },
    ],
    deadlines: [
      { id: "dl_001", title: "Parent's Mediclaim Renewal", date: "15 Apr 2026", daysLeft: 12, category: "Insurance", status: "NRI Trust Handling" },
      { id: "dl_002", title: "HDFC FD Maturity — ₹3.2L", date: "2 May 2026", daysLeft: 29, category: "Banking", status: "Action Needed" },
      { id: "dl_003", title: "Property Tax Q1 Due", date: "30 Jun 2026", daysLeft: 88, category: "Property", status: "NRI Trust Handling" },
      { id: "dl_004", title: "SBI KYC Re-verification", date: "1 Aug 2026", daysLeft: 120, category: "Banking", status: "NRI Trust Handling" },
    ],
    managerUpdates: [
      { id: "upd_001", date: "Mar 15, 2026", message: "SBI KYC form submitted at the branch. Expecting confirmation within 5 working days. Nominee update will follow immediately after.", category: "Banking" },
      { id: "upd_002", date: "Mar 10, 2026", message: "Mediclaim premium paid for 2025-26. Receipt uploaded to the vault. Policy is active until April 15, 2026.", category: "Insurance" },
      { id: "upd_003", date: "Feb 28, 2026", message: "MCD property tax invoice for Flat 4B received — ₹8,420 for Q1 2026. Will file payment before the June 30 deadline.", category: "Property" },
      { id: "upd_004", date: "Feb 15, 2026", message: "Semi-annual review completed. All nominees verified across 3 accounts. FD details confirmed with HDFC. Everything is in order.", category: "General" },
    ],
    services: [
      { id: "svc_001", name: "Health Insurance Management", category: "Insurance", status: "Active", detail: "Policy No. MED-2025-9821 | Sum Insured: ₹5L | Renewal: Apr 15, 2026", nextAction: "Top-up review in progress" },
      { id: "svc_002", name: "Life Insurance Management", category: "Insurance", status: "Active", detail: "LIC Policy **** 4432 | Cover: ₹25L | Nominee: Rahul Sharma ✓" },
      { id: "svc_003", name: "Income Tax Filing", category: "Legal", status: "Active", detail: "Last Filed: Jul 2025 | Senior Citizen Benefits Applied | Next: Jul 2026" },
      { id: "svc_004", name: "Banking KYC & Nominees", category: "Banking", status: "Active", detail: "SBI A/C **** 4421 | HDFC FD tracked | KYC update in progress", nextAction: "Awaiting bank confirmation" },
      { id: "svc_005", name: "Property Oversight", category: "Property", status: "Active", detail: "Flat 4B, Koregaon Park, Pune | Self-occupied | Tax filing managed" },
      { id: "svc_006", name: "House Tax & Municipal", category: "Property", status: "Active", detail: "MCD registered | Last paid Dec 2025 | Next due: Jun 2026" },
      { id: "svc_007", name: "Utility Payment Monitoring", category: "Property", status: "Active", detail: "Electricity, Water, Gas — monitored for payment defaults" },
      { id: "svc_008", name: "Multiple Property Management", category: "Property", status: "Locked", detail: "Upgrade to Premium Legacy to manage additional properties" },
      { id: "svc_009", name: "Succession & Will Planning", category: "Legal", status: "Locked", detail: "Upgrade to Premium Legacy for Will drafting and registration" },
      { id: "svc_010", name: "Probate & Legal Formalities", category: "Legal", status: "Locked", detail: "Upgrade to Premium Legacy for complete succession management" },
    ],
  },
  {
    id: "usr_002",
    email: "anita.verma@gmail.com",
    password: "Client@2026",
    name: "Anita Verma",
    portfolioId: "NT-2026-7834",
    tier: "Essential Care",
    tierColor: "#6366f1",
    location: "London, UK",
    parentsLocation: "New Delhi",
    managedSince: "April 2026",
    isOnboarded: false,
    manager: {
      name: "Vikram Malhotra",
      title: "Senior Portfolio Lead",
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      available: true,
      photo: "/generated_images/Professional_man_headshot_testimonial_c0227483.png",
      lastActive: "Just now",
    },
    onboardingSteps: [
      {
        id: "step_01",
        title: "Welcome Call Scheduled",
        desc: "Your relationship manager Vikram will walk you through the onboarding process and explain what we will manage.",
        status: "in-progress",
        scheduledDate: "April 20, 2026 at 3:00 PM IST",
      },
      {
        id: "step_02",
        title: "Upload Your Parents' Documents",
        desc: "Share existing insurance policies, bank passbooks, and any property or legal papers via the vault.",
        status: "pending",
      },
      {
        id: "step_03",
        title: "KYC & Nominee Verification",
        desc: "We visit the bank branches and insurance offices to verify all nominees and update KYC records.",
        status: "pending",
      },
      {
        id: "step_04",
        title: "Services Go Live",
        desc: "Once the initial audit is complete, your full Essential Care dashboard activates with live tracking.",
        status: "pending",
      },
    ],
    issues: [],
    documents: [],
    deadlines: [],
    managerUpdates: [
      {
        id: "upd_001",
        date: "Apr 10, 2026",
        message: "Welcome to NRI Trust, Anita. Your portfolio has been created. I have scheduled our welcome call for April 20 at 3PM IST. Please keep your parents' insurance policy numbers and bank account details handy.",
        category: "General",
      },
    ],
    services: [
      { id: "svc_001", name: "Health Insurance Management", category: "Insurance", status: "Pending", detail: "Will be activated after initial document collection" },
      { id: "svc_002", name: "Life Insurance Management", category: "Insurance", status: "Pending", detail: "Will be activated after initial document collection" },
      { id: "svc_003", name: "Income Tax Filing", category: "Legal", status: "Pending", detail: "Will be activated after the initial audit call" },
      { id: "svc_004", name: "Emergency Response", category: "Emergency", status: "Pending", detail: "Will be activated after onboarding is complete" },
      { id: "svc_005", name: "Banking KYC & Nominees", category: "Banking", status: "Locked", detail: "Not included in Essential Care — upgrade to Comprehensive" },
      { id: "svc_006", name: "Property Oversight", category: "Property", status: "Locked", detail: "Not included in Essential Care — upgrade to Comprehensive" },
      { id: "svc_007", name: "Succession & Will Planning", category: "Legal", status: "Locked", detail: "Not included in Essential Care — upgrade to Premium Legacy" },
    ],
  },
];

interface AuthContextType {
  isAuthenticated: boolean;
  user: PortalUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PortalUser | null>(() => {
    try {
      const saved = sessionStorage.getItem("nri_portal_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (email: string, password: string): boolean => {
    const found = USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return false;
    const { password: _pwd, ...userData } = found;
    setUser(userData);
    sessionStorage.setItem("nri_portal_user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("nri_portal_user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
