import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes"; // ← WAJIB untuk dark/light mode

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata SEO (tanpa themeColor, karena dipindah ke viewport)
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

// Export viewport (tempat yang benar untuk themeColor dan pengaturan mobile)
export const viewport: Viewport = {
  themeColor: '#1c1917', // Warna gelap sesuai tema utama (stone-900)
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Opsional: lock zoom supaya tidak berubah ukuran di HP
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* ThemeProvider mengelola dark/light mode */}
        <ThemeProvider
          attribute="class"              // Pakai class dark untuk Tailwind
          defaultTheme="system"          // Otomatis ikut mode sistem user (dark/light)
          enableSystem                   // Dukung mode sistem
          disableTransitionOnChange      // Matikan animasi transisi biar switch cepat
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}