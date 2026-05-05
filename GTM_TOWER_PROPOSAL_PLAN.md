# Apollo GTM Control Tower Proposal Plan

## Objective

Build an interactive GitHub Pages experience that showcases an executive GTM operating prototype for AUI's commercialization moment. The page should make the interview conversation concrete: how to prioritize accounts, diagnose pilot-to-production risk, inspect partner motion, forecast responsibly, and summarize the story leadership or investors should believe this week.

The artifact should feel like a StratOps operating system, not a product demo. It uses synthetic data, clearly labeled, to show judgment, operating cadence, and decision quality.

## Core Narrative

Position the prototype as:

> A lightweight operating prototype for how I would help AUI leadership prioritize the right accounts, manage pilot-to-production risk, and make forecasting, partner motion, and investor reporting more concrete.

The central premise:

> AUI's hardest GTM problem is probably not generating interest. It is turning promising enterprise opportunities and pilots into repeatable production deployments, while preserving the trust, control, auditability, and business-rule discipline that make Apollo-1 differentiated.

## GitHub Pages Experience

Build a single-page interactive site with a polished executive dashboard feel.

Recommended stack:

- Vite
- React
- TypeScript
- Tailwind CSS
- Recharts for charts
- Lucide React for icons
- Static synthetic data in TypeScript or JSON

Deployment target:

- GitHub Pages
- Static build output from `npm run build`
- Optional GitHub Actions workflow for automatic deploy

## Page Structure

### 1. Opening Control Tower View

Purpose: establish what the artifact is and make the synthetic-data caveat explicit.

Content:

- Title: `Apollo GTM Control Tower`
- Subtitle: `Synthetic operating prototype for prioritization, production readiness, partner motion, forecasting, and investor narrative.`
- Compact note: `Synthetic data only. Built to demonstrate operating logic, not AUI internal pipeline knowledge.`
- KPI strip:
  - Qualified pipeline
  - Partner-sourced share
  - Pilot-to-production conversion
  - Average days to production
  - Forecast coverage
  - Escalated blockers

Design tone:

- Executive, focused, and data-forward
- No marketing hero
- Dense but readable dashboard layout
- Avoid decorative gradient-heavy startup styling

### 2. Account Prioritization View

Purpose: show how AUI should focus GTM energy where its differentiation matters.

Interactive elements:

- Sortable account table
- Vertical filter
- Source filter: direct, Google Cloud, channel
- Stage filter
- Fit threshold slider
- Rule toggle panel

Fields:

- Account
- Vertical
- Use case
- Source
- Stage
- Estimated ACV
- Fit score
- Readiness score
- Priority score
- Top blocker
- Recommended action

Scoring logic:

```text
Fit score =
  policy criticality
  + process actionability
  + auditability need
  + integration relevance
  + economic value
  + partner leverage

Production readiness score =
  sponsor strength
  + security progress
  + integration readiness
  + defined success criteria
  + internal resourcing

Priority score =
  50% fit
  + 35% readiness
  + 15% strategic value
  - blocker penalties
```

Hard disqualification rules:

- Low-stakes or open-ended conversational use case
- No clear business owner
- No measurable success criteria
- No meaningful operational pain
- No feasible integration path

### 3. Pilot-To-Production Readiness Board

Purpose: make deployment risk visible.

This should be the center of gravity of the page.

Layout:

- Kanban-style board or grouped table by readiness state:
  - Discovery
  - Pilot scoped
  - Security review
  - Integration build
  - Production candidate
  - At risk

Fields:

- Sponsor strength
- Security status
- Integration readiness
- Success criteria status
- Product gaps
- Estimated time to production
- Blocker owner

Interactions:

- Click an account to open a side panel
- Side panel shows:
  - Why this account is prioritized
  - What must be true before commit forecast
  - Next operating decision
  - Audit trail of rule-triggered flags

### 4. Partner And Co-Sell View

Purpose: show strategic partnership leverage, especially around cloud co-sell.

Charts:

- Pipeline by source
- Conversion by source
- Average stage aging by source
- Partner-sourced accounts by vertical

Key insight to surface:

Partner-sourced pipeline should be treated as a distinct motion with its own enablement, benchmarks, stage definitions, and review cadence.

Interactions:

- Toggle between direct, Google Cloud, and channel-sourced motions
- Highlight accounts where partner leverage materially changes priority

### 5. Forecast Scenario View

Purpose: demonstrate stage discipline and honest forecasting.

Forecast categories:

- Commit
- Best case
- Pipeline
- At risk

Commit rules:

- Defined success criteria required
- Security review cannot be unresolved
- Sponsor strength must meet threshold
- Integration plan must be confirmed
- No unresolved hard blocker

Interactions:

- Toggle business rules on/off
- Show forecast delta when rules change
- Scenario selector:
  - Conservative
  - Base
  - Upside

Charts:

- Weighted pipeline
- Forecast by category
- Stage aging
- Blocker impact on forecast

### 6. Investor Snapshot View

