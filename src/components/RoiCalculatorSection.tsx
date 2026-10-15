import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Factory,
  Flame,
  Leaf,
  Snowflake,
  TrendingDown,
  Truck,
  Zap,
} from 'lucide-react'
import { formatNaira, formatNumber } from '../lib/utils'
import { fadeUpVariant, EASE_OUT_EXPO } from '../lib/motion'
import { Button } from './ui/button'
import { Slider } from './ui/slider'
import { Switch } from './ui/switch'

interface RoiCalculatorSectionProps {
  onOpenQuote: (presetNote?: string) => void
}

type SectorKey = 'captive-power' | 'fleet-haulage' | 'manufacturing' | 'commercial-estate'

const SECTOR_PRESETS: Record<
  SectorKey,
  {
    label: string
    defaultLitres: number
    description: string
    icon: React.FC<{ className?: string }>
  }
> = {
  'captive-power': {
    label: 'Industrial Captive Power (MW)',
    defaultLitres: 65000,
    description: '24/7 factory & industrial park power generation (1 MW to 25 MW)',
    icon: Zap,
  },
  'fleet-haulage': {
    label: 'Haulage & Transit Fleet',
    defaultLitres: 40000,
    description: 'Heavy-duty diesel trucks, tankers & inter-state commuter buses',
    icon: Truck,
  },
  manufacturing: {
    label: 'Process Boilers & Kilns',
    defaultLitres: 110000,
    description: 'Food processing, bottling, pharmaceuticals, cement & ceramics',
    icon: Factory,
  },
  'commercial-estate': {
    label: 'Commercial Complex / Estate',
    defaultLitres: 20000,
    description: 'Residential estates, hospitals, hotels & corporate complexes',
    icon: Building2,
  },
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  onOpenQuote,
}) => {
  const [sector, setSector] = useState<SectorKey>('captive-power')
  const [monthlyDieselLitres, setMonthlyDieselLitres] = useState<number>(65000)
  const [dieselPricePerLitre, setDieselPricePerLitre] = useState<number>(1650)
  const [useLngBulk, setUseLngBulk] = useState<boolean>(false)

  const gasPricePerScm = useLngBulk ? 315 : 350

  const handleSectorSelect = (key: SectorKey) => {
    setSector(key)
    setMonthlyDieselLitres(SECTOR_PRESETS[key].defaultLitres)
    if (SECTOR_PRESETS[key].defaultLitres >= 90000) {
      setUseLngBulk(true)
    } else {
      setUseLngBulk(false)
    }
  }

  const metrics = useMemo(() => {
    const equivalentScmMonthly = Math.round(monthlyDieselLitres * 0.97)
    const currentMonthlyDieselCost = monthlyDieselLitres * dieselPricePerLitre
    const projectedMonthlyGasCost = equivalentScmMonthly * gasPricePerScm

    const monthlySavings = Math.max(
      0,
      currentMonthlyDieselCost - projectedMonthlyGasCost
    )
    const annualSavings = monthlySavings * 12
    const savingsPercent =
      currentMonthlyDieselCost > 0
        ? Math.round((monthlySavings / currentMonthlyDieselCost) * 100)
        : 0

    const annualDieselCo2Tonnes = (monthlyDieselLitres * 12 * 2.68) / 1000
    const annualGasCo2Tonnes = (equivalentScmMonthly * 12 * 1.92) / 1000
    const annualCo2SavedTonnes = Math.max(
      0,
      Math.round(annualDieselCo2Tonnes - annualGasCo2Tonnes)
    )

    const paybackMonths = monthlySavings > 0 ? (useLngBulk ? 8.5 : 6.5) : 0

    return {
      equivalentScmMonthly,
      currentMonthlyDieselCost,
      projectedMonthlyGasCost,
      monthlySavings,
      annualSavings,
      savingsPercent,
      annualCo2SavedTonnes,
      paybackMonths,
    }
  }, [monthlyDieselLitres, dieselPricePerLitre, gasPricePerScm, useLngBulk])

  const gasBarWidthPercent = Math.max(
    18,
    Math.min(100, 100 - metrics.savingsPercent)
  )

  return (
    <section
      id="calculator"
      className="border-b border-slate-800 bg-[#0B131E] py-14 text-[#F8FAFC] sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-10 px-4 sm:space-y-12 sm:px-6 lg:px-8">
        {/* Swiss Editorial Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-end border-b border-slate-800 pb-8"
        >
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#34D399]">
              03 / ECONOMIC &amp; CARBON SIMULATOR
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Quantify Your Annual Naira &amp; Emission Savings
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Model your facility or fleet’s transition from Automotive Gas Oil
              (Diesel) to Apex Energy’s 250-bar CNG or -162°C Cryogenic LNG.
            </p>
          </div>
        </motion.div>

        {/* Main 12-Column Interactive Simulator Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left 7 Columns: Controls, Sector Presets & Radix Sliders */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:space-y-8 sm:p-8 lg:col-span-7"
          >
            <div className="space-y-3">
              <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                1. Select Operational Profile
              </label>
              <div
                aria-label="Operational profile presets"
                tabIndex={0}
                className="mobile-scroll-row flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0"
              >
                {(Object.keys(SECTOR_PRESETS) as SectorKey[]).map((key) => {
                  const item = SECTOR_PRESETS[key]
                  const IconComponent = item.icon
                  const isSelected = sector === key
                  return (
                    <motion.button
                      key={key}
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleSectorSelect(key)}
                      className={`flex min-w-[78vw] snap-start items-start gap-3 rounded-xl border p-4 text-left transition-colors cursor-pointer sm:min-w-0 ${
                        isSelected
                          ? 'border-[#10B981] bg-[#10B981]/10 text-white'
                          : 'border-slate-800 bg-[#0B131E] text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`mt-0.5 rounded-lg p-2 ${
                          isSelected
                            ? 'bg-[#10B981] text-[#0B131E]'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-white">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs text-slate-400 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Monthly Diesel Consumption Slider */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                  2. Monthly Diesel (AGO) Volume
                </label>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {formatNumber(monthlyDieselLitres)}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    Litres / Month
                  </span>
                </div>
              </div>

              <Slider
                value={[monthlyDieselLitres]}
                min={5000}
                max={250000}
                step={2500}
                onValueChange={(vals) => setMonthlyDieselLitres(vals[0])}
                aria-label="Monthly Diesel Consumption in Litres"
              />

              <div className="space-y-2 pt-1 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0">
                <span className="block text-xs text-slate-400 font-mono">
                  Quick presets:
                </span>
                <div
                  aria-label="Monthly diesel volume presets"
                  className="mobile-scroll-row -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
                >
                  {[15000, 40000, 75000, 125000, 200000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setMonthlyDieselLitres(val)}
                      className={`min-h-9 shrink-0 rounded-md px-3 py-1 font-mono text-xs transition-colors cursor-pointer tabular-nums ${
                        monthlyDieselLitres === val
                          ? 'bg-[#10B981] text-[#0B131E] font-bold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {formatNumber(val / 1000)}k L
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Current Diesel Market Price Slider */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                  3. Delivered Diesel Price per Litre (₦)
                </label>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-2xl font-bold text-white tabular-nums">
                    ₦{formatNumber(dieselPricePerLitre)}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    / Litre
                  </span>
                </div>
              </div>

              <Slider
                value={[dieselPricePerLitre]}
                min={1200}
                max={2000}
                step={25}
                onValueChange={(vals) => setDieselPricePerLitre(vals[0])}
                aria-label="Current Diesel Price in Naira per Litre"
              />

              <div className="flex justify-between gap-3 font-mono text-[10px] text-slate-400 tabular-nums sm:text-[11px]">
                <span>₦1,200 / L</span>
                <span className="hidden text-center min-[390px]:inline">Market Avg: ~₦1,650 / L</span>
                <span>₦2,000 / L</span>
              </div>
            </div>

            {/* Step 4: Gas Supply Modality Toggle */}
            <div className="rounded-xl border border-slate-800 bg-[#0B131E] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {useLngBulk ? (
                    <Snowflake className="h-4 w-4 text-[#38BDF8]" />
                  ) : (
                    <Flame className="h-4 w-4 text-[#10B981]" />
                  )}
                  <span className="font-display text-sm font-bold text-white">
                    Supply Modality:{' '}
                    {useLngBulk
                      ? 'Apex Cryogenic LNG (-162°C Bulk)'
                      : 'Apex Compressed Natural Gas (250 Bar CNG)'}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {useLngBulk
                    ? 'Optimal for high-volume industrial off-take (>80k L/mo) or long-haul supply corridors.'
                    : 'Optimal for industrial plants, estates, and commercial vehicle fleets.'}
                </p>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span
                  className={`font-mono text-xs font-semibold ${
                    !useLngBulk ? 'text-[#34D399]' : 'text-slate-400'
                  }`}
                >
                  CNG
                </span>
                <Switch
                  checked={useLngBulk}
                  onCheckedChange={setUseLngBulk}
                  aria-label="Toggle between CNG and Cryogenic LNG"
                />
                <span
                  className={`font-mono text-xs font-semibold ${
                    useLngBulk ? 'text-[#38BDF8]' : 'text-slate-400'
                  }`}
                >
                  LNG
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: Live Financial & Carbon Output Ledger */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-8 lg:col-span-5"
          >
            <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 min-[390px]:flex-row min-[390px]:items-start min-[390px]:justify-between">
              <div className="min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#34D399] sm:text-[11px]">
                  PROJECTED ANNUAL SAVINGS
                </span>
                <motion.p
                  key={metrics.annualSavings}
                  initial={{ opacity: 0.7, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 font-mono text-3xl font-bold text-white tabular-nums sm:text-4xl"
                >
                  <span className="sm:hidden">{formatNaira(metrics.annualSavings, true)}</span>
                  <span className="hidden sm:inline">{formatNaira(metrics.annualSavings)}</span>
                </motion.p>
              </div>
              <div className="self-start text-left min-[390px]:text-right">
                <div className="flex items-center justify-start gap-1 font-mono text-2xl font-bold text-[#34D399] tabular-nums min-[390px]:justify-end">
                  <TrendingDown className="h-5 w-5" />
                  <span>{metrics.savingsPercent}%</span>
                </div>
                <p className="text-[10px] font-mono uppercase text-slate-400">
                  OpEx Reduction
                </p>
              </div>
            </div>

            {/* Monthly Comparison Bar Visualizer with Framer Motion Bar Width */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex flex-col gap-1 font-mono text-xs sm:flex-row sm:items-end sm:justify-between">
                  <span className="text-slate-400">
                    Current Monthly Diesel Spend
                  </span>
                  <span className="font-semibold text-white tabular-nums">
                    <span className="sm:hidden">{formatNaira(metrics.currentMonthlyDieselCost, true)}</span>
                    <span className="hidden sm:inline">{formatNaira(metrics.currentMonthlyDieselCost)}</span> / mo
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-sm bg-slate-800 overflow-hidden">
                  <div className="h-full w-full bg-amber-500/80" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-col gap-1 font-mono text-xs sm:flex-row sm:items-end sm:justify-between">
                  <span className="text-[#34D399]">
                    Projected Apex {useLngBulk ? 'LNG' : 'CNG'} Spend
                  </span>
                  <span className="font-bold text-[#34D399] tabular-nums">
                    <span className="sm:hidden">{formatNaira(metrics.projectedMonthlyGasCost, true)}</span>
                    <span className="hidden sm:inline">{formatNaira(metrics.projectedMonthlyGasCost)}</span> / mo
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-sm bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{ width: `${gasBarWidthPercent}%` }}
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                    className="h-full bg-[#10B981]"
                  />
                </div>
              </div>
            </div>

            {/* Hairline 2x2 Ledger */}
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 min-[390px]:grid-cols-2">
              <div className="bg-[#0B131E] p-4">
                <p className="text-xs text-slate-400">Monthly Net Savings</p>
                <p className="mt-1 font-mono text-lg font-bold text-[#34D399] tabular-nums">
                  {formatNaira(metrics.monthlySavings, true)}
                </p>
              </div>

              <div className="bg-[#0B131E] p-4">
                <p className="text-xs text-slate-400">Equivalent Gas Volume</p>
                <p className="mt-1 font-mono text-lg font-bold text-[#7DD3FC] tabular-nums">
                  {formatNumber(metrics.equivalentScmMonthly)} SCM
                </p>
              </div>

              <div className="bg-[#0B131E] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">CO₂ Abatement</p>
                  <Leaf className="h-3.5 w-3.5 text-[#10B981]" />
                </div>
                <p className="mt-1 font-mono text-lg font-bold text-white tabular-nums">
                  {formatNumber(metrics.annualCo2SavedTonnes)} t/yr
                </p>
              </div>

              <div className="bg-[#0B131E] p-4">
                <p className="text-xs text-slate-400">Est. Skid Payback</p>
                <p className="mt-1 font-mono text-lg font-bold text-white tabular-nums">
                  ~{metrics.paybackMonths} Months
                </p>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <Button
                size="lg"
                className="w-full"
                onClick={() =>
                  onOpenQuote(
                    `ROI Calculator Proposal: ${SECTOR_PRESETS[sector].label} | Current Diesel: ${formatNumber(monthlyDieselLitres)} L/mo @ ₦${dieselPricePerLitre}/L | Target: Apex ${useLngBulk ? 'LNG' : 'CNG'} (${formatNumber(metrics.equivalentScmMonthly)} SCM/mo) | Est. Annual Savings: ${formatNaira(metrics.annualSavings)}`
                  )
                }
              >
                <span className="sm:hidden">Request Proposal</span>
                <span className="hidden sm:inline">Lock In Rate &amp; Request Custom Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
