import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import essays, { getEssayBySlug, getAllSlugs } from "@/lib/essays";
import { formatEntryDate } from "@/lib/entries";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const essay = getEssayBySlug(params.slug);
  if (!essay) return { title: "Not Found — Field Notes" };
  return {
    title: `${essay.title} — Field Notes`,
    description: essay.abstract,
  };
}

export default function NotePage({ params }: { params: Params }) {
  const essay = getEssayBySlug(params.slug);
  if (!essay) notFound();

  const currentIndex = essays.findIndex((e) => e.slug === params.slug);
  const prev = currentIndex > 0 ? essays[currentIndex - 1] : null;
  const next = currentIndex < essays.length - 1 ? essays[currentIndex + 1] : null;

  return (
    <article className="px-6 md:px-10 pt-8 pb-24 max-w-[72ch] mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute hover:text-ink transition-colors"
        style={{ textDecoration: "none" }}
      >
        ← Index
      </Link>

      <div className="h-12" />

      {/* Title */}
      <h1
        className="font-display font-black text-ink display-tight leading-[1.02] m-0"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {essay.title}
      </h1>

      {/* Subtitle */}
      <p className="font-ui font-normal italic text-ink text-[1.25rem] mt-4 mb-0">
        {essay.subtitle}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute mt-3">
        <span>{essay.number}</span>
        <span className="opacity-40">/</span>
        <span>{essay.dateRange}</span>
        <span className="opacity-40">/</span>
        <span>{essay.tags.join(" · ")}</span>
      </div>

      {essay.site && (
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute mt-2">
          Site:{" "}
          <span className="normal-case tracking-normal font-ui text-[0.875rem] text-ink not-italic">
            {essay.site}
          </span>
        </p>
      )}

      <div className="hairline mt-8 mb-8" />

      {/* Abstract */}
      <p className="font-body text-ink text-[1.25rem] leading-relaxed m-0 italic">
        {essay.abstract}
      </p>

      <div className="h-12" />

      {/* Sections */}
      {essay.sections.map((section, i) => (
        <section key={i} className="mb-12">
          <div className="hairline mb-6" />
          <h2 className="font-ui font-extrabold uppercase tracking-[0.06em] text-ink text-[1.125rem] mt-0 mb-5">
            {section.heading}
          </h2>
          <p className="font-body text-ink text-[1.0625rem] leading-[1.75] m-0">
            {section.body}
          </p>
        </section>
      ))}

      {/* Coda */}
      <div className="mt-16 text-center">
        <div className="hairline mb-10" />
        <p
          className="font-display font-black italic text-ink display-tight leading-tight m-0"
          style={{ fontSize: "2.25rem" }}
        >
          {essay.closing}
        </p>
      </div>

      <div className="h-20" />

      {/* Prev / Next */}
      <nav className="flex items-center justify-between">
        <div>
          {prev && (
            <Link
              href={`/notes/${prev.slug}`}
              className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink hover:underline"
              style={{ textDecoration: "none" }}
            >
              ← Previous
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link
              href={`/notes/${next.slug}`}
              className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink hover:underline"
              style={{ textDecoration: "none" }}
            >
              Next →
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