Purpose: convert operating signals into a board/investor-ready weekly narrative.

Snapshot cards:

- New qualified pipeline
- Partner-sourced share
- Pilot-to-production conversion
- Average days to production
- Forecast accuracy proxy
- Expansion candidates
- Top three blockers

Narrative section:

- `What improved this week`
- `What is blocked`
- `What leadership should decide`
- `What investors should believe`

This section should clearly separate traction metrics from confidence metrics.

## Business Rules Sidebar

Add an always-visible or collapsible rule panel that mirrors AUI's public positioning around explicit, editable business behavior.

Example rules:

- `Never mark an opportunity as commit without defined success criteria.`
- `Prioritize regulated or policy-critical accounts over low-stakes support use cases.`
- `Escalate opportunities stuck in security review for more than 14 days.`
- `Down-rank open-ended creative or low-measurement use cases.`
- `Require an integration owner before production readiness can exceed 70.`

Interaction:

- Rules can be toggled
- Priority, readiness, and forecast numbers update immediately
- A small audit trail explains which rule affected which account

## Synthetic Dataset

Create 18 accounts across AUI-relevant commercial terrain:

- Banking
- Insurance
- Airlines
- Retail
- Healthcare
- Automotive
- Internal support
- B2B SaaS operations

Example fields:

```text
account
vertical
use_case
source
stage
estimated_acv
policy_criticality
process_actionability
auditability_need
integration_count
conversation_volume
partner_leverage
sponsor_strength
security_status
integration_readiness
success_criteria_defined
product_gap_severity
blocker_reason
days_in_stage
expansion_potential
```

Label all data as synthetic in the UI and README.

## Visual Design Direction

The page should feel like an operating cockpit for a senior commercial leader.

Use:

- Compact tables
- Clear metric cards
- Status chips
- Segmented controls
- Small multiples
- Side panels for detail
- Icons for actions and filters

Avoid:

- Landing-page hero treatment
- Generic chatbot visuals
- Cartoon AI imagery
- Overly decorative cards
- Claims that imply access to AUI internal data

Recommended palette:

- Neutral graphite text
- White and near-white surfaces
- Cool gray borders
- Teal for readiness
- Blue for forecast
- Amber for caution
- Red for blockers
- Green for production-ready signals

## Demo Story

Five-minute walkthrough:

1. Start with the assumption: the key GTM challenge is moving from promising pilots to repeatable production deployments.
2. Show the prioritization layer: which accounts deserve focus and why.
3. Show the readiness board: what is blocking production conversion.
4. Show the partner view: how cloud and channel motion differ from direct.
5. Show the forecast and investor layer: what leadership should believe this week.
6. Close with operating decisions the tool supports.

Operating decisions to highlight:

- Which accounts should get executive attention this week?
- Which pilots are not forecastable yet?
- Which blockers require leadership intervention?
- Where is partner motion creating real leverage?
- Which metrics belong in an investor update versus an internal operating review?

## Build Timeline

Today, Tuesday May 5, 2026:

- Scaffold Vite React app
- Add Tailwind, Recharts, and Lucide
- Create synthetic dataset
- Implement scoring helpers and rule engine
- Build core KPI strip and prioritization table

Wednesday May 6, 2026:

- Build readiness board
- Build partner/co-sell charts
- Build forecast scenario view
- Build investor snapshot
- Add rule toggles and audit trail
- Polish responsive layout
- Write README and deployment notes

Thursday May 7, 2026:

- Freeze features
- Test GitHub Pages build
- Rehearse the five-minute story
- Capture screenshots or a short walkthrough if needed

## Implementation Checklist

- [ ] Create app scaffold
- [ ] Add static synthetic dataset
- [ ] Add scoring and rule logic
- [ ] Build dashboard shell
- [ ] Build KPI strip
- [ ] Build account prioritization view
- [ ] Build readiness board
- [ ] Build partner/co-sell view
- [ ] Build forecast scenario view
- [ ] Build investor snapshot
- [ ] Add business rules sidebar
- [ ] Add account detail side panel
- [ ] Add responsive styling
- [ ] Add README with synthetic-data caveat
- [ ] Add GitHub Pages deployment config
- [ ] Run production build
- [ ] Test locally

## README Positioning Copy

Suggested repository description:

> Interactive GTM operating prototype for AUI StratOps interview preparation. Uses synthetic data to demonstrate account prioritization, pilot-to-production readiness, partner motion, forecast discipline, and investor reporting logic.

Synthetic-data caveat:

> This project uses synthetic sample data only. It is intended to demonstrate operating logic and strategic thinking, not to represent AUI's internal pipeline, customers, or confidential metrics.

## Pre-Meeting Note

Suggested message:

> Hi Toby - ahead of Thursday, I put together a lightweight working prototype for how I would think about a founding GTM / production-readiness operating system at AUI. It uses synthetic data and is intentionally simple, but I thought it might make our conversation more concrete around prioritization, forecasting, partner motion, and moving opportunities from pilot to production. Looking forward to walking you through the thinking.
