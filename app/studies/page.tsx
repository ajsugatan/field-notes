import type { Metadata } from "next";
import IndexRow from "@/components/IndexRow";
import MarginRail from "@/components/rail/MarginRail";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Studies — Field Notes",
  description: "Case studies — field studies that became redesigns.",
};

const studies = projects.filter((p) => p.type === "STUDY");

export default function StudiesPage() {
  return (
    <div className="mx-auto max-w-page px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-6">
        <div className="lg:col-span-9">
          <header className="pt-[clamp(96px,15vh,168px)] pb-12">
            <div className="mono mb-5">Studies / case index</div>
            <h1
              className="display m-0"
              style={{ fontWeight: 200, fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", letterSpacing: "-0.02em" }}
            >
              The studies.
            </h1>
            <p
              className="font-sans text-ink-soft mt-5 mb-0 max-w-[58ch]"
              style={{ fontSize: "var(--fs-body)" }}
            >
              Field studies that earned a redesign. One is fully written; the rest are in
              progress and will open when they&apos;ve earned the entry.
            </p>
          </header>

          <div className="hidden md:grid grid-cols-[3rem_1fr_8.5rem_4rem_1.5rem] gap-x-4 pb-2 border-b border-ink">
            <span className="mono text-ink">##</span>
            <span className="mono text-ink">TITLE</span>
            <span className="mono text-ink">TYPE</span>
            <span className="mono text-ink">YEAR</span>
            <span className="mono text-ink text-right">↗</span>
          </div>
          <div className="pb-24">
            {studies.map((p) => (
              <IndexRow key={p.id} project={p} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-11 pt-24">
          <MarginRail
            meta={[
              { label: "SET", value: "STUDIES" },
              { label: "COUNT", value: String(studies.length).padStart(3, "0") },
              { label: "OPEN", value: "001" },
            ]}
            note="Hover a row to pull its specimen into the rail."
          />
        </div>
      </div>
    </div>
  );
}
