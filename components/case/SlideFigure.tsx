"use client";

import { motion } from "framer-motion";

// A single Figma-exported case-study slide, rendered full-bleed inside the
// editorial frame. SVGs are served as-is (vector preserved, never rasterized
// or recolored) via a lazy <img>; each slide carries a mono fig-caption and
// accessible alt text.
export default function SlideFigure({
  src,
  alt,
  fig,
  caption,
  priority = false,
  width = 1440,
  height = 1024,
}: {
  src: string;
  alt: string;
  fig: string;
  caption: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <motion.figure
      className="m-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 0.84, 0.3, 1] }}
    >
      <div className="figframe bg-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="block w-full h-auto"
        />
      </div>
      <figcaption className="flex items-baseline gap-3 mt-3">
        <span className="mono text-ink">{fig}</span>
        <span className="mono text-ink-soft normal-case tracking-mono">
          {caption}
        </span>
      </figcaption>
    </motion.figure>
  );
}
