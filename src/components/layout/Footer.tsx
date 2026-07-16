import { Mail, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, FOOTER_LINKS } from '../../data/site'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

function SocialIcon({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:border-blue/30 hover:bg-blue-soft hover:text-blue"
    >
      {children}
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white pt-14 pb-8">
      <Container>
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <div className="max-w-[260px] lg:col-span-1">
            <Logo size="lg" />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {CONTACT.tagline}
            </p>
          </div>

          <FooterColumn title="Corporate" links={FOOTER_LINKS.corporate} />
          <FooterColumn title="Retail" links={FOOTER_LINKS.retail} />
          <FooterColumn title="Support" links={FOOTER_LINKS.support} />

          <div>
            <h3 className="text-sm font-bold text-ink">Visit us</h3>
            <address className="mt-3 space-y-1 text-sm leading-relaxed text-muted not-italic">
              {CONTACT.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold text-ink">Connect us with</h3>
            <div className="mt-3 flex gap-1">
              <SocialIcon label="WhatsApp">
                <WhatsAppIcon />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/8 pt-6 text-sm text-muted">
          {CONTACT.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-blue"
            >
              <Phone className="size-4 text-blue" aria-hidden />
              {phone}
            </a>
          ))}
          {CONTACT.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-blue"
            >
              <Mail className="size-4 text-blue" aria-hidden />
              {email}
            </a>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 BimaBro Advisory Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/#" className="hover:text-ink">
              Privacy
            </Link>
            <Link to="/#" className="hover:text-ink">
              Terms
            </Link>
            <Link to="/#" className="hover:text-ink">
              Disclosure
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-bold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-muted transition hover:text-blue"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
