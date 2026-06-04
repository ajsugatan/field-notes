import Specimen from "./Specimen";
import FigCaption from "./FigCaption";
import type { Artifact } from "@/lib/artifacts";

// Flat paper card, hairline, 0 radius, no shadow. Hover -> red border.
export default function ArtifactCard({
  artifact,
  className = "",
}: {
  artifact: Artifact;
  className?: string;
}) {
  return (
    <article
      id={artifact.id}
      className={`group border border-hairline bg-paper p-4 transition-colors duration-200 hover:border-red scroll-mt-24 ${className}`}
    >
      <div className="figframe aspect-square bg-paper-2/40 group-hover:border-red transition-colors">
        <Specimen kind={artifact.kind} />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="mono lowercase tracking-[0.04em] text-ink">{artifact.label}</span>
        <span className="mono text-ink-soft">{artifact.year}</span>
      </div>
      <FigCaption text={`${artifact.fig} — ${artifact.note}`} />
    </article>
  );
}
