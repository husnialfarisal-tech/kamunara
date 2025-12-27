import type { Metadata, Viewport } from "next";  // <-- TAMBAH Viewport di import
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata SEO (tanpa themeColor)
export const metadata: Metadata = {
  title: "Kamunara - Solusi Digital Terpercaya | Web & Mobile Development",
  description: "Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital baik berbasis website maupun mobile. Holding pada perusahaan DS.",
  keywords: ["Kamunara", "Digital Solutions", "Web Development", "Mobile Development", "PIPOS", "KKNKU", "Software Development", "Outsource IT", "Transformasi Digital"],
  authors: [{ name: "Kamunara Team" }],
  openGraph: {
    title: "Kamunara - Solusi Digital Terpercaya",
    description: "Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital",
    url: "https://kamunara.com",
    siteName: "Kamunara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamunara - Solusi Digital Terpercaya",
    description: "Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital",
  },
};

// TAMBAHKAN INI: export viewport untuk themeColor & pengaturan mobile
export const viewport: Viewport = {
  themeColor: '#1c1917', // Warna gelap match tema website kamu (stone-900)
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Opsional: lock zoom kalau mau
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}