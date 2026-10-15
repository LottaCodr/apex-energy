import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.99]',
  {
    variants: {
      variant: {
        default:
          'bg-[#059669] text-white shadow-sm hover:bg-[#047857] border border-[#047857]/30',
        cryo:
          'bg-[#0284C7] text-white shadow-sm hover:bg-[#0369A1] border border-[#0369A1]/30',
        dark:
          'bg-[#0B131E] text-[#F8FAFC] shadow-sm hover:bg-[#1E293B] border border-slate-800',
        outline:
          'border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#CBD5E1]',
        outlineDark:
          'border border-white/15 bg-white/5 text-[#F8FAFC] hover:bg-white/10 hover:border-white/25',
        ghost:
          'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]',
        amber:
          'bg-[#D97706] text-white shadow-sm hover:bg-[#B45309]',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 rounded-md px-3.5 text-xs',
        lg: 'h-12 rounded-xl px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
