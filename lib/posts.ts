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
