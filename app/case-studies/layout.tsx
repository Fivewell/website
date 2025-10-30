import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | FiveWell Africa',
  description: 'Explore our case studies to see how we have helped African agribusinesses achieve remarkable results in productivity, sustainability, and profitability.',
  openGraph: {
    title: 'Case Studies | FiveWell Africa',
    description: 'Explore our case studies to see how we have helped African agribusinesses achieve remarkable results in productivity, sustainability, and profitability.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
