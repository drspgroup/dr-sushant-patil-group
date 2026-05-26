'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function VideoModal({ youtubeVideo, onClose }) {
  const backdropRef = useRef(null)
  const cardRef     = useRef(null)

  // Animate in
  useGSAP(() => {
    gsap.fromTo(backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.88, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.05 }
    )
  }, [])

  // Animate out then call onClose
  const handleClose = () => {
    gsap.to(cardRef.current, {
      opacity: 0, scale: 0.9, y: 16,
      duration: 0.25, ease: 'power2.in',
    })
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3, ease: 'power2.in',
      onComplete: onClose,
    })
  }

  // Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    /* Backdrop */
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/* Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -right-2 -top-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
        >
          <X size={15} />
        </button>

        {/* YouTube embed */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
          <iframe
            src={`${youtubeVideo}?autoplay=1&rel=0&modestbranding=1`}
            title="DSP Group Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
