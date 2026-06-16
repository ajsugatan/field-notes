"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import Crosshair from "@/components/Crosshair";
import SlideFigure from "@/components/case/SlideFigure";
import MarginRail from "@/components/rail/MarginRail";

/* ============================================================
   QUARTER PORTFOLIO - Spring 2026, UCSD.
   A curated feature, not a single case. Reuses the studies-case
   chrome (sticky label, breadcrumb, margin rail, scroll-spy) so it
   reads as native Field Notes. Three pieces, edited down: one cut
   visual per project, the full Blender deck left one click away.
   ============================================================ */

// ---- mono separator used in place of em dashes throughout ----
const SEP = "·";

// ---- small inline helpers, kept local to keep the change self-contained ----

// Labelled block: mono kicker, then content held to a readable measure.
function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-hairline pt-4">
      <div className="mono text-ink mb-3">{label}</div>
      <div className="max-w-[64ch]">{children}</div>
    </div>
  );
}

// An honest iteration ledger: status token + the move. Shows process
// without faking screenshots. KEPT / CUT / REBUILT read at a glance.
type Step = { status: "TRIED" | "CUT" | "KEPT" | "REBUILT" | "SHIPPED"; note: string };

function IterationLedger({ steps }: { steps: Step[] }) {
  return (
    <ol className="list-none p-0 m-0">
      {steps.map((s, i) => (
        <li
          key={i}
          className="grid grid-cols-[5.5rem_1fr] gap-x-4 py-2.5 border-t border-hairline first:border-t-0 items-baseline"
        >
          <span className="mono text-ink">{s.status}</span>
          <span
            className="font-sans text-ink-soft"
            style={{ fontSize: "var(--fs-small)" }}
          >
            {s.note}
          </span>
        </li>
      ))}
    </ol>
  );
}

