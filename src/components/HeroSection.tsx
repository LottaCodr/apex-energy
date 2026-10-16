import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, TrendingUp } from 'lucide-react'
import { COMPANY_INFO, HERO_METRICS, RAISE } from '../data/companyData'
import {
  fadeUpVariant,
  scaleFadeVariant,
  staggerContainerVariant,
} from '../lib/motion'
import { Button } from './ui/button'

interface HeroSectionProps {
  onOpenInvestor: (presetNote?: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInvestor }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12">
          {/* Left 7 Columns: Positioning, Tagline & Investor Actions */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:col-span-7 lg:space-y-7"
          >
            <motion.div
              variants={fadeUpVariant}
              className="flex items-start gap-2.5 font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#059669] sm:items-center sm:text-xs sm:tracking-[0.14em]"
            >
              <span className="mt-1 h-2 w-2 shrink-0 bg-[#059669] sm:mt-0" />
              <span>
                100% NIGERIAN • GAS COMMERCIALIZATION • DECADE OF GAS
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-[#0F172A] min-[380px]:text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.05]"
            >
              From Pilot to{' '}
              <span className="text-[#059669]">World-Scale</span>: Monetizing
              Nigeria&apos;s Gas, Powering the World.
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="max-w-2xl text-[15px] leading-relaxed text-[#475569] sm:text-lg"
            >
              <strong className="text-[#0F172A]">{COMPANY_INFO.name}</strong> is
              a 100% Nigerian energy development company accelerating the
              Federal Government&apos;s{' '}
              <strong className="text-[#0F172A]">Decade of Gas</strong>{' '}
              Initiative. We develop phased gas projects starting with
              fast-to-market CNG and Mini-LNG, scaling to a World-Scale{' '}
              <strong className="text-[#0F172A]">12 MTPA LNG</strong> company.
            </motion.p>

            {/* Strategy Chain */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F172A] sm:text-xs"
            >
              <span className="rounded-md border border-[#059669]/30 bg-[#059669]/10 px-2.5 py-1 text-[#047857]">
                Prove
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[#94A3B8]" />
              <span className="rounded-md border border-[#0284C7]/30 bg-[#0284C7]/10 px-2.5 py-1 text-[#0369A1]">
                Scale
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[#94A3B8]" />
              <span className="rounded-md border border-[#D97706]/30 bg-[#D97706]/10 px-2.5 py-1 text-[#B45309]">
                Dominate
              </span>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                onClick={() =>
                  onOpenInvestor(
                    'Request: Investor Data Room Access — Gwagwalada Energy Hub'
                  )
                }
              >
                <FileText className="h-4 w-4" />
                Request Investor Data Room
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#strategy">
                  <TrendingUp className="h-4 w-4 text-[#059669]" />
                  View the Phased Strategy
                </a>
              </Button>
            </motion.div>

            {/* Live Raise Strip */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-[#059669] animate-pulse-glow" />
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                    CURRENTLY RAISING
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                    {RAISE.mandate.amount} OE Mandate{' '}
                    <span className="font-normal text-[#475569]">
                      + {RAISE.next.amount} Equity / Debt
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="#invest"
                className="inline-flex min-h-11 items-center gap-1.5 self-start rounded-lg px-3 font-mono text-xs font-semibold text-[#059669] transition-colors hover:bg-[#059669]/10 sm:self-auto"
              >
                THE INVESTMENT CASE
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right 5 Columns: Flagship Project Imagery */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/gwagwalada-site.jpg"
                  alt="ApexEnergy Gwagwalada Energy Hub: cryogenic LNG storage tanks, gas compression skids and CNG cascade trailers on the AKK pipeline corridor in the Federal Capital Territory"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-[#0B131E]/90 px-2.5 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse-glow" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Flagship — Phase 1
                  </span>
                </div>
              </div>
              <div className="space-y-2 border-t border-[#E2E8F0] p-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  GWAGWALADA ENERGY HUB • FCT
                </p>
                <p className="font-display text-lg font-bold leading-tight text-[#0F172A]">
                  5 MMSCFD CNG + 50 TPD Mini-LNG
                </p>
                <p className="text-xs leading-relaxed text-[#475569]">
                  Sited on the AKK pipeline corridor. First gas targeted in 18
                  months — and $27M per year of FX savings once operating.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benchmark Metrics Band */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 border-t border-[#E2E8F0] pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {HERO_METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeUpVariant}
              className="border-l-2 border-[#059669] pl-4"
            >
              <p className="font-display text-3xl font-bold leading-none tracking-tight text-[#0F172A] tabular-nums sm:text-4xl">
                {metric.value}
                <span className="ml-1 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#059669]">
                  {metric.unit}
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                {metric.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
