'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import gsap from 'gsap'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    const proxy = { y: window.scrollY }
    const duration = Math.min(3, Math.max(1.2, window.scrollY / 600))
    gsap.to(proxy, {
      y: 0,
      duration,
      ease: 'power3.inOut',
      onUpdate() {
        window.scrollTo(0, proxy.y)
      },
    })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className = {
        `cursor-pointer fixed bottom-6 right-6 md:bottom-8 md:right-8 h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 z-50 flex items-center justify-center rounded-full bg-[#c9a84c] shadow-lg transition-all duration-500 ease-out hover:shadow-xl hover:scale-105  ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`
      }
    >
      <ChevronUp strokeWidth={2.5} className="text-white h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8" />
    </button>
  )
}
