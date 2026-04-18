import Link from "next/link";
import { posts, formatDate } from "../../lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Cody od Dreamindu",
  description: "Všechny články o AI, web devu, SaaS a produktivitě.",
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
          {posts.length} {posts.length === 1 ? "článek" : posts.length < 5 ? "články" : "článků"} o AI, SaaS, web devu a produktivitě.
        </p>
      </div>

      <div className="flex flex-col gap-px" style={{ borderTop: "1px solid var(--border)" }}>
        {posts.map((post) => (
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
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(139, 92, 246, 0.1)",
                      color: "var(--accent-light)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs ml-auto" style={{ color: "var(--muted)", opacity: 0.6 }}>
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
