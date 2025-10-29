
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { PdfInfo } from '@/lib/pdf-data';
import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  return (
    <a href={pdf.file} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
        <CardHeader className="p-0">
          <div className="relative w-full overflow-hidden">
            <Image
              src={placeholder.imageUrl}
              alt={`${t(`pdfs.${pdf.localeKey}.label`)} PDF Thumbnail`}
              data-ai-hint={placeholder.imageHint}
              width={width}
              height={height}
              className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="font-headline text-lg">{t(`pdfs.${pdf.localeKey}.label`)}</CardTitle>
          <CardDescription className="mt-1 text-sm">{t(`pdfs.${pdf.localeKey}.description`)}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
