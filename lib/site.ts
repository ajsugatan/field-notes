// Verbatim site copy — single source of truth for the homepage masthead,
// the status readout, and footer. Edit text here.

export const site = {
  wordmark: "FIELD NOTES",
  vol: "VOL. I",
  year: "2026",
  byline: "Alexandra Julia Sugatan · designer & researcher · Vol. I",
  coordinate: "32.88°N 117.23°W", // UCSD / San Diego
  title: "FIELD NOTES",
  tagline: "an archive of attention",
  headline: "An archive of attention.",
  email: "ajsugatann@gmail.com",
  thesis:
    "Field studies of how people move through tools, spaces, feelings, and institutions — and the things I made by looking long enough to redesign them.",
  indexIntro:
    "Everything here started as something I couldn't stop looking at. Some of it became a redesign. Some of it stayed a note.",
  lockedRow: "not yet — still a note.",
  footer:
    "FIELD NOTES — VOL. I — © 2026 — more entries arrive when something earns one.",
} as const;

// ---- HOMEPAGE HERO / ABOUT — edit the typographic statement here. ----
// Rendered as one large Editorial New paragraph. The prose lives in these
// segments; the identity marks (crosshair, * → #) are placed between them
// in app/page.tsx so they stay part of the art direction, not the copy.
export const about = {
  name: "Alexandra",
  seg1: "is a multi-disciplinary designer",
  seg2: "born and raised in San Francisco, CA.",
  seg3:
    "She holds a degree in Cognitive Design from UC San Diego. She currently works as a strategist with Jump Associates",
  seg4: "a strategy and innovation firm based in the Bay Area.",
  seg5:
    "For freelance inquiries or collaborative projects, feel free to reach out via email or direct message.",
  more: "(more…)",
  moreHref: "/ethnographer",
  footnotes: [
    { mark: "1", text: "Part designer, part engineer — always humanist." },
    { mark: "2", text: "Cognitive Science & Design, UC San Diego" },
    { mark: "※", text: "an archive of attention" },
  ],
  // Hover-to-reveal logos. The phrase must appear verbatim inside seg3.
  // Edit the image, alt text, or trigger phrase here.
  hovers: [
    {
      phrase: "Jump Associates",
      src: "/logos/jump.png",
      alt: "Jump Associates logo",
      kind: "jump" as const,
    },
    {
      phrase: "UC San Diego",
      src: "/logos/triton.png",
      alt: "UC San Diego triton symbol",
      kind: "ucsd" as const,
    },
  ],
};

// ---- SOCIAL — outlined pill links beneath the email banner. ----
// (Email is rendered separately as the floating pill banner above these.)
export const social: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexandra-sugatan" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

// StatusReadout — types in line-by-line on load.
export type StatusLine = { label: string; value: string; href?: string };

export const statusReadout: { heading: string; lines: StatusLine[] } = {
  heading: "STATUS — VOL. I",
  lines: [
    { label: "PREPARING", value: "needfinding · ethnography · reading Patnaik" },
    { label: "FINISHING", value: "final quarter, UCSD" },
    { label: "TRAINING", value: "weightlifting; muay thai, soon" },
    { label: "READING", value: "Visual Intelligence — Amy Herman" },
    {
      label: "LISTENING",
      value: "open.spotify / ajsugatann",
      href: "https://open.spotify.com/user/ajsugatann?si=00f8f120240f4d1e",
    },
  ],
};
