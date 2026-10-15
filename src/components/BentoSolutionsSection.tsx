import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Flame,
  Gauge,
  ShieldCheck,
  Snowflake,
  Truck,
} from 'lucide-react'
import {
  HOW_IT_WORKS_STEPS,
  LANDING_SOLUTION_TABS,
} from '../data/energyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  EASE_OUT_EXPO,
} from '../lib/motion'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface BentoSolutionsSectionProps {
  onOpenQuote: (presetNote?: string) => void
}

export const BentoSolutionsSection: React.FC<BentoSolutionsSectionProps> = ({
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<string>('cng')

  return (
    <section
      id="solutions"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        {/* 01 / Infrastructure Solutions Header */}
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
                01 / CORE GAS INFRASTRUCTURE
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
                Engineered for Baseload Power, Industrial Heat &amp; Fleet Mobility
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                From multi-megawatt manufacturing plants to nationwide haulage
                fleets, Apex Energy delivers compressed and liquefied natural
                gas wherever your operations demand reliable, low-cost power.
              </p>
            </div>
          </motion.div>

          {/* Radix UI Tabs: Visual + Architectural Split View */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList
              aria-label="Gas infrastructure solutions"
              className="mobile-scroll-row flex h-auto w-full snap-x snap-mandatory justify-start gap-1.5 overflow-x-auto rounded-xl bg-[#F1F5F9] p-1.5 pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-1.5"
            >
              <TabsTrigger value="cng" className="min-w-[15.5rem] snap-start px-3 py-3 lg:min-w-0">
                <Flame className="h-4 w-4 text-[#059669]" />
                <span>Industrial CNG (250 Bar)</span>
              </TabsTrigger>
              <TabsTrigger value="lng" className="min-w-[15.5rem] snap-start px-3 py-3 lg:min-w-0">
                <Snowflake className="h-4 w-4 text-[#0284C7]" />
                <span>Cryogenic LNG (-162°C)</span>
              </TabsTrigger>
              <TabsTrigger value="virtual-pipeline" className="min-w-[15.5rem] snap-start px-3 py-3 lg:min-w-0">
                <Gauge className="h-4 w-4 text-[#059669]" />
                <span>Virtual Pipeline PRMS</span>
              </TabsTrigger>
              <TabsTrigger value="autocng" className="min-w-[15.5rem] snap-start px-3 py-3 lg:min-w-0">
                <Truck className="h-4 w-4 text-[#D97706]" />
                <span>AutoCNG Fleet Mobility</span>
              </TabsTrigger>
            </TabsList>

            {LANDING_SOLUTION_TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                  className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs"
                >
                  {/* Left 6 Columns: Concise Editorial Narrative & Verification Grid */}
                  <div className="flex flex-col justify-between space-y-7 p-5 sm:p-8 lg:col-span-6 lg:space-y-8 lg:p-10">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-4 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between">
                        <div className="flex items-start gap-2.5 font-mono text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#475569] sm:text-xs sm:tracking-[0.14em]">
                          <span className="text-[#059669]">{tab.index}</span>
                          <span>/</span>
                          <span>{tab.category}</span>
                        </div>
                        <span className="shrink-0 font-mono text-2xl font-bold text-[#059669] tabular-nums">
                          {tab.statValue}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                        {tab.title}
                      </h3>

                      <p className="text-base font-medium text-[#0F172A]/90">
                        {tab.tagline}
                      </p>

                      <p className="text-sm text-[#475569] leading-relaxed">
                        {tab.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-[#E2E8F0] pt-6">
                      {tab.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs font-medium text-[#0F172A] leading-relaxed"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#059669] mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <Button
                        variant={tab.accent === 'cryo' ? 'cryo' : 'default'}
                        onClick={() =>
                          onOpenQuote(`Solution Inquiry: ${tab.title}`)
                        }
                      >
                        <span className="sm:hidden">Request Proposal</span>
                        <span className="hidden sm:inline">Request {tab.title} Proposal</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="#calculator">Run ROI Calculator</a>
                      </Button>
                    </div>
                  </div>

                  {/* Right 6 Columns: High-Impact Facility Photography + Dark Spec Ledger */}
                  <div className="lg:col-span-6 bg-[#0B131E] text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
                    {/* Dedicated System Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-800">
                      <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                        src={tab.image}
                        alt={tab.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E] via-transparent to-transparent opacity-75" />
                      <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-4">
                        <div className="min-w-0">
                          <p className="line-clamp-2 font-mono text-[9px] uppercase leading-snug tracking-[0.12em] text-[#34D399] sm:text-[10px] sm:tracking-[0.14em]">
                            {tab.statLabel}
                          </p>
                          <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">
                            {tab.statValue}
                          </p>
                        </div>
                        <span className="hidden shrink-0 font-mono text-[11px] text-[#7DD3FC] min-[390px]:inline">
                          FIELD DEPLOYED
                        </span>
                      </div>
                    </div>

                    {/* 2x2 Architectural Spec Hairline Grid */}
                    <div className="space-y-5 p-5 sm:p-8">
                      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 min-[380px]:grid-cols-2">
                        {tab.specs.map((spec) => (
                          <div key={spec.label} className="bg-[#0B131E] p-4">
                            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                              {spec.label}
                            </p>
                            <p className="mt-1.5 font-mono text-sm font-bold text-[#7DD3FC] tabular-nums">
                              {spec.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-300">
                        <ShieldCheck className="h-4 w-4 text-[#10B981] shrink-0" />
                        <span>
                          Monitored 24/7 via satellite &amp; 4G SCADA telemetry
                          with automatic manifold switchover.
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* 02 / Visual 3-Phase Deployment Architecture */}
        <div id="how-it-works" className="space-y-8 sm:space-y-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-end border-b border-[#E2E8F0] pb-8"
          >
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0284C7]">
                02 / DEPLOYMENT ARCHITECTURE
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                From Diesel Dependency to Clean Gas in Three Phases
              </h3>
            </div>
            <div className="flex lg:col-span-5 lg:justify-end [&>button]:w-full sm:[&>button]:w-auto">
              <Button
                onClick={() =>
                  onOpenQuote('Deployment Process: Book Phase 1 Site Energy Audit')
                }
              >
                <span className="sm:hidden">Book Site Audit</span>
                <span className="hidden sm:inline">Schedule Phase 1 Site Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* 3 Visual Phase Cards with Photography */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            aria-label="Three-phase deployment process"
            tabIndex={0}
            className="mobile-scroll-row flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-6 lg:grid lg:grid-cols-12 lg:overflow-visible lg:pb-0"
          >
            {HOW_IT_WORKS_STEPS.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpVariant}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="flex min-w-[84vw] max-w-[22rem] snap-start flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-shadow hover:shadow-md sm:min-w-[22rem] lg:col-span-4 lg:min-w-0 lg:max-w-none"
              >
                {/* Top Phase Photography */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2E8F0]">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B131E]/90 px-2.5 py-1 font-mono text-xs font-bold text-[#34D399]">
                    {item.step}
                  </div>
                </div>

                {/* Concise Step Narrative */}
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                      {item.meta}
                    </p>
                    <h4 className="font-display text-xl font-bold text-[#0F172A]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
