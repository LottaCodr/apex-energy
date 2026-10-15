import React from 'react'
import { FileText, Phone } from 'lucide-react'
import { COMPANY_INFO } from '../data/energyData'
import { Button } from './ui/button'

interface MobileActionBarProps {
  onOpenQuote: (presetNote?: string) => void
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOpenQuote,
}) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] bg-white/95 px-3 pt-2 shadow-[0_-10px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto grid max-w-md grid-cols-[0.82fr_1.18fr] gap-2">
        <Button variant="outline" asChild className="w-full px-3">
          <a href={COMPANY_INFO.phoneHref} aria-label={`Call ${COMPANY_INFO.name}`}>
            <Phone className="h-4 w-4 text-[#059669]" />
            <span>Call us</span>
          </a>
        </Button>
        <Button
          className="w-full px-3"
          onClick={() =>
            onOpenQuote('Mobile Quick Action: Request Free Energy Audit & Gas Quote')
          }
        >
          <FileText className="h-4 w-4" />
          <span>Free audit</span>
        </Button>
      </div>
    </aside>
  )
}
