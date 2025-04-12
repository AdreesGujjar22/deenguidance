import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: `Invalid token : ${error}` }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/auth/profile"],
};
