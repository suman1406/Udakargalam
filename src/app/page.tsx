import { HomeIntroduction } from '@/components/home-introduction';
import { AboutSection } from './about/page';
import { GranthaSection } from './grantha/page';
import { MiscellaneousSection } from './miscellaneous/page';
import { PublishedSection } from './published/page';

export default function Home() {
  return (
    <div className="relative">
      <HomeIntroduction />
      <div className="space-y-16 py-16">
        <section id="grantha"><GranthaSection headingLevel="h2" /></section>
        <section id="published"><PublishedSection headingLevel="h2" /></section>
        <section id="miscellaneous"><MiscellaneousSection headingLevel="h2" /></section>
        <section id="about"><AboutSection headingLevel="h2" /></section>
      </div>
    </div>
  );
}
