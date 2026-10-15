import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { BentoSolutionsSection } from './components/BentoSolutionsSection'
import { RoiCalculatorSection } from './components/RoiCalculatorSection'
import { AbujaCorridorSection } from './components/AbujaCorridorSection'
import { SafetyAndFaqSection } from './components/SafetyAndFaqSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { QuoteModal } from './components/QuoteModal'
import { MobileActionBar } from './components/MobileActionBar'

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [quotePresetNote, setQuotePresetNote] = useState(
    'Free Fuel Audit & CNG/LNG Gas Supply Quote'
  )

  const handleOpenQuote = (presetNote?: string) => {
    if (presetNote) {
      setQuotePresetNote(presetNote)
    }
    setQuoteModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#F8FAFC] pb-[calc(4.25rem+env(safe-area-inset-bottom))] text-[#0F172A] lg:pb-0">
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        <HeroSection onOpenQuote={handleOpenQuote} />
        <BentoSolutionsSection onOpenQuote={handleOpenQuote} />
        <RoiCalculatorSection onOpenQuote={handleOpenQuote} />
        <AbujaCorridorSection onOpenQuote={handleOpenQuote} />
        <SafetyAndFaqSection />
        <ContactSection />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
      <MobileActionBar onOpenQuote={handleOpenQuote} />

      <QuoteModal
        key={`${quoteModalOpen}-${quotePresetNote}`}
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        presetNote={quotePresetNote}
      />
    </div>
  )
}

export default App
