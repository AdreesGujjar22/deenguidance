import Head from 'next/head';

export interface PageSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  openGraph?: {
    url?: string;
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
  };
  twitter?: {
    cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
    siteHandle?: string;
    creatorHandle?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
}

const defaultOG = {
  type: 'website',
  siteName: 'Deen Guidance',
};

const defaultTwitter = {
  cardType: 'summary_large_image',
};

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonicalUrl,
  openGraph = {},
  twitter = {},
  additionalMetaTags = [],
}) => {
  const og = {
    ...defaultOG,
    title,
    description,
    ...openGraph,
  };

  const tw = {
    ...defaultTwitter,
    title,
    description,
    ...twitter,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={og.type} />
      {og.siteName && <meta property="og:site_name" content={og.siteName} />}
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      {og.url && <meta property="og:url" content={og.url} />}
      {og.image && <meta property="og:image" content={og.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={tw.cardType} />
      {tw.siteHandle && <meta name="twitter:site" content={tw.siteHandle} />}
      {tw.creatorHandle && <meta name="twitter:creator" content={tw.creatorHandle} />}
      <meta name="twitter:title" content={tw.title} />
      <meta name="twitter:description" content={tw.description} />
      {tw.image && <meta name="twitter:image" content={tw.image} />}

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, idx) => (
        <meta key={idx} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};

export default PageSEO;
