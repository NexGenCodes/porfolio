import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";
import { ThemeSelector } from "@/components/theme/selector";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NexGenCode | Full-Stack Developer Portfolio",
  description:
    "Portfolio showcasing expertise in full-stack web, mobile, and end-to-end development",
  keywords: [
    "full-stack developer",
    "web development",
    "mobile development",
    "portfolio",
    "NexGenCode",
  ],
  authors: [{ name: "NexGenCode" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexgencode.dev",
    title: "NexGenCode | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing expertise in full-stack web, mobile, and end-to-end development",
    siteName: "NexGenCode Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGenCode | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing expertise in full-stack web, mobile, and end-to-end development",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className + " antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="nexgencode-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4 z-50">
              <ThemeSelector />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
