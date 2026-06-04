import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import essays, { getEssayBySlug, getAllSlugs, type ImageInsert } from "@/lib/essays";
import AudioPlayer from "@/components/AudioPlayer";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const essay = getEssayBySlug(params.slug);
  if (!essay) return { title: "Not Found — Field Notes" };
  return {
    title: `${essay.title} — Field Notes`,
    description: essay.abstract ?? essay.title,
  };
}

function VideoBlock({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-10 m-0">
      <div className="figframe">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={src} autoPlay loop muted playsInline controls className="w-full block" />
      </div>
      <p className="mono normal-case tracking-mono text-ink-soft mt-2 m-0">
        {caption ?? "fig. — moving image"}
      </p>
    </figure>
  );
}

function ImageBlock({ images }: { images: ImageInsert[] }) {
  if (images.length === 0) return null;
  if (images.length >= 2) {
    return (
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="figframe">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 768px) 100vw, 34ch"
            />
          </div>
        ))}
      </div>
    );
  }
  const img = images[0];
  return (
    <div className="my-10 figframe">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        style={{ width: "100%", height: "auto", display: "block" }}
        sizes="(max-width: 768px) 100vw, 68ch"
      />
    </div>
  );
}

export default function NotePage({ params }: { params: Params }) {
  const essay = getEssayBySlug(params.slug);
  if (!essay) notFound();

  const currentIndex = essays.findIndex((e) => e.slug === params.slug);
  const prev = currentIndex > 0 ? essays[currentIndex - 1] : null;
  const next = currentIndex < essays.length - 1 ? essays[currentIndex + 1] : null;

  const videoPosition = essay.videoInsertAfterParagraph ?? 7;
  const imagesByParagraph = (essay.imageInserts ?? []).reduce<Record<number, ImageInsert[]>>(
    (acc, img) => {
      (acc[img.afterParagraph] ??= []).push(img);
      return acc;
    },
    {}
  );

  return (
    <article
      className="mx-auto max-w-[72ch]"
      style={{ padding: "clamp(96px,14vh,150px) var(--pm) clamp(80px,12vh,120px)" }}
    >
      <Link href="/notes" className="mono link">
        ← Field Notes
      </Link>

      <div className="h-10" />

      <h1
        className="display m-0 lowercase"
        style={{
          fontWeight: 200,
          fontSize: "var(--fs-h1)",
          lineHeight: "var(--lh-h1)",
          letterSpacing: "-0.02em",
        }}
      >
        {essay.title}
      </h1>

      {essay.subtitle && (
        <p className="mt-4 mb-0" style={{ fontSize: "var(--fs-h2)", color: "var(--ink-soft)" }}>
          {essay.subtitle}
        </p>
      )}

      <div className="flex flex-wrap gap-3 mono mt-5">
        <span className="text-black">{essay.number}</span>
        <span className="opacity-40">/</span>
        <span>{essay.dateRange}</span>
        <span className="opacity-40">/</span>
        <span className="normal-case tracking-mono">{essay.tags.join(" · ")}</span>
      </div>

      {essay.audio && (
        <div className="mt-5">
          <AudioPlayer src={essay.audio} label={essay.audioLabel ?? essay.title} />
        </div>
      )}

      <div className="hairline mt-8 mb-10" />

      {essay.heroImage && (
        <div className="figframe relative w-full mb-10 overflow-hidden" style={{ aspectRatio: "2048/859" }}>
          <Image src={essay.heroImage} alt={essay.title} fill className="object-cover" sizes="72ch" priority />
        </div>
      )}

      {essay.video && videoPosition === -1 && (
        <VideoBlock src={essay.video} caption={essay.videoCaption} />
      )}

      {essay.paragraphs && essay.paragraphs.length > 0 ? (
        <div className="space-y-6">
          {essay.paragraphs.map((para, i) => (
            <div key={i}>
              <p className="font-sans text-ink m-0" style={{ fontSize: "var(--fs-body)", lineHeight: 1.75 }}>
                {para}
              </p>
              {essay.video && videoPosition >= 0 && i === videoPosition && (
                <VideoBlock src={essay.video} caption={essay.videoCaption} />
              )}
              {imagesByParagraph[i] && <ImageBlock images={imagesByParagraph[i]} />}
            </div>
          ))}
        </div>
      ) : (
        <>
          {essay.abstract && (
            <p className="font-sans text-ink m-0" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.4 }}>
              {essay.abstract}
            </p>
          )}
          <div className="h-10" />
          {essay.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <div className="hairline mb-5" />
              <h2 className="mono text-ink mt-0 mb-4">{section.heading}</h2>
              <p className="font-sans text-ink m-0" style={{ fontSize: "var(--fs-body)", lineHeight: 1.75 }}>
                {section.body}
              </p>
            </section>
          ))}
          {essay.closing && (
            <p
              className="font-sans text-ink mt-14 m-0"
              style={{ fontSize: "var(--fs-h2)", lineHeight: 1.35 }}
            >
              {essay.closing}
            </p>
          )}
        </>
      )}

      <div className="h-16" />
      <nav className="flex items-center justify-between border-t border-hairline pt-6">
        <span>
          {prev && (
            <Link href={`/notes/${prev.slug}`} className="mono no-underline text-ink-soft hover:text-red">
              ← PREV
            </Link>
          )}
        </span>
        <span>
          {next && (
            <Link href={`/notes/${next.slug}`} className="mono no-underline text-ink-soft hover:text-red">
              NEXT →
            </Link>
          )}
        </span>
      </nav>
    </article>
  );
}
