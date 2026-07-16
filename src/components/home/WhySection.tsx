import { Info, Lightbulb, Phone, Sparkles, Sunrise } from 'lucide-react'
import { WHY_CARDS } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const iconFor = {
  claim: Sparkles,
  expert: Sunrise,
  fast: Info,
  e2e: Phone,
  transparent: Lightbulb,
} as const

export function WhySection() {
  const featured = WHY_CARDS.find((c) => c.tone === 'featured')!
  const rest = WHY_CARDS.filter((c) => c.tone !== 'featured')

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionLabel align="center">Why BimaBro</SectionLabel>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
          Built like a friend.{' '}
          <span className="text-blue">Trusted like an expert.</span>
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_1fr_1fr] lg:grid-rows-2 lg:gap-5">
          <WhyCard card={featured} className="min-h-[300px] lg:row-span-2" />
          {rest.map((card) => (
            <WhyCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function WhyCard({
  card,
  className = '',
}: {
  card: (typeof WHY_CARDS)[number]
  className?: string
}) {
  const Icon = iconFor[card.id as keyof typeof iconFor]
  const featured = card.tone === 'featured'

  const shell =
    card.tone === 'featured'
      ? 'bg-[#B8B5F0] text-white'
      : card.tone === 'lavender'
        ? 'bg-[#F3F1FF] text-ink'
        : card.tone === 'peach'
          ? 'bg-[#FFF1E6] text-ink'
          : 'bg-white text-ink shadow-[var(--shadow-card)]'

  return (
    <article
      className={`rounded-[28px] p-6 transition duration-200 hover:-translate-y-0.5 sm:p-7 ${shell} ${className}`}
    >
      <span
        className={`mb-5 grid size-11 place-items-center rounded-2xl ${
          featured
            ? 'bg-[#FFE08A] text-navy'
            : card.tone === 'lavender'
              ? 'bg-white text-lavender-deep'
              : card.tone === 'peach'
                ? 'bg-white text-orange'
                : 'bg-page text-navy'
        }`}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <h3
        className={`text-xl font-extrabold ${featured ? 'text-white' : 'text-navy'}`}
      >
        {card.title}
      </h3>
      <p
        className={`mt-2 max-w-sm text-sm leading-relaxed ${
          featured ? 'text-white/90' : 'text-muted'
        }`}
      >
        {card.description}
      </p>
    </article>
  )
}
