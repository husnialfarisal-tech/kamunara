import type { Metadata, Viewport } from "next";
// 1. Ganti import font di sini (Bodoni Moda = Gucci Style)
import { Plus_Jakarta_Sans, Bodoni_Moda, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// 2. Konfigurasi Font Utama / Body (Plus Jakarta Sans - Modern & Clean)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// 3. Konfigurasi Font Judul / Heading (Bodoni Moda - High Fashion/Gucci Style)
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni", // Nama variabel unik
  subsets: ["latin"],
  display: "swap",
  // Bodoni Moda adalah variable font, jadi tidak perlu define weight manual
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
      {/* 5. Masukkan variable font Bodoni ke dalam body */}
      <body className={`${jakarta.variable} ${bodoni.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
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