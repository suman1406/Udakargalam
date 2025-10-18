import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { LocaleProvider } from '@/context/locale-context';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipToContentLink } from '@/components/skip-to-content';
import { HreflangLinks } from '@/components/hreflang-links';

export const metadata: Metadata = {
  title: 'UDAKARGALAM / उदकार्गलम्',
  description: 'A research presentation on Udakargalam.',
  openGraph: {
    title: 'UDAKARGALAM / उदकार्गलम्',
    description: 'A research presentation on Udakargalam.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UDAKARGALAM / उदकार्गलम्',
    description: 'A research presentation on Udakargalam.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F4F8' },
    { media: '(prefers-color-scheme: dark)', color: '#101727' },
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:opsz,wght@7..72,400;700&display=swap" rel="stylesheet" />
        <HreflangLinks />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
      )}>
        <LocaleProvider>
          <SkipToContentLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}
