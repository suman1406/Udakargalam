
'use client';

import { useLocale } from '@/hooks/use-locale';
import { articles } from '@/lib/articles-data';
import { ArticleCard } from '@/components/article-card';

export default function PublishedPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.published.title')}
      </h1>
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="w-full max-w-sm">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
