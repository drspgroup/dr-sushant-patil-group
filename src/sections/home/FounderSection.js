import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Card ── */}
        <article className="overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* ── Left: portrait ── */}
            <div className="relative min-h-80 lg:min-h-0">
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
              <div className="flex-1 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h2 className="mb-6 md:mb-8 font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  The Man Behind <br/> The Empire
                </h2>

                <div className="space-y-4 text-body text-zinc-600 text-sm md:text-base lg:text-lg">
                  <p> Welcome to the Dr. Sushant Patil Group — a dynamic ecosystem of excellence in education, innovation, creativity, and social impact. Through our institutions including DYPCOEI, DYPIMED, DYPTC, DYPSOA, SEAMEDU, TOOLBOX Animation & VFX Studio, and ASPGF, we are committed to shaping future-ready leaders and responsible global citizens.                  </p>
                  <p> Our focus goes beyond academics. With modern infrastructure, industry-oriented learning, experienced faculty, and a culture of innovation, we empower students with the skills, values, creativity, and confidence needed to thrive in a rapidly evolving world.                  </p>
                  <p> At Dr. Sushant Patil Group, we believe education is the foundation of transformation. By fostering excellence, entrepreneurship, research, and social responsibility, we help every learner discover their true potential and build a successful, meaningful future.                  </p>
                </div>

                {/* Signature */}
                {/* <p className="mt-8 text-xs tracking-widest text-zinc-400">Signed</p>
                <p className="mt-2 text-[2.8rem] leading-tight text-zinc-800 [font-family:var(--font-signature)]">
                  Dr. Sushant Patil
                </p> */}
              </div>

              {/* Footer: name + title */}
              <footer className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6">
                <p className="text-name text-zinc-900 text-xl md:text-2xl lg:text-3xl">Dr. Sushant V. Patil</p>
                <p className="text-zinc-600 text-base">
                  Founder, Dr. Sushant Patil Group
                </p>
              </footer>

            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
