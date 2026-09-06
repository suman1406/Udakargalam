
'use client';

import { useLocale } from '@/hooks/use-locale';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex aspect-[1916/821] items-center justify-center overflow-hidden bg-slate-950 sm:min-h-[calc(100svh-5rem)] sm:aspect-auto">
      <div className="absolute inset-0">
        <Image
          src="/media/dakargalam-groundwater-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-20 mx-4 translate-y-5 rounded-xl border border-white/20 bg-slate-950/30 px-6 py-4 text-center text-white shadow-2xl backdrop-blur-md sm:mx-8 sm:translate-y-20 sm:px-12 sm:py-8">
        <h1 className="font-headline text-3xl font-bold leading-none drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl">
          {t('pages.home.title')}
        </h1>
      </div>
    </section>
  );
}
