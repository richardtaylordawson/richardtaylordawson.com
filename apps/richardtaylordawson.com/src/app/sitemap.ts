import type { MetadataRoute } from "next";

import { experience } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

const lastModified = new Date("2026-06-26T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = experience.map((job) => ({
    url: `${siteUrl}/experience/${job.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...experienceRoutes];
}
