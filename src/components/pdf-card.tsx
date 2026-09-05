
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { PdfInfo } from '@/lib/pdf-data';
import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface PdfCardProps {
  pdf: PdfInfo;
}

export function PdfCard({ pdf }: PdfCardProps) {
  const { t } = useLocale();
  const placeholder = PlaceHolderImages.find(p => p.id === pdf.thumbId);

  if (!placeholder) {
    return null;
  }

  // Use a fixed width and let height be auto-adjusted by the image component for responsiveness.
  const width = 500;
  const height = 700; // An example height, aspect ratio will be preserved.

  // Use the configured placeholder image for thumbnails. Previously we attempted to
  // derive a thumbnail from Google Drive links, but that can be unreliable. The
  // placeholders (now updated) contain the intended thumbnail URLs.
  const imgSrc = placeholder.imageUrl;

  return (
    <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="p-0">
          <div className="relative w-full overflow-hidden">
            <Image
              src={imgSrc}
              alt={t(`pdfs.${pdf.localeKey}.label`)}
              data-ai-hint={placeholder.imageHint}
              width={width}
              height={height}
              className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-5">
          <CardTitle className="font-headline text-lg">{t(`pdfs.${pdf.localeKey}.label`)}</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">{t(`pdfs.${pdf.localeKey}.description`)}</p>
          <a
            href={pdf.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t('common.readPdf')} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </CardContent>
      </Card>
  );
}
