import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'h-8',
  md: 'h-8',
  lg: 'h-9',
} as const

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center no-underline ${className}`}
      aria-label="BimaBro home"
    >
      <img
        src="/images/logo.png"
        srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
        alt="BimaBro"
        width={160}
        height={44}
        className={`block ${sizeClass[size]} w-auto object-contain`}
        decoding="async"
      />
    </Link>
  )
}
