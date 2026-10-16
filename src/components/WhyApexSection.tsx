import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Landmark,
  Wallet,
  Users,
  Flag,
  type LucideIcon,
} from 'lucide-react'
import { WHY_APEX } from '../data/companyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
} from '../lib/motion'

const ICONS: Record<string, LucideIcon> = {
  speed: Zap,
  alignment: Landmark,
  bankable: Wallet,
  team: Users,
  local: Flag,
}

export const WhyApexSection: React.FC = () => {
  return (
    <section
      id="why"
      className="border-b border-[#E2E8F0] bg-white py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-14 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-[#E2E8F0] pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
              04 / WHY APEXENERGY WINS
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Five Structural Advantages, Not Five Talking Points
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
              Each advantage removes a specific category of risk an investor
              would otherwise have to price: schedule risk, policy risk,
              financing risk, execution risk and jurisdiction risk.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Advantage List */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-px overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E2E8F0] lg:col-span-7"
          >
            {WHY_APEX.map((item) => {
              const Icon = ICONS[item.icon] ?? Zap
              return (
                <motion.div
                  key={item.index}
                  variants={fadeUpVariant}
                  className="group flex flex-col gap-4 bg-white p-5 transition-colors hover:bg-[#F8FAFC] sm:flex-row sm:items-start sm:gap-5 sm:p-6"
                >
                  <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669] transition-colors group-hover:bg-[#059669] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-[0.1em] text-[#94A3B8]">
                      {item.index}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-bold text-[#0F172A]">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-baseline gap-1.5">
                        <span className="font-mono text-sm font-bold text-[#059669] tabular-nums">
                          {item.stat}
                        </span>
                        <span className="text-[11px] leading-none text-[#475569]">
                          {item.statLabel}
                        </span>
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#475569]">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Capability Imagery */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-[#E2E8F0]">
                <img
                  src="/images/hero-facility.jpg"
                  alt="CNG tube cascade trailers filling at a mother station beside cryogenic LNG storage tanks"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  MODULAR, REPLICABLE, FAST
                </p>
                <p className="text-sm leading-relaxed text-[#475569]">
                  Skid-mounted compression and liquefaction modules mean Phase 1
                  is assembled and commissioned in months, not years — and the
                  same architecture is reused and scaled in Phase 2.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0B131E] p-5 text-white sm:p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                RISK REMOVED BY DESIGN
              </p>
              <dl className="mt-4 space-y-3">
                {[
                  ['Schedule risk', 'First gas in 18 months'],
                  ['Policy risk', 'Presidential Showcase alignment'],
                  ['Financing risk', 'Phased, tranche-by-tranche capital'],
                  ['Execution risk', 'NNPC / IOC engineering bench'],
                  ['Jurisdiction risk', '100% Nigerian, NCDMB compliant'],
                ].map(([risk, answer]) => (
                  <div
                    key={risk}
                    className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs text-slate-400">{risk}</dt>
                    <dd className="text-right text-xs font-semibold text-white">
                      {answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
