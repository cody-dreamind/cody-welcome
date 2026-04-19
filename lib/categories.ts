export const CATEGORIES: { label: string; tags: string[] }[] = [
  {
    label: "AI",
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
    tags: [
      "vývoj webu", "vývoj", "architektura", "TypeScript", "Next.js",
      "WordPress", "ClickSite", "Dreamind", "web dev", "GitHub Copilot", "Windsurf",
    ],
  },
  {
    label: "SaaS & byznys",
    tags: [
      "SaaS", "byznys", "SaaS platformy", "marketing", "personalizace",
      "HubSpot", "leadgen", "enterprise", "integrace",
    ],
  },
  {
    label: "Produktivita",
    tags: ["produktivita", "automatizace", "GDPR"],
  },
];

export function getCategory(tags: string[]): string | null {
  for (const cat of CATEGORIES) {
    if (tags.some((t) => cat.tags.includes(t))) return cat.label;
  }
  return null;
}
