import FigCaption from "./FigCaption";

// A framed visual with numbered red callouts and leader lines drawn to labels.
// Coordinates are percentages of the frame. `dot` is where the callout points;
// `label` is where the text sits — a leader line connects the two.
export type Callout = {
  n: number;
  dot: [number, number]; // [x%, y%]
  label: [number, number]; // [x%, y%]
  text: string;
  align?: "left" | "right";
};

export default function AnnotatedImage({
  children,
  callouts,
  caption,
  ratio = "16 / 10",
}: {
  children: React.ReactNode; // the visual (Specimen, img, etc.)
  callouts: Callout[];
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className="m-0">
      <div className="figframe relative bg-paper-2/40" style={{ aspectRatio: ratio }}>
        {/* the visual */}
        <div className="absolute inset-0">{children}</div>

        {/* leader lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {callouts.map((c) => (
            <line
              key={c.n}
              x1={c.dot[0]}
              y1={c.dot[1]}
              x2={c.label[0]}
              y2={c.label[1]}
              stroke="var(--red)"
              strokeWidth={0.3}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* dots */}
        {callouts.map((c) => (
          <span
            key={`d${c.n}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: `${c.dot[0]}%`, top: `${c.dot[1]}%` }}
          >
            <span className="block w-2 h-2 rounded-full bg-red" />
          </span>
        ))}

        {/* labels */}
        {callouts.map((c) => (
          <div
            key={`l${c.n}`}
            className="absolute flex items-start gap-1.5 max-w-[42%]"
            style={{
              left: `${c.label[0]}%`,
              top: `${c.label[1]}%`,
              transform: `translate(${c.align === "right" ? "-100%" : "0"}, -50%)`,
              flexDirection: c.align === "right" ? "row-reverse" : "row",
              textAlign: c.align === "right" ? "right" : "left",
            }}
          >
            <span className="mono text-red leading-none shrink-0">
              {String(c.n).padStart(2, "0")}
            </span>
            <span className="mono normal-case tracking-mono text-ink leading-tight">
              {c.text}
            </span>
          </div>
        ))}
      </div>
      {caption && <FigCaption text={caption} />}
    </figure>
  );
}
