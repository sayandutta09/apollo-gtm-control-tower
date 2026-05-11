# Apollo GTM Control Tower

Interactive GTM operating prototype for AUI StratOps planning.

This page uses synthetic data to demonstrate account prioritization, pilot-to-production readiness, partner motion, forecast discipline, and investor reporting logic. It does not represent AUI internal pipeline, customers, or confidential metrics.

## What It Shows

- Account prioritization based on fit, readiness, strategic value, and blockers
- Pilot-to-production readiness board
- Partner and co-sell motion split across direct, Google Cloud, and channel sources
- Forecast scenario controls with explicit commit rules
- Colored forecast bars plus a forecast confidence funnel
- Investor-style snapshot separating traction signals from confidence signals
- Editable business-rule toggles with audit-style flags
- Assumptions drawer explaining the synthetic model and score formula
- Board-update copy block for executive follow-up
- Definitions tab covering every major metric, score, stage, rule, and forecast term

## Run Locally

Because this is a zero-dependency static app, you can open `index.html` directly in a browser.

For a local web server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## GitHub Pages

This repo includes `.github/workflows/pages.yml`. After pushing to GitHub, enable GitHub Pages with GitHub Actions as the source if it is not enabled automatically.

## Discussion Frame

Use the discussion like this:

1. AUI's hardest GTM problem is likely moving from promising pilots to repeatable production deployments.
2. The prioritization layer shows where focus should go.
3. The readiness board shows what blocks conversion to production.
4. The partner view shows why co-sell motion needs its own operating cadence.
5. The forecast and investor layers show what leadership should believe this week.
