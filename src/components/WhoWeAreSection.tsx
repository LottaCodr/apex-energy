import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Target, Landmark, Fuel } from 'lucide-react'
import {
  COMPANY_INFO,
  IMPACT_FRAME,
  MISSION,
  VISION,
} from '../data/companyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  scaleFadeVariant,
} from '../lib/motion'

export const WhoWeAreSection: React.FC = () => {
  return (
    <section
      id="company"
      className="border-b border-[#E2E8F0] bg-white py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
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
              01 / WHO WE ARE
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              A 100% Nigerian Gas Development Company Built for the Decade of
              Gas
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
              We take Nigerian gas from molecule to monetization in staged,
              financeable steps — proving execution at pilot scale, scaling into
              regional LNG, and dominating with world-scale export capacity.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 7 Columns: Narrative + Mission/Vision */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 lg:col-span-7"
          >
            <motion.div variants={fadeUpVariant} className="space-y-5">
              <p className="text-base leading-relaxed text-[#334155] sm:text-lg">
                <strong className="text-[#0F172A]">{COMPANY_INFO.name}</strong>{' '}
                is a 100% Nigerian energy development company focused on
                accelerating the Federal Government&apos;s{' '}
                <strong className="text-[#0F172A]">
                  &ldquo;Decade of Gas&rdquo;
                </strong>{' '}
                Initiative. Nigeria flares and re-injects gas that should be
                powering industry, displacing imported diesel and earning hard
                currency. We exist to close that gap.
              </p>
              <p className="text-base leading-relaxed text-[#475569] sm:text-lg">
                Our approach is deliberately sequential. We start with
                fast-to-market CNG and Mini-LNG assets that reach first gas in
                18 months, then reinvest demonstrated operating capability into
                progressively larger liquefaction capacity — ultimately a
                World-Scale <strong className="text-[#0F172A]">12 MTPA</strong>{' '}
                LNG business exporting to Europe and Asia.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#059669]/10 text-[#059669]">
                  <Target className="h-5 w-5" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  OUR MISSION
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#0F172A]">
                  {MISSION}
                </p>
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col gap-3 rounded-2xl border border-[#0B131E] bg-[#0B131E] p-5 text-white sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10B981]/15 text-[#34D399]">
                  <Compass className="h-5 w-5" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                  OUR VISION
                </p>
                <p className="text-sm font-medium leading-relaxed text-white">
                  {VISION}
                </p>
              </motion.div>
            </div>

            {/* Decade of Gas Alignment Frame */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <Landmark className="h-4 w-4 text-[#0284C7]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                  DECADE OF GAS — WHAT WE DELIVER
                </p>
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {IMPACT_FRAME.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-[#475569]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#059669]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right 5 Columns: Execution Imagery + Positioning Ledger */}
          <motion.div
            variants={scaleFadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-[#E2E8F0]">
                <img
                  src="/images/engineers-scada.jpg"
                  alt="ApexEnergy Nigerian engineers in PPE inspecting a stainless steel gas metering skid on site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-4 sm:p-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  EXECUTION CAPABILITY
                </p>
                <p className="text-sm leading-relaxed text-[#475569]">
                  Engineers and a commercial team with NNPC, international oil
                  company and project finance experience — the same team that
                  delivers Phase 1 is the team that scales to Phase 3.
                </p>
              </div>
            </div>

            {/* Positioning Ledger */}
            <div className="space-y-px overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E2E8F0]">
              {[
                { icon: Fuel, label: 'Modelled Scope', value: 'CNG • Mini-LNG • World-Scale LNG' },
                { icon: Landmark, label: 'Incorporation', value: '100% Nigerian Owned' },
                { icon: Compass, label: 'Corridor', value: 'AKK Pipeline — Gwagwalada, FCT' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 bg-white p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                      {row.label}
                    </span>
                  </div>
                  <span className="text-right font-mono text-[11px] font-semibold text-[#0F172A]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
