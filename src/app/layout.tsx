import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import "../styles/global.css";
import "./page.module.css";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../../public/images/logo.png";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Deen Guidance",
  description: "Deen Guidance Institute",
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
        {/* Google Analytics Script */}
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

        {/* Google Translate Widget */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            }
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
