import type { Metadata, Viewport } from "next";
// 1. Ganti import font di sini (Premium Fonts)
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// 2. Konfigurasi Font Utama / Body (Plus Jakarta Sans - Modern)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta", // Nama variabel unik
  subsets: ["latin"],
  display: "swap",
});

// 3. Konfigurasi Font Judul / Heading (Cormorant Garamond - Mewah)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant", // Nama variabel unik
  weight: ["300", "400", "500", "600", "700"],
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
      {/* 5. Masukkan SEMUA variable font ke dalam body */}
      <body className={`${jakarta.variable} ${cormorant.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
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