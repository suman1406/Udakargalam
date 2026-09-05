
'use client';

import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { HomeIntroduction } from '@/components/home-introduction';

export default function DakargaladhyayaPage() {
  const { t } = useLocale();

  return (
    <>
      <HomeIntroduction showActions={false} />
      <section className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              {t('pages.dakargaladhyaya.title')}
            </h2>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-lg leading-relaxed text-foreground/80">
              {t('pages.dakargaladhyaya.content')}
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
