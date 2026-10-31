import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CircleDollarSign,
  FileText,
  Layers,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { RAISE } from '../data/companyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
} from '../lib/motion'
import { Button } from './ui/button'

interface InvestSectionProps {
  onOpenInvestor: (presetNote?: string) => void
}

export const InvestSection: React.FC<InvestSectionProps> = ({
  onOpenInvestor,
}) => {
  return (
    <section
      id="invest"
      className="relative overflow-hidden border-b border-slate-800 bg-[#0B131E] py-14 text-white sm:py-16 lg:py-28"
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
      <div
        className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-14 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-slate-800 pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#34D399]">
              07 / WHAT WE ARE RAISING NOW
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Two Tranches Between Here and FID
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Capital is being raised in sequence, each tranche tied to a
              verifiable deliverable. Mandate first, then the equity and debt
              that carry the Gwagwalada Hub into construction.
            </p>
          </div>
        </motion.div>

        {/* The Two Tranches */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6"
        >
          {/* Tranche 1 — Mandate */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col gap-5 rounded-2xl border border-[#059669]/40 bg-gradient-to-br from-[#059669]/15 to-transparent p-5 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#059669] text-white">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                    TRANCHE 01 — OPEN
                  </p>
                  <p className="font-display text-sm font-bold text-white">
                    {RAISE.mandate.title}
                  </p>
                </div>
              </div>
              <p className="font-display text-3xl font-bold leading-none text-white tabular-nums sm:text-4xl">
                {RAISE.mandate.amount}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold text-[#34D399]">
                {RAISE.mandate.scope}
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                {RAISE.mandate.detail}
              </p>
            </div>

            <Button
              className="mt-auto w-full sm:w-auto"
              onClick={() =>
                onOpenInvestor(
                  'Mandate Enquiry: $3M Owner Engineer (OE) Mandate — Gwagwalada Hub FEED + Permits + GSA'
                )
              }
            >
              <FileText className="h-4 w-4" />
              Discuss the $3M Mandate
            </Button>
          </motion.div>

          {/* Tranche 2 — Equity/Debt */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-[#7DD3FC]">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7DD3FC]">
                    TRANCHE 02 — NEXT
                  </p>
                  <p className="font-display text-sm font-bold text-white">
                    {RAISE.next.title}
                  </p>
                </div>
              </div>
              <p className="font-display text-3xl font-bold leading-none text-white tabular-nums sm:text-4xl">
                {RAISE.next.amount}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold text-[#7DD3FC]">
                {RAISE.next.scope}
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                {RAISE.next.detail}
              </p>
            </div>

            <Button
              variant="outlineDark"
              className="mt-auto w-full sm:w-auto"
              onClick={() =>
                onOpenInvestor(
                  'Investment Enquiry: $35M Equity / Debt to FID Q1 2027 — Gwagwalada Energy Hub'
                )
              }
            >
              <FileText className="h-4 w-4" />
              Request Data Room Access
            </Button>
          </motion.div>
        </motion.div>

        {/* Use of Funds + Capital Stack */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Use of Funds */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-7"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="h-4 w-4 text-[#34D399]" />
              <h3 className="font-display text-xl font-bold text-white">
                Use of Proceeds
              </h3>
            </div>

            <div className="space-y-4">
              {RAISE.uses.map((use) => (
                <motion.div
                  key={use.label}
                  variants={fadeUpVariant}
                  className="space-y-2.5 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-semibold text-white">
                      {use.label}
                    </p>
                    <p className="font-mono text-sm font-bold text-[#34D399] tabular-nums">
                      {use.percent}%
                    </p>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${use.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#059669] to-[#38BDF8]"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {use.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Capital Stack */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-[#34D399]" />
              <h3 className="font-display text-xl font-bold text-white">
                Capital Stack
              </h3>
            </div>

            <div className="space-y-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800">
              {RAISE.capitalStack.map((row) => (
                <div
                  key={row.source}
                  className="flex flex-col gap-0.5 bg-[#0E1726] p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <p className="font-mono text-xs font-bold text-white">
                    {row.source}
                  </p>
                  <p className="text-[11px] leading-snug text-slate-400 sm:text-right">
                    {row.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#D97706]/30 bg-[#D97706]/10 p-4">
              <p className="text-xs leading-relaxed text-slate-200">
                <strong className="text-white">Structure note:</strong> Phase 1
                capital is blended — concessional grant capital and development
                finance sit alongside commercial equity, reducing the private
                capital required to reach FID.
              </p>
            </div>

            <Button
              className="w-full"
              onClick={() =>
                onOpenInvestor(
                  'Investor Enquiry: Full Capital Structure & Data Room — Gwagwalada Energy Hub'
                )
              }
            >
              Request Investor Data Room
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
