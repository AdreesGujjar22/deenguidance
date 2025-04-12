// import { updateBlog } from "@/controllers/blogController";

// export async function PUT(req: Request, context: { params: { slug: string } }) {
//   return updateBlog(req, context);
// }

import { createBlog } from "@/controllers/blogController";

export async function POST(req: Request) {
  return createBlog(req);
}
