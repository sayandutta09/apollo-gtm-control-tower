const accounts = [
  {
    id: "northstar-bank",
    account: "Northstar Bank",
    vertical: "Banking",
    useCase: "Card-dispute resolution agent",
    useCaseType: "policy-critical",
    source: "Google Cloud",
    stage: "Security Review",
    estimatedAcv: 680000,
    policyCriticality: 5,
    processActionability: 5,
    auditNeed: 5,
    integrationRelevance: 5,
    economicValue: 5,
    partnerLeverage: 5,
    strategicValue: 5,
    sponsorStrength: 4,
    securityProgress: 3,
    integrationReadiness: 4,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 1,
    blockerReason: "Security review",
    blockerSeverity: 3,
    daysInStage: 18,
    estimatedTimeToProduction: 42,
    expansionPotential: 5,
    securityStatus: "In review",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "keystone-insurance",
    account: "Keystone Insurance",
    vertical: "Insurance",
    useCase: "Claims triage and policy exception handling",
    useCaseType: "policy-critical",
    source: "Direct",
    stage: "Pilot Scoped",
    estimatedAcv: 540000,
    policyCriticality: 5,
    processActionability: 4,
    auditNeed: 5,
    integrationRelevance: 4,
    economicValue: 4,
    partnerLeverage: 2,
    strategicValue: 4,
    sponsorStrength: 5,
    securityProgress: 4,
    integrationReadiness: 3,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 2,
    blockerReason: "Integration scope",
    blockerSeverity: 2,
    daysInStage: 9,
    estimatedTimeToProduction: 38,
    expansionPotential: 4,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "aeroway",
    account: "AeroWay Airlines",
    vertical: "Airlines",
    useCase: "Irregular-operations rebooking agent",
    useCaseType: "action-heavy",
    source: "Google Cloud",
    stage: "Integration Build",
    estimatedAcv: 820000,
    policyCriticality: 4,
    processActionability: 5,
    auditNeed: 4,
    integrationRelevance: 5,
    economicValue: 5,
    partnerLeverage: 5,
    strategicValue: 5,
    sponsorStrength: 4,
    securityProgress: 5,
    integrationReadiness: 4,
    successCriteriaDefined: true,
    internalResourcing: 5,
    productGapSeverity: 2,
    blockerReason: "Booking integration",
    blockerSeverity: 2,
    daysInStage: 12,
    estimatedTimeToProduction: 28,
    expansionPotential: 5,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: false
  },
  {
    id: "atlas-retail",
    account: "Atlas Retail Group",
    vertical: "Retail",
    useCase: "Returns, warranty, and order-action agent",
    useCaseType: "action-heavy",
    source: "Channel",
    stage: "Production Candidate",
    estimatedAcv: 460000,
    policyCriticality: 3,
    processActionability: 5,
    auditNeed: 4,
    integrationRelevance: 4,
    economicValue: 4,
    partnerLeverage: 4,
    strategicValue: 4,
    sponsorStrength: 4,
    securityProgress: 5,
    integrationReadiness: 4,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 1,
    blockerReason: "None",
    blockerSeverity: 0,
    daysInStage: 6,
    estimatedTimeToProduction: 17,
    expansionPotential: 4,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: false
  },
  {
    id: "medsure",
    account: "MedSure Health",
    vertical: "Healthcare",
    useCase: "Benefits navigation and prior-auth workflow",
    useCaseType: "policy-critical",
    source: "Direct",
    stage: "Security Review",
    estimatedAcv: 610000,
    policyCriticality: 5,
    processActionability: 4,
    auditNeed: 5,
    integrationRelevance: 4,
    economicValue: 5,
    partnerLeverage: 2,
    strategicValue: 5,
    sponsorStrength: 3,
    securityProgress: 2,
    integrationReadiness: 3,
    successCriteriaDefined: true,
    internalResourcing: 3,
    productGapSeverity: 3,
    blockerReason: "Security review",
    blockerSeverity: 4,
    daysInStage: 24,
    estimatedTimeToProduction: 55,
    expansionPotential: 5,
    securityStatus: "In review",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "evergreen-auto",
    account: "Evergreen Auto",
    vertical: "Automotive",
    useCase: "Dealer incentive and service-policy agent",
    useCaseType: "policy-critical",
    source: "Google Cloud",
    stage: "Pilot Scoped",
    estimatedAcv: 390000,
    policyCriticality: 4,
    processActionability: 4,
    auditNeed: 4,
    integrationRelevance: 4,
    economicValue: 3,
    partnerLeverage: 5,
    strategicValue: 4,
    sponsorStrength: 3,
    securityProgress: 4,
    integrationReadiness: 3,
    successCriteriaDefined: false,
    internalResourcing: 3,
    productGapSeverity: 2,
    blockerReason: "Success metrics",
    blockerSeverity: 3,
    daysInStage: 11,
    estimatedTimeToProduction: 47,
    expansionPotential: 4,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: false,
    regulated: false
  },
  {
    id: "harbor-bank",
    account: "Harbor Credit Union",
    vertical: "Banking",
    useCase: "KYC exception workflow assistant",
    useCaseType: "policy-critical",
    source: "Channel",
    stage: "Discovery",
    estimatedAcv: 280000,
    policyCriticality: 5,
    processActionability: 4,
    auditNeed: 5,
    integrationRelevance: 3,
    economicValue: 3,
    partnerLeverage: 3,
    strategicValue: 3,
    sponsorStrength: 2,
    securityProgress: 1,
    integrationReadiness: 2,
    successCriteriaDefined: false,
    internalResourcing: 2,
    productGapSeverity: 2,
    blockerReason: "Executive owner",
    blockerSeverity: 3,
    daysInStage: 15,
    estimatedTimeToProduction: 62,
    expansionPotential: 3,
    securityStatus: "Not started",
    integrationOwner: false,
    ownerDefined: false,
    measurementPath: false,
    regulated: true
  },
  {
    id: "solace-support",
    account: "Solace Software",
    vertical: "B2B SaaS",
    useCase: "Generic help-center chatbot",
    useCaseType: "low-stakes",
    source: "Direct",
    stage: "Discovery",
    estimatedAcv: 160000,
    policyCriticality: 1,
    processActionability: 2,
    auditNeed: 1,
    integrationRelevance: 2,
    economicValue: 2,
    partnerLeverage: 1,
    strategicValue: 1,
    sponsorStrength: 3,
    securityProgress: 3,
    integrationReadiness: 3,
    successCriteriaDefined: false,
    internalResourcing: 3,
    productGapSeverity: 1,
    blockerReason: "Weak differentiation",
    blockerSeverity: 4,
    daysInStage: 8,
    estimatedTimeToProduction: 30,
    expansionPotential: 1,
    securityStatus: "Not required",
    integrationOwner: false,
    ownerDefined: true,
    measurementPath: false,
    regulated: false
  },
  {
    id: "cobalt-finance",
    account: "Cobalt Capital",
    vertical: "Financial Services",
    useCase: "Trade exception and compliance routing",
    useCaseType: "policy-critical",
    source: "Google Cloud",
    stage: "Integration Build",
    estimatedAcv: 930000,
    policyCriticality: 5,
    processActionability: 5,
    auditNeed: 5,
    integrationRelevance: 5,
    economicValue: 5,
    partnerLeverage: 5,
    strategicValue: 5,
    sponsorStrength: 5,
    securityProgress: 4,
    integrationReadiness: 4,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 2,
    blockerReason: "Legacy API limits",
    blockerSeverity: 2,
    daysInStage: 14,
    estimatedTimeToProduction: 31,
    expansionPotential: 5,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "summit-care",
    account: "Summit Care Network",
    vertical: "Healthcare",
    useCase: "Provider credentialing action agent",
    useCaseType: "policy-critical",
    source: "Channel",
    stage: "Pilot Scoped",
    estimatedAcv: 470000,
    policyCriticality: 5,
    processActionability: 4,
    auditNeed: 5,
    integrationRelevance: 4,
    economicValue: 4,
    partnerLeverage: 3,
    strategicValue: 4,
    sponsorStrength: 4,
    securityProgress: 3,
    integrationReadiness: 3,
    successCriteriaDefined: true,
    internalResourcing: 3,
    productGapSeverity: 2,
    blockerReason: "Data access",
    blockerSeverity: 3,
    daysInStage: 16,
    estimatedTimeToProduction: 44,
    expansionPotential: 4,
    securityStatus: "In review",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "nomad-travel",
    account: "Nomad Travel",
    vertical: "Travel",
    useCase: "Loyalty issue resolution and refunds",
    useCaseType: "action-heavy",
    source: "Direct",
    stage: "Production Candidate",
    estimatedAcv: 360000,
    policyCriticality: 3,
    processActionability: 5,
    auditNeed: 3,
    integrationRelevance: 4,
    economicValue: 3,
    partnerLeverage: 2,
    strategicValue: 3,
    sponsorStrength: 4,
    securityProgress: 5,
    integrationReadiness: 5,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 1,
    blockerReason: "None",
    blockerSeverity: 0,
    daysInStage: 4,
    estimatedTimeToProduction: 14,
    expansionPotential: 3,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: false
  },
  {
    id: "lumina-retail",
    account: "Lumina Stores",
    vertical: "Retail",
    useCase: "Omnichannel order-change agent",
    useCaseType: "action-heavy",
    source: "Google Cloud",
    stage: "Security Review",
    estimatedAcv: 510000,
    policyCriticality: 3,
    processActionability: 5,
    auditNeed: 4,
    integrationRelevance: 5,
    economicValue: 4,
    partnerLeverage: 5,
    strategicValue: 4,
    sponsorStrength: 4,
    securityProgress: 2,
    integrationReadiness: 4,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 2,
    blockerReason: "Security review",
    blockerSeverity: 4,
    daysInStage: 21,
    estimatedTimeToProduction: 49,
    expansionPotential: 4,
    securityStatus: "In review",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: false
  },
  {
    id: "verdant-hr",
    account: "Verdant Manufacturing",
    vertical: "Internal Support",
    useCase: "Employee policy and ticket deflection bot",
    useCaseType: "low-stakes",
    source: "Channel",
    stage: "Discovery",
    estimatedAcv: 140000,
    policyCriticality: 2,
    processActionability: 2,
    auditNeed: 2,
    integrationRelevance: 2,
    economicValue: 1,
    partnerLeverage: 2,
    strategicValue: 1,
    sponsorStrength: 2,
    securityProgress: 2,
    integrationReadiness: 2,
    successCriteriaDefined: false,
    internalResourcing: 2,
    productGapSeverity: 1,
    blockerReason: "Low operational pain",
    blockerSeverity: 4,
    daysInStage: 19,
    estimatedTimeToProduction: 50,
    expansionPotential: 1,
    securityStatus: "Not started",
    integrationOwner: false,
    ownerDefined: true,
    measurementPath: false,
    regulated: false
  },
  {
    id: "anchor-life",
    account: "Anchor Life",
    vertical: "Insurance",
    useCase: "Underwriting evidence collection agent",
    useCaseType: "policy-critical",
    source: "Google Cloud",
    stage: "Integration Build",
    estimatedAcv: 730000,
    policyCriticality: 5,
    processActionability: 4,
    auditNeed: 5,
    integrationRelevance: 4,
    economicValue: 5,
    partnerLeverage: 5,
    strategicValue: 5,
    sponsorStrength: 4,
    securityProgress: 5,
    integrationReadiness: 3,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 3,
    blockerReason: "Product gap",
    blockerSeverity: 3,
    daysInStage: 20,
    estimatedTimeToProduction: 46,
    expansionPotential: 5,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  },
  {
    id: "civic-health",
    account: "Civic Health Plan",
    vertical: "Healthcare",
    useCase: "Member grievance intake and routing",
    useCaseType: "policy-critical",
    source: "Direct",
    stage: "At Risk",
    estimatedAcv: 420000,
    policyCriticality: 5,
    processActionability: 3,
    auditNeed: 5,
    integrationRelevance: 3,
    economicValue: 4,
    partnerLeverage: 1,
    strategicValue: 3,
    sponsorStrength: 2,
    securityProgress: 2,
    integrationReadiness: 2,
    successCriteriaDefined: true,
    internalResourcing: 2,
    productGapSeverity: 4,
    blockerReason: "Sponsor gap",
    blockerSeverity: 5,
    daysInStage: 31,
    estimatedTimeToProduction: 75,
    expansionPotential: 3,
    securityStatus: "In review",
    integrationOwner: false,
    ownerDefined: false,
    measurementPath: true,
    regulated: true
  },
  {
    id: "prime-cart",
    account: "PrimeCart Marketplace",
    vertical: "Retail",
    useCase: "Seller support action agent",
    useCaseType: "action-heavy",
    source: "Direct",
    stage: "Pilot Scoped",
    estimatedAcv: 330000,
    policyCriticality: 3,
    processActionability: 4,
    auditNeed: 3,
    integrationRelevance: 4,
    economicValue: 3,
    partnerLeverage: 1,
    strategicValue: 3,
    sponsorStrength: 3,
    securityProgress: 4,
    integrationReadiness: 3,
    successCriteriaDefined: true,
    internalResourcing: 3,
    productGapSeverity: 2,
    blockerReason: "Internal resourcing",
    blockerSeverity: 2,
    daysInStage: 13,
    estimatedTimeToProduction: 37,
    expansionPotential: 3,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: false
  },
  {
    id: "skybridge-air",
    account: "SkyBridge Air",
    vertical: "Airlines",
    useCase: "Baggage claim resolution agent",
    useCaseType: "action-heavy",
    source: "Channel",
    stage: "Pilot Scoped",
    estimatedAcv: 410000,
    policyCriticality: 3,
    processActionability: 4,
    auditNeed: 3,
    integrationRelevance: 3,
    economicValue: 3,
    partnerLeverage: 3,
    strategicValue: 3,
    sponsorStrength: 3,
    securityProgress: 3,
    integrationReadiness: 3,
    successCriteriaDefined: false,
    internalResourcing: 3,
    productGapSeverity: 2,
    blockerReason: "Success metrics",
    blockerSeverity: 3,
    daysInStage: 17,
    estimatedTimeToProduction: 45,
    expansionPotential: 3,
    securityStatus: "In review",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: false,
    regulated: false
  },
  {
    id: "quantum-claims",
    account: "Quantum Claims",
    vertical: "Insurance",
    useCase: "Subrogation workflow agent",
    useCaseType: "policy-critical",
    source: "Google Cloud",
    stage: "Production Candidate",
    estimatedAcv: 570000,
    policyCriticality: 4,
    processActionability: 5,
    auditNeed: 5,
    integrationRelevance: 4,
    economicValue: 4,
    partnerLeverage: 5,
    strategicValue: 4,
    sponsorStrength: 5,
    securityProgress: 5,
    integrationReadiness: 5,
    successCriteriaDefined: true,
    internalResourcing: 4,
    productGapSeverity: 1,
    blockerReason: "None",
    blockerSeverity: 0,
    daysInStage: 5,
    estimatedTimeToProduction: 12,
    expansionPotential: 4,
    securityStatus: "Passed",
    integrationOwner: true,
    ownerDefined: true,
    measurementPath: true,
    regulated: true
  }
];

