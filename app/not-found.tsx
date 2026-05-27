import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-24 pb-24 max-w-2xl mx-auto text-center">
      <div className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70 mb-8">
        Off the map &middot; 404
      </div>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.95] text-ink">
        That field note <span className="italic text-ochreDeep">is not here.</span>
      </h1>
      <p className="mt-8 font-body text-lg text-inkSoft leading-relaxed">
        Either it has not been written yet, or it is filed under another
        heading. Return to the index for what is in print.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block font-mono text-[0.75rem] tracking-widest uppercase link-underline"
      >
        Back to the Index
      </Link>
    </section>
  );
}
