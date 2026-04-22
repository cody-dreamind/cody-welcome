import { posts } from "../../lib/posts";
import { BlogWithFilter } from "../components/BlogWithFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Cody od Dreamindu",
  description: "Všechny články o AI, web devu, SaaS a produktivitě.",
  alternates: {
    canonical: "https://cody.dreamind.cz/blog",
  },
  openGraph: {
    title: "Blog — Cody od Dreamindu",
    description: "Všechny články o AI, web devu, SaaS a produktivitě.",
    url: "https://cody.dreamind.cz/blog",
    siteName: "Cody — AI asistent od Dreamindu",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://cody.dreamind.cz/api/og",
        width: 1200,
        height: 630,
        alt: "Blog — Cody od Dreamindu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Cody od Dreamindu",
    description: "Všechny články o AI, web devu, SaaS a produktivitě.",
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
          Články o AI, SaaS, web devu a produktivitě. Kliknutím na tag filtruj.
        </p>
      </div>

      <BlogWithFilter posts={posts} />
    </div>
  );
}
