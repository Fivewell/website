import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Blog | FiveWell Africa',
//   description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa. Stay informed with the latest trends and innovations.',
//   openGraph: {
//     title: 'Blog | FiveWell Africa',
//     description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa. Stay informed with the latest trends and innovations.',
//     url: 'https://fivewell.africa/blog',
//     siteName: 'FiveWell Africa',
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Blog | FiveWell Africa',
//     description: 'Insights, stories, and updates on sustainable agriculture, agribusiness, and development in Africa.',
//     creator: '@fivewellafrica',
//   },
//   alternates: {
//     canonical: 'https://fivewell.africa/blog',
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://fivewellafrica.com"),
  title: {
    template: "%s | Fivewell Africa | Sustainable Development Consulting & Partnerships",
    default:
      "Fivewell Africa | Sustainable Development Consulting & Partnerships",
  },
  description:
    "Partner with Fivewell Africa to design and implement sustainable, inclusive solutions that drive measurable impact across Africa.",

  openGraph: {
    title: "Fivewell Africa | Sustainable Development Consulting & Partnerships",
    description:
      "Partner with Fivewell Africa to design and implement sustainable, inclusive solutions that drive measurable impact across Africa.",
    url: "https://fivewellafrica.com",
    siteName: "Fivewell Africa | Sustainable Development Consulting & Partnerships",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fivewell Africa | Sustainable Development Consulting & Partnerships",
    description:
      "Partner with Fivewell Africa to design and implement sustainable, inclusive solutions that drive measurable impact across Africa.",
    images: ["/og-image.png"], 
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
