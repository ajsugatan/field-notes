import Manifesto from "@/components/Manifesto";
import { formatIndex } from "@/lib/entries";

const items = [
  {
    index: 1,
    label: "Preparing",
    body: "For the start of my Associate Strategist role at Jump Associates in June. Reading Dev Patnaik, thinking about needfinding, building a private onboarding doc.",
  },
  {
    index: 2,
    label: "Finishing",
    body: "My final quarter at UCSD. COGS 102C — an ethnographic study of Sun God Lawn — has been the most alive piece of academic work I have done.",
  },
  {
    index: 3,
    label: "Designing",
    body: "Fieldwork.ai — an early concept for an AI-powered research intelligence tool aimed at innovation consultancies. Drafting the product roadmap alongside the Jump timeline.",
  },
  {
    index: 4,
    label: "Training",
    body: "Muay Thai twice a week, lifting four. Out of competition prep, back to maintenance and play.",
  },
  {
    index: 5,
    label: "Listening",
    body: "Mostly downtempo electronic and Mitski. Occasionally still DJ-ing for friends.",
  },
  {
    index: 6,
    label: "Drinking",
    body: "Black coffee at the same desk most mornings. The notebook is open before the laptop.",
  },
];

export default function NowPage() {
  return (
    <div className="bg-bg">
      <div className="px-6 md:px-10 pt-10 pb-24">
        <Manifesto
          alignment="left"
          text="What I am doing right now, written down so I cannot pretend otherwise."
        />

        <div className="h-20" />

        <div>
          {items.map((item) => (
            <article key={item.index} className="py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-3">
                <div className="lg:col-span-2">
                  <span
                    className="font-display font-black text-ink leading-none display-tight block"
                    style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                  >
                    {formatIndex(item.index)}
                  </span>
                </div>
                <div className="lg:col-span-7 space-y-2">
                  <p className="font-ui font-extrabold uppercase tracking-[0.06em] text-ink text-[0.8rem] m-0">
                    {item.label}
                  </p>
                  <p className="font-ui font-normal text-ink text-[1rem] leading-relaxed m-0 max-w-[52ch]">
                    {item.body}
                  </p>
                </div>
              </div>
              <div className="hairline mt-14" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