const ruleDefinitions = [
  {
    id: "successCriteriaCommit",
    label: "Commit requires success criteria",
    description: "No opportunity enters commit forecast without measurable production criteria."
  },
  {
    id: "policyCriticalBoost",
    label: "Boost regulated workflows",
    description: "Policy-heavy, auditable, action-oriented use cases receive priority weight."
  },
  {
    id: "securityAgingEscalation",
    label: "Escalate stale security review",
    description: "Security review older than 14 days creates a leadership flag."
  },
  {
    id: "weakUseCasePenalty",
    label: "Down-rank weak-fit use cases",
    description: "Open-ended or low-measurement work is penalized."
  },
  {
    id: "integrationOwnerCap",
    label: "Cap readiness without owner",
    description: "Production readiness cannot exceed 70 without an integration owner."
  }
];

const defaultRules = Object.fromEntries(ruleDefinitions.map((rule) => [rule.id, true]));
let activeRules = { ...defaultRules };
let activeView = "overview";
let scenario = "base";
let demoMode = false;
let demoIndex = 0;
let filterState = {
  source: "all",
  vertical: "all",
  stage: "all",
  sortBy: "priorityScore",
  fitThreshold: 0
};

const demoSteps = [
  {
    view: "overview",
    eyebrow: "Step 1 of 7",
    title: "Start with the operating premise",
    detail:
      "Frame the artifact as a weekly GTM operating rhythm for moving from promising pilots to repeatable production deployments."
  },
  {
    view: "prioritization",
    eyebrow: "Step 2 of 7",
    title: "Show where leadership should focus",
    detail:
      "Use the priority queue to explain fit, readiness, strategic value, and why weak-fit opportunities are intentionally excluded."
  },
  {
    view: "readiness",
    eyebrow: "Step 3 of 7",
    title: "Make pilot-to-production risk visible",
    detail:
      "Use stage-exit criteria and blockers to show what must be true before a pilot becomes production-ready."
  },
  {
    view: "partner",
    eyebrow: "Step 4 of 7",
    title: "Separate partner motion from direct sales",
    detail:
      "Point to Google Cloud and channel leverage as a distinct operating cadence with its own conversion and aging benchmarks."
  },
  {
    view: "forecast",
    eyebrow: "Step 5 of 7",
    title: "Forecast with rules, not optimism",
    detail:
      "Show what is commit, what is best case, and why some accounts are not forecastable yet."
  },
  {
    view: "investor",
    eyebrow: "Step 6 of 7",
    title: "Translate operations into investor narrative",
    detail:
      "Close by separating traction from confidence and naming the leadership decisions that change the growth story."
  },
  {
    view: "definitions",
    eyebrow: "Step 7 of 7",
    title: "Leave a self-contained reference layer",
    detail:
      "Use the definitions tab as backup when a reviewer wants the exact meaning of metrics, scores, stages, rules, or forecast categories."
  }
];

