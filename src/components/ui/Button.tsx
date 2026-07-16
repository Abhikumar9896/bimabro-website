import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'blueSoft'
type Size = 'md' | 'lg' | 'sm'

const variantClass: Record<Variant, string> = {
  primary:
    'bg-yellow text-navy shadow-[var(--shadow-cta)] hover:brightness-[0.98] active:translate-y-px',
  secondary:
    'bg-white text-ink border border-ink/15 shadow-[var(--shadow-nav)] hover:bg-blue-soft/50',
  ghost:
    'bg-transparent text-ink border border-ink/10 hover:bg-white',
  blueSoft:
    'bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm',
}

const sizeClass: Record<Size, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  withArrow?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow ? <ArrowRight className="size-4 shrink-0" aria-hidden /> : null}
    </button>
  )
}
