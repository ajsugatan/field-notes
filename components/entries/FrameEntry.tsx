import { type FieldEntry } from "@/lib/entries";
import EntryFrame from "./EntryFrame";

export default function FrameEntry({ entry }: { entry: FieldEntry }) {
  return (
    <EntryFrame entry={entry}>
      <div className="space-y-3">
        {entry.source && (
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink m-0">
            {entry.source}
            {entry.sourceYear ? `, ${entry.sourceYear}` : ""}
          </p>
        )}
        <p
          className="font-ui font-semibold text-ink leading-snug m-0 max-w-[50ch]"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
        >
          {entry.body}
        </p>
      </div>
    </EntryFrame>
  );
}
