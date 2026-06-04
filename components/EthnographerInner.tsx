"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { statusReadout } from "@/lib/site";
import Crosshair from "@/components/Crosshair";

// The ethnographer's inner world. Locomotive-spirit interactivity, kept
// subtle and editorial: a cursor-aware crosshair reticle (the ethnographer's
// reading lens), staggered scroll reveals, a grayscale portrait that warms on
// hover, and the "currently" block. Black-and-white, Editorial New + Helvetica.

const bio = [
  "I work part engineer and part designer, treating creative work as a research discipline — find what people actually need before anyone's decided what to build, then turn that into something worth making.",
  "I'm finishing a BS in Cognitive Science at UCSD, specializing in design and interaction. I've built software at Google, Microsoft, and Workday, and in August 2026 I'm joining Jump Associates — a strategy and innovation firm whose whole reason to exist is asking the question before the answer.",
  "Beyond the résumé: a Helvetica enthusiast, I miss Anthony Bourdain dearly, believe all music is worship music if you know how to listen, love Japandi brutalism, am an archetypal eldest daughter, and overshare through my writing.",
];

const rules = [
  "arrive unrehearsed",
  "let the children play",
  "the one in love always wins",
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`obs-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function EthnographerInner() {
  const rootRef = useRef<HTMLDivElement>(null);

  // cursor-aware reticle — the ethnographer's reading lens (mouse only)
  const [lens, setLens] = useState({ x: 0, y: 0, on: false });
  const onLensMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    setLens({ x: e.clientX, y: e.clientY, on: true });
  }, []);
  const onLensLeave = useCallback(() => setLens((l) => ({ ...l, on: false })), []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // opt into the entrance only when JS runs (no-JS shows everything)
    document.documentElement.classList.add("obs-anim");
    const els = Array.from(root.querySelectorAll(".obs-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative pb-[clamp(80px,12vh,140px)] pt-[clamp(24px,5vh,56px)]"
      onPointerMove={onLensMove}
      onPointerLeave={onLensLeave}
    >
      <div className="grid grid-cols-1 gap-x-[clamp(24px,5vw,96px)] gap-y-[clamp(48px,8vh,96px)] lg:grid-cols-12">
        {/* ---- portrait — grayscale, warms on hover ---- */}
        <div className="lg:col-span-4">
          <Reveal>
            <div className="group relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src="/me.jpg"
                alt="Alexandra Julia Sugatan"
                fill
                className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
            <p className="mono mt-3">fig. 00 — the ethnographer</p>
          </Reveal>
        </div>

        {/* ---- bio — mixed Editorial New lead + Helvetica body ---- */}
        <div className="lg:col-span-8">
          <Reveal delay={60}>
            <p
              className="m-0"
              style={{ fontSize: "var(--fs-h2)", lineHeight: 1.3, maxWidth: "40ch" }}
            >
              Hi — I&apos;m Alexandra.
            </p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-6" style={{ maxWidth: "62ch" }}>
            {bio.map((p, i) => (
              <Reveal key={i} delay={100 + i * 90}>
                <p className="m-0" style={{ fontSize: "var(--fs-body)", lineHeight: 1.7 }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ---- currently — the inner world ---- */}
      <section className="mt-[clamp(64px,12vh,140px)]">
        <Reveal>
          <div className="rule-bold mb-8" />
          <h2
            className="display lowercase m-0 mb-8"
            style={{ fontWeight: 200, fontSize: "clamp(30px,6vw,84px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
          >
            currently
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {statusReadout.lines.map((line, i) => {
            const Row = (
              <div className="obs-row flex flex-col gap-1 border-t border-[var(--hairline)] py-[clamp(12px,1.6vw,22px)] sm:flex-row sm:items-baseline sm:gap-6">
                <span className="mono shrink-0 sm:w-[10rem]">{line.label}</span>
                <span
                  className="display lowercase"
                  style={{ fontWeight: 200, fontSize: "clamp(20px,2.6vw,38px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                >
                  {line.value}
                </span>
              </div>
            );
            return (
              <Reveal key={line.label} delay={i * 70}>
                {line.href ? (
                  <a href={line.href} target="_blank" rel="noopener noreferrer" className="block no-underline">
                    {Row}
                  </a>
                ) : (
                  Row
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---- rules of engagement — oversized, hover-italic ---- */}
      <section className="mt-[clamp(64px,12vh,140px)]">
        <Reveal>
          <p className="mono mb-6">rules of engagement</p>
        </Reveal>
        <div className="flex flex-col gap-2">
          {rules.map((r, i) => (
            <Reveal key={r} delay={i * 80}>
              <p
                className="display group m-0 cursor-default transition-transform duration-300 hover:translate-x-[clamp(8px,1.4vw,28px)] hover:italic"
                style={{ fontWeight: 200, fontSize: "clamp(26px,5.4vw,76px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}
              >
                {r}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- cursor-aware crosshair reticle (mouse only; hidden on touch) ---- */}
      <div
        aria-hidden
        className="eth-reticle pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: lens.x,
          top: lens.y,
          transform: "translate(-50%, -50%)",
          color: "#fff",
          opacity: lens.on ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <Crosshair size={34} strokeWidth={1.1} />
      </div>
    </div>
  );
}
