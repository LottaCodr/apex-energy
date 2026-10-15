import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Mail,
  Globe,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { COMPANY_INFO } from '../data/energyData'
import { fadeUpVariant, EASE_OUT_EXPO } from '../lib/motion'
import { Button } from './ui/button'

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [solutionType, setSolutionType] = useState('Industrial CNG Virtual Pipeline & PRMS')
  const [monthlyVolume, setMonthlyVolume] = useState('50,000 to 150,000 SCM / Month')
  const [message, setMessage] = useState('')
  const [submittedRef, setSubmittedRef] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const randomCode = Math.floor(100000 + Math.random() * 900000)
    setSubmittedRef(`APEX-NG-${randomCode}`)
  }

  return (
    <section
      id="contact"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-10 px-4 sm:space-y-12 sm:px-6 lg:px-8">
        {/* Swiss Editorial Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-end border-b border-[#E2E8F0] pb-8"
        >
          <div className="lg:col-span-7 space-y-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
              07 / INITIATE GAS SUPPLY OR FLEET TRANSITION
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Partner with {COMPANY_INFO.name}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Connect with our engineering and commercial off-take desk for Gas
              Sale &amp; Purchase Agreements (GSPA), Virtual Pipeline PRMS
              skids, Cryogenic LNG supply, or commercial fleet conversions
              anywhere in Nigeria.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left 5 Columns: Direct Corporate & Dispatch Ledger */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5"
          >
            <div className="space-y-6 rounded-2xl border border-slate-800 bg-[#0B131E] p-5 text-white sm:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#34D399]">
                  CORPORATE &amp; ENGINEERING DESK
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-bold text-white">
                  {COMPANY_INFO.name}
                </h3>
              </div>

              {/* Phone Block */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    <span className="sm:hidden">PHONE &amp; DISPATCH</span>
                    <span className="hidden sm:inline">DIRECT TELEPHONE &amp; DISPATCH</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.phoneDisplay, 'phone')}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#34D399] hover:underline cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex min-w-0 items-center gap-2.5 font-mono text-base font-bold text-white transition-colors hover:text-[#34D399] min-[380px]:text-lg sm:gap-3 sm:text-2xl tabular-nums"
                >
                  <Phone className="h-5 w-5 text-[#10B981] shrink-0" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Email Block */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    OFFICIAL CORPORATE EMAIL
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.emailDisplay, 'email')}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#7DD3FC] hover:underline cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-3 font-mono text-base sm:text-lg font-bold text-[#7DD3FC] hover:text-white transition-colors break-all"
                >
                  <Mail className="h-5 w-5 text-[#38BDF8] shrink-0" />
                  <span>{COMPANY_INFO.emailDisplay}</span>
                </a>
              </div>

              {/* Corporate HQ & National Scope */}
              <div className="space-y-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Corporate Headquarters:
                    </p>
                    <p className="mt-0.5 leading-relaxed">
                      {COMPANY_INFO.headquarters}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Operational Footprint:
                    </p>
                    <p className="mt-0.5 leading-relaxed">
                      {COMPANY_INFO.operationsScope}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Operations &amp; Dispatch Hours:
                    </p>
                    <p className="mt-0.5 leading-relaxed">
                      {COMPANY_INFO.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 7 Columns: Engineering Off-Take & Supply Consultation Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 lg:col-span-7 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submittedRef ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                  className="py-8 space-y-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#059669]">
                      DISPATCH TICKET LOGGED • {submittedRef}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                      Engineering Inquiry Received
                    </h3>
                    <p className="mx-auto max-w-lg text-sm text-[#475569] leading-relaxed">
                      Thank you, <strong>{fullName}</strong> ({companyName}). Our
                      engineering desk has logged your inquiry for{' '}
                      <strong>{solutionType}</strong>.
                    </p>
                  </div>

                  <div className="mx-auto max-w-md rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-left space-y-2 font-mono text-xs">
                    <div className="flex flex-col gap-1 min-[420px]:flex-row min-[420px]:justify-between">
                      <span className="text-[#475569]">Reference ID:</span>
                      <span className="font-bold text-[#0F172A]">{submittedRef}</span>
                    </div>
                    <div className="flex flex-col gap-1 min-[420px]:flex-row min-[420px]:justify-between">
                      <span className="text-[#475569]">Est. Volume:</span>
                      <span className="font-bold text-[#059669]">{monthlyVolume}</span>
                    </div>
                    <div className="flex flex-col gap-1 min-[420px]:flex-row min-[420px]:justify-between">
                      <span className="text-[#475569]">Direct Desk:</span>
                      <span className="font-bold text-[#0F172A]">
                        {COMPANY_INFO.phoneDisplay}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 min-[420px]:flex-row min-[420px]:justify-between">
                      <span className="text-[#475569]">Email Desk:</span>
                      <span className="font-bold text-[#0284C7]">
                        {COMPANY_INFO.emailDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center [&>*]:w-full sm:[&>*]:w-auto">
                    <Button asChild>
                      <a
                        href={`mailto:${COMPANY_INFO.emailDisplay}?subject=${encodeURIComponent(
                          `[${submittedRef}] Gas Supply Proposal: ${companyName}`
                        )}&body=${encodeURIComponent(
                          `Name: ${fullName}\nCompany: ${companyName}\nPhone: ${phone}\nLocation: ${location}\nSolution: ${solutionType}\nVolume: ${monthlyVolume}\n\nNotes:\n${message}`
                        )}`}
                      >
                        <Mail className="h-4 w-4" />
                        <span className="sm:hidden">Email a Copy</span>
                        <span className="hidden sm:inline">Send Copy via Email Client</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSubmittedRef(null)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F172A]">
                        Request Industrial Gas Off-Take or Site Audit
                      </h3>
                      <p className="text-xs text-[#475569]">
                        Response within 2 business hours from our gas engineering
                        team.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#059669] font-semibold">
                      <ShieldCheck className="h-4 w-4" />
                      <span>NDA Protected</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Full Name &amp; Title *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Engr. Adebayo Musa"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="organization"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Continental Manufacturing PLC"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@company.com.ng"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Direct Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 803 000 0000"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] font-mono focus:border-[#059669] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Facility / Fleet State or City
                      </label>
                      <input
                        type="text"
                        autoComplete="address-level1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Abuja, Lagos, Ogun, Port Harcourt, Kano"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0F172A]">
                        Required Gas Infrastructure Solution
                      </label>
                      <select
                        value={solutionType}
                        onChange={(e) => setSolutionType(e.target.value)}
                        className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                      >
                        <option value="Industrial CNG Virtual Pipeline & PRMS">
                          Industrial CNG Virtual Pipeline &amp; PRMS (250 Bar)
                        </option>
                        <option value="Cryogenic LNG Bulk Supply & Regasification">
                          Cryogenic LNG Bulk Supply &amp; Regasification (-162°C)
                        </option>
                        <option value="Captive Power Gas Generator / Dual-Fuel Retrofit">
                          Captive Power Gas Generator / Dual-Fuel Retrofit
                        </option>
                        <option value="AutoCNG Commercial Fleet Conversion & Refueling">
                          AutoCNG Commercial Fleet Conversion &amp; Refueling
                        </option>
                        <option value="Daughter Station Co-Location Partnership">
                          Daughter Station Co-Location Partnership
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#0F172A]">
                      Estimated Monthly Energy / Fuel Demand
                    </label>
                    <select
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(e.target.value)}
                      className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] font-mono focus:border-[#059669] focus:bg-white focus:outline-none"
                    >
                      <option value="10,000 to 50,000 SCM / Month">
                        10,000 to 50,000 SCM / Month (Commercial / Estate / Fleet)
                      </option>
                      <option value="50,000 to 150,000 SCM / Month">
                        50,000 to 150,000 SCM / Month (Mid-Scale Industrial / 1 to 3 MW)
                      </option>
                      <option value="150,000 to 500,000 SCM / Month">
                        150,000 to 500,000 SCM / Month (Heavy Industrial / 3 to 10 MW)
                      </option>
                      <option value="500,000+ SCM / Month (Bulk Cryogenic LNG)">
                        500,000+ SCM / Month (Bulk Cryogenic LNG / 10+ MW Plant)
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#0F172A]">
                      Project Technical Specifications / Generator Ratings
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your current diesel consumption (Litres/month), generator kVA/MW ratings, boiler capacities, or fleet size..."
                      className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="text-xs text-[#475569] space-y-0.5">
                      <p>
                        Direct Line:{' '}
                        <a
                          href={COMPANY_INFO.phoneHref}
                          className="font-mono font-bold text-[#0F172A] hover:text-[#059669]"
                        >
                          {COMPANY_INFO.phoneDisplay}
                        </a>
                      </p>
                      <p>
                        Email:{' '}
                        <a
                          href={COMPANY_INFO.emailHref}
                          className="font-mono font-semibold text-[#0284C7] hover:underline"
                        >
                          {COMPANY_INFO.emailDisplay}
                        </a>
                      </p>
                    </div>

                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" />
                      <span className="sm:hidden">Submit Inquiry</span>
                      <span className="hidden sm:inline">Submit Supply Inquiry</span>
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
