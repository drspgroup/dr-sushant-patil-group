import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { entities } from '@/data/entities'

const pages = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  // { label: 'Journey',  href: '/journey' },
  { label: 'Team',     href: '/team' },
  { label: 'Entities', href: '/entities' },
  { label: 'News',     href: '/news' },
]

const socials = [
  { label: 'F',  href: '#', title: 'Facebook' },
  { label: 'In', href: '#', title: 'Instagram' },
  { label: 'X',  href: '#', title: 'X / Twitter' },
  { label: 'Li', href: '#', title: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="px-4 pb-4 pt-6 md:px-6">
      <div className="rounded-[24px] bg-[#100146] px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 xl:px-20 xl:py-16">

        {/* ── Top: Logo + Tagline + Socials ── */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <div className="shrink-0 flex justify-center">
            <Image
              src="/dsp-logo.png"
              alt="Dr. Sushant Patil Group"
              width={360}
              height={244}

              className="h-auto w-[160px] object-contain md:w-[220px]"
            />

            {/* lg:w-[300px] xl:w-[360px] */}
          </div>

          {/* Tagline + Socials */}
          <div className="flex flex-col">
            <p className="max-w-xs leading-relaxed text-white/70 text-sm md:text-base lg:text-lg xl:text-xl sm:ml-auto">
              Seven independent entities working together toward growth, innovation, and societal progress.
            </p>

            {/* Social icons */}
            {/* <div className="mt-5 flex items-center gap-3 ">
              {socials.map(({ label, href, title }) => (
                <Link
                  key={title}
                  href={href}
                  aria-label={title}
                  className="flex items-center justify-center rounded-full   border border-white/25 font-bold text-white/70 transition-all duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c] h-9 w-9 text-[0.6rem] md:h-10 md:w-10 md:text-[0.65rem]lg:h-11 lg:w-11 lg:text-[0.7rem]"
                >
                  {label}
                </Link>
              ))}
            </div> */}
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="my-8 h-px bg-white/10 md:my-10 lg:my-12" />

        {/* ── 3 columns ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 lg:gap-14 xl:gap-20">

          {/* Col 1 — Our Office */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="mb-5 font-bold text-white text-base md:text-lg lg:text-xl">
              Our Office
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" />
                6th Floor, Solitaire Business Hub, Office No. 612, Balewadi High St, Pune, Maharashtra 411045
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#c9a84c]" />
                <a href="tel:+919223008212" className="transition-colors duration-200 hover:text-[#c9a84c]">
                  +91 92230 08212
                </a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#c9a84c]" />
                something@mail.com
              </li> */}
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-[#c9a84c]" />
                Mon – Sat, 9:30am – 5:30pm
              </li>
            </ul>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <h4 className="mb-5 font-bold text-white text-base md:text-lg lg:text-xl">
              Pages
            </h4>
            <ul className="flex flex-col gap-3 text-white/60 text-sm md:text-base">
              {pages.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors duration-200 hover:text-[#c9a84c]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Institutions */}
          <div>
            <h4 className="mb-5 font-bold text-white text-base md:text-lg lg:text-xl">
              Entities
            </h4>
            <ul className="flex flex-col gap-3 text-white/60 text-sm md:text-base">
              {entities.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[#c9a84c]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-12 lg:pt-8">
          <p className="text-white/30 text-xs md:text-sm lg:text-base">
            ©2026 Dr. Sushant Patil Group. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap gap-5">
            {['Privacy Policy', 'Terms & Conditions'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/30 underline-offset-2 transition-colors hover:text-white/60 hover:underline text-xs md:text-sm lg:text-base"
              >
                {item}
              </Link>
            ))}
          </div> */}
        </div>

      </div>
    </footer>
  )
}
