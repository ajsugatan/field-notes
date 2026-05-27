import { Suspense } from "react";
import Manifesto from "@/components/Manifesto";
import Filters from "@/components/Filters";
import HomeFeed from "@/components/HomeFeed";

export default function HomePage() {
  return (
    <div className="bg-bg">
      {/* Masthead */}
      <div className="flex items-center justify-between px-6 md:px-10 py-3">
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">
          Field Notes
        </span>
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">
          AJ Sugatan · Vol. I
        </span>
      </div>

      <div className="h-24" />

      <Manifesto alignment="left" text="I notice things for a living." />

      <div className="h-24" />

      {/* Intro */}
      <div className="grid grid-cols-12 px-6 md:px-10">
        <p className="col-span-12 lg:col-start-3 lg:col-span-5 font-ui font-normal text-ink text-[1.125rem] leading-relaxed m-0 max-w-[52ch]">
          An archive of attention — books, films, songs, scenes from the field,
          alongside the things I made by looking at them long enough. I keep
          this visible because the work always starts here: paying attention to
          something for longer than was strictly required. Updated when
          something earns the entry.
        </p>
      </div>

      <div className="h-16" />

      <Suspense fallback={null}>
        <Filters />
      </Suspense>

      <div className="h-16" />

      <Suspense fallback={null}>
        <HomeFeed />
      </Suspense>

      <div className="h-40" />

      <Manifesto
        alignment="right"
        text="Strategy is just sustained attention, written down. The rest of this page is the writing-down."
      />

      <div className="h-16 flex items-end px-6 md:px-10 pb-6">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
          More entries arrive when something earns the entry
        </span>
      </div>
    </div>
  );
}
