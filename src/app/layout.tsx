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
import seoConfig from '@/config/next-seo.config';
import '@/styles/global.css';
import dynamic from 'next/dynamic';

const DynamicDefaultSeo = dynamic(() => import('next-seo').then(mod => mod.DefaultSeo), { ssr: false });

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
  return (
    <html lang="en" className={`${inter.variable} ${cinzelDecorative.variable}`}>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <DynamicDefaultSeo {...seoConfig} />
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
              <Navbar />
              <MainLayout>
                {children}
              </MainLayout>
              <Footer />
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
