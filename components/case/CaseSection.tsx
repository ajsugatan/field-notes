// Numbered case section. Mono section marker, then content held to body width.
export default function CaseSection({
  num,
  title,
  id,
  children,
  wide = false,
}: {
  num: string;
  title: string;
  id?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 md:py-16 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="mono text-red">{num}</span>
        <h2 className="mono text-ink m-0" style={{ fontSize: "var(--fs-meta)" }}>
          {title}
        </h2>
      </div>
      <div className={wide ? "" : "max-w-[68ch]"}>{children}</div>
    </section>
  );
}
