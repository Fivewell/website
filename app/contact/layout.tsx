import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Contact Us | FiveWell Africa',
//   description: 'Get in touch with FiveWell Africa. Reach out for inquiries, partnerships, or to learn more about our sustainable agriculture solutions across Africa.',
//   openGraph: {
//     title: 'Contact Us | FiveWell Africa',
//     description: 'Get in touch with FiveWell Africa. Reach out for inquiries, partnerships, or to learn more about our sustainable agriculture solutions across Africa.',
//     url: 'https://fivewell.africa/contact',
//     siteName: 'FiveWell Africa',
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Contact Us | FiveWell Africa',
//     description: 'Get in touch with FiveWell Africa for inquiries, partnerships, or to learn more about our sustainable agriculture solutions.',
//     creator: '@fivewellafrica',
//   },
//   alternates: {
//     canonical: 'https://fivewell.africa/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
