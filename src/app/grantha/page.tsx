
'use client';

import { useLocale } from '@/hooks/use-locale';
import { pdfs } from '@/lib/pdf-data';
import { PdfCard } from '@/components/pdf-card';

export default function GranthaPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.grantha.title')}
      </h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{
            ['--masonry-cols' as any]: 4,
        }}
      >
        {pdfs.map((pdf) => (
          <div key={pdf.id} className="break-inside-avoid">
             <PdfCard pdf={pdf} />
          </div>
        ))}
      </div>
    </div>
  );
}
