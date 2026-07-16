import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Header() {
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()
  // Pill starts forming immediately on slight scroll, full at 80px
  const pillOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const pillScaleX = useTransform(scrollY, [0, 80], [0.96, 1])
  const pillScaleY = useTransform(scrollY, [0, 50], [0.85, 1])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-5">
      <Container>
        <div className="relative flex h-[66px] w-full max-w-[1280px] items-center justify-between gap-4 rounded-full px-5 md:px-6">
          {/* Pill background — smoothly fills on scroll via Framer Motion */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            style={{
              opacity: pillOpacity,
              scaleX: pillScaleX,
              scaleY: pillScaleY,
            }}
            aria-hidden
          />

          {/* Left — Logo */}
          <div className="relative">
            <Logo size="md" />
          </div>

          {/* Center — Nav links */}
          <nav
            className="relative hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="text-[15px] font-medium text-ink/70 transition hover:text-ink"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right — CTA + mobile menu */}
          <div className="relative flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex"
              size="md"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Consultation
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-page text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false)
          }}
        >
          <div
            className="absolute inset-x-4 top-[88px] rounded-[28px] bg-white p-6 shadow-[var(--shadow-card)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => undefined}
          >
            <div className="mb-4">
              <Logo size="lg" />
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-page"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Button
              className="mt-4 w-full"
              size="lg"
              onClick={() => {
                setOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
