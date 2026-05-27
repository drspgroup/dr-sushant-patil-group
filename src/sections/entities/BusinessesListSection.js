import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { entities } from '@/data/entities'

function InstitutionRow({ biz }) {
  return (
    <div className="relative overflow-hidden border-b border-zinc-200 py-12 md:py-16 lg:py-12">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">

        {/* ── Left: content ── */}
        <div className="order-2 lg:order-1 flex flex-col gap-5 md:gap-6">

          {/* <span className="pointer-events-none -mb-24 select-none font-black leading-none text-[#c9a84c]/15 text-9xl">
            {biz.num}
          </span> */}

          {/* Name */}
          <h2 className="relative z-10 font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {biz.name}
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-3">
            {biz.description.map((para, i) => (
              <p key={i} className="font-semibold leading-relaxed text-zinc-500 text-sm md:text-base lg:text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <a
            href={biz.href}
            target={biz.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-3 self-start rounded-full border border-zinc-200 bg-zinc-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-700 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-zinc-900 sm:px-6 sm:py-3"
          >
            {biz.href !== '#' ? 'Visit Website' : 'Learn More'}
            <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-zinc-300 transition-colors duration-300 group-hover/cta:bg-zinc-900/15">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover/cta:-translate-y-full">
                <ArrowUpRight size={14} />
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover/cta:translate-y-0">
                <ArrowUpRight size={14} />
              </span>
            </span>
          </a>

        </div>

        {/* ── Right: image ── */}
        <div className="order-1 lg:order-2 relative min-h-64 lg:min-h-0 lg:self-stretch overflow-hidden">
          <Image
            src={biz.image}
            alt={biz.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

      </div>
    </div>
  )
}

export default function BusinessesListSection() {
  return (
    <section className="relative z-10 bg-white px-4 pb-10 md:px-8 md:pb-12 lg:px-12 lg:pb-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ── Institution list ── */}
        <div>
          {entities.map((biz) => (
            <InstitutionRow key={biz.num} biz={biz} />
          ))}
        </div>

      </div>
    </section>
  )
}
