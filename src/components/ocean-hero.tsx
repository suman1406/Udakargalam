
'use client';

import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="relative aspect-[3/2] w-full overflow-hidden sm:h-[calc(100svh-17rem)] sm:min-h-[26rem] sm:aspect-auto">
        <Image
          src="/media/dakargalam-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-center opacity-35 blur-lg"
        />
        <div className="absolute inset-0 z-10 bg-slate-950/20" aria-hidden="true" />
        <Image
          src="/media/dakargalam-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="relative z-20 object-contain object-center"
        />
      </div>

      <div className="flex min-h-20 items-center justify-center bg-[hsl(var(--header-bg))] px-4 py-4 text-center sm:min-h-24 sm:py-5">
        <h1
          className={cn(
            'font-headline text-3xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl',
            'animate-fade-in'
          )}
        >
          {t('pages.home.title')}
        </h1>
      </div>
    </section>
  );
}
