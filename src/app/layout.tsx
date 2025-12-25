import type { Metadata } from "next";
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
