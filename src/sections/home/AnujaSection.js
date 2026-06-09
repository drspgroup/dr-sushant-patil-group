import Image from 'next/image'
import { Briefcase, MapPin, Building2, Award } from 'lucide-react'
import ReadMore from '@/components/shared/ReadMore'

const roles = [
  { icon: Briefcase, text: 'Managing Director at DSP Group' },
  { icon: Building2, text: 'Director at Anuja Sushant Patil Global Foundation' },
  { icon: Award,     text: 'Advocate & Legal Advisor, Pune District Court' },
  { icon: MapPin,    text: 'Pimpri-Chinchwad, Pune, Maharashtra' },
]

export default function AnujaSection() {
  return (
    <section className="relative z-10 bg-white px-4 pb-10 md:px-8 md:pb-12 lg:px-12 lg:pb-16 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 lg:space-y-16">

        {/* ── Card ── */}
        <article className="overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: content ── */}
            <div className="flex flex-col order-2 lg:order-1">

              {/* Body */}
              <div className="flex-1 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">

                {/* Mobile — clamped */}
                <div className="md:hidden">
                  <ReadMore lines={4} className="text-body text-zinc-600 text-sm">
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
                <div className="hidden md:block space-y-4 text-body text-zinc-600
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

              </div>

              {/* Footer: name + title */}
              <footer className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6">
                <p className="text-name text-zinc-900 text-xl md:text-2xl lg:text-3xl">Adv. Anuja Sushant Patil</p>
                <p className="text-role text-zinc-600 text-base">
                  Founder, Dr. Sushant Patil Group
                </p>
              </footer>

            </div>

            {/* ── Right: portrait ── */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-0 order-1 lg:order-2">
              <Image
                src="/adv-anuja-patil.jpg"
                alt="Adv. Anuja Patil"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

          </div>
        </article>

      </div>
    </section>
  )
}
