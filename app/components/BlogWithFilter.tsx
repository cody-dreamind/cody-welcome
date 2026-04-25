"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Post } from "../../lib/posts";
import { CATEGORIES, getCategory } from "../../lib/categories";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface BlogWithFilterProps {
  posts: Post[];
}

export function BlogWithFilter({ posts }: BlogWithFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const resultsId = "blog-filter-results";
  const statusId = "blog-filter-status";

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const post of posts) {
      const cat = getCategory(post.tags)
      if (cat) counts[cat] = (counts[cat] || 0) + 1
    }
    return counts
  }, [posts])

  const filtered = activeCategory
    ? posts.filter(p => getCategory(p.tags) === activeCategory)
    : posts

  const count = filtered.length
  const countLabel = count === 1 ? "článek" : count < 5 ? "články" : "článků"

  return (
    <>
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          aria-controls={resultsId}
          aria-label={`Zobrazit všechny články (${posts.length})`}
          className="text-xs px-4 py-1.5 rounded-full border font-medium transition-all"
          style={{
            background: activeCategory === null ? "var(--accent)" : "transparent",
            color: activeCategory === null ? "white" : "var(--muted)",
            borderColor: activeCategory === null ? "var(--accent)" : "rgba(139, 92, 246, 0.2)",
          }}
        >
          {`Vše (${posts.length})`}
        </button>
        {CATEGORIES.map(cat => {
          const cnt = categoryCounts[cat.label] || 0
          if (!cnt) return null
          const active = activeCategory === cat.label
          return (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActiveCategory(active ? null : cat.label)}
              aria-pressed={active}
              aria-controls={resultsId}
              aria-label={`${active ? "Zrušit filtr" : "Filtrovat podle"} ${cat.label} (${cnt})`}
              className="text-xs px-4 py-1.5 rounded-full border font-medium transition-all"
              style={{
                background: active ? "rgba(139, 92, 246, 0.2)" : "transparent",
                color: active ? "var(--accent-light)" : "var(--muted)",
                borderColor: active ? "rgba(139, 92, 246, 0.5)" : "rgba(139, 92, 246, 0.2)",
              }}
            >
              {`${cat.label} (${cnt})`}
            </button>
          )
        })}
      </div>

      {/* Results count */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p
          id={statusId}
          role="status"
          aria-live="polite"
          className="text-xs"
          style={{ color: "var(--muted)", opacity: 0.5 }}
        >
          {activeCategory
            ? `${count} ${countLabel} — ${activeCategory}`
            : `${count} ${countLabel} celkem`}
        </p>
        {activeCategory && (
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="text-xs rounded-full border px-3 py-1 transition-opacity hover:opacity-80"
            style={{
              color: "var(--accent-light)",
              borderColor: "rgba(139, 92, 246, 0.25)",
              background: "rgba(139, 92, 246, 0.08)",
            }}
          >
            Zrušit filtr
          </button>
        )}
      </div>

      {/* Post list */}
      <div
        id={resultsId}
        className="flex flex-col gap-px"
        style={{ borderTop: "1px solid var(--border)" }}
      >
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
                className="title-link-hover text-base font-semibold mb-1.5 leading-snug transition-colors"
                style={{ color: "var(--foreground)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                {getCategory(post.tags) && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(139, 92, 246, 0.1)", color: "var(--accent-light)" }}
                  >
                    {getCategory(post.tags)}
                  </span>
                )}
                <span className="text-xs ml-auto" style={{ color: "var(--muted)", opacity: 0.5 }}>
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center" style={{ color: "var(--muted)" }}>
          <p className="text-sm">Žádné články v této kategorii.</p>
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="mt-4 text-xs underline"
            style={{ color: "var(--accent-light)" }}
          >
            Zobrazit vše
          </button>
        </div>
      )}
    </>
  )
}
