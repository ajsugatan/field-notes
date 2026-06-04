"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Honest-tradeoff disclosure. Hairline row, mono summary, red toggle glyph.
export default function Collapsible({
  summary,
  children,
  defaultOpen = false,
}: {
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 bg-transparent border-0 cursor-pointer text-left group"
      >
        <span className="mono text-ink group-hover:text-red transition-colors">
          {summary}
        </span>
        <span className="mono text-red shrink-0">{open ? "—" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 max-w-[68ch] font-sans text-ink-soft" style={{ fontSize: "var(--fs-body)" }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
