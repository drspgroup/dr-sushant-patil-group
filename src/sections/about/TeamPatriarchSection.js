import Image from 'next/image'

const credentials = [
  {
    label: 'Public Service',
    value:
      'Former Governor of Tripura, Bihar & West Bengal | Former Maharashtra MLA',
  },

  {
    label: 'Education Leadership',
    value:
      'Founder of the D.Y. Patil Group | Established 180+ Institutions, 3 Deemed Universities & 6 Private Universities',
  },

  {
    label: 'Healthcare & Medical Impact',
    value:
      'Established Leading Hospitals & Medical Institutions Serving Communities Across India',
  },

  {
    label: 'Awards & Recognition',
    value:
      'Padma Shri Awardee (1991) | Lokmat Maharashtrian of the Year (2018) | Recipient of International Honorary Doctorates',
  },

  {
    label: 'Vision & Legacy',
    value:
      'Empowering Generations Through Education, Healthcare, Social Service & Nation Building',
  },

  {
    label: 'Philanthropy & Social Impact',
    value:
      'Lifelong Contributions Towards Educational, Social, Cultural & Rural Community Development',
  },
]

export default function TeamPatriarchSection() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 lg:space-y-16">

        {/* ── Image ── */}
        <div className="w-full overflow-hidden">
          <Image
            src="/padmashree-dy-patil.jpg"
            alt="Padmashree Dr. D.Y. Patil"
            width={0}
            height={0}
            sizes="100vw"

            className="w-full h-auto object-top"
          />
        </div>

        {/* ── Content ── */}
        <div className="mt-8 md:mt-12 lg:mt-14">

          {/* Eyebrow */}
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#c9a84c] text-xs md:text-sm">
            Our Inspiration
          </p>

          {/* Name */}
          <h2 className="font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Dr. Dnyandeo Yashwantrao Patil
          </h2>

          {/* Gold rule */}
          <div className="mt-4 md:mt-5 mb-6 md:mb-8 h-[2px] w-12 bg-[#c9a84c]" />

          {/* Bio — two columns on large screens */}
          <div className="mb-8 md:mb-10 lg:mb-12 grid gap-4 font-semibold leading-relaxed text-zinc-500 text-sm md:text-base lg:text-lg lg:grid-cols-1 lg:gap-x-16">
            <p>
              The foundation and vision of Dr. Sushant Patil Group are deeply inspired by the remarkable legacy of Padma Shree Dr. D. Y. Patil — a visionary leader, renowned educationist, philanthropist, and former Governor of Bihar, Tripura, and West Bengal. Popularly known as “Dada,” he dedicated his life to transforming education and empowering society through knowledge, innovation, and service.
            </p>
            <p>
              His unwavering commitment to quality education, social welfare, healthcare, and nation-building has inspired generations of students and educators across India. Through his visionary leadership, numerous world-class educational institutions were established, creating opportunities for thousands of students to achieve excellence in engineering, medicine, management, architecture, sports, and emerging technologies.
            </p>
            <p>
              At Dr. Sushant Patil Group, We proudly carry forward his values of excellence, discipline, innovation, and humanity. His inspiring journey continues to motivate us in our mission to create future-ready leaders, responsible citizens, and socially conscious professionals who contribute positively to society and the nation.
            </p>
          </div>

          {/* Credentials — numbered editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-200">
            {credentials.map(({ label, value }, i) => (
              <div
                key={label}
                className={`relative overflow-hidden border-r border-b border-zinc-200 px-5 py-5 transition-colors hover:bg-zinc-50 md:px-6 md:py-6${credentials.length % 2 !== 0 && i === credentials.length - 1 ? ' md:col-span-2' : ''}`}
              >
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-black leading-none text-[#c9a84c]/15 text-7xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mb-2 block font-semibold uppercase tracking-widest text-[#c9a84c] text-[0.65rem] md:text-xs">
                  {label}
                </span>
                <span className="font-semibold leading-snug text-zinc-700 text-sm md:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
