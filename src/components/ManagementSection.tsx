import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Building2,
  Compass,
  GraduationCap,
  Quote,
  ShieldCheck,
  Ship,
  TrendingUp,
  Users,
  Landmark,
  Fuel,
  FileText,
  ChevronDown,
  Briefcase,
  Anchor,
} from 'lucide-react'
import { LEADERSHIP, LEADERSHIP_INTRO } from '../data/companyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
  EASE_OUT_EXPO,
} from '../lib/motion'

const leader = LEADERSHIP[0]

const COMPETENCY_GROUPS: { label: string; items: string[]; icon: React.ElementType }[] = [
  {
    label: 'Commercial & Trading',
    icon: TrendingUp,
    items: [
      'LNG Trading & Marketing',
      'Advanced Negotiations & Contracts Administration',
      'Supply & Physical Distribution of Petroleum Products',
    ],
  },
  {
    label: 'Operations & Assets',
    icon: Ship,
    items: [
      'Asset Management',
      'Vessel Acquisition & Management',
      'Shipping',
    ],
  },
  {
    label: 'Governance & Leadership',
    icon: ShieldCheck,
    items: [
      'Corporate Governance',
      'Financial Management',
      'Corporate Strategy & Planning',
      'Team Building & Management',
    ],
  },
]

export const ManagementSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="leadership"
      className="border-b border-[#E2E8F0] bg-white py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-14 sm:px-6 lg:px-8">
        {/* Editorial Header — 12-col */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-[#E2E8F0] pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
              {LEADERSHIP_INTRO.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] lg:leading-[0.95]">
              {LEADERSHIP_INTRO.title}
            </h2>
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-[#334155] sm:text-base">
              {LEADERSHIP_INTRO.subtitle}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#059669]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                  WHY THIS SECTION EXISTS
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                {LEADERSHIP_INTRO.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px]">
                <span className="rounded-md border border-[#059669]/20 bg-[#059669]/10 px-2 py-1 font-semibold text-[#047857]">
                  Verifiable career history
                </span>
                <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-1 font-semibold text-[#475569]">
                  Quantified tenure
                </span>
                <span className="rounded-md border border-[#0284C7]/20 bg-[#0284C7]/10 px-2 py-1 font-semibold text-[#0369A1]">
                  Domain-matched expertise
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* At-a-glance credibility ledger */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E2E8F0] lg:grid-cols-5"
        >
          {[
            { icon: Award, label: 'Tenure', value: '35 years', sub: 'Meritorious service' },
            { icon: Building2, label: 'Final Appointment', value: 'MD, NNPC LNG Ltd', sub: 'NNPCL subsidiary' },
            { icon: Compass, label: 'Value Chain', value: 'Upstream → Mid → Down', sub: 'All 3 sectors' },
            { icon: Fuel, label: 'Company', value: 'ApexEnergy', sub: 'Founder, ApexEnergy Resources Ltd' },
            { icon: GraduationCap, label: 'Standing', value: 'MBA • FIBD', sub: 'Fellow, NBD' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUpVariant}
              className="flex flex-col gap-1.5 bg-white p-4 sm:p-5"
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-3.5 w-3.5 text-[#059669]" />
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                  {item.label}
                </span>
              </div>
              <p className="font-display text-sm font-bold leading-tight text-[#0F172A] sm:text-base">
                {item.value}
              </p>
              <p className="font-mono text-[11px] leading-none text-[#475569]">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Leader — 12-col: sticky portrait card + narrative */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Portrait & Credentials Card (sticky) */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
              {/* Portrait — typographic monogram, not a fake headshot */}
              <div className="relative overflow-hidden bg-[#0B131E]">
                <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
                <div
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.08] blur-3xl"
                  style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }}
                />
                <div
                  className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full opacity-[0.06] blur-3xl"
                  style={{ background: 'radial-gradient(circle, #38BDF8, transparent 70%)' }}
                />
                <div className="relative flex flex-col items-center gap-5 px-6 py-10 sm:px-8 sm:py-12">
                  <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm sm:h-32 sm:w-32">
                    <span className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {leader.initials}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-white sm:text-xl">
                      {leader.name}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#34D399]">
                      {leader.role}
                    </p>
                    <p className="mt-1 font-mono text-[11px] leading-snug text-slate-400">
                      {leader.roleDetail}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                      <BadgeCheck className="h-3 w-3 text-[#34D399]" />
                      {leader.tenure} • {leader.tenureLabel}
                    </span>
                  </div>
                </div>
                <div className="relative border-t border-white/10 bg-[#0B131E]/60 px-4 py-2.5 backdrop-blur">
                  <p className="text-center font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                    Founding Leadership &nbsp;•&nbsp; Official portrait on file — published in data room under NDA
                  </p>
                </div>
              </div>

              {/* Quick credentials ledger */}
              <div className="space-y-px bg-[#E2E8F0] p-px">
                <div className="flex items-center justify-between bg-[#F8FAFC] px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                    <Briefcase className="h-3.5 w-3.5 text-[#059669]" />
                    Final Mandate
                  </span>
                  <span className="text-right font-mono text-xs font-bold text-[#0F172A]">MD, NNPC LNG Limited</span>
                </div>
                <div className="flex items-center justify-between bg-white px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                    <Landmark className="h-3.5 w-3.5 text-[#0284C7]" />
                    Sectors Covered
                  </span>
                  <span className="text-right font-mono text-xs font-semibold text-[#0F172A]">Upstream • Midstream • Downstream</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                    <Anchor className="h-3.5 w-3.5 text-[#059669]" />
                    Current Mandate
                  </span>
                  <span className="text-right font-mono text-xs font-bold text-[#0F172A]">Founder, ApexEnergy Resources Ltd</span>
                </div>
              </div>

              {/* Integrity bar */}
              <div className="border-t border-[#E2E8F0] bg-[#0B131E] px-4 py-3 sm:px-5">
                <p className="flex items-start gap-2.5 text-[11px] font-medium leading-relaxed text-slate-300">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
                  <span>
                    <strong className="text-white">Governance standard:</strong> {leader.integrityNote}.<br />
                    <span className="text-slate-400">The same bar ApexEnergy applies to permits, offtake and financing.</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Education compact */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-3">
                <GraduationCap className="h-4 w-4 text-[#059669]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                  Education & Fellowship
                </p>
              </div>
              <div className="divide-y divide-[#E2E8F0]">
                {leader.education.map((ed) => (
                  <div key={ed.label} className="space-y-1 px-4 py-3">
                    <p className="text-sm font-semibold leading-tight text-[#0F172A]">{ed.label}</p>
                    <p className="text-xs leading-relaxed text-[#475569]">{ed.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 lg:col-span-7"
          >
            {/* Lead — one-liner investors remember */}
            <motion.div variants={fadeUpVariant} className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/20 bg-[#059669]/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#047857]">
                  Featured Operator • {leader.tenure} in Nigerian Oil & Gas
                </span>
              </div>
              <p className="font-display text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
                {leader.oneLiner}
              </p>
            </motion.div>

            {/* Full bio — generous whitespace, not a wall */}
            <motion.div variants={fadeUpVariant} className="space-y-4">
              {leader.bio.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-base leading-relaxed text-[#0F172A] sm:text-[17px]'
                      : 'text-sm leading-relaxed text-[#475569] sm:text-[15px]'
                  }
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Positions — progressive disclosure */}
            <motion.div
              variants={fadeUpVariant}
              className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
            >
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F8FAFC]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B131E] text-white">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                      Executive Track Record
                    </p>
                    <p className="font-display text-sm font-bold text-[#0F172A]">
                      7 leadership mandates inside NNPC / NNPCL
                    </p>
                  </div>
                </div>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                    expanded
                      ? 'rotate-180 border-[#059669]/30 bg-[#059669]/10 text-[#059669]'
                      : 'border-[#E2E8F0] bg-white text-[#94A3B8]'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    className="overflow-hidden"
                  >
                    <ol className="space-y-px border-t border-[#E2E8F0] bg-[#E2E8F0]">
                      {leader.positions.map((pos, idx) => (
                        <li
                          key={pos.title}
                          className="flex gap-4 bg-white px-5 py-3.5"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B131E] font-mono text-[10px] font-bold text-white">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[#0F172A]">{pos.title}</p>
                            {pos.org && (
                              <p className="font-mono text-xs text-[#475569]">{pos.org}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                    <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3">
                      <p className="flex items-center gap-2 font-mono text-[11px] text-[#475569]">
                        <FileText className="h-3.5 w-3.5 text-[#059669]" />
                        Full CV, appointment letters and performance references — available in data room under NDA.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!expanded && (
                <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3">
                  <p className="text-xs leading-relaxed text-[#475569]">
                    Culminating as <strong className="text-[#0F172A]">Managing Director, NNPC LNG Limited</strong> after successive commercial leadership roles. Tap to see the full sequence.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Competency map — grouped, scannable */}
            <motion.div variants={fadeUpVariant} className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Award className="h-4 w-4 text-[#059669]" />
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                  Domain Expertise — What 35 Years Actually Covered
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
                {COMPETENCY_GROUPS.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <group.icon className="h-3.5 w-3.5 text-[#059669]" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#0F172A]">
                        {group.label}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-[11px] font-medium leading-none text-[#334155]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Remaining singletons that don't group cleanly */}
              <div className="flex flex-wrap gap-1.5">
                {leader.expertise
                  .filter(
                    (e) =>
                      !COMPETENCY_GROUPS.some((g) => g.items.includes(e))
                  )
                  .map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-[11px] font-medium leading-none text-[#334155]"
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </motion.div>

            {/* Quote — integrity as memorability */}
            <motion.figure
              variants={fadeUpVariant}
              className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#0B131E] p-6 text-white sm:p-8"
            >
              <div className="absolute inset-0 bg-blueprint-dark opacity-30" />
              <Quote className="absolute right-6 top-6 h-10 w-10 text-white/10" />
              <blockquote className="relative space-y-4">
                <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                  &ldquo;{leader.quote}&rdquo;
                </p>
                <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="h-px w-6 bg-[#34D399]" />
                  <span className="font-mono text-[11px] leading-snug text-slate-400">
                    {leader.quoteAttribution}
                  </span>
                </figcaption>
              </blockquote>
            </motion.figure>

            {/* Why this de-risks Apex — forward tie */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl border border-[#059669]/20 bg-[#059669]/[0.06] p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <BadgeCheck className="h-4 w-4 text-[#059669]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#047857]">
                  Why This Operator De-Risks ApexEnergy
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    label: 'He has sold the molecule',
                    detail: 'Sales, Marketing and Commercial Bunkering — the offtake ApexEnergy must now sign.',
                  },
                  {
                    label: 'He has moved it',
                    detail: 'Shipping and Physical Distribution — the virtual pipeline Gwagwalada will run on.',
                  },
                  {
                    label: 'He has governed it',
                    detail: 'MD of NNPC LNG Ltd and GM Commercial — the governance and JV discipline lenders will diligence.',
                  },
                ].map((row) => (
                  <li key={row.label} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#059669]" />
                    <span className="text-sm leading-snug text-[#334155]">
                      <strong className="text-[#0F172A]">{row.label}</strong> — {row.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[#059669]/15 pt-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#047857]">
                  <Building2 className="h-3.5 w-3.5" />
                  Business Coach & Mentor
                </span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-[11px] text-[#475569]">Founder, ApexEnergy Resources Ltd • ZEEMAN DMCC — CEO since 2022</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scale affordance — prepares for future leaders */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5">
              <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                <Users className="h-3.5 w-3.5 text-[#059669]" />
                Additional Leadership & Advisory Appointments
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-[#475569]">
                Finance, engineering and HSE leads and the independent advisory board will be announced alongside the $3M OE mandate close. The operator above is the accountable executive for the Gwagwalada Energy Hub through to FID.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-[#D97706] animate-pulse-glow" />
              <span className="font-semibold text-[#475569]">Mandate-stage hiring in progress</span>
            </div>
          </div>
        </motion.div>

        {/* Governance strip */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-start justify-between gap-3 rounded-xl bg-[#0B131E] px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:px-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#34D399]">
            <ShieldCheck className="h-4 w-4" />
            100% Nigerian Owned • NCDMB 30% Local Content from Day 1
          </span>
          <span className="text-xs text-slate-500">Full board, governance charter and key-person provisions — data room under NDA.</span>
        </motion.div>
      </div>
    </section>
  )
}
