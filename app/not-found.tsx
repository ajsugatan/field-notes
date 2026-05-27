import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-24 pb-24 max-w-2xl mx-auto text-center px-6">
      <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-mute mb-8">
        Off the map · 404
      </div>
      <h1
        className="font-display font-black display-tight leading-[1.02] text-ink m-0"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        That field note is not here.
      </h1>
      <p className="mt-8 font-ui font-normal text-[1rem] text-ink leading-relaxed max-w-sm mx-auto">
        Either it has not been written yet, or it is filed under another
        heading. Return to the index for what is in print.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block font-mono text-[0.75rem] tracking-[0.14em] uppercase text-ink hover:underline"
        style={{ textDecoration: "none" }}
      >
        ← Back to the Index
      </Link>
    </section>
  );
}
