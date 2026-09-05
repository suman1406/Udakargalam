'use client';

import { BookOpenText, FileText } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export function HomeIntroduction() {
  const { t } = useLocale();
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
        <h1 className="max-w-3xl font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {t('pages.home.title')}
        </h1>
        <p className="mt-4 max-w-2xl font-headline text-xl text-muted-foreground md:text-2xl">
          {t('pages.home.subtitle')}
        </p>

        <div className="mt-10 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
          {paragraphs.map((key) => <p key={key}>{t(key)}</p>)}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#grantha"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <BookOpenText className="h-4 w-4" aria-hidden="true" />
            {t('pages.home.browseDocuments')}
          </a>
          <a
            href="#published"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/30 bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            {t('pages.home.viewResearch')}
          </a>
        </div>
      </div>
    </section>
  );
}
