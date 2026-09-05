
'use client';

import { useLocale } from '@/hooks/use-locale';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/media/dakargalam-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/25" aria-hidden="true" />
      </div>

      <div className="absolute inset-y-0 left-1/2 z-10 w-full -translate-x-1/2 bg-slate-950/20 backdrop-blur-[2px] sm:w-[min(44vw,42rem)]" aria-hidden="true" />

      <div className="relative z-20 px-6 text-center text-white sm:px-10">
        <h1 className="font-headline text-5xl font-bold leading-none drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)] sm:text-7xl md:text-8xl">
          {t('pages.home.title')}
        </h1>
      </div>
    </section>
  );
}
