import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { newsArticles } from '@/data/news'

function NewsCard({ article, priority }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* ── Image with margin ── */}
      <div className="m-2 md:m-3">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill

            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col gap-3 px-4 pt-2 pb-4 md:px-5 md:pb-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] md:text-sm">
          {article.category}
        </p>

        {/* Title */}
        <p className="font-semibold leading-relaxed text-zinc-900 text-sm md:text-base lg:text-lg line-clamp-2">
          {article.title}
        </p>

        {/* Read More */}
        <div className="mt-auto flex items-center justify-end gap-2 border-t border-zinc-200 pt-4">
          <span className="font-semibold text-zinc-900 text-sm md:text-base">
            Read More
          </span>
          <ArrowUpRight
            className="h-4 w-4 md:h-5 md:w-5 text-[#c9a84c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

      </div>
    </a>
  )
}

export default function NewsGridSection() {
  return (
    <section className="relative z-10 bg-[#f4f3f0] px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              priority={index < 3}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
