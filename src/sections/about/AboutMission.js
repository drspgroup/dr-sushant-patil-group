export default function AboutMission() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 xl:gap-24">

          {/* Left: label */}
          <div>
            <p className="font-black leading-tight tracking-tight text-zinc-900
                           text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Our Mission
            </p>
          </div>

          {/* Right: statement */}
          <div>
            <p className="font-extrabold leading-snug text-zinc-900 text-xl md:text-2xl lg:text-3xl">
              Building a Future Driven by Education, Creativity, Innovation, and Social Commitment. 
              {/* <span className="text-[#c9a84c]">complete confidence.</span> */}
            </p>

            <div className="mt-8 border-t border-zinc-200 pt-8 md:mt-10 md:pt-10">
              <p className="max-w-2xl font-semibold leading-relaxed text-zinc-500 text-sm md:text-base lg:text-lg">
                To empower individuals and communities through excellence in education, innovation, creativity, and social responsibility by building transformative institutions that inspire learning, nurture talent, and create meaningful impact. Through a commitment to quality, collaboration, and continuous growth, Dr. Sushant Patil Group strives to shape future-ready leaders and contribute toward building a progressive and inclusive society. 
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
