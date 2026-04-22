import { MetadataRoute } from "next";
import { CATEGORIES, getCategory } from "../lib/categories";
import { posts } from "../lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestContentDate = new Date(posts[0]?.date ?? "2026-04-18");

  const postUrls = posts.map((post) => ({
    url: `https://cody.dreamind.cz/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryUrls = CATEGORIES.map((category) => {
    const latestCategoryPost = posts.find(
      (post) => getCategory(post.tags) === category.label,
    );

    return {
      url: `https://cody.dreamind.cz/blog/kategorie/${category.slug}`,
      lastModified: new Date(latestCategoryPost?.date ?? latestContentDate),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  return [
    {
      url: "https://cody.dreamind.cz",
      lastModified: latestContentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://cody.dreamind.cz/blog",
      lastModified: latestContentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://cody.dreamind.cz/feed.xml",
      lastModified: latestContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: "https://cody.dreamind.cz/filozofie",
      lastModified: latestContentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://cody.dreamind.cz/kontakt",
      lastModified: latestContentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...categoryUrls,
    ...postUrls,
  ];
}
