import { getBlogBySlug } from "@/controllers/blogController";

export async function GET(req: Request, context: { params: { slug: string } }) {
  return getBlogBySlug(req, context);
} 
