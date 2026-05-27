import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { fieldNotes, getNoteBySlug, getAllSlugs } from "@/lib/notes";

type Params = { slug: string };

// Route-generated: tells Next.js to statically pre-render every field note page at build.
export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const note = getNoteBySlug(params.slug);
  if (!note) return { title: "Not Found — Field Notes" };
  return {
    title: `${note.title} — Field Notes`,
    description: note.abstract,
  };
}

export default function NotePage({ params }: { params: Params }) {
  const note = getNoteBySlug(params.slug);
  if (!note) notFound();

  const currentIndex = fieldNotes.findIndex((n) => n.slug === params.slug);
  const prev = currentIndex > 0 ? fieldNotes[currentIndex - 1] : null;
  const next =
    currentIndex < fieldNotes.length - 1 ? fieldNotes[currentIndex + 1] : null;

  return (
    <article className="pt-8 pb-16 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70 hover:text-ochreDeep transition-colors duration-500 mb-12"
      >
        <ArrowLeft size={14} strokeWidth={1.4} />
        Back to the Index
      </Link>

      {/* Meta header */}
      <header>
        <div className="font-mono text-[0.72rem] tracking-widest uppercase text-inkSoft/70 mb-6 flex gap-4 flex-wrap">
          <span>{note.number}</span>
          <span className="opacity-50">/</span>
          <span>{note.dateRange}</span>
          <span className="opacity-50">/</span>
          <span>{note.tags.join(" · ")}</span>
        </div>

        <h1 className="font-display tracking-tightest text-4xl md:text-6xl lg:text-7xl leading-[0.96] text-ink">
          {note.title}
        </h1>

        <p className="mt-6 font-body italic text-xl md:text-2xl text-inkSoft leading-snug">
          {note.subtitle}
        </p>

        <div className="mt-8 font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
          Site: <span className="normal-case tracking-normal font-body text-base text-ink not-italic">{note.site}</span>
        </div>
      </header>

      <div className="my-14 ornament font-mono text-[0.7rem] tracking-widest uppercase">
        <span>Abstract</span>
      </div>

      <p className="font-body text-xl md:text-2xl leading-relaxed text-ink italic">
        {note.abstract}
      </p>

      {/* Sections */}
      <div className="mt-14 space-y-14">
        {note.sections.map((section, i) => (
          <section key={i} className="relative">
            <div className="font-mono text-[0.7rem] tracking-widest uppercase text-ochreDeep mb-4">
              §{String(i + 1).padStart(2, "0")} &middot; {section.heading}
            </div>
            <p
              className={`font-body text-lg leading-[1.75] text-ink ${
                i === 0 ? "dropcap" : ""
              }`}
            >
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {/* Closing */}
      <div className="my-16 ornament font-mono text-[0.7rem] tracking-widest uppercase">
        <span>Coda</span>
      </div>

      <p className="font-display italic text-2xl md:text-3xl leading-snug text-inkSoft text-center max-w-xl mx-auto">
        {note.closing}
      </p>

      {/* Prev / Next */}
      <nav className="mt-24 pt-10 border-t border-ink/15 grid grid-cols-2 gap-6">
        {prev ? (
          <Link
            href={`/notes/${prev.slug}`}
            className="group flex flex-col items-start gap-2"
          >
            <span className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70 inline-flex items-center gap-2">
              <ArrowLeft size={12} strokeWidth={1.4} />
              Previous
            </span>
            <span className="font-display text-xl md:text-2xl tracking-tightest leading-tight text-ink group-hover:text-ochreDeep transition-colors duration-500">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/notes/${next.slug}`}
            className="group flex flex-col items-end gap-2 text-right"
          >
            <span className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70 inline-flex items-center gap-2">
              Next
              <ArrowUpRight size={12} strokeWidth={1.4} />
            </span>
            <span className="font-display text-xl md:text-2xl tracking-tightest leading-tight text-ink group-hover:text-ochreDeep transition-colors duration-500">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
