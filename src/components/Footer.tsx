import React from 'react'
import { Flame, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'

const CURRENT_YEAR = new Date().getFullYear()

interface FooterProps {
  onOpenInvestor: (presetNote?: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenInvestor }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#0B131E] text-slate-300">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Corporate Identity */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#059669] text-white">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-bold leading-none text-white">
                  {COMPANY_INFO.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#34D399]">
                  PHASED GAS COMMERCIALIZATION &amp; LNG
                </p>
              </div>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-slate-400">
              {COMPANY_INFO.positioning}. Developing fast-to-market CNG and
              Mini-LNG at the Gwagwalada Energy Hub, scaling to a world-scale 12
              MTPA LNG company.
            </p>

            <p className="max-w-md border-l-2 border-[#059669] pl-3 text-xs font-semibold italic leading-relaxed text-slate-200">
              {COMPANY_INFO.tagline}
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs">
              {(COMPANY_INFO.phones ?? [{ display: COMPANY_INFO.phoneDisplay, href: COMPANY_INFO.phoneHref }]).map((p) => (
                <div key={p.href} className="flex items-center gap-2.5 text-white">
                  <Phone className="h-4 w-4 shrink-0 text-[#10B981]" />
                  <a href={p.href} className="tabular-nums transition-colors hover:text-[#34D399]">
                    {p.display}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2.5 text-white">
                <Mail className="h-4 w-4 text-[#38BDF8]" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="break-all transition-colors hover:text-[#7DD3FC]"
                >
                  {COMPANY_INFO.emailDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                <span>HQ: {COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Programme Links */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
              The Programme
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#company" className="transition-colors hover:text-white">
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#strategy"
                  className="transition-colors hover:text-white"
                >
                  Prove → Scale → Dominate
                </a>
              </li>
              <li>
                <a
                  href="#gwagwalada"
                  className="transition-colors hover:text-white"
                >
                  Gwagwalada Energy Hub
                </a>
              </li>
              <li>
                <a href="#model" className="transition-colors hover:text-white">
                  Phase 1 Monetization Model
                </a>
              </li>
              <li>
                <a href="#why" className="transition-colors hover:text-white">
                  Why ApexEnergy Wins
                </a>
              </li>
              <li>
                <a href="#leadership" className="transition-colors hover:text-white">
                  Leadership — Adam Umar, 35 Years
                </a>
              </li>
            </ul>
          </div>

          {/* Investor Access */}
          <div className="space-y-3 lg:col-span-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Investor Access
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>$3M Owner Engineer Mandate — Gwagwalada Hub</li>
              <li>$35M Equity / Debt to FID Q1 2027</li>
              <li>Data room available under NDA</li>
              <li>Investor relations response within one business day</li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={() =>
                  onOpenInvestor(
                    'Footer Enquiry: Investor Data Room Access — Gwagwalada Energy Hub'
                  )
                }
                className="min-h-11 w-full cursor-pointer rounded-lg bg-[#059669] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#047857] sm:w-auto"
              >
                Request Investor Data Room
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/90 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {CURRENT_YEAR} {COMPANY_INFO.name}. Headquartered in Abuja,
            Nigeria. 100% Nigerian owned.
          </p>
          <div className="flex items-start gap-2 font-mono text-[10px] leading-relaxed text-[#34D399] sm:items-center sm:text-[11px]">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>DECADE OF GAS ALIGNED • NCDMB COMPLIANT • AKK CORRIDOR</span>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-800/60 pt-6 text-[10px] leading-relaxed text-slate-500">
          This website is provided for information purposes only and does not
          constitute an offer to sell or a solicitation of an offer to buy any
          security. Forward-looking statements regarding projects, timelines and
          capacity are subject to permitting, feedstock availability, financing
          and final investment decision.
        </p>
      </div>
    </footer>
  )
}
