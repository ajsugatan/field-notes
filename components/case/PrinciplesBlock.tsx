export type Principle = { n: string; title: string; body: string };

// Four rules — numbered, hairline-separated, mono index + sans title + soft body.
export default function PrinciplesBlock({ principles }: { principles: Principle[] }) {
  return (
    <ol className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
      {principles.map((p) => (
        <li key={p.n} className="border-t border-hairline pt-4">
          <div className="mono text-red mb-3">{p.n}</div>
          <h3
            className="font-sans text-ink m-0"
            style={{ fontSize: "var(--fs-h2)", lineHeight: 1.2 }}
          >
            {p.title}
          </h3>
          <p
            className="font-sans text-ink-soft mt-3 mb-0"
            style={{ fontSize: "var(--fs-body)" }}
          >
            {p.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
