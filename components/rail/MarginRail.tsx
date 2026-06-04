"use client";

import { AnimatePresence, motion } from "framer-motion";
import Specimen from "@/components/Specimen";
import FigCaption from "@/components/FigCaption";
import CursorReadout from "./CursorReadout";
import { useRail } from "./RailContext";

export type RailMeta = { label: string; value: string };

// The margin rail — sticky, lives in the reserved right 2 columns. Holds page
// metadata, the hover thumbnail + annotation, and the live cursor readout.
// Hidden below lg; on small screens its content collapses inline elsewhere.
export default function MarginRail({
  meta = [],
  note,
}: {
  meta?: RailMeta[];
  note?: string;
}) {
  const { preview } = useRail();

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[calc(var(--bar-h)+24px)] flex flex-col gap-6">
        {/* metadata track */}
        {meta.length > 0 && (
          <div className="border-t border-hairline pt-3 flex flex-col gap-1.5">
            {meta.map((m) => (
              <div key={m.label} className="mono flex justify-between gap-3">
                <span className="text-ink-soft">{m.label}</span>
                <span className="text-ink text-right">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {note && (
          <p className="mono normal-case tracking-mono text-ink-soft leading-relaxed">
            {note}
          </p>
        )}

        {/* hover preview thumbnail + annotation */}
        <div className="min-h-[148px]">
          <AnimatePresence mode="wait">
            {preview && (
              <motion.div
                key={preview.label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="figframe aspect-[4/3] bg-paper-2/40">
                  <Specimen kind={preview.specimen} />
                </div>
                <FigCaption text={preview.annotation} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* live cursor readout */}
        <div className="border-t border-hairline pt-3">
          <CursorReadout />
        </div>
      </div>
    </aside>
  );
}
