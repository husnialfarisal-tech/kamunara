import type { Metadata, Viewport } from "next";
// 1. Import Outfit (Vibes Gilroy) dan Open Sans
import { Outfit, Open_Sans, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// 2. Konfigurasi Font Body (Open Sans - Sangat terbaca & Profesional)
const openSans = Open_Sans({
  variable: "--font-opensans", // Variabel untuk Tailwind
  subsets: ["latin"],
  display: "swap",
});

// 3. Konfigurasi Font Judul / Heading (Outfit - Mirip Gilroy/Modern Tech)
const outfit = Outfit({
  variable: "--font-outfit", // Variabel untuk Tailwind
  subsets: ["latin"],
  display: "swap",
});

// 4. Konfigurasi Font Coding (JetBrains Mono)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono", 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamunara - Solusi Digital Terpercaya | Web & Mobile Development",
  description: "Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital baik berbasis website maupun mobile.",
  keywords: ["Kamunara", "Digital Solutions", "Web Development", "Mobile Development", "Software Development", "IT Outsourcing"],
  authors: [{ name: "Kamunara Team" }],
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
      {/* 5. Masukkan variabel font baru ke body */}
      <body className={`${openSans.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
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