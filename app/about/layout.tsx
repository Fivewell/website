import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | FiveWell Africa',
  description: 'Learn about FiveWell Africa - our mission, vision, values, and the team behind our success in sustainable agriculture and development across Africa.',
  openGraph: {
    title: 'About Us | FiveWell Africa',
    description: 'Learn about FiveWell Africa - our mission, vision, values, and the team behind our success in sustainable agriculture and development across Africa.',
    url: 'https://fivewell.africa/about',
    siteName: 'FiveWell Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | FiveWell Africa',
    description: 'Learn about FiveWell Africa - our mission, vision, values, and the team behind our success in sustainable agriculture and development across Africa.',
    creator: '@fivewellafrica',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
