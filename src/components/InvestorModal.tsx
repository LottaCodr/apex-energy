import React, { useState } from 'react'
import { CheckCircle2, Flame, Mail, Phone, Send, Lock } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

interface InvestorModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  presetNote: string
}

const PARTY_TYPES = [
  'Investor — Equity',
  'Investor — Debt / Lending',
  'Owner Engineer (OE) Mandate',
  'Development Finance / Grant',
  'Strategic / Offtake Partner',
  'EPC or Equipment Supplier',
  'Government / Regulatory',
]

export const InvestorModal: React.FC<InvestorModalProps> = ({
  open,
  onOpenChange,
  presetNote,
}) => {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [partyType, setPartyType] = useState(PARTY_TYPES[0])
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState(presetNote)
  const [ticketId, setTicketId] = useState<string | null>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = Math.floor(100000 + Math.random() * 900000)
    setTicketId(`APEX-IR-${num}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader className="pr-9 sm:pr-10">
          <DialogTitle className="flex items-start gap-2">
            <Flame className="h-5 w-5 shrink-0 text-[#059669]" />
            <span>Investor Data Room &amp; Mandate Enquiry</span>
          </DialogTitle>
          <DialogDescription>
            {COMPANY_INFO.name} • {COMPANY_INFO.positioning} (
            {COMPANY_INFO.phoneDisplay} | {COMPANY_INFO.emailDisplay})
          </DialogDescription>
        </DialogHeader>

        {ticketId ? (
          <div className="space-y-5 py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <p className="font-mono text-xs font-bold text-[#059669]">
                ENQUIRY REFERENCE: {ticketId}
              </p>
              <h4 className="font-display text-xl font-bold text-[#0F172A]">
                Routed to the Investment Desk
              </h4>
              <p className="text-sm text-[#475569]">
                Thank you, <strong>{name}</strong> ({organization}). Your{' '}
                {partyType.toLowerCase()} enquiry has been logged. The investment
                desk responds within one business day.
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-left font-mono text-xs">
              <p className="flex items-center gap-2 font-semibold text-[#0F172A]">
                <Lock className="h-3.5 w-3.5 text-[#059669]" />
                Data room access is granted under NDA:
              </p>
              <p className="text-[#475569]">
                Includes FEED scope, feedstock position, permit status, capital
                structure and the phased programme financial model.
              </p>
              <p className="pt-1 text-[#475569]">
                Direct line:{' '}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-bold text-[#059669] tabular-nums"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
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

            <Button onClick={() => onOpenChange(false)}>Done</Button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Engr. Ibrahim Danjuma"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Organization / Institution *
                </label>
                <input
                  type="text"
                  required
                  autoComplete="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Development Finance Institution"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Party Type *
                </label>
                <select
                  required
                  value={partyType}
                  onChange={(e) => setPartyType(e.target.value)}
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                >
                  {PARTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.com"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Telephone *
                </label>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 802 000 0000"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 font-mono text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#0F172A]">
                Mandate, Ticket Size &amp; Requirements
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 font-mono text-xs text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-2 rounded-xl bg-[#0B131E] p-3.5 text-xs text-slate-300 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 font-mono text-[#34D399] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_INFO.emailHref}
                className="inline-flex min-w-0 items-center gap-1.5 break-all font-mono text-[#7DD3FC] hover:underline"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span>{COMPANY_INFO.emailDisplay}</span>
              </a>
            </div>

            <div className="flex flex-col-reverse items-stretch justify-end gap-2.5 pt-1 sm:flex-row sm:items-center [&>button]:w-full sm:[&>button]:w-auto">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Send className="h-4 w-4" />
                <span className="sm:hidden">Submit Enquiry</span>
                <span className="hidden sm:inline">
                  Submit Investor Enquiry
                </span>
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
