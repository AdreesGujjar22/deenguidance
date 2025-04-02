// import { deleteBlog } from "@/controllers/blogController";

// export async function DELETE(req: Request, context: { params: { slug: string } }) {
//   return deleteBlog(req, context);
// }

import { NextRequest } from "next/server";
import { deleteBlog } from "@/controllers/blogController";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await context.params;
  return deleteBlog(req, { params: resolvedParams });
}
