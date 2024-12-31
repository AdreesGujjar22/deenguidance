import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../styles/theme";
import "../styles/global.css";
import './page.module.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Logo from "../../public/images/logo.png";

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
        <ThemeProvider theme={theme}>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
