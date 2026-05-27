import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Vignette overlay */}
      <div className="hero-vignette absolute inset-0" />

      {/* ── Center Content ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">

        {/* Logo */}
        <div className="hero-logo mb-10">
          <Image
            src="/dsp-logo.png"
            alt="Dr. Sushant Patil Group"
            width={260}
            height={180}
            priority
            className="h-auto w-[180px] object-contain sm:w-[220px] md:w-[260px] lg:w-[360px]"

          />
        </div>

      </div>

      {/* ── Scroll Indicator ── */}
      <div className="hero-scroll absolute mb-10 sm:mb-0 bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[var(--gold-dim)]">
          Scroll
        </span>
        <ChevronDown className="scroll-arrow text-[var(--gold-dim)]" size={16} strokeWidth={1.2} />
      </div>

    </section>
  )
}
