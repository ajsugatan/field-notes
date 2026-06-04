import type { Metadata } from "next";
import ArtifactCard from "@/components/ArtifactCard";
import { artifacts } from "@/lib/artifacts";

export const metadata: Metadata = {
  title: "Artifacts — Field Notes",
  description: "A specimen grid — the made things, drawn down to their marks.",
};

export default function ArtifactsPage() {
  return (
    <div className="mx-auto max-w-page px-6">
      <header className="pt-[clamp(96px,15vh,168px)] pb-12 max-w-[60ch]">
        <div className="mono mb-5">Artifacts / specimen grid</div>
        <h1
          className="display m-0"
          style={{ fontWeight: 200, fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", letterSpacing: "-0.02em" }}
        >
          The specimens.
        </h1>
        <p
          className="font-sans text-ink-soft mt-5 mb-0"
          style={{ fontSize: "var(--fs-body)" }}
        >
          The made things, reduced to their marks. Systems and speculative pieces —
          UNPERFORMING and CANON — catalogued as specimens rather than screenshots.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-24">
        {artifacts.map((a) => (
          <ArtifactCard key={a.id} artifact={a} />
        ))}
      </section>
    </div>
  );
}
