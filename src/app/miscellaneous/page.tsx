
'use client';

import { useLocale } from '@/hooks/use-locale';
import { miscellaneousPdfs } from '@/lib/miscellaneous-data';
import { PdfCard } from '@/components/pdf-card';

export default function MiscellaneousPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.miscellaneous.title')}
      </h1>
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {miscellaneousPdfs.map((pdf) => (
          <div key={pdf.id} className="w-full max-w-sm">
            <PdfCard pdf={pdf} />
          </div>
        ))}
      </div>
    </div>
  );
}
