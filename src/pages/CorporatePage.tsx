import {
  Building2,
  CheckCircle2,
  Lock,
  Scale,
  Ship,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/home/CtaBanner'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionLabel } from '../components/ui/SectionLabel'

const corporateProducts = [
  {
    title: 'Employee Benefits',
    description: 'Group health, wellness add-ons and benefits that retain your teams.',
    icon: Users,
  },
  {
    title: 'Marine Cargo',
    description: 'Transit cover across inland and ocean routes with claims coordination.',
    icon: Ship,
  },
  {
    title: 'Liability',
    description: 'Public, product and professional liability structured for your contracts.',
    icon: Scale,
  },
  {
    title: 'Property & Assets',
    description: 'Fire, burglary and all-risk protection for offices, plants and warehouses.',
    icon: Building2,
  },
  {
    title: 'Surety Bonds',
    description: 'Bid, performance and advance payment bonds that unlock bigger projects.',
    icon: Lock,
  },
]

export function CorporatePage() {
  return (
    <>
      <section id="surety" className="relative overflow-hidden pt-10 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,_#dbeafe,_transparent_40%),radial-gradient(circle_at_90%_0%,_#ede9fe,_transparent_35%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionLabel>Corporate Insurance</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Coverage that scales with{' '}
            <span className="text-blue">your business.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            From employee benefits to surety bonds, BimaBro maps risk across operations,
            contracts and growth plans — then places cover with clear commercial reasoning.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" withArrow>
              Talk to Corporate Desk
            </Button>
            <Link to="/retail">
              <Button size="lg" variant="secondary">
                Explore Retail
              </Button>
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-ink/80">
            {['IRDAI-aligned advisory', 'Multi-insurer comparisons', 'Dedicated claim desk'].map(
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
            {corporateProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-[28px] bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-blue-soft text-blue">
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
