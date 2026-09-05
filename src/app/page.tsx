import { HomeIntroduction } from '@/components/home-introduction';
import { OceanHero } from '@/components/ocean-hero';
import { AboutSection } from '@/components/about-section';
import { GranthaSection } from '@/components/grantha-section';
import { MiscellaneousSection } from '@/components/miscellaneous-section';
import { PublishedSection } from '@/components/published-section';

export default function Home() {
  return (
    <div className="relative">
      <OceanHero />
      <HomeIntroduction headingLevel="h2" />
      <div className="space-y-16 py-16">
        <section id="grantha"><GranthaSection headingLevel="h2" /></section>
        <section id="published"><PublishedSection headingLevel="h2" /></section>
        <section id="miscellaneous"><MiscellaneousSection headingLevel="h2" /></section>
        <section id="about"><AboutSection headingLevel="h2" /></section>
      </div>
    </div>
  );
}
