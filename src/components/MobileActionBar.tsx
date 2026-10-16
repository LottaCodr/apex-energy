import React from 'react'
import { Phone, FileText } from 'lucide-react'
import { COMPANY_INFO } from '../data/companyData'
import { Button } from './ui/button'

interface MobileActionBarProps {
  onOpenInvestor: (presetNote?: string) => void
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOpenInvestor,
}) => {
  return (
    <aside
      aria-label="Quick investor actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] bg-white/95 px-3 pt-2 shadow-[0_-10px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto grid max-w-md grid-cols-[0.82fr_1.18fr] gap-2">
        <Button variant="outline" asChild className="w-full px-3">
          <a
            href={COMPANY_INFO.phoneHref}
            aria-label={`Call ${COMPANY_INFO.name}`}
          >
            <Phone className="h-4 w-4 text-[#059669]" />
            <span>Call desk</span>
          </a>
        </Button>
        <Button
          className="w-full px-3"
          onClick={() =>
            onOpenInvestor(
              'Request: Investor Data Room Access — Gwagwalada Energy Hub'
            )
          }
        >
          <FileText className="h-4 w-4" />
          <span>Data room</span>
        </Button>
      </div>
    </aside>
  )
}
