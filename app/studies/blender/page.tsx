"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import SlideFigure from "@/components/case/SlideFigure";
import MarginRail from "@/components/rail/MarginRail";

// The case-study deck — Figma-exported slides served as-is, in the order
// supplied. Slide 01 is the title frame (used as the hero visual); 02–09 are
// the narrative; 10 is the full board, kept as a closing appendix.
type Slide = {
  id: string;
  num: string;
  src: string;
  alt: string;
  fig: string;
  caption: string;
  w?: number;
  h?: number;
};

const slides: Slide[] = [
  {
    id: "overview",
    num: "01",
    src: "/case-studies/blender/02-overview.svg",
    alt: "Blender case study — project overview: the problem, the user, and the bet.",
    fig: "fig. 01",
    caption: "overview — the problem, the user, the bet",
    w: 1440,
    h: 960,
  },
  {
    id: "research",
    num: "02",
    src: "/case-studies/blender/03-research-evidence.svg",
    alt: "Research and evidence — observations from first-time Blender sessions.",
    fig: "fig. 02",
    caption: "research — evidence from first sessions",
  },
  {
    id: "synthesis",
    num: "03",
    src: "/case-studies/blender/04-synthesis-map.svg",
    alt: "Synthesis map — clustering the research into the core failure modes.",
    fig: "fig. 03",
    caption: "synthesis — from notes to failure modes",
  },
  {
    id: "principles",
    num: "04",
    src: "/case-studies/blender/05-design-principles.svg",
    alt: "Design principles translated into product requirements.",
    fig: "fig. 04",
    caption: "principles — translated into requirements",
  },
  {
    id: "solution",
    num: "05",
    src: "/case-studies/blender/06-solution-system.svg",
    alt: "The solution system — the first-use framework as a whole.",
    fig: "fig. 05",
    caption: "solution — the first-use system",
  },
  {
    id: "flow",
    num: "06",
    src: "/case-studies/blender/07-key-interaction-flow.svg",
    alt: "Key interaction flow — the path through one meaningful first object.",
    fig: "fig. 06",
    caption: "flow — one meaningful first object",
  },
  {
    id: "prototype",
    num: "07",
    src: "/case-studies/blender/08-prototype-detail.svg",
    alt: "Prototype detail — the orientation and recovery moments up close.",
    fig: "fig. 07",
    caption: "prototype — orientation & recovery, up close",
  },
  {
    id: "impact",
    num: "08",
    src: "/case-studies/blender/09-impact-and-metrics.svg",
    alt: "Impact and metrics — what the framework moved.",
    fig: "fig. 08",
    caption: "impact — what the framework moved",
  },
];

const nav = [
  { id: "hero", num: "00", title: "TITLE" },
  ...slides.map((s) => ({
    id: s.id,
    num: s.num,
    title: s.caption.split(" — ")[0].toUpperCase(),
  })),
  { id: "board", num: "09", title: "BOARD" },
];

