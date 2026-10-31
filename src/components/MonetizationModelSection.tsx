import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, TrendingUp, Info, Gauge } from 'lucide-react'
import { MODEL_DEFAULTS } from '../data/companyData'
import { fadeUpVariant } from '../lib/motion'
import { Slider } from './ui/slider'
import { Button } from './ui/button'

/**
 * Illustrative Phase 1 monetization model.
 * Nameplate: 5 MMSCFD CNG + 50 TPD Mini-LNG (Gwagwalada Energy Hub).
 */

const CNG_NAMEPLATE_MMSCFD = 5
const LNG_TPD = 50
const SCF_TO_SCM = 0.0283168
/** Standard industry conversion: 1 tonne of LNG ~ 48.7 MMBtu (HHV). */
const LNG_MMBTU_PER_TONNE = 48.7
/** Standard industry conversion: 1 tonne of LNG ~ 1,365 SCM of regasified gas. */
const LNG_SCM_PER_TONNE = 1365
const EBITDA_MARGIN = 0.65
const PHASE_1_CAPEX_USD = 60_000_000

interface SliderRowProps {
  label: string
  hint: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}

const SliderRow: React.FC<SliderRowProps> = ({
  label,
  hint,
  value,
  display,
  min,
  max,
  step,
  onChange,
}) => (
  <div className="space-y-3">
    <div className="flex items-end justify-between gap-3">
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{hint}</p>
      </div>
      <p className="shrink-0 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold text-[#34D399] tabular-nums">
        {display}
      </p>
    </div>
    <Slider
      value={[value]}
      min={min}
      max={max}
      step={step}
      onValueChange={(vals) => onChange(vals[0])}
      aria-label={label}
    />
  </div>
)

