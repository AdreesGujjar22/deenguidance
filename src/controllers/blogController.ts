import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { nanoid } from "nanoid";

export async function createBlog(req: Request) {
  await connectDB();
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const tags = (formData.get("tags") as string).split(",");
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const imageFile = formData.get("image") as File;

  if (!title || !description || !content || !tags.length || !imageFile) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const slug = title.toLowerCase().replace(/ /g, "-") + "-" + nanoid(6);

  // Define upload path
  const uploadDir = "public/uploads";
  const imagePath = `${uploadDir}/${Date.now()}-${imageFile.name}`;

  // Ensure the uploads directory exists
  // const fs = require("fs");
  // if (!fs.existsSync(uploadDir)) {
    // fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it doesn't exist
  // }

  // Write the file to the uploads folder
  // const buffer = await imageFile.arrayBuffer();
  // fs.writeFileSync(imagePath, Buffer.from(buffer));

  const blog = await Blog.create({
    title,
    slug,
    tags,
    description,
    content,
    image: imagePath.replace("public/", ""),
  });

  return NextResponse.json(blog, { status: 201 });
}


export async function getAllBlogs() {
  await connectDB();
  const blogs = await Blog.find().select("-__v");
  return NextResponse.json(blogs);
}

export async function getBlogBySlug(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug });
  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  return NextResponse.json(blog);
}

export async function updateBlog(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const data = await req.json();
  const blog = await Blog.findOneAndUpdate({ slug: params.slug }, data, { new: true });

  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  return NextResponse.json(blog);
}

export async function deleteBlog(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const blog = await Blog.findOneAndDelete({ slug: params.slug });

  if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  return NextResponse.json({ message: "Blog deleted successfully" });
}
