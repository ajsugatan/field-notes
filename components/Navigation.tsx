import Link from "next/link";
import Clock from "./Clock";

export default function Navigation() {
  return (
    <header className="px-6 md:px-12 pt-8 pb-6">
      <div className="flex items-baseline justify-between gap-6 flex-wrap">
        <Link
          href="/"
          className="font-display text-xl tracking-tightest italic text-ink hover:text-ochreDeep transition-colors duration-500"
        >
          Field Notes
        </Link>
        <nav className="flex items-baseline gap-6 md:gap-8 font-mono text-[0.72rem] tracking-widest uppercase">
          <Link href="/" className="link-underline">Index</Link>
          <Link href="/about" className="link-underline">About</Link>
          <Link href="/now" className="link-underline">Now</Link>
          <Clock />
        </nav>
      </div>
      <div className="mt-6 h-px w-full bg-ink/15" />
    </header>
  );
}
