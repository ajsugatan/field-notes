"use client";

import { createContext, useContext, useRef, useState, useCallback } from "react";
import type { Specimen } from "@/lib/projects";

export type RailPreview = {
  label: string;
  specimen: Specimen;
  annotation: string;
} | null;

type RailValue = {
  preview: RailPreview;
  setPreview: (p: RailPreview) => void;
  /** ref the CursorReadout reads on its rAF loop — avoids re-render per move */
  cursorRef: React.MutableRefObject<{ x: number; y: number }>;
};

const RailCtx = createContext<RailValue | null>(null);

export function RailProvider({ children }: { children: React.ReactNode }) {
  const [preview, setPreviewState] = useState<RailPreview>(null);
  const cursorRef = useRef({ x: 0, y: 0 });

  const setPreview = useCallback((p: RailPreview) => setPreviewState(p), []);

  return (
    <RailCtx.Provider value={{ preview, setPreview, cursorRef }}>
      {children}
    </RailCtx.Provider>
  );
}

export function useRail() {
  const ctx = useContext(RailCtx);
  if (!ctx) {
    // safe no-op outside a provider (e.g. skeleton pages)
    return {
      preview: null as RailPreview,
      setPreview: () => {},
      cursorRef: { current: { x: 0, y: 0 } },
    };
  }
  return ctx;
}
