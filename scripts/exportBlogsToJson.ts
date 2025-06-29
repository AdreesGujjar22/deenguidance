// scripts/exportBlogsToJson.ts
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

// **1. Import your TS blog data module**
import BlogData from '../src/data/blogs/BlogData';  
// adjust this path to wherever your `BlogData` default export lives

// **2. Define output path**
const outDir = resolve(__dirname, '/src/blogs/BlogData.ts');
const outFile = resolve(outDir, 'blogs.json');

// **3. Ensure the directory exists**
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// **4. Serialize and write**
writeFileSync(outFile, JSON.stringify(BlogData, null, 2), 'utf-8');

console.log(`✅ Exported ${BlogData.length} blogs to ${outFile}`);
