import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Quote,
} from 'lucide-react'
import {
  CLIENT_TESTIMONIALS,
  COMPANY_INFO,
  NATIONAL_CORRIDORS,
} from '../data/energyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  EASE_OUT_EXPO,
} from '../lib/motion'
import { Button } from './ui/button'

interface AbujaCorridorSectionProps {
  onOpenQuote: (presetNote?: string) => void
}

export const AbujaCorridorSection: React.FC<AbujaCorridorSectionProps> = ({
  onOpenQuote,
}) => {
  return (
    <section
      id="network"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        {/* 04 / Nationwide Supply Corridors */}
        <div className="space-y-8 sm:space-y-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-end border-b border-[#E2E8F0] pb-8"
          >
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
                04 / NATIONAL SUPPLY NETWORK
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Nationwide Gas Distribution &amp; Virtual Pipeline Corridors
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Headquartered in Abuja with compression, liquefaction, and
                dispatch infrastructure spanning Nigeria’s major industrial and
                logistics corridors.
              </p>
            </div>
          </motion.div>

          {/* Visual Corridor Showcase + 4-Zone Hairline Ledger */}
          <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
            {/* Dual Photography Split Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] border-b border-[#E2E8F0]">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0B131E]">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  src="/images/cryo-lng-plant.jpg"
                  alt="Apex Energy Cryogenic LNG Regasification Silos and Road Tanker"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3 text-white sm:inset-x-5 sm:bottom-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7DD3FC]">
                      LONG-HAUL BULK CORRIDORS
                    </p>
                    <p className="font-display text-base font-bold leading-snug sm:text-lg">
                      -162°C Cryogenic LNG Tanker Fleet
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-xs font-bold text-[#34D399] tabular-nums min-[390px]:inline">
                    26,500 SCM / Load
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-[#0B131E]">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  src="/images/virtual-pipeline.jpg"
                  alt="Apex Energy 250-Bar CNG Tube Cascade Trailer and PRMS Skid"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3 text-white sm:inset-x-5 sm:bottom-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#34D399]">
                      REGIONAL INDUSTRIAL CLUSTERS
                    </p>
                    <p className="font-display text-base font-bold leading-snug sm:text-lg">
                      250-Bar Mobile CNG Cascade Skids
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-xs font-bold text-[#7DD3FC] tabular-nums min-[390px]:inline">
                    8,500 SCM / Skid
                  </span>
                </div>
              </div>
            </div>

            {/* 4-Column Exposed Hairline Grid for National Corridors */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              aria-label="National gas supply corridors"
              tabIndex={0}
              className="mobile-scroll-row flex snap-x snap-mandatory divide-x divide-[#E2E8F0] overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:divide-x lg:overflow-visible lg:pb-0"
            >
              {NATIONAL_CORRIDORS.map((corridor, idx) => (
                <motion.div
                  key={corridor.region}
                  variants={fadeUpVariant}
                  className="flex min-w-[82vw] max-w-[22rem] snap-start flex-col justify-between space-y-5 p-6 transition-colors hover:bg-[#F8FAFC]/60 sm:min-w-[21rem] sm:p-7 lg:min-w-0 lg:max-w-none"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between font-mono text-xs text-[#475569]">
                      <span>ZONE 0{idx + 1}</span>
                      <span className="text-[#059669] font-semibold">ACTIVE</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0F172A]">
                      {corridor.region}
                    </h3>
                    <p className="font-mono text-xs font-medium text-[#0284C7]">
                      {corridor.hubs}
                    </p>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {corridor.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] flex items-baseline justify-between font-mono text-xs">
                    <span className="text-[#475569]">Dispatch Capacity</span>
                    <span className="font-bold text-[#0F172A] tabular-nums">
                      {corridor.capacity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 05 / Proven Client Outcomes with Visual Case Study Photography */}
        <div className="space-y-8 sm:space-y-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end border-b border-[#E2E8F0] pb-8"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0284C7]">
                05 / INDUSTRIAL &amp; FLEET OUTCOMES
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Measured Impact Across Nigerian Enterprises
              </h3>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 text-xs font-mono font-semibold text-[#0F172A] hover:border-[#059669] transition-colors tabular-nums"
              >
                <Phone className="h-4 w-4 text-[#059669]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <Button
                onClick={() =>
                  onOpenQuote('Network Section: Request Supply & Site Assessment')
                }
              >
                <span>Request Site Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            aria-label="Client case studies"
            tabIndex={0}
            className="mobile-scroll-row flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-6 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0"
          >
            {CLIENT_TESTIMONIALS.map((item) => (
              <motion.div
                key={item.author}
                variants={fadeUpVariant}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="flex min-w-[86vw] max-w-[34rem] snap-start flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-shadow hover:shadow-md sm:min-w-[31rem] lg:min-w-0 lg:max-w-none"
              >
                {/* Visual Case Study Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E2E8F0]">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E]/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-3 flex flex-col items-start gap-1 text-white sm:inset-x-5 sm:bottom-3.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200">
                      {item.caseTag}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#34D399] tabular-nums">
                      {item.metric}
                    </span>
                  </div>
                </div>

                {/* Quote Body */}
                <div className="flex flex-1 flex-col justify-between space-y-6 p-5 sm:p-8">
                  <div className="space-y-3">
                    <Quote className="h-5 w-5 text-[#059669]" />
                    <p className="text-base text-[#0F172A] leading-relaxed font-medium">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="font-display text-sm font-bold text-[#0F172A]">
                      {item.author}
                    </p>
                    <p className="text-xs text-[#475569]">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
