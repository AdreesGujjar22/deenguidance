'use client';

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
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en" className={`${inter.variable} ${cinzelDecorative.variable}`}>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Deen Guidance offers live, interactive online Quran and Islamic Studies courses—beginner to advanced—taught by certified teachers. Try a free demo class today!" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/web-favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/web-favicon.png" />
        <title>Deen Guidance — Online Quran & Islamic Studies</title>
        <link rel="canonical" href="https://www.deenguidance.com" />

        {/* Open Graph */}
        <meta property="og:url" content="https://www.deenguidance.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Deen Guidance — Online Quran & Islamic Studies" />
        <meta property="og:description" content="Live, interactive online Quran and Islamic Studies courses with certified instructors. From Tajweed basics to advanced Tafsir." />
        <meta property="og:image" content="/images/web-favicon.png" />
        <meta property="og:site_name" content="Deen Guidance" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DeenGuidance" />
        <meta name="twitter:creator" content="@DeenGuidance" />
        <meta name="twitter:title" content="Deen Guidance — Online Quran & Islamic Studies" />
        <meta name="twitter:description" content="Live, interactive online Quran and Islamic Studies courses with certified instructors. From Tajweed basics to advanced Tafsir." />
        <meta name="twitter:image" content="/images/web-favicon.png" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Deen Guidance Team" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="Quran, Tajweed, Tafsir, Islamic Studies, Online Classes" />
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
              {isAdminRoute ? (
                children
              ) : (
                <>
                  <Navbar />
                  <MainLayout>
                    {children}
                  </MainLayout>
                  <Footer />
                </>
              )}
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
