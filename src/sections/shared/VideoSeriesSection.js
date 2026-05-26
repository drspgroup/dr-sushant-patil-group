'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { videoSeries } from '@/data/videoSeries'
import VideoModal from '@/components/shared/VideoModal'
import 'swiper/css'

export default function VideoSeriesSection() {
  const swiperRef   = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
    <section className="relative z-10 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">

      {/* ── Header ── */}
      <header className="mb-8 md:mb-10 lg:mb-14 flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between md:gap-8">
        <div className="max-w-2xl">
          <h2 className="mb-3 font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Events & <span className="text-[#c9a84c]">Updates</span>
          </h2>
          <p className="text-body text-zinc-500 text-sm md:text-base lg:text-lg">
            Unfiltered insights, ground realities, and expert conversations —
            straight from the people who rely on DSP Group for every major
            property decision.
          </p>
        </div>

        {/* Desktop nav buttons */}
        <div className="hidden shrink-0 items-end gap-2 md:flex lg:gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all duration-200 hover:border-zinc-900 hover:text-zinc-900 lg:h-11 lg:w-11"
          >
            <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all duration-200 hover:border-zinc-900 hover:text-zinc-900 lg:h-11 lg:w-11"
          >
            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
        </div>
      </header>

      {/* ── Swiper ── */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop
        speed={600}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          640:  { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 12 },
        }}
        onSwiper={(s) => { swiperRef.current = s }}
      >
        {videoSeries.map((item, index) => (
          <SwiperSlide key={item.id}>
            <button
              onClick={() => setActiveVideo(item.youtubeVideo)}
              className="group block w-full text-left"
            >
              <div className="relative overflow-hidden rounded-lg">

                {/* Aspect ratio wrapper */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"

                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play button — centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <Play size={18} fill="white" className="text-white ml-0.5" />
                    </span>
                  </div>

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h4 className="mb-1 font-medium line-clamp-2 leading-snug text-white text-sm md:text-base lg:text-lg">
                      {item.title}
                    </h4>
                    {/* <p className="font-semibold leading-normal text-xs md:text-sm lg:text-base text-white/60">
                      {item.guest}
                    </p> */}
                  </div>

                </div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile nav buttons — below slider */}
      <div className="mt-5 flex justify-end gap-2 md:hidden">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300
                     text-zinc-500 transition-all duration-200
                     hover:border-zinc-900 hover:text-zinc-900"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300
                     text-zinc-500 transition-all duration-200
                     hover:border-zinc-900 hover:text-zinc-900"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </section>

    {/* YouTube popup modal */}
    {activeVideo && (
      <VideoModal
        youtubeVideo={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    )}
  </>
  )
}
