import type { Metadata, Viewport } from "next";
import "./globals.css";
// 1. Google Font (Untuk Body Text yang mudah dibaca)
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"; 
// 2. Local Font (Untuk GLAMORE & GARET)
import localFont from "next/font/local"; 
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// --- A. BODY TEXT (Google Font) ---
// Kita tetap pakai ini untuk paragraf agar user nyaman membaca
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// --- B. JUDUL / HEADING (GLAMORE - Local Font) ---
// Pastikan nama file di folder 'font/glamore' sesuai!
const glamore = localFont({
  src: [
    {
      path: './font/glamore/Glamore.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-glamore', // Variable baru
  display: 'swap',
});

// --- C. LOGO BRAND (GARET - Local Font) ---
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
  variable: '--font-garet', 
  display: 'swap',
});

// --- D. CODING ---
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
      {/* Masukkan variable glamore di sini */}
      <body className={`${jakartaSans.variable} ${glamore.variable} ${garet.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
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