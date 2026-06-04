// Drawn specimens. Every rail preview / artifact tile is generated here so the
// archive never leans on decorative stock imagery. Paper fill, hairline frame,
// red as the only accent. Strokes use currentColor so red-on-hover propagates.

type Kind =
  | "audit"
  | "grid"
  | "stack"
  | "mark"
  | "slab"
  | "rule"
  | "type"
  | "default"
  | "calm";

const INK = "var(--ink)";
const SOFT = "var(--ink-soft)";
const RED = "var(--red)";
const HAIR = "var(--hairline)";

function AuditSpec() {
  // 47 tiny controls, no primary action, the eye lands nowhere.
  const cells = [];
  const cols = 9;
  const rows = 6;
  let n = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (n >= 47) break;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={6 + c * 10.4}
          y={8 + r * 13}
          width={8.4}
          height={9}
          fill="none"
          stroke={SOFT}
          strokeWidth={0.75}
        />
      );
      n++;
    }
  }
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      {cells}
      {/* the eye lands nowhere — a single red miss */}
      <circle cx={52} cy={47} r={2.2} fill={RED} />
    </svg>
  );
}

function GridSpec() {
  const lines = [];
  for (let i = 1; i < 6; i++)
    lines.push(
      <line key={`v${i}`} x1={i * 16.6} y1={6} x2={i * 16.6} y2={86} stroke={HAIR} strokeWidth={0.75} />
    );
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      <rect x={4} y={6} width={92} height={80} fill="none" stroke={SOFT} strokeWidth={0.75} />
      {lines}
      <rect x={20.6} y={22} width={14} height={20} fill={INK} opacity={0.12} />
      <rect x={54} y={50} width={14} height={20} fill={RED} opacity={0.85} />
    </svg>
  );
}

function StackSpec() {
  const bars = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      {bars.map((b) => (
        <rect
          key={b}
          x={18}
          y={16 + b * 12.5}
          width={64}
          height={8}
          fill="none"
          stroke={b === 2 ? RED : SOFT}
          strokeWidth={b === 2 ? 1.1 : 0.75}
        />
      ))}
    </svg>
  );
}

function MarkSpec() {
  // presence: a ring left deliberately open.
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      <circle cx={50} cy={46} r={26} fill="none" stroke={INK} strokeWidth={1.1} strokeDasharray="135 30" />
      <circle cx={50} cy={46} r={2.4} fill={RED} />
    </svg>
  );
}

function SlabSpec() {
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      <rect x={38} y={10} width={24} height={72} fill="none" stroke={INK} strokeWidth={1.1} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={38} y1={24 + i * 15} x2={62} y2={24 + i * 15} stroke={HAIR} strokeWidth={0.75} />
      ))}
      <circle cx={50} cy={54} r={3} fill={RED} />
    </svg>
  );
}

function RuleSpec() {
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      <line x1={10} y1={46} x2={90} y2={46} stroke={INK} strokeWidth={1} />
      <circle cx={50} cy={46} r={2} fill={RED} />
    </svg>
  );
}

function TypeSpec() {
  return (
    <svg viewBox="0 0 100 92" width="100%" height="100%" aria-hidden>
      <rect x={6} y={6} width={88} height={80} fill="none" stroke={HAIR} strokeWidth={0.75} />
      <text
        x={50}
        y={58}
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontWeight={700}
        fontSize={34}
        letterSpacing={-1}
        fill={INK}
      >
        FN
      </text>
    </svg>
  );
}

// The default Blender screen: menu bar, left tools, right properties stack,
// bottom timeline, a cube in the viewport. Busy, but legible — section 00.
function DefaultSpec() {
  return (
    <svg viewBox="0 0 160 100" width="100%" height="100%" aria-hidden>
      {/* top menu bar */}
      <rect x={0} y={0} width={160} height={7} fill={INK} opacity={0.06} />
      {[6, 18, 28, 40, 52, 64, 78].map((x) => (
        <rect key={x} x={x} y={2.5} width={7} height={2} fill={SOFT} />
      ))}
      {/* left tool column */}
      <rect x={0} y={7} width={9} height={78} fill={INK} opacity={0.04} />
      {[12, 20, 28, 36, 44, 52, 60, 68].map((y) => (
        <rect key={y} x={2.5} y={y} width={4} height={4} fill="none" stroke={SOFT} strokeWidth={0.6} />
      ))}
      {/* right properties stack */}
      <rect x={120} y={7} width={40} height={78} fill={INK} opacity={0.04} />
      {Array.from({ length: 9 }).map((_, i) => (
        <rect key={i} x={123} y={11 + i * 8} width={34} height={5} fill="none" stroke={SOFT} strokeWidth={0.6} />
      ))}
      {/* bottom timeline */}
      <rect x={0} y={85} width={160} height={15} fill={INK} opacity={0.05} />
      {Array.from({ length: 22 }).map((_, i) => (
        <line key={i} x1={6 + i * 7} y1={88} x2={6 + i * 7} y2={97} stroke={SOFT} strokeWidth={0.5} />
      ))}
      {/* viewport cube */}
      <g stroke={INK} strokeWidth={0.8} fill="none">
        <rect x={52} y={36} width={20} height={20} />
        <path d="M52 36 L60 30 L80 30 L72 36 M72 56 L80 50 L80 30 M72 36 L80 30" />
      </g>
      <circle cx={62} cy={46} r={1} fill={RED} />
    </svg>
  );
}

// The redesign: one obvious first action, power held back until asked for.
function CalmSpec() {
  return (
    <svg viewBox="0 0 160 100" width="100%" height="100%" aria-hidden>
      {/* slim top bar */}
      <rect x={0} y={0} width={160} height={6} fill={INK} opacity={0.04} />
      <rect x={6} y={2} width={18} height={2} fill={SOFT} />
      {/* three quiet tools, left */}
      {[16, 26, 36].map((y) => (
        <rect key={y} x={5} y={y} width={4} height={4} fill="none" stroke={SOFT} strokeWidth={0.6} />
      ))}
      {/* big calm viewport */}
      <rect x={16} y={12} width={128} height={70} fill="none" stroke={HAIR} strokeWidth={0.6} />
      {/* one obvious first action */}
      <rect x={58} y={40} width={44} height={14} fill="none" stroke={RED} strokeWidth={1} />
      <text x={80} y={49.5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={5} fill={RED} letterSpacing={0.4}>
        + ADD OBJECT
      </text>
      <text x={80} y={66} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={3.6} fill={SOFT} letterSpacing={0.4}>
        more tools appear as you need them
      </text>
    </svg>
  );
}

export default function Specimen({ kind }: { kind: Kind }) {
  const map = {
    audit: AuditSpec,
    grid: GridSpec,
    stack: StackSpec,
    mark: MarkSpec,
    slab: SlabSpec,
    rule: RuleSpec,
    type: TypeSpec,
    default: DefaultSpec,
    calm: CalmSpec,
  } as const;
  const C = map[kind] ?? GridSpec;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <C />
    </div>
  );
}
