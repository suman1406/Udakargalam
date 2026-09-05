import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dakargaladhyaya',
  description: 'An introduction to the Dakargaladhyaya of Varāhamihira’s Bṛhatsaṃhitā and its study within the Ashtaadashi Project.',
  alternates: { canonical: '/dakargaladhyaya' },
  openGraph: {
    title: 'Dakargaladhyaya | Dakārgalam',
    description: 'An introduction to the Dakargaladhyaya of Varāhamihira’s Bṛhatsaṃhitā and its study within the Ashtaadashi Project.',
    url: '/dakargaladhyaya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakargaladhyaya | Dakārgalam',
    description: 'An introduction to the Dakargaladhyaya of Varāhamihira’s Bṛhatsaṃhitā and its study within the Ashtaadashi Project.',
  },
};

export default function DakargaladhyayaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
