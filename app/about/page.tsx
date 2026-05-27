"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutPage() {
  return (
    <article className="pt-12 md:pt-20 pb-12 max-w-3xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-mono text-[0.72rem] tracking-widest uppercase text-inkSoft/70 mb-6"
      >
        Colophon
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.95] text-ink"
      >
        About the <span className="italic text-ochreDeep">writer</span>,<br />
        and the practice.
      </motion.h1>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-12 ornament font-mono text-[0.7rem] tracking-widest uppercase"
      >
        <span>Identity</span>
      </motion.div>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="dropcap mt-10 font-body text-lg md:text-xl leading-relaxed text-ink"
      >
        I am AJ Sugatan — a designer and strategist who treats research as a
        creative discipline and creative work as a research discipline. I write
        these field notes because I think clearly only when I think on paper,
        and because the projects I most care about tend to disappear into my
        head once they are finished. This site is the small archive that
        prevents that disappearance.
      </motion.p>

      <motion.p
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-8 font-body text-lg leading-relaxed text-inkSoft"
      >
        My work sits at the intersection of strategy, design research, and a
        philosophical art practice I have come to call{" "}
        <span className="italic text-ink">unperforming</span> — the practice
        of refusing performed identity in favor of authentic presence. The
        practice is what informs how I do the strategy. The strategy is what
        keeps the practice honest about the world.
      </motion.p>

      <motion.p
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-6 font-body text-lg leading-relaxed text-inkSoft"
      >
        I am Pacific Islander, a co-founder of a small pop-up food brand
        called Fat F*cks, a Muay Thai practitioner and recreational
        bodybuilder, an occasional DJ, and a person who keeps too many
        notebooks. My consulting background includes engagements at Accenture
        across Google, Workday, Genentech, and Microsoft, and I am beginning
        an Associate Strategist role at Jump Associates in San Mateo this
        summer. Stanford&apos;s MS Design program is the long horizon.
      </motion.p>

      <motion.div
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-14 ornament font-mono text-[0.7rem] tracking-widest uppercase"
      >
        <span>Coordinates</span>
      </motion.div>

      <motion.dl
        custom={7}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 font-body text-base"
      >
        <div className="flex items-start gap-3">
          <MapPin size={18} strokeWidth={1.2} className="mt-1 text-ochreDeep" />
          <div>
            <dt className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
              Located
            </dt>
            <dd className="mt-1">San Diego, soon San Mateo, often Fremont.</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Briefcase size={18} strokeWidth={1.2} className="mt-1 text-ochreDeep" />
          <div>
            <dt className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
              Working
            </dt>
            <dd className="mt-1">
              Associate Strategist, Jump Associates (June 2026).
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <GraduationCap size={18} strokeWidth={1.2} className="mt-1 text-ochreDeep" />
          <div>
            <dt className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
              Studying
            </dt>
            <dd className="mt-1">
              BS Cognitive Science (Design/Interaction), ICAM minor, UCSD.
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail size={18} strokeWidth={1.2} className="mt-1 text-ochreDeep" />
          <div>
            <dt className="font-mono text-[0.7rem] tracking-widest uppercase text-inkSoft/70">
              Correspondence
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:hello@example.com"
                className="link-underline italic"
              >
                hello@example.com
              </a>
            </dd>
          </div>
        </div>
      </motion.dl>

      <motion.div
        custom={8}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-16 ornament font-mono text-[0.7rem] tracking-widest uppercase"
      >
        <span>The Typography</span>
      </motion.div>

      <motion.p
        custom={9}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-8 font-body text-base leading-relaxed text-inkSoft"
      >
        Display type is set in{" "}
        <span className="font-display italic">Fraunces</span> by Undercase
        Type. Body copy is set in{" "}
        <span className="font-body italic">Newsreader</span> by Production
        Type. Metadata is set in{" "}
        <span className="font-mono">JetBrains Mono</span>. The cream is{" "}
        <span className="font-mono">#F1ECDF</span>. The ink is{" "}
        <span className="font-mono">#1A1714</span>. The accent ochre is{" "}
        <span className="font-mono text-ochreDeep">#8E3F12</span>. The grain
        is real and intentional.
      </motion.p>
    </article>
  );
}
