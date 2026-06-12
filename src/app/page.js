import HeroSection from "@/sections/home/HeroSection";
import FounderSection from "@/sections/home/FounderSection";
import AnujaSection from "@/sections/home/AnujaSection";
import VideoSeriesSection from "@/sections/shared/VideoSeriesSection";
import BusinessSection from "@/sections/home/BusinessSection";
import AnujaMaamPodcast from "@/sections/home/AnujaMaamPodcast";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BusinessSection />
      <FounderSection />
      <AnujaSection />
      <AnujaMaamPodcast />
      <VideoSeriesSection />
    </main>
  );
}
