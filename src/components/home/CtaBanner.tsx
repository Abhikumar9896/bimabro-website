import { Phone, Zap } from 'lucide-react'
import { CONTACT } from '../../data/site'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CtaBanner() {
  const displayPhone = CONTACT.phones[0]

  return (
    <section id="contact" className="scroll-mt-28 pb-16 md:pb-24">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-blue px-6 py-11 text-white shadow-[var(--shadow-card)] sm:px-10 sm:py-14 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <Badge tone="white" className="mb-5 !bg-white/15 !text-white">
                <span className="grid size-5 place-items-center rounded-full bg-yellow text-navy">
                  <Zap className="size-3" aria-hidden />
                </span>
                100% free, no obligation
              </Badge>
              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Still Confused about insurance?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                Still confused about insurance? Let your Bro help you choose. One
                free call. Zero pressure. Clarity, for life.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-stretch">
              <Button size="lg" withArrow className="w-full justify-center">
                Book Consultation
              </Button>
              <a
                href={`tel:${displayPhone.replace(/\s/g, '')}`}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone className="size-4" aria-hidden />
                Call {displayPhone}
              </a>
              <p className="text-center text-xs text-white/75">
                Avg response time under 2 mins
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
