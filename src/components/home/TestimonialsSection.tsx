import { useState, useRef } from 'react'
import { Play, Pause, Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'

export function TestimonialsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handlePlay = (name: string, index: number) => {
    if (playingId === name) {
      videoRefs.current[index]?.pause()
      setPlayingId(null)
    } else {
      videoRefs.current.forEach((video, i) => {
        if (i !== index) {
          video?.pause()
        }
      })
      videoRefs.current[index]?.play()
      setPlayingId(name)
    }
  }

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Loved by 10,000+</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Real people. Real claims.
              <br />
              Real peace of mind.
            </h2>
          </div>
          <div className="flex items-center gap-2 pb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={`t-star-${i}`}
                className="size-5 fill-yellow text-yellow"
                aria-hidden
              />
            ))}
            <p className="ml-1 text-sm font-semibold text-ink">
              4.9 average · 3,200+ reviews
            </p>
          </div>
        </div>

        {/* Video cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={item.name}
              className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-navy shadow-[var(--shadow-card)] cursor-pointer"
              onClick={() => {
                if ('video' in item) handlePlay(item.name, index)
              }}
            >
              {'video' in item ? (
                <>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.video}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loop
                    playsInline
                  />
                  {playingId === item.name && (
                    <div className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                      <Pause className="size-5" aria-hidden />
                    </div>
                  )}
                  {playingId !== item.name && (
                    <div className="absolute inset-0 grid place-items-center bg-black/10 transition-colors group-hover:bg-black/20">
                      <div className="grid size-12 place-items-center rounded-xl bg-black/40 text-white backdrop-blur-sm border border-white/20 shadow-lg">
                        <Play className="size-5" aria-hidden />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={item.image}
                  alt={`${item.name} sharing their BimaBro story`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              )}
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-navy/10" />



              {/* Name — serif at bottom-left */}
              <p className="absolute bottom-6 left-6 font-serif text-2xl text-white sm:text-[1.75rem]">
                {item.name}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-end">
          <Button withArrow>See all reviews</Button>
        </div>
      </Container>
    </section>
  )
}
