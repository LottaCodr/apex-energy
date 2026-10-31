/**
 * ApexEnergy Resources Ltd — Investor-facing company profile data.
 * Single source of truth for positioning, phased strategy, project facts,
 * competitive advantages and the current capital raise.
 */

export const COMPANY_INFO = {
  name: 'ApexEnergy Resources Ltd',
  shortName: 'ApexEnergy',
  positioning: "Nigeria's Phased Gas Commercialization & LNG Development Company",
  tagline:
    "From Pilot to World-Scale: Monetizing Nigeria's Gas, Powering the World",
  phoneDisplay: '+234802 211 4473',
  phoneHref: 'tel:+2348022114473',
  emailDisplay: 'info@apexenergylimited.com',
  emailHref: 'mailto:info@apexenergylimited.com',
  headquarters:
    'Plot 1142, Adetokunbo Ademola Crescent, Wuse II, Abuja, FCT, Nigeria',
  operatingHours:
    'Investor Relations — Mon to Fri (09:00 to 18:00 WAT) • Project Desk — 24/7',
}

export const MISSION =
  "De-risk Nigeria's gas value chain, displace diesel, create jobs, and deliver first gas in 18 months."

export const VISION =
  "To build Nigeria's first Indigenous world-class 12 MTPA LNG company, starting from the Gwagwalada Energy Hub."

export const HERO_METRICS = [
  {
    value: '18',
    unit: 'MONTHS',
    label: 'To First Gas',
    sub: 'Gwagwalada Hub — vs. ~6 years for a conventional LNG train',
  },
  {
    value: '12',
    unit: 'MTPA',
    label: 'World-Scale LNG',
    sub: 'Two trains, Phase 3, exporting to Europe & Asia',
  },
  {
    value: '$20',
    unit: 'BN',
    label: 'Programme CAPEX',
    sub: 'Deployed across three self-funding growth phases',
  },
  {
    value: '$5',
    unit: 'BN/YR',
    label: 'Export FX Earnings',
    sub: 'Hard-currency revenue at full 12 MTPA capacity',
  },
]

export interface Phase {
  id: string
  pillar: string
  phaseLabel: string
  project: string
  capex: string
  capexNote: string
  timeline: string
  goal: string
  accent: 'emerald' | 'cryo' | 'amber'
  image: string
  imageAlt: string
  headline: string
  detail: string
  capabilities: string[]
  metrics: { label: string; value: string }[]
  funding: string
}

