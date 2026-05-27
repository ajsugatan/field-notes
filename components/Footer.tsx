export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 py-6 mt-12">
      <div className="hairline mb-6" />
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink">
          Field Notes — AJ Sugatan — Vol. I
        </span>
        <div className="flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink">
          <span>© 2026</span>
          <a
            href="/about"
            className="text-ink hover:underline"
            style={{ textDecoration: "none" }}
          >
            Colophon
          </a>
        </div>
      </div>
    </footer>
  );
}
