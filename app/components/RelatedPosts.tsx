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

interface RelatedPostsProps {
  currentSlug: string;
  currentTags: string[];
  allPosts: Post[];
}

export function RelatedPosts({
  currentSlug,
  currentTags,
  allPosts,
}: RelatedPostsProps) {
  // Score other posts by tag overlap
  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // Fallback: just take latest posts if no tag overlap
  const related =
    scored.length > 0
      ? scored.map((x) => x.post)
      : allPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section
      className="mt-16 pt-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <h2
        className="text-lg font-semibold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Mohlo by vás zajímat
      </h2>

      <div className="flex flex-col gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 p-4 rounded-xl border transition-all hover:border-purple-500/30"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                {post.tags.slice(0, 2).map((tag) => (
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
              </div>

              <h3
                className="title-link-hover text-sm font-semibold leading-snug mb-1 transition-colors"
                style={{ color: "var(--foreground)" }}
              >
                {post.title}
              </h3>

              <div
                className="flex items-center gap-3 text-xs"
                style={{ color: "var(--muted)", opacity: 0.7 }}
              >
                <span>{formatDate(post.date)}</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>{post.readingTime} min čtení</span>
              </div>
            </div>

            <span
              className="self-center text-sm group-hover:translate-x-1 transition-transform shrink-0"
              style={{ color: "var(--accent-light)" }}
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
