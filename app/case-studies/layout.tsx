import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Case Studies | FiveWell Africa',
//   description: 'Explore our case studies to see how we have helped African agribusinesses achieve remarkable results in productivity, sustainability, and profitability.',
//   openGraph: {
//     title: 'Case Studies | FiveWell Africa',
//     description: 'Explore our case studies to see how we have helped African agribusinesses achieve remarkable results in productivity, sustainability, and profitability.',
//     type: 'website',
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
