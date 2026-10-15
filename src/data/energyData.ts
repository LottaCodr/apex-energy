export interface LandingSolutionTab {
  id: 'cng' | 'lng' | 'virtual-pipeline' | 'autocng'
  index: string
  category: string
  title: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  statValue: string
  statLabel: string
  accent: 'emerald' | 'cryo' | 'amber'
  highlights: string[]
  specs: { label: string; value: string }[]
}

export const COMPANY_INFO = {
  name: 'Apex Energy Resources Limited',
  shortName: 'Apex Energy',
  city: 'Abuja, Nigeria',
  phoneDisplay: '+234802 211 4473',
  phoneHref: 'tel:+2348022114473',
  emailDisplay: 'info@apexenergylimited.com',
  emailHref: 'mailto:info@apexenergylimited.com',
  headquarters: 'Plot 1142, Adetokunbo Ademola Crescent, Wuse II, Abuja, FCT, Nigeria',
  operationsScope: 'Nationwide Gas Compression, Liquefaction & Virtual Pipeline Network Across Nigeria',
  operatingHours: '24/7 SCADA Dispatch • Corporate Desk Mon to Sat (08:00 to 18:00 WAT)',
}

export const TRUST_BENCHMARKS = [
  { metric: 'Up to 58%', label: 'Fuel OpEx Reduction', sub: 'Versus Automotive Gas Oil (Diesel)' },
  { metric: '250 Bar', label: 'CNG Tube Cascades', sub: '8,500 SCM per Mobile Virtual Pipeline Skid' },
  { metric: '-162°C', label: 'Cryogenic Bulk LNG', sub: '600:1 Liquid-to-Gas Volumetric Density' },
  { metric: '99.94%', label: 'Supply Availability', sub: '24/7 SCADA Telemetry & Reserve Manifolds' },
]

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    meta: 'PHASE 1 • ASSESSMENT',
    title: 'Site Energy & Fleet Load Audit',
    description:
      'Our engineers evaluate your diesel consumption, generator kVA/MW load curves, or fleet routes to size your exact gas transition architecture.',
    image: '/images/engineers-scada.jpg',
    imageAlt: 'Apex Energy Nigerian engineers inspecting a stainless steel PRMS gas skid with a tablet',
  },
  {
    step: '02',
    meta: 'PHASE 2 • COMMISSIONING',
    title: 'On-Site Skid or Fleet Conversion',
    description:
      'We install a dual-stream PRMS decompression or LNG regasification skid at your facility, or convert your commercial fleet with SON-certified kits.',
    image: '/images/captive-power-plant.jpg',
    imageAlt: 'Multi-megawatt industrial gas generator power plant connected to stainless steel gas intake manifold',
  },
  {
    step: '03',
    meta: 'PHASE 3 • 24/7 DISPATCH',
    title: 'Automated Virtual Pipeline Supply',
    description:
      'SCADA telemetry monitors your on-site gas pressure in real time, switching to reserve banks while dispatching fresh CNG or LNG trailers automatically.',
    image: '/images/virtual-pipeline.jpg',
    imageAlt: 'Apex Energy 250-bar tube cascade trailer and on-site stainless steel PRMS skid',
  },
]

