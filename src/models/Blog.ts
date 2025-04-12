import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  content: string;
  image: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
    content: { type: String, required: true }, // HTML content
    image: { type: String, required: true }, // Image URL
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
