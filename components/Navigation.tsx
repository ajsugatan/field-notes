"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "INDEX" },
  { href: "/about", label: "ABOUT" },
  { href: "/now", label: "NOW" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 md:px-10 py-5">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-ui font-extrabold text-[0.85rem] uppercase tracking-[0.04em] text-ink no-underline"
        >
          FIELD NOTES
        </Link>
        <nav className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{ textDecoration: "none" }}
                className={[
                  "font-ui font-extrabold text-[0.75rem] uppercase tracking-[0.14em] text-ink",
                  "relative pb-px",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-ink",
                  "after:transition-[width] after:duration-200 after:ease-out",
                  active ? "after:w-full" : "after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="hairline mt-5" />
    </header>
  );
}
