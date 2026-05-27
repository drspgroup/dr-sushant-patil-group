import BusinessesHeroSection from '@/sections/entities/BusinessesHeroSection'
import BusinessesListSection from '@/sections/entities/BusinessesListSection'

export const metadata = {
  title: 'Our Institutions — Dr. Sushant Patil Group',
  description: 'Seven purpose-driven institutions in education, architecture, media, and social impact — each independent in purpose, unified under the Dr. Sushant Patil Group.',
}

export default function BusinessesPage() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <BusinessesHeroSection />
      <BusinessesListSection />
    </main>
  )
}
