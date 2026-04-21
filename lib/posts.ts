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
    slug: "seo-pro-ai-llm-doporuceni",
    title: "SEO pro AI: co dělat, aby vás ChatGPT, Google AI Overviews a Copilot doporučovaly",
    date: "2026-04-21",
    excerpt:
      "Kompletní studie o tom, jak zvýšit viditelnost webu v LLM odpovědích a AI vyhledávání. Co je dnes skutečně důležité: crawlability, cite-worthy obsah, third-party zmínky, IndexNow a praktická aplikace na webu Dreamind.",
    tags: ["SEO", "LLM", "GEO", "ChatGPT Search", "AI Overviews", "Copilot", "obsahový marketing"],
    readingTime: 12,
  },
  {
    slug: "mistral-ai-evropska-ai-sila-2026",
    title: "Mistral AI: jak francouzský startup s $400M ARR buduje evropskou AI sovereignitu",
    date: "2026-04-21",
    excerpt:
      "Mistral AI dvacetinásobně zvýšil příjmy za rok na $400M ARR, valuace dosáhla $13,8 miliardy a firma začala stavět vlastní datová centra v Evropě. Proč je to důležité pro každou firmu, která řeší GDPR a EU AI Act.",
    tags: ["AI průmysl", "Mistral AI", "Evropa", "data sovereignty", "privacy", "GDPR", "EU AI Act"],
    readingTime: 6,
  },
  {
    slug: "perplexity-ai-vyhledavani-2026",
    title: "Perplexity AI 2026: konec klasického vyhledávání pro firmy?",
    date: "2026-04-20",
    excerpt:
      "Perplexity AI zpracovává 780 milionů dotazů měsíčně, má 100M aktivních uživatelů a valuaci $20 miliard. Pro firmy přináší reálnou alternativu ke klasickému vyhledávání — ale s důležitou výhradou pro EU.",
    tags: ["AI", "vyhledávání", "Perplexity", "Google", "enterprise", "privacy", "GDPR"],
    readingTime: 7,
  },
  {
    slug: "ai-zakaznicka-podpora-2026",
    title: "AI v zákaznickém servisu 2026: čísla, nástroje a co čeká firmy, které ještě nezačaly",
    date: "2026-04-20",
    excerpt:
      "88 % organizací používá AI v zákaznické podpoře, ale jen 7 % ji má plně nasazenou. Přehled platforem (Intercom Fin, Zendesk AI, Agentforce), reálné ROI a GDPR checklist pro firmy v EU.",
    tags: ["AI", "zákaznická podpora", "customer service", "chatbot", "Zendesk", "GDPR", "automatizace"],
    readingTime: 7,
  },
  {
    slug: "google-a2a-protokol-2026",
    title: "Google A2A protokol: jak AI agenti konečně mluví mezi sebou",
    date: "2026-04-20",
    excerpt:
      "Google vyvinul A2A protokol pro komunikaci AI agentů. Za rok ho adoptovalo 150+ firem včetně Microsoft, AWS a Salesforce. Co to je a proč na tom záleží?",
    tags: ["AI", "agenti", "protokoly", "Google", "MCP", "multi-agent", "enterprise"],
    readingTime: 7,
  },
  {
    slug: "ai-zdravotnictvi-2026",
    title: "AI ve zdravotnictví 2026: od diagnózy po regulaci",
    date: "2026-04-20",
    excerpt:
      "AI diagnostika překonává radiology v detekci rakoviny prsu, FDA schválila první foundation model pro klinické nasazení a EU AI Act mění pravidla hry. Co to znamená pro české nemocnice?",
    tags: ["AI", "zdravotnictví", "diagnostika", "regulace", "EU AI Act", "radiology"],
    readingTime: 8,
  },
  {
    slug: "ai-coding-roi-firmy-2026",
    title: "AI coding nástroje v 2026: kolik skutečně ušetří vaší firmě?",
    date: "2026-04-19",
    excerpt:
      "GitHub Copilot zkrátil čas dokončení kódu o 55 %, Cursor hlásí 50 % více odeslaného kódu. Konkrétní čísla, ROI kalkulace a doporučení pro české firmy &mdash; Cursor vs. Copilot vs. Windsurf.",
    tags: ["AI nástroje", "vývoj", "Cursor", "GitHub Copilot", "Windsurf", "produktivita", "byznys"],
    readingTime: 8,
  },
  {
    slug: "ai-video-generovani-2026",
    title: "AI generování videa v roce 2026: Sora, Veo 3, Runway a Kling",
    date: "2026-04-19",
    excerpt:
      "Výrobní náklady na video spadly o 91 %, objem generovaných videí vzrostl o 840 %. Srovnáváme čtyři hlavní nástroje — Sora 2, Veo 3.1, Runway Gen-4 a Kling 2.6 — s důrazem na GDPR a reálné use cases pro firmy v ČR a EU.",
    tags: ["AI", "video", "Sora", "Veo 3", "Runway", "Kling", "marketing", "GDPR"],
    readingTime: 7,
  },
  {
    slug: "cesky-ai-ekosystem-2026",
    title: "Český AI ekosystém 2026: startupy, investice a kde Česko stojí ve světě",
    date: "2026-04-19",
    excerpt:
      "Česko má přes 70 AI firem, rekordní AI Factory od EuroHPC a nárůst investic o 174 %. Ale Polsko roste rychleji a brain drain neklesá. Reálný pohled na stav českého AI ekosystému v roce 2026.",
    tags: ["AI", "Česko", "startupy", "investice", "CEE", "ekosystém"],
    readingTime: 8,
  },
  {
    slug: "humanoidni-roboti-v-praci-2026",
    title: "Humanoidní roboti nastupují do práce: Tesla Optimus, Figure AI a co to znamená pro firmy",
    date: "2026-04-19",
    excerpt:
      "Tesla Optimus Gen 3 jde do sériové výroby, Figure 02 odpracoval 10 měsíců v BMW závodě. V roce 2026 humanoidní roboti přestali být prototypy. Co to znamená pro pracovní trh a kdy to pocítí české firmy?",
    tags: ["robotika", "humanoidní roboti", "Tesla Optimus", "Figure AI", "automatizace", "výroba"],
    readingTime: 8,
  },
  {
    slug: "pwc-ai-studie-74-procent-2026",
    title: "74 % zisků z AI bere 20 % firem — PwC studie odhaluje, co je dělá jinak",
    date: "2026-04-19",
    excerpt:
      "Nová PwC studie dotázala 1 217 senior manažerů z 25 odvětví: top 20 % firem generuje 7,2× více AI-driven revenue než průměr. Tři věci, které lídři dělají jinak — a praktický checklist pro vaši firmu.",
    tags: ["AI strategie", "byznys", "PwC", "AI lídři", "produktivita", "enterprise AI"],
    readingTime: 7,
  },
  {
    slug: "cursor-copilot-windsurf-srovnani-2026",
    title: "Cursor vs GitHub Copilot vs Windsurf: praktické srovnání 2026",
    date: "2026-04-19",
    excerpt:
      "Cursor 3 přišel s background agenty, Windsurf přežil akvizici OpenAI a patří pod Cognition. Praktické srovnání tří nejpoužívanějších AI coding nástrojů — ceny, benchmarky, kdy použít co.",
    tags: ["AI nástroje", "vývoj", "Cursor", "GitHub Copilot", "Windsurf", "produktivita"],
    readingTime: 8,
  },
  {
    slug: "ai-marketing-personalizace-automatizace-2026",
    title: "AI v marketingu 2026: personalizace, automatizace a reálné výsledky",
    date: "2026-04-19",
    excerpt:
      "Jak firmy v roce 2026 využívají AI pro personalizaci obsahu, automatizaci kampaní a generování leadů — data, nástroje a praktické kroky pro nasazení.",
    tags: ["AI", "marketing", "personalizace", "automatizace", "HubSpot", "leadgen"],
    readingTime: 7,
  },
  {
    slug: "ai-energie-datacentra-2026",
    title: "AI a energie: Datacentra spotřebují do 2030 víc elektřiny než celá Francie — a co s tím",
    date: "2026-04-19",
    excerpt:
      "AI datacentra pohltí do roku 2030 tolik elektřiny, kolik dnes spotřebuje celá Francie. Nový výzkum neuro-symbolické AI slibuje 100× nižší spotřebu. Co to znamená pro firmy, ESG reporting a výběr cloud providera?",
    tags: ["AI průmysl", "energie", "ESG", "datacentra", "neuro-symbolická AI", "udržitelnost"],
    readingTime: 7,
  },
  {
    slug: "eu-ai-act-august-2026",
    title: "EU AI Act: Za 105 dní vás mohou pokutovat za váš AI agent. Víte, co musíte udělat?",
    date: "2026-04-19",
    excerpt:
      "2. srpna 2026 vstoupí v platnost povinnosti EU AI Actu pro high-risk AI systémy. Pokuty až 15 milionů eur. Praktický checklist: inventura AI systémů, automatické logování dle článku 12, lidský oversight — co musíte mít hotové za 16 týdnů.",
    tags: ["EU AI Act", "compliance", "AI regulace", "enterprise AI", "GDPR", "právní"],
    readingTime: 8,
  },
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
