'use client';

import { useLocale } from '@/hooks/use-locale';
import { miscellaneousPdfs } from '@/lib/miscellaneous-data';
import { PdfCard } from '@/components/pdf-card';

type MiscellaneousSectionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function MiscellaneousSection({ headingLevel = 'h1' }: MiscellaneousSectionProps) {
  const { t } = useLocale();
  const Heading = headingLevel;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <Heading className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.miscellaneous.title')}
      </Heading>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {miscellaneousPdfs.map((pdf) => (
          <div key={pdf.id} className="mb-6 break-inside-avoid">
            <PdfCard pdf={pdf} />
          </div>
        ))}
      </div>
    </div>
  );
}
