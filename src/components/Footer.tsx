import React from 'react'
import {
  Flame,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { COMPANY_INFO } from '../data/energyData'

interface FooterProps {
  onOpenQuote: (presetNote?: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#0B131E] text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand & Corporate HQ Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#059669] text-white">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white leading-none">
                  {COMPANY_INFO.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#34D399]">
                  CLEAN CNG &amp; LNG INFRASTRUCTURE
                </p>
              </div>
            </div>

            <p className="max-w-md text-xs text-slate-400 leading-relaxed">
              Delivering 250-bar Compressed Natural Gas (CNG), -162°C Cryogenic
              Liquefied Natural Gas (LNG), Virtual Pipeline PRMS skids, and
              commercial fleet conversions to industrial and mobility partners
              across Nigeria.
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-white">
                <Phone className="h-4 w-4 text-[#10B981]" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-[#34D399] transition-colors tabular-nums"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white">
                <Mail className="h-4 w-4 text-[#38BDF8]" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="hover:text-[#7DD3FC] transition-colors"
                >
                  {COMPANY_INFO.emailDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>HQ: {COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Solutions Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Industrial CNG (250 Bar)
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Cryogenic LNG (-162°C)
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Virtual Pipeline Architecture
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-[#34D399] transition-colors"
                >
                  Economic &amp; Carbon Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Technical &amp; Commercial FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* National Corridors & Direct CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
              National Supply Corridors
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Abuja &amp; Central Industrial Corridor (Corporate HQ)</li>
              <li>Lagos, Ogun &amp; South-West Industrial Belt</li>
              <li>Port Harcourt, Warri &amp; Eastern Manufacturing Axis</li>
              <li>Kaduna, Kano &amp; Northern Logistics Corridor</li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={() =>
                  onOpenQuote('Footer CTA: Request Free Energy Audit & Gas Quote')
                }
                className="rounded-lg bg-[#059669] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#047857] transition-colors cursor-pointer"
              >
                Schedule Free Energy Audit
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/90 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Headquartered in
            Abuja, Nigeria. Serving Industrial &amp; Mobility Clients Nationwide.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#34D399]">
            <ShieldCheck className="h-4 w-4" />
            <span>NMDPRA LICENSED • SON ISO 11439 • PCNGi PARTNER</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
