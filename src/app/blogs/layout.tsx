import type { Metadata } from 'next';
import React from 'react';

// 1. SEO metadata for the Blogs listing page
export const metadata: Metadata = {
  title: 'Blog — Deen Guidance | Articles on Quran, Islam & Faith',
  description:
    'Read insightful blog posts on Quranic guidance, Islamic lifestyle, spirituality, parenting, and more. Learn and grow with authentic Islamic knowledge.',
  alternates: { canonical: 'https://www.deenguidance.com/blogs' },
  keywords: [
    'Islamic blog',
    'Quran articles',
    'Muslim parenting',
    'Islamic lifestyle',
    'spiritual development',
    'Deen Guidance blog',
    'tafsir blog',
    'Islamic guidance',
  ],
  authors: [{ name: 'Deen Guidance Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    url: 'https://www.deenguidance.com/blogs',
    type: 'website',
    title: 'Blog — Deen Guidance | Articles on Quran, Islam & Faith',
    description:
      'Discover meaningful Islamic blog content: tips on Quran learning, Islamic values, parenting, and modern-day challenges — rooted in the Deen.',
    siteName: 'Deen Guidance',
    images: [
      {
        url: '/images/blogs/preview-blogs.PNG',
        width: 1200,
        height: 630,
        alt: 'Deen Guidance Blog Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeenGuidance',
    creator: '@DeenGuidance',
    title: 'Islamic Blog — Quran, Parenting & Spiritual Growth | Deen Guidance',
    description:
      'Explore powerful reflections and practical advice for Muslims worldwide. New blogs weekly on faith, family, and personal growth.',
    images: ['/images/blogs/preview-blogs.PNG'],
  },
};

// 2. Layout wrapper for Blogs pages
export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
