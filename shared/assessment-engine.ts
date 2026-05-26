export type Persona = 'GREEN' | 'ORANGE' | 'RED';

export interface QuestionOption {
  value: string;
  label: string;
  points?: number;
  flags?: string[];
}

export interface Question {
  id: string;
  category: 'legal' | 'health' | 'asset' | 'financial' | 'coordination';
  visibility: Persona[];
  type: 'radio_card' | 'select' | 'text' | 'checkbox';
  label: string;
  description?: string;
  options?: QuestionOption[];
  required?: boolean;
}

export interface PlaybookAction {
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  action: string;
  why: string;
  category: 'legal' | 'health' | 'asset' | 'financial';
}

export interface RiskCategory {
  label: string;
  status: 'PROTECTED' | 'AT_RISK' | 'REVIEW';
  detail: string;
}

// ─── PLAYBOOK ACTION BANKS ────────────────────────────────────────────────────
// Sourced directly from the three NRITrust Excel Playbooks

const PLAYBOOK: Record<Persona, PlaybookAction[]> = {
  GREEN: [
    { priority: 'CRITICAL', action: 'Open NRE Savings Account', why: 'Tax-free interest on remittances; FEMA compliant. Resident accounts are illegal for NRI use.', category: 'financial' },
    { priority: 'CRITICAL', action: 'Open NRO Account for Indian income', why: 'Rent, dividends, pension collected in India must route through NRO.', category: 'financial' },
    { priority: 'CRITICAL', action: 'Purchase Term Insurance ₹1–2 Cr', why: 'Financial safety net for dependants. This is the single most underinsured area for young NRIs.', category: 'health' },
    { priority: 'CRITICAL', action: 'Health Insurance for Parents ₹10–25 L', why: 'Protect from medical expense shocks. Corporate cover is unstable and expires on retirement.', category: 'health' },
    { priority: 'HIGH', action: 'Link PAN–Aadhaar and update KYC everywhere', why: 'SEBI/RBI mandate. Required for investments, banking transactions, and ITR filing.', category: 'financial' },
    { priority: 'HIGH', action: 'Nominate beneficiaries on ALL accounts', why: 'Without nominations, banks freeze accounts and require court orders during emergencies.', category: 'asset' },
    { priority: 'HIGH', action: 'Start SIP in 2–3 equity mutual funds', why: 'Rupee-cost averaging; long-term wealth building while you have time on your side.', category: 'financial' },
    { priority: 'HIGH', action: 'Build 6-month Emergency Fund in India', why: 'Liquid FD or liquid fund. Hospital deposits and travel emergencies require instant access.', category: 'financial' },
    { priority: 'HIGH', action: 'Create a Will for Indian assets', why: 'Avoid family disputes. Without a Will, Indian courts apply Intestate Succession laws.', category: 'legal' },
    { priority: 'HIGH', action: 'Appoint a Power of Attorney in India', why: 'Trusted person to sign medical consents and financial withdrawals from abroad.', category: 'legal' },
    { priority: 'MEDIUM', action: 'Digitise and cloud-store all property documents', why: 'Title deeds, agreements, vehicle RC. Originals are often lost or withheld by relatives.', category: 'asset' },
    { priority: 'MEDIUM', action: 'Start ELSS investments for 80C tax benefit', why: 'Tax-saving combined with long-term equity growth. Best instrument at this income level.', category: 'financial' },
    { priority: 'MEDIUM', action: 'File ITR in India if any Indian income exists', why: 'Tax compliance and loan eligibility. Gaps in filing create problems when repatriating.', category: 'financial' },
    { priority: 'MEDIUM', action: 'Plan for parents\' future care needs', why: 'Medical corpus, assisted living options. Begin provisioning now before it becomes urgent.', category: 'health' },
  ],
  ORANGE: [
    { priority: 'CRITICAL', action: 'Create comprehensive Will in India and country of residence', why: 'Without a registered Will, courts apply Intestate Succession. Family disputes take decades.', category: 'legal' },
    { priority: 'CRITICAL', action: 'Audit all existing insurance — remove gaps', why: 'Redundant covers waste money; gaps create catastrophic exposure during claims.', category: 'health' },
    { priority: 'CRITICAL', action: 'Upgrade parents\' health insurance to ₹25–50 L super top-up', why: 'Critical illness add-on essential at this age. Standard covers are inadequate for ICU costs.', category: 'health' },
    { priority: 'CRITICAL', action: 'Compile full asset register — all accounts, properties, investments', why: 'Without a map of assets, family members cannot manage or recover them in a crisis.', category: 'asset' },
    { priority: 'CRITICAL', action: 'Start retirement corpus planning — calculate shortfall now', why: 'Most NRIs underestimate India inflation. A delayed start costs 3–5x the corpus required.', category: 'financial' },
    { priority: 'HIGH', action: 'Appoint Power of Attorney in India', why: 'Critical for remote management of property, banking, and medical decisions from abroad.', category: 'legal' },
    { priority: 'HIGH', action: 'Verify all nominations are updated across every account', why: 'Bank, MF, insurance, demat. A single missing nomination locks assets for months.', category: 'asset' },
    { priority: 'HIGH', action: 'Obtain copies of parents\' Will and legal documents', why: 'Clarify inheritance to avoid disputes. Most families discover conflicts only at crisis.', category: 'legal' },
    { priority: 'HIGH', action: 'Increase SIP contributions by 10–15% annually', why: 'Power of compounding for retirement corpus. This decade is the highest-impact investment window.', category: 'financial' },
    { priority: 'HIGH', action: 'Set up children\'s education corpus fund', why: 'Target amount, timeline, right instruments. 7–10 year runway is needed for meaningful corpus.', category: 'financial' },
    { priority: 'HIGH', action: 'Review tax efficiency across all investments', why: 'DTAA, ELSS, NPS, bonds. Most NRIs overpay tax by 15–20% from unoptimised structures.', category: 'financial' },
    { priority: 'HIGH', action: 'Plan parents\' monthly income stream', why: 'Senior Citizen FDs, SCSS, pension, MIP. Ensure they are not dependent on ad-hoc transfers.', category: 'financial' },
    { priority: 'HIGH', action: 'Enhance term insurance to 15–20x annual income', why: 'Cover should match wealth-accumulation phase. Most 40s NRIs are critically underinsured.', category: 'health' },
    { priority: 'MEDIUM', action: 'Conduct property title audit — rent, title, mutation status', why: 'Pending mutation is the leading cause of property encroachment. NRIs are prime targets.', category: 'asset' },
    { priority: 'MEDIUM', action: 'Plan elder care for parents', why: 'Retirement home, assisted living, corpus. Planning at 40s costs 3x less than planning at 60s.', category: 'health' },
    { priority: 'MEDIUM', action: 'Explore GIFT City and NRI bonds for tax-efficient diversification', why: 'GIFT City provides USD-denominated instruments with Indian market access. Tax-neutral structure.', category: 'financial' },
  ],
  RED: [
    { priority: 'CRITICAL', action: 'Complete Will and Trust documentation — all assets covered NOW', why: 'All assets must be covered, nominees and trustees named. Cognitive decline removes legal capacity to sign.', category: 'legal' },
    { priority: 'CRITICAL', action: 'Settle parents\' succession and estate matters', why: 'Probate, property transfer, inheritance. Each year of delay adds legal complexity and family friction.', category: 'legal' },
    { priority: 'CRITICAL', action: 'Health: super top-up + critical illness — no co-pay, lifetime renewability', why: 'High-value cover with no co-pay. ICU costs exceed ₹10L within 72 hours in top hospitals.', category: 'health' },
    { priority: 'CRITICAL', action: 'Assess retirement corpus vs monthly income need — act on shortfall', why: 'India inflation at 6–7% erodes purchasing power faster than most retirement models assume.', category: 'financial' },
    { priority: 'CRITICAL', action: 'Update all nominations; convert to joint holdings with survivors', why: 'No asset should be without a nominee. Single-owner accounts create probate delays of 18+ months.', category: 'asset' },
    { priority: 'HIGH', action: 'Appoint Power of Attorney + alternate in India', why: 'Property and financial management cannot be done remotely without a legally registered PoA.', category: 'legal' },
    { priority: 'HIGH', action: 'Create Letter of Instruction for family', why: 'Who to call, what documents exist, where they are kept. Essential for family survival in a crisis.', category: 'legal' },
    { priority: 'HIGH', action: 'Shift equity allocation towards balanced or debt instruments', why: 'Capital preservation over growth. A market correction at 55+ has no recovery runway.', category: 'financial' },
    { priority: 'HIGH', action: 'Create structured monthly income plan', why: 'SCSS, PMVVY, SWP, RBI bonds, FD ladder. Income must be predictable, inflation-adjusted, and liquid.', category: 'financial' },
    { priority: 'HIGH', action: 'Liquidate non-performing and idle assets', why: 'Vacant plots, dormant FDs, stale accounts erode through inflation and carry legal risk.', category: 'asset' },
    { priority: 'HIGH', action: 'Engage FEMA and tax advisor for repatriation compliance plan', why: 'NRI-to-resident transition requires FEMA compliance or penalties apply to every account.', category: 'financial' },
    { priority: 'HIGH', action: 'Decide which properties to sell, retain, or gift', why: 'Tax, family needs, location, liquidity factors must be weighed now before health limits decision-making.', category: 'asset' },
    { priority: 'HIGH', action: 'Review all foreign pension and retirement benefits', why: 'Social Security, EPF, EPS, gratuity, superannuation — many NRIs leave significant sums unclaimed.', category: 'financial' },
    { priority: 'HIGH', action: 'Set up complete elder care plan for yourself and spouse', why: 'Health, finances, legal — a complete plan prevents crisis-driven decisions in emergency situations.', category: 'health' },
    { priority: 'MEDIUM', action: 'Gift or transfer assets to children in a tax-efficient structure', why: 'Tax-efficient wealth transfer while you have full legal capacity to execute the structure correctly.', category: 'asset' },
    { priority: 'MEDIUM', action: 'Annual review of estate plan — update Will, PoA, nominations', why: 'Life changes. A Will written at 52 may be dangerously outdated at 60 after asset changes.', category: 'legal' },
  ]
};