export default function BlenderCase() {
  const [active, setActive] = useState(nav[0].id);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    nav.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const activeItem = nav.find((s) => s.id === active) ?? nav[0];

  return (
    <div className="mx-auto max-w-page px-6">
      {/* sticky section label — quiet, tracks the scroll */}
      <div className="sticky top-[60px] z-20 pointer-events-none">
        <div className="flex items-center justify-between py-3 bg-white/85 backdrop-blur-sm border-b border-hairline">
          <span className="mono text-ink">BLENDER CASE STUDY</span>
          <span className="mono text-ink-soft">
            {activeItem.num} · {activeItem.title}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-6">
        {/* CONTENT */}
        <motion.article
          className="lg:col-span-9 lg:col-start-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* breadcrumb */}
          <div className="pt-10 mono text-ink-soft flex items-center gap-3">
            <Link href="/" className="no-underline hover:text-red text-ink-soft">
              INDEX
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/studies" className="no-underline hover:text-red text-ink-soft">
              STUDIES
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-ink">001</span>
          </div>

          {/* HERO */}
          <header id="hero" className="scroll-mt-28 pt-8 pb-14">
            <h1
              className="display text-ink m-0"
              style={{
                fontWeight: 200,
                fontSize: "var(--fs-display)",
                lineHeight: "var(--lh-display)",
                letterSpacing: "-0.03em",
              }}
            >
              Blender
            </h1>
            <p
              className="font-sans text-ink mt-6 mb-0 max-w-[34ch]"
              style={{ fontSize: "var(--fs-h2)", lineHeight: 1.18 }}
            >
              Designing a first-use system for beginners who get lost before they
              ever get good.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8">
              <Tag>PRODUCT DESIGN</Tag>
              <span className="mono text-ink-soft">UX RESEARCH</span>
              <span className="mono text-ink-soft">·</span>
              <span className="mono text-ink-soft">INTERACTION DESIGN</span>
              <span className="mono text-ink-soft">·</span>
              <span className="mono text-ink-soft">COGS 127</span>
            </div>

            <p
              className="font-sans text-ink-soft mt-8 mb-0 max-w-[62ch]"
              style={{ fontSize: "var(--fs-body)" }}
            >
              A first-session framework that helps new Blender users stay oriented,
              recover from mistakes, and complete one meaningful object before they
              drop off.
            </p>

            {/* title frame — the deck's own hero */}
            <div className="mt-12">
              <SlideFigure
                src="/case-studies/blender/01-hero.svg"
                alt="Blender case study — title frame."
                fig="fig. 00"
                caption="title frame"
                priority
              />
            </div>
          </header>

          {/* THE DECK */}
          <div className="space-y-20 md:space-y-28 pb-8">
            {slides.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <SlideFigure
                  src={s.src}
                  alt={s.alt}
                  fig={s.fig}
                  caption={s.caption}
                  width={s.w}
                  height={s.h}
                />
              </section>
            ))}

            {/* APPENDIX — the full board */}
            <section id="board" className="scroll-mt-28 pt-12 border-t border-hairline">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="mono text-ink">09</span>
                <h2 className="mono text-ink m-0" style={{ fontSize: "var(--fs-meta)" }}>
                  THE COMPLETE BOARD
                </h2>
              </div>
              <p
                className="font-sans text-ink-soft mb-8 max-w-[60ch]"
                style={{ fontSize: "var(--fs-body)" }}
              >
                Every frame on one surface — the full COGS 127 board, exactly as
                presented.
              </p>
              <SlideFigure
                src="/case-studies/blender/10-complete-board.svg"
                alt="The complete COGS 127 Blender board — all frames on a single surface."
                fig="fig. 09"
                caption="the complete board"
                width={1723}
                height={4134}
              />
            </section>
          </div>

          {/* NEXT */}
          <div className="py-12 border-t border-ink flex items-center justify-between gap-4">
            <Link
              href="/studies"
              className="mono no-underline hover:text-red text-ink-soft"
            >
              ← ALL STUDIES
            </Link>
            <div className="text-right">
              <div className="mono text-ink">002 / TIDEWATCH</div>
              <div className="mono text-ink-soft mt-1">study in progress ↗</div>
            </div>
          </div>
        </motion.article>

        {/* RAIL */}
        <div ref={railRef} className="lg:col-span-2 lg:col-start-11 pt-10">
          <MarginRail
            meta={[
              { label: "CASE", value: "001" },
              { label: "FRAME", value: `${activeItem.num} ${activeItem.title}` },
              { label: "TYPE", value: "STUDY" },
              { label: "COURSE", value: "COGS 127" },
            ]}
            note="The rail tracks the frame you're reading."
          />
          {/* in-rail frame nav */}
          <nav className="hidden lg:flex flex-col gap-1.5 mt-6 border-t border-hairline pt-3">
            {nav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="mono no-underline transition-colors"
                style={{
                  color: s.id === active ? "var(--ink)" : "var(--ink-soft)",
                  opacity: s.id === active ? 1 : 0.5,
                }}
              >
                {s.num} {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
