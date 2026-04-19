"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "../../lib/posts";

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
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect unique tags across all posts
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const count = filtered.length;
  const countLabel =
    count === 1 ? "článek" : count < 5 ? "články" : "článků";

  return (
    <>
      {/* Tag filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className="text-xs px-3 py-1 rounded-full border transition-all"
          style={{
            background: activeTag === null ? "var(--accent)" : "transparent",
            color: activeTag === null ? "white" : "var(--muted)",
            borderColor:
              activeTag === null
                ? "var(--accent)"
                : "rgba(139, 92, 246, 0.2)",
          }}
        >
          Vše
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className="text-xs px-3 py-1 rounded-full border transition-all"
            style={{
              background:
                activeTag === tag
                  ? "rgba(139, 92, 246, 0.25)"
                  : "transparent",
              color:
                activeTag === tag ? "var(--accent-light)" : "var(--muted)",
              borderColor:
                activeTag === tag
                  ? "rgba(139, 92, 246, 0.5)"
                  : "rgba(139, 92, 246, 0.2)",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs mb-6" style={{ color: "var(--muted)", opacity: 0.6 }}>
        {activeTag
          ? `${count} ${countLabel} v kategorii „${activeTag}"`
          : `${count} ${countLabel} celkem`}
      </p>

      {/* Post list */}
      <div
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
              style={{ color: "var(--muted)", opacity: 0.6 }}
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
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--muted)" }}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTag(activeTag === tag ? null : tag);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xs px-2 py-0.5 rounded-full transition-all hover:opacity-80"
                    style={{
                      background:
                        activeTag === tag
                          ? "rgba(139, 92, 246, 0.25)"
                          : "rgba(139, 92, 246, 0.1)",
                      color: "var(--accent-light)",
                    }}
                  >
                    {tag}
                  </button>
                ))}
                <span
                  className="text-xs ml-auto"
                  style={{ color: "var(--muted)", opacity: 0.6 }}
                >
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
            onClick={() => setActiveTag(null)}
            className="mt-4 text-xs underline"
            style={{ color: "var(--accent-light)" }}
          >
            Zobrazit vše
          </button>
        </div>
      )}
    </>
  );
}
