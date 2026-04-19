import { MetadataRoute } from "next";
import { posts } from "../lib/posts";
import { CATEGORIES } from "../lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls = posts.map((post) => ({
    url: `https://cody.dreamind.cz/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryUrls = CATEGORIES.map((cat) => ({
    url: `https://cody.dreamind.cz/blog/kategorie/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://cody.dreamind.cz",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://cody.dreamind.cz/blog",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...categoryUrls,
    {
      url: "https://cody.dreamind.cz/kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...postUrls,
  ];
}
