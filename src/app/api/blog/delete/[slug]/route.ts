// app/api/blog/[slug]/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { readBlogs } from '@/utils/blogFile.server'
import { BlogItem } from '@/types/Blog'

export const runtime = 'nodejs'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    // 1. Read the full array
    const blogs: BlogItem[] = await readBlogs()

    // 2. Find the one with matching slug
    const blog = blogs.find(b => b.slug === slug)

    // 3. If not found, return 404
    if (!blog) {
      return NextResponse.json(
        { error: `Blog with slug "${slug}" not found` },
        { status: 404 }
      )
    }

    // 4. Return the blog object
    return NextResponse.json(blog, { status: 200 })
  } catch (err) {
    console.error('🛑 /api/blog/[slug] GET error:', err)
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
