import type { Metadata } from "next";
import NotesList from "@/components/NotesList";
import essays from "@/lib/essays";

export const metadata: Metadata = {
  title: "Field Notes — the archive",
  description: "An archive of attention — reading, watching, listening, written down.",
};

export default function NotesPage() {
  return (
    <div style={{ padding: "clamp(96px,15vh,168px) var(--pm) clamp(80px,12vh,140px)" }}>
      <header className="mb-[clamp(40px,7vh,80px)]">
        <div className="mono mb-6">Field Notes / the archive</div>
        <h1
          className="display m-0"
          style={{
            fontSize: "var(--fs-display)",
            lineHeight: "var(--lh-display)",
            letterSpacing: "-0.03em",
            maxWidth: "16ch",
          }}
        >
          An archive of attention.
        </h1>
      </header>

      <div className="rule-bold mb-2" />
      <NotesList />
      <p className="mono mt-10">
        {String(essays.length).padStart(3, "0")} entries · more arrive when something
        earns one
      </p>
    </div>
  );
}
