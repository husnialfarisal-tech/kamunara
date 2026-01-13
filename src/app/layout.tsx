import type { Metadata, Viewport } from "next";
import "./globals.css";
// 1. Import Font Google (Baru)
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"; 
// 2. Import Font Local (Untuk mempertahankan Garet)
import localFont from "next/font/local"; 
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// --- A. KONFIGURASI FONT BARU (Google) ---
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Variable untuk body text
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant", // Variable untuk heading mewah
  display: "swap",
  style: ["normal", "italic"],
});

// --- B. KONFIGURASI FONT LAMA (Garet - Local) ---
// Pastikan path ini sesuai dengan lokasi file font kamu sebelumnya
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
  variable: '--font-garet', // Variable KHUSUS untuk logo
  display: 'swap',
});

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
      {/* Masukkan SEMUA variable (jakarta, cormorant, garet) ke className */}
      <body className={`${jakartaSans.variable} ${cormorant.variable} ${garet.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
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