import AboutHero from '@/sections/about/AboutHero'
import AboutAmbitionSection from '@/sections/about/AboutAmbitionSection'
import AboutMission from '@/sections/about/AboutMission'
import TeamFounderSection from '@/sections/shared/TeamFounderSection'
import TeamAnujaSection from '@/sections/shared/TeamAnujaSection'
import AboutValues from '@/sections/about/AboutValues'
import TeamPatriarchSection from '@/sections/about/TeamPatriarchSection'
import VideoSeriesSection from '@/sections/shared/VideoSeriesSection'

export const metadata = {
  title: 'About Us - Dr. Sushant Patil Group',
  description: 'Learn about DSP Group - Pune\'s leading property inspection firm.',
}

export default function AboutPage() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <AboutHero />
      <TeamPatriarchSection />
      <TeamFounderSection />
      <TeamAnujaSection />
      <AboutAmbitionSection />
      <AboutMission />
      <AboutValues />
      <VideoSeriesSection />
    </main>
  )
}
