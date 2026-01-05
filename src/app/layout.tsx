import type { Metadata, Viewport } from "next";
// 1. Ganti import font di sini
import { Outfit, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

// 2. Konfigurasi Font Utama (Outfit)
const outfit = Outfit({
  variable: "--font-sans", // Kita namakan variable-nya font-sans
  subsets: ["latin"],
  display: "swap",
});

// 3. Konfigurasi Font Kedua (JetBrains Mono)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono", // Kita namakan variable-nya font-mono
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
      {/* 4. Masukkan variable font ke dalam body */}
      <body className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-foreground font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Saya ubah ke 'dark' biar default-nya langsung mode gelap sesuai desain Anda
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