export const LANDING_SOLUTION_TABS: LandingSolutionTab[] = [
  {
    id: 'cng',
    index: '01',
    category: '250 BAR COMPRESSED NATURAL GAS',
    title: 'Industrial & Commercial CNG Supply',
    tagline: 'Pipeline-grade dry natural gas delivered directly to off-grid factories, power plants, and estates across Nigeria.',
    description:
      'We compress purified natural gas to 250 bar into mobile tube cascade trailers and step it down safely at your generator or boiler intake.',
    image: '/images/captive-power-plant.jpg',
    imageAlt: 'High-efficiency industrial natural gas generators at a Nigerian manufacturing plant',
    statValue: '54%',
    statLabel: 'Average Fuel Cost Reduction vs. Diesel',
    accent: 'emerald',
    highlights: [
      'Direct fuel feed for 500 kW to 15 MW gas & dual-fuel generators',
      'Dual-bay drop-and-swap cascades for uninterrupted 24/7 operation',
      'Custody-grade Coriolis flow metering & automated SCADA telemetry',
      'Eliminates diesel pilferage, adulteration, and particulate soot',
    ],
    specs: [
      { label: 'Cascade Pressure', value: '250 Bar (3,625 PSI)' },
      { label: 'Trailer Capacity', value: '8,500 SCM / Skid' },
      { label: 'PRMS Outlet Range', value: '0.15 to 6.0 Bar' },
      { label: 'Delivered Benchmark', value: '₦350 / SCM Eq.' },
    ],
  },
  {
    id: 'lng',
    index: '02',
    category: '-162°C CRYOGENIC LIQUID PHASE',
    title: 'Bulk Liquefied Natural Gas (LNG)',
    tagline: '600x volumetric energy density for heavy industry, multi-megawatt turbines, and long-haul national corridors.',
    description:
      'Chilled to -162°C, Apex LNG condenses 600 cubic meters of gas into 1 cubic meter of liquid, delivering over 26,500 SCM per cryogenic road tanker.',
    image: '/images/cryo-lng-plant.jpg',
    imageAlt: 'Cryogenic LNG storage silos, ambient vaporizers, and cryogenic road tanker truck',
    statValue: '600:1',
    statLabel: 'Gas-to-Liquid Volumetric Energy Density',
    accent: 'cryo',
    highlights: [
      'Engineered for 5 MW to 100+ MW baseload power & industrial kilns',
      '3x higher energy payload per road shipment than compressed gas',
      'Zero-power ambient air vaporizers optimized for Nigeria’s climate',
      'Vacuum-insulated vertical storage silos with automated boil-off control',
    ],
    specs: [
      { label: 'Cryogenic State', value: '-162°C (111 K)' },
      { label: 'Tanker Payload', value: '26,500 SCM Equivalent' },
      { label: 'Storage Pressure', value: '3.5 to 8.0 Bar' },
      { label: 'Bulk Contract Rate', value: '₦315 / SCM Eq.' },
    ],
  },
  {
    id: 'virtual-pipeline',
    index: '03',
    category: 'ZERO-CAPEX GAS-AS-A-SERVICE',
    title: 'Virtual Pipeline & On-Site PRMS Skids',
    tagline: 'No physical gas pipeline near your facility? We deploy a dedicated mobile pipeline straight to your gate.',
    description:
      'Under a multi-year Gas Sale and Purchase Agreement (GSPA), Apex Energy finances, installs, and operates the entire decompression terminal at your site.',
    image: '/images/virtual-pipeline.jpg',
    imageAlt: 'Apex Energy Virtual Pipeline tube cascade trailer and stainless steel PRMS skid',
    statValue: '99.94%',
    statLabel: 'Contractual Gas Supply Uptime SLA',
    accent: 'emerald',
    highlights: [
      'Turnkey Build-Own-Operate-Transfer (BOOT) commercial structures',
      'Automatic pneumatic switchover between active and standby bays',
      'SIL-2 Emergency Shutdown (ESD) valves & infrared methane sensors',
      'Real-time pressure, temperature, and flow telemetry via 4G & satellite',
    ],
    specs: [
      { label: 'Manifold Architecture', value: 'N+1 Dual-Stream' },
      { label: 'Telemetry Polling', value: 'Every 5 Seconds' },
      { label: 'ESD Shutoff Speed', value: '< 1.2 Seconds' },
      { label: 'Typical ROI Payback', value: '6 to 11 Months' },
    ],
  },
  {
    id: 'autocng',
    index: '04',
    category: 'PCNGi COMMERCIAL MOBILITY',
    title: 'AutoCNG Fleet Conversion & Fast-Fill Stations',
    tagline: 'Transition haulage trucks, inter-state buses, and corporate fleets to clean, domestically produced natural gas.',
    description:
      'We operate high-speed NGV dispensing hubs and SON-certified conversion centers for sequential bi-fuel and heavy diesel dual-fuel fleets.',
    image: '/images/autocng-station.jpg',
    imageAlt: 'Apex Energy commercial AutoCNG fast-fill refueling station with haulage trucks and buses',
    statValue: '₦320',
    statLabel: 'Pump Benchmark per SCM (vs. ₦1,650/L Diesel)',
    accent: 'amber',
    highlights: [
      'SON & ISO 11439 certified seamless steel and Type-4 composite cylinders',
      '8 to 12 minute high-velocity refueling for heavy haulage trucks',
      'Bi-fuel flexibility: seamless switch between CNG and petrol/diesel',
      'RFID cashless fleet management with per-vehicle consumption analytics',
    ],
    specs: [
      { label: 'Dispensing Pressure', value: '200 Bar NGV-1 / NGV-2' },
      { label: 'Diesel Substitution', value: 'Up to 70% Dual-Fuel' },
      { label: 'Cylinder Standard', value: 'ISO 11439 / ECE R110' },
      { label: 'System Warranty', value: '24 Months / 100,000 km' },
    ],
  },
]

