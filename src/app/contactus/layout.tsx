import type { Metadata } from 'next';
import React from 'react';

// SEO metadata for Contact Us page
export const metadata: Metadata = {
  title: 'Contact Us — Deen Guidance',
  description:
    "Get in touch with Deen Guidance for inquiries, support, or to schedule your free demo Quran class. We're here to help you on your learning journey.",
  alternates: { canonical: 'https://www.deenguidance.com/contact' },
  keywords: [
    'Contact Deen Guidance',
    'Quran support',
    'Islamic classes',
    'Help',
    'Online Quran classes',
  ],
  authors: [{ name: 'Deen Guidance Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    url: 'https://www.deenguidance.com/contact',
    type: 'website',
    title: 'Contact Us — Deen Guidance',
    description:
      'Reach out to Deen Guidance for questions, course info, or support. Quick response via email or WhatsApp.',
    siteName: 'Deen Guidance',
    images: [
      {
        url: '/images/contact-us/preview-contact-us.PNG',
        width: 1200,
        height: 630,
        alt: 'Deen Guidance Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeenGuidance',
    creator: '@DeenGuidance',
    title: 'Contact Us — Deen Guidance',
    description:
      'Need help or info? Contact the Deen Guidance team for fast support and free Quran learning consultations.',
    images: ['/images/contact-us/preview-contact-us.PNG'],
  },
};

// Layout wrapper for Contact Us pages
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
