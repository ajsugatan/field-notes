"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/site";
import Crosshair from "@/components/Crosshair";

type Hover = (typeof about.hovers)[number];

// Split a string into nodes, wrapping any hover phrase in an interactive span.
function tokenize(
  text: string,
  hovers: Hover[],
  onMove: (e: React.PointerEvent, h: Hover) => void,
  onLeave: () => void,
  onTap: (e: React.PointerEvent, h: Hover) => void
) {
  const nodes: React.ReactNode[] = [];
  let rest = text;
  let key = 0;
  // guard against an infinite loop if a phrase is empty
  const phrases = hovers.filter((h) => h.phrase);
  while (rest.length) {
    let bestIdx = -1;
    let best: Hover | null = null;
    for (const h of phrases) {
      const i = rest.indexOf(h.phrase);
      if (i !== -1 && (bestIdx === -1 || i < bestIdx)) {
        bestIdx = i;
        best = h;
      }
    }
    if (bestIdx === -1 || !best) {
      nodes.push(<span key={key++}>{rest}</span>);
      break;
    }
    if (bestIdx > 0) nodes.push(<span key={key++}>{rest.slice(0, bestIdx)}</span>);
    nodes.push(
      <span
        key={key++}
        className="fn-hoverword"
        role="img"
        aria-label={best.alt}
        tabIndex={0}
        onPointerMove={(e) => onMove(e, best!)}
        onPointerLeave={onLeave}
        onPointerDown={(e) => onTap(e, best!)}
      >
        {best.phrase}
      </span>
    );
    rest = rest.slice(bestIdx + best.phrase.length);
  }
  return nodes;
}

export default function HeroAbout() {
  const [active, setActive] = useState<Hover | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // warm the browser cache so the first hover reveal is instant
  useEffect(() => {
    about.hovers.forEach((h) => {
      const img = new window.Image();
      img.src = h.src;
    });
  }, []);

  const onMove = useCallback((e: React.PointerEvent, h: Hover) => {
    if (e.pointerType !== "mouse") return; // touch handled by onTap
    setActive(h);
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const onLeave = useCallback(() => {
    if (tapTimer.current) return; // a tap reveal is in flight
    setActive(null);
  }, []);

  // touch / pen fallback: flash the logo, centred, then fade out
  const onTap = useCallback((e: React.PointerEvent, h: Hover) => {
    if (e.pointerType === "mouse") return;
    setActive(h);
    setPos({ x: window.innerWidth / 2, y: window.innerHeight * 0.42 });
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      setActive(null);
      tapTimer.current = null;
    }, 1600);
  }, []);

  const seg3Nodes = tokenize(about.seg3, about.hovers, onMove, onLeave, onTap);

  return (
    <>
      {/* the typographic statement */}
      <p
        className="display m-0"
        style={{
          fontWeight: 200,
          fontSize: "clamp(27px, 3.85vw, 60px)",
          lineHeight: 1.08,
          letterSpacing: "-0.018em",
          maxWidth: "min(96%, 1340px)",
          textWrap: "pretty",
        }}
      >
        {about.name}
        <sup className="align-super text-[0.42em] font-[500]">1</sup> {about.seg1}{" "}
        <Crosshair
          size={20}
          className="inline-block align-[-0.06em] mx-[0.04em]"
          strokeWidth={1.5}
        />{" "}
        {about.seg2}
        <span className="px-[0.04em]"> *</span> {seg3Nodes}
        <sup className="align-super text-[0.42em] font-[500]">2</sup>
        <span className="px-[0.06em]"> → </span>
        {about.seg4}
        <span className="px-[0.1em]"> # </span>
        {about.seg5} <span aria-hidden>↵</span>{" "}
        <Link
          href={about.moreHref}
          className="whitespace-nowrap border-b-[2.5px] border-black pb-[0.02em] transition-colors hover:bg-black hover:text-white"
        >
          {about.more}
        </Link>
      </p>

      {/* top metadata strip — black, Editorial New, no grey */}
      <div className="mt-[clamp(26px,4vh,46px)] flex flex-wrap items-baseline gap-x-[clamp(20px,3vw,52px)] gap-y-2">
        {about.footnotes.map((f) => (
          <span
            key={f.mark}
            className="display text-black"
            style={{
              fontWeight: 200,
              fontSize: "clamp(13px,1.15vw,17px)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="font-[500]">{f.mark}</span> — {f.text}
          </span>
        ))}
      </div>

      {/* floating logo overlay — follows cursor; tap-to-flash on touch */}
      <div
        className={`fn-logo-overlay${active ? " on" : ""}`}
        style={{ left: pos.x, top: pos.y }}
        aria-hidden={!active}
      >
        {active && (
          <Image
            src={active.src}
            alt={active.alt}
            width={active.kind === "jump" ? 440 : 320}
            height={active.kind === "jump" ? 198 : 320}
            priority
            style={{
              width:
                active.kind === "jump"
                  ? "clamp(220px, 26vw, 440px)"
                  : "clamp(160px, 18vw, 320px)",
              height: "auto",
            }}
          />
        )}
      </div>
    </>
  );
}
