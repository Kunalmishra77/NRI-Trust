export type Persona = 'GREEN' | 'ORANGE' | 'RED';

export interface QuestionOption {
  value: string;
  label: string;
  points?: number;
  flags?: string[];
  follow_up?: string;
  personaMap?: Persona[];
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

export interface Recommendation {
  title: string;
  description: string;
  action: string;
}

export const ASSESSMENT_ENGINE = {
  version: "1.3.0",
  personas: {
    GREEN: {
      id: "persona_green",
      label: "Plan Ahead (Pioneer)",
      priority: "PROACTIVE",
      weights: { legal: 0.2, health: 0.2, asset: 0.4, coordination: 0.2 }
    },
    ORANGE: {
      id: "persona_orange",
      label: "Plan Now (Balancer)",
      priority: "PRIORITY",
      weights: { legal: 0.35, asset: 0.35, health: 0.3 }
    },
    RED: {
      id: "persona_red",
      label: "Act Immediately (Caregiver)",
      priority: "URGENT",
      weights: { legal: 0.4, health: 0.4, asset: 0.2 }
    }
  },
  questions: [
    // --- GLOBAL ---
    {
      id: "q_parent_age",
      category: "coordination",
      visibility: ["GREEN", "ORANGE", "RED"],
      type: "select",
      label: "Age Bracket of Parents in India",
      options: [
        { value: "under_55", label: "Under 55 (Green Zone)", personaMap: ["GREEN"] },
        { value: "55_65", label: "55 - 65 (Orange Zone)", personaMap: ["ORANGE"] },
        { value: "65_plus", label: "65 or above (Red Zone)", personaMap: ["RED"] }
      ],
      required: true
    },

    // --- GREEN ZONE (Age 25-35) ---
    {
      id: "q_green_remittance",
      category: "financial",
      visibility: ["GREEN"],
      type: "radio_card",
      label: "Banking Compliance: Are you using NRE/NRO accounts?",
      description: "Resident savings accounts cannot be used for foreign remittances under FEMA laws.",
      options: [
        { value: "yes", label: "Yes, fully setup.", points: 25 },
        { value: "no", label: "No, using regular accounts.", points: 0, flags: ["FLAG_BANKING_COMPLIANCE"] }
      ],
      required: true
    },
    {
      id: "q_green_nomination",
      category: "asset",
      visibility: ["GREEN"],
      type: "radio_card",
      label: "Nomination Audit: Are you named in all parents' assets?",
      options: [
        { value: "yes", label: "Verified across all assets.", points: 25 },
        { value: "no", label: "No, or I am unsure.", points: 0, flags: ["FLAG_NOMINATION_GAP"] }
      ],
      required: true
    },
    {
      id: "q_green_insurance",
      category: "health",
      visibility: ["GREEN"],
      type: "radio_card",
      label: "Medical Safety Net: Do parents have independent health insurance?",
      options: [
        { value: "yes", label: "Yes, independent policy.", points: 25 },
        { value: "no", label: "No / Relying on corporate cover.", points: 0, flags: ["FLAG_HEALTH_EXPOSURE"] }
      ],
      required: true
    },
    {
      id: "q_green_notes",
      category: "coordination",
      visibility: ["GREEN"],
      type: "text",
      label: "What is your biggest fear regarding your parents' future in India?",
      required: true
    },

    // --- ORANGE ZONE (Age 36-50) ---
    {
      id: "q_orange_poa",
      category: "legal",
      visibility: ["ORANGE"],
      type: "radio_card",
      label: "Legal Signature Authority: Do you have a registered POA?",
      options: [
        { value: "yes", label: "Yes, legally registered.", points: 25 },
        { value: "no", label: "No / Only informal authority.", points: 0, flags: ["FLAG_NO_POA"] }
      ],
      required: true
    },
    {
      id: "q_orange_will",
      category: "legal",
      visibility: ["ORANGE"],
      type: "radio_card",
      label: "Legacy Control: Is there a registered Will in India?",
      options: [
        { value: "yes", label: "Yes, registered.", points: 25 },
        { value: "no", label: "No / Drafted but not registered.", points: 0, flags: ["FLAG_NO_WILL"] }
      ],
      required: true
    },
    {
      id: "q_orange_property_audit",
      category: "asset",
      visibility: ["ORANGE"],
      type: "radio_card",
      label: "Title Verification: Have property titles been audited recently?",
      options: [
        { value: "yes", label: "Yes, titles are clear.", points: 25 },
        { value: "no", label: "No / Mutation may be pending.", points: 0, flags: ["FLAG_PROPERTY_VULNERABILITY"] }
      ],
      required: true
    },
    {
      id: "q_orange_disputes",
      category: "asset",
      visibility: ["ORANGE"],
      type: "text",
      label: "Detail any existing family friction or property title concerns you have.",
      required: true
    },

    // --- RED ZONE (Age 51+) ---
    {
      id: "q_red_liquidity",
      category: "financial",
      visibility: ["RED"],
      type: "radio_card",
      label: "Emergency Liquidity: Immediate access to >10L INR?",
      options: [
        { value: "yes", label: "Yes, in joint liquid accounts.", points: 25 },
        { value: "no", label: "No, mostly in FDs/Property.", points: 0, flags: ["FLAG_LIQUIDITY_TRAP"] }
      ],
      required: true
    },
    {
      id: "q_red_care_coord",
      category: "health",
      visibility: ["RED"],
      type: "radio_card",
      label: "On-Ground Stewardship: Is a local care manager assigned?",
      options: [
        { value: "yes", label: "Yes, designated coordinator.", points: 25 },
        { value: "no", label: "No, managing from abroad.", points: 0, flags: ["FLAG_CARE_VACUUM"] }
      ],
      required: true
    },
    {
      id: "q_red_estate_distribution",
      category: "legal",
      visibility: ["RED"],
      type: "radio_card",
      label: "Wealth Transfer: Has capital preservation planning started?",
      options: [
        { value: "yes", label: "Yes, plan in place.", points: 25 },
        { value: "no", label: "No plan yet.", points: 0, flags: ["FLAG_ESTATE_INERTIA"] }
      ],
      required: true
    },
    {
      id: "q_red_crisis",
      category: "health",
      visibility: ["RED"],
      type: "text",
      label: "List the immediate medical or legal roadblocks you are facing right now.",
      required: true
    }
  ],
  recommendations: {
    "FLAG_BANKING_COMPLIANCE": {
      title: "Remittance Protocol Correction",
      description: "Convert savings to NRE/NRO. Resident accounts are legally non-compliant for NRIs and invite tax penalties.",
      action: "Standardize banking structure."
    },
    "FLAG_NOMINATION_GAP": {
      title: "Succession Safeguard Audit",
      description: "Missing nominations lead to 'Frozen Assets' during medical emergencies. Banks will refuse access without court orders.",
      action: "Execute 100% nomination audit."
    },
    "FLAG_HEALTH_EXPOSURE": {
      title: "Medical Liquidity Protection",
      description: "Aging parents require independent high-value cover. Corporate policies are unstable and often capped at low limits.",
      action: "Setup independent family health pool."
    },
    "FLAG_NO_POA": {
      title: "Execution of Specific POA",
      description: "Critical for remote management. Allows you to sign medical consents and financial withdrawals from abroad.",
      action: "Draft and Register Specific POA."
    },
    "FLAG_NO_WILL": {
      title: "Succession Registry",
      description: "Unregistered Wills are easily contested. Registration provides absolute legal protection against family disputes.",
      action: "Register Will at Sub-Registrar office."
    },
    "FLAG_PROPERTY_VULNERABILITY": {
      title: "Property Mutation & Title Search",
      description: "Pending mutation (record update) is the leading cause of property encroachment for NRIs.",
      action: "Initiate formal title verification."
    },
    "FLAG_LIQUIDITY_TRAP": {
      title: "Emergency Cash Corpus",
      description: "Hospitals in India require immediate deposits. Locked FDs take days to liquidate from abroad.",
      action: "Setup 10L emergency liquid pool."
    },
    "FLAG_CARE_VACUUM": {
      title: "Family Office Stewardship",
      description: "Remote management in a crisis leads to emotional and physical exhaustion. Designate an on-ground coordinator.",
      action: "Appoint Family Case Manager."
    },
    "FLAG_ESTATE_INERTIA": {
      title: "Wealth Preservation Planning",
      description: "Asset value erodes through legal complexity if inheritance isn't structured proactively.",
      action: "Finalize Estate Distribution Plan."
    }
  }
};

export function calculateAssessment(answers: Record<string, string>) {
  const ageBracket = answers['q_parent_age'];
  let persona: Persona = 'GREEN';
  if (ageBracket === '55_65') persona = 'ORANGE';
  if (ageBracket === '65_plus') persona = 'RED';

  let score = 0;
  const flags: string[] = [];
  const activeQuestions = ASSESSMENT_ENGINE.questions.filter(q => q.visibility.includes(persona));
  
  activeQuestions.forEach(q => {
    const answer = answers[q.id];
    if (q.type === 'radio_card' || q.type === 'select') {
      const option = q.options?.find(o => o.value === answer);
      if (option) {
        score += option.points || 0;
        if (option.flags) flags.push(...option.flags);
      }
    }
  });

  let urgency = "STABLE";
  if (score < 30) urgency = "CRITICAL";
  else if (score < 60) urgency = "MODERATE";

  return {
    persona,
    score,
    flags,
    recommendations: flags.map(f => ASSESSMENT_ENGINE.recommendations[f as keyof typeof ASSESSMENT_ENGINE.recommendations]).filter(Boolean),
    urgency,
    fullSummary: getComprehensiveReport(persona, urgency, answers, flags)
  };
}

function getComprehensiveReport(persona: Persona, urgency: string, answers: Record<string, string>, flags: string[]) {
  const name = answers['name'] || 'Principal';
  
  const report = {
    introduction: "",
    currentStatus: "",
    structuralRisks: "",
    advisoryDirectives: "",
    conclusion: ""
  };

  if (persona === 'RED') { report.introduction = `**The Crisis Response Profile (RED ZONE):** You are managing a high-fragility environment where parents are 65+ and increasingly dependent. Your urgency status is **${urgency}**. This is no longer about 'planning'—it is about **crisis prevention and active stabilization**.`; }
  else if (persona === 'ORANGE') { report.introduction = `**The Strategic Balancer Profile (ORANGE ZONE):** You are at the critical mid-life pivot. Parents (55-65) are transitioning into high-risk years. Your status is **${urgency}**. The 'Wait and Watch' approach is now your greatest financial liability.`; }
  else { report.introduction = `**The Foundational Pioneer Profile (GREEN ZONE):** You are in the early-advantage stage. While parents are currently independent, the foundation of your Indian assets is **${urgency}**. You have the luxury of time, but lack the structural compliance required for NRIs.`; }

  // 1. WHAT IS IT / HOW IS IT
  report.currentStatus = `**Structural Status:** Currently, your family's legal and financial architecture in India is fragmented. `;
  if (flags.includes('FLAG_NO_POA')) report.currentStatus += `You lack the legal 'Right to Act' (Power of Attorney), meaning you are physically and legally paralyzed from abroad during an emergency. `;
  if (flags.includes('FLAG_NO_WILL')) report.currentStatus += `Without a registered Will, your family's assets will default to complex Intestate Succession laws, likely leading to decades of legal gridlock. `;
  if (flags.includes('FLAG_LIQUIDITY_TRAP')) report.currentStatus += `Your liquidity is 'Trapped' in long-term instruments, making hospital admissions and legal settlements impossible within the 24-hour critical window. `;

  // 2. TEXT RESPONSE ANALYSIS
  const textInput = answers['q_red_crisis'] || answers['q_orange_disputes'] || answers['q_green_notes'] || "";
  if (textInput.length > 5) {
    report.currentStatus += `\n\n**Special Analysis:** Regarding your specific context ("${textInput}"), our engine identifies this as a **High-Emotional-Friction** indicator. This specifically compounds the risk of asset loss due to external interference or internal family misalignment.`;
  }

  // 3. WHAT TO DO (DOs)
  report.advisoryDirectives = `**ADVISORY DIRECTIVES (THE 'A-Z' PROTOCOL):**\n\n`;
  report.advisoryDirectives += `1. **Establish Signatory Authority:** Immediately execute and register a Specific Power of Attorney. Remote control is a myth without a registered document.\n`;
  report.advisoryDirectives += `2. **Liquidity Buffer:** Ensure at least 10L INR is available in a joint NRO account with 'Either or Survivor' logic for instant hospital response.\n`;
  report.advisoryDirectives += `3. **Title Search:** Conduct a formal title audit. In India, possession is 9/10ths of the law; title clarity is your only defense against encroachment.\n`;
  report.advisoryDirectives += `4. **Stewardship:** Appoint an on-ground Case Manager to bridge the 8000km gap between your decision and the action needed in India.`;

  // 4. WHAT NOT TO DO (DONTs)
  report.structuralRisks = `**WHAT NOT TO DO (CRITICAL WARNINGS):**\n\n`;
  report.structuralRisks += `â—  **DO NOT** rely on 'Informal Family Arrangements' or verbal promises. They carry zero weight in Indian courts.\n`;
  report.structuralRisks += `â—  **DO NOT** use resident savings accounts for foreign income—it is a violation of FEMA and invites RBI scrutiny.\n`;
  report.structuralRisks += `â—  **DO NOT** assume medical insurance from abroad will cover Indian hospital billing procedures efficiently.\n`;
  report.structuralRisks += `â—  **DO NOT** wait for a 'Better Time' to discuss a Will. By the time cognitive decline starts, legal capacity to sign is lost.`;

  report.conclusion = `**CONCLUSION:** Your ${persona} status requires a shift from passive observation to active **Family Office Governance**. Your immediate next step is a structured 1-2-1 Strategy Session to initiate these directives.`;

  return `${report.introduction}\n\n${report.currentStatus}\n\n${report.advisoryDirectives}\n\n${report.structuralRisks}\n\n${report.conclusion}`;
}