const exitCriteriaByBucket = {
  Discovery: "Exit: business owner, measurable pain, and ICP fit confirmed.",
  "Pilot scoped": "Exit: success criteria, pilot owner, and implementation scope locked.",
  "Security review": "Exit: security review passed or executive path to approval set.",
  "Integration build": "Exit: integration owner, test data, and launch dependencies confirmed.",
  "Production candidate": "Exit: go-live date, support plan, and expansion hypothesis aligned.",
  "At risk": "Exit: remove hard blocker or formally deprioritize."
};

const scenarioWeights = {
  conservative: { commit: 0.85, best: 0.35, pipeline: 0.12, risk: 0.03 },
  base: { commit: 0.9, best: 0.5, pipeline: 0.2, risk: 0.05 },
  upside: { commit: 0.95, best: 0.65, pipeline: 0.35, risk: 0.1 }
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0
});

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function byId(id) {
  return document.getElementById(id);
}

function cssClass(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function formatMoney(value, compact = true) {
  return compact ? compactCurrencyFormatter.format(value) : currencyFormatter.format(value);
}

function formatSignedMoney(value) {
  const prefix = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${prefix}${formatMoney(Math.abs(value))}`;
}

function formatSignedNumber(value) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${numberFormatter.format(value)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scoreMeter(score, color = "teal") {
  const safeScore = clamp(Math.round(score));
  return `
    <div class="score-meter" aria-label="${safeScore} out of 100">
      <span>${safeScore}</span>
      <div class="meter-track">
        <div class="meter-fill ${color}" style="width: ${safeScore}%"></div>
      </div>
    </div>
  `;
}

function statusChip(label, kind = "") {
  return `<span class="status-chip ${cssClass(kind || label)}">${escapeHtml(label)}</span>`;
}

function deriveAccount(account, rules = activeRules, activeScenario = scenario) {
  const audit = [];

  let fitScore =
    account.policyCriticality * 3.6 +
    account.processActionability * 3.6 +
    account.auditNeed * 3.2 +
    account.integrationRelevance * 2.8 +
    account.economicValue * 3.2 +
    account.partnerLeverage * 1.6 +
    account.strategicValue * 2;

  let readinessScore =
    account.sponsorStrength * 4.4 +
    account.securityProgress * 4.4 +
    account.integrationReadiness * 4.4 +
    (account.successCriteriaDefined ? 16 : 0) +
    account.internalResourcing * 2.4 +
    (account.integrationOwner ? 6 : 0) -
    account.productGapSeverity * 2.4;

  let strategicScore = account.strategicValue * 20;
  let blockerPenalty = account.blockerSeverity * 4 + account.productGapSeverity * 1.5;
  let disqualified = false;

  if (rules.policyCriticalBoost && (account.regulated || account.policyCriticality >= 4)) {
    fitScore += 5;
    strategicScore += 4;
    audit.push("Regulated or policy-critical workflow received priority weight.");
  }

  if (
    rules.securityAgingEscalation &&
    account.securityStatus === "In review" &&
    account.daysInStage > 14
  ) {
    readinessScore -= 8;
    blockerPenalty += 7;
    audit.push("Security review has aged beyond 14 days and needs escalation.");
  }

  if (
    rules.weakUseCasePenalty &&
    (account.useCaseType === "low-stakes" || !account.measurementPath || !account.ownerDefined)
  ) {
    fitScore -= 14;
    blockerPenalty += 14;
    disqualified =
      account.useCaseType === "low-stakes" ||
      !account.measurementPath ||
      !account.ownerDefined ||
      !account.integrationOwner;
    audit.push("Weak-fit or low-measurement criteria reduced priority.");
  }

  if (rules.integrationOwnerCap && !account.integrationOwner && readinessScore > 70) {
    readinessScore = 70;
    audit.push("Readiness capped because no integration owner is assigned.");
  } else if (rules.integrationOwnerCap && !account.integrationOwner) {
    audit.push("Integration owner missing before production readiness can be trusted.");
  }

  const fit = clamp(fitScore);
  const readiness = clamp(readinessScore);
  const strategic = clamp(strategicScore);
  const priorityScore = clamp(fit * 0.5 + readiness * 0.35 + strategic * 0.15 - blockerPenalty);
  const forecast = getForecastCategory(account, fit, readiness, priorityScore, disqualified, rules, audit);
  const weightedAcv = account.estimatedAcv * scenarioWeights[activeScenario][forecast.key];
  const readinessBucket = getReadinessBucket(account, readiness, forecast, disqualified);
  const recommendedAction = getRecommendedAction(account, readiness, priorityScore, forecast, disqualified);
  const forecastBlockers = getForecastBlockers(account, forecast, disqualified, rules);

  return {
    ...account,
    fitScore: fit,
    readinessScore: readiness,
    priorityScore,
    strategicScore: strategic,
    scoreBreakdown: {
      fit: fit * 0.5,
      readiness: readiness * 0.35,
      strategic: strategic * 0.15,
      blockerPenalty
    },
    disqualified,
    forecast,
    forecastBlockers,
    weightedAcv,
    readinessBucket,
    recommendedAction,
    audit
  };
}

function getForecastCategory(account, fit, readiness, priority, disqualified, rules, audit) {
  const successRuleBlocksCommit =
    rules.successCriteriaCommit && !account.successCriteriaDefined;
  const hasHardBlocker =
    disqualified ||
    successRuleBlocksCommit ||
    account.blockerSeverity >= 4 ||
    !account.integrationOwner ||
    account.sponsorStrength < 3;

  if (successRuleBlocksCommit) {
    audit.push("Commit blocked because success criteria are not defined.");
  }

  const commitReady =
    !hasHardBlocker &&
    account.securityStatus !== "In review" &&
    account.securityProgress >= 4 &&
    account.sponsorStrength >= 4 &&
    readiness >= 72 &&
    priority >= 68 &&
    ["Production Candidate", "Integration Build"].includes(account.stage);

  if (commitReady) {
    return { label: "Commit", key: "commit", className: "commit" };
  }

  if (!hasHardBlocker && readiness >= 58 && priority >= 56) {
    return { label: "Best case", key: "best", className: "best" };
  }

  if (disqualified || account.stage === "At Risk" || account.blockerSeverity >= 4 || priority < 35) {
    return { label: "At risk", key: "risk", className: "risk" };
  }

  return { label: "Pipeline", key: "pipeline", className: "pipeline" };
}

function getForecastBlockers(account, forecast, disqualified, rules) {
  const blockers = [];
  if (forecast.key === "commit") {
    return blockers;
  }
  if (disqualified) {
    blockers.push("Fails hard qualification rules.");
  }
  if (rules.successCriteriaCommit && !account.successCriteriaDefined) {
    blockers.push("Success criteria not defined.");
  }
  if (account.securityStatus === "In review") {
    blockers.push("Security review unresolved.");
  }
  if (!account.integrationOwner) {
    blockers.push("No integration owner assigned.");
  }
  if (account.sponsorStrength < 3) {
    blockers.push("Sponsor strength below commit threshold.");
  }
  if (account.blockerSeverity >= 4) {
    blockers.push(`${account.blockerReason} is a hard blocker.`);
  }
  if (account.integrationReadiness < 3) {
    blockers.push("Integration readiness is not credible yet.");
  }
  return blockers.length ? blockers : ["Needs stronger readiness signal before commit."];
}

function getReadinessBucket(account, readiness, forecast, disqualified) {
  if (disqualified || forecast.key === "risk" || account.stage === "At Risk") {
    return "At risk";
  }
  if (account.stage === "Production Candidate" || (readiness >= 74 && forecast.key === "commit")) {
    return "Production candidate";
  }
  if (account.stage === "Integration Build") {
    return "Integration build";
  }
  if (account.stage === "Security Review") {
    return "Security review";
  }
  if (account.stage === "Pilot Scoped") {
    return "Pilot scoped";
  }
  return "Discovery";
}

function getRecommendedAction(account, readiness, priority, forecast, disqualified) {
  if (disqualified) {
    return "Deprioritize until ownership, measurement, and pain are real.";
  }
  if (forecast.key === "commit") {
    return "Keep in executive close plan and protect implementation timeline.";
  }
  if (account.blockerReason === "Security review") {
    return "Escalate security review owner and unblock approval path.";
  }
  if (!account.successCriteriaDefined) {
    return "Define measurable production success criteria before forecasting.";
  }
  if (!account.integrationOwner) {
    return "Assign integration owner before raising readiness.";
  }
  if (readiness < 55 && priority >= 60) {
    return "Maintain priority but run deployment-readiness workstream.";
  }
  if (account.partnerLeverage >= 4) {
    return "Use cloud co-sell motion to accelerate sponsor and integration access.";
  }
  return "Keep in weekly review and advance next stage exit criteria.";
}

function getProcessedAccounts(rules = activeRules, activeScenario = scenario) {
  return accounts.map((account) => deriveAccount(account, rules, activeScenario));
}

function getFilteredAccounts(processed) {
  return processed
    .filter((account) => filterState.source === "all" || account.source === filterState.source)
    .filter((account) => filterState.vertical === "all" || account.vertical === filterState.vertical)
    .filter((account) => filterState.stage === "all" || account.stage === filterState.stage)
    .filter((account) => account.fitScore >= filterState.fitThreshold)
    .sort((a, b) => {
      const field = filterState.sortBy;
      if (typeof a[field] === "string") {
        return a[field].localeCompare(b[field]);
      }
      return b[field] - a[field];
    });
}

function hydrateFilters() {
  const verticals = [...new Set(accounts.map((account) => account.vertical))].sort();
  const stages = [...new Set(accounts.map((account) => account.stage))].sort();
  byId("verticalFilter").innerHTML =
    `<option value="all">All verticals</option>` +
    verticals.map((vertical) => `<option value="${escapeHtml(vertical)}">${escapeHtml(vertical)}</option>`).join("");
  byId("stageFilter").innerHTML =
    `<option value="all">All stages</option>` +
    stages.map((stage) => `<option value="${escapeHtml(stage)}">${escapeHtml(stage)}</option>`).join("");
}

function renderRules() {
  byId("rulesList").innerHTML = ruleDefinitions
    .map((rule) => {
      const checked = activeRules[rule.id] ? "checked" : "";
      return `
        <label class="rule-toggle">
          <input type="checkbox" data-rule="${rule.id}" ${checked}>
          <span class="rule-copy">
            <strong>${escapeHtml(rule.label)}</strong>
            <span>${escapeHtml(rule.description)}</span>
          </span>
        </label>
      `;
    })
    .join("");
}

function getOperatingMetrics(processed) {
  const qualified = processed.filter((account) => !account.disqualified && account.priorityScore >= 50);
  const commit = processed.filter((account) => account.forecast.key === "commit");
  const flagged = processed.filter((account) => account.audit.length > 0);
  return {
    qualifiedPipeline: sum(qualified, (account) => account.estimatedAcv),
    weightedForecast: sum(processed, (account) => account.weightedAcv),
    commitForecast: sum(commit, (account) => account.weightedAcv),
    flaggedAccounts: flagged.length
  };
}

function renderRuleImpact(processed) {
  const rulesOff = getProcessedAccounts(
    Object.fromEntries(ruleDefinitions.map((rule) => [rule.id, false])),
    scenario
  );
  const current = getOperatingMetrics(processed);
  const baseline = getOperatingMetrics(rulesOff);
  const qualifiedDelta = current.qualifiedPipeline - baseline.qualifiedPipeline;
  const commitDelta = current.commitForecast - baseline.commitForecast;
  const flagDelta = current.flaggedAccounts - baseline.flaggedAccounts;

  byId("ruleImpact").innerHTML = `
    <p class="eyebrow">Rule impact</p>
    <div class="impact-list">
      <div>
        <strong>${formatSignedMoney(qualifiedDelta)}</strong>
        <span>qualified pipeline</span>
      </div>
      <div>
        <strong>${formatSignedMoney(commitDelta)}</strong>
        <span>commit forecast</span>
      </div>
      <div>
        <strong>${formatSignedNumber(flagDelta)}</strong>
        <span>flagged accounts</span>
      </div>
    </div>
  `;
}

function renderKpis(processed) {
  const qualified = processed.filter((account) => !account.disqualified && account.priorityScore >= 50);
  const totalPipeline = processed.reduce((sum, account) => sum + account.estimatedAcv, 0);
  const qualifiedPipeline = qualified.reduce((sum, account) => sum + account.estimatedAcv, 0);
  const partnerPipeline = processed
    .filter((account) => account.source !== "Direct")
    .reduce((sum, account) => sum + account.estimatedAcv, 0);
  const productionCandidates = processed.filter(
    (account) => account.readinessBucket === "Production candidate" || account.forecast.key === "commit"
  ).length;
  const pilotPool = processed.filter((account) => account.stage !== "Discovery").length;
  const avgDaysToProduction =
    qualified.reduce((sum, account) => sum + account.estimatedTimeToProduction, 0) /
    Math.max(qualified.length, 1);
  const weightedForecast = processed.reduce((sum, account) => sum + account.weightedAcv, 0);
  const quarterTarget = 2400000;
  const escalatedBlockers = processed.filter(
    (account) => account.blockerSeverity >= 4 || account.audit.some((flag) => flag.includes("escalation"))
  ).length;

  const cards = [
    {
      label: "Qualified pipeline",
      value: formatMoney(qualifiedPipeline),
      detail: `${qualified.length} accounts above operating threshold`
    },
    {
      label: "Partner share",
      value: `${Math.round((partnerPipeline / totalPipeline) * 100)}%`,
      detail: "Google Cloud and channel sourced ACV"
    },
    {
      label: "Pilot to prod",
      value: `${Math.round((productionCandidates / Math.max(pilotPool, 1)) * 100)}%`,
      detail: "Production candidates across active stages"
    },
    {
      label: "Avg days to prod",
      value: `${Math.round(avgDaysToProduction)}`,
      detail: "Modeled time for qualified opportunities"
    },
    {
      label: "Forecast cover",
      value: `${(weightedForecast / quarterTarget).toFixed(1)}x`,
      detail: `${formatMoney(weightedForecast)} weighted against target`
    },
    {
      label: "Escalations",
      value: numberFormatter.format(escalatedBlockers),
      detail: "Leadership-visible blockers this week"
    }
  ];

  byId("kpiGrid").innerHTML = cards
    .map(
      (card) => `
        <article class="kpi-card">
          <strong>${escapeHtml(card.label)}</strong>
          <span>${escapeHtml(card.value)}</span>
          <small>${escapeHtml(card.detail)}</small>
        </article>
      `
    )
    .join("");
}

function renderOverview(processed) {
  const topAccounts = [...processed].sort((a, b) => b.priorityScore - a.priorityScore).slice(0, 5);
  const highestPriority = topAccounts[0];
  const securityAged = processed
    .filter((account) => account.blockerReason === "Security review")
    .sort((a, b) => b.daysInStage - a.daysInStage)[0];
  const partnerAccounts = processed.filter((account) => account.source !== "Direct");
  const commit = processed.filter((account) => account.forecast.key === "commit");
  const weightedCommit = commit.reduce((sum, account) => sum + account.weightedAcv, 0);

  const decisions = [
    {
      title: `Prioritize ${highestPriority.account}`,
      detail: `${highestPriority.useCase} has the strongest combined fit, readiness, and strategic value.`
    },
    {
      title: `Unblock ${securityAged.account}`,
      detail: `${securityAged.daysInStage} days in security review is dragging forecast confidence.`
    },
    {
      title: `Run partner cadence on ${partnerAccounts.length} accounts`,
      detail: "Partner-sourced opportunities need separate enablement, benchmarks, and executive review."
    },
    {
      title: `${formatMoney(weightedCommit)} commit signal`,
      detail: "Commit forecast only includes opportunities that pass explicit production-readiness rules."
    }
  ];

  byId("decisionList").innerHTML = decisions
    .map(
      (item) => `
        <article class="decision-item">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.detail)}</span>
        </article>
      `
    )
    .join("");

  byId("shortlistBody").innerHTML = topAccounts
    .map(
      (account) => `
        <tr>
          <td>${accountButton(account)}</td>
          <td>${escapeHtml(account.useCase)}</td>
          <td>${statusChip(account.stage, account.stage)}</td>
          <td>${scoreMeter(account.priorityScore, "blue")}</td>
          <td>${statusChip(account.forecast.label, account.forecast.className)}</td>
          <td>${escapeHtml(account.recommendedAction)}</td>
        </tr>
      `
    )
    .join("");
}

function accountButton(account) {
  return `<button class="account-button" type="button" data-account="${account.id}">${escapeHtml(account.account)}</button>`;
}

function renderPrioritization(processed) {
  const visible = getFilteredAccounts(processed);
  byId("fitThresholdValue").textContent = String(filterState.fitThreshold);
  byId("visibleCount").textContent = `${visible.length} accounts`;
  byId("accountTableBody").innerHTML = visible
    .map(
      (account) => `
        <tr>
          <td>
            ${accountButton(account)}
            <div class="muted">${escapeHtml(account.useCase)}</div>
          </td>
          <td>${escapeHtml(account.vertical)}</td>
          <td>${statusChip(account.source, account.source)}</td>
          <td>${statusChip(account.stage, account.stage)}</td>
          <td>${scoreMeter(account.fitScore)}</td>
          <td>${scoreMeter(account.readinessScore, "amber")}</td>
          <td>${scoreMeter(account.priorityScore, "blue")}</td>
          <td>
            ${escapeHtml(account.blockerReason)}
            <div class="muted">${escapeHtml(account.recommendedAction)}</div>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderReadiness(processed) {
  const buckets = [
    "Discovery",
    "Pilot scoped",
    "Security review",
    "Integration build",
    "Production candidate",
    "At risk"
  ];

  byId("readinessBoard").innerHTML = buckets
    .map((bucket) => {
      const bucketAccounts = processed
        .filter((account) => account.readinessBucket === bucket)
        .sort((a, b) => b.priorityScore - a.priorityScore);

      const cards = bucketAccounts
        .map(
          (account) => `
            <article class="board-card">
              <button type="button" data-account="${account.id}">${escapeHtml(account.account)}</button>
              <div class="muted">${escapeHtml(account.useCase)}</div>
              <div class="board-signals">
                ${account.daysInStage > 14 ? statusChip(`${account.daysInStage}d stuck`, "caution") : ""}
                ${!account.successCriteriaDefined ? statusChip("No success criteria", "risk") : ""}
                ${!account.integrationOwner ? statusChip("No owner", "risk") : ""}
              </div>
              <div class="board-meta">
                <span>${escapeHtml(account.blockerReason)}</span>
                ${statusChip(Math.round(account.readinessScore), account.forecast.className)}
              </div>
            </article>
          `
        )
        .join("");

      return `
        <section class="board-column" aria-label="${escapeHtml(bucket)}">
          <header>
            <div>
              <h3>${escapeHtml(bucket)}</h3>
              <p>${escapeHtml(exitCriteriaByBucket[bucket])}</p>
            </div>
            <span class="count-pill">${bucketAccounts.length}</span>
          </header>
          <div class="board-card-list">${cards || `<p class="muted">No accounts</p>`}</div>
        </section>
      `;
    })
    .join("");
}

