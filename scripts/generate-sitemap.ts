// scripts/generate-sitemap.ts
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import blogs from '../src/data/blogs/BlogData';
import courses from '../src/data/Course';

const SITE_URL = process.env.SITE_URL || 'https://deenguidance.com';
const PUBLIC_PATH = resolve(__dirname, '../public');
const OUT_PATH    = resolve(PUBLIC_PATH, 'sitemap.xml');

// 1. Define your static URLs
const staticUrls = [
  { loc: `${SITE_URL}/`,         lastmod: new Date().toISOString(), priority: 1.0 },
  { loc: `${SITE_URL}/blogs`,    lastmod: new Date().toISOString(), priority: 0.8 },
  { loc: `${SITE_URL}/contactus`,lastmod: new Date().toISOString(), priority: 0.8 },
  { loc: `${SITE_URL}/courses`,  lastmod: new Date().toISOString(), priority: 0.8 },
  // …any other top-level pages…
];

// 2. Map your blog data
const blogUrls = blogs.map(({ slug }) => ({
  loc:   `${SITE_URL}/blogs/${slug}`,
  lastmod: new Date().toISOString(),
  priority: 0.7,
}));

const courseUrls = courses.map(({ id }) => ({
  loc: `${SITE_URL}/courses/${id}`,
  lastmod: new Date().toISOString(),
  priority: 0.8, // Slightly higher priority than blogs
}));

const urls = [...staticUrls, ...blogUrls, ...courseUrls];

// 3. Build the XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>`).join('') +
  `\n</urlset>`;

// 4. Ensure public/ exists, then write
if (!existsSync(PUBLIC_PATH)) {
  mkdirSync(PUBLIC_PATH, { recursive: true });
}

writeFileSync(OUT_PATH, xml, { encoding: 'utf8' });
console.log(`✅ sitemap.xml generated at ${OUT_PATH}`);