// ─── QUESTION BANK ────────────────────────────────────────────────────────────

export const ASSESSMENT_ENGINE = {
  version: "2.0.0",
  personas: {
    GREEN: { id: "persona_green", label: "Plan Ahead (Pioneer)", priority: "PROACTIVE", ageRange: "25–35", weights: { legal: 0.2, health: 0.2, asset: 0.4, coordination: 0.2 } },
    ORANGE: { id: "persona_orange", label: "Plan Now (Balancer)", priority: "PRIORITY", ageRange: "36–50", weights: { legal: 0.35, asset: 0.35, health: 0.3 } },
    RED: { id: "persona_red", label: "Act Immediately (Caregiver)", priority: "URGENT", ageRange: "51+", weights: { legal: 0.4, health: 0.4, asset: 0.2 } }
  },
  questions: [
    // GLOBAL
    {
      id: "q_parent_age", category: "coordination", visibility: ["GREEN", "ORANGE", "RED"],
      type: "select", label: "Age Bracket of Parents in India", required: true,
      options: [
        { value: "under_55", label: "Under 55 (Green Zone)", personaMap: ["GREEN"] },
        { value: "55_65", label: "55 – 65 (Orange Zone)", personaMap: ["ORANGE"] },
        { value: "65_plus", label: "65 or above (Red Zone)", personaMap: ["RED"] }
      ]
    },
    // GREEN ZONE
    {
      id: "q_green_banking", category: "financial", visibility: ["GREEN"], type: "radio_card", required: true,
      label: "Banking Compliance: Are you using NRE/NRO accounts?",
      description: "Resident savings accounts cannot be used for foreign remittances under FEMA laws.",
      options: [
        { value: "yes", label: "Yes, fully set up.", points: 25 },
        { value: "no", label: "No, still using regular accounts.", points: 0, flags: ["FLAG_BANKING_COMPLIANCE"] }
      ]
    },
    {
      id: "q_green_nomination", category: "asset", visibility: ["GREEN"], type: "radio_card", required: true,
      label: "Nomination Audit: Are you named as nominee in all parents' assets?",
      options: [
        { value: "yes", label: "Verified across all accounts and assets.", points: 25 },
        { value: "no", label: "No, or I am unsure.", points: 0, flags: ["FLAG_NOMINATION_GAP"] }
      ]
    },
    {
      id: "q_green_insurance", category: "health", visibility: ["GREEN"], type: "radio_card", required: true,
      label: "Medical Safety Net: Do parents have an independent health insurance policy?",
      options: [
        { value: "yes", label: "Yes, independent policy in place.", points: 25 },
        { value: "no", label: "No / Relying on corporate cover.", points: 0, flags: ["FLAG_HEALTH_EXPOSURE"] }
      ]
    },
    {
      id: "q_green_notes", category: "coordination", visibility: ["GREEN"], type: "text", required: true,
      label: "What is your biggest concern regarding your parents' financial future in India?"
    },
    // ORANGE ZONE
    {
      id: "q_orange_poa", category: "legal", visibility: ["ORANGE"], type: "radio_card", required: true,
      label: "Legal Signature Authority: Do you have a registered Power of Attorney in India?",
      options: [
        { value: "yes", label: "Yes, legally registered.", points: 25 },
        { value: "no", label: "No / Only informal arrangement.", points: 0, flags: ["FLAG_NO_POA"] }
      ]
    },
    {
      id: "q_orange_will", category: "legal", visibility: ["ORANGE"], type: "radio_card", required: true,
      label: "Legacy Control: Is there a registered Will for Indian assets?",
      options: [
        { value: "yes", label: "Yes, registered with Sub-Registrar.", points: 25 },
        { value: "no", label: "No / Drafted but not registered.", points: 0, flags: ["FLAG_NO_WILL"] }
      ]
    },
    {
      id: "q_orange_property", category: "asset", visibility: ["ORANGE"], type: "radio_card", required: true,
      label: "Title Verification: Have property titles been audited and mutation completed?",
      options: [
        { value: "yes", label: "Yes, titles are clear.", points: 25 },
        { value: "no", label: "No / Mutation may be pending.", points: 0, flags: ["FLAG_PROPERTY_VULNERABILITY"] }
      ]
    },
    {
      id: "q_orange_notes", category: "coordination", visibility: ["ORANGE"], type: "text", required: true,
      label: "Describe any existing family friction, property disputes, or legal concerns you are dealing with."
    },
    // RED ZONE
    {
      id: "q_red_liquidity", category: "financial", visibility: ["RED"], type: "radio_card", required: true,
      label: "Emergency Liquidity: Do you have immediate access to ₹10 Lakh or more in liquid accounts?",
      options: [
        { value: "yes", label: "Yes, in joint liquid accounts.", points: 25 },
        { value: "no", label: "No, mostly locked in FDs or property.", points: 0, flags: ["FLAG_LIQUIDITY_TRAP"] }
      ]
    },
    {
      id: "q_red_care", category: "health", visibility: ["RED"], type: "radio_card", required: true,
      label: "On-Ground Stewardship: Is a local care manager or trusted coordinator assigned in India?",
      options: [
        { value: "yes", label: "Yes, a designated coordinator is in place.", points: 25 },
        { value: "no", label: "No, managing entirely from abroad.", points: 0, flags: ["FLAG_CARE_VACUUM"] }
      ]
    },
    {
      id: "q_red_estate", category: "legal", visibility: ["RED"], type: "radio_card", required: true,
      label: "Wealth Transfer: Has estate distribution and succession planning been formalized?",
      options: [
        { value: "yes", label: "Yes, Will and succession plan in place.", points: 25 },
        { value: "no", label: "No plan formalized yet.", points: 0, flags: ["FLAG_ESTATE_INERTIA"] }
      ]
    },
    {
      id: "q_red_notes", category: "coordination", visibility: ["RED"], type: "text", required: true,
      label: "List the most pressing medical, legal, or financial challenges you are facing right now."
    }
  ] as Question[],

  recommendations: {
    FLAG_BANKING_COMPLIANCE: { title: "NRE/NRO Account Setup", description: "Convert savings to NRE/NRO immediately. Resident accounts are legally non-compliant for NRIs and invite FEMA penalties.", action: "Standardise banking structure — open NRE + NRO accounts." },
    FLAG_NOMINATION_GAP: { title: "Succession Safeguard Audit", description: "Missing nominations mean frozen assets during medical emergencies. Banks refuse access without court orders.", action: "Execute 100% nomination audit across all accounts and assets." },
    FLAG_HEALTH_EXPOSURE: { title: "Medical Liquidity Protection", description: "Aging parents require independent high-value cover. Corporate policies expire on retirement and are capped at inadequate limits.", action: "Set up independent family health insurance pool (₹10–25 L)." },
    FLAG_NO_POA: { title: "Registered Power of Attorney", description: "Without a registered POA, you are legally paralysed from abroad during any emergency — medical, financial, or legal.", action: "Draft and register a Specific Power of Attorney immediately." },
    FLAG_NO_WILL: { title: "Succession Registry", description: "Unregistered Wills are easily contested in court. Registration provides absolute legal protection against family disputes.", action: "Register Will at Sub-Registrar office — both countries." },
    FLAG_PROPERTY_VULNERABILITY: { title: "Property Mutation and Title Search", description: "Pending mutation is the #1 cause of property encroachment and loss for NRIs. You cannot defend what you cannot document.", action: "Initiate formal title verification and complete mutation." },
    FLAG_LIQUIDITY_TRAP: { title: "Emergency Cash Corpus", description: "Indian hospitals require ₹2–5 L deposit upfront. FDs take 3–5 days to break from abroad. This is a critical risk.", action: "Set up ₹10 L liquid emergency pool in a joint NRO account." },
    FLAG_CARE_VACUUM: { title: "Family Office Stewardship", description: "Remote management during a crisis causes catastrophic decision delays. A 24-hour gap can be the difference in an emergency.", action: "Appoint a trusted on-ground Family Case Manager." },
    FLAG_ESTATE_INERTIA: { title: "Wealth Preservation Planning", description: "Asset value erodes through legal complexity and family friction if inheritance is not structured while you have full legal capacity.", action: "Finalise estate distribution plan and register Will now." }
  }
};

