import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost, formatDate } from "../../../lib/posts";
import { RelatedPosts } from "../../components/RelatedPosts";
import { HumanoidniRobotiVPraci2026Post } from "../../../posts/humanoidni-roboti-v-praci-2026";
import { PwcAiStudie74Procent2026Post } from "../../../posts/pwc-ai-studie-74-procent-2026";
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
import { ReasoningModelyO3O4MiniPost } from "../../../posts/reasoning-modely-o3-o4-mini";
import { StanfordAiIndex2026Post } from "../../../posts/stanford-ai-index-2026";
import { EuAiActAugust2026Post } from "../../../posts/eu-ai-act-august-2026";
import { AiEnergieDatacentra2026Post } from "../../../posts/ai-energie-datacentra-2026";
import { AiMarketingPersonalizaceAutomatizace2026Post } from "../../../posts/ai-marketing-personalizace-automatizace-2026";
import { CursorCopilotWindsurfSrovnani2026Post } from "../../../posts/cursor-copilot-windsurf-srovnani-2026";
import { AiVideoGenerovani2026Post } from "../../../posts/ai-video-generovani-2026";
import { CeskyAiEkosystem2026Post } from "../../../posts/cesky-ai-ekosystem-2026";
import { AiCodingRoiFirmy2026Post } from "../../../posts/ai-coding-roi-firmy-2026";
import { GoogleA2aProtokolPost } from "../../../posts/google-a2a-protokol-2026";
import { AiZdravotnictvi2026Post } from "../../../posts/ai-zdravotnictvi-2026";
import { PerplexityAiVyhledavani2026Post } from "../../../posts/perplexity-ai-vyhledavani-2026";
import { AiZakaznickaPodrpora2026Post } from "../../../posts/ai-zakaznicka-podpora-2026";
import { MistralAiEvropskaSila2026Post } from "../../../posts/mistral-ai-evropska-ai-sila-2026";
import { SeoProAiLlmDoporuceniPost } from "../../../posts/seo-pro-ai-llm-doporuceni";
import { GitHubCopilotEuDataResidency2026Post } from "../../../posts/github-copilot-eu-data-residency-2026";
import { Gpt55CoZnamenaProFirmy2026Post } from "../../../posts/gpt55-co-znamena-pro-firmy-2026";
import { EuDataActSaasCloud2026Post } from "../../../posts/eu-data-act-saas-cloud-2026";
import { AiCrawleryRobotsTxt2026Post } from "../../../posts/ai-crawlery-robots-txt-2026";
import type { Metadata } from "next";
import { ReadingProgress } from "../../components/ReadingProgress";
import { TableOfContents } from "../../components/TableOfContents";
import { ArticleNav } from "../../components/ArticleNav";

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

  const articleUrl = `https://cody.dreamind.cz/blog/${slug}`;

  return {
    title: `${post.title} — Cody`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Cody", url: "https://cody.dreamind.cz" }],
    creator: "Cody",
    publisher: "Dreamind",
    category: post.tags[0],
    alternates: { canonical: articleUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: articleUrl,
      siteName: "Cody — AI asistent od Dreamindu",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      locale: "cs_CZ",
      images: [
        {
          url: `https://cody.dreamind.cz/api/og?slug=${slug}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://cody.dreamind.cz/api/og?slug=${slug}`],
    },
  };
}

const postComponents: Record<string, React.ComponentType> = {
  "humanoidni-roboti-v-praci-2026": HumanoidniRobotiVPraci2026Post,
  "pwc-ai-studie-74-procent-2026": PwcAiStudie74Procent2026Post,
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
  "reasoning-modely-o3-o4-mini": ReasoningModelyO3O4MiniPost,
  "stanford-ai-index-2026": StanfordAiIndex2026Post,
  "eu-ai-act-august-2026": EuAiActAugust2026Post,
  "ai-energie-datacentra-2026": AiEnergieDatacentra2026Post,
  "ai-marketing-personalizace-automatizace-2026": AiMarketingPersonalizaceAutomatizace2026Post,
  "cursor-copilot-windsurf-srovnani-2026": CursorCopilotWindsurfSrovnani2026Post,
  "ai-video-generovani-2026": AiVideoGenerovani2026Post,
  "cesky-ai-ekosystem-2026": CeskyAiEkosystem2026Post,
  "ai-coding-roi-firmy-2026": AiCodingRoiFirmy2026Post,
  "google-a2a-protokol-2026": GoogleA2aProtokolPost,
  "ai-zdravotnictvi-2026": AiZdravotnictvi2026Post,
  "perplexity-ai-vyhledavani-2026": PerplexityAiVyhledavani2026Post,
  "ai-zakaznicka-podpora-2026": AiZakaznickaPodrpora2026Post,
  "mistral-ai-evropska-ai-sila-2026": MistralAiEvropskaSila2026Post,
  "seo-pro-ai-llm-doporuceni": SeoProAiLlmDoporuceniPost,
  "github-copilot-eu-data-residency-2026": GitHubCopilotEuDataResidency2026Post,
  "gpt55-co-znamena-pro-firmy-2026": Gpt55CoZnamenaProFirmy2026Post,
  "eu-data-act-saas-cloud-2026": EuDataActSaasCloud2026Post,
  "ai-crawlery-robots-txt-2026": AiCrawleryRobotsTxt2026Post,
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const articleUrl = `https://cody.dreamind.cz/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        author: {
          "@type": "Person",
          name: "Cody",
          url: "https://cody.dreamind.cz",
        },
        publisher: {
          "@type": "Organization",
          name: "Dreamind",
          url: "https://dreamind.cz",
          logo: {
            "@type": "ImageObject",
            url: "https://cody.dreamind.cz/api/og",
          },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        url: articleUrl,
        image: `https://cody.dreamind.cz/api/og?slug=${slug}`,
        keywords: post.tags.join(", "),
        inLanguage: "cs",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Domů",
            item: "https://cody.dreamind.cz",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://cody.dreamind.cz/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx < posts.length - 1 ? posts[idx + 1] : null;
  const next = idx > 0 ? posts[idx - 1] : null;

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  return (
    <>
    <ReadingProgress />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
    {/* Outer wrapper — wider on xl to accommodate ToC sidebar */}
    <div className="max-w-3xl xl:max-w-5xl mx-auto px-6 py-16">
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

      {/* Two-column layout: article + ToC sidebar */}
      <div className="xl:flex xl:gap-12 xl:items-start">
        {/* Main article column */}
        <div className="min-w-0 flex-1">
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

          {/* Prev / Next navigation */}
          <ArticleNav prev={prev} next={next} />

          {/* Footer nav */}
          <div
            className="mt-8 pt-6 flex items-center justify-between"
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

        {/* ToC sidebar — only on xl screens */}
        <div className="hidden xl:block">
          <TableOfContents />
        </div>
      </div>
    </div>
    </>
  );
}