export const PHASES: Phase[] = [
  {
    id: 'phase-1',
    pillar: 'PROVE',
    phaseLabel: 'Phase 1',
    project: 'Gwagwalada Energy Hub',
    capex: '$60M',
    capexNote: 'First tranche $3M OE mandate + $35M to FID Q1 2027',
    timeline: '2027 — 2028',
    goal: 'Prove execution, generate cashflow, unlock grants',
    accent: 'emerald',
    image: '/images/gwagwalada-site.jpg',
    imageAlt:
      'ApexEnergy Gwagwalada Energy Hub with cryogenic LNG tanks and CNG tube cascade trailers on the AKK corridor',
    headline: 'Fast-to-market gas: 5 MMSCFD CNG + 50 TPD Mini-LNG',
    detail:
      'A modular mother station on the AKK pipeline corridor at Gwagwalada. CNG cascades and a 50 TPD mini-LNG train monetize first molecules into the FCT, northern haulage corridors and captive industrial power, while proving the execution, HSE and commercial platform the larger phases are financed on.',
    capabilities: [
      '5 MMSCFD CNG mother station with cascade filling bays',
      '50 TPD modular mini-LNG liquefaction train',
      'Direct AKK corridor gas feed — no upstream drilling required',
      'Builds the operating track record that unlocks Phase 2 capital',
    ],
    metrics: [
      { label: 'Gas Feed', value: '7.4 MMSCFD' },
      { label: 'Mini-LNG Train', value: '50 TPD' },
      { label: 'First Gas', value: '18 Months' },
      { label: 'Direct + Indirect Jobs', value: '1,000+' },
    ],
    funding:
      'Owners equity, Bank of Industry, Zenith, MDGIF, NGFCP grant and cornerstone private investors.',
  },
  {
    id: 'phase-2',
    pillar: 'SCALE',
    phaseLabel: 'Phase 2',
    project: 'Mid-Scale LNG — 1 MTPA Train',
    capex: '$800M',
    capexNote: 'Structured project finance on Phase 1 operating history',
    timeline: '2029 — 2031',
    goal: 'Serve the African regional & marine bunkering market',
    accent: 'cryo',
    image: '/images/cryo-lng-plant.jpg',
    imageAlt:
      'Mid-scale LNG liquefaction train with cryogenic storage at dusk',
    headline: 'A single 1 MTPA train built on proven Phase 1 operations',
    detail:
      'Phase 2 scales liquefaction by two orders of magnitude on the same corridor, same offtake relationships and same operating team. Targeted at West African regional demand and the emerging LNG marine bunkering market, with first export volumes from 2031.',
    capabilities: [
      'Single 1 MTPA liquefaction train with dedicated storage',
      'Regional West African distribution and coastal bunkering',
      'Replication of Phase 1 module architecture to compress schedule',
      'Full project-finance readiness — operating history as bankability anchor',
    ],
    metrics: [
      { label: 'LNG Capacity', value: '1 MTPA' },
      { label: 'Storage', value: '2 × 40,000 m³' },
      { label: 'Market', value: 'Africa + Bunkering' },
      { label: 'Structure', value: 'Project Finance' },
    ],
    funding:
      'Project finance, ECAs, multi-lateral development banks and export credit support against long-term offtake.',
  },
  {
    id: 'phase-3',
    pillar: 'DOMINATE',
    phaseLabel: 'Phase 3',
    project: 'World-Scale LNG — 12 MTPA, 2 Trains',
    capex: '$20B',
    capexNote: 'World-scale EPC, staged final investment decisions',
    timeline: '2032 — 2037',
    goal: 'Export to Europe & Asia — $5B FX per year',
    accent: 'amber',
    image: '/images/lng-export-terminal.jpg',
    imageAlt:
      'World-scale LNG export terminal with two liquefaction trains, storage tanks and a berthed LNG carrier',
    headline: "Nigeria's first indigenous 12 MTPA LNG company",
    detail:
      'Two world-scale trains and a dedicated export terminal delivering 12 MTPA of Nigerian gas to European and Asian markets. This is the destination the phased structure exists to reach: full gas commercialization, hard-currency earnings, and a national asset built by a Nigerian company.',
    capabilities: [
      'Two 6 MTPA liquefaction trains with integrated export jetty',
      'Dedicated long-term SPA portfolio across Europe and Asia',
      '$5B per year in hard-currency export earnings',
      'Deep local content and full value-chain retention in Nigeria',
    ],
    metrics: [
      { label: 'LNG Capacity', value: '12 MTPA' },
      { label: 'Trains', value: '2 × 6 MTPA' },
      { label: 'Export FX', value: '$5B / Year' },
      { label: 'Target', value: 'Europe + Asia' },
    ],
    funding:
      'Staged world-scale EPC finance, sovereign and multi-lateral co-investment, and international LNG portfolio buyers.',
  },
]

export const GWAGWALADA = {
  name: 'Gwagwalada Energy Hub',
  designation: 'Presidential Showcase Project',
  location: 'Gwagwalada, FCT — On the AKK Pipeline Corridor',
  capacity: '5 MMSCFD Mother CNG + 50 TPD Mini-LNG',
  status: 'Fast-to-market • First gas targeted in 18 months',
}

export const GWAGWALADA_IMPACT = [
  {
    value: '1,000+',
    label: 'Jobs Created',
    sub: '300 direct construction & operating roles, 700 indirect across the supply chain',
    accent: 'emerald',
  },
  {
    value: '20M',
    label: 'Litres Diesel Displaced / Year',
    sub: 'Direct substitution of imported automotive gas oil with domestic dry gas',
    accent: 'cryo',
  },
  {
    value: '$27M',
    label: 'FX Savings / Year',
    sub: 'Foreign exchange retained in-country by displacing imported diesel',
    accent: 'amber',
  },
  {
    value: '30%',
    label: 'NCDMB Local Content',
    sub: 'Nigerian Content Development Act compliant from Day 1 of procurement',
    accent: 'emerald',
  },
]