// ─── CATEGORY RISK ASSESSMENT ─────────────────────────────────────────────────

function assessCategoryRisks(persona: Persona, flags: string[], answers: Record<string, string>): Record<string, RiskCategory> {
  const risks: Record<string, RiskCategory> = {
    legal: { label: '⚖ Legal Structure', status: 'PROTECTED', detail: 'POA and Will in place' },
    health: { label: '🏥 Health Security', status: 'PROTECTED', detail: 'Insurance coverage adequate' },
    asset: { label: '🏠 Asset Protection', status: 'PROTECTED', detail: 'Nominations and titles verified' },
    financial: { label: '💰 Financial Liquidity', status: 'PROTECTED', detail: 'Accounts compliant and liquid' }
  };

  if (flags.includes('FLAG_NO_POA') || flags.includes('FLAG_ESTATE_INERTIA')) {
    risks.legal = { label: '⚖ Legal Structure', status: 'AT_RISK', detail: 'No POA registered · No Will in place' };
  } else if (flags.includes('FLAG_NO_WILL')) {
    risks.legal = { label: '⚖ Legal Structure', status: 'AT_RISK', detail: 'No registered Will · Succession unprotected' };
  }

  if (flags.includes('FLAG_HEALTH_EXPOSURE') || flags.includes('FLAG_CARE_VACUUM')) {
    risks.health = { label: '🏥 Health Security', status: 'AT_RISK', detail: 'No independent insurance · No on-ground coordinator' };
  }

  if (flags.includes('FLAG_NOMINATION_GAP') || flags.includes('FLAG_PROPERTY_VULNERABILITY')) {
    risks.asset = { label: '🏠 Asset Protection', status: 'AT_RISK', detail: 'Nominations missing · Property title unverified' };
  } else if (flags.includes('FLAG_NOMINATION_GAP')) {
    risks.asset = { label: '🏠 Asset Protection', status: 'AT_RISK', detail: 'Beneficiary nominations missing on accounts' };
  }

  if (flags.includes('FLAG_BANKING_COMPLIANCE') || flags.includes('FLAG_LIQUIDITY_TRAP')) {
    risks.financial = { label: '💰 Financial Liquidity', status: 'AT_RISK', detail: 'Non-compliant accounts · Emergency cash locked' };
  } else if (flags.includes('FLAG_BANKING_COMPLIANCE')) {
    risks.financial = { label: '💰 Financial Liquidity', status: 'REVIEW', detail: 'FEMA-non-compliant accounts detected' };
  }

  return risks;
}

