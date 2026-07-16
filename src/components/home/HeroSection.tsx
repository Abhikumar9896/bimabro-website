import { CheckCircle2, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TRUST_POINTS } from '../../data/site'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#dbeafe_0%,_transparent_45%),radial-gradient(ellipse_at_top_right,_#fef3c7_0%,_transparent_40%)]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl"
        >
          <Badge tone="soft" className="mb-6">
            <span className="grid size-5 place-items-center rounded-full bg-blue text-white">
              <Sparkles className="size-3" aria-hidden />
            </span>
            Trusted by 10,000+ families & 500+ businesses
          </Badge>

          <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Insurance made{' '}
            <span className="text-blue">simple.</span>
            <br />
            Your{' '}
            <span className="relative inline-block px-0.5">
              Bro
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 120 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8c18-5 38-6 58-4 22 2 40 3 58 1"
                  stroke="#F5C518"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            guides every step.
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base">
            From choosing the right policy to claims assistance, BimaBro helps
            individuals and businesses make smarter insurance decisions — without
            the jargon, paperwork or sales pressure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" withArrow>
              Book Free Consultation
            </Button>
            <Link to="/#categories">
              <Button size="lg" variant="secondary">
                Explore Insurance
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3" aria-hidden>
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-11 rounded-full border-[2.5px] border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`star-${i}`}
                    className="size-4 fill-yellow text-yellow"
                    aria-hidden
                  />
                ))}
                <span className="ml-1 text-sm font-bold text-ink">4.9/5</span>
              </div>
              <p className="text-xs text-muted sm:text-sm">
                10,000+ Happy Customers · IRDAI advisory
              </p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/80"
              >
                <CheckCircle2 className="size-4 shrink-0 text-blue" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <div className="relative">
            <img
              src="/images/hero-advisor.png"
              alt="BimaBro advisor with live policy insights"
              className="block h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
