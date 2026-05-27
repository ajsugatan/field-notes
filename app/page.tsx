"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Pen } from "lucide-react";
import { fieldNotes } from "@/lib/notes";

const headline = [
  "A",
  "journal",
  "of",
  "observations,",
  "in",
  "the",
  "field",
  "of",
  "being",
  "alive",
  "and",
  "making",
  "things.",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero / standfirst */}
      <section className="pt-12 md:pt-24 pb-16 md:pb-28 relative">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.05 }}
            className="font-mono text-[0.72rem] tracking-widest uppercase text-inkSoft/70 mb-6"
          >
            Vol. I &middot; AJ Sugatan &middot; San Diego, CA
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display tracking-tightest text-[2.7rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-ink"
          >
            {headline.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`inline-block mr-[0.25em] ${
                  w === "field" || w === "alive"
                    ? "italic text-ochreDeep"
                    : ""
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl font-body text-lg leading-relaxed text-inkSoft"
          >
            What follows is a small archive of work — strategy, research, brand,
            speculation, and a private practice called{" "}
            <span className="italic">unperforming</span>. Each note is an
            attempt to think clearly in writing about a thing I made or sat
            with in the field.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-10 ornament font-mono text-[0.7rem] tracking-widest uppercase"
          >
            <span>The Index</span>
          </motion.div>
        </div>
      </section>

      {/* Index */}
      <section className="pb-16">
        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {fieldNotes.map((note, i) => (
            <motion.li
              key={note.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.95 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/notes/${note.slug}`}
                className="group block py-7 md:py-9"
              >
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-2 font-mono text-[0.72rem] tracking-widest uppercase text-inkSoft/70 tabular-nums">
                    {note.number}
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tightest leading-[1.05] text-ink group-hover:text-ochreDeep transition-colors duration-500">
                      {note.title}
                    </h2>
                    <p className="mt-2 font-body italic text-inkSoft text-base md:text-lg">
                      {note.subtitle}
                    </p>
                  </div>
                  <div className="md:col-span-2 font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
                    {note.dateRange}
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className="text-inkSoft/60 group-hover:text-ochreDeep group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    />
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Closing note */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.6 }}
        className="max-w-2xl mx-auto pt-12 pb-4 text-center"
      >
        <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
          <Pen size={12} strokeWidth={1.2} />
          <span>More notes are being written. Return as the work changes.</span>
        </div>
      </motion.section>
    </div>
  );
}
