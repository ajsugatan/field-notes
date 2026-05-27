import { type FieldEntry } from "@/lib/entries";
import EntryFrame from "./EntryFrame";

export default function NoteEntry({ entry }: { entry: FieldEntry }) {
  return (
    <EntryFrame entry={entry}>
      <p
        className="font-ui font-semibold text-ink leading-snug m-0 max-w-[50ch]"
        style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
      >
        {entry.body}
      </p>
    </EntryFrame>
  );
}
