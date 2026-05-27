import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-10 mt-24">
      <div className="h-px w-full bg-ink/15 mb-6" />
      <div className="flex justify-between items-baseline gap-6 flex-wrap font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
        <div>
          AJ Sugatan / Field Notes <span className="opacity-60">— Vol. I</span>
        </div>
        <div className="flex gap-5">
          <Link href="/about" className="link-underline">Colophon</Link>
          <a href="mailto:hello@example.com" className="link-underline">
            Correspondence
          </a>
        </div>
      </div>
    </footer>
  );
}
