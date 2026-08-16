export type ArticleTrack = "oil-gas" | "data-centers" | "solar" | "general";

// A small block model instead of raw JSX or MDX, so an article's content is
// plain data (easy to add to or hand off to a non-developer) while the page
// template stays in full control of how each block is styled.
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone?: "warning" | "info"; title?: string; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  track: ArticleTrack;
  /** Omit until the article is written — the page shows a "coming soon" state. */
  body?: ArticleBlock[];
};

export const articles: Article[] = [
  // Oil & gas
  {
    slug: "mineral-rights-vs-surface-rights-explained",
    title: "Mineral Rights vs. Surface Rights, Explained",
    description:
      "Why owning your land doesn't always mean owning what's beneath it — and why the distinction changes everything about a negotiation.",
    track: "oil-gas",
    body: [
      {
        type: "paragraph",
        text: "In Texas and Oklahoma, owning land doesn't automatically mean you own everything beneath it. Mineral rights and surface rights can be split apart and owned by entirely different people — sometimes without either owner realizing it until a landman shows up.",
      },
      { type: "heading", text: "What mineral rights actually cover" },
      {
        type: "paragraph",
        text: "Mineral rights are the legal right to explore for, extract, and profit from oil, gas, and other minerals beneath a tract of land. Whoever holds the mineral rights can lease them to an operator, collect bonus and royalty payments, and have a say in how development happens below the surface.",
      },
      { type: "heading", text: "What surface rights actually cover" },
      {
        type: "paragraph",
        text: "Surface rights are the right to use, occupy, and develop the land itself — building a house, farming, grazing livestock, or anything else that happens above ground. Surface owners don't automatically have any claim to what's produced from underneath their land.",
      },
      { type: "heading", text: "How they get separated" },
      {
        type: "paragraph",
        text: "Minerals get “severed” from the surface in a few common ways: a previous owner sold the minerals while keeping the surface (or vice versa), minerals were reserved in a deed generations ago and passed down through inheritance, or a company bought the mineral rights outright at some point in the land's history.",
      },
      {
        type: "list",
        items: [
          "Check your deed for language reserving or granting “oil, gas, and other minerals”",
          "A title company or county clerk's office can help confirm what was severed and when",
          "Owning the surface doesn't mean you were consulted before a mineral lease was signed",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Which one are you?",
        text: "If you're not sure whether you own minerals, surface, or both, start with your deed — or visit our Oil & Gas hub for a quicker way to check.",
      },
      { type: "heading", text: "Why this distinction matters in a negotiation" },
      {
        type: "paragraph",
        text: "A landman's job depends on knowing this distinction better than you do. If you own minerals, you're negotiating bonus and royalty terms. If you own the surface only, you're negotiating access, damages, and restoration — and you may have no say at all in whether development happens, only how. Knowing which owner you are is the first step to knowing what's actually on the table.",
      },
    ],
  },
  {
    slug: "common-landman-negotiation-tactics",
    title: "Common Landman Negotiation Tactics to Watch For",
    description:
      "The patterns that show up again and again when landmen approach mineral and surface owners.",
    track: "oil-gas",
  },
  {
    slug: "what-to-do-when-you-inherit-mineral-rights",
    title: "What to Do When You Inherit Mineral Rights",
    description: "A first-steps guide for heirs who don't know what they own or where to start.",
    track: "oil-gas",
  },
  {
    slug: "how-lease-bonus-and-royalty-rates-work",
    title: "How Lease Bonus and Royalty Rates Actually Work",
    description: "The two numbers that matter most in a mineral lease, and how they're typically set.",
    track: "oil-gas",
  },
  {
    slug: "reading-a-division-order-without-a-law-degree",
    title: "Reading a Division Order Without a Law Degree",
    description: "A plain-language walkthrough of what's actually on that form before you sign it.",
    track: "oil-gas",
  },

  // Data centers
  {
    slug: "what-data-center-companies-want-from-your-land",
    title: "What Data Center Companies Actually Want From Your Land",
    description: "Power access, water, fiber proximity, and acreage — what makes a tract attractive, and why.",
    track: "data-centers",
  },
  {
    slug: "ground-lease-vs-sale-vs-easement",
    title: "Ground Lease vs. Sale vs. Easement: Know the Difference",
    description: "Three very different deal structures that sometimes get pitched as if they're interchangeable.",
    track: "data-centers",
  },
  {
    slug: "questions-before-signing-an-exclusivity-agreement",
    title: "Questions to Ask Before Signing an Exclusivity Agreement",
    description: "What you're giving up during an option period, and what you should get in return.",
    track: "data-centers",
  },

  // Solar
  {
    slug: "how-solar-lease-payments-and-escalation-clauses-work",
    title: "How Solar Lease Payments and Escalation Clauses Work",
    description: "Per-acre rent, scheduled increases, and why the fine print matters over a 20-plus year term.",
    track: "solar",
  },
  {
    slug: "decommissioning-who-is-responsible",
    title: "Decommissioning: Who's Responsible When the Lease Ends",
    description: "What happens to the panels, foundations, and your land once a solar lease is over.",
    track: "solar",
  },
  {
    slug: "option-periods-what-they-mean-and-how-to-negotiate-them",
    title: "Option Periods: What They Mean and How to Negotiate Them",
    description: "The quiet, low-payment phase before construction — and why it still deserves real negotiation.",
    track: "solar",
  },

  // General
  {
    slug: "texas-vs-oklahoma-land-and-mineral-law",
    title: "Texas vs. Oklahoma: How Land and Mineral Law Differs",
    description: "Key differences landowners in each state should know before comparing notes with a neighbor.",
    track: "general",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