export const GWAGWALADA_MILESTONES = [
  {
    status: 'Submitted',
    title: 'NGFCP Application',
    detail:
      'Nigeria Gas Flare Commercialisation Programme application submitted for flare-gas feedstock allocation.',
    state: 'done' as const,
  },
  {
    status: 'Submitted',
    title: 'Land Application',
    detail:
      'Land allocation application submitted for the Gwagwalada Energy Hub site on the AKK pipeline corridor.',
    state: 'done' as const,
  },
  {
    status: 'Open — $3M Mandate',
    title: 'Owner Engineer (OE) Appointment',
    detail:
      'Seeking a qualified Owner Engineer under a $3M mandate to deliver FEED, permits and the Gas Sales Agreement.',
    state: 'active' as const,
  },
  {
    status: 'In Progress',
    title: 'FEED, Permits & GSA',
    detail:
      'Front-End Engineering Design, regulatory permits and the bankable Gas Sales Agreement that unlock FID in Q1 2027.',
    state: 'pending' as const,
  },
  {
    status: 'Target Q1 2027',
    title: 'Final Investment Decision',
    detail:
      'FID on the $60M Gwagwalada Hub once the $35M equity/debt tranche has closed.',
    state: 'pending' as const,
  },
]

export const LEADERSHIP_INTRO = {
  kicker: '06 / LEADERSHIP',
  title: 'Thirty-Five Years of Nigerian Gas — One Career to Prove It',
  subtitle:
    'Investors back operators, not slideware. ApexEnergy is led by the career that built, governed and traded Nigeria\u2019s LNG at national scale.',
  body: 'Early-stage gas companies carry key-person risk by definition. The answer is not to hide the team — it is to name the operator, show the track record in verifiable detail, and tie every credential to the specific job ahead at Gwagwalada and beyond.',
}

export interface Leader {
  id: string
  name: string
  role: string
  roleDetail: string
  tenure: string
  tenureLabel: string
  initials: string
  oneLiner: string
  bio: string[]
  positions: { title: string; org?: string; note?: string }[]
  expertise: string[]
  education: { label: string; detail: string }[]
  quote: string
  quoteAttribution: string
  integrityNote: string
  featured: boolean
}

export const LEADERSHIP: Leader[] = [
  {
    id: 'adam-umar',
    name: 'Adam Umar',
    role: 'Energy Expert & Management and Leadership Consultant',
    roleDetail: 'Founder & Chief Executive Officer, ZEEMAN DMCC (Est. 2022)',
    tenure: '35 years',
    tenureLabel: 'Meritorious service — retired MD, NNPC LNG Limited',
    initials: 'AU',
    oneLiner:
      'Thirty-five years across upstream, midstream and downstream — culminating as Managing Director of NNPC LNG Limited, the NNPCL subsidiary that governs Nigeria\u2019s LNG interests.',
    bio: [
      'Adam Umar is an Energy Expert and Management and Leadership Consultant and Founder of ZEEMAN DMCC (est. 2022), where he serves as Chief Executive Officer. He retired after 35 years of meritorious service in the Nigerian oil and gas industry, concluding his career as Managing Director of NNPC LNG Limited — the subsidiary of NNPC (now NNPCL) responsible for the nation\u2019s LNG assets and commercial interests.',
      'His career spans the three sectors of the value chain — Upstream, Midstream and Downstream — and the full arc of executive leadership inside the national oil company. He has held successive Executive Management and Leadership positions including General Manager Commercial, Manager Commercial Services, Manager Sales, Manager Marketing and Business Development, Manager Shipping and Manager Commercial Bunkering, among others. Each role added a layer the next phase of ApexEnergy now requires: selling molecules, moving them, financing them and governing the people who do it.',
      'He is a Business Coach and Mentor whose leadership is defined by three non-negotiables: Integrity, Honesty and Zero Tolerance for Corruption — the same governance standard on which ApexEnergy\u2019s permits, offtake and financing will be judged.',
    ],
    positions: [
      { title: 'Managing Director', org: 'NNPC LNG Limited (NNPCL Subsidiary)' },
      { title: 'General Manager Commercial', org: 'NNPC / NNPCL' },
      { title: 'Manager Commercial Services', org: 'NNPC / NNPCL' },
      { title: 'Manager Sales', org: 'NNPC / NNPCL' },
      { title: 'Manager Marketing and Business Development', org: 'NNPC / NNPCL' },
      { title: 'Manager Shipping', org: 'NNPC / NNPCL' },
      { title: 'Manager Commercial Bunkering', org: 'NNPC / NNPCL' },
    ],
    expertise: [
      'Corporate Governance',
      'Financial Management',
      'LNG Trading & Marketing',
      'Asset Management',
      'Supply & Physical Distribution of Petroleum Products',
      'Vessel Acquisition & Management',
      'Advanced Negotiations & Contracts Administration',
      'Team Building & Management',
      'Corporate Strategy & Planning',
    ],
    education: [
      {
        label: 'Master of Business Administration (MBA)',
        detail: 'Advanced business administration with executive leadership focus',
      },
      {
        label: 'Fellow, Nigerian Business Development (FIBD)',
        detail: 'Fellowship recognising contribution to enterprise and institutional capacity',
      },
    ],
    quote:
      'A gas molecule creates no value until someone can sell it, move it, finance it and govern the people who do all three. That is what 35 years teaches you.',
    quoteAttribution: 'Adam Umar — on why operating history matters more than concept decks',
    integrityNote:
      'Business Coach & Mentor • Integrity • Honesty • Zero tolerance for Corruption',
    featured: true,
  },
]

