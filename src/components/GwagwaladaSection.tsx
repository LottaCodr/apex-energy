import React from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CircleDot,
  Clock,
  Factory,
  MapPin,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import {
  GWAGWALADA,
  GWAGWALADA_IMPACT,
  GWAGWALADA_MILESTONES,
} from '../data/companyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
} from '../lib/motion'

const impactAccent = {
  emerald: { text: 'text-[#047857]', bar: 'bg-[#059669]', bg: 'bg-[#059669]/10' },
  cryo: { text: 'text-[#0369A1]', bar: 'bg-[#0284C7]', bg: 'bg-[#0284C7]/10' },
  amber: { text: 'text-[#B45309]', bar: 'bg-[#D97706]', bg: 'bg-[#D97706]/10' },
}

const milestoneStyles = {
  done: {
    icon: BadgeCheck,
    ring: 'bg-[#059669] text-white',
    chip: 'bg-[#059669]/10 text-[#047857] border-[#059669]/30',
    label: 'text-[#0F172A]',
  },
  active: {
    icon: Sparkles,
    ring: 'bg-[#D97706] text-white',
    chip: 'bg-[#D97706]/10 text-[#B45309] border-[#D97706]/30',
    label: 'text-[#0F172A]',
  },
  pending: {
    icon: CircleDot,
    ring: 'bg-[#F1F5F9] text-[#94A3B8] border border-[#E2E8F0]',
    chip: 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]',
    label: 'text-[#475569]',
  },
}

export const GwagwaladaSection: React.FC = () => {
  return (
    <section
      id="gwagwalada"
      className="relative overflow-hidden border-b border-slate-800 bg-[#0B131E] py-14 text-white sm:py-16 lg:py-28"
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-60" />

      <div className="relative mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-slate-800 pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#34D399]">
                03 / CURRENT FLAGSHIP
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#D97706]/40 bg-[#D97706]/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#FBBF24]">
                <Sparkles className="h-3 w-3" />
                Presidential Showcase Project
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
              {GWAGWALADA.name}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Phase 1 flagship: a modular mother station monetizing first
              molecules on the AKK corridor while proving the execution platform
              for national LNG scale.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
                <span className="text-xs leading-snug text-slate-300 sm:text-sm">
                  {GWAGWALADA.location}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Factory className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" />
                <span className="font-mono text-xs leading-snug text-slate-300 sm:text-sm">
                  {GWAGWALADA.capacity}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FBBF24]" />
                <span className="text-xs leading-snug text-slate-400">
                  {GWAGWALADA.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Metric Band */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {GWAGWALADA_IMPACT.map((item) => {
            const a = impactAccent[item.accent as keyof typeof impactAccent]
            return (
              <motion.div
                key={item.label}
                variants={fadeUpVariant}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-slate-700"
              >
                <span className={`h-1 w-10 rounded-full ${a.bar}`} />
                <div>
                  <p className="font-display text-3xl font-bold leading-none tracking-tight text-white tabular-nums sm:text-4xl">
                    {item.value}
                  </p>
                  <p className={`mt-2 text-sm font-semibold ${a.text}`}>
                    {item.label}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.sub}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Milestone Tracker + Imagery */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Milestones */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-7"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <h3 className="font-display text-xl font-bold text-white">
                Execution Milestones
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                STATUS
              </span>
            </div>

            <ol className="relative space-y-5">
              {GWAGWALADA_MILESTONES.map((milestone, i) => {
                const s = milestoneStyles[milestone.state]
                const Icon = s.icon
                return (
                  <motion.li
                    key={milestone.title}
                    variants={fadeUpVariant}
                    className="relative flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${s.ring}`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {i < GWAGWALADA_MILESTONES.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-slate-800" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1.5 pb-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <p className={`font-display text-base font-bold ${s.label}`}>
                          {milestone.title}
                        </p>
                        <span
                          className={`rounded-md border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] ${s.chip}`}
                        >
                          {milestone.status}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                        {milestone.detail}
                      </p>
                    </div>
                  </motion.li>
                )
              })}
            </ol>
          </motion.div>

          {/* Corridor Imagery + Note */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-800">
                <img
                  src="/images/akk-pipeline-corridor.jpg"
                  alt="Aerial view of a large-diameter natural gas transmission pipeline under construction through Nigerian savannah, representing the AKK pipeline corridor"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2.5 p-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                  FEEDSTOCK SECURITY
                </p>
                <p className="font-display text-base font-bold text-white">
                  Sited on the AKK Transmission Corridor
                </p>
                <p className="text-xs leading-relaxed text-slate-400">
                  The Ajaokuta–Kaduna–Kano corridor gives the hub direct access
                  to transmission-grade dry gas. No drilling, no upstream
                  acquisition — Phase 1 capital goes into monetization
                  infrastructure, not exploration risk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#059669]/30 bg-[#059669]/10 p-4">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
              <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                <strong className="text-white">
                  18 months from mandate close to first gas.
                </strong>{' '}
                Gwagwalada converts policy alignment into operating cashflow
                while the 12 MTPA ambition is still being structured.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
