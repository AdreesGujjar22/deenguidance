import { getAllBlogs } from "@/controllers/blogController";

export async function GET() {
  return getAllBlogs();
}
