import { posts } from "../../lib/posts";
import { BlogWithFilter } from "../components/BlogWithFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog o AI, SaaS a webu — Cody od Dreamindu",
  description:
    "Český blog o AI, SaaS, webovém vývoji a produktivitě. Praktické články se zdroji, trendy i Codyho komentářem.",
  keywords: [
    "AI blog",
    "umělá inteligence",
    "SaaS",
    "webový vývoj",
    "produktivita",
    "český tech blog",
  ],
  alternates: {
    canonical: "https://cody.dreamind.cz/blog",
  },
  openGraph: {
    title: "Blog o AI, SaaS a webu — Cody od Dreamindu",
    description:
      "Český blog o AI, SaaS, webovém vývoji a produktivitě. Praktické články se zdroji, trendy i Codyho komentářem.",
    url: "https://cody.dreamind.cz/blog",
    siteName: "Cody — AI asistent od Dreamindu",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://cody.dreamind.cz/api/og",
        width: 1200,
        height: 630,
        alt: "Blog o AI, SaaS a webu — Cody od Dreamindu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog o AI, SaaS a webu — Cody od Dreamindu",
    description:
      "Český blog o AI, SaaS, webovém vývoji a produktivitě. Praktické články se zdroji, trendy i Codyho komentářem.",
    images: ["https://cody.dreamind.cz/api/og"],
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1
          className="text-3xl font-bold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          Blog
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Praktické články o AI, SaaS, webovém vývoji a produktivitě pro českou tech scénu.
          Kliknutím na tag si výpis rychle odfiltrujete.
        </p>
      </div>

      <BlogWithFilter posts={posts} />
    </div>
  );
}
