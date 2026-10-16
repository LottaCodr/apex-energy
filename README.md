# ApexEnergy Resources Ltd — Investor Website

Corporate and investor-facing website for **ApexEnergy Resources Ltd**, Nigeria's
phased gas commercialization and LNG development company.

> From Pilot to World-Scale: Monetizing Nigeria's Gas, Powering the World

## Positioning

The site presents the company's investment case in the order an investor
evaluates it: who the company is, how the phased strategy works, the flagship
project, the economics, the competitive edge, and the current raise.

**Strategy: Prove → Scale → Dominate**

| Phase | Project | CAPEX | Timeline | Goal |
| --- | --- | --- | --- | --- |
| 1 — Prove | Gwagwalada Energy Hub — 5 MMSCFD CNG + 50 TPD Mini-LNG | $60M | 2027–2028 | Prove execution, generate cashflow, unlock grants |
| 2 — Scale | Mid-scale LNG, 1 MTPA train | $800M | 2029–2031 | Serve African regional + bunkering markets |
| 3 — Dominate | World-scale LNG, 12 MTPA (2 trains) | $20B | 2032–2037 | Export to Europe / Asia — $5B FX per year |

**Current raise:** $3M Owner Engineer mandate (Gwagwalada FEED + permits + GSA)
and $35M equity/debt to reach FID in Q1 2027.

## Site Sections

1. **Hero** — positioning, strategy chain, live raise strip, benchmark metrics
2. **Who We Are** — mandate, mission, vision, Decade of Gas alignment
3. **Strategy** — interactive Prove → Scale → Dominate roadmap with per-phase detail
4. **Gwagwalada** — flagship project, impact metrics, milestone tracker, AKK corridor
5. **Monetization Model** — interactive Phase 1 economics with adjustable assumptions
6. **Why ApexEnergy Wins** — five structural advantages mapped to risk removed
7. **Invest** — the two tranches, use of proceeds, capital stack
8. **Investor FAQ** — feedstock, risk sequencing, capital structure, accountability
9. **Contact** — investor relations desk and enquiry form

## Tech Stack

React 19 + TypeScript + Vite, Tailwind CSS v4, Framer Motion, Radix UI
primitives (dialog, accordion, slider), Lucide icons, Oxlint.

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # type-check + production build
npm run lint     # oxlint
npm run preview  # preview the production build
```

## Content Notes

- All company, project and financial figures are sourced from the ApexEnergy
  company profile and live in a single file: `src/data/companyData.ts`.
- The Phase 1 monetization model is **illustrative**. Its inputs are adjustable
  planning assumptions, explicitly labelled as not company guidance, and it
  excludes Phase 2/3 export revenue, grants and financing costs.
- The footer carries a forward-looking statements disclaimer.
- Imagery in `public/images/` is illustrative renders of comparable
  infrastructure, not photographs of ApexEnergy facilities.
