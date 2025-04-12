import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { connectDB } from "../lib/db";
import Admin from "../models/Admin";

dotenv.config();

const seedAdmin = async () => {
  await connectDB();
  
  const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });
  if (existingAdmin) {
    console.log("⚠️ Admin already exists!");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 10);
  await Admin.create({ email: "admin@gmail.com", password: hashedPassword });

  console.log("✅ Admin seeded successfully!");
  process.exit();
};

seedAdmin();
