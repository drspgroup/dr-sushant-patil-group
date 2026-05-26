export default function AboutHero() {
  return (
    <section className="relative z-10 px-4 pt-10 pb-0 md:px-8 md:pt-12 lg:px-12 lg:pt-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Label */}
        {/* <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/40">
          About Us
        </p> */}

        {/* Heading */}
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-black leading-tight tracking-tight text-black
                         text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            About Us
          </h1>
          <p className="max-w-sm font-semibold leading-relaxed text-black/40 lg:mb-2 lg:text-right
                        text-sm md:text-base lg:text-lg">
            DSP Group is Pune's leading property inspection firm — built on technology,
            driven by precision, and trusted by Maharashtra's largest institutions.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 md:mt-14 lg:mt-16 border-t border-black/10" />

      </div>
    </section>
  )
}
