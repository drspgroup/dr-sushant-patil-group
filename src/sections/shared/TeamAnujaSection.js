import Image from 'next/image'
import { Briefcase, MapPin, Building2, Award } from 'lucide-react'
import ReadMore from '@/components/shared/ReadMore'

const roles = [
  { icon: Briefcase, text: 'Managing Director at DSP Group' },
  { icon: Building2, text: 'Director at Anuja Sushant Patil Global Foundation' },
  { icon: Award,     text: 'Advocate & Legal Advisor, Pune District Court' },
  { icon: MapPin,    text: 'Pimpri-Chinchwad, Pune, Maharashtra' },
]

export default function TeamAnujaSection() {
  return (
    <section className="relative z-10 bg-white px-4 pb-10 md:px-8 md:pb-12 lg:px-12 lg:pb-16 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 lg:space-y-16">

        {/* ── Card ── */}
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: content ── */}
            <div className="flex flex-col order-2 lg:order-1">

              {/* Body */}
              <div className="flex-1 px-2 py-6 md:px-4 md:py-8 lg:px-10 lg:py-12">
                <h2 className="mb-6 md:mb-8 font-black leading-tight tracking-tight text-zinc-900
                               text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Adv. Anuja Sushant Patil
                </h2>

                {/* Mobile — clamped */}
                <div className="md:hidden">
                  <ReadMore lines={4} className="font-semibold leading-relaxed text-zinc-600 text-sm">
                    <div className="space-y-4">
                      <p>
                        At Dr. Sushant Patil Group, we believe education goes beyond degrees — it is about inspiring minds, transforming lives, and shaping future leaders. Our institutions, including DYPCOEI, DYPIMED, DYPTC, DYPSOA, Seamedu, Toolbox Animation & VFX Studio, and the Anuja Sushant Patil Global Foundation, are dedicated to delivering academic excellence with innovation, creativity, ethics, and social responsibility.
                      </p>
                      <p>
                        We strive to create a dynamic learning ecosystem with modern infrastructure, industry-focused education, experienced mentors, and opportunities that foster innovation, leadership, entrepreneurship, and holistic growth. Beyond knowledge and skills, we aim to instill values, integrity, and a strong sense of purpose in every student.
                      </p>
                      <p>
                        Our mission is to empower students to achieve excellence, overcome challenges, and become compassionate professionals and responsible global citizens. Together, we aspire to build a future driven by knowledge, innovation, and values.
                      </p>
                    </div>
                  </ReadMore>
                </div>

                {/* Desktop — full */}
                <div className="hidden md:block space-y-4 font-semibold leading-relaxed text-zinc-600
                                text-sm md:text-base lg:text-lg">
                  <p>
                    At Dr. Sushant Patil Group, we believe education goes beyond degrees — it is about inspiring minds, transforming lives, and shaping future leaders. Our institutions, including DYPCOEI, DYPIMED, DYPTC, DYPSOA, Seamedu, Toolbox Animation & VFX Studio, and the Anuja Sushant Patil Global Foundation, are dedicated to delivering academic excellence with innovation, creativity, ethics, and social responsibility.
                  </p>
                  <p>
                    We strive to create a dynamic learning ecosystem with modern infrastructure, industry-focused education, experienced mentors, and opportunities that foster innovation, leadership, entrepreneurship, and holistic growth. Beyond knowledge and skills, we aim to instill values, integrity, and a strong sense of purpose in every student.
                  </p>
                  <p>
                    Our mission is to empower students to achieve excellence, overcome challenges, and become compassionate professionals and responsible global citizens. Together, we aspire to build a future driven by knowledge, innovation, and values.
                  </p>
                </div>

                {/* ── Meta rows ── */}
                {/* <div className="mt-6 md:mt-8">
                  {roles.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border-b border-zinc-200 py-3 text-zinc-600
                                 text-sm md:text-base lg:text-lg"
                    >
                      <span className="shrink-0 text-[#c9a84c]">
                        <row.icon size={16} />
                      </span>
                      {row.text}
                    </div>
                  ))}
                </div> */}

              </div>

              {/* Footer: name + title */}
              {/* <div className="px-10 py-5">
                <p className="font-mono text-sm text-zinc-500">Adv. Anuja Patil</p>
                <p className="font-mono text-sm text-zinc-400">
                  Managing Director&nbsp;
                  <span className="font-semibold text-[#c9a84c]">@DSP Group</span>
                </p>
              </div> */}

            </div>

            {/* ── Right: portrait ── */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-0 order-1 lg:order-2">
              <Image
                src="/adv-anuja-patil.jpg"
                alt="Adv. Anuja Patil"
                fill

                className="object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
