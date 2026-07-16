import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'footer' | 'header'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`container-bb ${className}`}>
      {children}
    </Tag>
  )
}
