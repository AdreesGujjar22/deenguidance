// src/utils/blogFile.server.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { BlogItem } from '@/types/Blog';
import { writeFile, mkdir } from "fs/promises";
import path from "path";
const dataPath = join(process.cwd(), '/src/data/blogs/BlogsData.json');

export async function readBlogs(): Promise<BlogItem[]> {
  const json = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(json);
}
export async function writeBlogs(blogs: BlogItem[]) {
  await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2), 'utf-8');
}

export async function saveImageToPublic(fileBuffer: Buffer, fileName: string): Promise<string> {
  const folderPath = path.join(process.cwd(), "public", "images", "blog");
  const filePath = path.join(folderPath, fileName);

  await mkdir(folderPath, { recursive: true });

  await writeFile(filePath, fileBuffer);

  return `/images/blog/${fileName}`;
}