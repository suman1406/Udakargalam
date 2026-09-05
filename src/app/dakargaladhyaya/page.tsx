
'use client';

import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function DakargaladhyayaPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <h1 className="font-headline text-3xl font-bold md:text-4xl">
            {t('pages.dakargaladhyaya.title')}
          </h1>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t('pages.dakargaladhyaya.content')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
