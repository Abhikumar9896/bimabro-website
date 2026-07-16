import { CheckCircle2 } from 'lucide-react'
import { CtaBanner } from '../components/home/CtaBanner'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionLabel } from '../components/ui/SectionLabel'

const stats = [
  { label: 'Families guided', value: '10,000+' },
  { label: 'Businesses served', value: '500+' },
  { label: 'Claim success', value: '98.4%' },
  { label: 'Avg. settlement', value: '7 days' },
]

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,_#dbeafe,_transparent_40%),radial-gradient(circle_at_85%_20%,_#fef3c7,_transparent_35%)]"
          aria-hidden
        />
        <Container className="relative">
          <SectionLabel>About BimaBro</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Insurance that is transparent, ethical, and{' '}
            <span className="text-blue">relationship-driven.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Raghav Jain and Keshav Jain built BimaBro to deliver insurance that feels
            human — empowering informed decisions and long-term partnerships for
            individuals and businesses.
          </p>
          <div className="mt-7">
            <Button size="lg" withArrow>
              Book Consultation
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-3xl font-extrabold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[28px] bg-white p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-extrabold text-navy">Our purpose</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We believe insurance is more than risk protection — it is about building
                trust, empowering informed decisions, and creating lasting partnerships
                that support people at every stage.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Unbiased comparisons across insurers',
                  'Plain-language policy walkthroughs',
                  'Real humans on claims, not chatbots',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[28px] bg-gradient-to-br from-blue to-blue-deep p-8 text-white shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-extrabold">Founders&apos; note</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Raghav Jain and Keshav Jain drive BimaBro by a clear vision — to deliver
                insurance that is transparent, ethical, and relationship-driven. Their
                expertise and commitment to client success shape a professionally managed
                organisation focused on long-term value.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
