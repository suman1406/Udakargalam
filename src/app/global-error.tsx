'use client';

import { useEffect, useState } from 'react';
import en from '@/locales/en.json';
import sa from '@/locales/sa.json';

type GlobalErrorLocale = 'en' | 'sa';

const globalErrorTranslations = { en, sa };

export default function GlobalError() {
  const [locale, setLocale] = useState<GlobalErrorLocale>('en');

  useEffect(() => {
    if (localStorage.getItem('locale') === 'sa') {
      setLocale('sa');
    }
  }, []);

  const copy = globalErrorTranslations[locale].errors;

  return (
    <html lang={locale}>
      <body style={{ margin: 0, background: '#fef8f4', color: '#1f2937', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <main style={{ display: 'grid', minHeight: '100vh', placeItems: 'center', padding: '24px' }}>
          <section style={{ maxWidth: '640px', borderLeft: '4px solid #3b82a6', background: '#eff6f8', padding: '40px' }}>
            <p style={{ color: '#276b8f', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{copy.siteError}</p>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.4rem', margin: '12px 0' }}>{copy.somethingWentWrong}</h1>
            <p style={{ lineHeight: 1.6 }}>{copy.globalErrorDescription}</p>
            <a href="/" style={{ color: '#276b8f', fontWeight: 700 }}>{copy.returnHome}</a>
          </section>
        </main>
      </body>
    </html>
  );
}
