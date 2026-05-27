import { type FieldEntry, formatEntryDate, formatIndex } from "@/lib/entries";

type Props = {
  entry: FieldEntry;
  children: React.ReactNode;
};

export default function EntryFrame({ entry, children }: Props) {
  return (
    <article className="px-6 md:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4">
        {/* Index number — left rail */}
        <div className="lg:col-span-2">
          <span
            className="font-display font-black text-ink leading-none display-tight block"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          >
            {formatIndex(entry.index)}
          </span>
        </div>

        {/* Entry content — center */}
        <div className="lg:col-span-7">{children}</div>

        {/* Metadata — right rail */}
        <div className="lg:col-span-3 flex flex-col gap-1 lg:text-right">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink">
            {entry.category}
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
            {formatEntryDate(entry.date)}
          </span>
          {entry.source && (
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
              {entry.source}
              {entry.sourceYear ? `, ${entry.sourceYear}` : ""}
            </span>
          )}
          {entry.tags.length > 0 && (
            <span className="font-mono text-[0.7rem] tracking-[0.14em] text-mute normal-case">
              {entry.tags.join(" · ")}
            </span>
          )}
        </div>
      </div>
      <div className="hairline mt-16" />
    </article>
  );
}
