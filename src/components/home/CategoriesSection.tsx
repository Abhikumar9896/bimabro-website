import {
  Building2,
  Car,
  ChevronRight,
  Heart,
  HeartHandshake,
  Home,
  Lock,
  MapPin,
  Scale,
  Ship,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CORPORATE_TYPES, RETAIL_TYPES } from '../../data/site'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const iconMap = {
  users: Users,
  ship: Ship,
  scale: Scale,
  building: Building2,
  lock: Lock,
  heart: Heart,
  car: Car,
  'map-pin': MapPin,
  'heart-hand': HeartHandshake,
  home: Home,
} as const

export function CategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-28 py-16 md:py-24">
      <Container>
        <SectionLabel>Insurance Categories</SectionLabel>
        <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
          One Bro. Every kind of cover.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
          Whether you&apos;re protecting your family or your fast-growing company,
          BimaBro brings unbiased advice across every category.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CategoryCard
            badge="For Businesses"
            badgeTone="blue"
            title="Corporate Insurance"
            description="Group covers, liability, marine and project risk — designed around how your business actually operates."
            items={CORPORATE_TYPES}
            accent="blue"
            ctaLabel="Explore Corporate"
            to="/corporate"
          />
          <CategoryCard
            badge="For Individuals"
            badgeTone="yellow"
            title="Retail Insurance"
            description="Health, motor, travel, life and home — clear options for families without the insurance jargon."
            items={RETAIL_TYPES}
            accent="yellow"
            ctaLabel="Explore Retail"
            to="/retail"
          />
        </div>
      </Container>
    </section>
  )
}

function CategoryCard({
  badge,
  badgeTone,
  title,
  description,
  items,
  accent,
  ctaLabel,
  to,
}: {
  badge: string
  badgeTone: 'blue' | 'yellow'
  title: string
  description: string
  items: readonly { label: string; icon: keyof typeof iconMap }[]
  accent: 'blue' | 'yellow'
  ctaLabel: string
  to: string
}) {
  const glow =
    accent === 'blue'
      ? 'bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_55%)]'
      : 'bg-[radial-gradient(circle_at_top_right,_rgba(245,197,24,0.28),_transparent_55%)]'
  const chip =
    accent === 'blue'
      ? 'border-blue/20 bg-blue-soft/40 text-blue'
      : 'border-yellow-deep/25 bg-yellow-soft/50 text-yellow-deep'
  const link = accent === 'blue' ? 'text-blue' : 'text-yellow-deep'

  return (
    <article
      className={`relative overflow-hidden rounded-[28px] bg-white p-7 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 sm:p-9 ${glow}`}
    >
      <Badge tone={badgeTone}>{badge}</Badge>
      <h3 className="mt-5 text-2xl font-extrabold text-navy sm:text-[1.75rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-7 grid grid-cols-3 gap-2.5 sm:grid-cols-5 sm:gap-3">
        {items.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div
              key={item.label}
              className={`flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 shadow-sm ${chip}`}
            >
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              <span className="text-center text-[11px] font-semibold leading-tight">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      <Link
        to={to}
        className={`mt-8 inline-flex items-center gap-1 text-sm font-bold transition hover:gap-1.5 ${link}`}
      >
        {ctaLabel}
        <ChevronRight className="size-4" aria-hidden />
      </Link>
    </article>
  )
}
