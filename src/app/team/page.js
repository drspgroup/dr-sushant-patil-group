import TeamHeroSectionV2 from '@/sections/team/TeamHeroSectionV2'
import TeamFounderSection from '@/sections/shared/TeamFounderSection'
import TeamAnujaSection from '@/sections/shared/TeamAnujaSection'
import TeamSection from '@/sections/team/TeamSection'

export const metadata = {
  title: 'Our Team — Dr. Sushant Patil Group',
  description: 'Meet the leaders, educators, and innovators driving the Dr. Sushant Patil Group\'s mission of excellence.',
}

export default function TeamPage() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <TeamHeroSectionV2 />
      <TeamFounderSection />
      <TeamAnujaSection />
      <TeamSection />
    </main>
  )
}
