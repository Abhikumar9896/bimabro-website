interface SectionLabelProps {
  children: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionLabel({
  children,
  align = 'left',
  className = '',
}: SectionLabelProps) {
  const line = <span className="h-px w-7 bg-blue" aria-hidden />

  if (align === 'center') {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        {line}
        <p className="text-xs font-bold tracking-[0.14em] text-blue uppercase">
          {children}
        </p>
        {line}
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {line}
      <p className="text-xs font-bold tracking-[0.14em] text-blue uppercase">
        {children}
      </p>
    </div>
  )
}
