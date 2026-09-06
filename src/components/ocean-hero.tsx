
'use client';

import { useLocale } from '@/hooks/use-locale';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/media/dakargalam-groundwater-hero.png"
          alt={t('pages.home.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-20 mx-4 rounded-xl border border-white/20 bg-slate-950/40 px-4 py-2 text-center text-white shadow-2xl backdrop-blur-md sm:mx-8 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <h1 className="font-headline text-2xl font-bold leading-none drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)] sm:text-5xl md:text-6xl lg:text-7xl">
          {t('pages.home.title')}
        </h1>
      </div>
    </section>
  );
}
