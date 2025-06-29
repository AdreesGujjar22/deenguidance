import type { Metadata } from 'next';
import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter, Cinzel_Decorative } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import ThemeRegistry from '@/components/providers/ThemeRegistry';
import MainLayout from '@/components/layout/MainLayout';
import Navbar from '@/components/common/NavBar';
import Footer from '@/components/common/Footer';
import { APP_CONFIG } from '@/data/constants';
import '@/styles/global.css';
// import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Deen Guidance — Online Quran & Islamic Studies',
  description:
    'Deen Guidance offers live, interactive online Quran and Islamic Studies courses—beginner to advanced—taught by certified teachers. Try a free demo class today!',
  alternates: { canonical: 'https://www.deenguidance.com' },
  keywords: [
    'Quran', 'Tajweed', 'Tafsir', 'Islamic Studies', 'Online Classes'
  ],
  authors: [{ name: 'Deen Guidance Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    url: 'https://www.deenguidance.com',
    type: 'website',
  title: 'Deen Guidance — Online Quran & Islamic Studies',
  description:
    'Deen Guidance offers live, interactive online Quran and Islamic Studies courses—beginner to advanced—taught by certified teachers. Try a free demo class today!',
    siteName: 'Deen Guidance',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Deen Guidance Blog Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeenGuidance',
    creator: '@DeenGuidance',
  title: 'Deen Guidance — Online Quran & Islamic Studies',
  description:
    'Deen Guidance offers live, interactive online Quran and Islamic Studies courses—beginner to advanced—taught by certified teachers. Try a free demo class today!',
    images: ['/images/og-image.png'],
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en" className={`${inter.variable} ${cinzelDecorative.variable}`}>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${APP_CONFIG.googleAnalyticsId}');
          `}
        </Script>

        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              {/* Render Navbar, MainLayout, and Footer only for non-admin routes */}
              {/* {isAdminRoute ? (
                children
              ) : ( */}
                <>
                  <Navbar />
                  <MainLayout>
                    {children}
                  </MainLayout>
                  <Footer />
                </>
              {/* )} */}
            </Box>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#333',
                  color: '#fff',
                  fontFamily: 'var(--font-inter)',
                },
                success: {
                  style: {
                    background: '#004d40',
                  },
                },
                error: {
                  style: {
                    background: '#d32f2f',
                  },
                },
              }}
            />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
