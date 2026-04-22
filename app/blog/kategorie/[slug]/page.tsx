import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, formatDate } from "../../../../lib/posts";
import { CATEGORIES, getCategoryBySlug, getCategory } from "../../../../lib/categories";
import type { Metadata } from "next";

function ensureSentence(text: string) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};

  const postCount = posts.filter((post) => getCategory(post.tags) === cat.label).length;
  const postCountLabel =
    postCount === 1 ? "článek" : postCount < 5 ? "články" : "článků";
  const url = `https://cody.dreamind.cz/blog/kategorie/${slug}`;
  const title = `${cat.label}: ${postCount} ${postCountLabel} | Cody blog od Dreamindu`;
  const categorySummary = ensureSentence(cat.description);
  const description = `Kategorie ${cat.label}: ${categorySummary} Aktuálně ${postCount} ${postCountLabel} na blogu Cody.`;

  return {
    title,
    description,
    keywords: [cat.label, ...cat.tags.slice(0, 6), "Cody blog", "Dreamind"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Cody — AI asistent od Dreamindu",
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: "https://cody.dreamind.cz/api/og",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://cody.dreamind.cz/api/og"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const filtered = posts.filter((p) => getCategory(p.tags) === cat.label);
  const categoryUrl = `https://cody.dreamind.cz/blog/kategorie/${slug}`;
  const categorySummary = ensureSentence(cat.description);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.label} | Kategorie na blogu Cody`,
    url: categoryUrl,
    description: `Kategorie ${cat.label}: ${categorySummary} Projděte si všechny články na blogu Cody.`,
    inLanguage: "cs-CZ",
    isPartOf: {
      "@type": "Blog",
      name: "Cody blog",
      url: "https://cody.dreamind.cz/blog",
    },
    about: {
      "@type": "Thing",
      name: cat.label,
      description: cat.description,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: filtered.length,
      itemListElement: filtered.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://cody.dreamind.cz/blog/${post.slug}`,
        name: post.title,
        description: post.excerpt,
      })),
    },
  };

  const count = filtered.length;
  const countLabel = count === 1 ? "článek" : count < 5 ? "články" : "článků";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm mb-10 transition-opacity hover:opacity-80"
        style={{ color: "var(--muted)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full border"
            style={{
              color: "var(--accent-light)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.08)",
            }}
          >
            Kategorie
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          {cat.label}
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          {cat.description}
        </p>
        <p className="text-xs mt-4" style={{ color: "var(--muted)", opacity: 0.5 }}>
          {count} {countLabel}
        </p>
      </header>

      {/* Category pills — link to other categories */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/kategorie/${c.slug}`}
            aria-current={c.slug === slug ? "page" : undefined}
            className="text-xs px-4 py-1.5 rounded-full border font-medium transition-all hover:opacity-90"
            style={{
              background: c.slug === slug ? "var(--accent)" : "transparent",
              color: c.slug === slug ? "white" : "var(--muted)",
              borderColor: c.slug === slug ? "var(--accent)" : "rgba(139, 92, 246, 0.2)",
            }}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px mb-10" style={{ background: "var(--border)" }} />

      {/* Article list */}
      <div className="flex flex-col gap-px">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start gap-3 py-6 transition-opacity hover:opacity-90"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="text-sm shrink-0 pt-0.5 sm:w-32"
              style={{ color: "var(--muted)", opacity: 0.5 }}
            >
              {formatDate(post.date)}
            </span>
            <div className="flex-1">
              <h2
                className="text-base font-semibold mb-1.5 leading-snug group-hover:text-purple-300 transition-colors"
                style={{ color: "var(--foreground)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                {post.excerpt}
              </p>
              <span className="text-xs" style={{ color: "var(--muted)", opacity: 0.5 }}>
                {post.readingTime} min
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center" style={{ color: "var(--muted)" }}>
          <p className="text-sm">Žádné články v této kategorii zatím.</p>
        </div>
      )}
    </div>
  );
}
