import type { Metadata } from "next";
import EthnographerInner from "@/components/EthnographerInner";

export const metadata: Metadata = {
  title: "Ethnographer — Field Notes",
  description: "Alexandra Julia Sugatan — designer & researcher. About and contact.",
};

export default function EthnographerPage() {
  return (
    <div style={{ padding: "clamp(96px,15vh,168px) var(--pm) 0" }}>
      <header className="mb-2">
        <div className="mono mb-5">ethnographer / about + contact</div>
        <h1
          className="display m-0"
          style={{
            fontWeight: 200,
            fontSize: "var(--fs-h1)",
            lineHeight: "var(--lh-h1)",
            letterSpacing: "-0.02em",
          }}
        >
          Alexandra Julia Sugatan
        </h1>
      </header>

      <EthnographerInner />
    </div>
  );
}
