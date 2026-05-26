'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { journeySteps } from '@/data/journey'

gsap.registerPlugin(ScrollTrigger)

export default function JourneySectionTimelineV2({ showHeader = true }) {
  const wrapperRef     = useRef(null)
  const imageRef       = useRef(null)
  const textRef        = useRef(null)
  const bgYearRef      = useRef(null)
  const fillRef        = useRef(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end:   'bottom bottom',
      onUpdate: (self) => {
        const idx = Math.min(
          Math.floor(self.progress * journeySteps.length),
          journeySteps.length - 1
        )
        if (idx !== activeIndexRef.current) {
          activeIndexRef.current = idx
          setActiveIndex(idx)
        }
      },
    })
  }, { scope: wrapperRef })

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 0.94, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power3.out' }
    )
    tl.fromTo(textRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '<0.08'
    )
    tl.fromTo(bgYearRef.current,
      { opacity: 0 },
      { opacity: 0.06, duration: 0.5, ease: 'power1.out' },
      '<'
    )
    const fillPct = (activeIndex / (journeySteps.length - 1)) * 100
    gsap.to(fillRef.current, { width: `${fillPct}%`, duration: 0.5, ease: 'power2.out' })
  }, { dependencies: [activeIndex], scope: wrapperRef })

  const scrollToStep = (i) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const top = wrapper.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + (i / journeySteps.length) * wrapper.offsetHeight, behavior: 'smooth' })
  }

  const step = journeySteps[activeIndex]

  return (
    <>
    
    {/* ════════════════════════════════════════════════
        MOBILE — static vertical timeline (below md)
    ════════════════════════════════════════════════ */}
    <section className="block md:hidden bg-[#e8e6e0] px-4 py-12 sm:px-8 sm:py-16">

      {showHeader && (
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Journey
          </p>
          <h2 className="mt-0.5 font-black leading-tight tracking-tight text-zinc-900 text-3xl">
            See Where We <span className="text-[#c9a84c]">Started</span>
          </h2>
        </header>
      )}

      <ol className="relative">

        {journeySteps.map((s, i) => (
          <li key={s.id} className="relative flex gap-5 mb-8 last:mb-0">

            {/* Line from this dot to next — hidden on last item */}
            {i < journeySteps.length - 1 && (
              <div className="absolute left-[6px] top-[11px] bottom-[-43px] w-[2px] bg-zinc-300 rounded-full" />
            )}

            {/* Dot */}
            <div className="relative z-10 mt-1 flex-shrink-0 h-3.5 w-3.5 rounded-full
                            bg-[#c9a84c] border-2 border-[#c9a84c]
                            shadow-[0_0_0_3px_rgba(201,168,76,0.25)]" />

            {/* Card */}
            <article className="flex-1">
              <time dateTime={s.year} className="block text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-2">
                {s.year}
              </time>
              <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <h3 className="font-extrabold leading-snug text-zinc-900 text-xl">
                  {s.caption}
                </h3>
                <p className="mt-2 font-semibold leading-relaxed text-zinc-500 text-sm md:text-base">
                  {s.desc}
                </p>
              </div>
            </article>

          </li>
        ))}
      </ol>
    </section>

    {/* ════════════════════════════════════════════════
        DESKTOP — sticky scroll timeline (md and up)
    ════════════════════════════════════════════════ */}
    <div className="hidden md:block">
    <div ref={wrapperRef} style={{ height: `${journeySteps.length * 100}vh` }}>
      <section className="sticky top-20 lg:top-24 xl:top-28 flex h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] xl:h-[calc(100vh-7rem)] flex-col bg-[#e8e6e0]">

        {showHeader && (
          <header className="flex-none px-4 pt-6 pb-2 md:px-8 md:pt-8 md:pb-4 lg:px-12 lg:pt-10 xl:px-16">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Our Journey
            </p>
            <h2 className="mt-0.5 font-black leading-tight tracking-tight text-zinc-900
                           text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              See Where We <span className="text-[#c9a84c]">Started</span>
            </h2>
          </header>
        )}

        {!showHeader && <div className="flex-none h-4 md:h-6" />}

        {/* ── Content ── */}
        <div className="relative flex min-h-0 flex-1 flex-col gap-3 overflow-hidden
                        px-4 pt-2 pb-1
                        md:flex-row md:items-center md:gap-10 md:px-8 md:pt-0 md:pb-0
                        lg:gap-14 lg:px-12 xl:px-16">

          <div className="pointer-events-none absolute inset-0 hidden items-center justify-end md:flex">
            <span
              ref={bgYearRef}
              className="select-none font-black leading-none text-zinc-900"
              style={{ fontSize: '22vw', opacity: 0 }}
            >
              {step.year}
            </span>
          </div>

          {/* Photo */}
          <div ref={imageRef} className="relative z-10 w-full flex-shrink-0 md:w-auto">
            <div className="w-full overflow-hidden rounded-xl ring-[3px] ring-white shadow-md
                            h-[150px]
                            sm:h-[185px] sm:rounded-2xl sm:shadow-lg sm:ring-4
                            md:h-[400px] md:w-[380px] md:rounded-2xl md:shadow-xl md:ring-[5px]
                            lg:h-[295px] lg:w-[430px]
                            xl:h-[320px] xl:w-[480px]">
              <img
                src={step.image}
                alt={step.caption}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="relative z-10 flex-1">
            <h2 className="font-black leading-tight tracking-tight text-zinc-800
                          text-3xl mb-1.5
                          md:text-4xl md:mb-4
                          lg:text-5xl
                          xl:text-6xl">
              {step.caption}
            </h2>
            <p className="font-semibold leading-relaxed text-zinc-500
                          text-sm line-clamp-3
                          md:text-base md:line-clamp-none md:max-w-sm
                          lg:text-lg lg:max-w-md">
              {step.desc}
            </p>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="flex-none px-4 pb-6 pt-3
                        sm:pb-7 sm:pt-3
                        md:px-8 md:pb-8 md:pt-5
                        lg:px-12 lg:pb-10 xl:px-16">

          <div className="mb-2 flex justify-between md:mb-3">
            {journeySteps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollToStep(i)}
                className={`font-bold tracking-wide transition-colors duration-300 hover:text-zinc-700
                  text-[0.48rem] sm:text-[0.55rem] md:text-[0.62rem] lg:text-[0.7rem]
                  ${i === activeIndex ? 'text-[#c9a84c]' : 'text-zinc-400'}`}
              >
                {s.year}
              </button>
            ))}
          </div>

          <div className="relative flex h-5 items-center">
            <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-zinc-300" />
            <div
              ref={fillRef}
              className="absolute left-0 top-1/2 h-[2px] w-0 -translate-y-1/2 rounded-full bg-[#c9a84c]"
            />
            {journeySteps.map((s, i) => {
              const pct       = (i / (journeySteps.length - 1)) * 100
              const isPast    = i <  activeIndex
              const isCurrent = i === activeIndex
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(i)}
                  aria-label={s.year}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                    isCurrent
                      ? 'h-3 w-3 border-[#c9a84c] bg-[#c9a84c] shadow-[0_0_0_3px_rgba(201,168,76,0.25)] md:h-[15px] md:w-[15px] md:shadow-[0_0_0_4px_rgba(201,168,76,0.22)]'
                      : isPast
                      ? 'h-2 w-2 border-[#c9a84c] bg-[#c9a84c] md:h-2.5 md:w-2.5'
                      : 'h-2 w-2 border-zinc-300 bg-white md:h-2.5 md:w-2.5'
                  }`}
                  style={{ left: `${pct}%` }}
                />
              )
            })}
          </div>
        </div>

      </section>
    </div>
    </div> {/* end hidden md:block */}

    </> /* end fragment */
  )
}
