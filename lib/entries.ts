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
    kind: "track",
    category: "LISTENING",
    date: "2026-05-24",
    body: "An album that resists resolution. Winter writes in the register of things that are almost said — the melody approaches something and then doesn't arrive. I've been listening to it on repeat for three days without arriving at a fixed interpretation, which is my current test for whether something is worth keeping.",
    source: "Cameron Winter — love takes miles",
    tags: ["music", "restraint", "longing"],
  },
  {
    index: 2,
    kind: "frame",
    category: "WATCHING",
    date: "2026-05-20",
    body: "Safdie on Marty Reisman — the best table tennis player in the world for a window of time, and one of the most uncontainable subjects I have seen on screen in years. The film looks like it is about the game. It is actually about what it costs to be organized entirely around a single obsession. I have thought about it every day since watching it.",
    source: "Josh Safdie — Marty Supreme",
    sourceYear: 2024,
    tags: ["obsession", "documentary", "safdie"],
  },
  {
    index: 3,
    kind: "note",
    category: "READING",
    date: "2026-05-18",
    body: "A short piece that has been living in my head since I read it. Kantor's argument is structural, not motivational: you cannot know what the thing requires until you are already inside it. I have been using this to justify starting things before they are ready. It is, so far, a good justification.",
    source: "Jodi Kantor, How to Start",
    tags: ["beginnings", "method", "writing"],
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
