export type EntryCategory =
  | "READING"
  | "LISTENING"
  | "WATCHING"
  | "LOOKING"
  | "OBSERVING"
  | "MAKING";

export type EntryKind =
  | "note"
  | "quote"
  | "track"
  | "frame"
  | "artifact"
  | "essay"
  | "pairing";

export type FieldEntry = {
  index: number;
  kind: EntryKind;
  category: EntryCategory;
  date: string;
  body: string;
  source?: string;
  sourceYear?: number;
  tags: string[];
  image?: { src: string; alt: string; caption?: string };
  slug?: string;
  pairing?: { secondBody: string };
};

export const entries: FieldEntry[] = [
  {
    index: 1,
    kind: "note",
    category: "OBSERVING",
    date: "2026-05-24",
    body: "Sun God Lawn, 4:17pm. Three groups, none acknowledging each other. The boundary between them is enforced by music — each group has a small speaker, calibrated to mark territory without being audible to the neighbors. A polite warzone. I wrote this down before I knew it was a finding.",
    tags: ["ethnography", "public-space", "sound"],
  },
  {
    index: 2,
    kind: "note",
    category: "READING",
    date: "2026-05-22",
    body: "On a paragraph in Foucault. He makes the case that modern power doesn't repress so much as it organizes — it asks you to organize yourself. I keep thinking about this in relation to fitness culture. The cheat meal is not a transgression of the protocol. It is part of the protocol. The protocol has eaten its own opposition.",
    source: "Discipline and Punish",
    sourceYear: 1975,
    tags: ["power", "discipline", "gym"],
  },
  {
    index: 3,
    kind: "track",
    category: "LISTENING",
    date: "2026-05-20",
    body: "There is a way pop has been moving toward downtempo intimacy — vocals close to the mic, ambient texture, drums that refuse to land. I cannot tell yet whether it is honest or a new performance of honesty. The line between the two has always been the actual subject.",
    source: "Addison Rae — Headphones On",
    sourceYear: 2025,
    tags: ["pop", "intimacy", "production"],
  },
  {
    index: 4,
    kind: "quote",
    category: "READING",
    date: "2026-05-18",
    body: "There is no person without a world.",
    source: "Anne Carson, Plainwater",
    tags: ["carson", "self", "world"],
    pairing: {
      secondBody:
        "Underlining for the third time. Most strategy frameworks would be improved by writing this on the cover.",
    },
  },
  {
    index: 5,
    kind: "frame",
    category: "WATCHING",
    date: "2026-05-14",
    body: "A film about a family losing the household android, and the slow grief of going through its memory files. The thing the film knows that most films about AI don't: the loss is not in losing the technology. It is in losing the structure of attention the technology made possible.",
    source: "Kogonada — After Yang",
    sourceYear: 2021,
    tags: ["ai", "grief", "cinema"],
  },
  {
    index: 6,
    kind: "note",
    category: "LOOKING",
    date: "2026-05-11",
    body: "Patagonia's 2024 catalog. Editorial photography that refuses the product shot — they photograph the people the products attract, in their lives, against landscapes that pre-date the brand. The product is incidental. The longing is the product.",
    tags: ["brand", "photography", "catalog"],
  },
  {
    index: 7,
    kind: "artifact",
    category: "MAKING",
    date: "2026-05-08",
    body: "A poster for nothing in particular. Made on a Tuesday after reading about Swiss design for two hours. Filed here without further explanation.",
    image: {
      src: "/artifacts/poster-placeholder.png",
      alt: "Black and white typographic poster, untitled",
      caption: "Untitled, 2026",
    },
    tags: ["poster", "experiment"],
  },
  {
    index: 8,
    kind: "pairing",
    category: "OBSERVING",
    date: "2026-05-04",
    body: "Reading Bolaño in the morning, watching reality TV at night.",
    pairing: {
      secondBody:
        "They are the same thing if you look at them right — both are about people performing a version of themselves they no longer believe in for an audience they cannot see.",
    },
    tags: ["bolaño", "reality-tv", "performance"],
  },
  // Essays migrated from lib/essays.ts
  {
    index: 9,
    kind: "essay",
    category: "MAKING",
    date: "2024-06-15",
    body: "A study of how people perform restraint in private and seek permission in public — and what happens when a brand sells the permission instead of the food.",
    slug: "mythology-of-the-cheat-meal",
    tags: ["ethnography", "brand", "co-founder"],
  },
  {
    index: 10,
    kind: "essay",
    category: "MAKING",
    date: "2025-01-15",
    body: "Field study of nonverbal communication patterns among regular lifters — headphones as social armor, the choreography of equipment sharing, and the unspoken hierarchy of the squat rack.",
    slug: "nonverbal-languages-of-the-gym-floor",
    tags: ["ethnography", "research", "embodied cognition"],
  },
  {
    index: 11,
    kind: "essay",
    category: "MAKING",
    date: "2025-08-20",
    body: "Two years running marketing for an independent label whose customer would have rejected the brand the moment it looked like a brand. Notes on softness, refusal, and how to grow without being seen growing.",
    slug: "designing-for-streetwears-quiet-rebels",
    tags: ["brand", "marketing", "founder support"],
  },
  {
    index: 12,
    kind: "essay",
    category: "MAKING",
    date: "2024-11-10",
    body: "A speculative product that protects civilians from AI-driven public surveillance, treated as a real consumer object. The goal was not to ship it. The goal was to surface what we have already lost.",
    slug: "surveillance-and-the-self",
    tags: ["speculative design", "critique", "studio work"],
  },
  {
    index: 13,
    kind: "essay",
    category: "MAKING",
    date: "2026-04-01",
    body: "Notes from running my own body as a system — caloric deficit, training split, weekly check-ins — and how the discipline of it informs how I think about everything else.",
    slug: "bodies-as-boundary-objects",
    tags: ["practice", "embodied research", "personal"],
  },
  {
    index: 14,
    kind: "essay",
    category: "MAKING",
    date: "2023-09-01",
    body: "Unperforming is a practice of refusing performed identity in favor of authentic presence. It is not a project I am working on. It is the project everything else is downstream of.",
    slug: "unperforming-a-practice",
    tags: ["art practice", "philosophy", "ongoing"],
  },
];

export function entriesByCategory(
  cat: EntryCategory | "ALL"
): FieldEntry[] {
  if (cat === "ALL") return entries;
  return entries.filter((e) => e.category === cat);
}

export function entriesByKind(kind: EntryKind): FieldEntry[] {
  return entries.filter((e) => e.kind === kind);
}

export function formatEntryDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  const months = [
    "JAN","FEB","MAR","APR","MAY","JUN",
    "JUL","AUG","SEP","OCT","NOV","DEC",
  ];
  return `${months[parseInt(month) - 1]} ${parseInt(day)} · ${year}`;
}

export function formatIndex(n: number): string {
  return n.toString().padStart(2, "0") + ".";
}
