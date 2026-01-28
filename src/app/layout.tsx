import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

/* ===============================
  A. BODY TEXT (PARAGRAF)
================================ */
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* ===============================
  B. HEADING / JUDUL
================================ */
const glamore = localFont({
  src: [
    {
      path: "./font/glamore/Glamore.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

/* ===============================
  C. BRAND / LOGO
================================ */
const garet = localFont({
  src: [
    {
      path: "./font/garet/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/garet/Garet-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-brand",
  display: "swap",
});

/* ===============================
  D. MONOSPACE / CODE
================================ */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamunara - Solusi Digital Terpercaya",
  description: "Kamunara adalah perusahaan outsource software development.",
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${jakartaSans.variable}
          ${glamore.variable}
          ${garet.variable}
          ${jetbrainsMono.variable}
          antialiased
          bg-neutral-950
          text-foreground
          font-sans
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}