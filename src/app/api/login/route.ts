import { NextResponse } from "next/server";
import { generateToken } from "@/lib/auth";
import { readFile } from "fs/promises";
import { join } from "path";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const dataPath = join(process.cwd(), "src/data/logInData.json");
    const json = await readFile(dataPath, "utf-8");
    const admin = JSON.parse(json);

    if (admin.email !== email || admin.password !== password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken("admin-id");
    return NextResponse.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
