import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local"; // Import font lokal
import { JetBrains_Mono } from "next/font/google"; // Font coding tetap dari Google
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// 1. Konfigurasi INTER (Body Text)
// Pastikan file ada di folder src/app/font/inter/
const inter = localFont({
  src: [
    {
      path: './font/inter/Inter-Regular.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/inter/Inter-Bold.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter', // Variable CSS
  display: 'swap',
});

// 2. Konfigurasi GARET (Heading/Judul)
// Pastikan file ada di folder src/app/font/garet/
const garet = localFont({
  src: [
    {
      path: './font/garet/Garet-Book.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/garet/Garet-Heavy.woff2', 
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-garet', // Variable CSS
  display: 'swap',
});

// 3. Font Coding (Opsional)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono", 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamunara - Solusi Digital Terpercaya",
  description: "Kamunara adalah perusahaan outsource software development.",
};

export const viewport: Viewport = {
  themeColor: '#1c1917',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* Masukkan variabel ke className body */}
      <body className={`${inter.variable} ${garet.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}