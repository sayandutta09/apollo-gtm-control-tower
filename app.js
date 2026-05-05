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
let filterState = {
  source: "all",
  vertical: "all",
  stage: "all",
  sortBy: "priorityScore",
  fitThreshold: 0
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

function deriveAccount(account) {
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

  if (activeRules.policyCriticalBoost && (account.regulated || account.policyCriticality >= 4)) {
    fitScore += 5;
    strategicScore += 4;
    audit.push("Regulated or policy-critical workflow received priority weight.");
  }

  if (
    activeRules.securityAgingEscalation &&
    account.securityStatus === "In review" &&
    account.daysInStage > 14
  ) {
    readinessScore -= 8;
    blockerPenalty += 7;
    audit.push("Security review has aged beyond 14 days and needs escalation.");
  }

  if (
    activeRules.weakUseCasePenalty &&
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

  if (activeRules.integrationOwnerCap && !account.integrationOwner && readinessScore > 70) {
    readinessScore = 70;
    audit.push("Readiness capped because no integration owner is assigned.");
  } else if (activeRules.integrationOwnerCap && !account.integrationOwner) {
    audit.push("Integration owner missing before production readiness can be trusted.");
  }

  const priorityScore = clamp(
    fitScore * 0.5 + readinessScore * 0.35 + strategicScore * 0.15 - blockerPenalty
  );

  const fit = clamp(fitScore);
  const readiness = clamp(readinessScore);
  const forecast = getForecastCategory(account, fit, readiness, priorityScore, disqualified, audit);
  const weightedAcv = account.estimatedAcv * scenarioWeights[scenario][forecast.key];
  const readinessBucket = getReadinessBucket(account, readiness, forecast, disqualified);
  const recommendedAction = getRecommendedAction(account, readiness, priorityScore, forecast, disqualified);

  return {
    ...account,
    fitScore: fit,
    readinessScore: readiness,
    priorityScore,
    strategicScore: clamp(strategicScore),
    disqualified,
    forecast,
    weightedAcv,
    readinessBucket,
    recommendedAction,
    audit
  };
}

function getForecastCategory(account, fit, readiness, priority, disqualified, audit) {
  const successRuleBlocksCommit =
    activeRules.successCriteriaCommit && !account.successCriteriaDefined;
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

function getProcessedAccounts() {
  return accounts.map(deriveAccount);
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
            <h3>${escapeHtml(bucket)}</h3>
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
      const color = options.colors ? options.colors[index % options.colors.length] : "var(--teal)";
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

function renderForecast(processed) {
  const byCategory = groupBy(processed, (account) => account.forecast.label);
  const categoryRows = Object.entries(byCategory)
    .map(([label, items]) => ({
      label,
      value: sum(items, (account) => account.weightedAcv),
      display: formatMoney(sum(items, (account) => account.weightedAcv))
    }))
    .sort((a, b) => b.value - a.value);

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

  renderBarChart("forecastCategoryChart", categoryRows, {
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
          <td>${account.audit.length ? escapeHtml(account.audit.join(" ")) : "No rule flags"}</td>
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
          <p class="eyebrow">Use case</p>
          <h3>${escapeHtml(account.useCase)}</h3>
        </div>
      </div>
      <p class="muted">${escapeHtml(account.recommendedAction)}</p>
    </section>

    <section class="panel" style="margin-top: 12px;">
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
  renderKpis(processed);
  renderOverview(processed);
  renderPrioritization(processed);
  renderReadiness(processed);
  renderPartner(processed);
  renderForecast(processed);
  renderInvestor(processed);
  bindAccountButtons();
}

function setActiveView(viewId) {
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
  try {
    await navigator.clipboard.writeText(summary);
    showToast("Summary copied to clipboard");
  } catch (_error) {
    const blob = new Blob([summary], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "apollo-gtm-control-tower-summary.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Summary downloaded");
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
  byId("closeDrawer").addEventListener("click", closeDrawer);
  byId("exportSummary").addEventListener("click", exportSummary);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });
}

function init() {
  hydrateFilters();
  renderRules();
  bindEvents();
  renderAll();
  setActiveView(activeView);
}

init();
