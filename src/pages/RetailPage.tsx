import {
  Car,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Home,
  MapPin,
  Shield,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionLabel } from '../components/ui/SectionLabel'
import { CtaBanner } from '../components/home/CtaBanner'

const retailProducts = [
  {
    title: 'Health Insurance',
    description: 'Family floaters, critical illness and senior care with clear wardroom guidance.',
    icon: Heart,
  },
  {
    title: 'Motor Insurance',
    description: 'Comprehensive and third-party cover with instant renewals and claim desk support.',
    icon: Car,
  },
  {
    title: 'Travel Insurance',
    description: 'Trip and annual plans for students, families and frequent flyers.',
    icon: MapPin,
  },
  {
    title: 'Life Cover',
    description: 'Term plans that protect income and family goals without scary fine print.',
    icon: HeartHandshake,
  },
  {
    title: 'Home Insurance',
    description: 'Structure and contents protection for apartments and independent houses.',
    icon: Home,
  },
  {
    title: 'Personal Accident',
    description: 'Affordable add-on protection for everyday unexpected risks.',
    icon: Shield,
  },
]

export function RetailPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#fef3c7,_transparent_40%),radial-gradient(circle_at_80%_0%,_#dbeafe,_transparent_35%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionLabel>Retail Insurance</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Personal cover,{' '}
            <span className="text-blue">explained like a Bro.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Health, motor, travel, life and home — compared side by side by IRDAI-guided
            advisors. No jargon, no product pushing, just the plan that fits your life.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" withArrow>
              Book Free Consultation
            </Button>
            <Link to="/corporate">
              <Button size="lg" variant="secondary">
                Explore Corporate
              </Button>
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-ink/80">
            {['Family-first recommendations', 'Same-day policy help', 'Lifetime claim desk'].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retailProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-[28px] bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-yellow-soft text-yellow-deep">
                  <product.icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-5 text-xl font-extrabold text-navy">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
