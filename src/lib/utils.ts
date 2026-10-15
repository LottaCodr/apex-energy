import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNaira(amount: number, compact = false): string {
  if (compact) {
    if (amount >= 1_000_000_000) {
      return `₦${(amount / 1_000_000_000).toFixed(2)}B`
    }
    if (amount >= 1_000_000) {
      return `₦${(amount / 1_000_000).toFixed(2)}M`
    }
    if (amount >= 1_000) {
      return `₦${(amount / 1_000).toFixed(0)}K`
    }
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('en-NG', {
    maximumFractionDigits,
  }).format(value)
}
