import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dakārgalam',
  description: 'Dakārgalam is a classical Indian knowledge tradition concerned with the search for water hidden beneath the earth.',
  alternates: { canonical: '/dakargalam' },
  openGraph: {
    title: 'Dakārgalam',
    description: 'Dakārgalam is a classical Indian knowledge tradition concerned with the search for water hidden beneath the earth.',
    url: '/dakargalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakārgalam',
    description: 'Dakārgalam is a classical Indian knowledge tradition concerned with the search for water hidden beneath the earth.',
  },
};

export default function DakargalamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
