import { Shield, Crosshair, Handshake, Zap } from 'lucide-react'

const icons = [Shield, Crosshair, Handshake, Zap]

export const values = [
  {
    title: 'Excellence',
    description: 'We pursue the highest standards across education, innovation, creativity, and community initiatives, fostering a culture of continuous growth and achievement.',
  },
  {
    title: 'Innovation',
    description: 'We embrace forward-thinking ideas, modern approaches, and transformative solutions that inspire progress and prepare individuals for a rapidly evolving world.',
  },
  {
    title: 'Integrity',
    description: 'We uphold transparency, ethics, accountability, and trust in every decision, building lasting relationships founded on responsibility and respect.',
  },
  {
    title: 'Responsibility',
    description: 'We believe meaningful progress is created through purposeful action, social commitment, and initiatives that positively influence individuals, communities, and society.',
  },
]

export default function AboutValues() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-zinc-400 text-xs md:text-sm">
              What We Stand For
            </p>
            <h2 className="font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Built on four <span className="text-[#c9a84c]">principles.</span>
            </h2>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-2">
          {values.map((value, i) => {
            const Icon = icons[i]
            return (
              <div key={value.title} className="group bg-white p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#c9a84c]">
                <div className="mb-4 md:mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all duration-300  group-hover:text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mb-3 font-extrabold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-white text-xl md:text-2xl lg:text-3xl">
                  {value.title}
                </h3>
                <p className="font-semibold leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-white/50  text-sm md:text-base lg:text-lg">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
