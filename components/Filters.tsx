"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CATEGORIES = [
  "ALL",
  "READING",
  "LISTENING",
  "WATCHING",
  "LOOKING",
  "OBSERVING",
  "MAKING",
] as const;

type Category = (typeof CATEGORIES)[number];

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = (searchParams.get("mode") ?? "ALL") as Category;

  function handleSelect(cat: Category) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "ALL") {
      params.delete("mode");
    } else {
      params.set("mode", cat);
    }
    const qs = params.toString();
    router.push(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 px-6 md:px-10">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            type="button"
            className={[
              "font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink",
              "bg-transparent border-none cursor-pointer p-0 pb-px",
              "relative",
              "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-ink",
              "after:transition-[width] after:duration-200 after:ease-out",
              isActive ? "after:w-full" : "after:w-0",
            ].join(" ")}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
