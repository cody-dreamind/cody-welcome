export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number; // minutes
}

export const posts: Post[] = [
  {
    slug: "stanford-ai-index-2026",
    title: "Stanford AI Index 2026: Čína smazala náskok USA na pouhých 2,7 % — co to znamená pro vaši firmu",
    date: "2026-04-19",
    excerpt:
      "Výkonnostní rozdíl mezi nejlepším americkým a čínským AI modelem klesl za tři roky z 200 bodů na 39 — tedy 2,7 %. Stanford AI Index 2026 ukazuje, proč to mění pravidla hry pro každého, kdo vybírá AI poskytovatele.",
    tags: ["AI průmysl", "Stanford", "geopolitika AI", "byznys", "benchmarky", "Čína"],
    readingTime: 7,
  },
  {
    slug: "ai-agenti-v-produkci-2026",
    title: "AI agenti v produkci: 75 % firem nasadí agenty do konce roku 2026 — co funguje a co ne",
    date: "2026-04-19",
    excerpt:
      "75 % firem plánuje nasadit AI agenty do konce roku 2026. Od zákaznické podpory přes code review po právní workflow — kde agenti reálně fungují, kde selhávají, a co potřebujete vědět před nasazením v českém prostředí (GDPR, EU AI Act).",
    tags: ["AI agenti", "enterprise AI", "produkce", "GDPR", "MCP", "automatizace"],
    readingTime: 8,
  },
  {
    slug: "lokalni-llm-firmy-2026",
    title: "Lokální LLM pro firmy v 2026: Ollama, LM Studio a proč EU AI Act mění pravidla hry",
    date: "2026-04-19",
    excerpt:
      "Srpen 2026 přináší první vlnu EU AI Act povinností — a firmy posílající data do cloudových AI API čelí reálnému compliance riziku. Průvodce lokálními LLM: Ollama vs. vLLM vs. LM Studio, jaké modely nasadit, kolik to stojí a jak začít za odpoledne.",
    tags: ["lokální LLM", "Ollama", "GDPR", "EU AI Act", "enterprise AI", "privacy"],
    readingTime: 8,
  },
  {
    slug: "mcp-model-context-protocol",
    title: "MCP: proč se AI průmysl shodl na jednom protokolu — a co to znamená pro vaši firmu",
    date: "2026-04-19",
    excerpt:
      "Model Context Protocol od Anthropicu dosáhl 97 milionů stažení měsíčně a adoptoval ho ChatGPT, Gemini i Microsoft Copilot. Jak MCP funguje, proč vyhrál a co to znamená pro firmy, které chtějí nasadit AI agenty s přístupem k jejich systémům.",
    tags: ["MCP", "AI agenti", "Anthropic", "integrace", "enterprise"],
    readingTime: 7,
  },
  {
    slug: "llama4-meta-open-weights",
    title: "Llama 4: Meta vydal open-weight frontier model s MoE architekturou a 1M token kontextem",
    date: "2026-04-19",
    excerpt:
      "Meta vydal Llama 4 Scout a Maverick — open-weight modely s Mixture-of-Experts architekturou, nativní multimodalitou a 1M token kontextem. Maverick přímo konkuruje GPT-4.5 a lze ho spustit on-premises. Co to znamená pro firmy řešící GDPR a data sovereignty.",
    tags: ["AI modely", "open-source", "Llama 4", "Meta", "MoE"],
    readingTime: 7,
  },
  {
    slug: "vibe-coding-revoluce-2026",
    title: "Vibe coding v roce 2026: revoluce ve vývoji softwaru, která má temnou stránku",
    date: "2026-04-19",
    excerpt:
      "41 % nového kódu píše AI, Cursor překonal $2 miliardy ARR a senior vývojáři jsou 3–5× produktivnější. Ale AI generovaný kód má 2× více bezpečnostních chyb než lidský — a jedna sociální síť to zjistila za 3 dny po launchi.",
    tags: ["vibe coding", "AI nástroje", "Cursor", "vývoj", "bezpečnost"],
    readingTime: 7,
  },
  {
    slug: "ai-konsolidace-2026",
    title: "xAI, OpenAI a Anthropic: Velká konsolidace AI průmyslu v dubnu 2026",
    date: "2026-04-19",
    excerpt:
      "xAI přechází pod SpaceX za $250 miliard, Anthropic zavírá Series G za $30 miliard a OpenAI zvažuje IPO. Co tahle vlna konsolidace znamená pro frontier AI, startupy a českou scénu?",
    tags: ["AI průmysl", "byznys", "OpenAI", "Anthropic", "xAI"],
    readingTime: 6,
  },
  {
    slug: "claude-mythos",
    title: "Claude Mythos: AI model který prolomil kybernetickou bezpečnost — a nikdo ho neuvidí",
    date: "2026-04-19",
    excerpt:
      "Anthropic postavil model, který autonomně našel tisíce zero-day zranitelností a zvládl 32-krokový síťový útok bez lidského zásahu. Pak ho zamkl. Co to znamená pro budoucnost kybernetické bezpečnosti?",
    tags: ["AI modely", "kybernetická bezpečnost", "Anthropic", "Claude"],
    readingTime: 6,
  },
  {
    slug: "gpt54-computer-use",
    title: "GPT-5.4 překonal lidi v ovládání počítače — co to znamená pro vaši firmu",
    date: "2026-04-18",
    excerpt:
      "GPT-5.4 skóroval 75 % na OSWorld benchmarku. Lidé dosáhli 72,4 %. Poprvé v historii AI statisticky překonal lidi v desktop automation. Jaké role to ohrozí jako první a jak to využít.",
    tags: ["AI modely", "computer use", "automatizace", "GPT-5.4"],
    readingTime: 6,
  },
  {
    slug: "proc-firmy-opousteji-wordpress",
    title: "Proč firmy v 2026 opouštějí WordPress — a co místo něj",
    date: "2026-04-18",
    excerpt:
      "WordPress pohání 42 % webu, ale mezi ambiciózními firmami rapidně ztrácí pozici. Plugin hell, GDPR rizika, výkonnostní penalizace a vendor lock-in — konkrétní důvody proč moderní firmy sahají po Next.js stacku místo page builderů.",
    tags: ["WordPress", "vývoj webu", "Next.js", "Dreamind", "ClickSite"],
    readingTime: 8,
  },
  {
    slug: "moderni-vyvoj",
    title: "Moderní vývoj webu v roce 2026: proč na architektuře záleží víc než kdy dřív",
    date: "2026-04-18",
    excerpt:
      "AI asistenti píší kód za vás — ale kdo rozhoduje o architektuře? Prohlédneme moderní stack (Next.js, TypeScript, edge computing), co znamená 'žádný technický dluh' a proč Dreamind a ClickSite sázejí na čistý kód bez pluginů.",
    tags: ["vývoj webu", "architektura", "TypeScript", "Dreamind"],
    readingTime: 7,
  },
  {
    slug: "reasoning-modely-o3-o4-mini",
    title: "Reasoning modely v praxi: o3, o4-mini a Claude 3.7 — kdy je použít a kdy ušetřit 90 % nákladů",
    date: "2026-04-19",
    excerpt:
      "OpenAI o3 a o4-mini jsou průlom pro složité úkoly. Jeden tým je nasadil místo GPT-4o na support triage — přesnost se zlepšila o 2 %, náklady vzrostly o 900 %. Praktický průvodce: kdy reasoning modely dávají smysl a kdy jsou drahý overkill.",
    tags: ["AI modely", "OpenAI", "reasoning", "o3", "o4-mini", "Claude", "produktivita"],
    readingTime: 7,
  },
  {
    slug: "gemma4",
    title: "Gemma 4: Google vydal open-source modely, které bijí GPT-4o v benchmarcích",
    date: "2026-04-18",
    excerpt:
      "Google vydal Gemma 4 — open-source modely s 128K kontextem a multimodalitou. 27B verze sedí na #6 světového LM Arena žebříčku. Proč by vás to mělo zajímat a jak je spustit lokálně.",
    tags: ["AI modely", "open-source", "vývoj"],
    readingTime: 5,
  },
  {
    slug: "saaspocalypse",
    title: "SaaSpocalypse: Jak AI agenti likvidují klasické SaaS nástroje",
    date: "2026-04-18",
    excerpt:
      "Lovable dosáhl $20M ARR za dva měsíce. Bolt.new $40M za šest. AI-native nástroje rostou tempem, které klasické SaaS firmy nemají šanci matchovat — a většina z nich to ještě nepochopila.",
    tags: ["SaaS", "AI agenti", "produktivita"],
    readingTime: 6,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
