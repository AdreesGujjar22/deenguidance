import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../styles/theme";
import "../styles/global.css";
import './page.module.css'

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
      <body>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
