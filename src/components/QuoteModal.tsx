import React, { useState, useEffect } from 'react'
import { CheckCircle2, Flame, Mail, Phone, Send } from 'lucide-react'
import { COMPANY_INFO } from '../data/energyData'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  presetNote: string
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  open,
  onOpenChange,
  presetNote,
}) => {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState(presetNote)
  const [ticketId, setTicketId] = useState<string | null>(null)

  useEffect(() => {
    if (presetNote) {
      setNotes(presetNote)
    }
    if (!open) {
      setTicketId(null)
    }
  }, [presetNote, open])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = Math.floor(100000 + Math.random() * 900000)
    setTicketId(`APEX-NG-${num}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#059669]" />
            <span>Request Gas Off-Take &amp; Engineering Proposal</span>
          </DialogTitle>
          <DialogDescription>
            {COMPANY_INFO.name} • Nationwide CNG &amp; LNG Supply ({COMPANY_INFO.phoneDisplay} |{' '}
            {COMPANY_INFO.emailDisplay})
          </DialogDescription>
        </DialogHeader>

        {ticketId ? (
          <div className="py-6 space-y-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <p className="font-mono text-xs font-bold text-[#059669]">
                PROPOSAL REQUEST ID: {ticketId}
              </p>
              <h4 className="font-display text-xl font-bold text-[#0F172A]">
                Assigned to Gas Engineering Desk
              </h4>
              <p className="text-sm text-[#475569]">
                Thank you, <strong>{name}</strong> ({organization}). Our commercial
                off-take team will contact you shortly.
              </p>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-left font-mono text-xs space-y-1.5">
              <p className="text-[#0F172A] font-semibold">Direct Priority Channels:</p>
              <p className="text-[#475569]">
                Phone:{' '}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-[#059669] font-bold"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p className="text-[#475569]">
                Email:{' '}
                <a
                  href={COMPANY_INFO.emailHref}
                  className="text-[#0284C7] font-bold"
                >
                  {COMPANY_INFO.emailDisplay}
                </a>
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <Button onClick={() => onOpenChange(false)}>Done</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Engr. Ibrahim Danjuma"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Organization / Company *
                </label>
                <input
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Continental Industrial PLC"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 802 000 0000"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm font-mono text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#0F172A]">
                Configuration &amp; Technical Requirements
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-xs font-mono text-[#0F172A] focus:border-[#059669] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="rounded-xl bg-[#0B131E] p-3.5 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 font-mono text-[#34D399] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_INFO.emailHref}
                className="inline-flex items-center gap-1.5 font-mono text-[#7DD3FC] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{COMPANY_INFO.emailDisplay}</span>
              </a>
            </div>

            <div className="flex justify-end gap-2.5 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Send className="h-4 w-4" />
                <span>Submit Engineering Request</span>
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