// ─── REPORT GENERATION ────────────────────────────────────────────────────────

export function calculateAssessment(answers: Record<string, string>) {
  const ageBracket = answers['q_parent_age'];
  let persona: Persona = 'GREEN';
  if (ageBracket === '55_65') persona = 'ORANGE';
  if (ageBracket === '65_plus') persona = 'RED';

  let score = 0;
  const flags: string[] = [];
  const activeQuestions = (ASSESSMENT_ENGINE.questions as Question[]).filter(q => q.visibility.includes(persona));

  activeQuestions.forEach(q => {
    const answer = answers[q.id];
    if ((q.type === 'radio_card' || q.type === 'select') && q.options) {
      const option = q.options.find(o => o.value === answer);
      if (option) {
        score += option.points || 0;
        if (option.flags) flags.push(...option.flags);
      }
    }
  });

  let urgency: 'CRITICAL' | 'MODERATE' | 'STABLE' = 'STABLE';
  if (score < 30) urgency = 'CRITICAL';
  else if (score < 60) urgency = 'MODERATE';

  const categoryRisks = assessCategoryRisks(persona, flags, answers);
  const recommendations = flags
    .map(f => ASSESSMENT_ENGINE.recommendations[f as keyof typeof ASSESSMENT_ENGINE.recommendations])
    .filter(Boolean);

  const priorityActions = buildPriorityActions(persona, flags);
  const fullSummary = buildFullSummary(persona, urgency, answers, flags, categoryRisks, priorityActions);

  return { persona, score, flags, recommendations, urgency, categoryRisks, priorityActions, fullSummary };
}

