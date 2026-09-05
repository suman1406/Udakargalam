import { HomeIntroduction } from '@/components/home-introduction';
import AboutPage from './about/page';
import GranthaPage from './grantha/page';
import MiscellaneousPage from './miscellaneous/page';
import PublishedPage from './published/page';

export default function Home() {
  return (
    <div className="relative">
      <HomeIntroduction />
      <div className="space-y-16 py-16">
        <section id="grantha"><GranthaPage headingLevel="h2" /></section>
        <section id="published"><PublishedPage headingLevel="h2" /></section>
        <section id="miscellaneous"><MiscellaneousPage headingLevel="h2" /></section>
        <section id="about"><AboutPage headingLevel="h2" /></section>
      </div>
    </div>
  );
}
