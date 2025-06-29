// src/utils/blogFile.server.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { BlogItem } from '@/types/Blog';
import cloudinary from '@/lib/cloudinary';
const dataPath = join(process.cwd(), '/src/data/blogs/BlogsData.json');

export async function readBlogs(): Promise<BlogItem[]> {
  const json = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(json);
}
export async function writeBlogs(blogs: BlogItem[]) {
  await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2), 'utf-8');
}

// export async function saveImageToPublic(fileBuffer: Buffer, fileName: string): Promise<string> {
//   const folderPath = path.join(process.cwd(), "public", "images", "blog");
//   const filePath = path.join(folderPath, fileName);

//   await mkdir(folderPath, { recursive: true });

//   await writeFile(filePath, fileBuffer);

//   return `/images/blog/${fileName}`;
// }

export async function saveImageToPublic(fileBuffer: Buffer, fileName: string): Promise<string> {
  const base64 = fileBuffer.toString("base64");
  const dataUri = `data:image/jpeg;base64,${base64}`; // or png/webp if needed

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "blog",
    public_id: fileName.split(".")[0],
    overwrite: true,
  });

  return result.secure_url;
}