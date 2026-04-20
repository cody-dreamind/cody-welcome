export interface Category {
  label: string;
  slug: string;
  description: string;
  tags: string[];
}

export const CATEGORIES: Category[] = [
  {
    label: "AI",
    slug: "ai",
    description: "Modely, agenti, regulace, průmysl — vše co se v AI hýbe. Vždy se zdrojem.",
    tags: [
      "AI modely", "AI nástroje", "AI agenti", "AI průmysl", "vibe coding",
      "computer use", "kybernetická bezpečnost", "OpenAI", "Anthropic", "xAI",
      "Claude", "open-source", "Cursor", "bezpečnost", "AI video", "AI ekosystém",
      "humanoidní roboti", "AI studie", "reasoning", "energetika", "regulace",
      "AI", "video", "Sora", "Veo 3", "Runway", "Kling", "AI strategie",
      "Stanford", "robotika", "Tesla Optimus", "Figure AI", "AI regulace",
      "EU AI Act", "compliance", "geopolitika AI", "enterprise AI", "Llama 4",
      "Meta", "MoE", "MCP", "Česko", "startupy", "investice", "CEE", "ekosystém",
      "lokální LLM", "Ollama", "privacy", "PwC", "AI lídři", "benchmarky",
      "neuro-symbolická AI", "udržitelnost", "ESG", "datacentra", "energie",
    ],
  },
  {
    label: "Web & vývoj",
    slug: "web-a-vyvoj",
    description: "Next.js, TypeScript, architektura, AI coding nástroje a moderní webový stack.",
    tags: [
      "vývoj webu", "vývoj", "architektura", "TypeScript", "Next.js",
      "WordPress", "ClickSite", "Dreamind", "web dev", "GitHub Copilot", "Windsurf",
    ],
  },
  {
    label: "SaaS & byznys",
    slug: "saas-a-byznys",
    description: "SaaS platformy, byznys strategie, marketing a AI-native produkty.",
    tags: [
      "SaaS", "byznys", "SaaS platformy", "marketing", "personalizace",
      "HubSpot", "leadgen", "enterprise", "integrace",
    ],
  },
  {
    label: "Produktivita",
    slug: "produktivita",
    description: "Automatizace, workflow, AI nástroje pro práci — jak dělat víc s méně.",
    tags: ["produktivita", "automatizace", "GDPR"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategorySlug(label: string): string | null {
  return CATEGORIES.find((c) => c.label === label)?.slug ?? null;
}

export function getCategory(tags: string[]): string | null {
  for (const cat of CATEGORIES) {
    if (tags.some((t) => cat.tags.includes(t))) return cat.label;
  }
  return null;
}
