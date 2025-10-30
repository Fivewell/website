import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | FiveWell Africa',
  description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa. Stay informed with the latest trends and innovations.',
  openGraph: {
    title: 'Blog | FiveWell Africa',
    description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa. Stay informed with the latest trends and innovations.',
    url: 'https://fivewell.africa/blog',
    siteName: 'FiveWell Africa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | FiveWell Africa',
    description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa.',
    creator: '@fivewellafrica',
  },
  alternates: {
    canonical: 'https://fivewell.africa/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
