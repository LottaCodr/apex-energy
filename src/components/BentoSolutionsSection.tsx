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
      className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 01 / Infrastructure Solutions Header */}
        <div className="space-y-10">
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
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1.5 bg-[#F1F5F9] p-1.5 rounded-xl">
              <TabsTrigger value="cng" className="py-3">
                <Flame className="h-4 w-4 text-[#059669]" />
                <span>Industrial CNG (250 Bar)</span>
              </TabsTrigger>
              <TabsTrigger value="lng" className="py-3">
                <Snowflake className="h-4 w-4 text-[#0284C7]" />
                <span>Cryogenic LNG (-162°C)</span>
              </TabsTrigger>
              <TabsTrigger value="virtual-pipeline" className="py-3">
                <Gauge className="h-4 w-4 text-[#059669]" />
                <span>Virtual Pipeline PRMS</span>
              </TabsTrigger>
              <TabsTrigger value="autocng" className="py-3">
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
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]">
                          <span className="text-[#059669]">{tab.index}</span>
                          <span>/</span>
                          <span>{tab.category}</span>
                        </div>
                        <span className="font-mono text-2xl font-bold text-[#059669] tabular-nums">
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

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        variant={tab.accent === 'cryo' ? 'cryo' : 'default'}
                        onClick={() =>
                          onOpenQuote(`Solution Inquiry: ${tab.title}`)
                        }
                      >
                        <span>Request {tab.title} Proposal</span>
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
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E] via-transparent to-transparent opacity-75" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#34D399]">
                            {tab.statLabel}
                          </p>
                          <p className="font-mono text-3xl font-bold text-white tabular-nums">
                            {tab.statValue}
                          </p>
                        </div>
                        <span className="font-mono text-[11px] text-[#7DD3FC]">
                          FIELD DEPLOYED
                        </span>
                      </div>
                    </div>

                    {/* 2x2 Architectural Spec Hairline Grid */}
                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="grid grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-xl overflow-hidden">
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
        <div id="how-it-works" className="space-y-10">
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
            <div className="lg:col-span-5 flex lg:justify-end">
              <Button
                onClick={() =>
                  onOpenQuote('Deployment Process: Book Phase 1 Site Energy Audit')
                }
              >
                <span>Schedule Phase 1 Site Audit</span>
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
            className="grid grid-cols-1 gap-6 lg:grid-cols-12"
          >
            {HOW_IT_WORKS_STEPS.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpVariant}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="lg:col-span-4 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-shadow hover:shadow-md"
              >
                {/* Top Phase Photography */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2E8F0]">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    src={item.image}
                    alt={item.imageAlt}
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
