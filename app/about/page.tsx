import Image from "next/image";
import Manifesto from "@/components/Manifesto";

const education = [
  {
    range: "2022–2026",
    title: "B.S. Cognitive Science (Design/Interaction)",
    sub: "Minor in ICAM",
    org: "UC San Diego",
  },
];

const experience = [
  {
    range: "Jun 2026–",
    title: "Associate Strategist",
    org: "Jump Associates",
  },
  {
    range: "2023–2026",
    title: "Strategy Engagements",
    sub: "Google, Workday, Genentech, Microsoft",
    org: "Accenture",
  },
  {
    range: "2024–",
    title: "Co-Founder",
    org: "Fat F*cks",
  },
  {
    range: "2023–2025",
    title: "Marketing",
    org: "Vagabond SF",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg">
      <div className="px-6 md:px-10 pt-10 pb-24">
        <Manifesto
          alignment="left"
          text="I build the work backwards from the noticing."
        />

        <div className="h-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-square overflow-hidden bg-black/5">
              <Image
                src="/portrait-placeholder.jpg"
                alt="Alexandra Julia Sugatan — portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-4 space-y-5">
            <p className="font-ui font-normal text-ink text-[1rem] leading-relaxed m-0">
              Alexandra Julia Sugatan is a designer and strategist who treats research as a
              creative discipline and creative work as a research discipline.
              Pacific Islander, co-founder of Fat F*cks, Muay Thai practitioner,
              occasional DJ, keeper of too many notebooks.
            </p>
            <p className="font-ui font-normal text-ink text-[1rem] leading-relaxed m-0">
              She studies Cognitive Science at UC San Diego with a minor in ICAM,
              and joins Jump Associates as Associate Strategist in June 2026. Prior
              strategy engagements at Accenture across Google, Workday, Genentech,
              and Microsoft.
            </p>
            <p className="font-ui font-normal text-ink text-[1rem] leading-relaxed m-0">
              Her work is downstream of a practice she calls{" "}
              <em>unperforming</em> — the refusal of performed identity in favor
              of authentic presence. The practice is what informs the strategy.
              The strategy is what keeps the practice honest about the world.
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink mt-8">
              <a
                href="mailto:hello@ajsugatan.com"
                className="text-ink hover:underline"
                style={{ textDecoration: "none" }}
              >
                hello@ajsugatan.com
              </a>
            </p>
          </div>

          {/* Timeline */}
          <div className="lg:col-start-7 lg:col-span-6 space-y-10">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute mb-4">
                Education
              </p>
              <div className="space-y-5">
                {education.map((item, i) => (
                  <div key={i} className="grid grid-cols-[6rem_1fr] gap-x-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-mute pt-px">
                      {item.range}
                    </span>
                    <div>
                      <p className="font-ui font-extrabold text-ink text-[1rem] m-0 leading-snug">
                        {item.title}
                      </p>
                      {item.sub && (
                        <p className="font-ui font-normal text-mute text-[0.85rem] m-0">
                          {item.sub}
                        </p>
                      )}
                      <p className="font-ui font-normal text-ink text-[0.85rem] m-0">
                        {item.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute mb-4">
                Experience
              </p>
              <div className="space-y-5">
                {experience.map((item, i) => (
                  <div key={i} className="grid grid-cols-[6rem_1fr] gap-x-4">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-mute pt-px">
                      {item.range}
                    </span>
                    <div>
                      <p className="font-ui font-extrabold text-ink text-[1rem] m-0 leading-snug">
                        {item.title}
                      </p>
                      {item.sub && (
                        <p className="font-ui font-normal text-mute text-[0.85rem] m-0">
                          {item.sub}
                        </p>
                      )}
                      <p className="font-ui font-normal text-ink text-[0.85rem] m-0">
                        {item.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-24" />

        <Manifesto
          alignment="right"
          text="I trust the practice more than the project. This site is the practice."
        />
      </div>
    </div>
  );
}