function buildPriorityActions(persona: Persona, flags: string[]): PlaybookAction[] {
  const actions = PLAYBOOK[persona];

  // Always include critical actions, plus flag-triggered actions promoted to top
  const critical = actions.filter(a => a.priority === 'CRITICAL');
  const high = actions.filter(a => a.priority === 'HIGH');
  const medium = actions.filter(a => a.priority === 'MEDIUM');

  // If user has no flags (high score) show fewer items; more flags = more items shown
  const highCount = flags.length === 0 ? 3 : flags.length >= 2 ? 6 : 5;
  const medCount = flags.length === 0 ? 2 : 3;

  return [
    ...critical,
    ...high.slice(0, highCount),
    ...medium.slice(0, medCount)
  ];
}

function buildFullSummary(
  persona: Persona,
  urgency: string,
  answers: Record<string, string>,
  flags: string[],
  categoryRisks: Record<string, RiskCategory>,
  priorityActions: PlaybookAction[]
): string {
  const name = answers['name'] || 'Principal';
  const personaConfig = ASSESSMENT_ENGINE.personas[persona];
  const textInput = answers['q_red_notes'] || answers['q_orange_notes'] || answers['q_green_notes'] || '';

  const introMap: Record<Persona, string> = {
    RED: `**THE CRISIS RESPONSE PROFILE — RED ZONE (Ages 51+)**\nYou are managing a high-fragility environment where wealth preservation, estate succession, and medical stewardship all require immediate action. Your urgency status is **${urgency}**. This is not about planning — it is about active stabilisation before a crisis removes your ability to act.`,
    ORANGE: `**THE STRATEGIC BALANCER PROFILE — ORANGE ZONE (Ages 36–50)**\nYou are at the critical mid-life pivot where decisions made in the next 2–3 years will determine how safely your family navigates the next two decades. Your urgency status is **${urgency}**. The 'Wait and Watch' approach is now your greatest financial liability.`,
    GREEN: `**THE FOUNDATIONAL PIONEER PROFILE — GREEN ZONE (Ages 25–35)**\nYou are in the early-advantage stage. Your parents are currently independent, but the legal and financial foundation of your family's Indian assets is **${urgency}**. You have the luxury of time — but structural non-compliance compounds into a crisis faster than most NRIs expect.`
  };

  const riskLines = Object.values(categoryRisks)
    .map(r => `${r.label}: ${r.status === 'PROTECTED' ? '✓ PROTECTED' : r.status === 'AT_RISK' ? '⚠ AT RISK — ' + r.detail : '▶ REVIEW — ' + r.detail}`)
    .join('\n');

  const contextAnalysis = textInput.length > 10
    ? `\n\n**YOUR SPECIFIC CONTEXT:**\nRegarding your situation — "${textInput}" — our analysis identifies this as a **High-Priority Trigger**. This specific context compounds your existing structural risks and should be the first topic discussed in your advisory session.`
    : '';

  const actionLines = priorityActions
    .map(a => `${a.priority === 'CRITICAL' ? '🔴' : a.priority === 'HIGH' ? '🟠' : '🟡'} **${a.priority}** — ${a.action}\n   ${a.why}`)
    .join('\n\n');

  const doNots = [
    '◉ **DO NOT** rely on informal family arrangements or verbal promises — they carry zero legal weight in Indian courts.',
    '◉ **DO NOT** use resident savings accounts for foreign income — it is a FEMA violation that invites RBI scrutiny.',
    '◉ **DO NOT** assume medical insurance from abroad covers Indian hospital billing procedures efficiently.',
    '◉ **DO NOT** postpone a Will until "a better time" — cognitive decline removes the legal capacity to sign.'
  ].join('\n');

  const conclusion = `**YOUR NEXT STEP:**\nYour ${persona} Zone profile requires a shift from passive observation to active **Family Office Governance**. Book your complimentary 30-minute Strategy Session with an NRI Trust advisor to prioritise these directives and create a time-bound action plan specific to your family.`;

  return [
    introMap[persona],
    `**RISK SNAPSHOT:**\n${riskLines}${contextAnalysis}`,
    `**YOUR PRIORITY ACTION PLAN:**\n\n${actionLines}`,
    `**CRITICAL WARNINGS — WHAT NOT TO DO:**\n\n${doNots}`,
    conclusion
  ].join('\n\n---\n\n');
}

// Re-export playbook for use in PDF generation
export { PLAYBOOK };
