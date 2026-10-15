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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
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

      <QuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        presetNote={quotePresetNote}
      />
    </div>
  )
}

export default App
