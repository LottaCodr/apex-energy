import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  Flame,
  ArrowRight,
  Menu,
} from 'lucide-react'
import { COMPANY_INFO } from '../data/energyData'
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
  onOpenQuote: (presetNote?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Network', href: '#network' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-[#F8FAFC]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Clean Architectural Brand Lockup: Zero Pills, Zero Location Text */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B131E] text-white transition-colors group-hover:bg-[#059669]"
          >
            <Flame className="h-5 w-5 text-[#10B981] group-hover:text-white transition-colors" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-[#0F172A] leading-none">
              Apex Energy
            </span>
            <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#475569]">
              Resources Limited
            </span>
          </div>
        </a>

        {/* Clean Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.18 }}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#0F172A]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#0F172A] hover:text-[#059669] transition-colors tabular-nums"
          >
            <Phone className="h-3.5 w-3.5 text-[#059669]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <Button
            onClick={() =>
              onOpenQuote('Header Inquiry: Request Industrial CNG / LNG Supply Quote')
            }
          >
            <span>Request Supply</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Drawer Trigger */}
        <div className="flex md:hidden">
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[92vw] max-w-md rounded-2xl p-6">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-[#059669]" />
                  <span>{COMPANY_INFO.name}</span>
                </DialogTitle>
                <DialogDescription>
                  CNG &amp; LNG Clean Energy Infrastructure Across Nigeria
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-sm font-semibold text-[#0F172A] hover:text-[#059669]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-[#059669]" />
                  </a>
                ))}
              </div>

              <div className="mt-4 space-y-2 font-mono text-xs text-[#0F172A]">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-2 py-1 hover:text-[#059669]"
                >
                  <Phone className="h-4 w-4 text-[#059669]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-2 py-1 hover:text-[#0284C7]"
                >
                  <Mail className="h-4 w-4 text-[#0284C7]" />
                  <span>{COMPANY_INFO.emailDisplay}</span>
                </a>
              </div>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenQuote('Mobile Menu: Request CNG / LNG Supply Quote')
                }}
                className="mt-3 w-full"
              >
                Request Supply Quote
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.header>
  )
}
