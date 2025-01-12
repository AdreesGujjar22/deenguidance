import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../styles/theme";
import "../styles/global.css";
import './page.module.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Logo from "../../public/images/logo.png";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Deen Guidance",
  description: "Deen Guidance Institue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${Logo}`} type="image/icon" />
      </head>
      <body>
        {/* Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S88MDCJXFG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S88MDCJXFG');
          `}
        </Script>
        <ThemeProvider theme={theme}>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
