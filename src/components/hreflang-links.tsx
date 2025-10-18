
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function HreflangLinks() {
  const pathname = usePathname();
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  if (!origin) {
    return null;
  }

  const path = pathname === '/' ? '' : pathname;

  return (
    <>
      <link rel="alternate" hrefLang="en" href={`${origin}${path}`} />
      <link rel="alternate" hrefLang="sa" href={`${origin}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${origin}${path}`} />
    </>
  );
}
