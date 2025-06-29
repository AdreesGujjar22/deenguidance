import type { Metadata } from 'next';
import React from 'react';

// SEO metadata for the Courses listing page
export const metadata: Metadata = {
  title: 'Courses — Deen Guidance | Quran & Islamic Studies Online',
  description:
    'Explore Quran and Islamic Studies courses online. From beginner Tajweed to advanced Tafsir, Hadith, and Arabic grammar — enroll in your ideal course today.',
  alternates: { canonical: 'https://www.deenguidance.com/courses' },
  keywords: [
    'Quran courses',
    'Islamic studies online',
    'Tajweed',
    'Arabic grammar',
    'Tafsir classes',
    'Deen Guidance courses',
  ],
  authors: [{ name: 'Deen Guidance Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    url: 'https://www.deenguidance.com/courses',
    type: 'website',
    title: 'Courses — Deen Guidance | Quran & Islamic Studies Online',
    description:
      'Browse Deen Guidance’s full range of online Quran and Islamic studies courses. Flexible schedules, certified teachers, and personalized learning paths.',
    siteName: 'Deen Guidance',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Deen Guidance Courses Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeenGuidance',
    creator: '@DeenGuidance',
    title: 'Online Quran & Islamic Courses — Deen Guidance',
    description:
      'Enroll in personalized, flexible online Quran and Islamic studies classes. Explore Tajweed, Tafsir, Hadith, Arabic, and more.',
    images: ['/images/og-image.png'],
  },
};

// Layout wrapper for Courses pages
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
