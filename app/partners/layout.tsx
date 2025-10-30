import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners | FiveWell Africa',
  description: 'Meet our valued partners who collaborate with FiveWell Africa to drive sustainable agriculture and development initiatives across the continent.',
  openGraph: {
    title: 'Our Partners | FiveWell Africa',
    description: 'Meet our valued partners who collaborate with FiveWell Africa to drive sustainable agriculture and development initiatives across the continent.',
    url: 'https://fivewell.africa/partners',
    siteName: 'FiveWell Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners | FiveWell Africa',
    description: 'Collaborating for sustainable agriculture in Africa. Meet our network of partners working towards a better future.',
    creator: '@fivewellafrica',
  },
  alternates: {
    canonical: 'https://fivewell.africa/partners',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
