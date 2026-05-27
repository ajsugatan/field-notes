"use client";

import { motion } from "framer-motion";
import { Dumbbell, BookOpen, Briefcase, Sparkles, Music, Coffee } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    label: "Preparing",
    body: "For the start of my Associate Strategist role at Jump Associates in June. Reading Dev Patnaik, thinking about needfinding, building a private onboarding doc.",
  },
  {
    icon: BookOpen,
    label: "Finishing",
    body: "My final quarter at UCSD. COGS 102C — an ethnographic study of Sun God Lawn — has been the most alive piece of academic work I have done.",
  },
  {
    icon: Sparkles,
    label: "Designing",
    body: "Fieldwork.ai — an early concept for an AI-powered research intelligence tool aimed at innovation consultancies. Drafting the product roadmap alongside the Jump timeline.",
  },
  {
    icon: Dumbbell,
    label: "Training",
    body: "Muay Thai twice a week, lifting four. Out of competition prep, back to maintenance and play.",
  },
  {
    icon: Music,
    label: "Listening",
    body: "Mostly downtempo electronic and Mitski. Occasionally still DJ-ing for friends.",
  },
  {
    icon: Coffee,
    label: "Drinking",
    body: "Black coffee at the same desk most mornings. The notebook is open before the laptop.",
  },
];

export default function NowPage() {
  return (
    <article className="pt-12 md:pt-20 pb-16 max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-mono text-[0.72rem] tracking-widest uppercase text-inkSoft/70 mb-6"
      >
        Updated May 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.95] text-ink"
      >
        What I am <span className="italic text-ochreDeep">doing</span> now.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 max-w-xl font-body text-lg leading-relaxed text-inkSoft"
      >
        A page in the spirit of Derek Sivers&apos; <em>nownownow</em>: a
        snapshot of the projects, practices, and small rituals that currently
        have my attention. Updated when the answer changes.
      </motion.p>

      <div className="mt-14 ornament font-mono text-[0.7rem] tracking-widest uppercase">
        <span>Currently</span>
      </div>

      <ul className="mt-12 space-y-10">
        {items.map(({ icon: Icon, label, body }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-[auto_1fr] gap-5 md:gap-7"
          >
            <Icon size={22} strokeWidth={1.2} className="mt-1.5 text-ochreDeep" />
            <div>
              <div className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70 mb-2">
                {label}
              </div>
              <p className="font-body text-lg leading-relaxed text-ink">
                {body}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="mt-20 font-display italic text-2xl md:text-3xl text-inkSoft text-center leading-snug"
      >
        &ldquo;The present is the only place anything has ever happened.&rdquo;
      </motion.p>
    </article>
  );
}
