
'use client';

import { useLocale } from '@/hooks/use-locale';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/media/dakargalam-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-20 mx-4 rounded-xl border border-white/20 bg-slate-950/45 px-8 py-7 text-center text-white shadow-2xl backdrop-blur-md sm:mx-8 sm:px-14 sm:py-10">
        <h1 className="font-headline text-5xl font-bold leading-none drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)] sm:text-7xl md:text-8xl">
          {t('pages.home.title')}
        </h1>
      </div>
    </section>
  );
}
