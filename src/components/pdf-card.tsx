
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { PdfInfo } from '@/lib/pdf-data';
import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PdfCardProps {
  pdf: PdfInfo;
}

export function PdfCard({ pdf }: PdfCardProps) {
  const { t } = useLocale();
  const placeholder = PlaceHolderImages.find(p => p.id === pdf.thumbId);

  if (!placeholder) {
    return null;
  }
  
  const imageUrl = new URL(placeholder.imageUrl);
  const width = parseInt(imageUrl.searchParams.get('w') || '1080', 10);
  const height = width / (400 / 565); // Maintain aspect ratio from original code

  return (
    <a href={pdf.file} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
        <CardHeader className="p-0">
          <div className="relative aspect-[400/565] w-full overflow-hidden">
            <Image
              src={placeholder.imageUrl}
              alt={`${t(`pdfs.${pdf.localeKey}.label`)} PDF Thumbnail`}
              data-ai-hint={placeholder.imageHint}
              width={width}
              height={height}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
