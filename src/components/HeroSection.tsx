import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calculator,
  Check,
} from 'lucide-react'
import { COMPANY_INFO, TRUST_BENCHMARKS } from '../data/energyData'
import {
  fadeUpVariant,
  scaleFadeVariant,
  staggerContainerVariant,
  EASE_OUT_EXPO,
} from '../lib/motion'
import { Button } from './ui/button'

interface HeroSectionProps {
  onOpenQuote: (presetNote?: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12">
          {/* Left 7 Columns: Staggered Editorial Typography & Conversion Actions */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:col-span-7 lg:space-y-7"
          >
            {/* Swiss Monospace Eyebrow */}
            <motion.div
              variants={fadeUpVariant}
              className="flex items-start gap-2.5 font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#059669] sm:items-center sm:text-xs sm:tracking-[0.14em]"
            >
              <span className="mt-1 h-2 w-2 shrink-0 bg-[#059669] sm:mt-0" />
              <span>MIDSTREAM &amp; DOWNSTREAM GAS INFRASTRUCTURE • NIGERIA</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-[#0F172A] min-[380px]:text-4xl sm:text-5xl lg:text-[58px] lg:leading-[1.05]"
            >
              Cut Industrial &amp; Fleet Fuel Costs by{' '}
              <span className="text-[#059669]">58%</span> with Clean{' '}
              <span className="text-[#059669]">CNG</span> &amp;{' '}
              <span className="text-[#0284C7]">LNG</span>.
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="max-w-2xl text-[15px] leading-relaxed text-[#475569] sm:text-lg"
            >
              <strong>{COMPANY_INFO.name}</strong> engineers and operates
              250-bar Compressed Natural Gas cascades, -162°C Cryogenic LNG
              storage, turnkey Virtual Pipeline skids, and commercial fleet
              refueling systems for manufacturers, captive power plants,
              estates, and logistics operators across Nigeria.
            </motion.p>

            {/* Primary Conversion Actions */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
            >
              <Button
                size="lg"
                onClick={() =>
                  onOpenQuote(
                    'Hero CTA: Request Free Site Energy Audit & Gas Supply Proposal'
                  )
                }
              >
                <span className="sm:hidden">Free Energy Audit</span>
                <span className="hidden sm:inline">Schedule Free Energy Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button variant="dark" size="lg" asChild>
                <a href="#calculator">
                  <Calculator className="h-4 w-4 text-[#34D399]" />
                  <span className="sm:hidden">Calculate Savings</span>
                  <span className="hidden sm:inline">Calculate Your Savings</span>
                </a>
              </Button>

              {/* <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-5 text-sm font-semibold text-[#0F172A] hover:border-[#059669] transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-[#059669]" />
                <span className="font-mono tabular-nums">
                  {COMPANY_INFO.phoneDisplay}
                </span>
              </a> */}
            </motion.div>

            {/* Clean Architectural Verification Row */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3 border-t border-[#E2E8F0] text-xs font-medium text-[#475569]"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#059669] shrink-0" />
                <span>Zero-CapEx Skid Options (BOOT)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#059669] shrink-0" />
                <span>Nationwide Virtual Pipeline Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#059669] shrink-0" />
                <span>NMDPRA &amp; SON ISO 11439 Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 5 Columns: Clean Architectural Visual Frame */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#0B131E] shadow-xl">
              {/* Top Minimal Telemetry Header */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 font-mono text-[10px] text-slate-300 sm:px-5 sm:py-3.5 sm:text-[11px]">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#10B981]" />
                  <span className="truncate font-semibold uppercase tracking-wider text-white">
                    <span className="sm:hidden">CNG / LNG SYSTEM</span>
                    <span className="hidden sm:inline">CRYOGENIC LNG &amp; CNG COMPRESSION TRAIN</span>
                  </span>
                </div>
                <span className="shrink-0 text-[#34D399]">24/7 SCADA</span>
              </div>

              {/* Facility Photograph with Subtle Hover Scale */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  src="/images/hero-facility.jpg"
                  alt="Apex Energy Resources Limited Cryogenic LNG Storage and High-Pressure CNG Compression Facility"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Structured Bottom Ledger with 1px Hairline Dividers */}
              <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 bg-[#0B131E] text-white">
                <div className="min-w-0 p-3 sm:p-4">
                  <p className="font-mono text-[9px] uppercase leading-tight tracking-wider text-slate-400 sm:text-[10px]">
                    CNG PRESSURE
                  </p>
                  <p className="mt-1 whitespace-nowrap font-mono text-sm font-bold text-[#34D399] tabular-nums sm:text-base">
                    250 Bar
                  </p>
                </div>
                <div className="min-w-0 p-3 sm:p-4">
                  <p className="font-mono text-[9px] uppercase leading-tight tracking-wider text-slate-400 sm:text-[10px]">
                    LNG CRYO STATE
                  </p>
                  <p className="mt-1 whitespace-nowrap font-mono text-sm font-bold text-[#7DD3FC] tabular-nums sm:text-base">
                    -162°C
                  </p>
                </div>
                <div className="min-w-0 p-3 sm:p-4">
                  <p className="font-mono text-[9px] uppercase leading-tight tracking-wider text-slate-400 sm:text-[10px]">
                    BENCHMARK
                  </p>
                  <p className="mt-1 whitespace-nowrap font-mono text-sm font-bold text-white tabular-nums sm:text-base">
                    ₦320/SCM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Exposed Hairline Swiss-Grid Key Metrics Ledger */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          aria-label="Apex Energy performance benchmarks"
          tabIndex={0}
          className="mobile-scroll-row flex snap-x snap-mandatory divide-x divide-[#E2E8F0] overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white pb-1 sm:grid sm:grid-cols-2 sm:divide-x-0 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:divide-x"
        >
          {TRUST_BENCHMARKS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUpVariant}
              className="min-w-[78vw] snap-start p-6 sm:min-w-0 sm:p-7"
            >
              <p className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] tabular-nums">
                {item.metric}
              </p>
              <p className="mt-2 font-display text-sm font-bold text-[#0F172A]">
                {item.label}
              </p>
              <p className="mt-0.5 text-xs text-[#475569]">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
