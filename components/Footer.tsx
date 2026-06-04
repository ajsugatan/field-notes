import Link from "next/link";
import Crosshair from "@/components/Crosshair";

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-auto flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      style={{
        padding: "clamp(30px,5vh,52px) var(--pm)",
        borderTop: "2.5px solid var(--black)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <Crosshair size={12} />
        <span className="mono">field notes™ — vol. I</span>
      </div>
      <div className="mono normal-case tracking-[0.1em]">
        An archive of attention ·{" "}
        <Link href="/ethnographer" className="link">
          Colophon
        </Link>{" "}
        · 2026
      </div>
    </footer>
  );
}
