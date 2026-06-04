"use client";

import Link from "next/link";
import { useRail } from "./rail/RailContext";
import Tag from "./Tag";
import type { Project } from "@/lib/projects";

export default function IndexRow({ project }: { project: Project }) {
  const { setPreview } = useRail();
  const clickable = Boolean(project.href) && !project.locked;

  const enter = () => setPreview(project.rail);
  const leave = () => setPreview(null);

  const body = (
    <div
      className="group grid grid-cols-[2.25rem_1fr] md:grid-cols-[3rem_1fr_8.5rem_4rem_1.5rem] items-baseline gap-x-4 gap-y-1 py-5 border-b border-hairline transition-colors duration-200 hover:border-red"
    >
      {/* ## */}
      <span className="mono text-ink-soft group-hover:text-red transition-colors">
        {project.id}
      </span>

      {/* TITLE + blurb */}
      <div className="min-w-0">
        <span
          className="display lowercase text-ink transition-colors"
          style={{ fontSize: "var(--fs-h2)", fontWeight: 200, lineHeight: 1.15 }}
        >
          {project.short}
        </span>
        <p
          className="font-sans text-ink-soft mt-1 mb-0 max-w-[52ch]"
          style={{ fontSize: "var(--fs-small)" }}
        >
          {project.blurb}
        </p>
      </div>

      {/* TYPE */}
      <div className="hidden md:block self-baseline pt-1">
        <Tag>{project.type}</Tag>
      </div>

      {/* YEAR */}
      <span className="hidden md:block mono text-ink-soft pt-1">{project.year}</span>

      {/* ↗ / lock */}
      <span className="hidden md:flex justify-end pt-1">
        {clickable ? (
          <span className="mono text-ink group-hover:text-red transition-colors">↗</span>
        ) : (
          <span className="mono text-ink-soft text-[0.65rem] text-right leading-tight">
            {project.lockNote}
          </span>
        )}
      </span>

      {/* mobile: type + status inline under blurb */}
      <div className="md:hidden col-start-2 flex items-center gap-3 mt-1">
        <Tag>{project.type}</Tag>
        <span className="mono text-ink-soft">{project.year}</span>
        {clickable ? (
          <span className="mono text-ink ml-auto">↗</span>
        ) : (
          <span className="mono text-ink-soft ml-auto">{project.lockNote}</span>
        )}
      </div>
    </div>
  );

  if (clickable && project.href) {
    return (
      <Link
        href={project.href}
        className="block no-underline"
        onMouseEnter={enter}
        onMouseLeave={leave}
        onFocus={enter}
        onBlur={leave}
      >
        {body}
      </Link>
    );
  }

  return (
    <div
      className="block cursor-default"
      onMouseEnter={enter}
      onMouseLeave={leave}
      aria-disabled
    >
      {body}
    </div>
  );
}
