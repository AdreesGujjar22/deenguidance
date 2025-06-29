import { NextResponse, NextRequest } from 'next/server';
import { readBlogs, writeBlogs } from '@/utils/blogFile.server';
import { BlogItem } from '@/types/Blog';

export const runtime = 'nodejs';

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  try {
    const updates: Partial<Omit<BlogItem, '_id' | 'slug'>> = await request.json();

    const blogs = await readBlogs();

    const idx = blogs.findIndex(b => b.slug === slug);
    if (idx === -1) {
      return NextResponse.json(
        { error: `Blog with slug “${slug}” not found` },
        { status: 404 }
      );
    }

    const existing = blogs[idx];
    const updated: BlogItem = {
      ...existing,
      ...updates,
      slug: existing.slug,
    };

    blogs[idx] = updated;
    await writeBlogs(blogs);

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error('🛑 /api/blog/[slug] PUT error:', err);
    return NextResponse.json(
      { error: err?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
