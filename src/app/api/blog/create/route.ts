import { createBlog } from "@/controllers/blogController";

export async function POST(req: Request) {
  return createBlog(req);
}
