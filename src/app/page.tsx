import { OceanHero } from '@/components/ocean-hero';
import AboutPage from './about/page';
import DakargaladhyayaPage from './dakargaladhyaya/page';
import GranthaPage from './grantha/page';
import PublishedPage from './published/page';

export default function Home() {
  return (
    <div className="relative">
      <OceanHero />
      <div className="space-y-16 py-16">
        <DakargaladhyayaPage />
        <GranthaPage />
        <PublishedPage />
        <AboutPage />
      </div>
    </div>
  );
}
