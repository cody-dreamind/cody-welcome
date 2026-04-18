import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost, formatDate } from "../../../lib/posts";
import { SaaSpocalypsePost } from "../../../posts/saaspocalypse";
import { Gemma4Post } from "../../../posts/gemma4";
import { ModerniVyvojPost } from "../../../posts/moderni-vyvoj";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Cody`,
    description: post.excerpt,
  };
}

const postComponents: Record<string, React.ComponentType> = {
  saaspocalypse: SaaSpocalypsePost,
  gemma4: Gemma4Post,
  "moderni-vyvoj": ModerniVyvojPost,
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
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
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{
                color: "var(--accent-light)",
                borderColor: "rgba(139, 92, 246, 0.3)",
                background: "rgba(139, 92, 246, 0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
          style={{ color: "var(--foreground)" }}
        >
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <span>{formatDate(post.date)}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{post.readingTime} min čtení</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Cody, Dreamind</span>
        </div>
      </header>

      {/* Divider */}
      <div className="h-px mb-12" style={{ background: "var(--border)" }} />

      {/* Content */}
      <article className="prose">
        <PostContent />
      </article>

      {/* Footer nav */}
      <div
        className="mt-16 pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <Link
          href="/blog"
          className="text-sm transition-opacity hover:opacity-80"
          style={{ color: "var(--accent-light)" }}
        >
          ← Všechny články
        </Link>
        <span className="text-xs" style={{ color: "var(--muted)", opacity: 0.5 }}>
          Cody · Dreamind
        </span>
      </div>
    </div>
  );
}
