// Specimens — the controlled-chaos strip on home and the /artifacts grid.
// Each artifact is a drawn specimen (no stock imagery) with a mono fig caption.

export type SpecimenKind =
  | "slab"
  | "mark"
  | "grid"
  | "stack"
  | "rule"
  | "type";

export type Artifact = {
  id: string; // anchor / key, e.g. "canon"
  fig: string; // "fig. 04.1"
  label: string;
  system: "UNPERFORMING" | "CANON" | "FIELD";
  year: string;
  note: string;
  kind: SpecimenKind;
};

export const artifacts: Artifact[] = [
  {
    id: "canon",
    fig: "fig. 05.1",
    label: "CANON — touch slab",
    system: "CANON",
    year: "2024",
    note: "a brutalist slab where touch selects scripture",
    kind: "slab",
  },
  {
    id: "canon-rite",
    fig: "fig. 05.2",
    label: "CANON — rite sequence",
    system: "CANON",
    year: "2024",
    note: "network spirituality, rendered as installation",
    kind: "stack",
  },
  {
    id: "unperforming",
    fig: "fig. 04.1",
    label: "UNPERFORMING — mark",
    system: "UNPERFORMING",
    year: "2024–",
    note: "a visual language for presence over performance",
    kind: "mark",
  },
  {
    id: "unperforming-grid",
    fig: "fig. 04.2",
    label: "UNPERFORMING — grid",
    system: "UNPERFORMING",
    year: "2024–",
    note: "the system, before it is filled",
    kind: "grid",
  },
  {
    id: "unperforming-rule",
    fig: "fig. 04.3",
    label: "UNPERFORMING — rule",
    system: "UNPERFORMING",
    year: "2024–",
    note: "one hairline, held",
    kind: "rule",
  },
  {
    id: "field-type",
    fig: "fig. 00.1",
    label: "FIELD — type specimen",
    system: "FIELD",
    year: "2026",
    note: "the lockup, reduced to its frame",
    kind: "type",
  },
];
