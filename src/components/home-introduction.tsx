'use client';

import { BookOpenText, FileText } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { Button } from '@/components/ui/button';

type HomeIntroductionProps = {
  headingLevel?: 'h1' | 'h2';
};

export function HomeIntroduction({ headingLevel = 'h1' }: HomeIntroductionProps) {
  const { t } = useLocale();
  const Heading = headingLevel;
  const paragraphs = [
    'pages.home.introduction.one',
    'pages.home.introduction.two',
    'pages.home.introduction.three',
    'pages.home.introduction.four',
    'pages.home.introduction.five',
  ];

  return (
    <section className="border-b border-primary/15 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <p className="mb-4 font-headline text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {t('pages.home.eyebrow')}
        </p>
        <Heading className="max-w-3xl font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {t('pages.home.title')}
        </Heading>
        <p className="mt-4 max-w-2xl font-headline text-xl text-muted-foreground md:text-2xl">
          {t('pages.home.subtitle')}
        </p>

        <div className="mt-10 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
          {paragraphs.map((key) => <p key={key}>{t(key)}</p>)}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#grantha">
              <BookOpenText aria-hidden="true" />
              {t('pages.home.browseDocuments')}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
            <a href="#published">
              <FileText aria-hidden="true" />
              {t('pages.home.viewResearch')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
