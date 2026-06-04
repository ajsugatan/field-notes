"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnnotatedImage, { type Callout } from "@/components/AnnotatedImage";
import Specimen from "@/components/Specimen";
import Tag from "@/components/Tag";
import FigCaption from "@/components/FigCaption";
import CaseSection from "@/components/case/CaseSection";
import PrinciplesBlock, { type Principle } from "@/components/case/PrinciplesBlock";
import BeforeAfter from "@/components/case/BeforeAfter";
import Collapsible from "@/components/case/Collapsible";
import MarginRail from "@/components/rail/MarginRail";

const sections = [
  { id: "field-conditions", num: "00", title: "FIELD CONDITIONS" },
  { id: "threshold", num: "01", title: "THE THRESHOLD PROBLEM" },
  { id: "observation", num: "02", title: "OBSERVATION" },
  { id: "inventory", num: "03", title: "THE INTIMIDATION INVENTORY" },
  { id: "principles", num: "04", title: "PRINCIPLES" },
  { id: "redesign", num: "05", title: "THE REDESIGN" },
  { id: "cost", num: "06", title: "WHAT IT COST" },
  { id: "field-note", num: "07", title: "FIELD NOTE" },
];

const inventoryCallouts: Callout[] = [
  { n: 1, dot: [22, 24], label: [54, 10], text: "47 simultaneous controls", align: "left" },
  { n: 2, dot: [50, 50], label: [80, 40], text: "no primary action", align: "left" },
  { n: 3, dot: [83, 30], label: [60, 16], text: "9 stacked property tabs", align: "right" },
  { n: 4, dot: [60, 66], label: [34, 90], text: "eye lands nowhere · 1.2s to first fixation", align: "right" },
  { n: 5, dot: [30, 78], label: [6, 64], text: "destructive actions one click from creative ones", align: "left" },
];

const heroCallouts: Callout[] = [
  { n: 1, dot: [20, 26], label: [52, 12], text: "47 controls", align: "left" },
  { n: 2, dot: [52, 52], label: [80, 46], text: "no primary action", align: "left" },
  { n: 3, dot: [70, 74], label: [40, 92], text: "the eye lands nowhere", align: "right" },
];

const principles: Principle[] = [
  {
    n: "P1",
    title: "Progressive disclosure of power",
    body: "Show the smallest set of controls that still tells the truth about what the tool can do. Reveal the rest the moment the work reaches for it — not before.",
  },
  {
    n: "P2",
    title: "One obvious first action",
    body: "Every first screen needs a single place that is clearly where you begin. The second action is earned by finishing the first, not offered alongside forty others.",
  },
  {
    n: "P3",
    title: "Density earned, not given",
    body: "A wall of controls is a reward for competence, not a toll at the door. The expert's dense workspace should assemble itself as the newcomer becomes the expert.",
  },
  {
    n: "P4",
    title: "Never pretend the room is small",
    body: "Don't hide the depth to look approachable. Lying about the room behind the door breaks trust the second someone opens it and finds the other 40 controls waiting.",
  },
];