function groupBy(items, keyGetter) {
  return items.reduce((groups, item) => {
    const key = keyGetter(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}

function sum(items, getter) {
  return items.reduce((total, item) => total + getter(item), 0);
}

function renderBarChart(elementId, rows, options = {}) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  byId(elementId).innerHTML = rows
    .map((row, index) => {
      const width = Math.max((row.value / max) * 100, row.value > 0 ? 3 : 0);
      const color = row.color || (options.colors ? options.colors[index % options.colors.length] : "var(--teal)");
      return `
        <div class="bar-row">
          <span class="bar-label">${escapeHtml(row.label)}</span>
          <span class="bar-track">
            <span class="bar-fill" style="width: ${width}%; background: ${color}"></span>
          </span>
          <span class="bar-value">${escapeHtml(row.display)}</span>
        </div>
      `;
    })
    .join("");
}

function renderPartner(processed) {
  const bySource = groupBy(processed, (account) => account.source);
  const sourceRows = Object.entries(bySource)
    .map(([source, items]) => ({
      label: source,
      value: sum(items, (account) => account.estimatedAcv),
      display: formatMoney(sum(items, (account) => account.estimatedAcv))
    }))
    .sort((a, b) => b.value - a.value);

  const conversionRows = Object.entries(bySource)
    .map(([source, items]) => {
      const ready = items.filter(
        (account) => account.readinessBucket === "Production candidate" || account.forecast.key === "commit"
      ).length;
      const rate = Math.round((ready / items.length) * 100);
      return {
        label: source,
        value: rate,
        display: `${rate}%`
      };
    })
    .sort((a, b) => b.value - a.value);

  renderBarChart("sourcePipelineChart", sourceRows, {
    colors: ["var(--blue)", "var(--teal)", "var(--purple)"]
  });
  renderBarChart("sourceConversionChart", conversionRows, {
    colors: ["var(--green)", "var(--teal)", "var(--amber)"]
  });

  const googleAccounts = processed
    .filter((account) => account.source === "Google Cloud")
    .sort((a, b) => b.priorityScore - a.priorityScore);
  const googlePipeline = sum(googleAccounts, (account) => account.estimatedAcv);
  const googleTop = googleAccounts[0];
  byId("partnerInsight").innerHTML = `
    <div>
      <p class="eyebrow">Google Cloud motion</p>
      <h3>${formatMoney(googlePipeline)} synthetic Google Cloud-sourced pipeline</h3>
      <p>
        Partner leverage changes priority most clearly at ${escapeHtml(googleTop.account)}:
        ${escapeHtml(googleTop.recommendedAction)}
      </p>
    </div>
    ${statusChip(`${googleAccounts.length} accounts`, "best")}
  `;

  byId("partnerTableBody").innerHTML = processed
    .filter((account) => account.source !== "Direct" || account.partnerLeverage >= 4)
    .sort((a, b) => b.partnerLeverage - a.partnerLeverage || b.priorityScore - a.priorityScore)
    .map(
      (account) => `
        <tr>
          <td>${accountButton(account)}</td>
          <td>${statusChip(account.source, account.source)}</td>
          <td>${escapeHtml(account.vertical)}</td>
          <td>${scoreMeter(account.partnerLeverage * 20)}</td>
          <td>${account.daysInStage} days</td>
          <td>${escapeHtml(account.recommendedAction)}</td>
        </tr>
      `
    )
    .join("");
}

function renderForecastFunnel(rows) {
  const max = Math.max(...rows.map((row) => row.value), 1);
  const colors = {
    Commit: "var(--green)",
    "Best case": "var(--blue)",
    Pipeline: "var(--teal)",
    "At risk": "var(--red)"
  };
  const descriptions = {
    Commit: "Clears production-readiness rules",
    "Best case": "Strong but needs one more proof point",
    Pipeline: "Valid but not forecastable yet",
    "At risk": "Blocked, weak-fit, or needs intervention"
  };

  byId("forecastFunnel").innerHTML = rows
    .map((row) => {
      const width = Math.max((row.value / max) * 100, 18);
      return `
        <article class="funnel-stage" style="--stage-width: ${width}%; --stage-color: ${colors[row.label]}">
          <div class="funnel-stage-label">
            <strong>${escapeHtml(row.label)}</strong>
            <span>${escapeHtml(descriptions[row.label])}</span>
          </div>
          <div class="funnel-stage-bar">
            <span>${escapeHtml(row.display)}</span>
            <small>${row.count} accounts</small>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderForecast(processed) {
  const byCategory = groupBy(processed, (account) => account.forecast.label);
  const categoryOrder = ["Commit", "Best case", "Pipeline", "At risk"];
  const categoryColors = {
    Commit: "var(--green)",
    "Best case": "var(--blue)",
    Pipeline: "var(--teal)",
    "At risk": "var(--red)"
  };
  const categoryRows = categoryOrder
    .filter((label) => byCategory[label]?.length)
    .map((label) => {
      const items = byCategory[label];
      return {
        label,
        color: categoryColors[label],
        value: sum(items, (account) => account.weightedAcv),
        rawValue: sum(items, (account) => account.estimatedAcv),
        count: items.length,
        display: formatMoney(sum(items, (account) => account.weightedAcv))
      };
    });

  const byStage = groupBy(processed, (account) => account.stage);
  const stageRows = Object.entries(byStage)
    .map(([stage, items]) => {
      const avg = Math.round(sum(items, (account) => account.daysInStage) / items.length);
      return { label: stage, value: avg, display: `${avg}d` };
    })
    .sort((a, b) => b.value - a.value);

  const byBlocker = groupBy(processed, (account) => account.blockerReason);
  const blockerRows = Object.entries(byBlocker)
    .map(([blocker, items]) => ({
      label: blocker,
      value: sum(items, (account) => account.estimatedAcv * (account.blockerSeverity / 5)),
      display: formatMoney(sum(items, (account) => account.estimatedAcv * (account.blockerSeverity / 5)))
    }))
    .filter((row) => row.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  renderForecastFunnel(categoryRows);
  renderBarChart("forecastCategoryChart", [...categoryRows].sort((a, b) => b.value - a.value), {
    colors: ["var(--green)", "var(--blue)", "var(--teal)", "var(--red)"]
  });
  renderBarChart("stageAgingChart", stageRows, {
    colors: ["var(--amber)", "var(--teal)", "var(--blue)"]
  });
  renderBarChart("blockerImpactChart", blockerRows, {
    colors: ["var(--red)", "var(--amber)", "var(--purple)", "var(--teal)"]
  });

  byId("forecastTableBody").innerHTML = processed
    .sort((a, b) => b.weightedAcv - a.weightedAcv)
    .map(
      (account) => `
        <tr>
          <td>${accountButton(account)}</td>
          <td>${statusChip(account.stage, account.stage)}</td>
          <td class="money">${formatMoney(account.estimatedAcv, false)}</td>
          <td>${statusChip(account.forecast.label, account.forecast.className)}</td>
          <td class="money">${formatMoney(account.weightedAcv, false)}</td>
          <td>${
            account.forecast.key === "commit"
              ? "Forecastable under current rules"
              : escapeHtml(account.forecastBlockers.join(" "))
          }</td>
        </tr>
      `
    )
    .join("");
}

function renderInvestor(processed) {
  const qualified = processed.filter((account) => !account.disqualified && account.priorityScore >= 50);
  const partnerPipeline = processed
    .filter((account) => account.source !== "Direct")
    .reduce((total, account) => total + account.estimatedAcv, 0);
  const totalPipeline = sum(processed, (account) => account.estimatedAcv);
  const commitAccounts = processed.filter((account) => account.forecast.key === "commit");
  const productionCandidates = processed.filter((account) => account.readinessBucket === "Production candidate");
  const expansionCandidates = processed.filter(
    (account) => account.expansionPotential >= 4 && account.priorityScore >= 60
  );

  const traction = [
    {
      title: `${formatMoney(sum(qualified, (account) => account.estimatedAcv))} qualified pipeline`,
      detail: "Priority threshold favors policy-heavy, auditable, action-oriented workflows."
    },
    {
      title: `${Math.round((partnerPipeline / totalPipeline) * 100)}% partner-sourced ACV`,
      detail: "Cloud and channel motion should be benchmarked separately from direct sales."
    },
    {
      title: `${expansionCandidates.length} expansion candidates`,
      detail: "Expansion signal is strongest where production use cases map to adjacent workflows."
    }
  ];

  const confidence = [
    {
      title: `${commitAccounts.length} commit accounts`,
      detail: "Commit only includes opportunities passing explicit stage and readiness rules."
    },
    {
      title: `${productionCandidates.length} production candidates`,
      detail: "Production readiness is tracked separately from pipeline size."
    },
    {
      title: `${formatMoney(sum(processed, (account) => account.weightedAcv))} weighted forecast`,
      detail: `Scenario: ${scenario}. Forecast quality comes from rules, not optimism.`
    }
  ];

  const blockers = processed
    .filter((account) => account.blockerSeverity >= 3 || account.audit.length > 1)
    .sort((a, b) => b.blockerSeverity - a.blockerSeverity || b.daysInStage - a.daysInStage)
    .slice(0, 3)
    .map((account) => ({
      title: `${account.account}: ${account.blockerReason}`,
      detail: account.recommendedAction
    }));

  renderNarrativeList("tractionList", traction);
  renderNarrativeList("confidenceList", confidence);
  renderNarrativeList("blockerList", blockers);
  renderBoardUpdate(traction, confidence, blockers);
}

function renderBoardUpdate(traction, confidence, blockers) {
  const processed = getProcessedAccounts();
  const leadershipAsk = blockers[0]?.detail || "Keep production-readiness reviews tied to explicit stage-exit rules.";
  const update = [
    ["Traction", traction[0].title],
    ["Confidence", confidence[2].title],
    ["Risk", blockers[0]?.title || "No critical blockers under current rules"],
    ["Leadership ask", leadershipAsk]
  ];

  byId("boardUpdate").innerHTML = `
    ${update
      .map(
        ([label, value]) => `
          <div class="board-update-row">
            <strong>${escapeHtml(label)}</strong>
            <span>${escapeHtml(value)}</span>
          </div>
        `
      )
      .join("")}
    <button class="secondary-button" type="button" id="copyBoardUpdate">Copy board update</button>
  `;

  const button = byId("copyBoardUpdate");
  if (button) {
    button.addEventListener("click", () => {
      copyText(
        [
          "AUI GTM Control Tower - board update",
          `Traction: ${traction[0].title}`,
          `Confidence: ${confidence[2].title}`,
          `Risk: ${blockers[0]?.title || "No critical blockers under current rules"}`,
          `Leadership ask: ${leadershipAsk}`,
          `Synthetic accounts reviewed: ${processed.length}`
        ].join("\n"),
        "Board update copied"
      );
    });
  }
}

function renderNarrativeList(elementId, items) {
  byId(elementId).innerHTML = items
    .map(
      (item) => `
        <article class="narrative-item">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.detail)}</span>
        </article>
      `
    )
    .join("");
}

function renderDrawer(accountId) {
  const account = getProcessedAccounts().find((item) => item.id === accountId);
  if (!account) return;
  closeAssumptions();

  byId("drawerEyebrow").textContent = `${account.vertical} - ${account.source}`;
  byId("drawerTitle").textContent = account.account;
  byId("drawerBody").innerHTML = `
    <div class="detail-grid">
      <div class="detail-stat">
        <span>Estimated ACV</span>
        <strong>${formatMoney(account.estimatedAcv, false)}</strong>
      </div>
      <div class="detail-stat">
        <span>Forecast</span>
        <strong>${account.forecast.label}</strong>
      </div>
      <div class="detail-stat">
        <span>Fit</span>
        <strong>${Math.round(account.fitScore)}</strong>
      </div>
      <div class="detail-stat">
        <span>Readiness</span>
        <strong>${Math.round(account.readinessScore)}</strong>
      </div>
      <div class="detail-stat">
        <span>Priority</span>
        <strong>${Math.round(account.priorityScore)}</strong>
      </div>
      <div class="detail-stat">
        <span>Days in stage</span>
        <strong>${account.daysInStage}</strong>
      </div>
    </div>

    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Score breakdown</p>
          <h3>Why this account ranks here</h3>
        </div>
      </div>
      <div class="score-breakdown">
        <div><span>Fit contribution</span><strong>${account.scoreBreakdown.fit.toFixed(1)}</strong></div>
        <div><span>Readiness contribution</span><strong>${account.scoreBreakdown.readiness.toFixed(1)}</strong></div>
        <div><span>Strategic contribution</span><strong>${account.scoreBreakdown.strategic.toFixed(1)}</strong></div>
        <div><span>Blocker penalty</span><strong>-${account.scoreBreakdown.blockerPenalty.toFixed(1)}</strong></div>
      </div>
    </section>

    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Use case</p>
          <h3>${escapeHtml(account.useCase)}</h3>
        </div>
      </div>
      <p class="muted">${escapeHtml(account.recommendedAction)}</p>
    </section>

    <section class="panel drawer-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Mini account plan</p>
          <h3>Next operating move</h3>
        </div>
      </div>
      <div class="account-plan">
        <div><strong>Owner</strong><span>${account.integrationOwner ? "Integration and GTM owner assigned" : "Needs integration owner"}</span></div>
        <div><strong>Exit criteria</strong><span>${escapeHtml(exitCriteriaByBucket[account.readinessBucket])}</span></div>
        <div><strong>Forecast gate</strong><span>${
          account.forecast.key === "commit"
            ? "Clears current commit rules"
            : escapeHtml(account.forecastBlockers[0])
        }</span></div>
      </div>
    </section>

    <section class="panel drawer-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Audit trail</p>
          <h3>Rule-triggered flags</h3>
        </div>
      </div>
      <ul class="audit-list">
        ${
          account.audit.length
            ? account.audit.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
            : "<li>No active rule flags for this account.</li>"
        }
      </ul>
    </section>
  `;

  const drawer = byId("detailDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const drawer = byId("detailDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function renderAll() {
  const processed = getProcessedAccounts();
  renderRuleImpact(processed);
  renderKpis(processed);
  renderOverview(processed);
  renderPrioritization(processed);
  renderReadiness(processed);
  renderPartner(processed);
  renderForecast(processed);
  renderInvestor(processed);
  bindAccountButtons();
}

function hashForView(viewId) {
  return `#/${viewId}`;
}

function viewFromHash() {
  const candidate = window.location.hash.replace(/^#\/?/, "");
  return document.getElementById(candidate)?.classList.contains("view-section") ? candidate : "";
}

function setActiveView(viewId, updateHash = true) {
  activeView = viewId;
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  document.querySelectorAll(".view-section").forEach((section) => {
    const isActive = section.id === viewId;
    section.classList.toggle("active", isActive);
    if (isActive) {
      byId("viewTitle").textContent = section.dataset.title;
    }
  });
  if (updateHash && window.location.hash !== hashForView(viewId)) {
    history.pushState(null, "", hashForView(viewId));
  }
  if (demoMode) {
    const matchingStep = demoSteps.findIndex((step) => step.view === viewId);
    if (matchingStep >= 0) {
      demoIndex = matchingStep;
      updateDemoCoach();
    }
  }
}

function startDemo() {
  const matchingStep = demoSteps.findIndex((step) => step.view === activeView);
  demoIndex = matchingStep >= 0 ? matchingStep : 0;
  demoMode = true;
  setActiveView(demoSteps[demoIndex].view);
  updateDemoCoach();
}

function nextDemoStep() {
  if (!demoMode) {
    startDemo();
    return;
  }
  if (demoIndex >= demoSteps.length - 1) {
    closeDemo();
    return;
  }
  demoIndex += 1;
  setActiveView(demoSteps[demoIndex].view);
  updateDemoCoach();
}

function updateDemoCoach() {
  const panel = byId("demoCoach");
  const step = demoSteps[demoIndex];
  panel.classList.toggle("active", demoMode);
  if (!demoMode || !step) return;
  byId("demoEyebrow").textContent = step.eyebrow;
  byId("demoTitle").textContent = step.title;
  byId("demoDetail").textContent = step.detail;
  byId("nextDemoStep").textContent = demoIndex === demoSteps.length - 1 ? "Finish" : "Next step";
}

function closeDemo() {
  demoMode = false;
  updateDemoCoach();
}

function openAssumptions() {
  closeDrawer();
  const drawer = byId("assumptionsDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeAssumptions() {
  const drawer = byId("assumptionsDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function bindAccountButtons() {
  document.querySelectorAll("[data-account]").forEach((button) => {
    button.addEventListener("click", () => renderDrawer(button.dataset.account));
  });
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function createSummary() {
  const processed = getProcessedAccounts();
  const top = [...processed].sort((a, b) => b.priorityScore - a.priorityScore).slice(0, 3);
  const blockers = processed
    .filter((account) => account.blockerSeverity >= 3 || account.audit.length)
    .sort((a, b) => b.blockerSeverity - a.blockerSeverity || b.daysInStage - a.daysInStage)
    .slice(0, 3);

  return [
    "Apollo GTM Control Tower - synthetic weekly summary",
    "",
    `Scenario: ${scenario}`,
    `Weighted forecast: ${formatMoney(sum(processed, (account) => account.weightedAcv), false)}`,
    "",
    "Top priority accounts:",
    ...top.map(
      (account, index) =>
        `${index + 1}. ${account.account} - ${Math.round(account.priorityScore)} priority - ${account.recommendedAction}`
    ),
    "",
    "Top blockers:",
    ...blockers.map(
      (account, index) => `${index + 1}. ${account.account} - ${account.blockerReason} - ${account.recommendedAction}`
    ),
    "",
    "Synthetic data only. Demonstrates operating logic, not AUI internal pipeline data."
  ].join("\n");
}

async function exportSummary() {
  const summary = createSummary();
  copyText(summary, "Summary copied to clipboard", "Summary downloaded");
}

async function copyText(text, copiedMessage, downloadedMessage = "Text downloaded") {
  try {
    await navigator.clipboard.writeText(text);
    showToast(copiedMessage);
  } catch (_error) {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "apollo-gtm-control-tower-summary.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    showToast(downloadedMessage);
  }
}

function bindEvents() {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.view));
  });

  byId("sourceFilter").addEventListener("change", (event) => {
    filterState.source = event.target.value;
    renderAll();
  });
  byId("verticalFilter").addEventListener("change", (event) => {
    filterState.vertical = event.target.value;
    renderAll();
  });
  byId("stageFilter").addEventListener("change", (event) => {
    filterState.stage = event.target.value;
    renderAll();
  });
  byId("sortBy").addEventListener("change", (event) => {
    filterState.sortBy = event.target.value;
    renderAll();
  });
  byId("fitThreshold").addEventListener("input", (event) => {
    filterState.fitThreshold = Number(event.target.value);
    renderAll();
  });
  byId("scenarioSelect").addEventListener("change", (event) => {
    scenario = event.target.value;
    renderAll();
  });
  byId("rulesList").addEventListener("change", (event) => {
    if (event.target.matches("[data-rule]")) {
      activeRules[event.target.dataset.rule] = event.target.checked;
      renderAll();
    }
  });
  byId("resetRules").addEventListener("click", () => {
    activeRules = { ...defaultRules };
    renderRules();
    renderAll();
    showToast("Rules reset");
  });
  byId("startDemo").addEventListener("click", startDemo);
  byId("nextDemoStep").addEventListener("click", nextDemoStep);
  byId("closeDemo").addEventListener("click", closeDemo);
  byId("openAssumptions").addEventListener("click", openAssumptions);
  byId("closeAssumptions").addEventListener("click", closeAssumptions);
  byId("closeDrawer").addEventListener("click", closeDrawer);
  byId("exportSummary").addEventListener("click", exportSummary);

  window.addEventListener("hashchange", () => {
    const hashView = viewFromHash();
    if (hashView) {
      setActiveView(hashView, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
      closeAssumptions();
      closeDemo();
    }
  });
}

function init() {
  hydrateFilters();
  renderRules();
  bindEvents();
  renderAll();
  setActiveView(viewFromHash() || activeView, false);
  updateDemoCoach();
}

init();
