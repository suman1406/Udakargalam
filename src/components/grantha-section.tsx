'use client';

import { useLocale } from '@/hooks/use-locale';
import { pdfs } from '@/lib/pdf-data';
import { PdfCard } from '@/components/pdf-card';

type GranthaSectionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function GranthaSection({ headingLevel = 'h1' }: GranthaSectionProps) {
  const { t } = useLocale();
  const Heading = headingLevel;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
      <Heading className="mb-8 text-center font-headline text-4xl font-bold md:text-5xl">
        {t('pages.grantha.title')}
      </Heading>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {pdfs.map((pdf) => (
          <div key={pdf.id} className="mb-6 break-inside-avoid">
            <PdfCard pdf={pdf} />
          </div>
        ))}
      </div>
    </div>
  );
}
