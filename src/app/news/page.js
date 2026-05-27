import NewsHeroSection from '@/sections/news/NewsHeroSection'
import NewsGridSection from '@/sections/news/NewsGridSection'

export const metadata = {
  title: 'News & Updates — Dr. Sushant Patil Group',
  description: 'Stories, milestones, and moments from across the Dr. Sushant Patil Group.',
}

export default function NewsPage() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <NewsHeroSection />
      <NewsGridSection />
    </main>
  )
}
