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
