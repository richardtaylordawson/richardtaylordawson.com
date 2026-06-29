import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { buildPageMetadata, siteUrl } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rootMetadata = buildPageMetadata({
  title: "Taylor Dawson - Software Engineer",
  description:
    "Richard Taylor Dawson is a software engineer building modern web products with accessibility, product craft, and practical systems thinking.",
  pathname: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...rootMetadata,
  title: {
    default: "Taylor Dawson - Software Engineer",
    template: "%s - Taylor Dawson",
  },
  verification: {
    google: "8xVt6B5nYoIzSXiJEU_R3lmGrtnsyPvT6EDqmVQ9wsw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Script id="audioeye-config" strategy="afterInteractive">
          {`window.__AudioEyeSiteHash = "83d1789633c5caebf661515c0c071695";`}
        </Script>
        <Script
          id="audioeye-loader"
          src="https://wsmcdn.audioeye.com/aem.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

