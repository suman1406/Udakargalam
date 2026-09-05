'use client';

import { useLocale } from '@/hooks/use-locale';
import { articles } from '@/lib/articles-data';
import { ArticleCard } from '@/components/article-card';

type PublishedSectionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function PublishedSection({ headingLevel = 'h1' }: PublishedSectionProps) {
  const { t } = useLocale();
  const Heading = headingLevel;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <Heading className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.published.title')}
      </Heading>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {articles.map((article) => (
          <div key={article.id} className="mb-6 break-inside-avoid">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
