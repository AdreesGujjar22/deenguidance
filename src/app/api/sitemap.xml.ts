// pages/api/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from 'next';
import blogs from '../../data/blogs/BlogData';

const SITE_URL = process.env.SITE_URL || 'https://deenguidance.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticUrls = [
    { loc: `${SITE_URL}/`,            lastmod: new Date().toISOString(), priority: 1.0 },
    { loc: `${SITE_URL}/blogs`,    lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: `${SITE_URL}/contactus`,  lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: `${SITE_URL}/courses`,  lastmod: new Date().toISOString(), priority: 0.8 },
    // …add any other static routes here…
  ];

  // Map your blog data into the <url> entries
  const blogUrls = blogs.map(({ slug }) => ({
    loc: `${SITE_URL}/blog/${slug}`,
    lastmod :new Date().toISOString(),
    priority : 0.7
  }));

  const urls = [...staticUrls, ...blogUrls];

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>
`).join('') +
    `\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
