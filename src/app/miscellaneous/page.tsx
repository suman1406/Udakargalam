
'use client';

import { useLocale } from '@/hooks/use-locale';
import { miscellaneousPdfs } from '@/lib/miscellaneous-data';
import { PdfCard } from '@/components/pdf-card';

type MiscellaneousPageProps = {
  headingLevel?: 'h1' | 'h2';
};

export default function MiscellaneousPage({ headingLevel = 'h1' }: MiscellaneousPageProps) {
  const { t } = useLocale();
  const Heading = headingLevel;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <Heading className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.miscellaneous.title')}
      </Heading>
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
