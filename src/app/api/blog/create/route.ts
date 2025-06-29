// app/api/blog/create/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { readBlogs, saveImageToPublic, writeBlogs } from '@/utils/blogFile.server'
import { v4 as uuid } from 'uuid';
import path from "path";

export async function POST(request: NextRequest) {
  try {
    // parse the incoming multipart/form-data
    const formData = await request.formData()

    // extract your fields
    const title = formData.get('title') as string
    const tagsField = formData.get('tags') as string | null
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    if (!title || !description || !content || tagsField === null) {
      return NextResponse.json(
        { error: "Missing required fields: title, tags, description, or content." },
        { status: 400 }
      );
    }
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    // multer‐style File object
    const imageBlob = formData.get('image') as File | null
    if (!imageBlob) {
      return NextResponse.json(
        { error: 'Image file is required' },
        { status: 400 }
      )
    }
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const ext = path.extname(imageBlob.name) || ".jpg";
    const fileName = `${slug}-${uuid()}${ext}`;
    const imagePath =  await saveImageToPublic( buffer, fileName);

    // assemble a payload that your controller expects
    const payload = {
      _id: uuid(),
      title,
      slug,
      tags: tagsField ? tagsField.split(',').map(t => t.trim()) : [],
      description,
      content,
      image: imagePath,
    }

    // call your controller (it should handle saving the file, updating blogs.json, etc.)
    // 1. Read the existing blogs
    const blogs = await readBlogs();
    blogs.push(payload);
    await writeBlogs(blogs);

    return NextResponse.json("Successfully Add New Blog", { status: 201 })
  } catch (err) {
    console.error('🛑 blog/create error:', err)
    return NextResponse.json(
      { error: err?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
