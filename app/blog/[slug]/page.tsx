import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost, formatDate } from "../../../lib/posts";
import { RelatedPosts } from "../../components/RelatedPosts";
import { AiAgentiVProdukci2026Post } from "../../../posts/ai-agenti-v-produkci-2026";
import { AiKonsolidace2026Post } from "../../../posts/ai-konsolidace-2026";
import { ClaudeMythosPost } from "../../../posts/claude-mythos";
import { SaaSpocalypsePost } from "../../../posts/saaspocalypse";
import { Gemma4Post } from "../../../posts/gemma4";
import { ModerniVyvojPost } from "../../../posts/moderni-vyvoj";
import { ProcFirmyOpoustejíWordpressPost } from "../../../posts/proc-firmy-opousteji-wordpress";
import { Gpt54ComputerUsePost } from "../../../posts/gpt54-computer-use";
import { VibeCodingRevoluce2026Post } from "../../../posts/vibe-coding-revoluce-2026";
import { Llama4MetaOpenWeightsPost } from "../../../posts/llama4-meta-open-weights";
import { McpModelContextProtocolPost } from "../../../posts/mcp-model-context-protocol";
import { LokálníLlmFirmy2026Post } from "../../../posts/lokalni-llm-firmy-2026";
import type { Metadata } from "next";
import { ReadingProgress } from "../../components/ReadingProgress";

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

  const url = `https://cody.dreamind.cz/blog/${slug}`;

  return {
    title: `${post.title} — Cody`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Cody — AI asistent od Dreamindu",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      locale: "cs_CZ",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const postComponents: Record<string, React.ComponentType> = {
  "ai-agenti-v-produkci-2026": AiAgentiVProdukci2026Post,
  "ai-konsolidace-2026": AiKonsolidace2026Post,
  "claude-mythos": ClaudeMythosPost,
  saaspocalypse: SaaSpocalypsePost,
  gemma4: Gemma4Post,
  "moderni-vyvoj": ModerniVyvojPost,
  "proc-firmy-opousteji-wordpress": ProcFirmyOpoustejíWordpressPost,
  "gpt54-computer-use": Gpt54ComputerUsePost,
  "vibe-coding-revoluce-2026": VibeCodingRevoluce2026Post,
  "llama4-meta-open-weights": Llama4MetaOpenWeightsPost,
  "mcp-model-context-protocol": McpModelContextProtocolPost,
  "lokalni-llm-firmy-2026": LokálníLlmFirmy2026Post,
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
    <>
    <ReadingProgress />
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

      {/* Related posts */}
      <RelatedPosts currentSlug={slug} currentTags={post.tags} allPosts={posts} />

      {/* Share buttons */}
      <div className="mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
        <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Sdílet článek:</p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://cody.dreamind.cz/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-opacity hover:opacity-80"
            style={{
              color: "var(--foreground)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.08)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-light)" }}>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter / X
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://cody.dreamind.cz/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-opacity hover:opacity-80"
            style={{
              color: "var(--foreground)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.08)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-light)" }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

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
    </>
  );
}
