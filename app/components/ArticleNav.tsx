import Link from "next/link";
import type { Post } from "../../lib/posts";

interface ArticleNavProps {
  prev: Post | null;
  next: Post | null;
}

export function ArticleNav({ prev, next }: ArticleNavProps) {
  if (!prev && !next) return null;

  return (
    <div
      className="mt-16 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col gap-1.5 p-4 rounded-xl border transition-all hover:border-purple-500/30"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <span className="text-xs flex items-center gap-1" style={{ color: "var(--muted)", opacity: 0.6 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Předchozí
          </span>
          <span
            className="text-sm font-medium leading-snug group-hover:text-purple-300 transition-colors line-clamp-2"
            style={{ color: "var(--foreground)" }}
          >
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col gap-1.5 p-4 rounded-xl border text-right transition-all hover:border-purple-500/30 sm:items-end"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <span className="text-xs flex items-center gap-1 justify-end" style={{ color: "var(--muted)", opacity: 0.6 }}>
            Další
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span
            className="text-sm font-medium leading-snug group-hover:text-purple-300 transition-colors line-clamp-2"
            style={{ color: "var(--foreground)" }}
          >
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
