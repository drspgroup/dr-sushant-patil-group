export default function NewsHeroSection() {
  return (
    <section className="relative z-10 px-4 pt-10 md:px-8 md:pt-12 lg:px-12 lg:pt-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-black leading-tight tracking-tight text-black
                         text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            News & Updates
          </h1>
          <p className="max-w-sm font-semibold leading-relaxed text-black/40 lg:mb-2 lg:text-right
                        text-sm md:text-base lg:text-lg">
            Stories, milestones, and moments from across the Dr. Sushant Patil Group —
            education, healthcare, creative arts, and community.
          </p>
        </div>

        <div className="mt-10 md:mt-14 lg:mt-16 border-t border-black/10" />

      </div>
    </section>
  )
}
