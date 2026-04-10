import { createContext, useContext, useState, ReactNode } from 'react';

export type Phase = 'green' | 'orange' | 'red';

export const PHASE_CONFIG = {
  green: {
    label: 'Planning Zone',
    sublabel: 'Early Protection',
    ageRange: 'Parents 55–65',
    stage: 'Planning & Prevention',
    color: '#22c55e',
    colorDim: '#15803d',
    colorRgb: '34, 197, 94',
    gradient: 'linear-gradient(135deg, #052e16 0%, #050914 70%)',
    borderGlow: '0 0 40px rgba(34, 197, 94, 0.3)',
    description: 'Proactive protection starts here — before any crisis.',
    heroHeadline: ['Start Early.', 'Protect Everything.'],
    heroSub: 'Your parents are in their prime years. Now is the perfect time to build an unbreakable protection system — before any crisis forces your hand.',
    ctaText: 'Begin Your Protection Plan',
    ctaUrgency: 'Free audit · 20 minutes',
    urgency: 'calm' as const,
    pulse: 2.5,
    badge: '🛡️',
    zonePage: '/zone/green',
    anxieties: [
      { title: 'No Will Yet', problem: 'Most families delay Will registration until it is too late.', impact: 'Property disputes and legal battles.' },
      { title: 'Wrong Nominees', problem: 'Nominees are outdated or missing across accounts.', impact: 'Family cannot access funds.' },
      { title: 'Scattered Accounts', problem: 'Multiple bank accounts untracked and unmapped.', impact: 'Money gets lost in the system.' },
      { title: 'Expiring KYC', problem: 'Bank KYC expires, accounts get frozen silently.', impact: 'No access to funds when needed.' },
      { title: 'No Power of Attorney', problem: 'No legal authority set up to act on their behalf.', impact: 'You cannot manage anything remotely.' },
      { title: 'Underinsured', problem: 'Health insurance coverage is inadequate for their age.', impact: 'Massive out-of-pocket expenses.' },
    ],
    hoverContent: {
      questions: [
        'Do your parents have active health insurance?',
        'Is there a registered Will in place?',
        'Have you set up Power of Attorney from abroad?',
      ],
      problems: [
        '"We thought we had time" — the most common thing families say after a crisis',
        'Insurance exists but nominees are wrong and coverage is outdated',
      ],
      benefits: [
        'Build complete protection before any problem occurs',
        'Start with a free audit — takes just 20 minutes',
      ],
    },
  },
  orange: {
    label: 'Active Watch',
    sublabel: 'Ongoing Management',
    ageRange: 'Parents 65–75',
    stage: 'Verification & Structuring',
    color: '#f97316',
    colorDim: '#c2410c',
    colorRgb: '249, 115, 22',
    gradient: 'linear-gradient(135deg, #431407 0%, #050914 70%)',
    borderGlow: '0 0 40px rgba(249, 115, 22, 0.3)',
    description: 'Active monitoring and management — stay ahead of every issue.',
    heroHeadline: ['Stay Ahead.', 'Every Step Secured.'],
    heroSub: 'At this age, small gaps become big problems fast. Let\'s close every open risk before it becomes an emergency — properly and completely.',
    ctaText: 'Secure Your Position Now',
    ctaUrgency: 'Act before problems escalate',
    urgency: 'moderate' as const,
    pulse: 1.5,
    badge: '👁️',
    zonePage: '/zone/orange',
    anxieties: [
      { title: 'Property at Risk', problem: 'Vacant properties attract encroachment and disputes.', impact: 'You may lose what took decades to build.' },
      { title: 'Stale Documents', problem: 'Property papers, ID documents not updated in years.', impact: 'Legal complications during transfer.' },
      { title: 'No Emergency Plan', problem: 'No documented plan for what to do in a medical crisis.', impact: 'Family panics and makes costly mistakes.' },
      { title: 'Tenant Problems', problem: 'Tenants occupying property beyond agreement terms.', impact: 'Legal eviction costs time and money.' },
      { title: 'Tax Penalties', problem: 'House tax and utility bills missed due to distance.', impact: 'Penalties, disconnections, legal notices.' },
      { title: 'Insurance Gaps', problem: 'Health coverage does not match current medical needs.', impact: 'Huge bills paid from savings.' },
    ],
    hoverContent: {
      questions: [
        'Are all insurance policies active and claim-ready?',
        'Do you know exactly where every document is stored?',
        'Is there an emergency access plan your family can follow?',
      ],
      problems: [
        'Insurance exists — but the claim still gets rejected due to missing paperwork',
        'Tenants are in the house, rent agreement expired two years ago',
      ],
      benefits: [
        'We verify, organise, and close every gap — completely',
        'One dashboard — every account, document, and policy in one place',
      ],
    },
  },
  red: {
    label: 'Critical Care',
    sublabel: 'Urgent Action',
    ageRange: 'Parents 75+ or critical',
    stage: 'Emergency & Crisis Support',
    color: '#ef4444',
    colorDim: '#b91c1c',
    colorRgb: '239, 68, 68',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #050914 70%)',
    borderGlow: '0 0 40px rgba(239, 68, 68, 0.4)',
    description: 'Immediate expert support — we are here right now.',
    heroHeadline: ["We're Here.", 'Right Now.'],
    heroSub: 'Every hour matters. Our team responds within 2 hours to handle every legal, financial, and administrative challenge you are facing.',
    ctaText: 'Get Emergency Support Now',
    ctaUrgency: 'Response within 2 hours · 24/7',
    urgency: 'urgent' as const,
    pulse: 0.7,
    badge: '🚨',
    zonePage: '/zone/red',
    anxieties: [
      { title: 'Succession Blocked', problem: 'Bank accounts frozen, no succession certificate in place.', impact: 'Family cannot access their own money.' },
      { title: 'No Will Found', problem: 'Will was never registered or cannot be located.', impact: 'Property disputed, legal battle begins.' },
      { title: 'Claim Rejected', problem: 'Insurance claim rejected at the worst possible moment.', impact: 'Massive bills with no recourse.' },
      { title: 'Legal Notices', problem: 'Government or court notices arriving with no one to respond.', impact: 'Property seized, penalties escalating.' },
      { title: 'Probate Needed', problem: 'Court approval required before assets can be transferred.', impact: 'Months of legal process ahead.' },
      { title: 'Estate Chaos', problem: 'No one has a clear picture of all assets and liabilities.', impact: 'Unknown debts surface after passing.' },
    ],
    hoverContent: {
      questions: [
        'Can your family access bank funds within 24 hours?',
        'Has an insurance claim been filed yet?',
        'Is there a legal representative handling matters in India?',
      ],
      problems: [
        'Bank accounts frozen — family has no access to funds',
        'Insurance company rejecting a claim that should clearly be approved',
      ],
      benefits: [
        'Our team responds within 2 hours — day or night',
        'We handle everything: legal, financial, administrative',
      ],
    },
  },
} as const;

export function getPhaseFromAge(age: number, isDemise: boolean): Phase {
  if (isDemise || age >= 75) return 'red';
  if (age >= 65) return 'orange';
  return 'green';
}

interface UserContextType {
  phase: Phase | null;
  zoneSelected: boolean;
  selectZone: (phase: Phase) => void;
  resetZone: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

const STORAGE_KEY = 'nritrust_zone_v2';

export function UserProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored as Phase | null;
    } catch { return null; }
  });

  const selectZone = (p: Phase) => {
    try { localStorage.setItem(STORAGE_KEY, p); } catch {}
    setPhase(p);
  };

  const resetZone = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setPhase(null);
  };

  return (
    <UserContext.Provider value={{
      phase,
      zoneSelected: phase !== null,
      selectZone,
      resetZone,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}

// Backwards compat shim — components that read profile.phase still work
export function usePhaseConfig() {
  const { phase } = useUser();
  if (!phase) return null;
  return { phase, config: PHASE_CONFIG[phase] };
}
