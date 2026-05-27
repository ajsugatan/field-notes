import { type FieldEntry } from "@/lib/entries";
import EntryFrame from "./EntryFrame";

export default function QuoteEntry({ entry }: { entry: FieldEntry }) {
  const responseLine = entry.pairing?.secondBody;

  return (
    <EntryFrame entry={entry}>
      <div className="space-y-4">
        <blockquote className="m-0 p-0">
          <p
            className="font-body italic text-ink leading-tight m-0"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            &ldquo;{entry.body}&rdquo;
          </p>
          {entry.source && (
            <footer className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
              — {entry.source}
            </footer>
          )}
        </blockquote>
        {responseLine && (
          <p className="font-mono text-[0.7rem] tracking-[0.06em] text-mute leading-relaxed m-0 max-w-[52ch]">
            {responseLine}
          </p>
        )}
      </div>
    </EntryFrame>
  );
}
