"use client";

import { useEffect, useRef } from "react";
import { useRail } from "./RailContext";

// x:### y:### · HOVERED-LABEL — coordinates write straight to the DOM on a
// rAF loop so mouse movement never triggers a React re-render. The label comes
// from rail context and only changes on hover enter/leave.
export default function CursorReadout() {
  const { preview, cursorRef } = useRail();
  const xRef = useRef<HTMLSpanElement>(null);
  const yRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    let raf = 0;
    const tick = () => {
      const { x, y } = cursorRef.current;
      if (xRef.current) xRef.current.textContent = String(Math.round(x)).padStart(3, "0");
      if (yRef.current) yRef.current.textContent = String(Math.round(y)).padStart(3, "0");
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [cursorRef]);

  return (
    <div className="mono flex items-center gap-1.5 text-ink-soft">
      <span>x:</span>
      <span ref={xRef} className="text-ink tabular-nums">000</span>
      <span>y:</span>
      <span ref={yRef} className="text-ink tabular-nums">000</span>
      <span className="opacity-40">·</span>
      <span className="text-red">{preview ? preview.label : "FIELD"}</span>
    </div>
  );
}
