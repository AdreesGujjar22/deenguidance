// app/api/blog/list/route.ts
import { NextResponse } from 'next/server';
import { readBlogs } from '@/utils/blogFile.server';

export async function GET() {
  try {
    const blogs = await readBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('readBlogs error:', error);
    return NextResponse.json(
      { message: 'Failed to load blogs' },
      { status: 500 }
    );
  }
}
