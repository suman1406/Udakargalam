
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
        className="gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4"
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
