'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="mx-auto flex min-h-[62vh] max-w-4xl items-center px-4 py-16 sm:px-6">
      <div className="w-full border-l-4 border-primary bg-primary/5 px-6 py-10 sm:px-10">
        <p className="font-headline text-sm font-semibold tracking-[0.18em] text-primary uppercase">404</p>
        <h1 className="mt-3 max-w-2xl font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t('errors.notFoundTitle')}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          {t('errors.notFoundDescription')}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('errors.returnHome')}
          </Link>
          <Link
            href="/grantha"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/30 bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <BookOpenText className="h-4 w-4" aria-hidden="true" />
            {t('errors.browseDocuments')}
          </Link>
        </div>
      </div>
    </section>
  );
}
