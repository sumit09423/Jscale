import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { servicePages } from "@/lib/services";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: getSiteUrl(), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: getSiteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: getSiteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: getSiteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: getSiteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: getSiteUrl(`/services/${page.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: getSiteUrl(`/blog/${post.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

export const dynamic = "force-static";
