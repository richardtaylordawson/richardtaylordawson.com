import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Richard Taylor Dawson | Software Engineer",
  description:
    "Richard Taylor Dawson is a software engineer building modern web products with accessibility, product craft, and practical systems thinking.",
  pathname: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...rootMetadata,
  title: {
    default: "Richard Taylor Dawson | Software Engineer",
    template: "%s | Richard Taylor Dawson",
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
