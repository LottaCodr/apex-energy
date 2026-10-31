import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, HelpCircle } from 'lucide-react'
import { COMPANY_INFO, INVESTOR_FAQ } from '../data/companyData'
import { fadeUpVariant, staggerContainerVariant } from '../lib/motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export const InvestorFaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-12">
          {/* Left: Editorial Header + Desk Card */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#059669]">
                08 / INVESTOR QUESTIONS
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                The Questions Every Investor Asks First
              </h2>
              <p className="text-sm leading-relaxed text-[#475569]">
                Direct answers on feedstock, risk sequencing, capital structure
                and accountability milestones. For anything not covered here,
                the investor relations desk responds within one business day.
              </p>
            </div>

            {/* Imagery Card */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2E8F0]">
                <img
                  src="/images/virtual-pipeline.jpg"
                  alt="CNG tube cascade trailer and stainless steel pressure reduction and metering skid"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xs leading-relaxed text-[#475569]">
                  Working gas infrastructure — the same engineering discipline
                  scaled from Phase 1 modules to world-scale trains.
                </p>
              </div>
            </div>

            {/* Direct Desk */}
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-[#0B131E] p-5">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="h-4 w-4 text-[#34D399]" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34D399]">
                  INVESTOR RELATIONS DESK
                </p>
              </div>
              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-start gap-2.5 text-xs text-white transition-colors hover:text-[#7DD3FC]"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#38BDF8]" />
                <span className="break-all font-mono">
                  {COMPANY_INFO.emailDisplay}
                </span>
              </a>
              <div className="space-y-2">
                {(COMPANY_INFO.phones ?? [{ display: COMPANY_INFO.phoneDisplay, href: COMPANY_INFO.phoneHref }]).map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-start gap-2.5 text-xs text-white transition-colors hover:text-[#34D399]"
                  >
                    <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#10B981]" />
                    <span className="font-mono tabular-nums">{p.display}</span>
                  </a>
                ))}
              </div>
              <p className="border-t border-slate-800 pt-3 text-[11px] leading-relaxed text-slate-400">
                {COMPANY_INFO.operatingHours}
              </p>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {INVESTOR_FAQ.map((item) => (
                <motion.div key={item.id} variants={fadeUpVariant}>
                  <AccordionItem value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
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
