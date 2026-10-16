import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Flame, ArrowRight, Menu, FileText } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'
import { EASE_OUT_EXPO } from '../lib/motion'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from './ui/dialog'

interface NavbarProps {
  onOpenInvestor: (presetNote?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInvestor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Company', href: '#company' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'Gwagwalada', href: '#gwagwalada' },
    { label: 'Edge', href: '#why' },
    { label: 'Invest', href: '#invest' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#"
          aria-label="ApexEnergy home"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0B131E] text-white transition-colors group-hover:bg-[#059669] sm:h-10 sm:w-10"
          >
            <Flame className="h-5 w-5 text-[#10B981] transition-colors group-hover:text-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-none tracking-tight text-[#0F172A] sm:text-lg">
              ApexEnergy
            </span>
            <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-[#475569] sm:text-[10px] sm:tracking-[0.16em]">
              Resources Ltd
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F172A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={COMPANY_INFO.phoneHref}
            className="hidden items-center gap-1.5 font-mono text-xs text-[#475569] transition-colors hover:text-[#059669] xl:flex"
          >
            <Phone className="h-3.5 w-3.5 text-[#059669]" />
            <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() =>
              onOpenInvestor(
                'Request: Investor Data Room Access — Gwagwalada Energy Hub'
              )
            }
          >
            <FileText className="h-3.5 w-3.5" />
            Investor Enquiry
          </Button>

          {/* Mobile Menu */}
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Navigation</DialogTitle>
                <DialogDescription>{COMPANY_INFO.positioning}</DialogDescription>
              </DialogHeader>

              <nav className="flex flex-col gap-1 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 items-center justify-between rounded-lg border border-[#E2E8F0] px-4 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#059669]/40 hover:bg-[#F8FAFC]"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-[#94A3B8]" />
                  </a>
                ))}
              </nav>

              <div className="space-y-2 border-t border-[#E2E8F0] pt-4">
                <Button
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenInvestor(
                      'Request: Investor Data Room Access — Gwagwalada Energy Hub'
                    )
                  }}
                >
                  <FileText className="h-4 w-4" />
                  Request Investor Data Room
                </Button>
                <div className="flex flex-col gap-1.5 pt-1 font-mono text-xs">
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center gap-2 text-[#475569]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#059669]" />
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="inline-flex items-center gap-2 break-all text-[#475569]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#059669]" />
                    {COMPANY_INFO.emailDisplay}
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.header>
  )
}
