import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { entities } from '@/data/entities'

/* ─── Card ──────────────────────────────────────────────────────────── */
function BizCard({ biz }) {
  return (
    <a
      href={biz.href}
      target={biz.href !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl bg-white p-3 md:p-4 transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image — full width on top, inset from card edges */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-60 lg:h-56 xl:h-64">
        <Image
          src={biz.image}
          alt={biz.name}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"

        />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col gap-3 p-5 md:p-6 lg:p-7">

        {/* Number watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-2 right-3 z-0 font-black leading-none tracking-tighter text-[5rem] md:text-[6rem] lg:text-[7rem] text-zinc-100"
        >
          {biz.num}
        </span>

        {/* Text + CTA — sits above watermark */}
        <div className="relative z-[1] flex flex-1 flex-col gap-3">

          {/* Category */}
          {/* <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#c9a84c]">
            {biz.category}
          </p> */}

          {/* Name */}
          <h3 className="font-extrabold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-[#3e2856] text-xl md:text-2xl lg:text-3xl">
            {biz.name}
          </h3>

          {/* Description */}
          <div className="flex flex-col gap-3">
            {biz.description.map((para, i) => (
              <p key={i} className="text-body text-zinc-500 text-sm md:text-base lg:text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* CTA — pinned to bottom right */}
          <div className="mt-auto flex justify-end pt-4">
            <span className="group/btn inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 md:px-5 md:py-2.5 text-xs font-extrabold uppercase tracking-widest text-zinc-700 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-zinc-900">
              Visit Website
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-300 overflow-hidden transition-colors duration-300 group-hover/btn:bg-zinc-900/15">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover/btn:-translate-y-full">
                  <ArrowUpRight size={14} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0">
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </span>
          </div>

        </div>
      </div>
    </a>
  )
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function BusinessSection() {
  return (
    <section className="relative z-10 bg-[#f4f3f0] px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">

      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16 xl:gap-24">

          {/* ── Left — sticky panel ── */}
          <div className="lg:sticky lg:top-44 lg:w-[30%] lg:self-start xl:w-[28%]">

            <h2 className="font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Our<br />
              <span className="text-[#c9a84c]">Entities</span>
            </h2>

            {/* <div className="my-6 h-[2px] w-10 bg-[#c9a84c] md:my-7" /> */}

            <p className="text-body text-zinc-500 text-sm md:text-base lg:text-lg mt-3 md:mt-4">
              Seven purpose-driven entities fostering education, creativity, and community impact.
            </p>

          </div>

          {/* ── Right — card grid ── */}
          <div className="flex-1">
            <ul className="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 list-none m-0 p-0">
              {entities.map((biz) => (
                <li key={biz.num}>
                  <BizCard biz={biz} />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
