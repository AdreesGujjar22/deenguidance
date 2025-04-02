import { updateBlog } from "@/controllers/blogController";

export async function PUT(req: Request, context: { params: { slug: string } }) {
  return updateBlog(req, context);
}
