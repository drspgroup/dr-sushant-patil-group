'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',    href: '/about' },
  // { label: 'Journey',  href: '/journey' },
  { label: 'Team',     href: '/team' },
  { label: 'Entities', href: '/entities' },
  { label: 'News',     href: '/news' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome   = pathname === '/'

  const [pastHero, setPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isVisible = !isHome || pastHero

  // #3e2856 - diary
  // #100146 - logo bg from whatsapp

  return (
    <>
      {/* ── Header bar ── */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 transition-all duration-500 md:h-20 lg:h-24 xl:h-28 ${
          isVisible || menuOpen ? 'bg-[#100146]' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className={`transition-all duration-500 ${
          isVisible || menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/dsp-logo.png"
              alt="Dr. Sushant Patil Group"
              width={120}
              height={60}
              priority
              className="h-10 w-auto object-contain md:h-12 lg:h-14 xl:h-16"
            />
          </Link>
        </div>

        {/* Desktop nav links */}
        <nav className={`hidden items-center gap-6 md:flex lg:gap-8 xl:gap-10 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 md:text-base lg:text-lg ${
                  isActive
                    ? 'text-white opacity-100'
                    : 'text-white opacity-40 hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70 md:hidden"
        >
          {menuOpen
            ? <X size={24} strokeWidth={1.8} />
            : <Menu size={24} strokeWidth={1.8} />
          }
        </button>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#100146] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Links — vertically centered */}
        <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={`text-4xl font-black tracking-tight transition-all duration-500 hover:text-[#c9a84c] ${
                  menuOpen ? 'translate-y-0' : 'translate-y-4 opacity-0'
                } ${
                  isActive ? 'text-white opacity-100' : 'text-white opacity-40'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom brand strip */}
        <div className="border-t border-white/10 px-8 py-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
            Dr. Sushant Patil Group
          </p>
        </div>
      </div>
    </>
  )
}
