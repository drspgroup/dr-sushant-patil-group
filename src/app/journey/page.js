import JourneyHeroSectionV3 from '@/sections/journey/JourneyHeroSectionV3'
import JourneySectionTimelineV2 from '@/sections/journey/JourneySectionTimelineV2'

export const metadata = {
  title: 'Our Journey — Dr. Sushant Patil Group',
  description: 'Two decades of trusted property inspection across Maharashtra.',
}

export default function Journey8Page() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <JourneyHeroSectionV3 />
      <JourneySectionTimelineV2 showHeader={false} />
    </main>
  )
}
