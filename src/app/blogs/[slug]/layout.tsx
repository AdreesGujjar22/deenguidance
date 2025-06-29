import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogData from '@/data/blogs/BlogData';

interface Params {
  slug: string;
}

export async function generateMetadata(context: { params: Params }): Promise<Metadata> {
  const { params } = await context;
  const param = await params
  const post = BlogData.find((b) => b.slug === param.slug);
  if (!post) {
    notFound();
  }

  const url = `https://www.deenguidance.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      siteName: 'Deen Guidance',
      images: [
        {
          url: '/images/og-image.png',
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/og-image.png'],
      site: '@DeenGuidance',
      creator: '@DeenGuidance',
    },
    authors: [{ name: 'Deen Guidance Team' }],
    robots: { index: true, follow: true },
  };
}

// Layout wrapper for dynamic blog pages
export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