export const MonetizationModelSection: React.FC = () => {
  const [cngPrice, setCngPrice] = useState(MODEL_DEFAULTS.cngPrice)
  const [lngPrice, setLngPrice] = useState(MODEL_DEFAULTS.lngPrice)
  const [utilization, setUtilization] = useState(MODEL_DEFAULTS.utilization)
  const [fxRate, setFxRate] = useState(1500)

  const model = useMemo(() => {
    const util = utilization / 100

    // CNG stream: MMSCFD -> SCM per year
    const cngScmYear =
      CNG_NAMEPLATE_MMSCFD * 1_000_000 * 365 * SCF_TO_SCM * util
    const cngRevenueNgn = cngScmYear * cngPrice
    const cngRevenueUsd = cngRevenueNgn / fxRate

    // Mini-LNG stream: TPD -> tonnes -> MMBtu per year
    const lngTonnesYear = LNG_TPD * 365 * util
    const lngMmbTuYear = lngTonnesYear * LNG_MMBTU_PER_TONNE
    const lngRevenueUsd = lngMmbTuYear * lngPrice

    const totalRevenueUsd = cngRevenueUsd + lngRevenueUsd
    const ebitdaUsd = totalRevenueUsd * EBITDA_MARGIN
    const paybackYears =
      ebitdaUsd > 0 ? PHASE_1_CAPEX_USD / ebitdaUsd : Number.POSITIVE_INFINITY
    const gasMonetizedMmscm =
      (cngScmYear + lngTonnesYear * LNG_SCM_PER_TONNE) / 1_000_000

    return {
      cngRevenueUsd,
      lngRevenueUsd,
      totalRevenueUsd,
      ebitdaUsd,
      paybackYears,
      gasMonetizedMmscm,
      lngRevenueShare:
        totalRevenueUsd > 0 ? (lngRevenueUsd / totalRevenueUsd) * 100 : 0,
    }
  }, [cngPrice, lngPrice, utilization, fxRate])

  const usdM = (value: number) => `$${(value / 1_000_000).toFixed(1)}M`

  const reset = () => {
    setCngPrice(MODEL_DEFAULTS.cngPrice)
    setLngPrice(MODEL_DEFAULTS.lngPrice)
    setUtilization(MODEL_DEFAULTS.utilization)
    setFxRate(1500)
  }

  return (
    <section
      id="model"
      className="relative overflow-hidden border-b border-slate-800 bg-[#0E1726] py-14 sm:py-16 lg:py-28"
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />

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
              04 / PHASE 1 MONETIZATION MODEL
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What the Gwagwalada Hub Earns
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Move the assumptions. The model below monetizes the full Phase 1
              nameplate of{' '}
              <strong className="text-slate-200">
                5 MMSCFD CNG + 50 TPD Mini-LNG
              </strong>{' '}
              against a $60M CAPEX.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4 lg:col-span-5">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" />
            <p className="text-[11px] leading-relaxed text-slate-400">
              <strong className="text-slate-200">Illustrative model.</strong>{' '}
              Inputs are adjustable planning assumptions, not company guidance or
              a forecast. Excludes Phase 2/3 LNG export revenue, grants and
              financing costs.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Controls */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-7 lg:col-span-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-[#34D399]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  PLANNING ASSUMPTIONS
                </p>
              </div>
              <button
                type="button"
                onClick={reset}
                className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[11px] text-slate-400 transition-colors hover:text-[#34D399]"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>

            <div className="space-y-8">
              <SliderRow
                label="CNG selling price"
                hint="Naira per standard cubic metre delivered to industrial & fleet offtakers"
                value={cngPrice}
                display={`₦${cngPrice} / SCM`}
                min={250}
                max={600}
                step={5}
                onChange={setCngPrice}
              />
              <SliderRow
                label="Mini-LNG selling price"
                hint="US dollars per million BTU ex-hub to regional & bunkering buyers"
                value={lngPrice}
                display={`$${lngPrice} / MMBtu`}
                min={8}
                max={22}
                step={0.5}
                onChange={setLngPrice}
              />
              <SliderRow
                label="Capacity utilization"
                hint="Share of the 5 MMSCFD + 50 TPD nameplate actually sold per year"
                value={utilization}
                display={`${utilization}%`}
                min={50}
                max={100}
                step={1}
                onChange={setUtilization}
              />
              <SliderRow
                label="Naira exchange rate"
                hint="Used to convert Naira CNG revenue into US dollars"
                value={fxRate}
                display={`₦${fxRate.toLocaleString()} / $`}
                min={1100}
                max={2500}
                step={50}
                onChange={setFxRate}
              />
            </div>

            {/* Revenue split bar */}
            <div className="space-y-2.5 border-t border-slate-800 pt-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                REVENUE SPLIT
              </p>
              <div className="flex h-3 w-full overflow-hidden rounded-full border border-slate-800 bg-slate-900">
                <div
                  className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] transition-all duration-500"
                  style={{ width: `${model.lngRevenueShare}%` }}
                />
                <div
                  className="h-full bg-gradient-to-r from-[#059669] to-[#10B981] transition-all duration-500"
                  style={{ width: `${100 - model.lngRevenueShare}%` }}
                />
              </div>
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-[#34D399]">
                  <span className="h-2 w-2 rounded-full bg-[#059669]" />
                  CNG {usdM(model.cngRevenueUsd)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#7DD3FC]">
                  <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                  Mini-LNG {usdM(model.lngRevenueUsd)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Outputs */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5 lg:col-span-6"
          >
            {/* Headline output */}
            <div className="rounded-2xl border border-[#059669]/35 bg-gradient-to-br from-[#059669]/15 to-transparent p-5 sm:p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                MODELLED ANNUAL REVENUE
              </p>
              <p className="mt-2 font-display text-4xl font-bold leading-none tracking-tight text-white tabular-nums sm:text-5xl">
                {usdM(model.totalRevenueUsd)}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                From {model.gasMonetizedMmscm.toFixed(1)} MMSCM per year of
                Nigerian gas converted into CNG and liquid LNG at the Gwagwalada
                Energy Hub.
              </p>
            </div>

            {/* Output grid */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800">
              {[
                {
                  label: 'MODELLED EBITDA',
                  value: usdM(model.ebitdaUsd),
                  sub: 'At an assumed 65% midstream margin',
                },
                {
                  label: 'SIMPLE CAPEX PAYBACK',
                  value:
                    model.paybackYears > 0 && Number.isFinite(model.paybackYears)
                      ? `${model.paybackYears.toFixed(1)} yrs`
                      : '—',
                  sub: 'Against the $60M Phase 1 CAPEX',
                },
                {
                  label: 'CNG STREAM',
                  value: usdM(model.cngRevenueUsd),
                  sub: 'Industrial & commercial offtake',
                },
                {
                  label: 'MINI-LNG STREAM',
                  value: usdM(model.lngRevenueUsd),
                  sub: 'Regional & marine bunkering',
                },
              ].map((out) => (
                <div key={out.label} className="space-y-1.5 bg-[#0E1726] p-4 sm:p-5">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {out.label}
                  </p>
                  <p className="font-display text-xl font-bold leading-none text-white tabular-nums sm:text-2xl">
                    {out.value}
                  </p>
                  <p className="text-[11px] leading-snug text-slate-400">
                    {out.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Why this matters */}
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#FBBF24]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  THE INVESTMENT LOGIC
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                Phase 1 is a{' '}
                <strong className="text-slate-200">
                  cash-generating asset in its own right
                </strong>
                , not a cost centre on the way to LNG. It funds its own
                operations, builds the audited operating record that project
                lenders require, and creates the option value over the 12 MTPA
                export business that Phase 2 and 3 are built on.
              </p>
              <Button variant="outlineDark" size="sm" asChild>
                <a href="#invest">
                  See the current raise
                  <TrendingUp className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
