"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Crosshair from "@/components/Crosshair";

const nav = [
  { href: "/", label: "index", n: "01" },
  { href: "/studies", label: "studies", n: "02" },
  { href: "/artifacts", label: "artifacts", n: "03" },
  { href: "/notes", label: "field notes", n: "04" },
  { href: "/ethnographer", label: "ethnographer", n: "05" },
  { href: "mailto:ajsugatann@gmail.com", label: "contact", n: "06" },
];

export default function SystemBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock scroll + close on Escape while the overlay is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* fixed top bar — mix-blend so the marks invert over any field */}
      <header
        className="fixed inset-x-0 top-0 z-40 flex items-start justify-between mix-blend-difference"
        style={{ padding: "clamp(16px,2.2vw,26px) var(--pm)", color: "#fff" }}
      >
        <Link
          href="/"
          aria-label="Field Notes — an archive of attention"
          className="flex items-start gap-1.5 no-underline"
        >
          <span
            className="font-bold leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(18px,1.8vw,26px)" }}
          >
            field&nbsp;notes
          </span>
          <span className="text-[0.42em] font-bold leading-none">™</span>
          <Crosshair size={11} className="mt-[0.2em]" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open index"
          aria-expanded={open}
          className="flex cursor-pointer flex-col items-end gap-[6px] border-0 bg-transparent p-0"
        >
          <span className="block h-[2.5px] w-[34px] bg-current" />
          <span className="block h-[2.5px] w-[24px] bg-current" />
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]">
            Index
          </span>
        </button>
      </header>

      {/* full-screen overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-white"
          style={{ padding: "clamp(16px,2.2vw,26px) var(--pm) var(--pm)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Index"
        >
          <div className="flex items-start justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-start gap-1.5 no-underline"
            >
              <span
                className="font-bold leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: "clamp(18px,1.8vw,26px)" }}
              >
                field&nbsp;notes
              </span>
              <span className="text-[0.42em] font-bold">™</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close index"
              className="cursor-pointer border-0 bg-transparent p-0 leading-[0.7]"
              style={{ fontSize: "clamp(28px,3vw,42px)" }}
            >
              ×
            </button>
          </div>

          <nav className="my-auto flex flex-col gap-[clamp(4px,1vh,12px)]">
            {nav.map(({ href, label, n }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : href.startsWith("/") && pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="display flex items-center gap-[0.4em] no-underline"
                  style={{
                    fontWeight: 200,
                    fontSize: "clamp(38px,8vw,118px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    opacity: active ? 1 : undefined,
                  }}
                >
                  <span className="mt-[0.5em] self-start text-[0.18em] tracking-[0.1em]">
                    {n}
                  </span>
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mono flex justify-between gap-5 normal-case tracking-[0.1em]">
            <span>{site.tagline}</span>
            <span>{site.email}</span>
          </div>
        </div>
      )}
    </>
  );
}
