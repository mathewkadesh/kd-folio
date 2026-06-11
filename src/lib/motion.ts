import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const stagger = (staggerChildren = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const cardHover = {
  rest: { y: 0, scale: 1, borderColor: 'rgba(255,255,255,0.08)' },
  hover: {
    y: -6,
    scale: 1.01,
    borderColor: 'rgba(229,9,20,0.45)',
    transition: { type: 'spring', stiffness: 300, damping: 22 },
  },
}

export const profileCardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.03,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

export const buttonTap = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
