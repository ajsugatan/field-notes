// The project index — 5 rows on the homepage IndexTable.
// `specimen` selects a generated visual for the MarginRail hover preview
// (no decorative stock imagery; every preview is drawn).

export type ProjectType = "STUDY" | "SYSTEM" | "SPECULATIVE";
export type Specimen = "audit" | "grid" | "stack" | "mark" | "slab";

export type Project = {
  id: string; // "001"
  title: string; // full editorial title
  short: string; // wordmark for the row
  type: ProjectType;
  year: string;
  blurb: string;
  href?: string; // present only if the row is clickable
  locked?: boolean; // true => shows lockedRow text on hover, no nav
  lockNote?: string; // e.g. "study in progress"
  rail: {
    label: string; // HOVERED-LABEL shown in the cursor readout
    specimen: Specimen;
    annotation: string; // mono note in the rail preview
  };
};

export const projects: Project[] = [
  {
    id: "001",
    title: "BLENDER — A First-Use System for Beginners",
    short: "BLENDER",
    type: "STUDY",
    year: "2026",
    blurb:
      "Designing a first-use system for beginners who get lost before they ever get good.",
    href: "/studies/blender",
    rail: {
      label: "BLENDER",
      specimen: "audit",
      annotation: "fig. 01 — stay oriented, recover, finish one object",
    },
  },
  {
    id: "002",
    title: "TIDEWATCH",
    short: "TIDEWATCH",
    type: "STUDY",
    year: "2025",
    blurb:
      "A retail-operations dashboard — designing what an operator is allowed to ignore.",
    locked: true,
    lockNote: "study in progress",
    rail: {
      label: "TIDEWATCH",
      specimen: "grid",
      annotation: "fig. 02 — what an operator may ignore",
    },
  },
  {
    id: "003",
    title: "FAT F*CKS",
    short: "FAT F*CKS",
    type: "STUDY",
    year: "2025",
    blurb:
      "A beef-sandwich pop-up, run as a service-design field study of a microtribe.",
    locked: true,
    lockNote: "study in progress",
    rail: {
      label: "FAT FCKS",
      specimen: "stack",
      annotation: "fig. 03 — permission as the product",
    },
  },
  {
    id: "004",
    title: "UNPERFORMING",
    short: "UNPERFORMING",
    type: "SYSTEM",
    year: "2024–",
    blurb: "A visual language for presence over performance.",
    href: "/artifacts#unperforming",
    rail: {
      label: "UNPERFORMING",
      specimen: "mark",
      annotation: "fig. 04 — presence over performance",
    },
  },
  {
    id: "005",
    title: "CANON",
    short: "CANON",
    type: "SPECULATIVE",
    year: "2024",
    blurb:
      "A brutalist slab where touch selects scripture — network spirituality as installation.",
    href: "/artifacts#canon",
    rail: {
      label: "CANON",
      specimen: "slab",
      annotation: "fig. 05 — touch selects scripture",
    },
  },
];
