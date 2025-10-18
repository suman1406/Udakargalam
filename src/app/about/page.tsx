
'use client';

import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl">
            {t('pages.about.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t('pages.about.content')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
