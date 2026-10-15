import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { COMPANY_INFO, FAQ_ITEMS } from '../data/energyData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  EASE_OUT_EXPO,
} from '../lib/motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export const SafetyAndFaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-white"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left 5 Columns: Swiss Editorial Header + Engineer Visual Card */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
                06 / TECHNICAL &amp; COMMERCIAL FAQ
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Key Questions on CNG &amp; LNG Off-Take
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Engineering and commercial specifications for industrial
                manufacturers, independent power producers, estates, and
                logistics fleet operators across Nigeria.
              </p>
            </div>

            {/* Visual Engineering Desk Card with Photography */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2E8F0]">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  src="/images/engineers-scada.jpg"
                  alt="Apex Energy Nigerian Gas Engineers inspecting PRMS pressure gauges"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="font-display text-base font-bold text-[#0F172A]">
                  Speak with a Gas Infrastructure Engineer
                </p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Request a Front-End Engineering Design (FEED) assessment, PRMS
                  footprint drawing, or Gas Sale and Purchase Agreement (GSPA)
                  tariff sheet.
                </p>
                <div className="pt-2 border-t border-[#E2E8F0] space-y-2 font-mono text-xs">
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="flex items-center gap-2.5 text-[#0F172A] font-semibold hover:text-[#059669]"
                  >
                    <Phone className="h-4 w-4 text-[#059669]" />
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="flex items-center gap-2.5 text-[#0284C7] font-semibold hover:underline"
                  >
                    <Mail className="h-4 w-4 text-[#0284C7]" />
                    <span>{COMPANY_INFO.emailDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 7 Columns: Staggered Radix UI Accordion */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7"
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-1"
              className="space-y-3"
            >
              {FAQ_ITEMS.map((faq) => (
                <motion.div key={faq.id} variants={fadeUpVariant}>
                  <AccordionItem value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
