'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const col1 = [
  { src: '/entities/dypcoei-campus.jpg', alt: 'dypcoei-campus' },
  { src: '/entities/dyptc-campus.png', alt: 'dyptc-campus' },
  { src: '/entities/dypimed-campus.jpg', alt: 'dypimed-campus' },
  { src: '/entities/aspgf-entities.jpg', alt: 'aspgf-entities' },
  { src: '/entities/dypsoa-campus.png', alt: 'dypsoa-campus' },
  { src: '/entities/toolbox-studio.jpg', alt: 'toolbox-studio' },
]

const col2 = [
  { src: '/entities/dypimed-campus.jpg', alt: 'dypimed-campus' },
  { src: '/entities/dypcoei-campus.jpg', alt: 'dypcoei-campus' },
  { src: '/entities/aspgf-entities.jpg', alt: 'aspgf-entities' },
  { src: '/entities/dyptc-campus.png', alt: 'dyptc-campus' },
  { src: '/entities/toolbox-studio.jpg', alt: 'toolbox-studio' },
  { src: '/entities/dypsoa-campus.png', alt: 'dypsoa-campus' },
]

export default function AboutAmbitionSection() {
  const sectionRef = useRef(null)
  const col1Ref    = useRef(null)
  const col2Ref    = useRef(null)

  useGSAP(() => {
    gsap.to(col1Ref.current, {
      yPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1,
    })
    gsap.fromTo(col2Ref.current,
      { yPercent: -50 },
      { yPercent: 0, ease: 'none', duration: 22, repeat: -1 }
    )

    gsap.fromTo('.amb-item',
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white lg:h-screen"
    >
      <div className="flex h-full w-full flex-col lg:flex-row">

        {/* ── Left — text ── */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:w-[48%] lg:py-8 lg:px-16 xl:px-20">

          <h2 className="amb-item mb-5 font-black leading-tight tracking-tight text-zinc-900 opacity-0 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            BUILT ON<br />
            YEARS<br />
            OF <span className="text-[#c9a84c]">TRUST.</span>
          </h2>

          {/* <p className="amb-item mb-3 max-w-sm font-semibold leading-relaxed text-zinc-600 opacity-0 text-sm md:text-base lg:text-lg">
            Built on the belief that education is a powerful force for transformation, the Dr. Sushant Patil Group brings together institutions dedicated to empowering individuals through knowledge, creativity, innovation, and values-driven growth.
          </p> */}

          <p className="amb-item mb-6 max-w-sm font-semibold leading-relaxed text-zinc-800 opacity-0 text-sm md:text-base lg:text-lg">
            Built on the belief that education is a powerful force for transformation, the Dr. Sushant Patil Group brings together institutions dedicated to empowering individuals through knowledge, creativity, innovation, and values-driven growth.
          </p>

          {/* <div className="amb-item opacity-0">
            <a
              href="/journey"
              className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-700 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-zinc-900 sm:px-6 sm:py-3 sm:text-xs"
            >
              See our Journey
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-300 overflow-hidden transition-colors duration-300 group-hover:bg-zinc-900/15">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  <ArrowUpRight size={14} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </a>
          </div> */}
        </div>

        {/* ── Right — infinite carousel ── */}
        <div className="relative flex w-full gap-2.5 overflow-hidden h-[75vw] px-4 sm:h-[55vw] sm:px-6 md:h-[45vw] md:px-8 lg:h-full lg:w-[52%] lg:pl-0 lg:pr-6 xl:pr-10 2xl:pr-12">

          {/* Fade top & bottom */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent md:h-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent md:h-20" />

          {/* Column 1 */}
          <div className="min-w-0 flex-1 overflow-hidden">
            <div ref={col1Ref} className="flex flex-col gap-2.5">
              {[...col1, ...col1].map((img, i) => (
                <div key={i} className="w-full flex-shrink-0 overflow-hidden rounded-xl h-36 sm:h-44 md:h-48 lg:h-44 xl:h-52">
                  <img src={img.src} alt={img.alt} loading="lazy"
                       className="h-full w-full object-cover" draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 — offset */}
          <div className="min-w-0 flex-1 overflow-hidden">
            <div ref={col2Ref} className="flex flex-col gap-2.5 translate-y-12">
              {[...col2, ...col2].map((img, i) => (
                <div key={i} className="w-full flex-shrink-0 overflow-hidden rounded-xl h-36 sm:h-44 md:h-48 lg:h-44 xl:h-52">
                  <img src={img.src} alt={img.alt} loading="lazy"
                       className="h-full w-full object-cover" draggable={false} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
