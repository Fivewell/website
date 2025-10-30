import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Themes | FiveWell Africa',
  description: 'Explore our themes to learn more about our approach, key focus areas, and the difference we&apos;re making in communities worldwide.',
  openGraph: {
    title: 'Our Themes | FiveWell Africa',
    description: 'Explore our themes to learn more about our approach, key focus areas, and the difference we&apos;re making in communities worldwide.',
    url: 'https://fivewell.africa/themes',
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

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