export const NATIONAL_CORRIDORS = [
  {
    region: 'Abuja & Central Corridor',
    hubs: 'Wuse II Corporate HQ • Gwagwalada Mother Hub • Idu Industrial',
    description:
      'Central SCADA command, L-CNG compression & cryogenic storage serving FCT, Nasarawa, Niger, and Kogi.',
    capacity: '320,000 SCM / Day',
  },
  {
    region: 'South-West Industrial Belt',
    hubs: 'Lagos • Ogun Industrial Estates • Ibadan Axis',
    description:
      'High-volume Virtual Pipeline CNG cascades and bulk LNG regasification supporting FMCG and cement plants.',
    capacity: '450,000 SCM / Day',
  },
  {
    region: 'South-South & Eastern Feed',
    hubs: 'Port Harcourt • Warri • Onitsha-Aba Manufacturing Axis',
    description:
      'Direct upstream gas processing interfaces, liquefaction feed trains, and industrial distribution skids.',
    capacity: '520,000 SCM / Day',
  },
  {
    region: 'Northern Logistics & Industrial Axis',
    hubs: 'Kaduna • Kano • Zaria Agro-Industrial Corridor',
    description:
      'Long-haul cryogenic LNG delivery and L-CNG daughter stations powering agro-processing and haulage fleets.',
    capacity: '280,000 SCM / Day',
  },
]

export const CLIENT_TESTIMONIALS = [
  {
    quote:
      'Transitioning our 6.5 MW manufacturing power plant from diesel to Apex Energy’s Virtual Pipeline reduced our monthly energy expenditure by 53% within 60 days, with zero unscheduled downtime.',
    author: 'Engr. Tunde Adebayo',
    role: 'Director of Operations, Continental Beverage & Packaging PLC',
    metric: '₦640M+ Annual Fuel Savings',
    image: '/images/captive-power-plant.jpg',
    imageAlt: '6.5 MW Industrial Gas Generator Plant powered by Apex Energy',
    caseTag: '6.5 MW CAPTIVE POWER RETROFIT',
  },
  {
    quote:
      'Apex Energy converted 45 of our long-haul logistics trucks to dual-fuel CNG and deployed dedicated fast-fill dispensing. Our fleet fuel cost per kilometer dropped immediately by over half.',
    author: 'Alhaji Musa Ibrahim',
    role: 'VP Fleet Operations, Trans-Nigeria Haulage & Logistics Ltd',
    metric: '56% Lower Fleet Fuel Spend',
    image: '/images/autocng-station.jpg',
    imageAlt: 'Commercial haulage truck and bus fleet refueling at Apex AutoCNG hub',
    caseTag: '45-TRUCK DUAL-FUEL FLEET CONVERSION',
  },
]

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How does Apex Energy deliver gas to facilities not connected to a physical pipeline?',
    answer:
      'We deploy a Virtual Pipeline ("Pipeline on Wheels") across Nigeria. Natural gas is compressed to 250 bar (CNG) or liquefied at -162°C (LNG) at our Mother Stations and transported via specialized tube cascade trailers or cryogenic road tankers. At your facility, we install a dual-bay Pressure Reduction and Metering Skid (PRMS) or satellite regasification unit that feeds your generators or boilers continuously.',
  },
  {
    id: 'faq-2',
    question: 'Should our operation choose Compressed Natural Gas (CNG) or Liquefied Natural Gas (LNG)?',
    answer:
      'CNG is optimal for commercial facilities, estates, fleets, and factories within 250 to 300 km of a compression hub consuming 10,000 to 300,000 SCM per month. Cryogenic LNG condenses gas volume by 600:1 at -162°C, making it the premier choice for heavy industrial off-takers (3 MW to 100+ MW) or long-distance national haulage corridors.',
  },
  {
    id: 'faq-3',
    question: 'Can our existing diesel generators run on natural gas, or do we need new turbines?',
    answer:
      'Both pathways are supported. We offer Dual-Fuel Retrofit Systems that allow existing Cummins, Perkins, CAT, or MTU diesel generators to substitute up to 70% of diesel with natural gas immediately, as well as 100% Dedicated Gas Generators for maximum fuel cost savings of up to 58%.',
  },
  {
    id: 'faq-4',
    question: 'What is the upfront capital cost for an on-site decompression or regasification skid?',
    answer:
      'Qualified industrial and commercial off-takers can utilize our Zero-CapEx Gas-as-a-Service (BOOT) structure, where Apex Energy finances, engineers, installs, and maintains the on-site infrastructure under a multi-year Gas Sale and Purchase Agreement (GSPA). Direct EPC purchase and lease-to-own options are also available.',
  },
  {
    id: 'faq-5',
    question: 'What safety and regulatory standards govern Apex Energy installations?',
    answer:
      'Natural gas is lighter than air and dissipates rapidly if released, unlike liquid fuels or LPG. All Apex Energy operations are licensed by the NMDPRA and engineered to ASME Section VIII, SON ISO 11439, and ECE R110 codes, featuring SIL-2 Emergency Shutdown (ESD) valves that isolate flow in under 1.2 seconds.',
  },
]
