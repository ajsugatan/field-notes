// The registration crosshair — the signature mark of the system.
// Inherits currentColor; vector-effect keeps the stroke crisp at any size.
export default function Crosshair({
  size = 16,
  className = "",
  strokeWidth = 1.6,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="5.4" vectorEffect="non-scaling-stroke" />
      <line x1="12" y1="0" x2="12" y2="24" vectorEffect="non-scaling-stroke" />
      <line x1="0" y1="12" x2="24" y2="12" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
