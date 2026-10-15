import type { Variants, Transition } from 'framer-motion'

export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const subtleTransition: Transition = {
  duration: 0.55,
  ease: EASE_OUT_EXPO,
}

export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: subtleTransition,
  },
}

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const scaleFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.985,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
    },
  },
}
