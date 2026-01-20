
'use client';

import { articles } from '@/lib/articles-data';
import { ArticleCard } from '@/components/article-card';

export default function PublishedPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        Published Articles
      </h1>
      <div className="gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {articles.map((article) => (
          <div key={article.id} className="break-inside-avoid">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
