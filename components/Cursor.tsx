"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement;
      const isLink =
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "link";
      dot.classList.toggle("is-link", !!isLink);
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.22;
      dotY += (mouseY - dotY) * 0.22;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}
