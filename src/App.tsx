import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { WhoWeAreSection } from './components/WhoWeAreSection'
import { StrategySection } from './components/StrategySection'
import { GwagwaladaSection } from './components/GwagwaladaSection'
import { MonetizationModelSection } from './components/MonetizationModelSection'
import { WhyApexSection } from './components/WhyApexSection'
import { InvestSection } from './components/InvestSection'
import { InvestorFaqSection } from './components/InvestorFaqSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { InvestorModal } from './components/InvestorModal'
import { MobileActionBar } from './components/MobileActionBar'

export function App() {
  const [investorModalOpen, setInvestorModalOpen] = useState(false)
  const [enquiryPresetNote, setEnquiryPresetNote] = useState(
    'Investor Data Room & Mandate Enquiry — Gwagwalada Energy Hub'
  )

  const handleOpenInvestor = (presetNote?: string) => {
    if (presetNote) {
      setEnquiryPresetNote(presetNote)
    }
    setInvestorModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#F8FAFC] pb-[calc(4.25rem+env(safe-area-inset-bottom))] text-[#0F172A] lg:pb-0">
      <Navbar onOpenInvestor={handleOpenInvestor} />

      <main className="flex-1">
        <HeroSection onOpenInvestor={handleOpenInvestor} />
        <WhoWeAreSection />
        <StrategySection />
        <GwagwaladaSection />
        <MonetizationModelSection />
        <WhyApexSection />
        <InvestSection onOpenInvestor={handleOpenInvestor} />
        <InvestorFaqSection />
        <ContactSection />
      </main>

      <Footer onOpenInvestor={handleOpenInvestor} />
      <MobileActionBar onOpenInvestor={handleOpenInvestor} />

      <InvestorModal
        key={`${investorModalOpen}-${enquiryPresetNote}`}
        open={investorModalOpen}
        onOpenChange={setInvestorModalOpen}
        presetNote={enquiryPresetNote}
      />
    </div>
  )
}

export default App
