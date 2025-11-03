import BecomePartner from "@/components/BecomePartner";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import OurWorkSection from "@/components/OurWorkSection";
import type { Metadata } from "next";

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

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "FiveWell Africa",
    url: "https://fivewellafrica.com",
    logo: "https://fivewellafrica.com/file.svg",
    telephone: "+254-XXX-XXXXXX", // Placeholder phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Agriculture Avenue", // Placeholder address
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      postalCode: "00100", // Placeholder postal code
      addressCountry: "KE",
    },
    description:
      "A leading agriculture consulting firm in Africa, providing expert advisory on sustainable farming, agribusiness strategy, and agritech implementation.",
    serviceType: "Agriculture Consulting",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <MissionSection />
      <OurWorkSection />

      {/* <AnnualReportSection /> */}
      {/* <PartnerSection /> */}
      <BecomePartner />
      {/* <CTASection /> */}
    </>
  );
}
