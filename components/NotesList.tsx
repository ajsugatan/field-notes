import Link from "next/link";
import essays from "@/lib/essays";

// The essay archive, rendered as an editorial index — not blog cards.
// Big Editorial New titles, a hover crosshair that pushes the row in,
// metadata kept in the grotesque whisper on the right.
export default function NotesList({ limit }: { limit?: number }) {
  const list = limit ? essays.slice(0, limit) : essays;
  return (
    <div className="flex flex-col">
      {list.map((e) => (
        <Link
          key={e.slug}
          href={`/notes/${e.slug}`}
          className="fn-archive-row group relative flex items-baseline gap-3 border-t border-[var(--hairline)] no-underline first:border-t-0"
        >
          <span
            className="fn-archive-ix pointer-events-none absolute left-0 self-center opacity-0 transition-all duration-300 group-hover:opacity-100"
            aria-hidden
          >
            ✳
          </span>
          <span className="mono shrink-0 w-[3.4em] self-center tabular-nums">
            {e.number.replace(/^No\.\s*/, "")}
          </span>
          <span className="display fn-archive-title leading-[0.98]">
            {e.title}
          </span>
          <span className="mono ml-auto self-center hidden sm:block text-right normal-case tracking-[0.04em]">
            {e.tags.join(" · ")} · {e.dateRange}
          </span>
        </Link>
      ))}
    </div>
  );
}
