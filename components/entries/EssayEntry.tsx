import Link from "next/link";
import { type FieldEntry } from "@/lib/entries";
import essays from "@/lib/essays";
import EntryFrame from "./EntryFrame";

export default function EssayEntry({ entry }: { entry: FieldEntry }) {
  const fullEssay = essays.find((e) => e.slug === entry.slug);
  const title = fullEssay?.title ?? entry.slug ?? "";

  return (
    <EntryFrame entry={entry}>
      <div className="space-y-3">
        <h2 className="m-0">
          <Link
            href={`/notes/${entry.slug}`}
            style={{ textDecoration: "none", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            className="font-display font-black text-ink leading-tight display-tight block hover:underline"
          >
            {title}
          </Link>
        </h2>
        <p className="font-ui font-normal text-ink text-[1rem] m-0 max-w-[44ch]">
          {entry.body}
        </p>
        <div className="pt-2">
          <Link
            href={`/notes/${entry.slug}`}
            className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink hover:underline"
            style={{ textDecoration: "none" }}
          >
            READ →
          </Link>
        </div>
      </div>
    </EntryFrame>
  );
}
