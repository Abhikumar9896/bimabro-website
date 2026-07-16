import { AnimatePresence, motion } from 'framer-motion'
import { Check, Cloud, HeartHandshake, Phone, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { HOW_STEPS } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

const icons = {
  cloud: Cloud,
  phone: Phone,
  shield: Shield,
  'heart-hand': HeartHandshake,
} as const

export function HowItWorksSection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLElement | null)[]>([])
  const current = HOW_STEPS[active]
  const Icon = icons[current.icon]

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[]
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          const index = Number((visible[0].target as HTMLElement).dataset.stepIndex)
          if (!Number.isNaN(index)) setActive(index)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: [0.15, 0.4, 0.65],
      },
    )

    for (const node of nodes) observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="scroll-mt-28 py-16 md:py-24">
      <Container>
        <SectionLabel align="center">How BimaBro Works</SectionLabel>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
          Your Insurance Bro,{' '}
          <span className="text-blue">every step of the way.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Not a sales funnel. A friendship that protects.
        </p>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0.5, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.45, scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className={`relative flex min-h-[470px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br ${current.gradient} p-8 text-white shadow-[var(--shadow-card)]`}
              >
                <p className="text-xs font-bold tracking-[0.16em] text-white/85 uppercase">
                  Steps {current.step}/04
                </p>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-8 grid place-items-center">
                    <div className="grid size-28 place-items-center rounded-[28px] bg-white/20 backdrop-blur-sm">
                      <Icon className="size-14 text-white" strokeWidth={1.5} aria-hidden />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold">{current.cardTitle}</h3>
                  <p className="mt-2 text-sm text-white/90">{current.accent}</p>
                </div>
                <div className="mt-8 flex gap-2" aria-hidden>
                  {HOW_STEPS.map((step, index) => (
                    <span
                      key={step.step}
                      className={`h-1.5 flex-1 rounded-full transition ${
                        index === active ? 'bg-white' : 'bg-white/35'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            {HOW_STEPS.map((step, index) => {
              const isActive = index === active
              const StepIcon = icons[step.icon]
              return (
                <article
                  key={step.step}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  data-step-index={index}
                  className={`border-b border-ink/8 py-10 transition last:border-b-0 first:pt-0 ${
                    isActive ? 'opacity-100' : 'opacity-50'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {/* Mobile step preview card */}
                  <div
                    className={`mb-5 flex items-center gap-4 rounded-3xl bg-gradient-to-br p-4 text-white lg:hidden ${step.gradient}`}
                  >
                    <span className="grid size-14 place-items-center rounded-2xl bg-white/20">
                      <StepIcon className="size-7" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase">
                        Steps {step.step}/04
                      </p>
                      <p className="text-lg font-extrabold">{step.cardTitle}</p>
                    </div>
                  </div>

                  <p className="text-xs font-bold tracking-[0.14em] text-blue uppercase">
                    Step {step.step}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-navy sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                    {step.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {step.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/80"
                      >
                        <span className="grid size-5 place-items-center rounded-full bg-blue-soft text-blue">
                          <Check className="size-3" strokeWidth={3} aria-hidden />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
