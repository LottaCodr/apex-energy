import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'
import { fadeUpVariant } from '../lib/motion'
import { Button } from './ui/button'

const ENQUIRY_TYPES = [
  'Owner Engineer (OE) Mandate — $3M',
  'Equity / Debt Participation — $35M',
  'Strategic Partnership & Offtake',
  'Government & Development Finance',
  'EPC / Equipment Supply',
  'General Corporate Enquiry',
]

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [enquiryType, setEnquiryType] = useState(ENQUIRY_TYPES[0])
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
    const code = Math.floor(100000 + Math.random() * 900000)
    setSubmittedRef(`APEX-IR-${code}`)
  }

  return (
    <section
      id="contact"
      className="border-b border-[#E2E8F0] bg-white py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] space-y-10 px-4 sm:space-y-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 items-end gap-6 border-b border-[#E2E8F0] pb-8 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
              09 / START A CONVERSATION
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Talk to the {COMPANY_INFO.shortName} Investment Desk
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
              Whether you are appointing the Owner Engineer, participating in
              the $35M tranche, or exploring strategic offtake — the desk
              responds within one business day.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Corporate Ledger */}
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
                  INVESTOR RELATIONS &amp; CORPORATE DESK
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-bold text-white">
                  {COMPANY_INFO.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {COMPANY_INFO.positioning}
                </p>
              </div>

              {/* Phones */}
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  DIRECT TELEPHONE
                </span>
                <div className="space-y-2.5">
                  {(COMPANY_INFO.phones ?? [{ display: COMPANY_INFO.phoneDisplay, href: COMPANY_INFO.phoneHref }]).map((p) => (
                    <div key={p.href} className="flex items-center justify-between gap-3">
                      <a
                        href={p.href}
                        className="flex min-h-11 items-center gap-2.5 font-mono text-sm text-white transition-colors hover:text-[#34D399]"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-[#10B981]" />
                        <span className="tabular-nums">{p.display}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(p.display, p.href)}
                        className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-mono text-xs text-[#34D399] hover:underline"
                      >
                        {copiedField === p.href ? (
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
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  ELECTRONIC MAIL
                </span>
                {[
                  {
                    label: 'Investor Relations & Corporate',
                    value: COMPANY_INFO.emailDisplay,
                    href: COMPANY_INFO.emailHref,
                    color: 'text-[#34D399]',
                  },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className={`flex items-start gap-2.5 font-mono text-xs break-all transition-opacity hover:opacity-80 ${item.color}`}
                    >
                      <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* HQ */}
              <div className="flex items-start gap-2.5 border-t border-slate-800 pt-5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    CORPORATE HEADQUARTERS
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {COMPANY_INFO.headquarters}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-[#059669]/25 bg-[#059669]/10 p-3.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
                <p className="text-[11px] leading-relaxed text-slate-200">
                  Material shared under NDA on request. Financial models,
                  feedstock agreements and permit documentation are released
                  through the data room process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-7">
              {submittedRef ? (
                <div className="space-y-5 py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-mono text-xs font-bold text-[#059669]">
                      ENQUIRY REFERENCE: {submittedRef}
                    </p>
                    <h4 className="font-display text-xl font-bold text-[#0F172A]">
                      Routed to the Investment Desk
                    </h4>
                    <p className="text-sm text-[#475569]">
                      Thank you, <strong>{fullName}</strong>
                      {organization ? ` (${organization})` : ''}. Your{' '}
                      {enquiryType.toLowerCase()} enquiry has been logged and
                      will be answered within one business day.
                    </p>
                  </div>

                  <div className="space-y-1.5 rounded-xl border border-[#E2E8F0] bg-white p-4 text-left font-mono text-xs">
                    <p className="font-semibold text-[#0F172A]">
                      Priority channels:
                    </p>
                    <div className="space-y-1 text-[#475569]">
                      <p>Phone:</p>
                      {(COMPANY_INFO.phones ?? [{ display: COMPANY_INFO.phoneDisplay, href: COMPANY_INFO.phoneHref }]).map((p) => (
                        <a key={p.href} href={p.href} className="block font-bold text-[#059669] tabular-nums">
                          {p.display}
                        </a>
                      ))}
                    </div>
                    <p className="break-all text-[#475569]">
                      Email:{' '}
                      <a
                        href={COMPANY_INFO.emailHref}
                        className="font-bold text-[#0284C7]"
                      >
                        {COMPANY_INFO.emailDisplay}
                      </a>
                    </p>
                  </div>

                  <Button onClick={() => setSubmittedRef(null)}>
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Engr. Ibrahim Danjuma"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="organization"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Organization / Institution *
                      </label>
                      <input
                        id="organization"
                        type="text"
                        required
                        autoComplete="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Zenith Capital Partners"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Business Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@institution.com"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Telephone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 802 000 0000"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 font-mono text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiryType"
                      className="block text-xs font-semibold text-[#0F172A]"
                    >
                      Nature of Enquiry *
                    </label>
                    <select
                      id="enquiryType"
                      required
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#0F172A]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your mandate, ticket size or technical scope and we will route it appropriately."
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#059669] focus:outline-none focus:ring-1 focus:ring-[#059669]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[#E2E8F0] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-start gap-2 text-[11px] leading-relaxed text-[#475569]">
                      <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#059669]" />
                      Your details are used solely to respond to this enquiry.
                    </p>
                    <Button type="submit" className="w-full shrink-0 sm:w-auto">
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