export default function BlenderCase() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const activeSection = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <div className="mx-auto max-w-page px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-6">
        {/* CONTENT */}
        <motion.article
          className="lg:col-span-9 lg:col-start-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* breadcrumb */}
          <div className="pt-12 mono text-ink-soft flex items-center gap-3">
            <Link href="/" className="no-underline hover:text-red text-ink-soft">
              INDEX
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/studies" className="no-underline hover:text-red text-ink-soft">
              STUDIES
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-red">001</span>
          </div>

          {/* HERO */}
          <header className="pt-8 pb-12">
            <h1
              className="font-sans font-bold text-ink m-0"
              style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", letterSpacing: "-0.02em" }}
            >
              BLENDER — NOTES ON AN INTIMIDATING ROOM
            </h1>
            <p
              className="font-sans text-ink-soft mt-5 mb-0 max-w-[60ch]"
              style={{ fontSize: "var(--fs-h2)", lineHeight: 1.3 }}
            >
              An interface field study of how creative software greets the people it
              wasn&apos;t built for.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Tag>STUDY</Tag>
              <span className="mono text-ink-soft">2026</span>
              <span className="mono text-ink-soft">·</span>
              <span className="mono text-ink-soft">INTERFACE FIELD STUDY</span>
            </div>

            <div className="mt-10">
              <AnnotatedImage
                callouts={heroCallouts}
                ratio="16 / 9"
                caption="fig. 01.0 — the default screen, audited on first open"
              >
                <Specimen kind="audit" />
              </AnnotatedImage>
            </div>
          </header>

          {/* THESIS */}
          <section className="py-12 border-t border-hairline">
            <p
              className="font-sans text-ink m-0 max-w-[26ch] md:max-w-[20ch] float-none"
              style={{ fontSize: "var(--fs-h1)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            >
              A tool&apos;s first screen is a verdict on who belongs.
            </p>
            <p
              className="font-sans text-ink-soft mt-6 mb-0 max-w-[60ch]"
              style={{ fontSize: "var(--fs-h2)", lineHeight: 1.35 }}
            >
              Blender&apos;s verdict, delivered in 47 simultaneous controls, is{" "}
              <span className="text-red">&ldquo;not you.&rdquo;</span> This is an attempt
              to change the verdict at the threshold — without lying about the room behind
              it.
            </p>
          </section>

          {/* 00 FIELD CONDITIONS */}
          <CaseSection id="field-conditions" num="00" title="FIELD CONDITIONS">
            <div className="figframe aspect-[16/9] bg-paper-2/40 mb-3">
              <Specimen kind="default" />
            </div>
            <FigCaption text="fig. 00.1 — Blender 4.x, default screen, untouched" />
            <div className="mt-8 space-y-5 font-sans text-ink" style={{ fontSize: "var(--fs-body)" }}>
              <p className="m-0">
                Open Blender for the first time and it shows you everything it can do at
                once. The default screen holds a 3D viewport, a properties editor of nine
                stacked tabs, an outliner, a timeline, and a header menu — roughly 47
                interactive controls before you have decided to make a single thing.
              </p>
              <p className="m-0">
                None of those controls is wrong. Each one is there because a working artist
                needs it on the third day. The problem is the first day, when all 47 arrive
                at the same volume and nothing on the screen says where to start.
              </p>
            </div>
          </CaseSection>

          {/* 01 THRESHOLD */}
          <CaseSection id="threshold" num="01" title="THE THRESHOLD PROBLEM">
            <div className="space-y-5 font-sans text-ink" style={{ fontSize: "var(--fs-body)" }}>
              <p className="m-0">
                Every interface makes one decision before you make any: it decides whether
                you are the kind of person it was built for. That decision is the threshold,
                and it is made in the first few seconds, before a feature is touched.
              </p>
              <p className="m-0 font-sans text-ink" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.3 }}>
                Onboarding is not a tutorial bolted onto a product. It is the product,
                deciding out loud who is allowed in.
              </p>
              <p className="m-0">
                Blender&apos;s threshold sorts quickly. In the first sessions I ran, three of
                five first-time users moved to close the window inside ninety seconds — not
                because the software failed, but because it never told them they were
                welcome to begin.
              </p>
            </div>
          </CaseSection>

          {/* 02 OBSERVATION */}
          <CaseSection id="observation" num="02" title="OBSERVATION" wide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="mono text-ink-soft mb-4">5 SESSIONS · FIRST-TIME USERS · THINK-ALOUD</p>
                <ul className="list-none p-0 m-0 space-y-3">
                  {[
                    ["00:00:09", "cursor enters viewport, exits within 2s"],
                    ["00:00:41", "right-clicks the cube, gets a menu, closes it"],
                    ["00:01:02", "“where do I even…” — P2, unprompted"],
                    ["00:01:18", "opens the Add menu, scrolls it, gives up"],
                    ["00:02:30", "P4 leaves for YouTube: “blender for beginners”"],
                    ["00:04:12", "P5 finds the cube delete, exhales, keeps going"],
                  ].map(([t, note]) => (
                    <li key={t} className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline">
                      <span className="mono text-red">{t}</span>
                      <span className="mono normal-case tracking-mono text-ink leading-snug">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <AnnotatedImage
                  callouts={[
                    { n: 1, dot: [50, 48], label: [78, 30], text: "1.2s to first fixation — the eye never settles", align: "left" },
                  ]}
                  ratio="4 / 3"
                  caption="fig. 02.1 — failure moment: nowhere obvious to look"
                >
                  <Specimen kind="default" />
                </AnnotatedImage>
              </div>
            </div>
          </CaseSection>

          {/* 03 INVENTORY */}
          <CaseSection id="inventory" num="03" title="THE INTIMIDATION INVENTORY" wide>
            <p className="font-sans text-ink-soft mb-8 max-w-[60ch]" style={{ fontSize: "var(--fs-body)" }}>
              The audit, counted control by control. Every red mark is a thing the screen
              asks of you before you have asked anything of it.
            </p>
            <AnnotatedImage
              callouts={inventoryCallouts}
              ratio="16 / 9"
              caption="fig. 03.1 — the intimidation inventory, 47 controls catalogued"
            >
              <Specimen kind="audit" />
            </AnnotatedImage>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                ["47", "interactive controls at rest"],
                ["00", "labelled primary actions"],
                ["1.2s", "to first eye fixation"],
                ["09", "stacked property tabs"],
              ].map(([n, label]) => (
                <div key={label} className="border-t border-hairline pt-3">
                  <div className="font-sans text-ink" style={{ fontSize: "var(--fs-h1)", lineHeight: 1 }}>
                    {n}
                  </div>
                  <div className="mono normal-case tracking-mono text-ink-soft mt-2">{label}</div>
                </div>
              ))}
            </div>
          </CaseSection>

          {/* 04 PRINCIPLES */}
          <CaseSection id="principles" num="04" title="PRINCIPLES" wide>
            <PrinciplesBlock principles={principles} />
          </CaseSection>

          {/* 05 REDESIGN */}
          <CaseSection id="redesign" num="05" title="THE REDESIGN" wide>
            <p className="font-sans text-ink-soft mb-8 max-w-[60ch]" style={{ fontSize: "var(--fs-body)" }}>
              The redesigned default screen, first — then the pairs that got it there, each
              mapped to the principle it answers.
            </p>
            <div className="space-y-2">
              <BeforeAfter
                before={<Specimen kind="audit" />}
                after={<Specimen kind="calm" />}
                beforeCaption="fig. 05.0a — 47 controls, no entry point"
                afterCaption="fig. 05.0b — one obvious first action, depth on request"
              />
              <BeforeAfter
                principle="P2 — ONE OBVIOUS FIRST ACTION"
                before={<Specimen kind="default" />}
                after={<Specimen kind="calm" />}
                beforeCaption="fig. 05.1a — every menu at equal weight"
                afterCaption="fig. 05.1b — a single Add Object, sized to be found"
              />
              <BeforeAfter
                principle="P1 — PROGRESSIVE DISCLOSURE OF POWER"
                before={<Specimen kind="grid" />}
                after={<Specimen kind="rule" />}
                beforeCaption="fig. 05.2a — nine property tabs, always open"
                afterCaption="fig. 05.2b — tabs assemble as the work asks for them"
              />
            </div>
          </CaseSection>

          {/* 06 WHAT IT COST */}
          <CaseSection id="cost" num="06" title="WHAT IT COST">
            <p className="font-sans text-ink-soft mb-6 max-w-[60ch]" style={{ fontSize: "var(--fs-body)" }}>
              No redesign is free. Three honest tradeoffs this one makes.
            </p>
            <div>
              <Collapsible summary="The expert pays one click to reach the full toolset">
                Power that used to be visible at rest now lives one disclosure deep. For the
                artist on their third day, that is a real cost — measured, it adds a single
                click to a handful of frequent actions. The bet is that protecting the first
                day is worth taxing the third.
              </Collapsible>
              <Collapsible summary="Hiding controls means teaching where they went">
                A calmer default only works if the path back to density is obvious. Move a
                control and you inherit the job of pointing at its new home, or you have
                traded intimidation for a different kind of lost.
              </Collapsible>
              <Collapsible summary="A quieter screen photographs as less &lsquo;powerful&rsquo;">
                Dense interfaces read as capable in a screenshot. A restrained default risks
                looking like it does less, even when it does exactly as much — a marketing
                cost paid by the people who never have to feel it.
              </Collapsible>
            </div>
          </CaseSection>

          {/* 07 FIELD NOTE */}
          <CaseSection id="field-note" num="07" title="FIELD NOTE">
            <p className="font-sans text-ink m-0 max-w-[62ch]" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.4 }}>
              This started the way everything in this archive starts — as something I
              couldn&apos;t stop looking at. A friend opened Blender, flinched, and closed
              it, and I wanted to know exactly what the screen had said to make them flinch.
              The redesign is just what happened after I looked long enough to answer that.
              The room was never the problem. The verdict at the door was.
            </p>
            <Link href="/" className="link mono inline-block mt-8">
              ← BACK TO THE INDEX
            </Link>
          </CaseSection>

          {/* NEXT */}
          <div className="py-12 border-t border-ink flex items-center justify-between gap-4">
            <span className="mono text-ink-soft">NEXT</span>
            <div className="text-right">
              <div className="mono text-ink">002 / TIDEWATCH</div>
              <div className="mono text-ink-soft mt-1">study in progress ↗</div>
            </div>
          </div>
        </motion.article>

        {/* RAIL */}
        <div className="lg:col-span-2 lg:col-start-11 pt-12">
          <MarginRail
            meta={[
              { label: "CASE", value: "001" },
              { label: "SECTION", value: `${activeSection.num} ${activeSection.title.split(" ")[0]}` },
              { label: "TYPE", value: "STUDY" },
              { label: "YEAR", value: "2026" },
            ]}
            note="The rail tracks the section you're reading. The readout reports the cursor."
          />
          {/* in-rail section nav */}
          <nav className="hidden lg:flex flex-col gap-1.5 mt-6 border-t border-hairline pt-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="mono no-underline transition-colors"
                style={{ color: s.id === active ? "var(--red)" : "var(--ink-soft)" }}
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
