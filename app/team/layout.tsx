import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | FiveWell Africa',
  description: 'Meet the dedicated team behind FiveWell Africa. Our experts in sustainable agriculture, technology, and development are committed to transforming African agribusiness.',
  openGraph: {
    title: 'Our Team | FiveWell Africa',
    description: 'Meet the dedicated team behind FiveWell Africa. Our experts in sustainable agriculture, technology, and development are committed to transforming African agribusiness.',
    url: 'https://fivewell.africa/team',
    siteName: 'FiveWell Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | FiveWell Africa',
    description: 'Meet the experts driving sustainable agriculture and development across Africa.',
    creator: '@fivewellafrica',
  },
  alternates: {
    canonical: 'https://fivewell.africa/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
