import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-[clamp(120px,18vh,200px)] pb-32" style={{ paddingInline: "var(--pm)" }}>
      <div className="mono mb-8">Off the map / 404</div>
      <h1
        className="display m-0 max-w-[18ch]"
        style={{ fontWeight: 200, fontSize: "var(--fs-display)", lineHeight: "var(--lh-display)", letterSpacing: "-0.03em" }}
      >
        Not yet — still a note.
      </h1>
      <p
        className="font-sans text-ink-soft mt-8 mb-0 max-w-[52ch]"
        style={{ fontSize: "var(--fs-body)" }}
      >
        Either this entry hasn&apos;t been written, or it&apos;s filed under another
        heading. The index holds everything that&apos;s earned a place.
      </p>
      <Link href="/" className="btn mt-10">
        ← BACK TO THE INDEX
      </Link>
    </section>
  );
}