export const WHY_APEX = [
  {
    index: '01',
    title: 'Speed',
    stat: '18 months',
    statLabel: 'vs. ~6 years for big LNG',
    detail:
      'Modular, fast-to-market CNG and Mini-LNG designs deliver first gas in 18 months rather than the six-year cycle of a conventional world-scale train. Cashflow arrives while the competition is still in feasibility studies.',
    icon: 'speed' as const,
  },
  {
    index: '02',
    title: 'Alignment',
    stat: '100%',
    statLabel: 'Presidential Gas Policy aligned',
    detail:
      'Directly aligned with the Federal Government\u2019s Decade of Gas Initiative and AKK pipeline utilization strategy. Gwagwalada is positioned as a Presidential Showcase Project — policy tailwind, not policy risk.',
    icon: 'alignment' as const,
  },
  {
    index: '03',
    title: 'Bankable',
    stat: 'Phased',
    statLabel: 'capital structure',
    detail:
      'A phased approach is fundable in tranches: Owners Equity, Bank of Industry, Zenith, MDGIF, NGFCP grant capital and private investors. Each phase de-risks and finances the next rather than requiring $20B on day one.',
    icon: 'bankable' as const,
  },
  {
    index: '04',
    title: 'Team',
    stat: 'NNPC + IOC',
    statLabel: 'with project finance experience',
    detail:
      'Engineers and a commercial team drawn from NNPC and international oil companies, combining upstream gas expertise with project finance discipline and bankable commercial structuring.',
    icon: 'team' as const,
  },
  {
    index: '05',
    title: 'Local Content',
    stat: '30%',
    statLabel: 'NCDMB compliant from Day 1',
    detail:
      'Nigerian Content Development and Monitoring Board compliance from day one of procurement — a 100% Nigerian company retaining value, capability and jobs inside the domestic economy.',
    icon: 'local' as const,
  },
]

export const RAISE = {
  mandate: {
    amount: '$3M',
    title: 'Owner Engineer (OE) Mandate',
    scope: 'Gwagwalada Hub FEED + Permits + Gas Sales Agreement',
    detail:
      'Appointment of a qualified Owner Engineer to deliver Front-End Engineering Design, secure the regulatory permits and structure the Gas Sales Agreement for the Gwagwalada Energy Hub.',
  },
  next: {
    amount: '$35M',
    title: 'Equity / Debt to FID',
    scope: 'Targeting Final Investment Decision in Q1 2027',
    detail:
      'The equity and debt tranche that carries the $60M Gwagwalada Hub to Final Investment Decision and into construction, with first gas targeted 18 months later.',
  },
  uses: [
    {
      percent: 40,
      label: 'FEED & Engineering',
      detail: 'Owner engineering, FEED package, licensed process design and HAZOP',
    },
    {
      percent: 20,
      label: 'Permits & Regulatory',
      detail: 'NMDPRA licensing, NGFCP allocation, land perfection and EIA',
    },
    {
      percent: 15,
      label: 'Gas Sales Agreement',
      detail: 'Commercial structuring, offtake negotiation and credit support',
    },
    {
      percent: 25,
      label: 'Long-Lead Equipment',
      detail: 'Compression, liquefaction modules and cascade trailer reservation',
    },
  ],
  capitalStack: [
    { source: 'Owners Equity', role: 'Sponsor commitment & first-loss capital' },
    { source: 'Bank of Industry', role: 'Naira-denominated development lending' },
    { source: 'Zenith Bank', role: 'Local currency facility & working capital' },
    { source: 'MDGIF', role: 'Development impact co-financing' },
    { source: 'NGFCP Grant', role: 'Concessional flare-gas commercialisation capital' },
    { source: 'Private Investors', role: 'Cornerstone equity & strategic partners' },
  ],
}

