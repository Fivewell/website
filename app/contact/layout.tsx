import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | FiveWell Africa',
  description: 'Get in touch with FiveWell Africa. Reach out for inquiries, partnerships, or to learn more about our sustainable agriculture solutions across Africa.',
  openGraph: {
    title: 'Contact Us | FiveWell Africa',
    description: 'Get in touch with FiveWell Africa. Reach out for inquiries, partnerships, or to learn more about our sustainable agriculture solutions across Africa.',
    url: 'https://fivewell.africa/contact',
    siteName: 'FiveWell Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | FiveWell Africa',
    description: 'Get in touch with FiveWell Africa for inquiries, partnerships, or to learn more about our sustainable agriculture solutions.',
    creator: '@fivewellafrica',
  },
  alternates: {
    canonical: 'https://fivewell.africa/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
