import { type FieldEntry } from "@/lib/entries";
import EntryFrame from "./EntryFrame";

export default function PairingEntry({ entry }: { entry: FieldEntry }) {
  const secondBody = entry.pairing?.secondBody ?? "";

  return (
    <EntryFrame entry={entry}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="pr-0 md:pr-8 pb-8 md:pb-0">
          <p
            className="font-ui font-semibold text-ink leading-snug m-0"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
          >
            {entry.body}
          </p>
        </div>
        <div className="relative pl-0 md:pl-8">
          <div
            className="hidden md:block absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
          />
          <p
            className="font-ui font-normal text-ink leading-snug m-0"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
          >
            {secondBody}
          </p>
        </div>
      </div>
    </EntryFrame>
  );
}