export const MODEL_DEFAULTS = {
  cngPrice: 350,
  lngPrice: 11,
  utilization: 85,
}

export const IMPACT_FRAME = [
  'De-risk the national gas value chain',
  'Displace imported diesel at industrial scale',
  'Create Nigerian engineering & operating jobs',
  'Retain energy value and FX inside Nigeria',
]

export const INVESTOR_FAQ = [
  {
    id: 'faq-1',
    question: 'Why start with a $60M CNG and Mini-LNG hub instead of going straight to LNG?',
    answer:
      'Because capital follows demonstrated execution, not intentions. Phase 1 Gwagwalada monetizes first molecules in 18 months, generates operating cashflow, and produces the HSE record, uptime data and audited commercial history that project lenders and LNG offtakers require. Every subsequent phase is financed on the credibility of the one before it — that is the entire point of a Prove → Scale → Dominate structure.',
  },
  {
    id: 'faq-2',
    question: 'Where does the gas come from, and do you need to drill or acquire upstream assets?',
    answer:
      'The Gwagwalada Energy Hub is sited directly on the AKK (Ajaokuta–Kaduna–Kano) pipeline corridor, giving it access to transmission-grade dry gas without drilling or upstream acquisition. Feedstock is secured through the NGFCP application and commercial gas supply arrangements along the corridor, keeping Phase 1 capital concentrated on monetization infrastructure rather than exploration risk.',
  },
  {
    id: 'faq-3',
    question: 'What exactly does the $3M Owner Engineer mandate fund, and who appoints the OE?',
    answer:
      'The $3M mandate funds the appointment of a qualified Owner Engineer to deliver the Front-End Engineering Design package, secure the regulatory permits (NMDPRA licensing, NGFCP allocation, land perfection and EIA), and structure the Gas Sales Agreement. These are the three deliverables that convert the Gwagwalada Hub from a defined project into a bankable, FID-ready investment — and they are the immediate use of proceeds.',
  },
  {
    id: 'faq-4',
    question: 'How is a phased programme fundable when the total programme runs to $20B?',
    answer:
      'It is never raised at once, and it is not the same risk three times. Phase 1 is a $60M fast-to-market build funded by owners equity, Bank of Industry, Zenith, MDGIF, NGFCP grant capital and private investors. Phase 2 is a $800M single-train project financing underwritten by Phase 1 operating history and long-term offtake. Phase 3 is staged world-scale EPC finance alongside sovereign and multi-lateral co-investors. Each tranche is sized to the risk actually being taken.',
  },
  {
    id: 'faq-5',
    question: 'What is the return thesis for an investor entering at the $35M tranche?',
    answer:
      'Entry at the Gwagwalada Hub gives participation in the lowest-risk, highest-certainty tier of a programme whose terminal asset is a 12 MTPA LNG export business. Phase 1 delivers diesel-displacement margins, $27M per year of FX savings and qualifying grant capital. Phase 2 and 3 capacity is effectively option value created on the Phase 1 platform — investors are not paying world-scale LNG prices for pilot-stage risk.',
  },
  {
    id: 'faq-6',
    question: 'How does the programme align with Nigerian government policy and local content law?',
    answer:
      'The programme is designed around the Decade of Gas Initiative and AKK pipeline utilization policy, with Gwagwalada positioned as a Presidential Showcase Project. Procurement is NCDMB-compliant at 30% from day one, and the company is 100% Nigerian-owned. That alignment is what unlocks NGFCP grant capital, development finance participation and accelerated regulatory pathways.',
  },
  {
    id: 'faq-7',
    question: 'What milestones should investors hold management accountable to?',
    answer:
      'Five, in sequence: appointment of the Owner Engineer under the $3M mandate; completion of FEED for the Gwagwalada Hub; receipt of permits and a signed Gas Sales Agreement; close of the $35M equity/debt tranche; and Final Investment Decision in Q1 2027 followed by first gas 18 months later. Each milestone is independently verifiable and each one materially de-risks the next.',
  },
]
