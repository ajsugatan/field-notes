import FigCaption from "../FigCaption";

// A before/after pair. BEFORE stays ink-soft; AFTER is marked in red. Each side
// frames a visual (Specimen or node) with a mono label and optional caption.
export default function BeforeAfter({
  before,
  after,
  beforeCaption,
  afterCaption,
  principle,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeCaption?: string;
  afterCaption?: string;
  principle?: string;
}) {
  return (
    <div className="py-6 border-t border-hairline first:border-t-0">
      {principle && (
        <div className="mono text-ink-soft mb-4">
          MAPS TO / <span className="text-red">{principle}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="mono text-ink-soft mb-2">BEFORE</div>
          <div className="figframe aspect-[16/10] bg-paper-2/40">{before}</div>
          {beforeCaption && <FigCaption text={beforeCaption} />}
        </div>
        <div>
          <div className="mono text-red mb-2">AFTER</div>
          <div className="figframe aspect-[16/10] bg-paper-2/40">{after}</div>
          {afterCaption && <FigCaption text={afterCaption} />}
        </div>
      </div>
    </div>
  );
}
