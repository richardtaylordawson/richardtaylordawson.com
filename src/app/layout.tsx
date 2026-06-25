import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://richardtaylordawson.com"),
  title: "Richard Taylor Dawson | AI-forward software engineer",
  description:
    "Richard Taylor Dawson is a software engineer building modern, AI-forward web products with sharp craft and practical systems thinking.",
  openGraph: {
    title: "Richard Taylor Dawson | AI-forward software engineer",
    description:
      "Modern web engineering, product systems, accessibility, and AI-native interfaces.",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "RTD logo for Richard Taylor Dawson.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Taylor Dawson | AI-forward software engineer",
    description:
      "Modern web engineering, product systems, accessibility, and AI-native interfaces.",
    images: ["/images/social-share.png"],
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
