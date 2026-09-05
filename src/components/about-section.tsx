'use client';

import { useLocale } from '@/hooks/use-locale';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type AboutSectionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function AboutSection({ headingLevel = 'h1' }: AboutSectionProps) {
  const { t } = useLocale();
  const Heading = headingLevel;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <Heading className="font-headline text-3xl font-bold md:text-4xl">
            {t('pages.about.title')}
          </Heading>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line text-lg leading-relaxed text-foreground/80">
            {t('pages.about.content')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
