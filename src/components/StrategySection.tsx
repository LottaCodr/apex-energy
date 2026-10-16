import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, CircleDollarSign, Clock3 } from 'lucide-react'
import { PHASES, type Phase } from '../data/companyData'
import {
  fadeUpVariant,
  EASE_OUT_EXPO,
  staggerContainerVariant,
} from '../lib/motion'

const accentClasses: Record<
  Phase['accent'],
  { text: string; bg: string; border: string; dot: string; gradient: string }
> = {
  emerald: {
    text: 'text-[#047857]',
    bg: 'bg-[#059669]/10',
    border: 'border-[#059669]/35',
    dot: 'bg-[#059669]',
    gradient: 'from-[#059669] to-[#10B981]',
  },
  cryo: {
    text: 'text-[#0369A1]',
    bg: 'bg-[#0284C7]/10',
    border: 'border-[#0284C7]/35',
    dot: 'bg-[#0284C7]',
    gradient: 'from-[#0284C7] to-[#38BDF8]',
  },
  amber: {
    text: 'text-[#B45309]',
    bg: 'bg-[#D97706]/10',
    border: 'border-[#D97706]/35',
    dot: 'bg-[#D97706]',
    gradient: 'from-[#D97706] to-[#F59E0B]',
  },
}

export const StrategySection: React.FC = () => {
  const [activeId, setActiveId] = useState(PHASES[0].id)
  const active = PHASES.find((p) => p.id === activeId) ?? PHASES[0]
  const accent = accentClasses[active.accent]

  return (
    <section
      id="strategy"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-14 sm:px-6 lg:px-8">
        {/* Swiss Editorial Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-[#E2E8F0] pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
              02 / OUR STRATEGY
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]">
              Prove <span className="text-[#94A3B8]">→</span> Scale{' '}
              <span className="text-[#94A3B8]">→</span>{' '}
              <span className="text-[#059669]">Dominate</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
              Three phases, one continuous balance sheet. Each stage is sized to
              the risk actually being taken and to the capital available to it —
              and each one underwrites the next.
            </p>
          </div>
        </motion.div>

        {/* Visual Roadmap Rail */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          <div className="hidden items-center gap-2 lg:flex">
            {PHASES.map((phase, i) => {
              const a = accentClasses[phase.accent]
              const isActive = phase.id === activeId
              return (
                <React.Fragment key={phase.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(phase.id)}
                    aria-pressed={isActive}
                    className={`group flex flex-1 cursor-pointer flex-col gap-2 rounded-xl border bg-white p-4 text-left transition-all ${
                      isActive
                        ? `${a.border} shadow-sm`
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${a.text}`}
                      >
                        {phase.pillar}
                      </span>
                      <span className="font-mono text-[10px] text-[#94A3B8]">
                        {phase.phaseLabel.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-display text-base font-bold leading-tight text-[#0F172A]">
                      {phase.project}
                    </p>
                    <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[#475569]">
                      <span className="inline-flex items-center gap-1">
                        <CircleDollarSign className="h-3 w-3" />
                        {phase.capex}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {phase.timeline}
                      </span>
                    </div>
                    {/* Scale bar: visual CAPEX weight */}
                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${a.gradient}`}
                        style={{ width: `${[8, 40, 100][i]}%` }}
                      />
                    </div>
                  </button>
                  {i < PHASES.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 self-center text-[#CBD5E1]" />
                  )}
                </React.Fragment>
              )
            })}
          </div>

          {/* Mobile: selectable chips */}
          <div className="mobile-scroll-row -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
            {PHASES.map((phase) => {
              const a = accentClasses[phase.accent]
              const isActive = phase.id === activeId
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveId(phase.id)}
                  aria-pressed={isActive}
                  className={`flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-lg border px-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? `${a.border} ${a.bg} ${a.text}`
                      : 'border-[#E2E8F0] bg-white text-[#475569]'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  {phase.phaseLabel}: {phase.pillar}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Active Phase Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Column */}
              <div className="relative order-1 min-h-[220px] lg:order-2 lg:col-span-5">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B131E]/90 to-transparent p-4 pt-12">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                    {active.phaseLabel} • {active.pillar}
                  </p>
                  <p className="font-display text-lg font-bold text-white">
                    {active.capex} CAPEX
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="order-2 space-y-6 p-5 sm:p-7 lg:order-1 lg:col-span-7 lg:p-8">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${accent.bg} ${accent.text}`}
                    >
                      {active.phaseLabel} — {active.pillar}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#94A3B8]">
                      {active.timeline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                    {active.project}
                  </h3>
                  <p className={`text-sm font-semibold ${accent.text}`}>
                    {active.headline}
                  </p>
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {active.detail}
                  </p>
                </div>

                {/* Phase Metrics */}
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
                  {active.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-3">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-[#475569]">
                        {metric.label}
                      </p>
                      <p className="mt-1 font-display text-sm font-bold leading-tight text-[#0F172A]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Capabilities */}
                <ul className="space-y-2.5">
                  {active.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm leading-snug text-[#334155]"
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accent.bg}`}
                      >
                        <Check className={`h-2.5 w-2.5 ${accent.text}`} />
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* Phase Footer: Goal + Funding */}
                <div className="space-y-3 border-t border-[#E2E8F0] pt-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                        PHASE GOAL
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-snug text-[#0F172A]">
                        {active.goal}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                        CAPITAL SOURCES
                      </p>
                      <p className="mt-1.5 text-sm leading-snug text-[#475569]">
                        {active.funding}
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-[#475569]">
                    {active.capexNote}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Strategy Summary Table — desktop reference grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="hidden overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white lg:block"
        >
          <div className="grid grid-cols-12 gap-4 border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#475569]">
            <span className="col-span-1">Phase</span>
            <span className="col-span-4">Project</span>
            <span className="col-span-2">CAPEX</span>
            <span className="col-span-2">Timeline</span>
            <span className="col-span-3">Goal</span>
          </div>
          {PHASES.map((phase) => {
            const a = accentClasses[phase.accent]
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActiveId(phase.id)}
                className={`grid w-full cursor-pointer grid-cols-12 items-center gap-4 border-b border-[#E2E8F0] px-5 py-4 text-left transition-colors last:border-b-0 hover:bg-[#F8FAFC] ${
                  phase.id === activeId ? 'bg-[#059669]/[0.04]' : ''
                }`}
              >
                <span className="col-span-1 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  <span className="font-mono text-xs font-bold text-[#0F172A]">
                    {phase.phaseLabel.replace('Phase ', 'P')}
                  </span>
                </span>
                <span className="col-span-4 text-sm font-semibold text-[#0F172A]">
                  {phase.project}
                </span>
                <span className={`col-span-2 font-mono text-sm font-bold ${a.text}`}>
                  {phase.capex}
                </span>
                <span className="col-span-2 font-mono text-xs text-[#475569]">
                  {phase.timeline}
                </span>
                <span className="col-span-3 text-xs leading-snug text-[#475569]">
                  {phase.goal}
                </span>
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
