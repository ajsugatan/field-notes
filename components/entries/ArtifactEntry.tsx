import Image from "next/image";
import { type FieldEntry } from "@/lib/entries";
import EntryFrame from "./EntryFrame";

export default function ArtifactEntry({ entry }: { entry: FieldEntry }) {
  return (
    <EntryFrame entry={entry}>
      <div className="space-y-4">
        {entry.image && (
          <figure className="m-0">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
              <Image
                src={entry.image.src}
                alt={entry.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            {entry.image.caption && (
              <figcaption className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
                {entry.image.caption}
              </figcaption>
            )}
          </figure>
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
