import React from 'react'

type LogoVariant = 'header' | 'footer' | 'mark'

interface LogoProps {
  variant?: LogoVariant
  className?: string
}

// Official lockup extracted from PDF — emblem + wordmark
// Wordmark: APEXENERGY RESOURCES LIMITED / Gas. Energy. Infrastructure
// Emblem: gold ring + twin flame + blue waves on black (apex-emblem-500.png)
export const Logo: React.FC<LogoProps> = ({ variant = 'header', className }) => {
  if (variant === 'mark') {
    return (
      <img
        src="/images/apex-emblem-500.png"
        alt="ApexEnergy"
        className={className ?? 'h-9 w-9 object-contain'}
        width={64}
        height={64}
        loading="eager"
      />
    )
  }

  if (variant === 'footer') {
    return (
      <div className={className ?? 'flex items-start gap-3.5'}>
        <img
          src="/images/apex-emblem-500.png"
          alt="ApexEnergy Resources Limited"
          className="h-[46px] w-[46px] shrink-0 rounded-full object-contain sm:h-[52px] sm:w-[52px]"
          width={52}
          height={52}
          loading="lazy"
        />
        <div className="flex flex-col pt-0.5">
          <span className="font-display text-[13px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[15px]">
            APEXENERGY RESOURCES LIMITED
          </span>
          <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#94A3B8] sm:text-[10px] sm:tracking-[0.2em]">
            Gas. Energy. Infrastructure
          </span>
          <span className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wide text-[#64748B]">
            <span className="h-px w-4 bg-[#C99700]/60" />
            RC: 9795465
          </span>
        </div>
      </div>
    )
  }

  // header
  return (
    <div className={className ?? 'flex items-center gap-2.5 sm:gap-3'}>
      <img
        src="/images/apex-emblem-500.png"
        alt="ApexEnergy Resources Limited"
        className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-10 sm:w-10 lg:h-[42px] lg:w-[42px]"
        width={42}
        height={42}
        loading="eager"
      />
      <div className="flex min-w-0 flex-col">
        {/* Desktop: full lockup, Mobile: stacked fallback */}
        <span className="hidden font-display text-[12px] font-bold leading-none tracking-[-0.01em] text-[#0F172A] sm:block sm:text-[13px] lg:text-[14px]">
          APEXENERGY RESOURCES LIMITED
        </span>
        {/* Mobile wordmark — two lines to save width */}
        <span className="font-display text-[13px] font-bold leading-none tracking-[-0.02em] text-[#0F172A] sm:hidden">
          APEXENERGY
        </span>
        <span className="font-display hidden text-[10px] font-bold leading-none tracking-[-0.01em] text-[#0F172A] sm:hidden">
          RESOURCES LTD
        </span>
        <span className="mt-0.5 hidden font-mono text-[8.5px] font-medium uppercase tracking-[0.17em] text-[#475569] sm:block lg:text-[9px] lg:tracking-[0.2em]">
          Gas. Energy. Infrastructure
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#94A3B8] sm:hidden">
          Gas Energy Infrastructure
        </span>
      </div>
    </div>
  )
}