// A drawn typographic plate for projects whose assets aren't in the repo.
// Intentional art direction in the site's grammar (figframe + Editorial New
// + crosshair + mono annotation), never a fake mockup.
function TypeSpecimen({
  kicker,
  phrase,
  fig,
  caption,
}: {
  kicker: string;
  phrase: string;
  fig: string;
  caption: string;
}) {
  return (
    <motion.figure
      className="m-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 0.84, 0.3, 1] }}
    >
      <div className="figframe bg-white relative aspect-[16/10] overflow-hidden">
        {/* top register line */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 border-b border-hairline">
          <span className="mono text-ink">{kicker}</span>
          <Crosshair size={12} />
        </div>
        {/* the phrase - drawn, not photographed */}
        <div className="absolute inset-0 flex items-center px-[clamp(20px,5vw,64px)]">
          <p
            className="display text-ink m-0"
            style={{
              fontWeight: 200,
              fontSize: "clamp(22px,3.4vw,46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: "22ch",
            }}
          >
            {phrase}
          </p>
        </div>
        {/* bottom annotation line */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 border-t border-hairline">
          <span className="mono text-ink-soft normal-case tracking-mono">
            no screenshot {SEP} a drawn placeholder
          </span>
          <span className="mono text-ink">SPECIMEN</span>
        </div>
      </div>
      <figcaption className="flex items-baseline gap-3 mt-3">
        <span className="mono text-ink">{fig}</span>
        <span className="mono text-ink-soft normal-case tracking-mono">
          {caption}
        </span>
      </figcaption>
    </motion.figure>
  );
}

// A curated PDF artifact, set in the site's figure grammar: a real first-page
// preview (cropped from the top of the document, never a faked mockup) beside
// a titled panel with context and a view / download affordance. The whole
// preview is a link to the file; the panel repeats it explicitly for clarity.
function PdfArtifact({
  kicker,
  title,
  caption,
  thumb,
  thumbAlt,
  href,
  meta,
  fig,
  figCaption,
}: {
  kicker: string;
  title: string;
  caption: string;
  thumb: string;
  thumbAlt: string;
  href: string;
  meta: string;
  fig: string;
  figCaption: string;
}) {
  return (
    <motion.figure
      className="m-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 0.84, 0.3, 1] }}
    >
      <div className="figframe bg-white grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* first-page preview: links to the file */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/11] overflow-hidden bg-white border-b md:border-b-0 md:border-r border-hairline no-underline"
          aria-label={`Open ${title} (PDF) in a new tab`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={thumbAlt}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 top-3 mono text-ink bg-white/85 backdrop-blur-sm px-2 py-1 border border-hairline">
            PDF
          </span>
        </a>

        {/* context panel */}
        <div className="flex flex-col justify-between gap-6 p-5 md:p-6">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-ink">{kicker}</span>
              <Crosshair size={12} />
            </div>
            <h4
              className="display text-ink mt-4 mb-0"
              style={{
                fontWeight: 200,
                fontSize: "clamp(1.5rem,2.6vw,2.1rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h4>
            <p
              className="font-sans text-ink-soft mt-3 mb-0 max-w-[46ch]"
              style={{ fontSize: "var(--fs-body)" }}
            >
              {caption}
            </p>
          </div>

          <div className="border-t border-hairline pt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <span className="mono text-ink-soft">{meta}</span>
            <div className="flex items-center gap-5">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-ink no-underline hover:text-red"
              >
                VIEW ↗
              </a>
              <a
                href={href}
                download
                className="mono text-ink-soft no-underline hover:text-red"
              >
                DOWNLOAD
              </a>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="flex items-baseline gap-3 mt-3">
        <span className="mono text-ink">{fig}</span>
        <span className="mono text-ink-soft normal-case tracking-mono">
          {figCaption}
        </span>
      </figcaption>
    </motion.figure>
  );
}

// ---- the work ----

const nav = [
  { id: "opening", num: "00", title: "OPENING" },
  { id: "blender", num: "01", title: "BLENDER" },
  { id: "sungod", num: "02", title: "SUN GOD" },
  { id: "designlab", num: "03", title: "STUDIO RESIDENCY" },
  { id: "assessment", num: "04", title: "SELF-ASSESSMENT" },
];

const developments: { n: string; claim: string; proof: string }[] = [
  {
    n: "01",
    claim: "I design for a specific person now, not a vague “user.”",
    proof:
      "In the Blender work the user stopped being “beginners” and became one person at one moment: the first-timer who loses the viewport and quietly decides they are not a 3D person. Every overlay is aimed at that minute, not at the whole audience.",
  },
  {
    n: "02",
    claim: "I use constraints as material instead of designing around them.",
    proof:
      "Sun God’s congestion on the south walkway wasn’t an obstacle to route past. It was the brief. The reservation windows exist because the constraint told me exactly where the coordination cost was hiding.",
  },
  {
    n: "03",
    claim: "I turn critique into product decisions.",
    proof:
      "Scott Klemmer’s “specificity gap” note on the Design Lab proposal didn’t get nodded at and filed. It became v3: every section now points at a named outcome, because the critique showed me the proposal was describing a mood.",
  },
  {
    n: "04",
    claim: "I can say why a direction fits the problem, in the problem’s terms.",
    proof:
      "I can argue why a persistent overlay fits Blender and a linear tutorial doesn’t, in terms of the failure mode rather than my taste. The reasoning lives in the work, not in the caption underneath it.",
  },
  {
    n: "05",
    claim: "I curate and edit instead of trying to show everything.",
    proof:
      "This page is the evidence. Three pieces, one cut visual each, the full Blender deck one click away. A quarter of work, edited down to what actually makes a point.",
  },
];

export default function QuarterPortfolio() {
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
      {/* sticky section label - tracks the scroll, same chrome as the cases */}
      <div className="sticky top-[60px] z-20 pointer-events-none">
        <div className="flex items-center justify-between py-3 bg-white/85 backdrop-blur-sm border-b border-hairline">
          <span className="mono text-ink">QUARTER PORTFOLIO</span>
          <span className="mono text-ink-soft">
            {activeItem.num} {SEP} {activeItem.title}
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
            <span className="text-ink">QUARTER</span>
          </div>

          {/* ===================== OPENING ===================== */}
          <header id="opening" className="scroll-mt-28 pt-8 pb-14">
            <h1
              className="display text-ink m-0"
              style={{
                fontWeight: 200,
                fontSize: "var(--fs-display)",
                lineHeight: "var(--lh-display)",
                letterSpacing: "-0.03em",
              }}
            >
              Quarter Portfolio
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8">
              <Tag>SELECTED WORK</Tag>
              <span className="mono text-ink-soft">SPRING 2026</span>
              <span className="mono text-ink-soft">{SEP}</span>
              <span className="mono text-ink-soft">UC SAN DIEGO</span>
              <span className="mono text-ink-soft">{SEP}</span>
              <span className="mono text-ink-soft">03 PIECES</span>
            </div>

            {/* curatorial statement */}
            <div className="mt-10 max-w-[60ch] flex flex-col gap-5">
              <p
                className="font-sans text-ink m-0"
                style={{ fontSize: "var(--fs-h2)", lineHeight: 1.22 }}
              >
                Three pieces from this quarter, chosen for what they argue, not
                for what they look like.
              </p>
              <p
                className="font-sans text-ink-soft m-0"
                style={{ fontSize: "var(--fs-body)" }}
              >
                The thread is specificity: designing for a named person in a
                real situation instead of a stand-in called the user. Each one
                also asked me to hold a system in view, not just a screen, and
                to defend a direction in the problem’s terms rather than my own.
              </p>
              <p
                className="font-sans text-ink-soft m-0"
                style={{ fontSize: "var(--fs-body)" }}
              >
                I left a lot out. What stayed earns its place by showing a
                decision, a constraint I used on purpose, or a critique that
                changed the work. The rest is still in the notebook.
              </p>
            </div>
          </header>

          <div className="space-y-24 md:space-y-32 pb-8">
            {/* ===================== 01 - BLENDER ===================== */}
            <section id="blender" className="scroll-mt-28">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="mono text-ink">SELECTED / 01</span>
              </div>
              <h2
                className="display text-ink m-0"
                style={{
                  fontWeight: 200,
                  fontSize: "var(--fs-h1)",
                  lineHeight: "var(--lh-h1)",
                  letterSpacing: "-0.02em",
                }}
              >
                Blender
              </h2>
              <p
                className="font-sans text-ink mt-5 mb-0 max-w-[40ch]"
                style={{ fontSize: "var(--fs-h2)", lineHeight: 1.18 }}
              >
                A first-use system for people who quit before they ever get
                good.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6">
                <span className="mono text-ink-soft">COGS 127</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">PRODUCT / INTERACTION</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">2026</span>
                <Link
                  href="/studies/blender"
                  className="mono text-ink ml-auto no-underline hover:text-red"
                >
                  FULL CASE ↗
                </Link>
              </div>

              <div className="mt-10">
                <SlideFigure
                  src="/case-studies/blender/02-overview.svg"
                  alt="Blender first-use system: the problem, the user, and the bet."
                  fig="fig. 01.0"
                  caption="overview / the problem, the user, the bet"
                  width={1440}
                  height={960}
                />
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <Block label="THE PROBLEM">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    New users abandon Blender in the first session. Watching
                    them, the failure wasn’t that the tool has too many
                    features. It was legibility: people lose the viewport,
                    can’t tell what state they’re in, and read their own
                    confusion as proof they are not a 3D person.
                  </p>
                </Block>
                <Block label="KEY CHOICES">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    I designed for legibility instead of feature reduction:
                    three persistent overlays for orientation, recovery, and
                    progress, all ignorable once you don’t need them. Success
                    became one meaningful first object, not coverage of the
                    interface.
                  </p>
                </Block>
                <Block label="ITERATION">
                  <IterationLedger
                    steps={[
                      { status: "TRIED", note: "Teaching the full interface up front. People drowned before they made anything." },
                      { status: "CUT", note: "A linear, locked tutorial. Too rigid; it removed the exact agency that makes Blender worth learning." },
                      { status: "KEPT", note: "Always-available orientation the user can glance at and dismiss." },
                      { status: "SHIPPED", note: "A first-session framework: stay oriented, recover from mistakes, finish one object." },
                    ]}
                  />
                </Block>
                <Block label="WHAT IT SHOWS">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    I stopped designing for “beginners” in general and
                    designed for one moment: the minute a first-timer loses
                    orientation and decides to leave. Naming that moment changed
                    every requirement after it.
                  </p>
                </Block>
              </div>
            </section>

            {/* ===================== 02 - SUN GOD ===================== */}
            <section id="sungod" className="scroll-mt-28 border-t border-ink pt-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="mono text-ink">SELECTED / 02</span>
              </div>
              <h2
                className="display text-ink m-0"
                style={{
                  fontWeight: 200,
                  fontSize: "var(--fs-h1)",
                  lineHeight: "var(--lh-h1)",
                  letterSpacing: "-0.02em",
                }}
              >
                Sun God Lawn
              </h2>
              <p
                className="font-sans text-ink mt-5 mb-0 max-w-[42ch]"
                style={{ fontSize: "var(--fs-h2)", lineHeight: 1.18 }}
              >
                A tabling and reservation system for a campus lawn where the
                effort lands in the wrong place.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6">
                <span className="mono text-ink-soft">COGS 102C</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">COGNITIVE ETHNOGRAPHY / SERVICE DESIGN</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">2026</span>
              </div>
              <div className="mono text-ink-soft normal-case tracking-mono mt-2">
                with Samir, Zoe, Chanelle
              </div>

              <div className="mt-10">
                <TypeSpecimen
                  kicker="FIG. 02.0 / SITE SCHEMATIC"
                  phrase="The effort is in the wrong place."
                  fig="fig. 02.0"
                  caption="affinity finding / the line that reframed the brief"
                />
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <Block label="THE PROBLEM">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    Events on Sun God Lawn looked like a scheduling problem. In
                    the field, the cost showed up somewhere else: a passerby and
                    an organizer are two different actors, and the south walkway
                    quietly absorbs the friction neither of them is designed
                    for.
                  </p>
                </Block>
                <Block label="KEY CHOICES">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    I moved the unit of analysis from the event to the two
                    actors, then reframed congestion as a distribution problem
                    rather than a capacity one. The proposal: perimeter zones
                    with reservation windows, not a longer sign-up sheet.
                  </p>
                </Block>
                <Block label="ITERATION">
                  <IterationLedger
                    steps={[
                      { status: "KEPT", note: "A canopy / architecture direction, held as one of two proposals." },
                      { status: "CUT", note: "A meetup-coordination feature. The observations never supported the need; I was inventing it." },
                      { status: "REBUILT", note: "The sequence model, after it treated friction as a stage. That was a category error in sequence logic." },
                      { status: "SHIPPED", note: "A zoning and reservation system grounded in where the congestion actually sat." },
                    ]}
                  />
                </Block>
                <Block label="WHAT IT SHOWS">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    I got more careful about who the actor is, and more willing
                    to throw out a tidy idea when the field notes didn’t back
                    it. The constraint, not my concept, decided the form.
                  </p>
                </Block>
              </div>
            </section>

            {/* ===================== 03 - STUDIO RESIDENCY ===================== */}
            <section id="designlab" className="scroll-mt-28 border-t border-ink pt-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="mono text-ink">SELECTED / 03</span>
              </div>
              <h2
                className="display text-ink m-0"
                style={{
                  fontWeight: 200,
                  fontSize: "var(--fs-h1)",
                  lineHeight: "var(--lh-h1)",
                  letterSpacing: "-0.02em",
                }}
              >
                Studio Residency
              </h2>
              <p
                className="font-sans text-ink mt-5 mb-0 max-w-[42ch]"
                style={{ fontSize: "var(--fs-h2)", lineHeight: 1.18 }}
              >
                A pilot program for UCSD’s Design Lab, designed as a product
                rather than a pitch.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6">
                <span className="mono text-ink-soft">UCSD DESIGN LAB</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">PROGRAM / SYSTEMS DESIGN</span>
                <span className="mono text-ink-soft">{SEP}</span>
                <span className="mono text-ink-soft">2026</span>
              </div>

              <div className="mt-10">
                <TypeSpecimen
                  kicker="FIG. 03.0 / PROGRAM MODEL"
                  phrase="Real users. Deployable artifacts. Named outcomes."
                  fig="fig. 03.0"
                  caption="v3 thesis / what the program produces, stated plainly"
                />
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <Block label="THE PROBLEM">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    A student residency can easily become another container for
                    deliverables nobody uses. The design question was harder
                    than the pitch: what would make a residency produce real
                    work, for real users, that actually ships?
                  </p>
                </Block>
                <Block label="KEY CHOICES">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    I repositioned the whole program around needfinding with
                    real users and deployable artifacts. Then I built the
                    outreach kit, curriculum, and flyer as one coherent system,
                    so the proposal demonstrated its own thesis instead of
                    asserting it.
                  </p>
                </Block>
                <Block label="ITERATION">
                  <IterationLedger
                    steps={[
                      { status: "TRIED", note: "v1: “a space for students to make things.” Generic, and it knew it." },
                      { status: "REBUILT", note: "After Klemmer’s “specificity gap” critique, the entire frame changed." },
                      { status: "SHIPPED", note: "v3, roughly 23 pages: every part tied to a named outcome and a real user." },
                      { status: "KEPT", note: "The principle underneath it: an artifact should prove its own claim." },
                    ]}
                  />
                </Block>
                <Block label="WHAT IT SHOWS">
                  <p
                    className="font-sans text-ink-soft m-0"
                    style={{ fontSize: "var(--fs-body)" }}
                  >
                    Critique stopped feeling like a verdict and started working
                    like a design input. The strongest version of the program
                    was the one that made its own argument legible.
                  </p>
                </Block>
              </div>

              {/* key artifact: the program document itself */}
              <div className="mt-12">
                <PdfArtifact
                  kicker="ARTIFACT / PROGRAM DOC"
                  title="Design Lab: 0 to Won"
                  caption="A five-week studio system for helping students turn specific user problems into deployable work, portfolio narratives, and critique-ready product decisions."
                  thumb="/case-studies/quarter/design-lab-zero-to-won-thumb.jpg"
                  thumbAlt="First page of the Design Lab: 0 to Won program document."
                  href="/case-studies/quarter/design-lab-zero-to-won.pdf"
                  meta="PDF · PROGRAM DOC · 374 KB"
                  fig="fig. 03.1"
                  figCaption="program document / outreach, curriculum, and the outcomes it commits to"
                />
              </div>
            </section>

            {/* ===================== 04 - SELF-ASSESSMENT ===================== */}
            <section id="assessment" className="scroll-mt-28 border-t border-ink pt-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="mono text-ink">REFLECTION / 04</span>
              </div>
              <h2
                className="display text-ink m-0"
                style={{
                  fontWeight: 200,
                  fontSize: "var(--fs-h1)",
                  lineHeight: "var(--lh-h1)",
                  letterSpacing: "-0.02em",
                }}
              >
                Self-Assessment
              </h2>
              <p
                className="font-sans text-ink mt-6 mb-0 max-w-[52ch]"
                style={{ fontSize: "var(--fs-h2)", lineHeight: 1.2 }}
              >
                How, concretely, have I developed as a designer this quarter?
              </p>
              <p
                className="font-sans text-ink-soft mt-6 mb-0 max-w-[64ch]"
                style={{ fontSize: "var(--fs-body)" }}
              >
                Five shifts, each one traceable to a specific decision in the
                work above. Not a feeling about progress. A change in how I make
                things.
              </p>

              <ol className="list-none p-0 m-0 mt-12 flex flex-col">
                {developments.map((d) => (
                  <li
                    key={d.n}
                    className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-x-8 gap-y-3 py-8 border-t border-hairline"
                  >
                    <span
                      className="display text-ink"
                      style={{
                        fontWeight: 200,
                        fontSize: "clamp(2rem,3vw,2.75rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {d.n}
                    </span>
                    <div className="max-w-[60ch]">
                      <h3
                        className="font-sans text-ink m-0"
                        style={{ fontSize: "var(--fs-h2)", lineHeight: 1.2 }}
                      >
                        {d.claim}
                      </h3>
                      <p
                        className="font-sans text-ink-soft mt-3 mb-0"
                        style={{ fontSize: "var(--fs-body)" }}
                      >
                        {d.proof}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* closing artifact: the final critique board */}
              <div className="mt-12">
                <PdfArtifact
                  kicker="ARTIFACT / FINAL CRITIQUE"
                  title="Final Critique"
                  caption="A closing artifact that captures the work I chose to stand behind, the critique I received, and the design judgment I developed through the quarter."
                  thumb="/case-studies/quarter/final-critique-thumb.jpg"
                  thumbAlt="First page of the final critique board."
                  href="/case-studies/quarter/final-critique.pdf"
                  meta="PDF · CRITIQUE BOARD · 4.3 MB"
                  fig="fig. 04.1"
                  figCaption="critique board / the work I stood behind and what it drew out"
                />
              </div>

              <div className="mt-12 pt-8 border-t border-ink flex items-start gap-4">
                <Crosshair size={16} className="mt-1.5 shrink-0" />
                <p
                  className="font-sans text-ink m-0 max-w-[54ch]"
                  style={{ fontSize: "var(--fs-h2)", lineHeight: 1.22 }}
                >
                  The notebook is fuller than this page. That is the point.
                  Editing is the design work I got better at this quarter.
                </p>
              </div>
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
              <div className="mono text-ink">001 / BLENDER</div>
              <div className="mono text-ink-soft mt-1">read the full case ↗</div>
            </div>
          </div>
        </motion.article>

        {/* RAIL */}
        <div ref={railRef} className="lg:col-span-2 lg:col-start-11 pt-10">
          <MarginRail
            meta={[
              { label: "SET", value: "QUARTER" },
              { label: "TERM", value: "SPRING 26" },
              { label: "PIECES", value: "003" },
              { label: "FRAME", value: `${activeItem.num} ${activeItem.title}` },
            ]}
            note="A curated feature. The rail tracks the section you're reading."
          />
          {/* in-rail section nav */}
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
