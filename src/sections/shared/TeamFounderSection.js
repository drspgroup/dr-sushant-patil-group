import Image from 'next/image'
import { Briefcase, MapPin, Building2, Award } from 'lucide-react'
import ReadMore from '@/components/shared/ReadMore'

const roles = [
  { icon: Briefcase, text: 'Chairman at Dr. D. Y. Patil Group of Institutions' },
  { icon: Building2, text: 'Managing Director at Anuja Sushant Patil Global Foundation' },
  { icon: Award,     text: 'Founder & Director at DSP Group' },
  { icon: MapPin,    text: 'Pimpri-Chinchwad, Pune, Maharashtra' },
]

export default function TeamFounderSection() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 lg:space-y-16">

        {/* ── Card ── */}
        <div className="overflow-hidden  ">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: portrait ── */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-0">
              <Image
                src="/dr-sushant-patil.jpeg"
                alt="Dr. Sushant Patil"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* ── Right: content ── */}
            <div className="flex flex-col">

              {/* Body */}
              <div className="flex-1 px-2 py-6 md:px-4 md:py-8 lg:px-10 lg:py-12">
                <h2 className="mb-6 md:mb-8 font-black leading-tight tracking-tight text-zinc-900 text-xl md:text-2xl lg:text-3xl">
                  Dr. Sushant V. Patil
                </h2>

                {/* Mobile — clamped */}
                <div className="md:hidden">
                  <ReadMore lines={4} className="font-semibold leading-relaxed text-zinc-600 text-sm">
                    <div className="space-y-4">
                      <p>
                        Welcome to the Dr. Sushant Patil Group — a dynamic ecosystem of excellence in education, innovation, creativity, and social impact. Through our institutions including DYPCOEI, DYPIMED, DYPTC, DYPSOA, SEAMEDU, TOOLBOX Animation & VFX Studio, and ASPGF, we are committed to shaping future-ready leaders and responsible global citizens.
                      </p>
                      <p>
                        Our focus goes beyond academics. With modern infrastructure, industry-oriented learning, experienced faculty, and a culture of innovation, we empower students with the skills, values, creativity, and confidence needed to thrive in a rapidly evolving world.
                      </p>
                      <p>
                        At Dr. Sushant Patil Group, we believe education is the foundation of transformation. By fostering excellence, entrepreneurship, research, and social responsibility, we help every learner discover their true potential and build a successful, meaningful future.
                      </p>
                    </div>
                  </ReadMore>
                </div>

                {/* Desktop — full */}
                <div className="hidden md:block space-y-4 font-semibold leading-relaxed text-zinc-600
                                text-sm md:text-base lg:text-lg">
                  <p>
                    Welcome to the Dr. Sushant Patil Group — a dynamic ecosystem of excellence in education, innovation, creativity, and social impact. Through our institutions including DYPCOEI, DYPIMED, DYPTC, DYPSOA, SEAMEDU, TOOLBOX Animation & VFX Studio, and ASPGF, we are committed to shaping future-ready leaders and responsible global citizens.
                  </p>
                  <p>
                    Our focus goes beyond academics. With modern infrastructure, industry-oriented learning, experienced faculty, and a culture of innovation, we empower students with the skills, values, creativity, and confidence needed to thrive in a rapidly evolving world.
                  </p>
                  <p>
                    At Dr. Sushant Patil Group, we believe education is the foundation of transformation. By fostering excellence, entrepreneurship, research, and social responsibility, we help every learner discover their true potential and build a successful, meaningful future.
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
                <p className="font-mono text-sm text-zinc-500">Dr. Sushant Patil</p>
                <p className="font-mono text-sm text-zinc-400">
                  Founder &amp; Director&nbsp;
                  <span className="font-semibold text-[#c9a84c]">@DSP Group</span>
                </p>
              </div> */}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
