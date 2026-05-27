"use client";

import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { entries, type EntryCategory, type FieldEntry } from "@/lib/entries";
import NoteEntry from "./entries/NoteEntry";
import QuoteEntry from "./entries/QuoteEntry";
import TrackEntry from "./entries/TrackEntry";
import FrameEntry from "./entries/FrameEntry";
import ArtifactEntry from "./entries/ArtifactEntry";
import EssayEntry from "./entries/EssayEntry";
import PairingEntry from "./entries/PairingEntry";

function renderEntry(entry: FieldEntry) {
  switch (entry.kind) {
    case "note":
      return <NoteEntry key={entry.index} entry={entry} />;
    case "quote":
      return <QuoteEntry key={entry.index} entry={entry} />;
    case "track":
      return <TrackEntry key={entry.index} entry={entry} />;
    case "frame":
      return <FrameEntry key={entry.index} entry={entry} />;
    case "artifact":
      return <ArtifactEntry key={entry.index} entry={entry} />;
    case "essay":
      return <EssayEntry key={entry.index} entry={entry} />;
    case "pairing":
      return <PairingEntry key={entry.index} entry={entry} />;
  }
}

export default function HomeFeed() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "ALL";

  const filtered =
    mode === "ALL"
      ? entries
      : entries.filter((e) => e.category === (mode as EntryCategory));

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {filtered.map((entry) => renderEntry(entry))}
      </motion.div>
    </AnimatePresence>
  );
}
