import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grantha Collection',
  description: 'A multilingual collection of Bṛhatsaṃhitā editions and related texts for research on Dakārgalam and traditional groundwater knowledge.',
  alternates: { canonical: '/grantha' },
  openGraph: {
    title: 'Grantha Collection | Dakārgalam',
    description: 'A multilingual collection of Bṛhatsaṃhitā editions and related texts for research on Dakārgalam and traditional groundwater knowledge.',
    url: '/grantha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grantha Collection | Dakārgalam',
    description: 'A multilingual collection of Bṛhatsaṃhitā editions and related texts for research on Dakārgalam and traditional groundwater knowledge.',
  },
};

export default function GranthaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
