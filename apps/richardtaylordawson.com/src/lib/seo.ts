import type { Metadata } from "next";

const siteUrl = "https://richardtaylordawson.com";
const siteName = "Richard Taylor Dawson";
const defaultImage = {
  url: `${siteUrl}/images/social-share.png`,
  width: 1200,
  height: 630,
  alt: "Richard Taylor Dawson social share image.",
};

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  pathname?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function buildPageMetadata({
  title,
  description,
  pathname = "/",
  image,
}: BuildPageMetadataArgs): Metadata {
  const shareImage = image ?? defaultImage;
  const absoluteImageUrl = shareImage.url.startsWith("http")
    ? shareImage.url
    : `${siteUrl}${shareImage.url}`;
  const url = pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;
  const socialTitle =
    pathname === "/" || title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: socialTitle,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: shareImage.width ?? defaultImage.width,
          height: shareImage.height ?? defaultImage.height,
          alt: shareImage.alt ?? defaultImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export { siteName, siteUrl, defaultImage };
