import { SITE_METADATA } from '@/data/metadata';

const seoConfig = {
  title: SITE_METADATA.title,
  titleTemplate: `%s | ${SITE_METADATA.name}`,
  description: SITE_METADATA.description,
  canonical: SITE_METADATA.siteUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.name,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [
      {
        url: `${SITE_METADATA.siteUrl}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_METADATA.name} - Learn Quran Online`,
      },
    ],
  },
  twitter: {
    handle: SITE_METADATA.socialLinks.twitter,
    site: SITE_METADATA.socialLinks.twitter,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: SITE_METADATA.keywords.join(", "),
    },
    {
      name: "author",
      content: SITE_METADATA.author,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#004d40",
    },
    {
      name: "application-name",
      content: SITE_METADATA.name,
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default seoConfig;
