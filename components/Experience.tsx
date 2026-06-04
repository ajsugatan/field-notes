"use client";

import { useCallback, useState } from "react";
import { experience } from "@/lib/experience";

// Editorial résumé index. Collapsed: a clean ledger line per role
// (number · company · role · dates · location). The achievements stay hidden
// until you engage — hover/focus on desktop, tap on mobile — then reveal with
// a smooth grid-rows transition. Real <button>, aria-expanded, keyboard + focus.
function Entry({ role, index }: { role: (typeof experience)[number]; index: number }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = clicked || hovered;
  const panelId = `exp-panel-${index}`;

  // hover/focus reveal — desktop pointers only (touch falls back to tap)
  const onEnter = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setHovered(true);
  }, []);
  const onLeave = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setHovered(false);
  }, []);

  return (
    <div
      className="exp-entry border-t-[2px] border-black"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setClicked((v) => !v)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="exp-row group block w-full cursor-pointer border-0 bg-transparent text-left"
        style={{ padding: "clamp(20px,2.6vw,32px) 0" }}
      >
        <div className="flex items-baseline gap-x-4 gap-y-1">
          <span className="mono shrink-0">{String(index + 1).padStart(2, "0")}</span>
          <span
            className="display lowercase leading-[0.95]"
            style={{ fontWeight: 200, fontSize: "clamp(30px,4.4vw,64px)", letterSpacing: "-0.03em" }}
          >
            {role.company}
          </span>
          <span
            className="exp-toggle ml-auto shrink-0 self-center display leading-none"
            aria-hidden
            style={{ fontWeight: 200, fontSize: "clamp(24px,2.4vw,34px)" }}
          >
            {open ? "–" : "+"}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="mono normal-case tracking-[0.04em]">{role.role}</span>
          <span className="mono" aria-hidden>·</span>
          <span className="mono">{role.dates}</span>
          <span className="mono" aria-hidden>·</span>
          <span className="mono normal-case tracking-[0.04em]">
            {role.sub} · {role.location}
          </span>
        </div>
      </button>

      {/* achievements — hidden until engaged; smooth grid-rows reveal */}
      <div id={panelId} className="exp-panel" data-open={open} role="region" aria-hidden={!open}>
        <div className="exp-panel-inner">
          <ul
            className="m-0 flex list-none flex-col gap-[clamp(14px,2vh,24px)] p-0"
            style={{ paddingBottom: "clamp(28px,4vh,52px)" }}
          >
            {role.bullets.map((b, j) => (
              <li key={j} className="flex gap-3" style={{ maxWidth: "62ch" }}>
                <span aria-hidden className="select-none pt-[0.15em]">—</span>
                <span style={{ fontSize: "var(--fs-body)", lineHeight: 1.6 }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="flex flex-col border-b-[2px] border-black">
      {experience.map((r, i) => (
        <Entry key={r.company} role={r} index={i} />
      ))}
    </div>
  );
}
