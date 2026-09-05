
'use client';

import { useLocale } from '@/hooks/use-locale';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="bg-background px-3 pb-6 pt-5 sm:px-6 sm:pb-10 sm:pt-8">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="mb-4 text-center font-headline text-3xl font-bold text-primary sm:mb-6 sm:text-5xl md:text-6xl">
          {t('pages.home.title')}
        </h1>

        <div className="relative aspect-[3/2] w-full overflow-hidden border border-border/60 bg-muted shadow-[0_14px_34px_rgba(70,43,22,0.12)] sm:rounded-sm">
        <Image
          src="/media/dakargalam-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        </div>
      </div>
    </section>
  );
}
