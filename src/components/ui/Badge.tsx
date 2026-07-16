import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  tone?: 'blue' | 'yellow' | 'soft' | 'white'
}

const tones = {
  blue: 'bg-blue-soft text-blue',
  yellow: 'bg-yellow-soft text-yellow-deep',
  soft: 'bg-white text-ink shadow-[var(--shadow-nav)]',
  white: 'bg-white/20 text-white',
} as const

export function Badge({ children, className = '', tone = 'blue' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
